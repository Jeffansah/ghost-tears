// server/game/add-second-player.action.ts
"use server";

import prisma from "@/lib/prisma";
import { Game, GameStatus } from "../../app/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";

type AddSecondPlayerResponse =
  | { success: true; game: Game }
  | { success: false; error: string };

const addSecondPlayer = async (
  gameId: string,
  username: string
): Promise<AddSecondPlayerResponse> => {
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

    const player2 = await prisma.user.findUnique({
      where: { username },
    });

    if (!player2) {
      return { success: false, error: "Player not found" };
    }

    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      return { success: false, error: "Game not found" };
    }

    if (game.player2Id) {
      return { success: false, error: "Invite already sent" };
    }

    if (game.status !== GameStatus.WAITING) {
      return { success: false, error: "Game is not in waiting state" };
    }

    if (game.player1Id === player2.id) {
      return { success: false, error: "Cannot add same player twice" };
    }

    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        player2Id: player2.id,
      },
    });

    return { success: true, game: updatedGame };
  } catch (error) {
    console.error("Error in addSecondPlayer:", error);
    return { success: false, error: "Failed to add second player" };
  }
};

export default addSecondPlayer;
