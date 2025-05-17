import getGameById from "@/server/game/get-game-by-id.action";
import { redirect } from "next/navigation";
import JoinGameButton from "@/app/components/join-game-button";

type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const game = await getGameById(id);

  if (
    !game.success &&
    (game.error === "User not found" ||
      game.error === "User not found in database")
  ) {
    redirect("/sign-in");
  }

  if (!game.success && game.error === "Game not found") {
    redirect("/");
  }

  if (
    !game.success &&
    game.error === "Unauthorized: You are not a player in this game"
  ) {
    redirect("/");
  }

  if (!game.success && game.error === "Failed to get game") {
    throw new Error("Failed to get game");
  }

  if (game.success && game.game)
    return (
      <div className="flex flex-col gap-4 items-center w-screen justify-center h-screen">
        <h1 className="text-2xl font-bold">Game Invite</h1>
        <p className="">
          You have been invited to a game of GHOST-TEARS by{" "}
          <span className="font-bold">{game.game.player1.username}</span>
        </p>
        <JoinGameButton gameId={game.game.id} />
      </div>
    );
};

export default page;
