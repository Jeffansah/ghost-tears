import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Ghost } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { api } from "@convex/_generated/api";
import { GhostLoading } from "@/components/ghost-loading";
import { resolveActiveGamePath } from "@/lib/game-routing";

export function InvitePage() {
  const navigate = useNavigate();
  const { id: gameId = "" } = useParams();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const game = useQuery(api.games.getById, gameId ? { gameId } : "skip");
  const joinGame = useMutation(api.games.join);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/sign-in", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!game) return;
    const target = resolveActiveGamePath(game);
    if (target !== `/game/invite/${game.id}`) {
      navigate(target, { replace: true });
    }
  }, [game, navigate]);

  if (isLoading || game === undefined) {
    return <GhostLoading label="Loading invite..." />;
  }

  if (game === null) {
    return (
      <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 text-center text-zinc-400">
        Invite not found or you do not have access to it.
      </div>
    );
  }

  const currentGame = game;

  async function handleJoin() {
    try {
      setJoining(true);
      const updated = await joinGame({ gameId: currentGame.id });
      navigate(`/game/category/${updated.wordListCategory}/now-playing/${updated.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to join game");
    } finally {
      setJoining(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
      <div className="text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-emerald-500/10 p-4 text-emerald-300">
          <Ghost className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-white">Game invite</h1>
        <p className="mt-3 text-zinc-400">
          <span className="font-semibold text-emerald-300">
            {currentGame.player1.username}
          </span>{" "}
          invited you to a {currentGame.wordListCategory} duel.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Game
            </div>
            <div className="mt-2 font-mono text-emerald-300">{currentGame.id}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Status
            </div>
            <div className="mt-2 text-white">Waiting for you</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => void handleJoin()}
        disabled={joining}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-4 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
      >
        <ArrowRight className="h-4 w-4" />
        {joining ? "Joining..." : "Join game"}
      </button>
    </div>
  );
}
