"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

const GHOST_TEARS = "GHOST-TEARS".split("");

type ChallengeWordResult = {
  success: boolean;
  error?: string;
  game?: any;
};

export async function challengeWord(
  gameId: string,
  challengingPlayerId: string
): Promise<ChallengeWordResult> {
  try {
    // 1. Get current game state
    const game = await prisma.game.findUnique({
      where: { id: gameId },
      include: {
        player1: true,
        player2: true,
      },
    });

    if (!game) {
      return {
        success: false,
        error: "Game not found",
      };
    }

    // 2. Validate game state
    if (game.status !== GameStatus.PLAYING) {
      return {
        success: false,
        error: "Game is not in playing state",
      };
    }

    if (game.currentTurn !== challengingPlayerId) {
      return {
        success: false,
        error: "Not your turn",
      };
    }

    if (!game.currentWord) {
      return {
        success: false,
        error: "No word to challenge",
      };
    }

    // 3. Get word category
    const wordCategory = await prisma.wordCategory.findUnique({
      where: { name: game.wordListCategory },
    });

    if (!wordCategory) {
      return {
        success: false,
        error: "Word category not found",
      };
    }

    // 4. Create move and update game in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Validate the word against the category (case-insensitive)
      const submittedWord = game.currentWord.toLowerCase();
      const isWordValid = wordCategory.words.includes(submittedWord);

      // Create the move
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: challengingPlayerId,
          moveType: MoveType.WORD_CHALLENGED,
          word: game.currentWord,
          challengeStatus: isWordValid
            ? ChallengeStatus.VALID
            : ChallengeStatus.INVALID,
        },
      });

      // Calculate who gets the tear and who wins
      const isPlayer1Challenging = challengingPlayerId === game.player1Id;
      const challengedPlayerId = isPlayer1Challenging
        ? game.player2Id!
        : game.player1Id;

      // If word is valid:
      // - Challenged player wins (because their word was valid)
      // - Challenger gets tear (because they challenged a valid word)
      // If word is invalid:
      // - Challenger wins (because they caught an invalid word)
      // - Challenged player gets tear (because they submitted an invalid word)
      const winnerId = isWordValid ? challengedPlayerId : challengingPlayerId;

      // Get the next letter for the player who gets the tear
      const nextLetter = isWordValid
        ? GHOST_TEARS[
            isPlayer1Challenging
              ? game.player1GhostTears.length
              : game.player2GhostTears.length
          ]
        : GHOST_TEARS[
            isPlayer1Challenging
              ? game.player2GhostTears.length
              : game.player1GhostTears.length
          ];

      console.log("Challenge Word Debug:", {
        isPlayer1Challenging,
        challengedPlayerId,
        isWordValid,
        winnerId,
        nextLetter,
      });

      // Update game state
      const updatedGame = await tx.game.update({
        where: { id: gameId },
        data: {
          status: GameStatus.PLAYING,
          currentWord: "", // Reset current word
          currentTurn: winnerId, // Turn goes to the winner
          player1GhostTears:
            isWordValid && isPlayer1Challenging
              ? [...game.player1GhostTears, nextLetter]
              : !isWordValid && !isPlayer1Challenging
              ? [...game.player1GhostTears, nextLetter]
              : game.player1GhostTears,
          player2GhostTears:
            isWordValid && !isPlayer1Challenging
              ? [...game.player2GhostTears, nextLetter]
              : !isWordValid && isPlayer1Challenging
              ? [...game.player2GhostTears, nextLetter]
              : game.player2GhostTears,
        },
        include: {
          player1: true,
          player2: true,
        },
      });

      // Check if any player has collected all letters
      const player1HasAllLetters =
        updatedGame.player1GhostTears.length === GHOST_TEARS.length;
      const player2HasAllLetters =
        updatedGame.player2GhostTears.length === GHOST_TEARS.length;

      // If a player has collected all letters, end the game
      if (player1HasAllLetters || player2HasAllLetters) {
        const finalGame = await tx.game.update({
          where: { id: gameId },
          data: {
            winnerId: player1HasAllLetters ? game.player2Id! : game.player1Id, // The player who didn't collect all letters wins
          },
          include: {
            player1: true,
            player2: true,
          },
        });
        return { move, game: finalGame };
      }

      return { move, game: updatedGame };
    });

    // 5. Sync game state
    await syncGame(result.game);

    return {
      success: true,
      game: result.game,
    };
  } catch (error) {
    console.error("Error challenging word:", error);
    return {
      success: false,
      error: "Failed to challenge word. Please try again.",
    };
  }
}
