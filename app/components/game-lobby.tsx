"use client";

import { Game, GameStatus } from "@/app/generated/prisma";
import GameStateSync from "./game-state-sync";
import { useState, useEffect } from "react";
import NewGameLobby from "./new-game-lobby";
import WaitingForPlayer from "./waiting-for-player";
import { usePathname, useRouter } from "next/navigation";

const GameLobby = ({
  game: initialGame,
  category,
}: {
  game: Game;
  category: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [game, setGame] = useState<Game>(initialGame);

  const handleGameUpdate = (updatedGame: Game) => {
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
        <WaitingForPlayer game={game} />
      )}
      <GameStateSync gameId={game.id} onGameUpdate={handleGameUpdate} />
    </div>
  );
};

export default GameLobby;
