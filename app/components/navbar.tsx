import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { GhostIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-transparent backdrop-blur-sm z-50 fixed top-0 left-0 w-full py-4 ">
      <div className="w-full flex justify-between relative items-center max-w-[1300px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <GhostIcon className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            GHOST-TEARS
          </h1>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-zinc-800/70 backdrop-blur-sm text-zinc-400">
            BETA
          </span>
        </Link>

        <div className="flex items-center gap-10 pr-16">
          <Link href="/" className="text-neutral-400 hover:text-emerald-400">
            Home
          </Link>
          <Link
            href="/game/category"
            className="text-neutral-400 hover:text-emerald-400"
          >
            New game
          </Link>
          <div className="absolute right-0 top-[2px]">
            <UserButton
              appearance={{
                baseTheme: dark,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
