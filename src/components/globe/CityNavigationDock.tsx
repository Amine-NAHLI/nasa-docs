"use client";

import React from "react";
import { MOROCCO_REGIONS_LIST, MoroccoAgroRegion } from "@/config/morocco-regions";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface CityNavigationDockProps {
  currentRegionId: string;
  onSelectRegion: (region: MoroccoAgroRegion) => void;
  className?: string;
}

export function CityNavigationDock({
  currentRegionId,
  onSelectRegion,
  className,
}: CityNavigationDockProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full select-none",
        className
      )}
    >
      <div className="flex items-center gap-1.5 shrink-0 px-2 text-xs font-mono text-teal-400 font-bold uppercase hidden sm:flex">
        <MapPin className="h-3.5 w-3.5 text-teal-400" />
        <span>Villes :</span>
      </div>

      {MOROCCO_REGIONS_LIST.map((region) => {
        const isSelected = currentRegionId === region.id;
        const cityName = region.name.split("·")[0].trim();

        return (
          <button
            key={region.id}
            type="button"
            onClick={() => onSelectRegion(region)}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-1.5",
              isSelected
                ? "bg-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(32,201,189,0.4)]"
                : "bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/5 hover:border-teal-500/30"
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                isSelected ? "bg-slate-950" : "bg-teal-400/80"
              )}
            />
            <span>{cityName}</span>
          </button>
        );
      })}
    </div>
  );
}
