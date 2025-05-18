"use client";

import { Game, User } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import { successToast } from "@/lib/toaster-configurations";
import { ClockIcon, CopyIcon, UserIcon } from "lucide-react";
import CancelInviteModal from "./cancel-invite-modal";

const WaitingForPlayerLobby = ({
  game,
}: {
  game: Game & {
    player1: User;
    player2: User | null;
  };
}) => {
  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/game/invite/${game.id}`
    );
    successToast("Invite link copied to clipboard");
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <h3 className="text-3xl font-bold">Waiting for player</h3>
      <p className="text-zinc-400">Your invite has been sent</p>
      <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-6 w-3xl mb-8 border border-zinc-700/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Game Lobby</h2>
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-4 w-4 text-amber-400" />
            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300">
              Waiting for opponent
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Player 1 Status */}
          <div
            className="relative rounded-xl p-4 border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-md"
            style={{ boxShadow: "0 0 20px rgba(16, 185, 129, 0.15)" }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600/90 flex items-center justify-center mr-2">
                <UserIcon className="h-4 w-4" />
              </div>
              <h2 className="font-bold">{game.player1?.username} (You)</h2>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm text-emerald-300">
                Host
              </span>
            </div>

            <div className="text-sm text-zinc-400">
              Progress:
              <div className="mt-1 font-mono tracking-wider">
                <span className="text-zinc-600">GHOST-TEARS</span>
              </div>
            </div>
          </div>

          {/* Player 2 Status - Empty */}
          <div className="relative rounded-xl p-4 border overflow-hidden border-amber-500/30 bg-amber-900/10 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-amber-600/50 flex items-center justify-center mr-2">
                <UserIcon className="h-4 w-4" />
              </div>
              <h2 className="font-bold text-amber-300">
                {game.player2?.username || "Player 2"}
              </h2>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm text-amber-300">
                Invited
              </span>
            </div>

            <div className="text-sm text-zinc-400">
              Progress:
              <div className="mt-1 font-mono tracking-wider">
                <span className="text-zinc-600">GHOST-TEARS</span>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500/50"
              style={{
                animation: "progress 1s ease-in-out infinite",
              }}
            />
          </div>
        </div>
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-zinc-700/20">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-zinc-500">Game ID</p>
              <p className="font-mono text-emerald-400">{game.id}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyInviteLink}
              className="bg-transparent border-none hover:bg-transparent hover:text-emerald-600/90 text-emerald-400"
            >
              <CopyIcon className="h-4 w-4" />
              Copy Invite Link
            </Button>
          </div>
        </div>
        <CancelInviteModal gameId={game.id} category={game.wordListCategory} />
      </div>
    </div>
  );
};

export default WaitingForPlayerLobby;
