import createGame from "@/server/game/create-game.action";
import { redirect } from "next/navigation";

type Params = Promise<{ category: string }>;

const page = async ({ params }: { params: Params }) => {
  const { category } = await params;

  if (!category) {
    redirect("/");
  }

  const data = await createGame(category);

  if (
    !data.success &&
    (data.error === "User not found" ||
      data.error === "User not found in database")
  ) {
    redirect("/sign-in");
  }

  if (!data.success || !data.game) {
    return <div>Error creating game</div>;
  }

  const game = data.game;

  redirect(`/game/category/${category}/new/${game.id}`);
};

export default page;
