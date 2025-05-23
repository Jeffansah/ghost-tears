"use client";

const GhostTearsTracker = ({
  player1GhostTears,
  player2GhostTears,
  currentUserId,
  player1Id,
}: {
  player1GhostTears: string[];
  player2GhostTears: string[];
  currentUserId: string;
  player1Id: string;
}) => {
  const sequence = "GHOST-TEARS";

  const isPlayer1 = currentUserId === player1Id;
  const currentPlayerTears = isPlayer1 ? player1GhostTears : player2GhostTears;

  return (
    <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg p-4 border border-zinc-700/20">
      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-3 text-center">
        Ghost-Tears Progress
      </h3>

      <div className="grid grid-cols-11 gap-1 mb-4">
        {sequence.split("").map((letter, index) => {
          const hasLetter = (currentPlayerTears?.length || 0) > index;
          return (
            <div key={index} className="text-center">
              <div
                className={`w-full aspect-square flex items-center justify-center rounded font-medium text-sm ${
                  hasLetter
                    ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                    : "bg-zinc-800/70 backdrop-blur-sm text-zinc-400"
                }`}
              >
                {letter}
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <span className="text-xs text-zinc-500 w-20">Player 1:</span>
          <div className="flex-1 grid grid-cols-11 gap-1">
            {sequence.split("").map((letter, index) => {
              const hasLetter = player1GhostTears.length > index;
              return (
                <div
                  key={index}
                  className={`h-2 rounded ${
                    hasLetter ? "bg-emerald-500/90" : "bg-zinc-700/50"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-xs text-zinc-500 w-20">Player 2:</span>
          <div className="flex-1 grid grid-cols-11 gap-1">
            {sequence.split("").map((letter, index) => {
              const hasLetter = player2GhostTears.length > index;
              return (
                <div
                  key={index}
                  className={`h-2 rounded ${
                    hasLetter ? "bg-emerald-500/90" : "bg-zinc-700/50"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhostTearsTracker;
