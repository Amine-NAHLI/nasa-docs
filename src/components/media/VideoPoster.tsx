import React from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPosterProps {
  title: string;
  subtitle?: string;
  duration?: string;
  onPlay?: () => void;
  className?: string;
}

export function VideoPoster({
  title,
  subtitle,
  duration,
  onPlay,
  className,
}: VideoPosterProps) {
  return (
    <div
      onClick={onPlay}
      className={cn(
        "group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/15 bg-[#0B1728] cursor-pointer shadow-2xl transition-all duration-300 hover:border-teal-400/40",
        className
      )}
    >
      {/* Background Graphic: Deep Space with Earth Orbit Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070D17] via-[#0B1728] to-[#123354] opacity-90" />
      
      {/* Subtle scientific grid & orbital lines */}
      <div className="absolute inset-0 scientific-grid opacity-20" />
      
      {/* Earth Limb Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Center Orbital Ring Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 rounded-full border border-teal-500/20 animate-spin" style={{ animationDuration: "35s" }} />
        <div className="absolute w-72 h-72 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: "50s", animationDirection: "reverse" }} />
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-teal-400/20 blur-md group-hover:scale-125 transition-transform duration-300" />
          <div className="relative w-16 h-16 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 fill-slate-950 ml-1 text-slate-950" />
          </div>
        </div>
      </div>

      {/* Top badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
        <span className="px-2.5 py-1 rounded bg-slate-900/80 text-teal-300 border border-teal-500/30 backdrop-blur-sm">
          EARTH TRIALS CINEMATIC
        </span>
        {duration && (
          <span className="px-2.5 py-1 rounded bg-slate-900/80 text-slate-300 border border-white/10 backdrop-blur-sm">
            {duration}
          </span>
        )}
      </div>

      {/* Bottom title & metadata */}
      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
        <p className="text-xs uppercase tracking-widest text-amber-300 font-mono font-semibold">
          {subtitle || "Official Project Video"}
        </p>
        <h4 className="text-lg font-bold text-slate-100 group-hover:text-teal-300 transition-colors mt-0.5">
          {title}
        </h4>
      </div>
    </div>
  );
}
