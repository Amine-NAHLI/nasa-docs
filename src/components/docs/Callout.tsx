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
      border: "border-sky-500/30 bg-sky-950/20 text-sky-200",
      icon: <Info className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />,
      defaultTitle: "Information",
    },
    warning: {
      border: "border-amber-500/30 bg-amber-950/20 text-amber-200",
      icon: <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />,
      defaultTitle: "Notice",
    },
    tip: {
      border: "border-emerald-500/30 bg-emerald-950/20 text-emerald-200",
      icon: <Lightbulb className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />,
      defaultTitle: "Agronomic Tip",
    },
    note: {
      border: "border-slate-500/30 bg-slate-900/40 text-slate-200",
      icon: <FileText className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />,
      defaultTitle: "Documentation Note",
    },
    scientific: {
      border: "border-teal-500/40 bg-[#0B1728]/90 text-teal-200",
      icon: <Atom className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />,
      defaultTitle: "Scientific Foundation",
    },
  };

  const current = configs[type];

  return (
    <div
      className={cn(
        "my-6 flex items-start gap-3.5 rounded-xl border p-4.5 backdrop-blur-sm",
        current.border,
        className
      )}
    >
      {current.icon}
      <div className="flex-1 space-y-1">
        <div className="font-semibold text-sm tracking-wide text-slate-100">
          {title || current.defaultTitle}
        </div>
        <div className="text-sm text-slate-300 leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
