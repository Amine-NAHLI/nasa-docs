"use client";

import React from "react";
import Link from "next/link";
import { TableOfContents, TocItem } from "@/components/layout/TableOfContents";
import { DocsBreadcrumb } from "@/components/docs/DocsBreadcrumb";
import { Callout } from "@/components/docs/Callout";
import { ScientificNote } from "@/components/docs/ScientificNote";
import { StepDiagram } from "@/components/docs/StepDiagram";
import { SourceReference } from "@/components/docs/SourceReference";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function DocsOverviewPage() {
  const tocItems: TocItem[] = [
    { id: "orientation", title: "System Orientation", level: 2 },
    { id: "seven-disciplines", title: "The Seven Scientific Disciplines", level: 2 },
    { id: "quickstart", title: "Quickstart for Judges & Researchers", level: 2 },
    { id: "demonstration-case", title: "Demonstration Case: Meknes Simulation Scenario", level: 2 },
    { id: "implementation-status", title: "Current Capabilities vs. Future Roadmap", level: 2 },
  ];

  return (
    <div className="flex justify-between gap-8">
      {/* Article Content */}
      <article className="flex-1 min-w-0 max-w-3xl">
        <div className="mb-6 md:hidden">
          <DocsBreadcrumb items={[{ label: "Getting Started" }, { label: "Overview" }]} />
        </div>

        {/* Header */}
        <div className="space-y-3 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Badge variant="turquoise">01. Getting Started</Badge>
            <span className="text-xs font-mono text-slate-500">Doc ID: FE-DOC-010</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
            Documentation Overview
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Welcome to the official technical documentation for <strong className="text-teal-300">Farmer Eye</strong>, an agricultural decision-support initiative combining NASA POWER climate datasets, NASA SMAP soil moisture measurements, biophysical crop water modeling, and grounded artificial intelligence.
          </p>
        </div>

        {/* Section 1: System Orientation */}
        <section id="orientation" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            System Orientation
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Farmer Eye is developed independently by <strong>DEVUPWARD</strong> under the <strong>EARTH TRIALS | IMPACT 2030</strong> scientific initiative for the <strong>NASA Space Apps Challenge</strong>. This documentation serves judges, agricultural researchers, climate scientists, developers, and field innovators looking to understand our scientific data pipelines and decision-support logic.
          </p>

          <Callout type="scientific" title="Core Scientific Premise">
            Planetary sensors capture macro-scale atmospheric radiation, temperature anomalies, and microwave soil moisture, while farmers manage individual plants on the ground. Farmer Eye connects these perspectives by translating NASA climate and soil data into localized biophysical water balance estimates, giving farmers clear, actionable decision-support.
          </Callout>

          <div className="pt-2">
            <Link href="/docs/our-mission">
              <Button variant="primary" size="md">
                <span>Read Full Mission & Philosophy Document</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 2: The Seven Scientific Disciplines */}
        <section id="seven-disciplines" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            The Seven Scientific Disciplines
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The documentation hub is structured into seven specialized discipline groups reflecting the entire pipeline from spaceborne data ingestion to human-centered decision support:
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                num: "01",
                name: "Getting Started & Mission",
                status: "Active (Phase 1)",
                desc: "Project identity, the global climate challenge, the 'Second Eyes' thesis, and documentation orientation.",
              },
              {
                num: "02",
                name: "NASA Earth Intelligence",
                status: "Coming Soon (Phase 2)",
                desc: "NASA POWER meteorological parameters and NASA SMAP microwave soil moisture feeds (high-resolution optical/thermal imagery planned for future roadmap).",
              },
              {
                num: "03",
                name: "Scientific Engine",
                status: "Coming Soon (Phase 2)",
                desc: "FAO-56 Penman-Monteith reference evapotranspiration (ET0) and root-zone soil-water depletion modeling.",
              },
              {
                num: "04",
                name: "Earth Trials Laboratories",
                status: "Coming Soon (Phase 2)",
                desc: "Saïss Plain / Meknes semi-arid demonstration scenario and global agro-ecological transferability protocols.",
              },
              {
                num: "05",
                name: "AI Intelligence",
                status: "Coming Soon (Phase 2)",
                desc: "Context-aware agronomic interpretation, water-stress risk scoring, and scenario evaluation.",
              },
              {
                num: "06",
                name: "Results & Impact 2030",
                status: "Coming Soon (Phase 2)",
                desc: "Targets for water conservation, heatwave resilience, and smallholder accessibility.",
              },
              {
                num: "07",
                name: "Architecture & Developers",
                status: "Coming Soon (Phase 2)",
                desc: "Next.js App Router codebase design, Route Handlers, data contracts, and public API interfaces.",
              },
            ].map((disc) => (
              <div
                key={disc.num}
                className="p-3.5 rounded-lg border border-white/10 bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-teal-400 font-bold">{disc.num}.</span>
                    <span className="text-sm font-semibold text-slate-100">{disc.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{disc.desc}</p>
                </div>
                <span
                  className={
                    disc.num === "01"
                      ? "text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30 shrink-0 self-start sm:self-center"
                      : "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-500 border border-white/5 shrink-0 self-start sm:self-center"
                  }
                >
                  {disc.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Quickstart for Judges & Researchers */}
        <section id="quickstart" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            Quickstart for Judges & Researchers
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Follow this rapid orientation trail to evaluate the technical substance of Phase 1:
          </p>

          <StepDiagram
            title="3-Step Evaluation Trail"
            steps={[
              {
                number: "01",
                title: "Examine Homepage Architecture",
                description: "Review the cinematic hero, interactive 5-stage pipeline, and design system at the root route.",
                tag: "ROUTE: /",
              },
              {
                number: "02",
                title: "Inspect Our Mission Document",
                description: "Review our scientific manifesto, data sources (NASA POWER & SMAP), and human-centered design principles.",
                tag: "ROUTE: /docs/our-mission",
              },
              {
                number: "03",
                title: "Test Local Scoped Search",
                description: "Trigger Cmd+K or the search bar to query indexed concepts like 'NASA POWER', 'SMAP', or 'second eyes'.",
                tag: "HOTKEY: ⌘K",
              },
            ]}
          />
        </section>

        {/* Section 4: Demonstration Case: Meknes Simulation Scenario */}
        <section id="demonstration-case" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            Demonstration Case: Meknes Simulation Scenario
          </h2>
          <p className="text-slate-300 leading-relaxed">
            To contextualize modeling equations in a concrete agricultural setting, Farmer Eye uses an illustrative demonstration scenario based on the Mediterranean semi-arid Saïss Plain around Meknes, Morocco.
          </p>

          <ScientificNote
            sourceName="Simulation Scenario: Semi-Arid Mediterranean Basin"
            satelliteMission="NASA POWER & NASA SMAP Feeds"
            formula="ET0 = [0.408Δ(Rn - G) + γ(900/(T + 273))u2(es - ea)] / [Δ + γ(1 + 0.34u2)]"
          >
            The Meknes scenario represents an illustrative simulation case study characterized by olive groves and cereal crops subject to severe seasonal precipitation deficits and groundwater stress. It demonstrates how NASA POWER solar radiation, temperature, and SMAP soil moisture parameters feed into the FAO-56 Penman-Monteith equation. This scenario serves as an illustrative simulation and does not claim field-level ground-truth sensor calibration.
          </ScientificNote>

          <SourceReference
            citation="NASA Prediction Of Worldwide Energy Resources (POWER) Project"
            source="NASA Langley Research Center"
            year="2026"
            href="https://power.larc.nasa.gov/"
          />
        </section>

        {/* Section 5: Current Capabilities vs Future Roadmap */}
        <section id="implementation-status" className="py-8 space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            Current Capabilities vs. Future Roadmap
          </h2>
          <p className="text-slate-300 leading-relaxed">
            To maintain strict scientific integrity, Farmer Eye clearly distinguishes active Phase 1 capabilities from simulation scenarios and planned future developments:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>CURRENT PROJECT CAPABILITIES</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>NASA POWER meteorological data parameter ingestion</li>
                <li>NASA SMAP surface and root-zone soil moisture metrics</li>
                <li>FAO-56 Penman-Monteith reference evapotranspiration (ET0) modeling</li>
                <li>Soil-water deficit tracking and depletion estimates</li>
                <li>Context-aware AI-assisted advisory synthesis</li>
                <li>Meknes semi-arid demonstration simulation scenario</li>
                <li>Production Next.js 16 App Router & TypeScript architecture</li>
                <li>Local scoped documentation search (⌘K)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
                <Clock className="h-4 w-4" />
                <span>PLANNED FUTURE ROADMAP (PHASE 2+)</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>High-resolution optical satellite imagery (e.g. Landsat, Sentinel-2)</li>
                <li>Thermal radiometry and canopy temperature stress (e.g. ECOSTRESS)</li>
                <li>Spectral vegetation indices (NDVI, NDWI) and radiometric calibration</li>
                <li>Field-level sensor meshes and ground-truth validation networks</li>
                <li>Interactive web-based biophysical calculator tool</li>
                <li>Public REST API Route Handlers for external developer access</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* Right Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
