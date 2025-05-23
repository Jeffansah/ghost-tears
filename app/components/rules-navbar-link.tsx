"use client";

import { useStore } from "@/store";
import Link from "next/link";

export default function RulesNavbarLink() {
  const { setShowRulesModal } = useStore();

  const handleShowRules = () => {
    localStorage.removeItem("ghost-tears-rules-seen");
    setShowRulesModal(true);
  };

  return (
    <Link
      onClick={handleShowRules}
      href="#"
      className=" text-zinc-400 hover:text-emerald-400"
    >
      Rules
    </Link>
  );
}
