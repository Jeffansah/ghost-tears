"use server";

import { Game } from "@/app/generated/prisma/client";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
});

const syncGame = async (game: Game) => {
  return await pusher.trigger(`game-${game.id}`, "update", game);
};

export { syncGame };
