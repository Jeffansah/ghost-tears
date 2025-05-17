import getActiveGame from "@/server/game/get-active-game.action";
import { redirect } from "next/navigation";

type Params = Promise<{ category: string; "game-id": string }>;

const GameLobby = async ({ params }: { params: Params }) => {
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

  if (activeGame.success && activeGame.game) {
    return <div>{activeGame.game.id}</div>;
  }
};

export default GameLobby;
