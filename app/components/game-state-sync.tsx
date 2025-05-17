"use client";

import { Game } from "@/app/generated/prisma";
import { useEffect } from "react";
import Pusher from "pusher-js";

interface GameStateSyncProps {
  gameId: string;
  onGameUpdate: (game: Game) => void;
}

export default function GameStateSync({
  gameId,
  onGameUpdate,
}: GameStateSyncProps) {
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    });

    const channel = pusher.subscribe(`game-${gameId}`);

    channel.bind("update", (game: Game) => {
      onGameUpdate(game);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [gameId, onGameUpdate]);

  return null;
}
