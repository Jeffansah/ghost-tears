// server/game/add-second-player.action.ts
"use server";

import prisma from "@/lib/prisma";
import { Game, GameStatus } from "../../app/generated/prisma";

type AddSecondPlayerResponse =
  | { success: true; game: Game }
  | { success: false; error: string };

const addSecondPlayer = async (
  gameId: string,
  player2Id: string
): Promise<AddSecondPlayerResponse> => {
  try {
    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      return { success: false, error: "Game not found" };
    }

    if (game.status !== GameStatus.WAITING) {
      return { success: false, error: "Game is not in waiting state" };
    }

    if (game.player1Id === player2Id) {
      return { success: false, error: "Cannot add same player twice" };
    }

    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        player2Id,
      },
    });

    return { success: true, game: updatedGame };
  } catch (error) {
    console.error("Error in addSecondPlayer:", error);
    return { success: false, error: "Failed to add second player" };
  }
};

export default addSecondPlayer;
