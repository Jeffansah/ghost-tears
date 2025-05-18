import getGameById from "@/server/game/get-game-by-id.action";
import { redirect } from "next/navigation";
import JoinGameButton from "@/app/components/join-game-button";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, GhostIcon } from "lucide-react";

type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const game = await getGameById(id);

  if (
    !game.success &&
    (game.error === "User not found" ||
      game.error === "User not found in database")
  ) {
    redirect("/sign-in");
  }

  if (!game.success && game.error === "Game not found") {
    redirect("/");
  }

  if (
    !game.success &&
    game.error === "Unauthorized: You are not a player in this game"
  ) {
    redirect("/");
  }

  if (!game.success && game.error === "Failed to get game") {
    throw new Error("Failed to get game");
  }

  if (game.success && game.game)
    return (
      <div className="flex flex-col gap-4 items-center w-screen justify-center h-screen">
        <div className="w-full max-w-lg px-6 py-12">
          <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-8 border border-zinc-700/30">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-emerald-900/30 backdrop-blur-sm flex items-center justify-center mb-4">
                <GhostIcon className="h-8 w-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Game Invite</h1>
              <p className="text-zinc-400">
                You've been invited to play a game of Ghost-Tears by{" "}
                <span className="text-emerald-400">
                  {game.game.player1.username}
                </span>
                . Join the word chain challenge and test your skills!
              </p>
            </div>

            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-zinc-700/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Game ID</p>
                  <p className="font-mono text-emerald-400">{game.game.id}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Status</p>
                  <p className="text-emerald-400">Waiting for you</p>
                </div>
              </div>
            </div>

            <JoinGameButton gameId={game.game.id} />
          </div>
        </div>
      </div>
    );
};

export default page;
