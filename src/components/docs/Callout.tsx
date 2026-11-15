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
      border: "border-sky-200 bg-sky-50/60 text-sky-950",
      titleColor: "text-sky-900",
      icon: <Info className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />,
      defaultTitle: "Information",
    },
    warning: {
      border: "border-amber-200 bg-amber-50/60 text-amber-950",
      titleColor: "text-amber-900",
      icon: <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />,
      defaultTitle: "Notice",
    },
    tip: {
      border: "border-emerald-200 bg-emerald-50/60 text-emerald-950",
      titleColor: "text-emerald-900",
      icon: <Lightbulb className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />,
      defaultTitle: "Agronomic Note",
    },
    note: {
      border: "border-zinc-200 bg-zinc-50 text-zinc-900",
      titleColor: "text-zinc-900",
      icon: <FileText className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />,
      defaultTitle: "Documentation Note",
    },
    scientific: {
      border: "border-emerald-200 bg-zinc-50/80 text-zinc-900",
      titleColor: "text-emerald-900",
      icon: <Atom className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />,
      defaultTitle: "Scientific Reference",
    },
  };

  const current = configs[type];

  return (
    <div
      className={cn(
        "my-4 flex items-start gap-3 rounded-lg border p-3.5 text-xs",
        current.border,
        className
      )}
    >
      {current.icon}
      <div className="flex-1 space-y-0.5">
        <div className={cn("font-semibold text-xs tracking-wide", current.titleColor)}>
          {title || current.defaultTitle}
        </div>
        <div className="text-zinc-600 leading-relaxed [&>p]:mb-1 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
