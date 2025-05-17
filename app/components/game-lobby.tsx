"use client";

import { Game, GameStatus } from "@/app/generated/prisma";
import InvitePlayerModal from "./invite-player-modal";
import GameStateSync from "./game-state-sync";
import { useState } from "react";

const GameLobby = ({ game: initialGame }: { game: Game }) => {
  const [game, setGame] = useState<Game>(initialGame);

  const handleGameUpdate = (updatedGame: Game) => {
    setGame(updatedGame);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>Game ID: {game.id}</div>
      <div>Status: {game.status}</div>
      {game.status === GameStatus.WAITING && (
        <InvitePlayerModal gameId={game.id} />
      )}
      {game.status === GameStatus.PLAYING && <div>Game is in progress!</div>}
      <GameStateSync gameId={game.id} onGameUpdate={handleGameUpdate} />
    </div>
  );
};

export default GameLobby;
