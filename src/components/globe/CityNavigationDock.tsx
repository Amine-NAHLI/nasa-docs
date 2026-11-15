"use client";

import React from "react";
import { MOROCCO_REGIONS_LIST, MoroccoAgroRegion } from "@/config/morocco-regions";
import { cn } from "@/lib/utils";
import { Orbit } from "lucide-react";

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
    <nav
      aria-label="Navigation des Régions de Démonstration"
      className={cn(
        "flex items-center gap-2 p-2 rounded-2xl bg-[#030712]/85 border border-teal-500/25 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(20,184,166,0.15)] overflow-x-auto max-w-full select-none",
        className
      )}
    >
      {/* Region Emblem & Label */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-950/40 border border-teal-500/20 text-xs font-mono text-teal-300 font-bold uppercase shrink-0">
        <Orbit className="h-4 w-4 text-teal-400 animate-spin-slow" />
        <span className="tracking-wider hidden sm:inline">EXPLORE REGIONS</span>
        <span className="sm:hidden">REGIONS</span>
      </div>

      {/* Planetary Station Nodes */}
      <div className="flex items-center gap-1.5 shrink-0">
        {MOROCCO_REGIONS_LIST.map((region) => {
          const isSelected = currentRegionId === region.id;
          const cityName = region.name.split("·")[0].trim();
          const plainName = region.name.split("·")[1]?.trim() || "";
          const isFes = region.id === "overview";

          return (
            <button
              key={region.id}
              type="button"
              onClick={() => onSelectRegion(region)}
              className={cn(
                "group relative px-3 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer shrink-0 flex items-center gap-2 border active:scale-95",
                isSelected
                  ? "bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                  : isFes
                  ? "bg-teal-950/50 hover:bg-teal-900/60 text-teal-200 border-teal-500/40 hover:border-teal-400"
                  : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border-white/5 hover:border-teal-500/30"
              )}
              title={`${region.name} — ${region.agriculturalChallenge}`}
            >
              {/* Planetary Orbital Beacon Dot */}
              <span className="relative flex h-2 w-2">
                {isSelected ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                  </>
                ) : (
                  <>
                    {isFes && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60"></span>
                    )}
                    <span
                      className={cn(
                        "relative inline-flex rounded-full h-2 w-2",
                        isFes ? "bg-teal-300" : "bg-teal-500/70 group-hover:bg-teal-400"
                      )}
                    ></span>
                  </>
                )}
              </span>

              {/* Station Label & Plain Subtitle */}
              <div className="flex flex-col text-left leading-tight">
                <span className="tracking-wide">{cityName}</span>
                {plainName && (
                  <span
                    className={cn(
                      "text-[9px] font-sans tracking-tight",
                      isSelected ? "text-slate-900 font-semibold" : "text-slate-400 group-hover:text-slate-300"
                    )}
                  >
                    {plainName.replace("Plaine du ", "").replace("Pôle ", "").replace("Périmètre de la ", "")}
                  </span>
                )}
              </div>

              {/* Special Indicator for Primary Gateway Fès */}
              {isFes && !isSelected && (
                <span className="ml-0.5 px-1 py-0.2 rounded text-[8px] uppercase tracking-tighter bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  HUB
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
