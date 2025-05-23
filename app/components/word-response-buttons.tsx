"use client";

import { motion } from "framer-motion";
import { AlertTriangleIcon, CheckIcon } from "lucide-react";

type WordResponseButtonsProps = {
  submittedWord: string;
  isMyTurn: boolean;
  onAccept: () => void;
  onChallenge: () => void;
  isAccepting?: boolean;
  isChallenging?: boolean;
};

const WordResponseButtons = ({
  isMyTurn,
  onAccept,
  onChallenge,
  isAccepting = false,
  isChallenging = false,
}: WordResponseButtonsProps) => {
  const isResponding = isAccepting || isChallenging;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      {/* Buttons */}
      {isMyTurn ? (
        <div className="flex gap-4 justify-center relative z-[200]">
          <motion.button
            onClick={onAccept}
            whileHover={isResponding ? {} : { scale: 1.03 }}
            whileTap={isResponding ? {} : { scale: 0.97 }}
            disabled={isResponding}
            className={`px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg flex items-center justify-center backdrop-blur-md ${
              isResponding
                ? "bg-zinc-800/70 text-zinc-500 border border-zinc-700/30 cursor-not-allowed"
                : "bg-emerald-700/90 hover:bg-emerald-600/90 text-white border border-emerald-500/30 shadow-lg shadow-emerald-900/10"
            } transition-colors`}
          >
            <CheckIcon className="mr-2 h-5 w-5" />
            {isAccepting ? "Accepting..." : "Accept Word"}
          </motion.button>

          <motion.button
            onClick={onChallenge}
            whileHover={isResponding ? {} : { scale: 1.03 }}
            whileTap={isResponding ? {} : { scale: 0.97 }}
            disabled={isResponding}
            className={`px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg flex items-center justify-center backdrop-blur-md ${
              isResponding
                ? "bg-zinc-800/70 text-zinc-500 border border-zinc-700/30 cursor-not-allowed"
                : "bg-red-700/90 hover:bg-red-600/90 text-white border border-red-500/30 shadow-lg shadow-red-900/10"
            } transition-colors`}
          >
            <AlertTriangleIcon className="mr-2 h-5 w-5" />
            {isChallenging ? "Challenging..." : "Challenge Word"}
          </motion.button>
        </div>
      ) : (
        <p className="text-sm text-zinc-500">
          Waiting for opponent to respond to the word...
        </p>
      )}
    </motion.div>
  );
};

export default WordResponseButtons;
