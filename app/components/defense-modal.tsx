"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldIcon,
  AlertTriangleIcon,
  LoaderIcon,
  CheckIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DefenseModalProps {
  isOpen: boolean;
  currentWord: string;
  category: string;
  onDefend: (defenseWord: string) => Promise<void>;
  onGiveUp: () => Promise<void>;
}

export default function DefenseModal({
  isOpen,
  currentWord,
  category,
  onDefend,
  onGiveUp,
}: DefenseModalProps) {
  const [defenseWord, setDefenseWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Reset state when modal opens or currentWord changes
  useEffect(() => {
    if (isOpen) {
      setDefenseWord("");
      setError(null);
      setIsLoading(false);
    }
  }, [isOpen, currentWord]);

  // Validate input
  useEffect(() => {
    // Don't validate if input is empty
    if (!defenseWord.trim()) {
      setIsValid(false);
      setError(null);
      return;
    }

    if (defenseWord.toLowerCase().startsWith(currentWord.toLowerCase())) {
      setIsValid(defenseWord.length >= currentWord.length);
      setError(null);
    } else {
      setIsValid(false);
      if (defenseWord.length >= currentWord.length) {
        setError(`Word must start with "${currentWord}"`);
      } else {
        setError(null); // Don't show error if they're still typing
      }
    }
  }, [defenseWord, currentWord]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      await onDefend(defenseWord);
    } catch (err) {
      setError("Failed to submit defense");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle giving up
  const handleGiveUp = async () => {
    setIsLoading(true);
    try {
      await onGiveUp();
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-red-500/30 shadow-xl max-w-lg w-full p-6"
      >
        {/* Pulsing border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-red-500/30"
          animate={{
            boxShadow: [
              "0 0 0px rgba(239, 68, 68, 0.2)",
              "0 0 15px rgba(239, 68, 68, 0.5)",
              "0 0 0px rgba(239, 68, 68, 0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="text-center mb-6">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            {/* <ZapIcon className="h-10 w-10 text-red-400 mx-auto mb-2" /> */}
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-1">
            You've Been Challenged!
          </h3>
          <p className="text-red-300 text-sm font-medium">
            Submit a valid word starting with "{currentWord.toUpperCase()}" or
            just as is if you believe it's a valid {category}.
          </p>
        </div>

        <div className="bg-zinc-800/60 backdrop-blur-md rounded-lg p-4 mb-6 border border-red-500/20">
          <div className="text-sm text-zinc-400 mb-2">
            Current Word to Complete
          </div>
          <div className="text-2xl font-bold text-red-400 tracking-wider mb-4 text-center">
            {currentWord}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={defenseWord}
                onChange={(e) => setDefenseWord(e.target.value)}
                placeholder={`Submit as is or complete "${currentWord}"...`}
                className={`w-full bg-zinc-900/70 border-2 ${
                  !defenseWord.trim()
                    ? "border-red-500/30"
                    : error
                    ? "border-red-500/50"
                    : isValid
                    ? "border-emerald-500/50"
                    : "border-red-500/30"
                } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                  !defenseWord.trim()
                    ? "focus:ring-red-500/30"
                    : error
                    ? "focus:ring-red-500/30"
                    : isValid
                    ? "focus:ring-emerald-500/30"
                    : "focus:ring-red-500/30"
                } transition-colors`}
                disabled={isLoading}
                autoComplete="off"
              />

              {defenseWord && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isValid && !error && (
                    <CheckIcon className="h-5 w-5 text-emerald-400" />
                  )}
                  {error && <XIcon className="h-5 w-5 text-red-400" />}
                </div>
              )}
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2 text-red-400 text-sm flex items-center"
                >
                  <AlertTriangleIcon className="h-4 w-4 mr-1" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-2 flex justify-between items-center">
              <div className="text-xs text-zinc-400">
                {defenseWord.length} characters
                {currentWord && defenseWord.startsWith(currentWord) && (
                  <span>
                    {" "}
                    ({defenseWord.length - currentWord.length} added)
                  </span>
                )}
              </div>

              {isValid && !error && (
                <div className="text-xs text-emerald-400">
                  <CheckIcon className="h-3 w-3 inline mr-1" />
                  Valid format
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button
                type="button"
                onClick={handleGiveUp}
                className="py-3 bg-red-700/80 hover:bg-red-600/80 text-white"
                disabled={isLoading}
              >
                <XIcon className="h-5 w-5 mr-2" />
                Give Up
              </Button>

              <Button
                type="submit"
                disabled={!isValid || isLoading}
                className={`py-3 ${
                  isValid && !isLoading
                    ? "bg-emerald-700/80 hover:bg-emerald-600/80 text-white"
                    : "bg-zinc-800/70 text-zinc-500 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <>
                    <LoaderIcon className="h-5 w-5 mr-2 animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    <ShieldIcon className="h-5 w-5 mr-2" />
                    Defend
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* <div className="text-center text-zinc-400 text-xs">
          <p>
            Complete "{currentWord}" into a valid word from the selected
            category
          </p>
          <p className="mt-1 font-medium text-red-400">
            Valid word = Challenger gets a tear • Invalid word / Give up = You
            get a tear
          </p>
        </div> */}
      </motion.div>
    </motion.div>
  );
}
