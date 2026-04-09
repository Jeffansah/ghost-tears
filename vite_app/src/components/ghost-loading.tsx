import { Ghost } from "lucide-react";

export function GhostLoading({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-5 text-center">
      <div className="animate-float rounded-full border border-emerald-500/20 bg-emerald-500/10 p-5 shadow-lg shadow-emerald-950/30">
        <Ghost className="h-12 w-12 text-emerald-400" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400 [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" />
      </div>
      <p className="text-sm text-zinc-500">{label}</p>
    </div>
  );
}
