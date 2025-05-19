"use client";

import { Button } from "@/components/ui/button";

interface GameKeypadProps {
  onLetterClick: (letter: string) => void;
  isPlayerTurn: boolean;
}

const GameKeypad = ({ onLetterClick, isPlayerTurn }: GameKeypadProps) => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="grid grid-cols-5 gap-2 mb-8">
      {letters.map((letter, index) => (
        <Button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={!isPlayerTurn}
          variant="outline"
          className={`py-8 px-4 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 border-none active:bg-emerald-700/80 backdrop-blur-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg ${
            letter === "Z" ? "col-start-3" : ""
          }`}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default GameKeypad;
