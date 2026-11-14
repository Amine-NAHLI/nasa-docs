import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "turquoise" | "gold" | "green" | "outline" | "comingSoon";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-white/10",
    turquoise: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    gold: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    green: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    outline: "border-white/20 text-slate-300 bg-transparent",
    comingSoon: "bg-slate-800/80 text-slate-400 border-white/10 font-normal tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wider uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
