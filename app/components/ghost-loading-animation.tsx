"use client";

import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

const GhostLoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Ghost className="w-20 h-20 text-emerald-500" />
        </motion.div>
      </motion.div>

      <div className="flex gap-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-emerald-500"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GhostLoadingAnimation;
