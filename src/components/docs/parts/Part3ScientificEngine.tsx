"use client";

import React from "react";
import { SoilDepthDifferenceChart } from "@/components/docs/charts/DocsCharts";
import { Callout } from "@/components/docs/Callout";
import { Calculator, Activity, Droplets, AlertCircle } from "lucide-react";

export function Part3ScientificEngine() {
  return (
    <div className="space-y-12">
      {/* Chapter 14: Scientific Modeling Methodology */}
      <section id="chapter-14" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 14</span>
            <span>Scientific Modeling Methodology</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART III</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The scientific engine is intended to generate repeatable quantitative indicators under explicit parameters. <strong>FAO Irrigation and Drainage Paper 56</strong> is the methodological reference for reference evapotranspiration and the crop-coefficient framework [3]. Project-specific simplifications, such as default soil storage coefficients and resilience score weights, require separate labeling because the existence of a FAO reference does not turn each project heuristic into a FAO standard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 font-mono block mb-1">1. Observation Layer</span>
            <p className="text-zinc-600">Regional NASA meteorology (POWER) and assimilated SMAP soil data.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 font-mono block mb-1">2. Biophysical Layer</span>
            <p className="text-zinc-600">Reference and crop evapotranspiration, water-balance terms, seasonal scenario calculations.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 font-mono block mb-1">3. Decision Layer</span>
            <p className="text-zinc-600">Ranked alternative strategies, estimated vulnerability indicators and AI explanation layer.</p>
          </div>
        </div>

        <Callout type="note" title="Verification Requirement">
          No formula in this dossier should be read as evidence that every mathematical term was coded exactly as printed. The full FAO equations are documented as scientific reference; verification requires comparison with source code, input files and frozen output fixtures.
        </Callout>
      </section>

      {/* Chapter 15: Reference Evapotranspiration (ET0) */}
      <section id="chapter-15" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 15</span>
            <span>Reference Evapotranspiration (ET0)</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART III</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          FAO-56 specifies the standardized Penman–Monteith reference equation for daily calculations:
        </p>

        {/* Equation 15.1: Penman-Monteith */}
        <div className="p-4 rounded-xl border border-zinc-300 bg-zinc-50 font-mono text-center space-y-2">
          <div className="text-sm sm:text-base font-bold text-zinc-900 overflow-x-auto py-1">
            ET₀ = [ 0.408·Δ·(Rn − G) + γ·(900 / (T + 273))·u₂·(es − ea) ] / [ Δ + γ·(1 + 0.34·u₂) ]
          </div>
          <div className="text-[11px] text-zinc-500 font-sans">
            Equation (15.1) — Standardized FAO-56 Penman-Monteith equation (mm/day)
          </div>
        </div>

        <div className="text-xs text-zinc-600 leading-relaxed">
          where <strong>ET₀</strong> is in mm/day; <strong>Rn</strong> is net radiation and <strong>G</strong> soil heat flux in MJ/m²/day; <strong>T</strong> is mean air temperature in °C; <strong>u₂</strong> is wind speed at 2 m in m/s; <strong>es − ea</strong> is vapor pressure deficit in kPa; <strong>Δ</strong> is the saturation vapor pressure-curve slope in kPa/°C; and <strong>γ</strong> is the psychrometric constant in kPa/°C [3].
        </div>

        {/* 15.1 Supporting relationships */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
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

        {/* 15.3 Worked Example */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-xs space-y-2">
          <div className="font-bold text-emerald-950 flex items-center gap-1.5">
            <Calculator className="h-4 w-4 text-emerald-700" />
            <span>15.3 Worked FAO-56 Equation Demonstration (Hypothetical Tutorial Input)</span>
          </div>
          <p className="text-zinc-700 leading-relaxed">
            Hypothetical inputs: Rn = 12 MJ m⁻² day⁻¹, G = 0, T = 20°C, u₂ = 2 m/s, es − ea = 1.4 kPa, Δ = 0.1447 kPa/°C, and γ = 0.067 kPa/°C.
          </p>
          <div className="p-2.5 rounded bg-white border border-emerald-300 font-mono text-center font-bold text-emerald-900 text-xs">
            ET₀ = [ 0.408(0.1447)(12 − 0) + 0.067(900/293)(2)(1.4) ] / [ 0.1447 + 0.067(1 + 0.34 × 2) ] ≈ 4.99 mm/day
          </div>
          <p className="text-[11px] text-zinc-500 italic">
            The example illustrates dimensional calculation only; the report does not claim that the original application calculated 4.99 mm/day on any recorded date.
          </p>
        </div>
      </section>

      {/* Chapter 16: Crop Evapotranspiration (ETc) */}
      <section id="chapter-16" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 16</span>
            <span>Crop Evapotranspiration (ETc)</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART III</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The FAO single-crop-coefficient framework defines crop evapotranspiration as:
        </p>

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

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs">
          <strong>16.1 Worked Crop-Coefficient Demonstration:</strong>
          <span className="text-zinc-700 ml-1">
            If ET₀ = 4.00 mm/day and Kc = 1.05, then ETc = 1.05 × 4.00 = <strong>4.20 mm/day</strong> (multiplying by 30 gives 126 mm for 30 identical days). A crop coefficient is not a yield guarantee or a direct SMAP observation.
          </span>
        </div>
      </section>

      {/* Chapter 17: Soil Moisture and Root-Zone Analysis */}
      <section id="chapter-17" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 17</span>
            <span>Soil Moisture and Root-Zone Analysis</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART III</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          SMAP L4 provides surface (0–5 cm) and root-zone (0–100 cm) volumetric water estimates. Time-series mean for valid image dates is computed as:
        </p>

        <div className="p-3 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-center">
          θ̄z = (1 / N_valid) · ∑ θz(t), z ∈ &#123;surface, root&#125; &nbsp;|&nbsp; Δθz = θ̄z,period − θ̄z,reference
        </div>

        <p className="text-xs text-zinc-600 leading-relaxed">
          <strong>17.1 Spatial Representativeness:</strong> The model describes regional soil moisture, not the actual soil-water content of each farm. Direct field validation requires calibrated probes at known depths.
        </p>

        {/* Figure 17.1 */}
        <SoilDepthDifferenceChart />
      </section>

      {/* Chapter 18: Crop Water Requirements and Root-Zone Balance */}
      <section id="chapter-18" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 18</span>
            <span>Crop Water Requirements and Root-Zone Balance</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART III</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          A simplified water-deficit indicator between modeled potential crop demand and available water is written:
        </p>

        <div className="p-3 rounded-lg border border-zinc-200 bg-white font-mono text-xs text-center font-bold text-zinc-900">
          Eq. (18.1): Di = max( 0, ETc,i − Wavailable ) [mm]
        </div>

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs space-y-1">
          <div className="font-bold text-zinc-900 font-mono">Eq. (18.2) FAO-style Root-Zone Depletion Balance:</div>
          <div className="font-mono text-zinc-800 text-[11px]">
            Dr,t = Dr,t−1 − (Pt − ROt) − It − CRt + ETa,t + DPt
          </div>
          <p className="text-zinc-600 pt-1 text-[11px]">
            where P is precipitation, RO runoff, I irrigation, CR capillary rise, DP deep percolation, and ETa = Ks · ETc (0 ≤ Ks ≤ 1).
          </p>
        </div>
      </section>

      {/* Chapter 19 & 20: Planning Mathematics & Uncertainty */}
      <section id="chapter-19-20" className="space-y-6 scroll-mt-20">
        {/* Chapter 19 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 19</span>
              <span>Crop Planning and Rotation Mathematics</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART III</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-center">
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
              <span className="text-zinc-500 block text-[10px]">Eq. (19.1) Plan Demand:</span>
              <span className="font-bold text-zinc-900">Wi = (1/Y) ∑ ETc</span>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
              <span className="text-zinc-500 block text-[10px]">Eq. (19.2) Demand Diff:</span>
              <span className="font-bold text-zinc-900">ΔWi,j = Wi − Wj</span>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
              <span className="text-zinc-500 block text-[10px]">Eq. (19.3) Percent Diff:</span>
              <span className="font-bold text-zinc-900">r = 100 × (ΔW / Wi) %</span>
            </div>
          </div>

          {/* Table 19.1: Dimensional Audit */}
          <div className="pt-2">
            <div className="text-xs font-bold text-zinc-900 mb-2 font-mono">
              Table 19.1 — Unit and Evidentiary Boundary Check for Conflated Project Outputs
            </div>
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
                  <tr>
                    <td className="p-2.5 font-mono font-semibold">ET₀, ETc</td>
                    <td className="p-2.5 font-mono">mm per matching period</td>
                    <td className="p-2.5">Physical-model depth or demand</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-semibold">SMAP θ</td>
                    <td className="p-2.5 font-mono">m³/m³</td>
                    <td className="p-2.5">Assimilated regional volumetric fraction</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-semibold">10 · A · ΔETc</td>
                    <td className="p-2.5 font-mono">m³</td>
                    <td className="p-2.5">Area-scaled model-demand equivalent</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-semibold">Stress, Soil, Resilience</td>
                    <td className="p-2.5 font-mono">0–100 index</td>
                    <td className="p-2.5">Project-specific synthetic ranking scales</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-semibold">F, h, a, s</td>
                    <td className="p-2.5 font-mono">count, ha, fraction, fraction</td>
                    <td className="p-2.5">Conditional adoption and transferability assumptions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Chapter 20: Sources of Uncertainty */}
        <div id="chapter-20" className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 20</span>
              <span>Scientific Assumptions, Error and Uncertainty</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART III</span>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs space-y-2">
            <div className="font-bold text-zinc-900 uppercase font-mono">20.1 Sources of Uncertainty:</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-700">
              <li><strong>Input:</strong> Coarse NASA grids, SMAP model-assimilation error, missing periods, local heterogeneity.</li>
              <li><strong>Parameter:</strong> Crop coefficient, growing season, soil profile, infiltration and irrigation regime.</li>
              <li><strong>Scenario:</strong> Drought and heat multipliers chosen for experimentation.</li>
              <li><strong>Structural:</strong> Simplified ET calculations, omitted nutrient/pest processes, hypothetical rotations.</li>
              <li><strong>Social/economic:</strong> Adoption, crop prices, labor, harvest and irrigated area not established by NASA inputs.</li>
            </ul>
            <div className="pt-2 border-t border-zinc-200 font-mono text-center text-zinc-800 text-[11px]">
              Eq. (20.1) Propagation: σ_f² ≈ ∑ (∂f / ∂x_i)² · σ_i²
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
