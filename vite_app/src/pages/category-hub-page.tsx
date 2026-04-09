import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import { useNavigate } from "react-router-dom";
import { api } from "@convex/_generated/api";
import { GhostLoading } from "@/components/ghost-loading";
import { resolveActiveGamePath } from "@/lib/game-routing";
import type { CategoryOption } from "@/types/game";

export function CategoryHubPage() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const activeGame = useQuery(api.games.getActiveForCurrentUser, {});
  const categories = useQuery(api.wordCategories.list, {});
  const createGame = useMutation(api.games.create);
  const [creatingCategory, setCreatingCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/sign-in", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (activeGame) {
      navigate(resolveActiveGamePath(activeGame), { replace: true });
    }
  }, [activeGame, navigate]);

  if (isLoading || categories === undefined) {
    return <GhostLoading label="Checking your active game..." />;
  }

  if (categories === undefined) {
    return <GhostLoading label="Loading categories..." />;
  }

  async function handleCreate(category: CategoryOption) {
    setCreatingCategory(category.name);
    try {
      const game = await createGame({ category: category.name });
      navigate(`/game/category/${category.name}/new/${game.id}`);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to create game";
      window.alert(message);
    } finally {
      setCreatingCategory(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Choose a category</h1>
          <p className="mt-2 text-zinc-400">
            Start a new lobby in any active word list.
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-zinc-400">
            No categories are available yet.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => void handleCreate(category)}
                disabled={creatingCategory !== null}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-emerald-500/40 hover:bg-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <div className="text-lg font-semibold capitalize text-white">
                  {category.name}
                </div>
                <div className="mt-2 text-sm text-zinc-400">
                  {creatingCategory === category.name
                    ? "Creating lobby..."
                    : "Create a new lobby in this category"}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
