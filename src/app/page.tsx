"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { MOROCCO_REGIONS } from "@/config/morocco-regions";
import { MoroccoOrbitGlobeControls } from "@/components/globe/MoroccoOrbitGlobe";
import { Orbit, Compass, RotateCcw } from "lucide-react";

// Dynamic import with ssr: false for MapLibre 3D Globe
const MoroccoOrbitGlobe = dynamic(
  () =>
    import("@/components/globe/MoroccoOrbitGlobe").then((mod) => mod.MoroccoOrbitGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-screen h-screen bg-[#000004] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 font-mono text-xs text-teal-400">
          <Orbit className="h-8 w-8 animate-spin" />
          <span className="tracking-widest uppercase">Initialisation de l&apos;Orbite 3D Terre...</span>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  const controlsRef = useRef<MoroccoOrbitGlobeControls | null>(null);

  const handleZoomToFes = () => {
    if (controlsRef.current) {
      controlsRef.current.flyToRegion(MOROCCO_REGIONS.overview);
    }
  };

  const handleResetSpace = () => {
    if (controlsRef.current) {
      controlsRef.current.resetOrbit();
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#000004] text-white select-none">
      {/* 3D Earth Orbit Globe: Stays in Space (no auto-zoom) until Visiter is clicked */}
      <MoroccoOrbitGlobe
        autoZoomToFes={false}
        onControlsReady={(controls) => {
          controlsRef.current = controls;
        }}
        className="w-full h-full"
      />

      {/* Top Floating Scientific Brand Header */}
      <header className="absolute top-5 left-5 z-20 pointer-events-none flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-950/85 border border-teal-500/30 backdrop-blur-xl shadow-2xl">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-400/30 text-teal-300">
            <Orbit className="w-4 h-4 animate-spin-slow" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-mono font-extrabold tracking-widest uppercase text-white">
                FARMER <span className="text-teal-400">EYE</span>
              </h1>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase">
                NASA Space Apps
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-300">
              The Farmer&apos;s Second Eyes • DEVUPWARD
            </p>
          </div>
        </div>
      </header>

      {/* Top-Center Floating Primary Controls: "Visiter Fès" triggers the zoom */}
      <div className="absolute top-5 inset-x-0 z-20 pointer-events-auto flex justify-center items-center gap-3 px-4">
        <button
          type="button"
          onClick={handleZoomToFes}
          className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(32,201,189,0.5)] hover:bg-teal-300 hover:shadow-[0_0_40px_rgba(32,201,189,0.8)] transition-all cursor-pointer active:scale-95"
          title="Visiter la ville de Fès et la plaine du Saïss en 3D"
        >
          <Compass className="w-4 h-4 text-slate-950 animate-pulse" />
          <span>Visiter Fès (Saïss)</span>
        </button>

        <button
          type="button"
          onClick={handleResetSpace}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-mono font-medium backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
          title="Dézoomer vers l'orbite spatiale profonde"
        >
          <RotateCcw className="w-3.5 h-3.5 text-teal-400" />
          <span className="hidden sm:inline">Espace</span>
        </button>
      </div>
    </main>
  );
}
