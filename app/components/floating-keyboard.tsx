"use client";

import { motion, AnimatePresence } from "framer-motion";
import { KeyboardIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingKeyboardProps {
  onLetterClick: (letter: string) => void;
  isActive: boolean;
  isYourTurn: boolean;
}

export default function FloatingKeyboard({
  onLetterClick,
  isActive,
  isYourTurn,
}: FloatingKeyboardProps) {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // Reset keyboard visibility when game state changes
  useEffect(() => {
    setIsKeyboardVisible(false);
  }, [isActive]);

  // Define keyboard rows for better layout
  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const toggleKeyboard = () => {
    if (!isActive) return; // Don't allow toggling if keyboard is not active
    setIsKeyboardVisible(!isKeyboardVisible);
  };

  return (
    <>
      {/* Toggle Button - Always visible */}
      <motion.button
        onClick={toggleKeyboard}
        className={`fixed bottom-6 right-6  z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          isKeyboardVisible
            ? "bg-red-800/90 hover:bg-red-700/90"
            : isActive
            ? "bg-emerald-700/90 cursor-pointer hover:bg-emerald-600/90"
            : "bg-zinc-700/90 cursor-not-allowed"
        } backdrop-blur-md border border-zinc-700/30 transition-colors`}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isKeyboardVisible ? 180 : 0 }}
        disabled={!isActive}
      >
        {isKeyboardVisible ? (
          <XIcon className="h-6 w-6 text-white" />
        ) : (
          <KeyboardIcon className="h-6 w-6 text-white" />
        )}
      </motion.button>

      {/* Keyboard */}
      <AnimatePresence>
        {isActive && isKeyboardVisible && (
          <motion.div
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            exit={{ y: 400 }}
            transition={{ type: "spring", damping: 27, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-40 pb-4 px-4"
          >
            <div className="mx-auto max-w-5xl">
              <div
                className="bg-zinc-900/70 rounded-xl border border-emerald-500/20 shadow-lg shadow-emerald-900/10 overflow-hidden"
                style={{
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Keyboard section */}
                <div className="p-4">
                  {keyboardRows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex justify-center mb-3 last:mb-0"
                    >
                      {rowIndex === 1 && <div className="w-4"></div>}
                      {row.map((letter) => (
                        <motion.button
                          key={letter}
                          onClick={() => {
                            onLetterClick(letter);
                            setIsKeyboardVisible(false);
                          }}
                          disabled={!isYourTurn}
                          className={`m-1 cursor-pointer disabled:cursor-not-allowed w-12 h-14 sm:w-14 sm:h-16 rounded-xl flex items-center justify-center font-medium text-xl transition-all ${
                            isYourTurn
                              ? "bg-zinc-800/80 hover:bg-zinc-700/80 active:bg-emerald-700/80 text-white border border-emerald-500/10"
                              : "bg-zinc-800/50 text-zinc-500 cursor-not-allowed"
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          {letter}
                        </motion.button>
                      ))}
                      {rowIndex === 1 && <div className="w-4"></div>}
                    </div>
                  ))}
                </div>

                {/* Bottom safe area for mobile */}
                <div className="h-2 sm:h-0"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
