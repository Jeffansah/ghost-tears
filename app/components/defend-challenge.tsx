"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldIcon,
  AlertTriangleIcon,
  LoaderIcon,
  CheckIcon,
  XIcon,
  ClockIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DefenseModalProps {
  isOpen: boolean;
  currentWord: string;
  onDefend: (word: string) => Promise<void>;
}

export default function DefenseModal({
  isOpen,
  currentWord,
  onDefend,
}: DefenseModalProps) {
  const [defenseWord, setDefenseWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
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
      setTimeLeft(15);
    }
  }, [isOpen, currentWord]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen || isLoading) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit with empty word to fail if time runs out
          if (!isLoading && isOpen) {
            setError("Time's up! You failed to defend.");
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isLoading]);

  // Validate input
  useEffect(() => {
    // Check if defense word starts with current word
    if (defenseWord.toLowerCase().startsWith(currentWord.toLowerCase())) {
      setIsValid(defenseWord.length > currentWord.length);
      setError(null);
    } else {
      setIsValid(false);
      if (defenseWord.length >= currentWord.length) {
        setError(`Word must start with "${currentWord}"`);
      }
    }
  }, [defenseWord, currentWord]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefenseWord(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      await onDefend(defenseWord);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit defense");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // Calculate urgency color based on time left
  const getUrgencyColor = () => {
    if (timeLeft <= 5) return "text-red-400";
    if (timeLeft <= 10) return "text-amber-400";
    return "text-emerald-400";
  };

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
        className="relative bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-red-500/30 shadow-xl max-w-md w-full p-6"
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

        {/* Timer badge */}
        <div className="absolute -top-3 -right-3">
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-md opacity-30 ${
                timeLeft <= 5 ? "bg-red-500" : "bg-amber-500"
              }`}
            />
            <div
              className={`relative ${
                timeLeft <= 5 ? "bg-red-600" : "bg-amber-600"
              } text-white rounded-full w-10 h-10 flex items-center justify-center`}
            >
              <ClockIcon className="h-4 w-4" />
              <span className="text-xs font-bold ml-1">{timeLeft}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            <ZapIcon className="h-10 w-10 text-red-400 mx-auto mb-2" />
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-1">
            You've Been Challenged!
          </h3>
          <p className="text-red-300 text-sm font-medium">
            Prove "{currentWord}" is a valid Pokémon name or get a ghost tear!
          </p>
        </div>

        <div className="bg-zinc-800/60 backdrop-blur-md rounded-lg p-4 mb-6 border border-red-500/20">
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-zinc-400">Challenged Word</div>
            <div
              className={`text-sm font-medium flex items-center ${getUrgencyColor()}`}
            >
              <ClockIcon className="h-3 w-3 mr-1" />
              {timeLeft <= 5
                ? "Hurry up!"
                : timeLeft <= 10
                ? "Time running out!"
                : "Defend quickly!"}
            </div>
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
                onChange={handleInputChange}
                placeholder="Complete this Pokémon name..."
                className={`w-full bg-zinc-900/70 border-2 ${
                  error
                    ? "border-red-500/50"
                    : isValid
                    ? "border-emerald-500/50"
                    : "border-amber-500/50"
                } rounded-lg px-4 py-3 text-white focus:outline-none ${
                  error ? "focus:ring-red-500/30" : "focus:ring-emerald-500/30"
                } transition-colors`}
                disabled={isLoading || timeLeft === 0}
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

            <Button
              type="submit"
              disabled={!isValid || isLoading || timeLeft === 0}
              className={`w-full mt-4 py-6 ${
                isValid && !isLoading && timeLeft > 0
                  ? "bg-red-700/80 hover:bg-red-600/80 text-white"
                  : "bg-zinc-800/70 text-zinc-500 cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <>
                  <LoaderIcon className="h-5 w-5 mr-2 animate-spin" />
                  Validating...
                </>
              ) : timeLeft === 0 ? (
                <>
                  <XIcon className="h-5 w-5 mr-2" />
                  Failed to defend
                </>
              ) : (
                <>
                  <ShieldIcon className="h-5 w-5 mr-2" />
                  Defend Now!
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="text-center text-zinc-400 text-xs">
          <p>
            You must complete a valid Pokémon name that starts with "
            {currentWord}"
          </p>
          <p className="mt-1 font-medium text-amber-400">
            Fail to defend and you'll get a ghost tear!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
