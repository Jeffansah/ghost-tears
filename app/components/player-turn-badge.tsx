"use client";

import { UserIcon } from "lucide-react";

const PlayerTurnBadge = ({
  username,
  collectedLetters,
  isPlayerTurn,
  playerNumber,
}: {
  username: string;
  collectedLetters: string[];
  isPlayerTurn: boolean;
  playerNumber: number;
}) => {
  const sequence = "GHOST-TEARS";

  return (
    <div
      style={{
        boxShadow: isPlayerTurn ? "0 0 20px rgba(16, 185, 129, 0.15)" : "none",
      }}
      className={`relative rounded-xl p-4 border ${
        isPlayerTurn
          ? "border-emerald-500/30 bg-emerald-900/10 backdrop-blur-md scale-[1.02] "
          : "border-zinc-700/30 bg-zinc-800/10 backdrop-blur-sm"
      } transition-colors `}
    >
      <div className="flex items-center mb-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
            isPlayerTurn ? "bg-emerald-600/90" : "bg-zinc-700/90"
          }`}
        >
          <UserIcon className="h-4 w-4" />
        </div>
        <h2 className="font-bold">{username}</h2>
        {isPlayerTurn && (
          <span className="ml-auto text-xs px-2 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm text-emerald-300">
            Your turn
          </span>
        )}
      </div>

      <div className="text-sm text-zinc-400">
        Progress:
        <div className="mt-1 font-mono tracking-wider">
          {sequence.split("").map((letter, i) => {
            const hasLetter = i < collectedLetters.length;
            return (
              <span
                key={i}
                className={hasLetter ? "text-emerald-400" : "text-zinc-600"}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayerTurnBadge;
