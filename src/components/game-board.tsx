import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import {
  AlertTriangle,
  Check,
  Home,
  Keyboard,
  RefreshCw,
  Shield,
  Trophy,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { GAME_STATUS, type GameWithPlayers } from "@/types/game";

const GHOST_SEQUENCE = "GHOST-TEARS".split("");

function ProgressBar({
  username,
  letters,
  isActive,
}: {
  username: string;
  letters: string[];
  isActive: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        isActive
          ? "border-emerald-500/40 bg-emerald-500/10 shadow-lg shadow-emerald-950/20"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="font-semibold text-white">{username}</div>
        {isActive ? (
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300">
            Your turn
          </span>
        ) : null}
      </div>
      <div className="mt-3 font-mono text-sm tracking-[0.3em]">
        {GHOST_SEQUENCE.map((letter, index) => (
          <span
            key={`${username}-${letter}-${index}`}
            className={
              index < letters.length ? "text-emerald-400" : "text-zinc-600"
            }
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

function KeyboardPad({
  isOpen,
  onToggle,
  onChoose,
  disabled,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onChoose: (letter: string) => void;
  disabled: boolean;
}) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <>
      <button
        onClick={onToggle}
        disabled={disabled}
        className={`fixed bottom-6 right-6 z-30 rounded-full border p-4 shadow-xl transition ${
          disabled
            ? "cursor-not-allowed border-white/10 bg-zinc-800 text-zinc-500"
            : "border-emerald-500/30 bg-emerald-700 text-white hover:bg-emerald-600"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Keyboard className="h-6 w-6" />}
      </button>

      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-20 px-4 pb-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
            {rows.map((row, rowIndex) => (
              <div
                key={row.join("")}
                className="mb-3 flex justify-center gap-2 last:mb-0"
              >
                {rowIndex === 1 ? <div className="w-4" /> : null}
                {row.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => onChoose(letter)}
                    className="h-12 w-10 rounded-xl border border-white/10 bg-white/5 font-semibold text-white transition hover:bg-emerald-500/10 sm:h-14 sm:w-12"
                  >
                    {letter}
                  </button>
                ))}
                {rowIndex === 1 ? <div className="w-4" /> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export function GameBoard({
  game,
  category,
  words,
  onGoHome,
  onRematch,
}: {
  game: GameWithPlayers;
  category: string;
  words: string[];
  onGoHome: () => void;
  onRematch: (gameId: string) => void;
}) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [defenseWord, setDefenseWord] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const prevGhostTearsRef = useRef<{ p1: number; p2: number } | null>(null);
  const lastGameIdForTearsRef = useRef<string | null>(null);

  const updateWord = useMutation(api.games.updateWord);
  const challengeWord = useMutation(api.games.challenge);
  const acceptWord = useMutation(api.games.accept);
  const defendWord = useMutation(api.games.defend);
  const giveUp = useMutation(api.games.giveUp);
  const endGame = useMutation(api.games.endGame);
  const playAgain = useMutation(api.games.playAgain);

  const isPlayerTurn = game.currentTurn === game.currentUserId;

  const showResponseButtons =
    game.status === GAME_STATUS.PLAYING &&
    Boolean(game.currentWord?.trim()) &&
    isPlayerTurn;

  const showDefense =
    game.status === GAME_STATUS.CHALLENGED &&
    isPlayerTurn &&
    Boolean(game.currentWord);

  const canUseLetterKeyboard =
    isPlayerTurn && game.status === GAME_STATUS.PLAYING && busy === null;

  useEffect(() => {
    if (busy !== null) {
      return;
    }
    if (!canUseLetterKeyboard) {
      setKeyboardOpen(false);
      return;
    }
    setKeyboardOpen(true);
  }, [busy, canUseLetterKeyboard]);

  useEffect(() => {
    if (lastGameIdForTearsRef.current !== game.id) {
      lastGameIdForTearsRef.current = game.id;
      prevGhostTearsRef.current = {
        p1: game.player1GhostTears.length,
        p2: game.player2GhostTears.length,
      };
      return;
    }

    const prev = prevGhostTearsRef.current;
    const p1 = game.player1GhostTears.length;
    const p2 = game.player2GhostTears.length;

    if (prev === null) {
      prevGhostTearsRef.current = { p1, p2 };
      return;
    }

    const p1Gained = p1 > prev.p1;
    const p2Gained = p2 > prev.p2;

    if (!p1Gained && !p2Gained) {
      if (p1 < prev.p1 || p2 < prev.p2) {
        prevGhostTearsRef.current = { p1, p2 };
      }
      return;
    }

    if (p1Gained && p2Gained) {
      prevGhostTearsRef.current = { p1, p2 };
      return;
    }

    const loserIsP1 = p1Gained;
    const iLost =
      (loserIsP1 && game.currentUserId === game.player1Id) ||
      (!loserIsP1 &&
        game.player2Id !== null &&
        game.currentUserId === game.player2Id);

    if (iLost) {
      toast.error("You lost this exchange — you picked up a letter.");
    } else {
      toast.success(
        "You won this exchange — your opponent picked up a letter.",
      );
    }

    prevGhostTearsRef.current = { p1, p2 };
  }, [
    game.id,
    game.player1GhostTears.length,
    game.player2GhostTears.length,
    game.currentUserId,
    game.player1Id,
    game.player2Id,
  ]);

  const defensePrefixValid = useMemo(() => {
    if (!defenseWord) return false;
    return defenseWord.toLowerCase().startsWith(game.currentWord.toLowerCase());
  }, [defenseWord, game.currentWord]);

  const currentWinner =
    game.winnerId === game.player1.id
      ? game.player1
      : game.winnerId === game.player2?.id
        ? game.player2
        : null;

  async function runMutation(task: string, action: () => Promise<unknown>) {
    try {
      setBusy(task);
      await action();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setBusy(null);
    }
  }

  async function handleLetter(letter: string) {
    setKeyboardOpen(false);
    await runMutation("letter", () =>
      updateWord({ gameId: game.id, word: `${game.currentWord}${letter}` }),
    );
  }

  async function handleRematch() {
    await runMutation("rematch", async () => {
      const nextGame = await playAgain({ gameId: game.id });
      onRematch(nextGame.id);
    });
  }

  return (
    <>
      <div className="grid gap-6">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-300">
            {category}
          </div>
          <h1 className="text-3xl font-bold text-white">Now Playing</h1>
          <p className="mt-2 text-zinc-400">
            Build the chain, bluff when you dare, and avoid the next tear.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProgressBar
            username={game.player1.username}
            letters={game.player1GhostTears}
            isActive={game.currentTurn === game.player1Id}
          />
          <ProgressBar
            username={game.player2?.username ?? "Player 2"}
            letters={game.player2GhostTears}
            isActive={game.currentTurn === game.player2Id}
          />
        </div>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Current chain
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {game.currentWord.split("").map((letter, index) => (
                <div
                  key={`${letter}-${index}`}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 font-bold text-white shadow-lg shadow-black/20"
                >
                  {letter}
                </div>
              ))}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
                ?
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              {isPlayerTurn ? "Your move." : "Waiting for the other player."}
            </p>
          </div>

          {showResponseButtons ? (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  void runMutation("accept", () =>
                    acceptWord({ gameId: game.id }),
                  )
                }
                disabled={busy !== null}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Check className="h-4 w-4" />
                {busy === "accept" ? "Accepting..." : "Accept word"}
              </button>
              <button
                onClick={() =>
                  void runMutation("challenge", () =>
                    challengeWord({ gameId: game.id }),
                  )
                }
                disabled={busy !== null}
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <AlertTriangle className="h-4 w-4" />
                {busy === "challenge" ? "Challenging..." : "Challenge"}
              </button>
            </div>
          ) : null}
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl">
          <div className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Loss track
          </div>
          <div className="grid grid-cols-11 gap-2">
            {GHOST_SEQUENCE.map((letter, index) => {
              const mine =
                game.currentUserId === game.player1Id
                  ? game.player1GhostTears.length
                  : game.player2GhostTears.length;
              return (
                <div
                  key={`${letter}-${index}`}
                  className={`rounded-xl px-2 py-3 text-center font-semibold ${
                    index < mine
                      ? "border border-emerald-500/40 bg-emerald-500/20 text-emerald-300"
                      : "bg-white/5 text-zinc-500"
                  }`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <KeyboardPad
        isOpen={keyboardOpen}
        onToggle={() => setKeyboardOpen((value) => !value)}
        onChoose={(letter) => void handleLetter(letter)}
        disabled={!canUseLetterKeyboard}
      />

      {showDefense ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-red-500/30 bg-zinc-950/95 p-6 shadow-2xl shadow-black/50">
            <div className="mb-5 text-center">
              <div className="mx-auto mb-3 inline-flex rounded-full bg-red-500/10 p-3 text-red-300">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Defend the word</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Submit a valid {category} entry that begins with{" "}
                <span className="font-semibold text-red-300">
                  {game.currentWord}
                </span>
                .
              </p>
            </div>

            <input
              value={defenseWord}
              onChange={(event) => setDefenseWord(event.target.value)}
              placeholder={`Complete ${game.currentWord}...`}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500/40"
            />

            <div className="mt-3 text-xs text-zinc-500">
              Matching examples in this category:{" "}
              {words
                .filter((word) =>
                  word.toLowerCase().startsWith(game.currentWord.toLowerCase()),
                )
                .slice(0, 4)
                .join(", ") || "none"}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  void runMutation("give-up", () => giveUp({ gameId: game.id }))
                }
                disabled={busy !== null}
                className="rounded-xl bg-red-700 px-4 py-3 font-medium text-white transition hover:bg-red-600 disabled:opacity-60"
              >
                {busy === "give-up" ? "Giving up..." : "Give up"}
              </button>
              <button
                onClick={() =>
                  void runMutation("defend", () =>
                    defendWord({ gameId: game.id, defenseWord }),
                  )
                }
                disabled={!defensePrefixValid || busy !== null}
                className="rounded-xl bg-emerald-700 px-4 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {busy === "defend" ? "Defending..." : "Defend"}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {game.status === GAME_STATUS.ENDED ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/95 p-8 shadow-2xl shadow-black/60">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-emerald-500/10 p-4 text-emerald-300">
                <Trophy className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-bold text-white">Game over</h2>
              <p className="mt-3 text-zinc-400">
                {currentWinner
                  ? currentWinner.id === game.currentUserId
                    ? "You win."
                    : `${currentWinner.username} wins.`
                  : "This match has ended."}
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {game.currentUserId === game.player1Id ? (
                <button
                  onClick={() => void handleRematch()}
                  disabled={busy !== null}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
                >
                  <RefreshCw className="h-4 w-4" />
                  {busy === "rematch" ? "Starting rematch..." : "Play again"}
                </button>
              ) : null}
              <button
                onClick={() =>
                  void runMutation("end", async () => {
                    await endGame({ gameId: game.id });
                    onGoHome();
                  })
                }
                disabled={busy !== null}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-medium text-white transition hover:bg-white/15 disabled:opacity-60"
              >
                <Home className="h-4 w-4" />
                Leave game
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
