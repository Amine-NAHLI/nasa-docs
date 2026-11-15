"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MOROCCO_REGIONS } from "@/config/morocco-regions";
import { ArrowRight, FastForward, Orbit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Dynamic import with ssr: false for MapLibre
const MoroccoOrbitGlobe = dynamic(
  () =>
    import("@/components/globe/MoroccoOrbitGlobe").then((mod) => mod.MoroccoOrbitGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-screen bg-[#03070E] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 font-mono text-xs text-teal-400">
          <Orbit className="h-6 w-6 animate-spin" />
          <span>Chargement du Globe Orbital 3D...</span>
        </div>
      </div>
    ),
  }
);

interface SpaceIntroModalProps {
  children: React.ReactNode;
}

export function SpaceIntroModal({ children }: SpaceIntroModalProps) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isDiving, setIsDiving] = useState(false);

  const handleEnterExperience = () => {
    setIsDiving(true);
    // After parabolic descent to Fès, complete transition into site
    setTimeout(() => {
      setHasEntered(true);
      setIsDiving(false);
    }, 2800);
  };

  const handleSkip = () => {
    setHasEntered(true);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHasEntered(false);
  };

  return (
    <>
      {/* Existing Homepage Content */}
      <div className={!hasEntered ? "hidden" : "block transition-opacity duration-700"}>
        {children}

        {/* Floating "View Orbit" pill on homepage to return to 3D Space anytime */}
        <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
          <button
            type="button"
            onClick={handleReplay}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-teal-500/30 hover:border-teal-400 text-xs font-mono text-teal-300 shadow-xl backdrop-blur-md transition-all cursor-pointer active:scale-95"
            title="Retourner à la vue spatiale 3D"
          >
            <Orbit className="h-4 w-4 text-teal-400 group-hover:rotate-45 transition-transform" />
            <span className="hidden sm:inline">Orbite 3D Maroc</span>
          </button>
        </div>
      </div>

      {/* Full-Screen 3D Space Experience Layer */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 w-full h-full bg-[#000004] overflow-hidden select-none">
          {/* 3D Earth Globe with Fès as Gateway */}
          <MoroccoOrbitGlobe
            initialRegion={isDiving ? MOROCCO_REGIONS.overview : undefined}
            isHeroMode
          />

          {/* Cinematic Overlay Typography & Action */}
          {!isDiving && (
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 sm:p-12 overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-teal-500/30 text-xs font-mono text-teal-300 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span>EARTH TRIALS</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-amber-300 font-semibold">IMPACT 2030</span>
                </div>

                <div className="pointer-events-auto">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-950/70 hover:bg-slate-900 border border-white/10 text-xs font-mono text-slate-400 hover:text-white backdrop-blur-md transition-all cursor-pointer"
                  >
                    <span>Passer l&apos;intro</span>
                    <FastForward className="h-3.5 w-3.5 text-teal-400" />
                  </button>
                </div>
              </div>

              {/* Center Typography */}
              <div className="max-w-2xl mx-auto text-center space-y-4 my-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-sm">
                  <span>NASA Space Apps Challenge 2026</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-mono uppercase">
                  FARMER{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400">
                    EYE
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-amber-200 font-sans">
                  THE FARMER&apos;S SECOND EYES.
                </p>

                <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                  De l&apos;observation spatiale de la Terre vers des décisions agricoles plus éclairées.
                </p>

                {/* Primary Button */}
                <div className="pt-6 pointer-events-auto">
                  <button
                    type="button"
                    onClick={handleEnterExperience}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(32,201,189,0.35)] hover:bg-teal-300 hover:shadow-[0_0_40px_rgba(32,201,189,0.5)] transition-all cursor-pointer active:scale-95"
                  >
                    <span>Plonger vers le Maroc (Fès)</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  <span>Explorez les 8 pôles agricoles marocains en orbite 3D</span>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 w-full">
                <span>DEVUPWARD • Innovation Scientifique</span>
                <span className="hidden sm:inline">Simulation Planétaire Haute Définition</span>
              </div>
            </div>
          )}

          {/* Atmospheric Flash during Descent */}
          <AnimatePresence>
            {isDiving && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-teal-400/20 via-sky-400/30 to-transparent pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
