"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Game, GameStatus } from "../../app/generated/prisma";
import { syncGame } from "../pusher";

type JoinGameResponse =
  | { success: true; game: Game }
  | { success: false; error: string };

export async function joinGame(gameId: string): Promise<JoinGameResponse> {
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

    if (game.player2Id !== dbUser.id) {
      return {
        success: false,
        error: "Unauthorized: You are not a player in this game",
      };
    }
    if (game.status === GameStatus.ENDED) {
      return { success: false, error: "Game is not in playing state" };
    }

    // Update game status to PLAYING
    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        status: GameStatus.PLAYING,
      },
    });

    // Sync the updated game state to all players
    await syncGame(updatedGame);

    return { success: true, game: updatedGame };
  } catch (error) {
    console.error("Error in joining game:", error);
    return { success: false, error: "Failed to join game" };
  }
}
