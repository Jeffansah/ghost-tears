"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface WordCategory {
  name: string;
  id: string;
  words: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  isActive: boolean;
}

const SelectCategory = ({ categories }: { categories: WordCategory[] }) => {
  const router = useRouter();
  return (
    <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-12 border border-zinc-700/30">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-xl font-bold mb-2">Select a Category</h2>
        <p className="text-zinc-400 text-sm">
          Choose a word category to start your game
        </p>
      </div>
      <Select
        onValueChange={(value) => {
          router.push(`/game/category/${value}`);
        }}
      >
        <SelectTrigger className="w-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/20 text-zinc-200 hover:bg-zinc-700/50 transition-colors">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-800/90 backdrop-blur-md border border-zinc-700/30">
          <SelectGroup>
            <SelectLabel className="text-zinc-400">Categories</SelectLabel>
            {categories.map((category) => (
              <SelectItem
                key={category.id}
                value={category.name}
                className="capitalize cursor-pointer text-zinc-200 hover:bg-zinc-700/50 hover:text-emerald-400 focus:bg-zinc-700/50 focus:text-emerald-400 transition-colors"
              >
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCategory;
