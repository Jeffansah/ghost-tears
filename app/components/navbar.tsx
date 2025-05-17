import { UserButton } from "@clerk/nextjs";
import { GhostIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-md border-b border-emerald-500/10 z-50 fixed top-0 left-0 w-full py-4 ">
      <div className="w-full flex justify-between items-center max-w-[1300px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <GhostIcon className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            GHOST-TEARS
          </h1>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-zinc-800/70 backdrop-blur-sm text-zinc-400">
            BETA
          </span>
        </Link>

        <div className="flex items-center gap-10">
          <Link href="/" className="text-neutral-400 hover:text-emerald-400">
            Home
          </Link>
          <Link
            href="/new-game"
            className="text-neutral-400 hover:text-emerald-400"
          >
            New game
          </Link>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
