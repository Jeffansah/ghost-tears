"use server";

import prisma from "@/lib/prisma";
import { GameStatus } from "@/app/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { syncGame } from "@/server/pusher";

type EndGameResult = {
  success: boolean;
  error?: string;
};

export async function endGame(gameId: string): Promise<EndGameResult> {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    // Get the user from our database using clerkId
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return {
        success: false,
        error: "User not found in database",
      };
    }

    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      return {
        success: false,
        error: "Game not found",
      };
    }

    // Check if user is a player in this game
    if (dbUser.id !== game.player1Id && dbUser.id !== game.player2Id) {
      return {
        success: false,
        error: "Unauthorized: You are not a player in this game",
      };
    }

    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        status: GameStatus.ENDED,
      },
    });

    await syncGame(updatedGame);

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error ending game:", error);
    return {
      success: false,
      error: "Failed to end game",
    };
  }
}
