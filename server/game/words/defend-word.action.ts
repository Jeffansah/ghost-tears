"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

const GHOST_TEARS = "GHOST-TEARS".split("");

type DefendWordResult = {
  success: boolean;
  error?: string;
  game?: any;
};

export async function defendWord(
  gameId: string,
  defendingPlayerId: string,
  defenseWord: string
): Promise<DefendWordResult> {
  try {
    // Get current game state
    const game = await prisma.game.findUnique({
      where: { id: gameId },
      include: { player1: true, player2: true },
    });

    if (!game) {
      return { success: false, error: "Game not found" };
    }

    // Validation checks
    if (game.status !== GameStatus.CHALLENGED) {
      return { success: false, error: "Game is not in challenged state" };
    }

    if (game.currentTurn !== defendingPlayerId) {
      return { success: false, error: "Not your turn to defend" };
    }

    if (!defenseWord) {
      return { success: false, error: "No word to defend" };
    }

    if (!defenseWord.toLowerCase().startsWith(game.currentWord.toLowerCase())) {
      return {
        success: false,
        error: "Defense word must start with current word",
      };
    }

    // Get word category for validation
    const wordCategory = await prisma.wordCategory.findUnique({
      where: { name: game.wordListCategory },
    });

    if (!wordCategory) {
      return { success: false, error: "Word category not found" };
    }

    // Validate defense word
    const isDefenseValid = wordCategory.words.includes(
      defenseWord.toLowerCase()
    );

    // Determine who gets the tear
    const challengingPlayerId =
      defendingPlayerId === game.player1Id ? game.player2Id! : game.player1Id;
    const playerGettingTear = isDefenseValid
      ? challengingPlayerId
      : defendingPlayerId;
    const winnerOfChallenge = isDefenseValid
      ? defendingPlayerId
      : challengingPlayerId;

    // Transaction to update game state
    const result = await prisma.$transaction(async (tx) => {
      // Create defense move
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: defendingPlayerId,
          moveType: MoveType.WORD_DEFENDED,
          word: defenseWord,
          challengeStatus: isDefenseValid
            ? ChallengeStatus.VALID
            : ChallengeStatus.INVALID,
        },
      });

      // Get next ghost tear
      const isPlayer1GettingTear = playerGettingTear === game.player1Id;
      const nextTear =
        GHOST_TEARS[
          isPlayer1GettingTear
            ? game.player1GhostTears.length
            : game.player2GhostTears.length
        ];

      // Update game state - back to PLAYING
      const updatedGame = await tx.game.update({
        where: { id: gameId },
        data: {
          status: GameStatus.PLAYING,
          currentWord: "", // Reset word for fresh start
          currentTurn: winnerOfChallenge, // Winner gets next turn
          player1GhostTears: isPlayer1GettingTear
            ? [...game.player1GhostTears, nextTear]
            : game.player1GhostTears,
          player2GhostTears: !isPlayer1GettingTear
            ? [...game.player2GhostTears, nextTear]
            : game.player2GhostTears,
        },
        include: { player1: true, player2: true },
      });

      return { move, game: updatedGame };
    });

    await syncGame(result.game);

    return { success: true, game: result.game };
  } catch (error) {
    console.error("Error defending word:", error);
    return { success: false, error: "Failed to defend word" };
  }
}
