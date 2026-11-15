"use client";

import React from "react";
import { VolumetricDemandChart } from "@/components/docs/charts/DocsCharts";
import { Callout } from "@/components/docs/Callout";
import { CheckCircle2, FlaskConical, BarChart3, AlertOctagon } from "lucide-react";

export function Part6ExperimentsResults() {
  return (
    <div className="space-y-12">
      {/* Chapter 31: Experimental Methodology */}
      <section id="chapter-31" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 31</span>
            <span>Experimental Methodology</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VI</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The evidence base includes a repository-level test report, a project-specific Earth Trials simulation audit, a SMAP integration report and a later Impact 2030 calculation note. Their provenance differs: code tests, satellite/model extracts, scenario outputs and projections should be separated rather than pooled.
        </p>

        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs">
          <span className="font-bold text-zinc-900 font-mono block mb-1">
            31.1 Minimal Reproducible Experiment Record:
          </span>
          <p className="text-zinc-600 leading-relaxed">
            A reader should be able to recover: software revision; simulation definition; geographic coordinates; date range; NASA product and access time; crop calendars and coefficients; soil class; irrigation regime; shock scenario; output JSON/CSV; and validation checks.
          </p>
        </div>
      </section>

      {/* Chapter 32: Meknes / Saiss Reference Case */}
      <section id="chapter-32" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 32</span>
            <span>Meknes / Saïss Reference Case</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VI</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The geographical reference reported in the simulation audit is approximately <strong>33.8938°N, −5.5516°W</strong>, near Meknes on the Saïss plateau, Morocco. This region serves as a reference, not proof of identical results across Fès, the whole of Morocco or the world.
        </p>

        {/* Table 32.1: Earlier Audit Extract */}
        <div className="text-xs font-bold text-zinc-900 mb-1 font-mono">
          Table 32.1 — Values Reproduced from Team-Generated 2025 Reference Run [11]
        </div>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Reported Variable</th>
                <th className="text-right p-2.5">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="p-2.5 font-semibold">Annual precipitation</td>
                <td className="p-2.5 text-right font-bold text-teal-700">701.24 mm</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Mean air temperature</td>
                <td className="p-2.5 text-right font-bold">18.05 °C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Hot days (Tmax ≥ 30°C)</td>
                <td className="p-2.5 text-right font-bold text-amber-600">156 days</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Dry days (P &lt; 1 mm)</td>
                <td className="p-2.5 text-right font-bold text-rose-600">282 days</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Average root-zone moisture</td>
                <td className="p-2.5 text-right">0.266 m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Average surface moisture</td>
                <td className="p-2.5 text-right">0.207 m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">October root-zone estimate</td>
                <td className="p-2.5 text-right">0.219 m³/m³</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 33: Crop Rotation Results and Calculation Walkthrough */}
      <section id="chapter-33" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 33</span>
            <span>Crop Rotation Results and Calculation Walkthrough</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VI</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The revised internal reference case reported for the 2024/2025 agricultural campaign compares modeled annualized crop evapotranspiration requirements [12, 13]:
        </p>

        {/* Modeled Plan Table */}
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-3">Modeled Plan</th>
                <th className="text-right p-3">ETc (mm/year)</th>
                <th className="text-right p-3">Difference vs Wheat (mm/year)</th>
                <th className="text-right p-3">Relative Diff (%)</th>
                <th className="text-right p-3">Volumetric Demand Eq.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="p-3 font-bold text-slate-800">Wheat Monoculture</td>
                <td className="p-3 text-right">455.8 mm/yr</td>
                <td className="p-3 text-right text-zinc-400">0.0 mm/yr</td>
                <td className="p-3 text-right text-zinc-400">0.00%</td>
                <td className="p-3 text-right text-zinc-400">—</td>
              </tr>
              <tr className="bg-teal-50/40">
                <td className="p-3 font-bold text-teal-950">Wheat → Lentils → Barley</td>
                <td className="p-3 text-right font-bold text-teal-800">362.4 mm/yr</td>
                <td className="p-3 text-right font-bold text-teal-800">−93.4 mm/yr</td>
                <td className="p-3 text-right font-bold text-teal-800">−20.49%</td>
                <td className="p-3 text-right font-bold text-teal-800">934 m³/ha/yr</td>
              </tr>
              <tr className="bg-emerald-50/40">
                <td className="p-3 font-bold text-emerald-950">Wheat → Forage → Fallow</td>
                <td className="p-3 text-right font-bold text-emerald-800">241.0 mm/yr</td>
                <td className="p-3 text-right font-bold text-emerald-800">−214.8 mm/yr</td>
                <td className="p-3 text-right font-bold text-emerald-800">−47.13%</td>
                <td className="p-3 text-right font-bold text-emerald-800">2,148 m³/ha/yr</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mathematical Step-by-Step Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50 space-y-1">
            <span className="text-zinc-500 text-[10px]">33.1 Difference &amp; Percent Formula:</span>
            <div>ΔETc,B = 455.8 − 362.4 = <strong>93.4 mm/year</strong></div>
            <div>rB = 100 × (93.4 / 455.8) = <strong>20.49%</strong></div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50 space-y-1">
            <span className="text-zinc-500 text-[10px]">33.2 Depth to Volume Conversion:</span>
            <div>1 mm on 1 ha = 10,000 m² × 0.001 m = <strong>10 m³</strong></div>
            <div>VB = 93.4 × 10 = <strong>934 m³/ha/year</strong></div>
          </div>
        </div>

        {/* Figure 33.1 Chart */}
        <VolumetricDemandChart />

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-white text-xs">
          <strong>33.4 Five-Hectare Farm Scaling:</strong>
          <span className="text-zinc-700 ml-1">
            For 5 ha, equivalent demand reductions are <strong>4,670 m³/year</strong> (Diversified) and <strong>10,740 m³/year</strong> (Conservation) if the same modeled difference applied uniformly.
          </span>
        </div>
      </section>

      {/* Chapter 34 & 35: Stress Tests & Reproducibility */}
      <section id="chapter-34-35" className="space-y-6 scroll-mt-20">
        {/* Chapter 34 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 34</span>
              <span>Climate Stress Tests and Comparative Analysis</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART VI</span>
          </div>

          <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs">
            <strong>34.2 Testing Results Reported by the Team:</strong>
            <p className="text-zinc-600 mt-1">
              The EARTH TRIALS validation memo records a local pytest report of <strong>52 tests (49 passed, 3 skipped, 0 failed)</strong> and documents local request/response checks for simulation endpoints.
            </p>
          </div>
        </div>

        {/* Chapter 35 */}
        <div id="chapter-35" className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 35</span>
              <span>Reproducibility and Scientific Validation</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART VI</span>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white text-xs space-y-2">
            <div className="font-bold text-zinc-900 uppercase font-mono">
              35.1 Recommended 7-Point Verification Checklist:
            </div>
            <ol className="list-decimal pl-4 space-y-1.5 text-zinc-700">
              <li>Check source collection identifiers and dates against NASA metadata.</li>
              <li>Recalculate sums and means from unmodified raw files; confirm missing-data treatment.</li>
              <li>Verify conversion factors and dimensional consistency for mm, m³/ha and percent.</li>
              <li>Repeat each stress scenario with frozen inputs and compare outputs deterministically.</li>
              <li>Confirm that every user-visible simulation score is identified as an index.</li>
              <li>Compare regional moisture values with matched field observations before claiming calibration.</li>
              <li>Independently audit AI responses for fabricated measurements or unsupported guarantees.</li>
            </ol>
          </div>

          <Callout type="scientific" title="Meaning of Validation">
            &ldquo;Tests passed&rdquo; and &ldquo;mathematically verified by a project audit&rdquo; demonstrate valuable internal engineering quality checks; they do not replace independent agronomic trials or constitute validation of an operational worldwide impact.
          </Callout>
        </div>
      </section>
    </div>
  );
}
