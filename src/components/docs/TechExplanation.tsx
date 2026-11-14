"use client";

import React, { useState } from "react";
import { ChevronDown, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechExplanationProps {
  summary: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function TechExplanation({
  summary,
  badge = "Technical Deep-Dive",
  children,
  defaultOpen = false,
  className,
}: TechExplanationProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "my-5 rounded-xl border border-white/10 bg-[#0B1728]/50 overflow-hidden transition-colors",
        isOpen && "border-teal-500/30 bg-[#0B1728]/80",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
            <Cpu className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-amber-300 block">
              {badge}
            </span>
            <span className="text-sm font-semibold text-slate-100">{summary}</span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180 text-teal-400"
          )}
        />
      </button>

      {isOpen && (
        <div className="p-4 pt-2 border-t border-white/10 text-sm text-slate-300 leading-relaxed bg-slate-950/40">
          {children}
        </div>
      )}
    </div>
  );
}
