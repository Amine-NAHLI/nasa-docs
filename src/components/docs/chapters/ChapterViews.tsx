"use client";

import React from "react";
import {
  EvidenceMaturityDiagram,
  SmapMonthlyChart,
  SoilDepthDifferenceChart,
  CropBattleComparisonCharts,
  ClimateAttackCharts,
  VolumetricDemandChart,
  ImpactScalingVisualizations,
} from "@/components/docs/charts/DocsCharts";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import {
  ShieldCheck,
  FileCheck,
  Calculator,
  Layers,
  ArrowRight,
  FileText,
  AlertTriangle,
  Scale,
  Activity,
  History,
  FlaskConical,
} from "lucide-react";

// ─── 1. OVERVIEW & EVIDENCE POLICY ──────────────────────────────────────────
export function OverviewChapterView() {
  return (
    <div className="space-y-10">
      {/* Evidence Policy */}
      <section id="evidence-policy" className="scroll-mt-20">
        <div className="p-4 sm:p-5 rounded-xl border border-teal-200 bg-teal-50/50 text-xs text-zinc-700 space-y-3">
          <div className="flex items-center gap-2 text-teal-900 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="h-4 w-4 text-teal-700" />
            <span>Document Status and Evidence Policy</span>
          </div>
          <p className="leading-relaxed text-zinc-700">
            <strong>Purpose:</strong> This dossier consolidates the reported implementation of the Farmer Eye / FIELDShift AI application and the EARTH TRIALS virtual laboratories. It is a technical record, not a claim that the system has been independently field-validated.
          </p>
          <div className="space-y-1.5 pt-1 text-[11px] font-mono">
            <div className="font-semibold text-zinc-900">Evidence classes used throughout:</div>
            <ul className="list-decimal pl-4 space-y-1 text-zinc-600">
              <li><strong>External reference:</strong> facts and methods documented by NASA, FAO or other cited publications.</li>
              <li><strong>Project implementation:</strong> features described in the team’s repository analysis or integration reports, including executable services and interfaces.</li>
              <li><strong>Internal test result:</strong> numerical output reported by an executed local model or extraction, not a new field measurement.</li>
              <li><strong>Illustrative formula or scenario:</strong> scientific reference equation or hypothetical parameter choice, not necessarily a verbatim source-code implementation.</li>
              <li><strong>Prospective impact:</strong> conditional quantities for 2030, never realized benefits.</li>
            </ul>
          </div>
          <div className="text-[11px] text-zinc-500 border-t border-teal-200/80 pt-2 italic">
            <strong>Source-control note:</strong> Available materials include repository analysis, EARTH TRIALS algorithmic audit, SMAP integration notes, and an Impact 2030 report. They contain multiple runs with differing assumptions, explicitly labeled by source. The AI provider also transitioned from earlier NVIDIA configurations to OpenAI API integration.
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Executive Summary &amp; Project Identity
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          Farmer Eye is an agricultural decision-support system developed by team <strong>DEVUPWARD</strong> for the <strong>NASA Space Apps Challenge 2026</strong>. The project was previously called <em>FIELDShift AI</em>; its scientific experiments retain the name <em>EARTH TRIALS</em>. The central proposition is that farmers should combine their direct knowledge of soil and fields with an additional, regional perspective provided by Earth observations, agronomic models, and explainable AI.
        </p>
        <p className="text-sm text-zinc-700 leading-relaxed">
          The implemented work described in the team materials includes acquisition of NASA POWER daily meteorological data, NASA SMAP Level-4 V008 regional soil-moisture extraction through Google Earth Engine, data quality and export functions, agricultural simulation, the Crop Battle Lab, Climate Attack Lab, Farm Time Machine, and an AI Scientific Tribunal. A Python/FastAPI service underpinned earlier application functionality; a separate Next.js/TypeScript documentation experience was later designed.
        </p>
      </section>

      {/* Key Reference Run */}
      <section id="key-reference-run" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Key Reference Comparison (Revised Meknes Simulation)
        </h2>
        <div className="p-4 rounded-xl border border-teal-300 bg-teal-50/70 text-xs text-zinc-800 space-y-1">
          <div className="font-bold text-teal-950 flex items-center gap-1.5">
            <FileCheck className="h-4 w-4 text-teal-700" />
            <span>Benchmark Comparison:</span>
          </div>
          <p className="leading-relaxed">
            Wheat monoculture <strong>455.8 mm/year</strong> modeled crop demand; wheat–lentil–barley rotation <strong>362.4 mm/year</strong>; difference <strong>93.4 mm/year</strong>. On one hectare this is <strong>934 m³</strong> of equivalent modeled evapotranspirative demand, not a measured reduction in pumped irrigation water [12, 13].
          </p>
        </div>
        <p className="text-xs text-zinc-500 italic">
          The project aims to make comparative agricultural evidence accessible. It does not prove yield improvements, field-level soil moisture, realized water savings, or deployment at worldwide scale. The global ambition remains distinct from its Moroccan reference case.
        </p>
      </section>
    </div>
  );
}

