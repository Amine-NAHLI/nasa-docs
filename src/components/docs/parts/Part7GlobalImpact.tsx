"use client";

import React from "react";
import { ImpactScalingVisualizations } from "@/components/docs/charts/DocsCharts";
import { Callout } from "@/components/docs/Callout";
import { Globe, TrendingUp, DollarSign, Users } from "lucide-react";

export function Part7GlobalImpact() {
  return (
    <div className="space-y-12">
      {/* Chapter 36: From Morocco to Global Agriculture */}
      <section id="chapter-36" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 36</span>
            <span>From Morocco to Global Agriculture</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VII</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Farmer Eye’s reference examples arise from Morocco, but the software concept is intended to be adaptable across regions. That requires new local climate histories, calendars, soil classes, crop suitability constraints, economic assumptions and field verification. A model effect observed in a single reference simulation is not automatically transferable to any other farm.
        </p>

        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs">
          <span className="font-bold text-zinc-900 font-mono block mb-1">
            36.1 Conditions for Responsible Expansion:
          </span>
          <p className="text-zinc-600 leading-relaxed">
            Potential regional rollout should account for data availability, language, device access, farmer participation, water governance, seed and market access, and uncertainty in the spatial products. The relevant promise is better decision support, not instant universal agroclimatic coverage.
          </p>
        </div>
      </section>

      {/* Chapter 37: Water, Economic and Social Impact Analysis */}
      <section id="chapter-37" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 37</span>
            <span>Water, Economic and Social Impact Analysis</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VII</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          A difference in potential ETc can be converted into a volumetric equivalent by area, but net basin water savings depends on actual withdrawal, consumptive use, return flows and changes in management.
        </p>

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-white text-xs font-mono">
          <div className="text-zinc-500 text-[11px] mb-1">37.1 Net-Farm Economics Formulation:</div>
          <div className="font-bold text-zinc-900">
            Πi = ∑ (Yj · pj − Cj), &nbsp; ΔΠ = Π_alternative − Π_baseline
          </div>
          <p className="text-zinc-600 font-sans text-[11px] mt-1.5">
            where Y represents marketable yield, p realized price, and C relevant costs. Without independently established prices, yields and expenses, the water-demand difference cannot justify a monetary profit claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">37.2 Social &amp; Environmental Indicators:</span>
            <p className="text-zinc-600">User comprehension, time spent comparing plans, sustained adoption among smallholders, metered irrigation withdrawals, and changes in soil properties.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50">
            <span className="font-bold text-zinc-900 block mb-1">37.3 Impact Measurement vs. Scaling:</span>
            <p className="text-zinc-600">A scale model is an arithmetic scenario, not a forecast. Impact claims require four layers: reach, adoption, agronomic effect, and net withdrawals/economics.</p>
          </div>
        </div>
      </section>

      {/* Chapter 38: Impact 2030: Conditional Scaling Model */}
      <section id="chapter-38" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 38</span>
            <span>Impact 2030: Conditional Scaling Model</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART VII</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Let <strong>F</strong> be the hypothetical number of reached farmers, <strong>h</strong> hectares per farmer, <strong>a</strong> adopted share, <strong>d</strong> modeled ET-demand difference in mm/ha/year, <strong>q</strong> fraction under relevant irrigation, and <strong>i</strong> a hypothetical irrigation reduction in mm/ha/year:
        </p>

        {/* Modeling Identities */}
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

        {/* Visual Charts & Scenario Table */}
        <ImpactScalingVisualizations />

        <Callout type="tip" title="Core 2030 Headline">
          The correct 2030 headline is an ambition to make decision-support more accessible. The amounts above are transparent sensitivity calculations under declared scenarios. Independent, local farm and water accounting is necessary before suggesting measurable world-scale conservation.
        </Callout>
      </section>
    </div>
  );
}
