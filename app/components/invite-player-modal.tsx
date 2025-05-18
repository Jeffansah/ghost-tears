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
import { UserPlusIcon } from "lucide-react";
import { errorToast, successToast } from "@/lib/toaster-configurations";

const InvitePlayerModal = ({
  gameId,
  category,
}: {
  gameId: string;
  category: string;
}) => {
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
        errorToast("Player not found");
        return;
      }

      if (!data.success && data.error === "Game not found") {
        throw new Error("Game not found");
      }

      if (!data.success && data.error === "Game is not in waiting state") {
        errorToast("Game lobby is full");
        return;
      }

      if (!data.success && data.error === "Cannot add same player twice") {
        errorToast("You are already in this game");
        return;
      }

      if (!data.success && data.error === "Invite already sent") {
        errorToast("Invite already sent");
        return;
      }

      if (data.success && data.game) {
        successToast(`You have invited ${username} to the game`);
        setUsername("");
        setIsOpen(false);
        router.push(`/game/category/${category}/waiting/${data.game.id}`);
        return;
      }
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-emerald-700/90 hover:bg-emerald-600/90 text-white py-6 rounded-lg flex items-center justify-center">
          <UserPlusIcon className="mr-2 h-5 w-5" />
          Invite Player
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border border-zinc-700/50 rounded-xl p-6 w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Invite Player</DialogTitle>
          <DialogDescription>Add a player to join your game.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col  gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              className="border border-zinc-700 focus:outline-none focus:ring-2 focus:border-zinc-700 focus-visible:border-zinc-700 focus:ring-emerald-500/50 focus-visible:ring-emerald-500/50"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => handleSubmit({ gameId, username })}
            disabled={loading}
            className="bg-emerald-700/90 hover:bg-emerald-600/90 text-white"
          >
            {loading ? "Sending..." : "Send Invite"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InvitePlayerModal;
