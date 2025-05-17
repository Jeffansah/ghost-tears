"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Game, GameStatus } from "../../app/generated/prisma";
import { syncGame } from "../pusher";

type GetActiveGameResponse =
  | {
      success: true;
      game: Game & { currentUserId: string };
    }
  | {
      success: false;
      error: string;
    };

const getActiveGame = async (): Promise<GetActiveGameResponse> => {
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

    // Find active game where user is either player1 or player2
    const activeGame = await prisma.game.findFirst({
      where: {
        status: {
          not: GameStatus.ENDED,
        },
        OR: [{ player1Id: dbUser.id }, { player2Id: dbUser.id }],
      },
    });

    if (!activeGame) {
      return {
        success: false,
        error: "No active game found",
      };
    }

    // Verify if current user belongs to this game
    if (
      activeGame.player1Id !== dbUser.id &&
      activeGame.player2Id !== dbUser.id
    ) {
      return {
        success: false,
        error: "Unauthorized: You are not a player in this game",
      };
    }

    const gameWithUserId = {
      ...activeGame,
      currentUserId: dbUser.id,
    };

    // Sync the game state to all players
    await syncGame(gameWithUserId);

    return {
      success: true,
      game: gameWithUserId,
    };
  } catch (error) {
    console.error("Error in getActiveGame:", error);
    return { success: false, error: "Failed to get/create game" };
  }
};

export default getActiveGame;
