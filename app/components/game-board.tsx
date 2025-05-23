"use client";

import { useEffect, useState } from "react";
import { Game, User, WordCategory, GameStatus } from "../generated/prisma";
import LetterChain from "./letter-chain";
import PlayerTurnBadge from "./player-turn-badge";
import GhostTearsTracker from "./ghost-tears-tracker";
import FloatingKeyboard from "./floating-keyboard";
import { updateGameWord } from "@/server/game/words/update-game-word.action";
import { errorToast, successToast } from "@/lib/toaster-configurations";
import GameStateSync from "./game-state-sync";
import { challengeWord } from "@/server/game/words/challenge-word.action";
import WordResponseButtons from "./word-response-buttons";
import { acceptWord } from "@/server/game/words/accept-word.action";
import { useStore } from "@/store";
import { GameEndModal } from "./game-end-modal";
import DefenseModal from "./defense-modal";
import { defendWord } from "@/server/game/words/defend-word.action";
import { giveUpChallenge } from "@/server/game/words/give-up-challenge.action";
import RulesModal from "./game-rules-modal";

type GameWithPlayers = Game & {
  player1: User;
  player2: User | null;
  currentUserId: string;
};

const GameBoard = ({
  game,
  wordList,
}: {
  game: GameWithPlayers;
  wordList: WordCategory;
}) => {
  const [gameState, setGameState] = useState<GameWithPlayers>(game);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isChallenging, setIsChallenging] = useState(false);
  const isPlayerTurn = gameState.currentTurn === gameState.currentUserId;
  const { refresh, setRefresh } = useStore();
  const [isDefending, setIsDefending] = useState(false);
  const { showRulesModal, setShowRulesModal } = useStore();

  useEffect(() => {
    // Check if user has seen rules before
    const hasSeenRules = localStorage.getItem("ghost-tears-rules-seen");
    if (!hasSeenRules) {
      setShowRulesModal(true);
    }
  }, []);

  // Update game state when game is updated
  const handleGameUpdate = (
    updatedGame: Game & { player1: User; player2: User | null }
  ) => {
    // Detect challenge resolution (CHALLENGED -> PLAYING transition)
    const wasChallenged = gameState.status === GameStatus.CHALLENGED;
    const isNowPlaying = updatedGame.status === GameStatus.PLAYING;

    if (wasChallenged && isNowPlaying) {
      // Challenge was resolved - check who got the tear
      const currentUserTears =
        gameState.currentUserId === gameState.player1Id
          ? gameState.player1GhostTears.length
          : gameState.player2GhostTears.length;

      const newUserTears =
        gameState.currentUserId === updatedGame.player1Id
          ? updatedGame.player1GhostTears.length
          : updatedGame.player2GhostTears.length;

      const userGotTear = newUserTears > currentUserTears;

      if (userGotTear) {
        errorToast("You lost the challenge and got a ghost tear!");
      } else {
        successToast("You won the challenge - opponent got a tear!");
      }
    }

    setGameState({ ...updatedGame, currentUserId: game.currentUserId });
    setRefresh(false); // Turn off refresh after game state is updated
  };

  // Add letter to current word
  const handleAddLetter = async (letter: string) => {
    if (!isPlayerTurn) return;

    const newWord = gameState.currentWord + letter;

    // Optimistic update
    setGameState((prev) => ({ ...prev, currentWord: newWord }));
    setRefresh(true); // Start refresh for letter update

    try {
      const result = await updateGameWord(gameState.id, newWord);
      if (!result.success) {
        errorToast(result.error || "Failed to update word");
        // Revert optimistic update
        setGameState((prev) => ({
          ...prev,
          currentWord: gameState.currentWord,
        }));
        setRefresh(false); // Turn off refresh on error
      }
    } catch (error) {
      console.error("Failed to update game word:", error);
      errorToast("Failed to update game word. Please try again.");
      // Revert optimistic update
      setGameState((prev) => ({ ...prev, currentWord: gameState.currentWord }));
      setRefresh(false); // Turn off refresh on error
    }
  };

  const handleChallenge = async () => {
    if (
      !isPlayerTurn ||
      gameState.status !== GameStatus.PLAYING ||
      !gameState.currentWord
    )
      return;

    setIsChallenging(true);
    try {
      const result = await challengeWord(gameState.id, gameState.currentUserId);
      console.log("Challenge Word Result:", result);
      if (!result.success) {
        errorToast(result.error || "Failed to challenge word");
      } else {
        successToast("Challenged player!");
        setGameState({ ...result.game, currentUserId: game.currentUserId });
      }
    } catch (error) {
      console.error("Error challenging word:", error);
      errorToast("Failed to challenge word. Please try again.");
    } finally {
      setIsChallenging(false);
    }
  };

  const handleAccept = async () => {
    if (
      !isPlayerTurn ||
      gameState.status !== GameStatus.PLAYING ||
      !gameState.currentWord
    )
      return;

    setIsAccepting(true);
    try {
      const result = await acceptWord(
        gameState.id as string,
        gameState.currentUserId
      );
      if (!result.success) {
        errorToast(result.error || "Failed to accept word");
      }
    } catch (error) {
      console.error("Error accepting word:", error);
      errorToast("Failed to accept word. Please try again.");
    } finally {
      setIsAccepting(false);
    }
  };

  const handleDefend = async (defenseWord: string) => {
    setIsDefending(true);

    try {
      const result = await defendWord(
        gameState.id,
        gameState.currentUserId,
        defenseWord
      );
      if (!result.success) {
        errorToast(result.error || "Failed to defend word");
      } else {
        // Remove duplicate toast notifications - they're now handled in handleGameUpdate
        setGameState({ ...result.game, currentUserId: game.currentUserId });
      }
    } catch (error) {
      console.error("Error defending word:", error);
      errorToast("Failed to defend word. Please try again.");
    } finally {
      setIsDefending(false);
    }
  };
  const handleGiveUp = async () => {
    setIsDefending(true);
    try {
      const result = await giveUpChallenge(
        gameState.id,
        gameState.currentUserId
      );
      if (!result.success) {
        errorToast(result.error || "Failed to give up challenge");
      } else {
        // Game state will be updated via handleGameUpdate when Pusher syncs
        setGameState({ ...result.game, currentUserId: game.currentUserId });
      }
    } catch (error) {
      console.error("Error giving up challenge:", error);
      errorToast("Failed to give up challenge. Please try again.");
    } finally {
      setIsDefending(false);
    }
  };

  return (
    <div className="w-full max-w-4xl py-8 flex flex-col gap-8">
      {/* Category Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center px-2 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
          <div className="w-1 h-1 bg-emerald-400 rounded-full mr-1.5"></div>
          <span className="text-emerald-400 font-medium text-xs tracking-wide uppercase">
            {wordList.name}
          </span>
        </div>
      </div>

      {/* Show GameEndModal when game has a winner */}
      {gameState.winnerId && (
        <GameEndModal game={gameState} category={wordList.name} />
      )}

      {/* Challenge/Submit Section */}
      {gameState.status === GameStatus.PLAYING && gameState.currentWord && (
        <>
          {!refresh ? (
            <WordResponseButtons
              submittedWord={gameState.currentWord}
              isMyTurn={isPlayerTurn}
              onAccept={handleAccept}
              onChallenge={handleChallenge}
              isAccepting={isAccepting}
              isChallenging={isChallenging}
            />
          ) : (
            <p className="text-sm text-zinc-500 text-center">
              Waiting for opponent to respond to the word...
            </p>
          )}
        </>
      )}

      {/* Show Defense Modal when challenged and it's player's turn */}
      {gameState.status === GameStatus.CHALLENGED &&
        gameState.currentTurn === gameState.currentUserId && (
          <DefenseModal
            isOpen={true}
            category={wordList.name}
            currentWord={gameState.currentWord}
            onDefend={handleDefend}
            onGiveUp={handleGiveUp}
          />
        )}

      {/* Player Status Section */}
      <div className="grid grid-cols-2 gap-8">
        <PlayerTurnBadge
          username={gameState.player1.username}
          collectedLetters={gameState.player1GhostTears}
          isPlayerTurn={gameState.currentTurn === gameState.player1Id}
          playerNumber={1}
        />
        <PlayerTurnBadge
          username={gameState.player2?.username || "Player 2"}
          collectedLetters={gameState.player2GhostTears}
          isPlayerTurn={gameState.currentTurn === gameState.player2Id}
          playerNumber={2}
        />
      </div>

      {/* Game Board Section */}
      <div className="bg-zinc-800/40 backdrop-blur-md rounded-xl p-6 border border-zinc-700/50">
        <LetterChain currentChain={gameState.currentWord} />
      </div>

      <GhostTearsTracker
        currentUserId={gameState.currentUserId}
        player1Id={gameState.player1Id}
        player1GhostTears={gameState.player1GhostTears}
        player2GhostTears={gameState.player2GhostTears}
      />
      <FloatingKeyboard
        onLetterClick={handleAddLetter}
        isActive={gameState.status === GameStatus.PLAYING && isPlayerTurn}
        isYourTurn={isPlayerTurn}
      />
      <GameStateSync gameId={gameState.id} onGameUpdate={handleGameUpdate} />

      {showRulesModal && <RulesModal />}
    </div>
  );
};

export default GameBoard;
