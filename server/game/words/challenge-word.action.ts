"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

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

    // Determine defending player
    const defendingPlayerId =
      challengingPlayerId === game.player1Id ? game.player2Id! : game.player1Id;

    const result = await prisma.$transaction(async (tx) => {
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: challengingPlayerId,
          moveType: MoveType.WORD_CHALLENGED,
          word: game.currentWord,
          challengeStatus: ChallengeStatus.DEFENDING,
        },
      });

      // Update game to CHALLENGED state and switch turn to defending player
      const updatedGame = await tx.game.update({
        where: { id: gameId },
        data: {
          status: GameStatus.CHALLENGED,
          currentTurn: defendingPlayerId,
        },
        include: {
          player1: true,
          player2: true,
        },
      });

      return { move, game: updatedGame };
    });

    await syncGame(result.game);

    return {
      success: true,
      game: result.game,
    };
  } catch (error) {
    console.error("Error challenging word:", error);
    throw new Error("Failed to challenge word. Please try again.");
  }
}
