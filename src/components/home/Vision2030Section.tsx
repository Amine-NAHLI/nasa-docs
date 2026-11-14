"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, HeartHandshake, Sprout, ShieldAlert, Sparkles } from "lucide-react";

export function Vision2030Section() {
  const pillars = [
    {
      icon: <Globe className="h-6 w-6 text-teal-400" />,
      title: "Democratized Earth Intelligence",
      description:
        "Satellite Earth observation should not be the exclusive domain of high-budget research institutions or agribusiness conglomerates. By 2030, our goal is to place actionable planetary science into the hands of family farmers worldwide.",
    },
    {
      icon: <Sprout className="h-6 w-6 text-emerald-400" />,
      title: "Climate-Aware Agronomy",
      description:
        "Fostering agricultural resilience where every drop of irrigation is timed with precision, reducing aquifer over-extraction and safeguarding multi-generational soil vitality.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-amber-400" />,
      title: "Human Dignity & Agency",
      description:
        "Technology that honors the farmer as steward and expert. Farmer Eye rejects automated disempowerment; we build tools that enhance human dignity and confidence in the field.",
    },
  ];

  return (
    <section id="vision-2030" className="relative py-28 border-t border-white/10 bg-[#070D17] overflow-hidden">
      {/* Background warm sunrise and turquoise glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/10 via-amber-500/5 to-teal-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/30 text-xs font-mono text-teal-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>EARTH TRIALS | IMPACT 2030 INITIATIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
            THE 2030 VISION
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Our initiative begins with scientific validation in pilot regions like Meknes, Morocco. But our horizon is truly global: building an open, accessible scientific bridge between orbiting Earth sensors and every grower facing an uncertain sky.
          </p>
        </div>

        {/* 3 Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0B1728]/70 backdrop-blur-md hover:border-teal-400/40 transition-all duration-300 space-y-4 text-center sm:text-left"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 w-fit mx-auto sm:mx-0">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-mono">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest Milestone Status Card */}
        <div className="mt-14 p-6 rounded-xl border border-white/10 bg-slate-900/60 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-slate-400">
          <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-slate-200 font-semibold block uppercase">
              Phase 1 Milestone Status
            </span>
            <span>
              Farmer Eye is currently in scientific demonstration and architectural specification phase. Worldwide deployment and measurable impact goals are roadmap targets under development.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
