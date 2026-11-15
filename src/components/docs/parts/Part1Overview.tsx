"use client";

import React from "react";
import { EvidenceMaturityDiagram } from "@/components/docs/charts/DocsCharts";
import { Callout } from "@/components/docs/Callout";
import { ShieldCheck, Target, Layers, FileCheck } from "lucide-react";

export function Part1Overview() {
  return (
    <div className="space-y-12">
      {/* Evidence Policy Banner */}
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

      {/* Chapter 1: Executive Summary */}
      <section id="chapter-1" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 1</span>
            <span>Executive Summary</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Farmer Eye is an agricultural decision-support system developed by team <strong>DEVUPWARD</strong> for the <strong>NASA Space Apps Challenge 2026</strong>. The project was previously called <em>FIELDShift AI</em>; its scientific experiments retain the name <em>EARTH TRIALS</em>. The central proposition is that farmers should combine their direct knowledge of soil and fields with an additional, regional perspective provided by Earth observations, agronomic models, and explainable AI.
        </p>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The implemented work described in the team materials includes acquisition of NASA POWER daily meteorological data, NASA SMAP Level-4 V008 regional soil-moisture extraction through Google Earth Engine, data quality and export functions, agricultural simulation, the Crop Battle Lab, Climate Attack Lab, Farm Time Machine, and an AI Scientific Tribunal. A Python/FastAPI service underpinned earlier application functionality; a separate Next.js/TypeScript documentation experience was later designed.
        </p>

        {/* Key Reference Callout */}
        <div className="p-4 rounded-xl border border-teal-300 bg-teal-50/70 text-xs text-zinc-800 space-y-1">
          <div className="font-bold text-teal-950 flex items-center gap-1.5">
            <FileCheck className="h-4 w-4 text-teal-700" />
            <span>Key reference comparison, revised Meknes simulation:</span>
          </div>
          <p className="leading-relaxed">
            Wheat monoculture <strong>455.8 mm/year</strong> modeled crop demand; wheat–lentil–barley rotation <strong>362.4 mm/year</strong>; difference <strong>93.4 mm/year</strong>. On one hectare this is <strong>934 m³</strong> of equivalent modeled evapotranspirative demand, not a measured reduction in pumped irrigation water [12, 13].
          </p>
        </div>

        <p className="text-xs text-zinc-500 italic">
          The project aims to make comparative agricultural evidence accessible. It does not prove yield improvements, field-level soil moisture, realized water savings, or deployment at worldwide scale. The global ambition remains distinct from its Moroccan reference case.
        </p>
      </section>

      {/* Chapter 2: The Global Agricultural Challenge */}
      <section id="chapter-2" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 2</span>
            <span>The Global Agricultural Challenge</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Water scarcity, climate variability and agronomic uncertainty affect agricultural decision-making in many regions. Changes in rainfall timing, high-temperature episodes, reduced soil water availability and limited budget flexibility interact with crop and rotation choices. Risk therefore cannot be expressed responsibly as one universal number.
        </p>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The Food and Agriculture Organization reports approximately <strong>72% of worldwide freshwater withdrawals going to agriculture</strong>, using its stated accounting scope. Its 2025 assessment estimates <strong>$3.26 trillion in disaster-related agricultural losses for 1991–2023</strong>, or about <strong>$99 billion annually</strong> on average [5, 6]. These are global context statistics, not losses attributable to the absence of Farmer Eye.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg border border-zinc-200 bg-white">
            <h3 className="text-xs font-bold text-zinc-900 mb-1">2.1 Decision Problem</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Before sowing, a farmer may need to choose crops, timing, soil management, water allocation and risk tolerance without a complete picture of regional weather history or alternative outcomes. The objective is not to automate away local experience; it is to improve the comparison of feasible options.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 bg-white">
            <h3 className="text-xs font-bold text-zinc-900 mb-1">2.2 Why Earth Observations Matter</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Regional satellite and modeled products provide consistent temporal coverage over wide areas, useful for long histories and anomaly context. Their weakness is spatial representativeness: a satellite/model grid cell encompasses many fields with different soils. Farmer Eye presents both the advantage and this limitation.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-xs font-bold text-zinc-900 mb-2">2.3 What a Responsible System Can and Cannot Promise</h3>
          <p className="text-xs text-zinc-700 leading-relaxed mb-3">
            Three distinct levels of benefit must be separated: (1) making sourced regional information more accessible; (2) giving a repeatable comparison of crop-plan assumptions; and (3) testing whether changed choices improve verified field outcomes. Only the first two have local prototype evidence in the supplied records.
          </p>
          <EvidenceMaturityDiagram />
        </div>
      </section>

      {/* Chapter 3: Why We Created Farmer Eye */}
      <section id="chapter-3" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 3</span>
            <span>Why We Created Farmer Eye</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The original project question was how to adapt farming strategies using NASA data. The team shaped that question into software that helps a user compare agricultural plans rather than merely view meteorological charts. The application connects observation, calculation, comparison and explanation in one workflow.
        </p>

        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2">
          <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide">3.1 Core Design Principles</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 pt-1">
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>1. Provenance:</strong> Make the provenance and units of every numerical observation visible.
            </li>
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>2. Missing values:</strong> Preserve missing values rather than inventing replacement measurements.
            </li>
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>3. Explicit math:</strong> Compute agricultural indicators with explicit formulas, not with an LLM guessing quantities.
            </li>
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>4. Scenarios:</strong> Offer several feasible crop strategies and state scenario assumptions clearly.
            </li>
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>5. Accessible languages:</strong> Explain results in accessible language, including Moroccan Darija, English, and French.
            </li>
            <li className="p-2.5 rounded bg-white border border-zinc-200">
              <strong>6. Farmer agency:</strong> Keep the farmer responsible for the final choice; do not promise certain yields or savings.
            </li>
          </ul>
        </div>
      </section>

      {/* Chapter 4: The Farmer's Second Eyes Concept */}
      <section id="chapter-4" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 4</span>
            <span>The Farmer’s Second Eyes Concept</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed italic">
          The farmer’s first eyes are local observation, accumulated experience and practical judgment. The second eyes are an additional analytical viewpoint: NASA-derived regional information, quantified agronomic comparisons and AI-assisted interpretation.
        </p>

        <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-lg text-sm font-semibold text-emerald-950">
          &ldquo;Farmers see their fields. Farmer Eye helps them see the bigger picture.&rdquo;
        </blockquote>

        <p className="text-xs text-zinc-600 leading-relaxed">
          The metaphor is not a claim of optical surveillance, centimeter-scale mapping or direct measurement inside every root. SMAP L4 root-zone estimates are produced by land modeling and observation assimilation over broad grid cells. The application reveals regional tendencies and alternative scenarios, without pretending to &ldquo;see&rdquo; each individual plant.
        </p>
      </section>

      {/* Chapter 5: Global Mission and Project Objectives */}
      <section id="chapter-5" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 5</span>
            <span>Global Mission and Project Objectives</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The long-term mission is to make reliable and understandable agricultural decision support usable in different climate-sensitive regions. The Morocco/Saïss example is a demonstrator, not a geographic limitation of the concept.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-zinc-200 bg-white">
            <div className="text-xs font-bold text-zinc-900 uppercase mb-1">5.1 Scientific Objectives</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Link weather and soil-moisture context; calculate reproducible indicators; explore drought and temperature sensitivity; show how crop rotation changes modeled water demand; document uncertainty.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-200 bg-white">
            <div className="text-xs font-bold text-zinc-900 uppercase mb-1">5.2 Practical Objectives</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Offer an understandable interface, downloadable data, clear explanations, and a comparison workflow that respects crop suitability, soil class, irrigation access and farmer constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 6: Implementation Inventory and Status */}
      <section id="chapter-6" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 6</span>
            <span>Implementation Inventory and Status</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART I</span>
        </div>

        {/* Table 6.1: Module Inventory */}
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-3">Module</th>
                <th className="text-left p-3">Reported Status</th>
                <th className="text-left p-3">Evidence and Important Distinction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="p-3 font-semibold">NASA POWER daily data</td>
                <td className="p-3 text-emerald-700 font-mono">Implemented</td>
                <td className="p-3 text-zinc-600">REST collection, QC, caching, derived summaries and exports [9]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">NASA SMAP L4 V008</td>
                <td className="p-3 text-emerald-700 font-mono">Implemented</td>
                <td className="p-3 text-zinc-600">GEE integration, 46-band catalogue, agricultural mode and example extraction [10]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Crop Battle Lab</td>
                <td className="p-3 text-sky-700 font-mono">Executed</td>
                <td className="p-3 text-zinc-600">Multi-plan comparison and internally reported numerical outputs [11]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Climate Attack Lab</td>
                <td className="p-3 text-sky-700 font-mono">Executed</td>
                <td className="p-3 text-zinc-600">Controlled drought, heat and delayed-rain assumptions [11]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Farm Time Machine</td>
                <td className="p-3 text-emerald-700 font-mono">Implemented</td>
                <td className="p-3 text-zinc-600">Retrospective counterfactual comparison using historical climate context [11]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AI Scientific Tribunal</td>
                <td className="p-3 text-amber-700 font-mono">Concept / Local</td>
                <td className="p-3 text-zinc-600">Specialized evidence-checking roles; not independent peer review [11]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AI Assistance</td>
                <td className="p-3 text-emerald-700 font-mono">Integrated</td>
                <td className="p-3 text-zinc-600">Later team integration uses OpenAI API; early validation records mention NVIDIA</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Data visualization / export</td>
                <td className="p-3 text-emerald-700 font-mono">Implemented</td>
                <td className="p-3 text-zinc-600">Interactive views, CSV, JSON and spreadsheet workflows described by team</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Physical soil laboratory</td>
                <td className="p-3 text-zinc-500 font-mono">Planned</td>
                <td className="p-3 text-zinc-600">Protocol design is distinct from completed field assays</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Global measured impact</td>
                <td className="p-3 text-rose-700 font-mono">Not demonstrated</td>
                <td className="p-3 text-zinc-600">2030 figures are conditional deployment scenarios</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Do Not Inflate the Scope">
          Catalogue listings for GPM or HLS are not proof that the application has retrieved, calibrated and analyzed their pixel values. Landsat, Sentinel-2, ECOSTRESS, precise in-situ sensors and ground-truth campaigns are not claimed here as validated active data pipelines.
        </Callout>

        {/* Table 6.2: Evidence Matrix */}
        <div className="pt-2">
          <div className="text-xs font-bold text-zinc-900 mb-2 font-mono">
            Table 6.2 — Evidence Matrix and Proof Expectations
          </div>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-sans">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
                <tr>
                  <th className="text-left p-3">Claim</th>
                  <th className="text-left p-3">Sufficient Current Evidence</th>
                  <th className="text-left p-3">Evidence Still Missing for Stronger Claims</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-800">
                <tr>
                  <td className="p-3 font-semibold">NASA climate extraction</td>
                  <td className="p-3 text-zinc-600">Original POWER response, API metadata and analysis tests</td>
                  <td className="p-3 text-zinc-500">Independent farm weather-station comparison</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">SMAP extraction</td>
                  <td className="p-3 text-zinc-600">Earth Engine product ID, region, interval and exported series</td>
                  <td className="p-3 text-zinc-500">Pixel-footprint audit and matched in-situ probes</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Crop plan comparison</td>
                  <td className="p-3 text-zinc-600">Inputs, output JSON, deterministic calculation and unit tests</td>
                  <td className="p-3 text-zinc-500">Multiseason harvest/cost outcome evidence</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Climate Attack output</td>
                  <td className="p-3 text-zinc-600">Shock definitions and rerun fixtures</td>
                  <td className="p-3 text-zinc-500">Scenario calibration against historical adverse events</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">AI Tribunal workflow</td>
                  <td className="p-3 text-zinc-600">Captured agent messages and grounding checks</td>
                  <td className="p-3 text-zinc-500">External agronomic peer review and performance study</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Global 2030 effects</td>
                  <td className="p-3 text-zinc-600">Transparent conditional arithmetic</td>
                  <td className="p-3 text-zinc-500">Observed adoption and before/after field outcomes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
