import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import { Copy, Send, UserPlus, XCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { api } from "@convex/_generated/api";
import { GhostLoading } from "@/components/ghost-loading";
import { resolveActiveGamePath } from "@/lib/game-routing";

export function LobbyPage({ mode }: { mode: "new" | "waiting" }) {
  const navigate = useNavigate();
  const { category = "", gameId = "" } = useParams();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const game = useQuery(api.games.getById, gameId ? { gameId } : "skip");
  const invitePlayer = useMutation(api.games.inviteByUsername);
  const cancelInvite = useMutation(api.games.cancelInvite);
  const [username, setUsername] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/sign-in", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!game) return;
    const target = resolveActiveGamePath(game);
    const here = `/game/category/${category}/${mode}/${game.id}`;
    if (target !== here) {
      navigate(target, { replace: true });
    }
  }, [category, game, mode, navigate]);

  if (isLoading || game === undefined) {
    return <GhostLoading label="Loading lobby..." />;
  }

  if (game === null) {
    return (
      <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 text-center text-zinc-400">
        Lobby not found or you do not have access to it.
      </div>
    );
  }

  const currentGame = game;

  async function copyInviteLink() {
    await navigator.clipboard.writeText(
      `${window.location.origin}/game/invite/${currentGame.id}`
    );
    toast.success("Invite link copied");
  }

  async function handleInvite() {
    const email = username.trim().toLowerCase();
    if (!email) {
      toast.error("Enter the invitee's email");
      return;
    }

    try {
      setBusy("invite");
      const updated = await invitePlayer({
        gameId: currentGame.id,
        username: email,
      });
      setUsername("");
      navigate(`/game/category/${category}/waiting/${updated.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to invite player");
    } finally {
      setBusy(null);
    }
  }

  async function handleCancel() {
    try {
      setBusy("cancel");
      const updated = await cancelInvite({ gameId: currentGame.id });
      navigate(`/game/category/${category}/new/${updated.id}`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to cancel the invite"
      );
    } finally {
      setBusy(null);
    }
  }

  const inviteSent = currentGame.player2 !== null;

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          {inviteSent ? "Waiting for player" : "New game lobby"}
        </h1>
        <p className="mt-2 text-zinc-400">
          {inviteSent
            ? "Your invite is live. The match starts as soon as they join."
            : "Invite a player directly or share the invite link."}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
          <div className="mb-2 text-xs uppercase tracking-[0.25em] text-emerald-300">
            Host
          </div>
          <div className="text-xl font-semibold text-white">
            {currentGame.player1.username}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Opponent
          </div>
          <div className="text-xl font-semibold text-white">
            {currentGame.player2?.username ?? "Waiting for opponent"}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Invite link</div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <code className="overflow-x-auto rounded-xl bg-zinc-950/70 px-4 py-3 text-sm text-emerald-300">
            {window.location.origin}/game/invite/{currentGame.id}
          </code>
          <button
            onClick={() => void copyInviteLink()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-medium text-white transition hover:bg-white/15"
          >
            <Copy className="h-4 w-4" />
            Copy
          </button>
        </div>
      </div>

      {!inviteSent ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white">
            <UserPlus className="h-4 w-4 text-emerald-300" />
            Invite by email
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="friend@example.com"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500/40"
            />
            <button
              onClick={() => void handleInvite()}
              disabled={busy !== null}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {busy === "invite" ? "Sending..." : "Send invite"}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => void handleCancel()}
            disabled={busy !== null}
            className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-medium text-white transition hover:bg-red-600 disabled:opacity-60"
          >
            <XCircle className="h-4 w-4" />
            {busy === "cancel" ? "Cancelling..." : "Cancel invite"}
          </button>
        </div>
      )}
    </div>
  );
}
