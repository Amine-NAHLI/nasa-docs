"use client";

import React from "react";
import {
  CropBattleComparisonCharts,
  ClimateAttackCharts,
} from "@/components/docs/charts/DocsCharts";
import { Callout } from "@/components/docs/Callout";
import { Swords, CloudLightning, History, FlaskConical } from "lucide-react";

export function Part4EarthTrials() {
  return (
    <div className="space-y-12">
      {/* Chapter 21: Crop Battle Lab */}
      <section id="chapter-21" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 21</span>
            <span>Crop Battle Lab</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART IV</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The <strong>Crop Battle Lab</strong> compares three contrasting strategies: repeated cereal monoculture, a wheat–legume–barley rotation, and a conservation-oriented alternative using cover or fallow phases. Soil class, water-access regime and farmer budget influence the simulation [11].
        </p>

        {/* Table 21.1: Representative Plan Table */}
        <div className="text-xs font-bold text-zinc-900 mb-1 font-mono">
          21.1 Representative Plan Table (Three Model Years)
        </div>
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
              <tr>
                <td className="p-3 font-bold text-slate-700">Plan A</td>
                <td className="p-3 font-semibold">Cereal Reference</td>
                <td className="p-3 text-zinc-600">Wheat → Wheat → Wheat</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-teal-700">Plan B</td>
                <td className="p-3 font-semibold">Diversified Rotation</td>
                <td className="p-3 text-zinc-600">Wheat → Lentils/Legume → Barley</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-700">Plan C</td>
                <td className="p-3 font-semibold">Conservation-Oriented</td>
                <td className="p-3 text-zinc-600">Wheat → Forage/Cover → Conservation Fallow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-mono text-center">
          Eq. (21.1) Score Normalization: Q_i = max( 0, min( 100, q_i ) )
        </div>

        {/* Figures 21.1 & 21.2 Charts */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-zinc-900 uppercase font-mono mb-2">
            21.3 Illustrated Comparison of the Revised Meknes Run
          </h3>
          <CropBattleComparisonCharts />
        </div>

        <Callout type="note" title="Scientific Reading">
          Lower modeled crop water demand alone is not sufficient to declare the conservation-oriented plan the superior full-farm outcome: fallow, yield, cost, fertility and market access must also be examined.
        </Callout>
      </section>

      {/* Chapter 22: Climate Attack Lab */}
      <section id="chapter-22" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 22</span>
            <span>Climate Attack Lab</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART IV</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Climate Attack applies counterfactual environmental shocks to candidate plans. These tests are not weather forecasts. The audit contains configurable shock multipliers for drought, heatwave, and delayed autumn rain [11].
        </p>

        {/* Figures 22.1 & 22.2 Charts & Multiplier Table */}
        <ClimateAttackCharts />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 font-mono block mb-1">22.1 How a Shock is Evaluated:</span>
            <p className="text-zinc-600 leading-relaxed">
              For daily precipitation Pt, perturbed value is <strong>Pt&apos; = mP · Pt</strong>. Similarly, demand term is adjusted as <strong>ET₀&apos; = mET · ET₀</strong>. A +4°C heatwave narrative and ET₀ multiplier must not be conflated unless derived explicitly.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 font-mono block mb-1">22.2 Interpretation &amp; Limits:</span>
            <p className="text-zinc-600 leading-relaxed">
              The experiment reveals how rankings depend on assumptions. It does not establish that a certain plan will always withstand drought or that an apparent 35-point risk change is a real-world 35 percentage-point increase in failure probability.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 23: Farm Time Machine */}
      <section id="chapter-23" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 23</span>
            <span>Farm Time Machine</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART IV</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Farm Time Machine uses historical climate information as the setting for a retrospective comparison: <em>What would the selected plans have looked like under this known historical weather period?</em> The observed history comes from NASA data; the alternative agricultural outcomes are counterfactual model runs.
        </p>

        {/* Figure 23.1: Diagram */}
        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2 text-xs">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
            Figure 23.1 — Counterfactual Time-Machine Workflow
          </div>
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

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-white text-xs">
          <strong>Calculation Note:</strong> The audit includes an older illustrative calculation <strong>440 − 345 = 95 mm</strong>, or <strong>950 m³/ha</strong> equivalent of reduced potential water demand. This is a separate earlier reference run, not the revised <strong>455.8 − 362.4 = 93.4 mm</strong> Meknes scenario used elsewhere [11, 12].
        </div>
      </section>

      {/* Chapter 24: Physical Soil Laboratory Plan */}
      <section id="chapter-24" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 24</span>
            <span>Physical Soil Laboratory Plan</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART IV</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The physical laboratory plan is a <strong>field-validation protocol</strong>, not a claim that soil samples were already analyzed. A defensible plan includes: GPS-labeled sampling sites; crop and tillage metadata; depth-stratified samples; texture and bulk density; gravimetric moisture or calibrated volumetric probes; electrical conductivity and pH; organic matter; and laboratory quality-control records.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">24.1 Relation to Satellite Context:</span>
            <p className="text-zinc-600">A local field reading may differ substantially from SMAP L4 regional estimates because of spatial averaging and soil class. The scientific goal is to measure those differences, not force agreement.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">24.2 Minimum Field Log Requirements:</span>
            <p className="text-zinc-600">Record date/time, geographic coordinates, depth, laboratory method, sensor calibration, crop stage, irrigation/rain history and observer. Compare only quantities with consistent depth/time support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
