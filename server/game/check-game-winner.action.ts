"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

type CheckGameWinnerResult = {
  success: boolean;
  error?: string;
  isWinner?: boolean;
};

export async function checkGameWinner(
  gameId: string
): Promise<CheckGameWinnerResult> {
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

    return {
      success: true,
      isWinner: dbUser.id === game.winnerId,
    };
  } catch (error) {
    console.error("Error checking game winner:", error);
    return {
      success: false,
      error: "Failed to check game winner",
    };
  }
}
