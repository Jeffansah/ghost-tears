"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import addSecondPlayer from "@/server/game/add-second-player.action";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InvitePlayerModal = ({ gameId }: { gameId: string }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async ({
    gameId,
    username,
  }: {
    gameId: string;
    username: string;
  }) => {
    setLoading(true);

    try {
      const data = await addSecondPlayer(gameId, username);

      if (
        !data.success &&
        (data.error === "User not found" ||
          data.error === "User not found in database")
      ) {
        router.push("/sign-in");
        return;
      }

      if (
        !data.success &&
        data.error === "Unauthorized: You are not a player in this game"
      ) {
        router.push("/");
        return;
      }

      if (!data.success && data.error === "Player not found") {
        alert("Player not found");
        return;
      }

      if (!data.success && data.error === "Game not found") {
        throw new Error("Game not found");
      }

      if (!data.success && data.error === "Game is not in waiting state") {
        alert("Game lobby is full");
        return;
      }

      if (!data.success && data.error === "Cannot add same player twice") {
        alert("You are already in this game");
        return;
      }

      if (!data.success && data.error === "Invite already sent") {
        alert("Invite already sent");
        return;
      }

      if (data.success && data.game) {
        alert("Player invited");
        setUsername("");
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Invite Player</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Player</DialogTitle>
          <DialogDescription>Add a player to join your game.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              className="col-span-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => handleSubmit({ gameId, username })}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Invite"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InvitePlayerModal;
