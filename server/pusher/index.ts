"use server";

import { Game } from "@/app/generated/prisma/client";
import Pusher from "pusher";
import prisma from "@/lib/prisma";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
});

const syncGame = async (game: Game) => {
  // Fetch the complete game with relations
  const completeGame = await prisma.game.findUnique({
    where: { id: game.id },
    include: {
      player1: true,
      player2: true,
    },
  });

  if (!completeGame) {
    throw new Error("Game not found");
  }

  return await pusher.trigger(`game-${game.id}`, "update", completeGame);
};

export { syncGame };
