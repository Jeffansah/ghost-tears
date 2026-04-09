import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { GhostLoading } from "@/components/ghost-loading";
import { toast } from "sonner";
import {
  formatAuthErrorMessage,
  isValidEmailFormat,
  normalizeAuthEmail,
} from "@/lib/auth-errors";

function AuthFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

export function SignInPage() {
  const { signIn } = useAuthActions();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  const onSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const normalizedEmail = normalizeAuthEmail(email);
    if (!isValidEmailFormat(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }
    setPending(true);
    try {
      await signIn("password", {
        flow: "signIn",
        email: normalizedEmail,
        password,
      });
      navigate("/", { replace: true });
    } catch (err) {
      const message = formatAuthErrorMessage(err);
      setError(message);
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

  if (isLoading || isAuthenticated) {
    return (
      <AuthFrame>
        <GhostLoading
          label={isAuthenticated ? "Taking you home…" : "Loading…"}
        />
      </AuthFrame>
    );
  }

  return (
    <AuthFrame>
      <form onSubmit={(e) => void onSignIn(e)} className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold text-white">Sign in</h1>
        <p className="text-sm text-zinc-400">
          Use the email and password for your account.
        </p>
        <label className="block text-sm text-zinc-300">
          Email
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-white outline-none focus:border-emerald-500/50"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Password
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-white outline-none focus:border-emerald-500/50"
          />
        </label>
        {error ? (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
        <p className="text-center text-sm text-zinc-500">
          No account?{" "}
          <Link to="/sign-up" className="text-emerald-400 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </AuthFrame>
  );
}

export function SignUpPage() {
  const { signIn } = useAuthActions();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const normalizedEmail = normalizeAuthEmail(email);
    if (!isValidEmailFormat(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }
    setPending(true);
    try {
      await signIn("password", {
        flow: "signUp",
        email: normalizedEmail,
        password,
        ...(username.trim() ? { username: username.trim() } : {}),
      });
      navigate("/", { replace: true });
    } catch (err) {
      const message = formatAuthErrorMessage(err);
      setError(message);
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

  if (isLoading || isAuthenticated) {
    return (
      <AuthFrame>
        <GhostLoading
          label={isAuthenticated ? "Taking you home…" : "Loading…"}
        />
      </AuthFrame>
    );
  }

  return (
    <AuthFrame>
      <form onSubmit={(e) => void onSignUp(e)} className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold text-white">Create account</h1>
        <p className="text-sm text-zinc-400">
          Others will invite you using your email. Your display name is shown in
          games.
        </p>
        <label className="block text-sm text-zinc-300">
          Email
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-white outline-none focus:border-emerald-500/50"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Display name
          <input
            type="text"
            autoComplete="off"
            placeholder="e.g. ghost_king"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-white outline-none focus:border-emerald-500/50"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Password (min 8 characters)
          <input
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-2 text-white outline-none focus:border-emerald-500/50"
          />
        </label>
        {error ? (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
        >
          {pending ? "Creating account…" : "Create account"}
        </button>
        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-emerald-400 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthFrame>
  );
}
