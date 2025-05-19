"use client";

import { useState } from "react";
import { GameStatus } from "../generated/prisma";
import { submitWord } from "@/server/game/words/submit-word.action";
import { errorToast } from "@/lib/toaster-configurations";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

type SubmitWordProps = {
  status: GameStatus;
  isPlayerTurn: boolean;
  category: {
    name: string;
    id: string;
    description: string | null;
    words: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  gameId: string;
  currentUserId: string;
  currentWord: string;
};

const SubmitWord = ({
  status,
  isPlayerTurn,
  category,
  gameId,
  currentUserId,
  currentWord,
}: SubmitWordProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!isPlayerTurn || status !== GameStatus.PLAYING || !currentWord) return;

    setIsSubmitting(true);
    try {
      const result = await submitWord(gameId, currentWord, currentUserId);
      if (!result.success) {
        errorToast(result.error || "Failed to submit word");
      }
    } catch (error) {
      console.error("Error submitting word:", error);
      errorToast("Failed to submit word. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't show submit button if game is not in playing state
  if (status !== GameStatus.PLAYING) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <motion.button
        onClick={handleSubmit}
        whileHover={!isPlayerTurn || isSubmitting ? {} : { scale: 1.03 }}
        whileTap={!isPlayerTurn || isSubmitting ? {} : { scale: 0.97 }}
        disabled={!isPlayerTurn || !currentWord || isSubmitting}
        className={`px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg flex items-center justify-center mx-auto backdrop-blur-md ${
          !isPlayerTurn || !currentWord || isSubmitting
            ? "bg-zinc-800/70 text-zinc-500 border border-zinc-700/30 cursor-not-allowed"
            : "bg-emerald-700/90 hover:bg-emerald-600/90 text-white border border-emerald-500/30 shadow-lg shadow-emerald-900/10"
        } transition-colors`}
      >
        <CheckIcon className="mr-2 h-5 w-5" />
        {isSubmitting ? "Submitting..." : "Submit Word"}
      </motion.button>
      <p className="text-xs text-zinc-500 mt-2">
        {!isPlayerTurn
          ? "Wait for your turn"
          : `Submit if you believe this is a valid ${category.name} name`}
      </p>
    </motion.div>
  );
};

export default SubmitWord;
