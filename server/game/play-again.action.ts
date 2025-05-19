"use server";

import prisma from "@/lib/prisma";
import { GameStatus } from "@/app/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { syncGame } from "@/server/pusher";

type PlayAgainResult = {
  success: boolean;
  error?: string;
  newGameId?: string;
};

export async function playAgain(gameId: string): Promise<PlayAgainResult> {
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

    const currentGame = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!currentGame) {
      return {
        success: false,
        error: "Game not found",
      };
    }

    // Check if user is player1 in this game
    if (dbUser.id !== currentGame.player1Id) {
      return {
        success: false,
        error: "Unauthorized: Only player1 can start a new game",
      };
    }

    // End the current game
    await prisma.game.update({
      where: { id: gameId },
      data: {
        status: GameStatus.ENDED,
      },
    });

    // Create a new game with the same category in WAITING state
    const newGame = await prisma.game.create({
      data: {
        status: GameStatus.WAITING,
        wordListCategory: currentGame.wordListCategory,
        player1Id: currentGame.player1Id,
        player2Id: currentGame.player2Id, // Pre-fill player2's ID
        player1GhostTears: [],
        player2GhostTears: [],
        currentWord: "",
        currentTurn: currentGame.player1Id, // Set initial turn to player1
      },
    });

    await syncGame(newGame);

    return {
      success: true,
      newGameId: newGame.id,
    };
  } catch (error) {
    console.error("Error playing again:", error);
    return {
      success: false,
      error: "Failed to start new game",
    };
  }
}
