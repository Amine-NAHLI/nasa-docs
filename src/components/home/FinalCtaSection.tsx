"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <section className="relative py-28 border-t border-white/10 bg-gradient-to-b from-[#070D17] via-[#0B1728] to-[#070D17] overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-300">
          <span>JOIN THE SCIENTIFIC INITIATIVE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-mono uppercase leading-tight">
          THE FUTURE OF FARMING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-amber-300">
            STARTS WITH A NEW PERSPECTIVE.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you are a NASA Space Apps judge, agricultural scientist, developer, or grower, delve into the documentation to explore how data, models, and human intuition come together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto text-base px-8 py-3.5 shadow-xl">
              <span>Explore the Documentation</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>

          <Link href="/docs/our-mission" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8 py-3.5">
              <Compass className="h-4 w-4 text-amber-400 mr-2" />
              <span>Discover Our Mission</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
