"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Game, User } from "../../app/generated/prisma";

type GetGameByIdResponse =
  | { success: true; game: Game & { player1: User; player2: User | null } }
  | { success: false; error: string };

const getGameById = async (gameId: string): Promise<GetGameByIdResponse> => {
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
      include: {
        player1: true,
        player2: true,
      },
    });

    if (!game) {
      return { success: false, error: "Game not found" };
    }

    // Verify if current user belongs to this game
    if (game.player1Id !== dbUser.id && game.player2Id !== dbUser.id) {
      return {
        success: false,
        error: "Unauthorized: You are not a player in this game",
      };
    }

    return { success: true, game };
  } catch (error) {
    console.error("Error in getGameById:", error);
    return { success: false, error: "Failed to get game" };
  }
};

export default getGameById;
