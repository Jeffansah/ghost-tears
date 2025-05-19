import GameBoard from "@/app/components/game-board";
import { GameStatus } from "@/app/generated/prisma";
import getActiveGame from "@/server/game/get-active-game.action";
import getWordList from "@/server/game/words/get-word-list.action";
import { checkGameWinner } from "@/server/game/check-game-winner.action";
import { redirect } from "next/navigation";

type Params = Promise<{ category: string; "game-id": string }>;

const page = async ({ params }: { params: Params }) => {
  const { category, "game-id": gameId } = await params;

  if (!category || !gameId) {
    redirect("/not-found");
  }

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

  if (!activeGame.success && activeGame.error === "No active game found") {
    redirect("/");
  }

  if (
    !activeGame.success &&
    activeGame.error === "Unauthorized: You are not a player in this game"
  ) {
    redirect("/");
  }

  if (
    activeGame.success &&
    activeGame.game &&
    activeGame.game.status === GameStatus.WAITING &&
    activeGame.game.player2Id !== null &&
    activeGame.game.player1Id === activeGame.game.currentUserId
  ) {
    redirect(`/game/category/${category}/waiting/${activeGame.game.id}`);
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
    activeGame.game.status === GameStatus.ENDED
  ) {
    redirect(`/game/category/${category}/ended/${activeGame.game.id}`);
  }

  const wordList = await getWordList({ category });

  if (!wordList.success) {
    throw new Error("Failed to get word list");
  }

  if (activeGame.success && activeGame.game && wordList.wordList) {
    return <GameBoard game={activeGame.game} wordList={wordList.wordList} />;
  }
};

export default page;
