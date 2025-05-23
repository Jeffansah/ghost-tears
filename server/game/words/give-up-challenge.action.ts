"use server";

import prisma from "@/lib/prisma";
import { MoveType, ChallengeStatus, GameStatus } from "@/app/generated/prisma";
import { syncGame } from "@/server/pusher";

const GHOST_TEARS = "GHOST-TEARS".split("");

type GiveUpChallengeResult = {
  success: boolean;
  error?: string;
  game?: any;
};

export async function giveUpChallenge(
  gameId: string,
  givingUpPlayerId: string
): Promise<GiveUpChallengeResult> {
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

    if (game.currentTurn !== givingUpPlayerId) {
      return { success: false, error: "Not your turn to defend" };
    }

    // Determine who gets the tear and who wins
    const challengingPlayerId =
      givingUpPlayerId === game.player1Id ? game.player2Id! : game.player1Id;
    const playerGettingTear = givingUpPlayerId; // Player giving up gets the tear
    const winnerOfChallenge = challengingPlayerId; // Challenger wins

    // Transaction to update game state
    const result = await prisma.$transaction(async (tx) => {
      // Create give-up move
      const move = await tx.move.create({
        data: {
          gameId,
          playerId: givingUpPlayerId,
          moveType: MoveType.WORD_DEFENDED, // Using same type as defense
          word: game.currentWord, // Keep the original challenged word
          challengeStatus: ChallengeStatus.INVALID, // Giving up = accepting invalid word
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
          currentTurn: winnerOfChallenge, // Winner (challenger) gets next turn
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
    console.error("Error giving up challenge:", error);
    return { success: false, error: "Failed to give up challenge" };
  }
}
