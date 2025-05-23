"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GhostIcon, BookOpenIcon, CheckIcon, ShieldIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store";

export default function RulesModal() {
  const { setShowRulesModal } = useStore();
  const [rulesAccepted, setRulesAccepted] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if user has scrolled to the bottom
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;
    const isBottom = scrollTop + clientHeight >= scrollHeight - 20;

    if (isBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleConfirm = () => {
    // Mark rules as seen in localStorage
    localStorage.setItem("ghost-tears-rules-seen", "true");
    setShowRulesModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-emerald-500/20 shadow-xl max-w-2xl w-full"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-700/50">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center mr-3">
              <BookOpenIcon className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Ghost-Tears Game Rules
              </h2>
              <p className="text-zinc-400 text-sm">
                Learn how to play before starting
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollContainerRef}
          className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar"
          onScroll={handleScroll}
        >
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Game Objective
              </h3>
              <p className="text-zinc-300 text-sm">
                Avoid collecting all letters in "GHOST-TEARS". The first player
                to collect all 10 letters loses the game.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                How to Play
              </h3>
              <p className="text-zinc-300 text-sm mb-2">
                Players take turns building words letter by letter. Each turn,
                you can add a letter to continue the word chain.
              </p>
              <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                <li>
                  Click letters on the keyboard to add them to the current word
                </li>
                <li>Build toward valid words from the selected category</li>
                <li>
                  When ready, submit your word for the opponent to respond
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Responding to Words
              </h3>
              <p className="text-zinc-300 text-sm mb-2">
                When your opponent submits a word, you have two options:
              </p>
              <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700/30">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5">
                    <CheckIcon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-400 text-sm">
                      Accept the Word
                    </h4>
                    <p className="text-zinc-300 text-sm">
                      Accept that the word is valid. You get a ghost tear and
                      your opponent gets the next turn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-400 text-sm">
                      Challenge the Word
                    </h4>
                    <p className="text-zinc-300 text-sm">
                      Challenge that the word is invalid. This starts a defense
                      phase where your opponent must prove their word.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Defense Phase
              </h3>
              <p className="text-zinc-300 text-sm mb-2">
                When challenged, you must defend your word by completing it into
                a valid word from the category:
              </p>
              <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700/30">
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5">
                    <ShieldIcon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-400 text-sm">
                      Defend Successfully
                    </h4>
                    <p className="text-zinc-300 text-sm">
                      Complete your word into a valid category word. The
                      challenger gets a ghost tear.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-400 text-sm">
                      Defense Fails
                    </h4>
                    <p className="text-zinc-300 text-sm">
                      If your completed word is invalid or you give up, you get
                      a ghost tear.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Ghost Tears Collection
              </h3>
              <p className="text-zinc-300 text-sm mb-2">
                Players collect ghost tears in order: G-H-O-S-T-T-E-A-R-S
              </p>
              <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                <li>You get a tear when accepting an opponent's word</li>
                <li>You get a tear when challenging incorrectly</li>
                <li>You get a tear when failing to defend your word</li>
                <li>First player to collect all 10 letters loses</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Word Categories
              </h3>
              <p className="text-zinc-300 text-sm mb-2">
                Games are played using specific categories. Words must be valid
                entries from the selected category:
              </p>
              <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                <li>Pokémon names (e.g., Pikachu, Charizard)</li>
                <li>Country names (e.g., Japan, Brazil)</li>
                <li className="text-zinc-400">More categories coming soon!</li>
                <li>Words must start with the current letter sequence</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Strategy Tips
              </h3>
              <ul className="list-disc pl-5 text-zinc-300 text-sm space-y-1">
                <li>Know your category words well before challenging</li>
                <li>Sometimes accepting is safer than risking a challenge</li>
                <li>Build letter sequences that are hard to complete</li>
                <li>Pay attention to your opponent's ghost tear count</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer with checkbox and button */}
        <div className="p-6 border-t border-zinc-700/50">
          <div className="flex items-center mb-4">
            <div
              className={`
              relative w-5 h-5 mr-3 border rounded 
              ${
                rulesAccepted
                  ? "border-emerald-500 bg-emerald-500/20"
                  : hasScrolledToBottom
                  ? "border-emerald-500/50 animate-pulse"
                  : "border-zinc-600"
              }
            `}
            >
              <input
                type="checkbox"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                checked={rulesAccepted}
                onChange={() => setRulesAccepted(!rulesAccepted)}
              />
              {rulesAccepted && (
                <CheckIcon className="h-4 w-4 text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
            <label
              className={`text-sm ${
                hasScrolledToBottom ? "text-emerald-400" : "text-zinc-400"
              }`}
            >
              I have read and understand the rules of Ghost-Tears
            </label>
          </div>

          <Button
            onClick={handleConfirm}
            disabled={!rulesAccepted}
            className={`w-full py-6 ${
              rulesAccepted
                ? "bg-emerald-700/80 hover:bg-emerald-600/80 text-white"
                : "bg-zinc-800/70 text-zinc-500 cursor-not-allowed"
            }`}
          >
            <GhostIcon className="mr-2 h-5 w-5" />
            Start Playing
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
