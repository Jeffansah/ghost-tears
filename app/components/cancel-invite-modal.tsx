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
import { cancelInvite } from "@/server/game/cancel-invite.action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { XCircleIcon } from "lucide-react";
import { errorToast, successToast } from "@/lib/toaster-configurations";

const CancelInviteModal = ({
  gameId,
  category,
}: {
  gameId: string;
  category: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async ({ gameId }: { gameId: string }) => {
    setLoading(true);

    try {
      const data = await cancelInvite(gameId);

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

      if (!data.success && data.error === "Game not found") {
        throw new Error("Game not found");
      }

      if (!data.success && data.error === "Game is not in waiting state") {
        errorToast("Game is not in waiting state");
        return;
      }

      if (!data.success && data.error === "No invite to cancel") {
        errorToast("No invite to cancel");
        return;
      }

      if (data.success && data.game) {
        successToast("Invite cancelled");
        setIsOpen(false);
        router.push(`/game/category/${category}/new/${data.game.id}`);
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
        <Button
          variant="outline"
          className="w-full border-red-900/30 bg-red-900/10 hover:bg-red-900/20 hover:text-white text-red-400 py-6 rounded-lg flex items-center justify-center"
        >
          <XCircleIcon className="mr-2 h-5 w-5" />
          Cancel Invite
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border border-zinc-700/50 rounded-xl p-6 w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Cancel Invite</DialogTitle>
          <DialogDescription>
            Are you sure you want to cancel this invite?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => handleSubmit({ gameId })}
            disabled={loading}
            className="bg-red-800/90 hover:bg-red-700/90 text-white"
          >
            {loading ? "Cancelling..." : "Cancel Invite"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelInviteModal;
