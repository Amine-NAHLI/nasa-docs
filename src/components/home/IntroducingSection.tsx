"use client";

import React from "react";
import { motion } from "motion/react";
import { Eye, Satellite, Brain, UserCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function IntroducingSection() {
  const pillars = [
    {
      icon: <Satellite className="h-5 w-5 text-teal-400" />,
      title: "Macroscopic Earth Observation",
      desc: "NASA satellites observe moisture anomalies, thermal signatures, and vegetative chlorophyll shifts long before symptoms become visible from the furrow.",
    },
    {
      icon: <Eye className="h-5 w-5 text-amber-400" />,
      title: "Biophysical Modeling",
      desc: "Calculates actual evapotranspiration, root-zone saturation, and crop water stress using verified agronomic physics rather than generic assumptions.",
    },
    {
      icon: <Brain className="h-5 w-5 text-emerald-400" />,
      title: "Context-Aware AI Interpretation",
      desc: "Converts complex multi-band rasters and differential equations into clear, plain-language agricultural summaries tailored to local conditions.",
    },
    {
      icon: <UserCheck className="h-5 w-5 text-sky-400" />,
      title: "Uncompromising Human Agency",
      desc: "The farmer remains the ultimate decision-maker. Farmer Eye never automates choices blindly; it acts as a trusted, augmented co-pilot.",
    },
  ];

  return (
    <section id="introducing" className="relative py-24 border-t border-white/10 bg-[#070D17] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Core Message */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>THE PERSPECTIVE SHIFT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono leading-tight">
              FARMERS SEE THEIR FIELDS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-amber-300">
                FARMER EYE HELPS THEM SEE THE BIGGER PICTURE.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              A grower walking an orchard notices dry foliage after stress has already commenced. By the time physical wilting is apparent, valuable yield has been compromised.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Farmer Eye connects high-altitude orbital spectroscopy to on-the-ground reality. It does not replace the farmer&apos;s hard-earned generational intuition—it arms that intuition with planetary measurements, helping farmers anticipate environmental volatility with scientific confidence.
            </p>

            <div className="pt-2">
              <Link href="/docs/our-mission">
                <Button variant="outline" size="md" className="gap-2">
                  <span>Read Our Mission Philosophy</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Four Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/10 bg-[#0B1728]/70 hover:bg-[#0B1728]/95 hover:border-teal-500/40 transition-all duration-200 space-y-2.5"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-white/10 w-fit">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-slate-100 text-sm">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
