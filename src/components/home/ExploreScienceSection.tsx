"use client";

import React from "react";
import Link from "next/link";
import {
  Satellite,
  Activity,
  FlaskConical,
  BrainCircuit,
  TrendingUp,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ScienceCardItem {
  id: string;
  order: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isImplemented: boolean;
  statusBadge: "Phase 1" | "Coming Soon";
  tags: string[];
}

export function ExploreScienceSection() {
  const cards: ScienceCardItem[] = [
    {
      id: "getting-started",
      order: "01",
      title: "Getting Started & Mission",
      description:
        "The complete orientation to Farmer Eye: why we created it, the global challenge, and the philosophy of 'The Farmer's Second Eyes'.",
      icon: <Sparkles className="h-6 w-6 text-teal-400" />,
      href: "/docs/our-mission",
      isImplemented: true,
      statusBadge: "Phase 1",
      tags: ["Mission Briefing", "System Overview", "DEVUPWARD"],
    },
    {
      id: "nasa-earth",
      order: "02",
      title: "NASA Earth Intelligence",
      description:
        "Integration of NASA POWER meteorological datasets and NASA SMAP microwave radar root-zone soil moisture telemetry.",
      icon: <Satellite className="h-6 w-6 text-sky-400" />,
      href: "/docs#nasa-earth-intelligence",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["NASA POWER", "SMAP L4", "Climate Telemetry"],
    },
    {
      id: "scientific-engine",
      order: "03",
      title: "Scientific Engine",
      description:
        "Rigorous biophysical agronomy: standard FAO-56 Penman-Monteith reference evapotranspiration and soil-water deficit balance calculations.",
      icon: <Activity className="h-6 w-6 text-emerald-400" />,
      href: "/docs#scientific-engine",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["Penman-Monteith", "FAO-56", "Water Deficit"],
    },
    {
      id: "earth-trials",
      order: "04",
      title: "Earth Trials Laboratories",
      description:
        "Demonstration scenarios and simulated stress testbeds: the Saïss Plain / Meknes demonstration case study and global transferability protocols.",
      icon: <FlaskConical className="h-6 w-6 text-amber-400" />,
      href: "/docs#earth-trials",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["Meknes Scenario", "Simulation", "Transferability"],
    },
    {
      id: "ai-intelligence",
      order: "05",
      title: "AI Intelligence",
      description:
        "Context-aware agronomic reasoning engines that fuse physical calculations, localized soil geography, and weather forecasts into clear guidance.",
      icon: <BrainCircuit className="h-6 w-6 text-teal-300" />,
      href: "/docs#ai-intelligence",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["Context-Aware", "Risk Matrices", "Decision Co-Pilot"],
    },
    {
      id: "impact-2030",
      order: "06",
      title: "Results & Impact 2030",
      description:
        "Long-term targets for water preservation, yield resilience, climate awareness, and democratizing access across vulnerable global growing regions.",
      icon: <TrendingUp className="h-6 w-6 text-emerald-300" />,
      href: "/docs#impact-2030",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["Water Resilience", "Global Access", "Impact Goals"],
    },
    {
      id: "architecture-developers",
      order: "07",
      title: "Architecture & Developers",
      description:
        "Next.js App Router technical specs, component systems, Route Handlers, data contracts, and integration APIs for developers and researchers.",
      icon: <Terminal className="h-6 w-6 text-slate-300" />,
      href: "/docs#architecture-developers",
      isImplemented: false,
      statusBadge: "Coming Soon",
      tags: ["TypeScript", "Next.js App Router", "Data Schemas"],
    },
  ];

  return (
    <section id="science" className="relative py-24 border-t border-white/10 bg-[#070D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>KNOWLEDGE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-mono">
            EXPLORE THE SCIENCE
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            Farmer Eye is organized into seven core disciplines spanning planetary Earth observation, biophysical modeling, field trials, and AI reasoning.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const cardContent = (
              <Card
                className={cn(
                  "h-full flex flex-col justify-between transition-all duration-300 relative group",
                  card.isImplemented
                    ? "bg-[#0B1728]/80 hover:bg-[#0B1728] border-teal-500/40 hover:border-teal-400 hover:shadow-[0_0_25px_rgba(32,201,189,0.15)] cursor-pointer"
                    : "bg-[#0B1728]/40 border-white/10 hover:border-white/20"
                )}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/10">
                      {card.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        {card.order}
                      </span>
                      {card.isImplemented ? (
                        <Badge variant="turquoise" className="text-[10px]">
                          {card.statusBadge}
                        </Badge>
                      ) : (
                        <Badge variant="comingSoon" className="text-[10px]">
                          {card.statusBadge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl text-slate-100 group-hover:text-teal-300 transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    {card.isImplemented && (
                      <ArrowUpRight className="h-4 w-4 text-teal-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </CardDescription>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            if (card.isImplemented) {
              return (
                <Link key={card.id} href={card.href} className="block h-full">
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={card.id} className="block h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
