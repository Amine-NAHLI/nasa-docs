"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MOROCCO_REGIONS, MoroccoAgroRegion } from "@/config/morocco-regions";
import { Orbit, Compass, MapPin } from "lucide-react";

const MoroccoOrbitGlobe = dynamic(
  () =>
    import("@/components/globe/MoroccoOrbitGlobe").then((mod) => mod.MoroccoOrbitGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[650px] rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 font-mono text-xs text-teal-400">
          <Orbit className="h-6 w-6 animate-spin" />
          <span>Chargement de la Vue Orbitale 3D...</span>
        </div>
      </div>
    ),
  }
);

interface DocRegionViewProps {
  regionId: string;
}

export function DocRegionView({ regionId }: DocRegionViewProps) {
  const initialRegion = MOROCCO_REGIONS[regionId] || MOROCCO_REGIONS.overview;
  const [activeRegion, setActiveRegion] = useState<MoroccoAgroRegion>(initialRegion);

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-2 border-b border-white/10 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30 font-semibold uppercase">
            {activeRegion.moduleTitle}
          </span>
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
            <MapPin className="h-3 w-3 text-teal-400" />
            Station : {activeRegion.name}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
          {activeRegion.name}
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
          {activeRegion.whatIsThis}
        </p>
      </div>

      {/* Interactive 3D Satellite Globe Component */}
      <div className="relative w-full h-[620px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <MoroccoOrbitGlobe
          initialRegion={activeRegion}
          onRegionChange={(region) => setActiveRegion(region)}
          className="rounded-2xl"
        />
      </div>

      {/* Explanatory note */}
      <div className="p-4 rounded-xl border border-white/10 bg-slate-900/60 flex items-center gap-3 text-xs font-mono text-slate-400">
        <Compass className="h-5 w-5 text-teal-400 shrink-0" />
        <span>
          Visualisation orbitale de la station <strong>{activeRegion.name}</strong>. Cliquez sur les autres pôles régionaux dans la barre de navigation pour déclencher le dézoom spatial et le vol vers une autre zone agricole. Le contenu d&apos;analyse textuelle détaillée sera intégré page par page.
        </span>
      </div>
    </div>
  );
}
