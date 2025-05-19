"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

type SubmitWordResult = {
  success: boolean;
  error?: string;
  game?: any; // We'll type this properly once we have the full game type
};

export async function submitWord(
  gameId: string,
  word: string,
  submittingPlayerId: string
): Promise<SubmitWordResult> {
  try {
    // 1. Validate input
    if (!word || word.trim().length === 0) {
      return {
        success: false,
        error: "Word cannot be empty",
      };
    }

    // 2. Get current game state
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

    // 3. Validate game state
    if (game.status !== GameStatus.PLAYING) {
      return {
        success: false,
        error: "Game is not in playing state",
      };
    }

    if (game.currentTurn !== submittingPlayerId) {
      return {
        success: false,
        error: "Not your turn",
      };
    }

    // 4. Create move and update game in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the move
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: submittingPlayerId,
          moveType: MoveType.WORD_SUBMITTED,
          word,
          challengeStatus: ChallengeStatus.PENDING, // Word is pending challenge
        },
      });

      // Update game state
      const updatedGame = await tx.game.update({
        where: { id: gameId },
        data: {
          status: GameStatus.PLAYING, // Keep in playing state
          currentTurn:
            game.player1Id === submittingPlayerId
              ? game.player2Id!
              : game.player1Id, // Switch turn to other player
          currentWord: word, // Store the submitted word
        },
        include: {
          player1: true,
          player2: true,
        },
      });

      return { move, game: updatedGame };
    });

    // 5. Sync game state
    await syncGame(result.game);

    return {
      success: true,
      game: result.game,
    };
  } catch (error) {
    console.error("Error submitting word:", error);
    return {
      success: false,
      error: "Failed to submit word. Please try again.",
    };
  }
}
