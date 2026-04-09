import type { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { Ghost } from "lucide-react";

function NavLink({
  to,
  children,
}: PropsWithChildren<{
  to: string;
}>) {
  const { pathname } = useLocation();
  const active = pathname === to || pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      className={`transition-colors ${
        active ? "text-emerald-400" : "text-zinc-400 hover:text-emerald-300"
      }`}
    >
      {children}
    </Link>
  );
}

export function AppShell({
  children,
  showAuth = true,
}: PropsWithChildren<{ showAuth?: boolean }>) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signOut } = useAuthActions();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-900/20 to-transparent" />
      <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <Ghost className="h-6 w-6 text-emerald-400" />
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-xl font-bold text-transparent">
                GHOST-TEARS
              </span>
              <span className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Beta
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/game/category">Play</NavLink>
            {showAuth ? (
              <>
                {isLoading ? (
                  <span className="text-zinc-500">…</span>
                ) : isAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => void signOut()}
                    className="rounded-md bg-zinc-800 px-3 py-1.5 text-zinc-200 transition hover:bg-zinc-700"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/sign-in"
                    className="rounded-md bg-emerald-700 px-3 py-1.5 text-white transition hover:bg-emerald-600"
                  >
                    Sign in
                  </Link>
                )}
              </>
            ) : null}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
    </div>
  );
}
