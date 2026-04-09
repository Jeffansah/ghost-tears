import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { AppShell } from "@/components/app-shell";
import { getMissingEnv } from "@/lib/env";
import { SignInPage, SignUpPage } from "@/pages/auth-pages";
import { CategoryHubPage } from "@/pages/category-hub-page";
import { HomePage } from "@/pages/home-page";
import { InvitePage } from "@/pages/invite-page";
import { LobbyPage } from "@/pages/lobby-page";
import { NowPlayingPage } from "@/pages/now-playing-page";

function MissingEnvPage() {
  const missing = getMissingEnv();

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8 text-left shadow-xl shadow-black/30">
      <h1 className="text-3xl font-bold text-white">
        Environment setup needed
      </h1>
      <p className="mt-3 text-zinc-300">
        App needs Convex deployment URL before it can connect.
      </p>
      <ul className="mt-5 space-y-2 text-sm text-amber-100">
        {missing.map((item) => (
          <li key={item} className="rounded-xl bg-black/20 px-4 py-3 font-mono">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const missing = getMissingEnv();

  return (
    <AppShell showAuth={missing.length === 0}>
      {missing.length > 0 ? (
        <MissingEnvPage />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/game/category" element={<CategoryHubPage />} />
          <Route path="/game/invite/:id" element={<InvitePage />} />
          <Route
            path="/game/category/:category/new/:gameId"
            element={<LobbyPage mode="new" />}
          />
          <Route
            path="/game/category/:category/waiting/:gameId"
            element={<LobbyPage mode="waiting" />}
          />
          <Route
            path="/game/category/:category/now-playing/:gameId"
            element={<NowPlayingPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
      <Toaster richColors position="top-center" />
    </AppShell>
  );
}

export default App;
