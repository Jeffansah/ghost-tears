"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Game } from "../../../app/generated/prisma";
import { syncGame } from "@/server/pusher";

type UpdateGameWordResponse =
  | { success: true; game: Game }
  | { success: false; error: string };

export async function updateGameWord(
  gameId: string,
  newWord: string
): Promise<UpdateGameWordResponse> {
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

    // Verify if current user is a player in this game
    if (game.player1Id !== dbUser.id && game.player2Id !== dbUser.id) {
      return {
        success: false,
        error: "Unauthorized: You are not a player in this game",
      };
    }

    // Verify if it's the user's turn
    if (game.currentTurn !== dbUser.id) {
      return { success: false, error: "Not your turn" };
    }

    // Verify that we have both players
    if (!game.player2Id) {
      return { success: false, error: "Waiting for second player" };
    }

    // Determine next player's turn
    const nextPlayerId =
      game.currentTurn === game.player1Id ? game.player2Id : game.player1Id;

    // Update game word and turn
    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        currentWord: newWord,
        currentTurn: nextPlayerId,
      },
    });

    // Sync game state via Pusher
    await syncGame(updatedGame);

    return { success: true, game: updatedGame };
  } catch (error) {
    console.error("Error in updateGameWord:", error);
    return { success: false, error: "Failed to update game word" };
  }
}
