"use client";

import React from "react";
import { MoroccoAgroRegion } from "@/config/morocco-regions";
import {
  MapPin,
  Sparkles,
  Satellite,
  Compass,
  X,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface CityBriefingCardProps {
  region: MoroccoAgroRegion;
  onClose?: () => void;
  onNextCity?: () => void;
}

export function CityBriefingCard({
  region,
  onClose,
  onNextCity,
}: CityBriefingCardProps) {
  return (
    <div className="w-full max-w-lg rounded-2xl border border-teal-500/30 bg-[#0B1728]/92 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl text-slate-100 space-y-4 animate-in fade-in zoom-in-95 duration-300">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3.5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
              {region.moduleTitle}
            </span>
            <span className="text-xs font-mono text-amber-300/90" dir="rtl">
              {region.arabicName}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center gap-2 pt-1">
            <MapPin className="h-5 w-5 text-teal-400 shrink-0" />
            <span>{region.name}</span>
          </h3>

          <p className="text-xs font-mono text-slate-400">
            {region.basin} • {region.climateZone}
          </p>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer la fiche d'information"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* "C'est quoi ce pôle ?" */}
      <div className="space-y-1.5">
        <h4 className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-teal-400" />
          <span>C&apos;est quoi ce pôle ?</span>
        </h4>
        <p className="text-sm text-slate-200 leading-relaxed font-sans">
          {region.whatIsThis}
        </p>
      </div>

      {/* "Défi Agricole Régional" */}
      <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/70 border border-white/5">
        <h4 className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <Compass className="h-3.5 w-3.5 text-amber-400" />
          <span>Défi Agricole Régional</span>
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {region.agriculturalChallenge}
        </p>
      </div>

      {/* "Flux NASA Associé" */}
      <div className="space-y-1.5 p-3 rounded-xl bg-teal-950/30 border border-teal-500/20">
        <h4 className="text-[11px] font-mono font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
          <Satellite className="h-3.5 w-3.5 text-teal-400" />
          <span>Données & Modélisation</span>
        </h4>
        <p className="text-xs text-teal-100 font-mono leading-relaxed">
          {region.nasaDataFeed}
        </p>
      </div>

      {/* Cultures clés */}
      <div className="pt-1 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">
          Cultures Clés :
        </span>
        {region.keyCrops.map((crop) => (
          <span
            key={crop}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-white/10"
          >
            {crop}
          </span>
        ))}
      </div>

      {/* Bottom Footer & Action */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
          <ShieldAlert className="h-3.5 w-3.5 text-teal-400" />
          <span>Selected Region · Demonstration Area</span>
        </div>

        {onNextCity && (
          <button
            type="button"
            onClick={onNextCity}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-400 text-slate-950 font-bold hover:bg-teal-300 transition-colors cursor-pointer text-xs"
          >
            <span>Ville Suivante</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
