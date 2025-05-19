"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NoCategoriesFallback = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-screen justify-center h-screen">
      <div className="w-full max-w-lg px-6 py-12">
        <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-8 border border-zinc-700/30">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">No Categories Available</h2>
            <p className="text-zinc-400 mb-6">
              There are no word categories available at the moment. Please try
              again later.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 cursor-pointer rounded-lg flex items-center justify-center backdrop-blur-md bg-emerald-700/90 hover:bg-emerald-600/90 text-white border border-emerald-500/30 shadow-lg shadow-emerald-900/10 transition-colors"
              >
                Go Home
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoCategoriesFallback;
