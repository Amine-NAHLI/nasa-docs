"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Satellite, Layers, Activity, Cpu } from "lucide-react";

export interface DataDialect {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const DATA_DIALECTS: DataDialect[] = [
  {
    id: "power",
    name: "NASA POWER",
    subtitle: "Climat & Météo",
    icon: Satellite,
  },
  {
    id: "smap",
    name: "NASA SMAP",
    subtitle: "Humidité du Sol",
    icon: Layers,
  },
  {
    id: "fao56",
    name: "FAO-56 Engine",
    subtitle: "Bilan Hydrique",
    icon: Activity,
  },
  {
    id: "ai",
    name: "AI Interpretation",
    subtitle: "Aide Décisionnelle",
    icon: Cpu,
  },
];

interface DialectTabsProps {
  activeId?: string;
  onChange?: (dialectId: string) => void;
  className?: string;
}

export function DialectTabs({
  activeId: initialActiveId = "power",
  onChange,
  className,
}: DialectTabsProps) {
  const [activeId, setActiveId] = useState(initialActiveId);

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (onChange) onChange(id);
  };

  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-zinc-100/90 border border-zinc-200/80 select-none",
        className
      )}
    >
      {DATA_DIALECTS.map((dialect) => {
        const isSelected = activeId === dialect.id;
        const Icon = dialect.icon;

        return (
          <button
            key={dialect.id}
            type="button"
            onClick={() => handleSelect(dialect.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-150 cursor-pointer",
              isSelected
                ? "bg-white text-zinc-900 shadow-2xs border border-zinc-200/90 font-semibold"
                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/40"
            )}
          >
            <Icon
              className={cn(
                "w-3.5 h-3.5",
                isSelected ? "text-emerald-600" : "text-zinc-400"
              )}
            />
            <span>{dialect.name}</span>
          </button>
        );
      })}
    </div>
  );
}
