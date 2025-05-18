"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Game, GameStatus } from "../../app/generated/prisma";

type CancelInviteResponse =
  | { success: true; game: Game }
  | { success: false; error: string };

export async function cancelInvite(
  gameId: string
): Promise<CancelInviteResponse> {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      return { success: false, error: "User not found in database" };
    }

    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      return { success: false, error: "Game not found" };
    }

    // Verify if current user is player1 (only player1 can cancel the invite)
    if (game.player1Id !== dbUser.id) {
      return {
        success: false,
        error: "Unauthorized: Only the host can cancel the invite",
      };
    }

    // Check if game is in waiting state
    if (game.status !== GameStatus.WAITING) {
      return { success: false, error: "Game is not in waiting state" };
    }

    // Check if there's actually a player2 to remove
    if (!game.player2Id) {
      return { success: false, error: "No invite to cancel" };
    }

    // Update game to remove player2
    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        player2Id: null,
      },
    });

    return { success: true, game: updatedGame };
  } catch (error) {
    console.error("Error in cancelInvite:", error);
    return { success: false, error: "Failed to cancel invite" };
  }
}
