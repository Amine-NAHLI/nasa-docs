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
    { id: "demonstration-case", title: "Demonstration Case: Meknes Pilot", level: 2 },
    { id: "implementation-status", title: "Phase 1 Implementation Scope", level: 2 },
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
            Welcome to the official technical documentation for <strong className="text-teal-300">Farmer Eye</strong>, an agricultural decision-support initiative combining NASA Earth observations, biophysical crop science, and grounded artificial intelligence.
          </p>
        </div>

        {/* Section 1: System Orientation */}
        <section id="orientation" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            System Orientation
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Farmer Eye is developed by <strong>DEVUPWARD</strong> under the <strong>EARTH TRIALS | IMPACT 2030</strong> scientific initiative. Built for the NASA Space Apps Challenge, this documentation serves agricultural researchers, climate scientists, developers, and field innovators looking to understand our data pipelines and architectural principles.
          </p>

          <Callout type="scientific" title="Core Scientific Premise">
            Planetary satellites observe moisture and thermal dynamics at continental scales, while farmers observe individual plant phenotypes from the furrow. Farmer Eye builds the quantitative bridge connecting these two distinct perspectives to empower human agricultural stewardship.
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
            The documentation hub is structured into seven specialized discipline groups reflecting the entire chain from spaceborne measurement to on-field execution:
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                num: "01",
                name: "Getting Started & Mission",
                status: "Active (Phase 1)",
                desc: "Project identity, the global climate challenge, the 'Second Eyes' philosophy, and documentation orientation.",
              },
              {
                num: "02",
                name: "NASA Earth Intelligence",
                status: "Coming Soon (Phase 2)",
                desc: "Multispectral sensors (Landsat, Sentinel-2), thermal radiometry (ECOSTRESS), and L-band soil moisture (SMAP).",
              },
              {
                num: "03",
                name: "Scientific Engine",
                status: "Coming Soon (Phase 2)",
                desc: "FAO-56 Penman-Monteith potential evapotranspiration, phenological degree-days, and soil-water deficit calculations.",
              },
              {
                num: "04",
                name: "Earth Trials Laboratories",
                status: "Coming Soon (Phase 2)",
                desc: "Saïss Plain ground-truth demonstration plots in Meknes, Morocco, and universal agro-ecological calibration protocols.",
              },
              {
                num: "05",
                name: "AI Intelligence",
                status: "Coming Soon (Phase 2)",
                desc: "Context-aware agronomic language models, probabilistic water-stress risk trees, and grounded scenario simulation.",
              },
              {
                num: "06",
                name: "Results & Impact 2030",
                status: "Coming Soon (Phase 2)",
                desc: "Metrics for water preservation, crop resilience under heatwaves, and democratization roadmaps for global smallholders.",
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
                description: "Review the comprehensive scientific manifesto and human-centered design principles.",
                tag: "ROUTE: /docs/our-mission",
              },
              {
                number: "03",
                title: "Test Local Scoped Search",
                description: "Trigger Cmd+K or the search bar to query indexed concepts like 'SMAP', 'drought', or 'second eyes'.",
                tag: "HOTKEY: ⌘K",
              },
            ]}
          />
        </section>

        {/* Section 4: Demonstration Case: Meknes Pilot */}
        <section id="demonstration-case" className="py-8 space-y-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            Demonstration Case: Meknes & Saïss Plain
          </h2>
          <p className="text-slate-300 leading-relaxed">
            To anchor mathematical models in real-world soil, Farmer Eye leverages field data from the Mediterranean semi-arid zone of the Saïss Plain around Meknes, Morocco.
          </p>

          <ScientificNote
            sourceName="Earth Trials Ground Validation"
            satelliteMission="Landsat-9 / Sentinel-2 / SMAP"
            formula="CWSI = 1 - (ET_actual / ET_potential)"
          >
            Meknes serves as an exemplary demonstration testbed characterized by olive groves, cereal crops, and citrus orchards under severe seasonal groundwater stress. It demonstrates how algorithms calibrate against ground truth, but is not the geographic limit of the concept: Farmer Eye is architected for global transferability.
          </ScientificNote>

          <SourceReference
            citation="FAO Irrigation and Drainage Paper No. 56: Crop Evapotranspiration"
            source="Food and Agriculture Organization of the United Nations"
            year="1998"
            href="https://www.fao.org/land-water/databases-and-software/cropwat/en/"
          />
        </section>

        {/* Section 5: Phase 1 Implementation Scope */}
        <section id="implementation-status" className="py-8 space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            Phase 1 Implementation Scope
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Phase 1 delivers the foundational documentation architecture, design system, cinematic presentation, media integration registry, and the complete &ldquo;Our Mission&rdquo; treatise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>PHASE 1 DELIVERED</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Production Next.js 16 App Router + TypeScript</li>
                <li>Tailwind CSS Design System with Space Atmosphere</li>
                <li>Cinematic Homepage with 7 Interactive Sections</li>
                <li>5-Stage Interactive Data Pipeline</li>
                <li>Complete &ldquo;Our Mission&rdquo; Technical Article</li>
                <li>Reusable Media System with VideoModal & Registry</li>
                <li>Local Scoped Search with ⌘K Shortcut</li>
                <li>MDX Technical Documentation Foundation</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-slate-900/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
                <Clock className="h-4 w-4" />
                <span>PHASE 2 ROADMAP</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>NASA Earth Observation Ingestion Pipelines</li>
                <li>Full Biophysical Penman-Monteith Calculator</li>
                <li>Interactive Meknes Field Trial Map Viewer</li>
                <li>AI Agro-LLM Demonstration Playground</li>
                <li>Live Satellite Tile Layer Integration</li>
                <li>Impact 2030 Quantitative Milestone Tracking</li>
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
