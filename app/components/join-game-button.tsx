"use client";

import { Button } from "@/components/ui/button";
import { joinGame } from "@/server/game/join-game.action";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const JoinGameButton = ({ gameId }: { gameId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (gameId: string) => {
    try {
      setIsLoading(true);
      const game = await joinGame(gameId);

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

      if (!game.success && game.error === "Game is not in playing state") {
        redirect("/game-ended");
      }

      if (
        !game.success &&
        game.error === "Unauthorized: You are not a player in this game"
      ) {
        redirect("/");
      }

      if (!game.success && game.error === "Failed to join game") {
        throw new Error("Failed to get game");
      }

      if (game.success && game.game) {
        router.push(
          `/game/category/${game.game.wordListCategory}/${game.game.id}`
        );
      }
    } catch (error) {
      console.error("Error in handleClick:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={() => handleClick(gameId)} disabled={isLoading}>
      {isLoading ? "Joining..." : "Join Game"}
    </Button>
  );
};

export default JoinGameButton;
