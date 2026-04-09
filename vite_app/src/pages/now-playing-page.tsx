import { useEffect } from "react";
import { useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "@convex/_generated/api";
import { GameBoard } from "@/components/game-board";
import { GhostLoading } from "@/components/ghost-loading";
import { resolveActiveGamePath } from "@/lib/game-routing";

export function NowPlayingPage() {
  const navigate = useNavigate();
  const { category = "", gameId = "" } = useParams();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const game = useQuery(api.games.getById, gameId ? { gameId } : "skip");
  const wordList = useQuery(
    api.wordCategories.getByName,
    category ? { name: category } : "skip"
  );

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/sign-in", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!game) return;
    const target = resolveActiveGamePath(game);
    const normalizedNowPlaying = `/game/category/${category}/now-playing/${game.id}`;

    if (game.status !== "ENDED" && target !== normalizedNowPlaying) {
      navigate(target, { replace: true });
    }
  }, [category, game, navigate]);

  if (isLoading || game === undefined || wordList === undefined) {
    return <GhostLoading label="Loading match..." />;
  }

  if (game === null || wordList === null) {
    return (
      <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 text-center text-zinc-400">
        Match not found.
      </div>
    );
  }

  return (
    <GameBoard
      game={game}
      category={wordList.name}
      words={wordList.words}
      onGoHome={() => navigate("/")}
      onRematch={(nextGameId) =>
        navigate(`/game/category/${wordList.name}/waiting/${nextGameId}`)
      }
    />
  );
}
