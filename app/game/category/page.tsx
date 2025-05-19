import getCategories from "@/server/game/category/get-categories.action";

import SelectCategory from "@/app/components/select-category";
import getActiveGame from "@/server/game/get-active-game.action";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import NoCategoriesFallback from "@/app/components/no-categories-fallback";
import { GameStatus } from "@/app/generated/prisma";

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

  if (
    activeGame.success &&
    activeGame.game &&
    activeGame.game.status === GameStatus.WAITING &&
    activeGame.game.player2Id !== null &&
    activeGame.game.player2Id === activeGame.game.currentUserId
  ) {
    redirect(`/game/invite/${activeGame.game.id}`);
  }

  if (
    activeGame.success &&
    activeGame.game &&
    activeGame.game.status === GameStatus.WAITING &&
    activeGame.game.player2Id === null &&
    activeGame.game.player1Id === activeGame.game.currentUserId
  ) {
    redirect(
      `/game/category/${activeGame.game.wordListCategory}/new/${activeGame.game.id}`
    );
  }

  if (
    activeGame.success &&
    activeGame.game &&
    activeGame.game.status === GameStatus.WAITING &&
    activeGame.game.player2Id !== null &&
    activeGame.game.player1Id === activeGame.game.currentUserId
  ) {
    redirect(
      `/game/category/${activeGame.game.wordListCategory}/waiting/${activeGame.game.id}`
    );
  }

  if (
    activeGame.success &&
    activeGame.game &&
    activeGame.game.status === GameStatus.PLAYING
  ) {
    redirect(
      `/game/category/${activeGame.game.wordListCategory}/now-playing/${activeGame.game.id}`
    );
  }

  const data = await getCategories();

  if (!data.success || !data.categories || data.categories.length === 0) {
    return <NoCategoriesFallback />;
  }

  return <SelectCategory categories={data.categories} />;
};

export default page;
