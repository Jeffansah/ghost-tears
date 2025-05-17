import getCategories from "@/server/game/category/get-categories.action";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectCategory from "@/app/components/select-category";
import getActiveGame from "@/server/game/get-active-game.action";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const page = async () => {
  const activeGame = await getActiveGame();

  if (!activeGame.success && activeGame.error === "Failed to get/create game") {
    throw new Error("Failed to get/create game");
  }

  if (
    !activeGame.success &&
    (activeGame.error === "User not found" ||
      activeGame.error === "User not found in database")
  ) {
    redirect("/sign-in");
  }

  if (activeGame.success && activeGame.game) {
    redirect(
      `/game/category/${activeGame.game.wordListCategory}/${activeGame.game.id}`
    );
  }

  const data = await getCategories();

  if (!data.success || !data.categories) {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="none" disabled>
              No categories found
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  if (data.categories.length === 0) {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="none" disabled>
              No categories found
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  return <SelectCategory categories={data.categories} />;
};

export default page;
