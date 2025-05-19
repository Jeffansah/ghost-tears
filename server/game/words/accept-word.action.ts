"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

const GHOST_TEARS = "GHOST-TEARS".split("");

type AcceptWordResult = {
  success: boolean;
  error?: string;
  game?: any;
};

export async function acceptWord(
  gameId: string,
  acceptingPlayerId: string
): Promise<AcceptWordResult> {
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

    if (game.currentTurn !== acceptingPlayerId) {
      return {
        success: false,
        error: "Not your turn",
      };
    }

    if (!game.currentWord) {
      return {
        success: false,
        error: "No word to accept",
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
      // Create the move
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: acceptingPlayerId,
          moveType: MoveType.WORD_PASSED,
          word: game.currentWord,
          challengeStatus: ChallengeStatus.PASSED,
        },
      });

      // Determine which player gets the tear
      const isPlayer1Accepting = acceptingPlayerId === game.player1Id;
      const submittingPlayerId = isPlayer1Accepting
        ? game.player2Id!
        : game.player1Id;

      // When accepting a word:
      // - The accepting player gets the tear (because they accepted a valid word)
      // - The turn goes to the submitting player (because they submitted a valid word)
      const nextLetter =
        GHOST_TEARS[
          isPlayer1Accepting
            ? game.player1GhostTears.length
            : game.player2GhostTears.length
        ];

      // Update game state
      const updatedGame = await tx.game.update({
        where: { id: gameId },
        data: {
          status: GameStatus.PLAYING,
          currentWord: "", // Reset current word
          currentTurn: submittingPlayerId, // Turn goes to the submitting player
          player1GhostTears: isPlayer1Accepting
            ? [...game.player1GhostTears, nextLetter]
            : game.player1GhostTears,
          player2GhostTears: !isPlayer1Accepting
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
    console.error("Error accepting word:", error);
    return {
      success: false,
      error: "Failed to accept word. Please try again.",
    };
  }
}
