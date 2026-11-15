"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, CheckCircle2, Clock, Cpu, AlertTriangle, FileCode } from "lucide-react";

export type EvidenceStatus =
  | "IMPLEMENTED — CODE VERIFIED"
  | "TESTED — OUTPUT VERIFIED"
  | "HARDWARE AVAILABLE"
  | "REFERENCE DESIGN"
  | "PLANNED / NOT YET VERIFIED"
  | "REQUIRES FIELD VALIDATION";

interface EvidenceBadgeProps {
  status: EvidenceStatus;
  className?: string;
  sourceDoc?: string;
}

export function EvidenceBadge({ status, className, sourceDoc }: EvidenceBadgeProps) {
  const getBadgeConfig = () => {
    switch (status) {
      case "IMPLEMENTED — CODE VERIFIED":
        return {
          icon: CheckCircle2,
          bgColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
          label: "Implemented — Code Verified",
        };
      case "TESTED — OUTPUT VERIFIED":
        return {
          icon: ShieldCheck,
          bgColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
          label: "Tested — Output Verified",
        };
      case "HARDWARE AVAILABLE":
        return {
          icon: Cpu,
          bgColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
          label: "Hardware Available",
        };
      case "REFERENCE DESIGN":
        return {
          icon: FileCode,
          bgColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
          label: "Reference Design",
        };
      case "REQUIRES FIELD VALIDATION":
        return {
          icon: AlertTriangle,
          bgColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
          label: "Requires Field Validation",
        };
      case "PLANNED / NOT YET VERIFIED":
      default:
        return {
          icon: Clock,
          bgColor: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/30",
          label: "Planned / Not Yet Verified",
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border font-medium", config.bgColor, className)}>
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span>{config.label}</span>
      {sourceDoc && (
        <span className="opacity-60 pl-1 border-l border-current/20 text-[10px]">
          {sourceDoc}
        </span>
      )}
    </div>
  );
}
