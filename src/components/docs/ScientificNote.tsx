import React from "react";
import { Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScientificNoteProps {
  sourceName?: string;
  satelliteMission?: string;
  formula?: string;
  children: React.ReactNode;
  className?: string;
}

export function ScientificNote({
  sourceName = "NASA Earth Science Division",
  satelliteMission,
  formula,
  children,
  className,
}: ScientificNoteProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-xl border border-teal-500/30 bg-[#0B1728]/80 p-5 shadow-lg relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-teal-400">
          <Database className="h-4 w-4" />
          <span className="font-semibold">{sourceName}</span>
        </div>
        {satelliteMission && (
          <span className="px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-500/20">
            {satelliteMission}
          </span>
        )}
      </div>

      {/* Main explanation */}
      <div className="text-sm text-slate-300 leading-relaxed">{children}</div>

      {/* Optional Mathematical / Biophysical Equation */}
      {formula && (
        <div className="mt-3.5 pt-3 border-t border-white/5 font-mono text-xs bg-slate-950/60 p-3 rounded-lg border border-white/5 text-amber-300 overflow-x-auto">
          <span className="text-slate-500 mr-2 select-none">MODEL:</span>
          {formula}
        </div>
      )}
    </div>
  );
}
