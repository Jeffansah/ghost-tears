"use client";

import { motion } from "motion/react";

const LetterChain = ({ currentChain }: { currentChain: string }) => {
  return (
    <div className="text-center">
      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
        Current Letter Chain
      </h3>
      <div className="flex justify-center space-x-2">
        {currentChain.split("").map((letter, index) => (
          <motion.div
            key={`${letter}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01 }}
            className="w-12 h-12 flex items-center justify-center rounded-md bg-zinc-700/80 backdrop-blur-sm text-white font-bold text-xl"
          >
            {letter}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: currentChain.length * 0.1 }}
          className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-dashed border-zinc-600 text-zinc-500 font-bold text-xl"
        >
          ?
        </motion.div>
      </div>
      <p className="mt-4 text-zinc-400 text-sm">
        Add a letter to continue the chain
      </p>
    </div>
  );
};

export default LetterChain;
