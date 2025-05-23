"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { endGame } from "@/server/game/end-game.action";
import { playAgain } from "@/server/game/play-again.action";
import { Game, User } from "../generated/prisma";
import { Trophy, Medal, Home, RefreshCw } from "lucide-react";

type GameWithPlayers = Game & {
  player1: User;
  player2: User | null;
  currentUserId: string;
};

interface GameEndModalProps {
  game: GameWithPlayers;
  category: string;
}

export function GameEndModal({ game, category }: GameEndModalProps) {
  const [isOpen, setIsOpen] = useState(game.winnerId !== null);
  const [showConfetti, setShowConfetti] = useState(
    game.winnerId === game.currentUserId
  );
  const router = useRouter();

  const isPlayer1 = game.currentUserId === game.player1.id;

  const handlePlayAgain = async () => {
    const result = await playAgain(game.id);
    if (result.success && result.newGameId) {
      router.push(`/game/category/${category}/waiting/${result.newGameId}`);
    }
  };

  const handleEndGame = async () => {
    const result = await endGame(game.id);
    if (result.success) {
      router.push("/");
    }
  };

  const winner =
    game.winnerId === game.player1.id ? game.player1 : game.player2;
  const loser = game.winnerId === game.player1.id ? game.player2 : game.player1;

  if (!winner || !loser) {
    return null;
  }

  return (
    <>
      {showConfetti && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100]">
          <Confetti />
        </div>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 w-full max-w-md">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Game Over!
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-400">
              {game.currentUserId === game.winnerId
                ? "YOU WIN!"
                : winner.username + " wins"}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-6">
            {/* Winner Section */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-7 h-7 text-emerald-400" />
                  <span className="font-semibold text-emerald-400">
                    {winner.username}
                  </span>
                </div>
                {/* <div className=" font-medium text-zinc-100">
                {winner.username}
              </div> */}
              </div>
            </div>

            {/* Loser Section */}
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/30 border border-zinc-700/30 p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-700/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <Medal className="w-7 h-7 text-zinc-400" />
                  <span className=" font-semibold text-zinc-400">
                    {loser.username}
                  </span>
                </div>
                {/* <div className=" font-medium text-zinc-300">{loser.username}</div> */}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-3 mt-2">
              {isPlayer1 ? (
                <>
                  <Button
                    onClick={handlePlayAgain}
                    className="w-full bg-emerald-600/90 hover:bg-emerald-500/90 text-white py-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Play Again
                  </Button>
                  <Button
                    onClick={handleEndGame}
                    className="w-full bg-red-600/90 hover:bg-red-500/90 text-white py-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    End Game
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleEndGame}
                  className="w-full bg-emerald-600/90 hover:bg-emerald-500/90 text-white py-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
