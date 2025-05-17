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
    <Select
      onValueChange={(value) => {
        router.push(`/game/category/${value}`);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => (
            <SelectItem
              key={category.id}
              value={category.name}
              className="capitalize cursor-pointer"
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
