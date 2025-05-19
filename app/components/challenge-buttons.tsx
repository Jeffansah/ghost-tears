"use client";

import { motion } from "framer-motion";
import { AlertTriangleIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";

type ChallengeButtonsProps = {
  submittedWord: string;
  isMyTurn: boolean;
  onChallenge: () => void;
  onPass: () => void;
  isChallenging?: boolean;
};

const ChallengeButtons = ({
  submittedWord,
  isMyTurn,
  onChallenge,
  onPass,
  isChallenging = false,
}: ChallengeButtonsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      {/* Word Display */}
      <div className="mb-4">
        <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
          Submitted Word
        </h3>
        <div className="text-2xl font-bold text-white">{submittedWord}</div>
      </div>

      {/* Buttons */}
      {isMyTurn ? (
        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={onPass}
            whileHover={isChallenging ? {} : { scale: 1.03 }}
            whileTap={isChallenging ? {} : { scale: 0.97 }}
            disabled={isChallenging}
            className={`px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg flex items-center justify-center backdrop-blur-md ${
              isChallenging
                ? "bg-zinc-800/70 text-zinc-500 border border-zinc-700/30 cursor-not-allowed"
                : "bg-emerald-700/90 hover:bg-emerald-600/90 text-white border border-emerald-500/30 shadow-lg shadow-emerald-900/10"
            } transition-colors`}
          >
            <CheckIcon className="mr-2 h-5 w-5" />
            {isChallenging ? "Passing..." : "Pass"}
          </motion.button>

          <motion.button
            onClick={onChallenge}
            whileHover={isChallenging ? {} : { scale: 1.03 }}
            whileTap={isChallenging ? {} : { scale: 0.97 }}
            disabled={isChallenging}
            className={`px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg flex items-center justify-center backdrop-blur-md ${
              isChallenging
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
          Waiting for opponent to challenge or pass...
        </p>
      )}
    </motion.div>
  );
};

export default ChallengeButtons;
