import React from "react";
import { Info, AlertTriangle, Lightbulb, FileText, Atom } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "note" | "scientific";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const configs = {
    info: {
      border: "border-sky-200 dark:border-sky-900/50 bg-sky-50/60 dark:bg-sky-950/20 text-sky-950 dark:text-sky-300",
      titleColor: "text-sky-900 dark:text-sky-200",
      icon: <Info className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />,
      defaultTitle: "Information",
    },
    warning: {
      border: "border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 text-amber-950 dark:text-amber-300",
      titleColor: "text-amber-900 dark:text-amber-200",
      icon: <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />,
      defaultTitle: "Notice",
    },
    tip: {
      border: "border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-300",
      titleColor: "text-emerald-900 dark:text-emerald-200",
      icon: <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />,
      defaultTitle: "Agronomic Note",
    },
    note: {
      border: "border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518] text-zinc-900 dark:text-zinc-100",
      titleColor: "text-zinc-900 dark:text-zinc-100",
      icon: <FileText className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />,
      defaultTitle: "Documentation Note",
    },
    scientific: {
      border: "border-emerald-200 dark:border-emerald-900/50 bg-zinc-50/80 dark:bg-[#141518] text-zinc-900 dark:text-zinc-100",
      titleColor: "text-emerald-900 dark:text-emerald-300",
      icon: <Atom className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />,
      defaultTitle: "Scientific Reference",
    },
  };

  const current = configs[type];

  return (
    <div
      className={cn(
        "my-4 flex items-start gap-3 rounded-lg border p-3.5 text-xs transition-colors",
        current.border,
        className
      )}
    >
      {current.icon}
      <div className="flex-1 space-y-0.5">
        <div className={cn("font-semibold text-xs tracking-wide", current.titleColor)}>
          {title || current.defaultTitle}
        </div>
        <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed [&>p]:mb-1 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
