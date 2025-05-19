"use server";

import prisma from "@/lib/prisma";
import { GameStatus } from "../../app/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";

type CreateGameResponse =
  | {
      success: boolean;
      game: {
        id: string;
        status: GameStatus;
        wordListCategory: string;
        player1Id: string;
        currentTurn: string;
      };
    }
  | {
      success: false;
      error: unknown;
    };

const createGame = async (category: string) => {
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

    const game = await prisma.game.create({
      data: {
        status: GameStatus.WAITING,
        wordListCategory: category,
        player1Id: dbUser.id,
        player1GhostTears: [],
        player2GhostTears: [],
        currentTurn: dbUser.id,
        currentWord: "",
        player2Id: null,
      },
    });

    return {
      success: true,
      game: {
        id: game.id,
        status: game.status,
        wordListCategory: game.wordListCategory,
        player1Id: game.player1Id,
        currentTurn: game.currentTurn,
      },
    };
  } catch (error) {
    console.error("Error creating game:", error);
    return {
      success: false,
      error: "Failed to create game",
    };
  }
};

export default createGame;
