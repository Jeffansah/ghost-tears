import { Link } from "react-router-dom";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Ghost } from "lucide-react";

export function HomePage() {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-300">
            Ghost-Tears
          </div>
          <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl">
            Build the chain.
            <br />
            Dodge the tears.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Ghost-Tears is a two-player word-chain duel. Every risky call, bad
            challenge, and accepted word nudges somebody closer to spelling
            <span className="mx-2 font-semibold tracking-[0.25em] text-emerald-300">
              GHOST-TEARS
            </span>
            and losing the match.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/game/category"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-600"
            >
              Start a game
              <ArrowRight className="h-4 w-4" />
            </Link>
            {!isLoading && !isAuthenticated ? (
              <Link
                to="/sign-up"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-200 transition hover:bg-white/10"
              >
                Create account
              </Link>
            ) : null}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/20 bg-zinc-900/60 p-8 backdrop-blur-xl">
          <div className="mb-6 inline-flex rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <Ghost className="h-8 w-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">How it plays</h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-400">
            <p>Add letters one at a time to grow the current chain.</p>
            <p>
              When the chain becomes a real word in the chosen category, the
              other player decides whether to accept it or challenge it.
            </p>
            <p>
              The loser of each exchange earns the next letter in
              <span className="ml-2 font-semibold tracking-[0.2em] text-emerald-300">
                GHOST-TEARS
              </span>
              .
            </p>
            <p>The first player to complete the full sequence loses.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
