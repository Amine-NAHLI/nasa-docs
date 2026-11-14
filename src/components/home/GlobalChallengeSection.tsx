"use client";

import React from "react";
import { motion } from "motion/react";
import { CloudRain, Droplets, Compass, LineChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function GlobalChallengeSection() {
  const challenges = [
    {
      icon: <CloudRain className="h-6 w-6 text-sky-400" />,
      title: "Climate Uncertainty & Volatility",
      tag: "ATMOSPHERIC ANOMALIES",
      description:
        "Historic multi-generational weather patterns no longer reliably predict rainy seasons. Farmers face erratic precipitation cycles, unseasonal heatwaves, and sudden dry spells that threaten germination and critical flowering stages.",
    },
    {
      icon: <Droplets className="h-6 w-6 text-teal-400" />,
      title: "Groundwater & Water Stress",
      tag: "RESOURCE CONSTRAINTS",
      description:
        "Intensive irrigation and prolonged droughts have severely stressed regional aquifers and surface reservoirs. Managing irrigation with precision is no longer optional—it is fundamental to operational survival.",
    },
    {
      icon: <Compass className="h-6 w-6 text-amber-400" />,
      title: "Escalating Decision Complexity",
      tag: "RISK MULTIPLICATION",
      description:
        "Agricultural choices—from seed cultivar selection and nitrogen allocation to the exact timing of deficit irrigation—demand integrating multi-scale factors that exceed what can be observed from field edges alone.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-emerald-400" />,
      title: "The Information Asymmetry",
      tag: "ACCESSIBILITY GAP",
      description:
        "Petabytes of high-value Earth observation data orbit silently overhead daily, yet raw satellite spectral bands and meteorological grids remain functionally inaccessible to the very farmers who need them most.",
    },
  ];

  return (
    <section id="challenge" className="relative py-24 border-t border-white/10 bg-[#070D17]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>THE REALITY ON THE GROUND</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
            THE GLOBAL CHALLENGE
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Farming has always been an art of calculated risk. Today, accelerating climatic shifts and declining water tables mean traditional intuition alone cannot navigate the accelerating volatility of modern agriculture.
          </p>
        </div>

        {/* Editorial Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-[#0B1728]/60 hover:bg-[#0B1728]/90 border-white/10 hover:border-teal-500/30 transition-all duration-300">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/10">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-slate-100 font-sans">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Storytelling Editorial Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-[#0B1728] to-slate-950 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
            &ldquo;When environmental conditions change faster than human generational memory can anticipate, agricultural stewardship requires an additional perspective: an eye that observes planetary scales while understanding the physical reality of local soil.&rdquo;
          </p>
          <div className="mt-4 text-xs font-mono text-teal-400">
            — DEVUPWARD Scientific Briefing
          </div>
        </div>
      </div>
    </section>
  );
}
