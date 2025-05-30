"use client";

import { Game, GameStatus, User } from "@/app/generated/prisma";
import GameStateSync from "./game-state-sync";
import { useState, useEffect } from "react";
import NewGameLobby from "./new-game-lobby";
import { usePathname, useRouter } from "next/navigation";
import WaitingForPlayerLobby from "./waiting-for-player";

const GameLobby = ({
  game: initialGame,
  category,
}: {
  game: Game & {
    player1: User;
    player2: User | null;
  };
  category: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [game, setGame] = useState<
    Game & {
      player1: User;
      player2: User | null;
    }
  >(initialGame);

  const handleGameUpdate = (
    updatedGame: Game & {
      player1: User;
      player2: User | null;
    }
  ) => {
    setGame(updatedGame);
  };

  useEffect(() => {
    if (game.status === GameStatus.PLAYING) {
      console.log("redirecting to now-playing");
      router.push(`/game/category/${category}/now-playing/${game.id}`);
    }
  }, [game.status, category, game.id, router]);

  const isWaitingForPlayer = pathname.includes("waiting");

  return (
    <div className="flex flex-col gap-2">
      {!isWaitingForPlayer ? (
        <NewGameLobby game={game} category={category} />
      ) : (
        <WaitingForPlayerLobby game={game} />
      )}
      <GameStateSync gameId={game.id} onGameUpdate={handleGameUpdate} />
    </div>
  );
};

export default GameLobby;