// ─── 2. WHY FARMER EYE? ─────────────────────────────────────────────────────
export function WhyFarmerEyeChapterView() {
  return (
    <div className="space-y-10">
      {/* 2.1 The Global Challenge */}
      <section id="global-challenge" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          The Global Agricultural Challenge (FAO Statistics)
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          Water scarcity, climate variability and agronomic uncertainty affect agricultural decision-making in many regions. Changes in rainfall timing, high-temperature episodes, reduced soil water availability and limited budget flexibility interact with crop and rotation choices. Risk therefore cannot be expressed responsibly as one universal number.
        </p>
        <p className="text-sm text-zinc-700 leading-relaxed">
          The Food and Agriculture Organization reports approximately <strong>72% of worldwide freshwater withdrawals going to agriculture</strong>, using its stated accounting scope. Its 2025 assessment estimates <strong>$3.26 trillion in disaster-related agricultural losses for 1991–2023</strong>, or about <strong>$99 billion annually</strong> on average [5, 6]. These are global context statistics, not losses attributable to the absence of Farmer Eye.
        </p>
      </section>

      {/* Decision Problem */}
      <section id="decision-problem" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          The Farmer Decision Problem
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          Before sowing, a farmer may need to choose crops, timing, soil management, water allocation and risk tolerance without a complete picture of regional weather history or alternative outcomes. The objective is not to automate away local experience; it is to improve the comparison of feasible options.
        </p>
      </section>

      {/* Why Earth Observations */}
      <section id="why-earth-observations" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Why Earth Observations Matter
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          Regional satellite and modeled products provide consistent temporal coverage over wide areas, particularly useful for long histories and anomaly context. Their weakness is spatial representativeness: a satellite/model grid cell encompasses many fields with different soils. Farmer Eye presents both the advantage and this limitation.
        </p>
      </section>

      {/* Evidence Maturity */}
      <section id="evidence-maturity" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Evidence Maturity &amp; System Boundaries
        </h2>
        <p className="text-xs text-zinc-600 mb-2">
          Figure 2.1: Observed data access and scenario comparisons are different from measured field effects.
        </p>
        <EvidenceMaturityDiagram />
      </section>

      {/* Design Principles */}
      <section id="design-principles" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          6 Core Design Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">1. Provenance:</strong> Make the provenance and units of every numerical observation visible.
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">2. Missing Values:</strong> Preserve missing values rather than inventing replacement measurements.
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">3. Explicit Formulas:</strong> Compute agricultural indicators with explicit formulas, not with an LLM guessing quantities.
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">4. Multi-Scenarios:</strong> Offer several feasible crop strategies and state scenario assumptions clearly.
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">5. Accessible Language:</strong> Explain results in accessible language, including Moroccan Darija in explanatory interfaces.
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <strong className="text-zinc-900 font-mono block">6. Farmer Responsibility:</strong> Keep the farmer responsible for the final choice; do not promise certain yields or savings.
          </div>
        </div>
      </section>

      {/* Second Eyes Concept */}
      <section id="second-eyes-concept" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          The Farmer’s Second Eyes Concept
        </h2>
        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-lg text-sm font-semibold text-emerald-950">
          &ldquo;Farmers see their fields. Farmer Eye helps them see the bigger picture.&rdquo;
        </blockquote>
        <p className="text-xs text-zinc-600 leading-relaxed">
          The metaphor is not a claim of optical surveillance, centimeter-scale mapping or direct measurement inside every root. SMAP L4 root-zone estimates are produced by land modeling and observation assimilation over broad grid cells. The application reveals regional tendencies and alternative scenarios, without pretending to &ldquo;see&rdquo; each individual plant.
        </p>
      </section>

      {/* Implementation Status */}
      <section id="implementation-status" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Implementation Inventory &amp; Status (Tables 6.1 &amp; 6.2)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-3">Module</th>
                <th className="text-left p-3">Reported Status</th>
                <th className="text-left p-3">Evidence Distinction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2.5 font-semibold">NASA POWER daily data</td><td className="p-2.5 font-mono text-emerald-700">Implemented</td><td className="p-2.5 text-zinc-600">REST collection, QC, caching, derived summaries [9]</td></tr>
              <tr><td className="p-2.5 font-semibold">NASA SMAP L4 V008</td><td className="p-2.5 font-mono text-emerald-700">Implemented</td><td className="p-2.5 text-zinc-600">GEE integration, 46-band catalogue, agricultural extraction [10]</td></tr>
              <tr><td className="p-2.5 font-semibold">Crop Battle Lab</td><td className="p-2.5 font-mono text-sky-700">Executed</td><td className="p-2.5 text-zinc-600">Multi-plan comparison and numerical outputs [11]</td></tr>
              <tr><td className="p-2.5 font-semibold">Climate Attack Lab</td><td className="p-2.5 font-mono text-sky-700">Executed</td><td className="p-2.5 text-zinc-600">Controlled drought, heat and delayed-rain assumptions [11]</td></tr>
              <tr><td className="p-2.5 font-semibold">Farm Time Machine</td><td className="p-2.5 font-mono text-emerald-700">Implemented</td><td className="p-2.5 text-zinc-600">Retrospective counterfactual historical comparison [11]</td></tr>
              <tr><td className="p-2.5 font-semibold">AI Scientific Tribunal</td><td className="p-2.5 font-mono text-amber-700">Concept / Local</td><td className="p-2.5 text-zinc-600">Specialized evidence-checking roles; not peer review [11]</td></tr>
              <tr><td className="p-2.5 font-semibold">AI Assistance</td><td className="p-2.5 font-mono text-emerald-700">Integrated</td><td className="p-2.5 text-zinc-600">OpenAI API in later config; early notes mention NVIDIA</td></tr>
              <tr><td className="p-2.5 font-semibold">Global measured impact</td><td className="p-2.5 font-mono text-rose-700">Not demonstrated</td><td className="p-2.5 text-zinc-600">2030 figures are conditional deployment scenarios</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 3. NASA POWER CLIMATE ──────────────────────────────────────────────────
export function NasaPowerChapterView() {
  return (
    <div className="space-y-10">
      <section id="power-parameters" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          7 Meteorological Parameters (NASA POWER)
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          The NASA Prediction Of Worldwide Energy Resources (POWER) service provides analysis-ready daily weather and solar information through a public API [1]. The project’s repository analysis describes a point request under the agroclimatology community (AG) and local solar time (LST).
        </p>

        {/* Table 9.1 */}
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Parameter</th>
                <th className="text-left p-2.5">Interpretation</th>
                <th className="text-right p-2.5">Typical Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2.5 font-bold text-emerald-700">T2M</td><td className="p-2.5">Daily mean 2-m air temperature</td><td className="p-2.5 text-right">°C</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">T2M_MAX</td><td className="p-2.5">Maximum daily air temperature</td><td className="p-2.5 text-right">°C</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">T2M_MIN</td><td className="p-2.5">Minimum daily air temperature</td><td className="p-2.5 text-right">°C</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">PRECTOTCORR</td><td className="p-2.5">Corrected daily precipitation</td><td className="p-2.5 text-right">mm/day</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">RH2M</td><td className="p-2.5">2-m relative humidity</td><td className="p-2.5 text-right">%</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">WS2M</td><td className="p-2.5">2-m wind speed</td><td className="p-2.5 text-right">m/s</td></tr>
              <tr><td className="p-2.5 font-bold text-emerald-700">ALLSKY_SFC_SW_DWN</td><td className="p-2.5">All-sky surface shortwave radiation</td><td className="p-2.5 text-right">MJ/m²/day</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="power-quality" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Quality Handling &amp; Missingness Protocol
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">9.1 Missing Marker:</span>
            <p className="text-zinc-600 leading-relaxed">
              The service reads the response declared missing-data marker (commonly −999), converts missing values to null, tracks coverage and does not interpolate missing weather days in its reported analysis [9].
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">9.2 Coverage Statistic Formula:</span>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-200 font-mono text-center text-xs text-zinc-800 my-1">
              C = 100 × (n_valid / n_expected) [%]
            </div>
            <p className="text-[11px] text-zinc-500">For 31-day month with 29 valid days: C = 100(29/31) = 93.55%.</p>
          </div>
        </div>
      </section>

      <section id="power-api-request" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Listing 9.1 — Reproducible Public API Query
        </h2>
        <CodeBlock
          filename="nasa_power_request.sh"
          language="bash"
          code={`https://power.larc.nasa.gov/api/temporal/daily/point?\\
parameters=T2M,T2M_MAX,T2M_MIN,PRECTOTCORR,RH2M,WS2M,ALLSKY_SFC_SW_DWN&\\
community=AG&longitude=-5.5516&latitude=33.8938&\\
start=20250101&end=20250131&format=JSON`}
        />
      </section>
    </div>
  );
}

// ─── 4. NASA SMAP SOIL MOISTURE ─────────────────────────────────────────────
export function NasaSmapChapterView() {
  return (
    <div className="space-y-10">
      <section id="smap-catalogue" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          NASA SMAP Level-4 SPL4SMGP Collection
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          The Soil Moisture Active Passive (SMAP) Level-4 product combines microwave observations and land-surface modeling to estimate soil conditions. Farmer Eye uses Google Earth Engine collection <code>NASA/SMAP/SPL4SMGP/008</code> (3-hourly, nominally 9 km EASE-Grid; approximately 11-km nominal pixel size in GEE) [2, 10].
        </p>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Field</th>
                <th className="text-left p-2.5">Interpretation</th>
                <th className="text-right p-2.5">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2 font-bold text-teal-700">sm_surface</td><td className="p-2">Surface soil moisture, approximately 0–5 cm</td><td className="p-2 text-right">m³/m³</td></tr>
              <tr><td className="p-2 font-bold text-teal-700">sm_rootzone</td><td className="p-2">Root-zone soil moisture, approximately 0–100 cm</td><td className="p-2 text-right">m³/m³</td></tr>
              <tr><td className="p-2 font-bold text-teal-700">sm_profile</td><td className="p-2">Profile to model bedrock depth</td><td className="p-2 text-right">m³/m³</td></tr>
              <tr><td className="p-2 font-bold text-teal-700">sm_surface_wetness</td><td className="p-2">Surface relative wetness</td><td className="p-2 text-right">dimensionless</td></tr>
              <tr><td className="p-2 font-bold text-teal-700">sm_rootzone_wetness</td><td className="p-2">Root-zone relative wetness</td><td className="p-2 text-right">dimensionless</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="smap-12-month-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          12-Month SMAP Moisture Series (ee-chart.csv)
        </h2>
        <SmapMonthlyChart />
      </section>

      <section id="smap-surface-rootzone" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Surface vs. Root-Zone Decoupling (Figure 17.1)
        </h2>
        <SoilDepthDifferenceChart />
      </section>
    </div>
  );
}

// ─── 5. ARCHITECTURE & PIPELINE ─────────────────────────────────────────────
export function ArchitecturePipelineChapterView() {
  return (
    <div className="space-y-10">
      <section id="functional-architecture" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Functional Architecture &amp; Modules (Figure 7.1)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <div className="font-bold text-zinc-900">Farmer / Research User</div>
            <div className="text-zinc-500 mt-1">Location, crop constraints, farm management options</div>
          </div>
          <div className="p-3.5 rounded-lg border border-teal-200 bg-teal-50/60">
            <div className="font-bold text-teal-950">Application API (FastAPI)</div>
            <div className="text-teal-800 mt-1">Python, Pydantic, deterministic data handling</div>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <div className="font-bold text-zinc-900">Dashboard &amp; Exports</div>
            <div className="text-zinc-500 mt-1">Evidence displays, advice, CSV/JSON exports</div>
          </div>
          <div className="p-3.5 rounded-lg border border-sky-200 bg-sky-50/60">
            <div className="font-bold text-sky-950">NASA POWER &amp; SMAP</div>
            <div className="text-sky-800 mt-1">Time series, L4 GEE grids, metadata cache</div>
          </div>
          <div className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/60">
            <div className="font-bold text-emerald-950">Agronomic Engine</div>
            <div className="text-emerald-800 mt-1">ET0, ETc, water balance simulations and rules</div>
          </div>
          <div className="p-3.5 rounded-lg border border-purple-200 bg-purple-50/60">
            <div className="font-bold text-purple-950">AI Interpretation</div>
            <div className="text-purple-800 mt-1">Tribunal / multi-agent grounded explanations</div>
          </div>
        </div>
      </section>

      <section id="request-trace" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          End-to-End Functional Request Trace (Figure 7.2)
        </h2>
        <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl border border-zinc-200 bg-white text-xs font-mono">
          <span className="p-2 rounded bg-zinc-100 text-zinc-800 font-semibold">1. Request (Coords/Crops)</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-sky-100 text-sky-800 font-semibold">2. Sources (POWER + SMAP)</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-amber-100 text-amber-800 font-semibold">3. Data QC (Missingness)</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-emerald-100 text-emerald-800 font-semibold">4. Modeling (Crop Scenarios)</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-purple-100 text-purple-800 font-semibold">5. AI Guidance (Evidence)</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="p-2 rounded bg-teal-100 text-teal-800 font-semibold">6. Farmer Output</span>
        </div>
      </section>

      <section id="trust-boundaries" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          4 System Trust Boundaries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">Provider Boundary:</span>
            <p className="text-zinc-600">NASA datasets and Earth Engine are external sources whose version, coverage and product identity must remain visible.</p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">Application Boundary:</span>
            <p className="text-zinc-600">The deterministic service owns numerical indicators, unit conversions and scenario parameters.</p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">Generative Boundary:</span>
            <p className="text-zinc-600">The LLM owns interpretation but is not allowed to invent missing satellite readings or claim calibrated failure probabilities.</p>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">Communication Boundary:</span>
            <p className="text-zinc-600">The Next.js/TypeScript documentation is a separate presentation system and should not be mislabeled as the original science backend.</p>
          </div>
        </div>
      </section>

      <section id="metadata-contract" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Table 11.1 — Minimum Metadata Contract
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">Field</th>
                <th className="text-left p-2.5">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr><td className="p-2.5 font-mono font-semibold">Dataset ID and revision</td><td className="p-2.5">Avoid mixing distinct science products or algorithm revisions</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Lat/lon, region &amp; reduction</td><td className="p-2.5">Make the sampled area inspectable</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Start/end, time zone, timestamps</td><td className="p-2.5">Prevent calendar mismatch and temporal leakage</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Native &amp; delivered resolution</td><td className="p-2.5">Prevent false field-scale claims</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Unit, fill value, valid count</td><td className="p-2.5">Protect means and accumulations from hidden missingness</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Aggregation operator</td><td className="p-2.5">Explain why nearby extracts differ</td></tr>
              <tr><td className="p-2.5 font-mono font-semibold">Checksum</td><td className="p-2.5">Allow regression testing and reproducibility</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 6. REFERENCE ET0 (FAO-56) ──────────────────────────────────────────────
export function Fao56Et0ChapterView() {
  return (
    <div className="space-y-10">
      <section id="penman-monteith-eq" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Standardized FAO-56 Penman-Monteith (Eq. 15.1)
        </h2>
        <div className="p-4 rounded-xl border border-zinc-300 bg-zinc-50 font-mono text-center space-y-2">
          <div className="text-sm sm:text-base font-bold text-zinc-900 overflow-x-auto py-1">
            ET₀ = [ 0.408·Δ·(Rn − G) + γ·(900 / (T + 273))·u₂·(es − ea) ] / [ Δ + γ·(1 + 0.34·u₂) ]
          </div>
          <div className="text-[11px] text-zinc-500 font-sans">
            Equation (15.1) — Standardized FAO-56 Penman-Monteith equation (mm/day)
          </div>
        </div>
        <div className="text-xs text-zinc-600 leading-relaxed">
          where <strong>ET₀</strong> is in mm/day; <strong>Rn</strong> is net radiation and <strong>G</strong> soil heat flux in MJ/m²/day; <strong>T</strong> is mean air temperature in °C; <strong>u₂</strong> is wind speed at 2 m in m/s; <strong>es − ea</strong> is vapor pressure deficit in kPa; <strong>Δ</strong> is saturation vapor curve slope in kPa/°C; and <strong>γ</strong> is the psychrometric constant in kPa/°C [3].
        </div>
      </section>

      <section id="vapor-pressure-curves" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Vapor Pressure &amp; Slope Curves (Eq. 15.2 &amp; 15.3)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <div className="text-zinc-500 text-[11px]">Eq. (15.2) Saturation Vapor Pressure:</div>
            <div className="font-bold text-zinc-900 mt-1">
              e°(T) = 0.6108 · exp[ (17.27 · T) / (T + 237.3) ] [kPa]
            </div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white">
            <div className="text-zinc-500 text-[11px]">Eq. (15.3) Slope of Vapor Curve:</div>
            <div className="font-bold text-zinc-900 mt-1">
              Δ(T) = [ 4098 · e°(T) ] / (T + 237.3)² [kPa/°C]
            </div>
          </div>
        </div>
      </section>

      <section id="worked-et0-example" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Worked FAO-56 Numerical Example (4.99 mm/day)
        </h2>
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-xs space-y-2">
          <div className="font-bold text-emerald-950 flex items-center gap-1.5">
            <Calculator className="h-4 w-4 text-emerald-700" />
            <span>Hypothetical Inputs for Verification:</span>
          </div>
          <p className="text-zinc-700 leading-relaxed">
            Rn = 12 MJ m⁻² day⁻¹, G = 0, T = 20°C, u₂ = 2 m/s, es − ea = 1.4 kPa, Δ = 0.1447 kPa/°C, and γ = 0.067 kPa/°C.
          </p>
          <div className="p-2.5 rounded bg-white border border-emerald-300 font-mono text-center font-bold text-emerald-900 text-xs">
            ET₀ = [ 0.408(0.1447)(12 − 0) + 0.067(900/293)(2)(1.4) ] / [ 0.1447 + 0.067(1 + 0.34 × 2) ] ≈ 4.99 mm/day
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── 7. CROP ETC & WATER BALANCE ────────────────────────────────────────────
export function EtcCropWaterChapterView() {
  return (
    <div className="space-y-10">
      <section id="etc-coefficient-eq" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Crop Evapotranspiration ETc (Eq. 16.1 &amp; 16.2)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-zinc-200 bg-white text-center">
            <div className="text-zinc-500 text-[11px]">Eq. (16.1) Daily Crop ET:</div>
            <div className="font-bold text-zinc-900 mt-1">ETc(t) = Kc(t) · ET₀(t)</div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-white text-center">
            <div className="text-zinc-500 text-[11px]">Eq. (16.2) Annualized Rotation ETc:</div>
            <div className="font-bold text-zinc-900 mt-1">ETc,rotation = (ETc⁽¹⁾ + ETc⁽²⁾ + ETc⁽³⁾) / 3</div>
          </div>
        </div>
      </section>

      <section id="soil-water-deficit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Daily Soil Water Deficit &amp; Depletion Balance
        </h2>
        <div className="p-3 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-center font-bold text-zinc-900">
          Eq. (18.1): Di = max( 0, ETc,i − Wavailable ) [mm]
        </div>
        <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs space-y-1">
          <div className="font-bold text-zinc-900 font-mono">Eq. (18.2) FAO-style Root-Zone Depletion Balance:</div>
          <div className="font-mono text-zinc-800 text-[11px]">
            Dr,t = Dr,t−1 − (Pt − ROt) − It − CRt + ETa,t + DPt
          </div>
        </div>
      </section>

      <section id="dimensional-audit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Dimensional Audit &amp; Units (Table 19.1)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">Quantity</th>
                <th className="text-left p-2.5">Unit</th>
                <th className="text-left p-2.5">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr><td className="p-2 font-mono font-semibold">ET₀, ETc</td><td className="p-2 font-mono">mm per matching period</td><td className="p-2">Physical-model depth or demand</td></tr>
              <tr><td className="p-2 font-mono font-semibold">SMAP θ</td><td className="p-2 font-mono">m³/m³</td><td className="p-2">Assimilated regional volumetric fraction</td></tr>
              <tr><td className="p-2 font-mono font-semibold">10 · A · ΔETc</td><td className="p-2 font-mono">m³</td><td className="p-2">Area-scaled model-demand equivalent</td></tr>
              <tr><td className="p-2 font-mono font-semibold">Stress, Soil, Resilience</td><td className="p-2 font-mono">0–100 index</td><td className="p-2">Project-specific synthetic ranking scales</td></tr>
              <tr><td className="p-2 font-mono font-semibold">F, h, a, s</td><td className="p-2 font-mono">count, ha, fraction, fraction</td><td className="p-2">Conditional adoption and transferability assumptions</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 8. CROP BATTLE LAB ─────────────────────────────────────────────────────
export function CropBattleLabChapterView() {
  return (
    <div className="space-y-10">
      <section id="candidate-plans-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          3 Candidate Plans (Table 21.1)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-3">Plan Identifier</th>
                <th className="text-left p-3">Strategy Name</th>
                <th className="text-left p-3">Example Sequence (Three Model Years)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-3 font-bold text-slate-700">Plan A</td><td className="p-3 font-semibold">Cereal Reference</td><td className="p-3 text-zinc-600">Wheat → Wheat → Wheat</td></tr>
              <tr><td className="p-3 font-bold text-teal-700">Plan B</td><td className="p-3 font-semibold">Diversified Rotation</td><td className="p-3 text-zinc-600">Wheat → Lentils/Legume → Barley</td></tr>
              <tr><td className="p-3 font-bold text-emerald-700">Plan C</td><td className="p-3 font-semibold">Conservation-Oriented</td><td className="p-3 text-zinc-600">Wheat → Forage/Cover → Conservation Fallow</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="modeled-demand-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Modeled Demand &amp; Relative Differences (Figures 21.1 &amp; 21.2)
        </h2>
        <CropBattleComparisonCharts />
      </section>
    </div>
  );
}

// ─── 9. CLIMATE ATTACK LAB ──────────────────────────────────────────────────
export function ClimateAttackLabChapterView() {
  return (
    <div className="space-y-10">
      <section id="shock-multipliers-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Climate Attack Lab: Shock Multipliers &amp; Stress Scores
        </h2>
        <ClimateAttackCharts />
      </section>
    </div>
  );
}

// ─── 10. FARM TIME MACHINE ──────────────────────────────────────────────────
export function FarmTimeMachineChapterView() {
  return (
    <div className="space-y-10">
      <section id="time-machine-workflow" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Farm Time Machine: Counterfactual Workflow (Figure 23.1)
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-sky-200 bg-sky-50/70">
              <div className="font-bold text-sky-950 font-mono">Historical NASA</div>
              <div className="text-sky-800 text-[11px] mt-0.5">Recorded past weather context &amp; satellite history</div>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/70">
              <div className="font-bold text-emerald-950 font-mono">Alternative Farm Plan</div>
              <div className="text-emerald-800 text-[11px] mt-0.5">Hypothetical management &amp; rotation strategy</div>
            </div>
          </div>
          <div className="p-2.5 rounded bg-white border border-zinc-200 font-mono text-center text-zinc-700 text-[11px] mt-2">
            Fixed Methodology (same units and seasons) → <strong>Counterfactual Result</strong> (modeled, not observed)
          </div>
        </div>
      </section>

      <section id="physical-soil-protocol" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Physical Soil Laboratory Protocol
        </h2>
        <p className="text-sm text-zinc-700 leading-relaxed">
          The physical laboratory plan is a <strong>field-validation protocol</strong>, not a claim that soil samples were already analyzed. A defensible plan includes: GPS-labeled sampling sites; crop and tillage metadata; depth-stratified samples; texture and bulk density; gravimetric moisture or calibrated volumetric probes; electrical conductivity and pH; organic matter; and laboratory quality-control records.
        </p>
      </section>
    </div>
  );
}

// ─── 11. AI ARCHITECTURE ────────────────────────────────────────────────────
export function AiArchitectureChapterView() {
  return (
    <div className="space-y-10">
      <section id="multi-agent-division" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Division of Agent Responsibilities (Figure 26.1)
        </h2>
        <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-3">
          <div className="p-2.5 rounded-lg border border-zinc-200 bg-white text-center font-mono text-xs font-semibold text-zinc-800">
            Farmer Question → Verified Context &amp; Model Results
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg border border-sky-200 bg-sky-50 text-center">
              <div className="font-bold text-sky-950">Climate Specialist</div>
              <div className="text-sky-800 text-[11px] mt-0.5">Examines heat and rainfall patterns (NASA POWER)</div>
            </div>
            <div className="p-3 rounded-lg border border-teal-200 bg-teal-50 text-center">
              <div className="font-bold text-teal-950">Soil Specialist</div>
              <div className="text-teal-800 text-[11px] mt-0.5">Interprets SMAP moisture and 9km limitations</div>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50 text-center">
              <div className="font-bold text-emerald-950">Agronomy Specialist</div>
              <div className="text-emerald-800 text-[11px] mt-0.5">Evaluates feasibility of rotation suggestions</div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg border border-amber-300 bg-amber-50 text-center text-xs font-mono font-bold text-amber-950">
            Evidence Guardrail (Checks numbers, units, and source claims)
          </div>
          <div className="p-2.5 rounded-lg border border-emerald-300 bg-emerald-100/70 text-center text-xs font-mono font-bold text-emerald-950">
            Grounded Explanation (Farmer Decides)
          </div>
        </div>
      </section>

      <section id="acceptance-criteria" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          6 Acceptance Criteria Tests (Table 27.1)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">Test Prompt Class</th>
                <th className="text-left p-2.5">Required Grounded Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr><td className="p-2.5 font-semibold text-zinc-900">No data for a day</td><td className="p-2.5">State unavailable and avoid a fabricated replacement</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">Root moisture at one tree</td><td className="p-2.5">Explain 9-km product and uncertain parcel representativeness</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">&ldquo;Guarantee next harvest&rdquo;</td><td className="p-2.5">Refuse guarantee and show conditional alternatives</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">Water saving claim</td><td className="p-2.5">Distinguish modeled ET difference from actual withdrawals</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">Extreme shock</td><td className="p-2.5">State scenario multipliers as assumptions, not forecast</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">New location</td><td className="p-2.5">Request or verify local conditions and regional source coverage</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 12. AI SCIENTIFIC TRIBUNAL ─────────────────────────────────────────────
export function AiScientificTribunalChapterView() {
  return (
    <div className="space-y-10">
      <section id="tribunal-evidence-checks" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          5 Evidence Checks &amp; Scientific Tribunal
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs space-y-2">
          <ol className="list-decimal pl-4 space-y-1 text-zinc-700">
            <li>Are numerical weather/soil quantities present in source datasets or deterministic outputs?</li>
            <li>Are the same region, units and time window used across comparisons?</li>
            <li>Does a proposed crop match the soil/water/budget constraints supplied?</li>
            <li>Are score labels explicitly heuristic and are 2030 extrapolations called prospective?</li>
            <li>Are unresolved contradictions returned to the user rather than concealed?</li>
          </ol>
        </div>
      </section>

      <section id="deterministic-vs-generative" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Deterministic Science vs. Generative AI
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">Task</th>
                <th className="text-left p-2.5">Deterministic Implementation</th>
                <th className="text-left p-2.5">Generative Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr><td className="p-2.5 font-semibold text-zinc-900">Daily rainfall total</td><td className="p-2.5">Sum valid NASA fields</td><td className="p-2.5">Explain whether coverage is complete</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">ET calculations</td><td className="p-2.5">Published formal equations &amp; configured coefficients</td><td className="p-2.5">Explain crop and season assumptions</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">Climate shock</td><td className="p-2.5">Apply declared multipliers</td><td className="p-2.5">Explain limits of counterfactual scenario</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">Rotation comparison</td><td className="p-2.5">Recompute outcomes for each plan</td><td className="p-2.5">Communicate pros, cons and feasibility</td></tr>
              <tr><td className="p-2.5 font-semibold text-zinc-900">NASA provenance</td><td className="p-2.5">Dataset IDs and retrieval metadata</td><td className="p-2.5">Cite and contextualize the sources</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── 13. MEKNES REFERENCE CASE ──────────────────────────────────────────────
export function MeknesReferenceCaseChapterView() {
  return (
    <div className="space-y-10">
      <section id="2025-audit-baseline" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Meknes / Saïss 2025 Baseline Values (Table 32.1)
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Reported Variable</th>
                <th className="text-right p-2.5">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2.5 font-semibold">Annual precipitation</td><td className="p-2.5 text-right font-bold text-teal-700">701.24 mm</td></tr>
              <tr><td className="p-2.5 font-semibold">Mean air temperature</td><td className="p-2.5 text-right font-bold">18.05 °C</td></tr>
              <tr><td className="p-2.5 font-semibold">Hot days (Tmax ≥ 30°C)</td><td className="p-2.5 text-right font-bold text-amber-600">156 days</td></tr>
              <tr><td className="p-2.5 font-semibold">Dry days (P &lt; 1 mm)</td><td className="p-2.5 text-right font-bold text-rose-600">282 days</td></tr>
              <tr><td className="p-2.5 font-semibold">Average root-zone moisture</td><td className="p-2.5 text-right">0.266 m³/m³</td></tr>
              <tr><td className="p-2.5 font-semibold">Average surface moisture</td><td className="p-2.5 text-right">0.207 m³/m³</td></tr>
              <tr><td className="p-2.5 font-semibold">October root-zone estimate</td><td className="p-2.5 text-right">0.219 m³/m³</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="volumetric-demand-chart" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Volumetric ETc Demand Differences (Figure 33.1)
        </h2>
        <VolumetricDemandChart />
      </section>

      <section id="pytest-validation-audit" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Automated Testing &amp; 7-Point Verification Checklist
        </h2>
        <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs mb-3">
          <strong>Pytest Audit Summary:</strong> 52 automated tests executed (<strong>49 passed</strong>, 3 skipped, <strong>0 failed</strong>).
        </div>
        <ol className="list-decimal pl-4 space-y-1 text-xs text-zinc-700">
          <li>Check source collection identifiers and dates against NASA metadata.</li>
          <li>Recalculate sums and means from unmodified raw files; confirm missing-data treatment.</li>
          <li>Verify conversion factors and dimensional consistency for mm, m³/ha and percent.</li>
          <li>Repeat each stress scenario with frozen inputs and compare outputs deterministically.</li>
          <li>Confirm that every user-visible simulation score is identified as an index.</li>
          <li>Compare regional moisture values with matched field observations before claiming calibration.</li>
          <li>Independently audit AI responses for fabricated measurements or unsupported guarantees.</li>
        </ol>
      </section>
    </div>
  );
}

// ─── 14. IMPACT 2030 ────────────────────────────────────────────────────────
export function Impact2030ChapterView() {
  return (
    <div className="space-y-10">
      <section id="scaling-identities" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Impact 2030: Conditional Scaling Model (Eq. 38.1 - 38.3)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-center">
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
            <span className="text-zinc-500 block text-[10px]">Eq. (38.1) Total Area:</span>
            <span className="font-bold text-zinc-900">A₂₀₃₀ = F · h · a [ha]</span>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
            <span className="text-zinc-500 block text-[10px]">Eq. (38.2) ET Demand Eq.:</span>
            <span className="font-bold text-teal-800">V_ET = 10 · A₂₀₃₀ · d [m³/yr]</span>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
            <span className="text-zinc-500 block text-[10px]">Eq. (38.3) Hypo. Irrigation:</span>
            <span className="font-bold text-slate-800">V_I = 10 · A₂₀₃₀ · q · i [m³/yr]</span>
          </div>
        </div>
      </section>

      <section id="conditional-scenarios-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Conditional Scenarios Visualizations
        </h2>
        <ImpactScalingVisualizations />
      </section>
    </div>
  );
}

// ─── 15. ANNEXES & REFERENCES ───────────────────────────────────────────────
export function AnnexesChapterView() {
  return (
    <div className="space-y-10">
      <section id="annex-a-math" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Annex A — Mathematical Reference Sheet
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Concept</th>
                <th className="text-left p-2.5">Equation / Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2 font-bold">Crop ET</td><td className="p-2">ETc,t = Kc,t · ET₀,t</td></tr>
              <tr><td className="p-2 font-bold">Demand difference</td><td className="p-2">ΔETc = ETc,baseline − ETc,alternative</td></tr>
              <tr><td className="p-2 font-bold">Percent difference</td><td className="p-2">r = 100 × (ΔETc / ETc,baseline) %</td></tr>
              <tr><td className="p-2 font-bold">Depth and area</td><td className="p-2">1 mm × 1 ha = 10 m³</td></tr>
              <tr><td className="p-2 font-bold">ET equivalent</td><td className="p-2">V_ET = 10 · A · d</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="annex-b-chart-table" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Annex B — Full 12-Month ee-chart.csv Table
        </h2>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2">Month</th>
                <th className="text-right p-2">Surface (0-5cm)</th>
                <th className="text-right p-2">Root-Zone (0-100cm)</th>
                <th className="text-right p-2">Root − Surface</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-1.5">Jan</td><td className="text-right">21.263</td><td className="text-right">26.204</td><td className="text-right text-teal-700 font-bold">4.941</td></tr>
              <tr><td className="p-1.5">Feb</td><td className="text-right">24.177</td><td className="text-right">28.344</td><td className="text-right text-teal-700 font-bold">4.167</td></tr>
              <tr><td className="p-1.5">Mar</td><td className="text-right">34.840</td><td className="text-right">36.398</td><td className="text-right text-teal-700 font-bold">1.558</td></tr>
              <tr><td className="p-1.5">Apr</td><td className="text-right">27.351</td><td className="text-right">33.213</td><td className="text-right text-teal-700 font-bold">5.862</td></tr>
              <tr><td className="p-1.5">May</td><td className="text-right">19.238</td><td className="text-right">28.209</td><td className="text-right text-teal-700 font-bold">8.971</td></tr>
              <tr><td className="p-1.5">Jun</td><td className="text-right">17.086</td><td className="text-right">25.639</td><td className="text-right text-teal-700 font-bold">8.553</td></tr>
              <tr><td className="p-1.5">Jul</td><td className="text-right">15.020</td><td className="text-right">23.978</td><td className="text-right text-teal-700 font-bold">8.958</td></tr>
              <tr><td className="p-1.5">Aug</td><td className="text-right">14.484</td><td className="text-right">22.826</td><td className="text-right text-teal-700 font-bold">8.342</td></tr>
              <tr><td className="p-1.5">Sep</td><td className="text-right">14.298</td><td className="text-right">22.302</td><td className="text-right text-teal-700 font-bold">8.004</td></tr>
              <tr><td className="p-1.5">Oct</td><td className="text-right">13.337</td><td className="text-right">22.116</td><td className="text-right text-teal-700 font-bold">8.779</td></tr>
              <tr><td className="p-1.5">Nov</td><td className="text-right">18.926</td><td className="text-right">23.915</td><td className="text-right text-teal-700 font-bold">4.989</td></tr>
              <tr><td className="p-1.5">Dec</td><td className="text-right">32.488</td><td className="text-right">33.043</td><td className="text-right text-teal-700 font-bold">0.555</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="full-bibliography" className="space-y-4 scroll-mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">
          Full Bibliography [1–14]
        </h2>
        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2 text-xs text-zinc-600 font-sans">
          <div>[1] <strong>NASA POWER</strong>, Daily API – Solar and Meteorological Time Series. <span className="font-mono text-teal-700">power.larc.nasa.gov</span></div>
          <div>[2] <strong>NASA/NSIDC &amp; GEE</strong>, SMAP L4 SPL4SMGP Version 8. DOI: 10.5067/T5RUATAQREF8</div>
          <div>[3] <strong>Allen, R. G., et al. (1998)</strong>, FAO Irrigation and Drainage Paper 56.</div>
          <div>[4] <strong>FAO-56, Chapter 8</strong> – Root-Zone Water Balance.</div>
          <div>[5] <strong>FAO</strong>, Agricultural Water Management – Water Scarcity.</div>
          <div>[6] <strong>FAO (2025)</strong>, Disasters cost global agriculture USD 3.26 trillion. DOI: 10.4060/cd7185en.</div>
          <div>[7] <strong>Mudare et al. (2025)</strong>, Nature Communications. DOI: 10.1038/s41467-025-64567-9.</div>
          <div>[8] <strong>United Nations</strong>, 2030 Agenda for Sustainable Development.</div>
          <div>[9-14] <strong>DEVUPWARD / FIELDShift AI Technical Reports</strong> (Repository analysis, SMAP GEE report, EARTH TRIALS validation, Impact 2030).</div>
        </div>
      </section>
    </div>
  );
}
