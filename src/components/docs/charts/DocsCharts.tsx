"use client";

import React, { useState } from "react";

// ─── Figure 2.1: Evidence Maturity Diagram ──────────────────────────────────
export function EvidenceMaturityDiagram() {
  return (
    <div className="my-6 p-5 rounded-xl border border-zinc-200 bg-zinc-50/70">
      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
        Figure 2.1 — Evidence Maturity Pipeline
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 rounded-lg border border-sky-200 bg-sky-50/80 text-center">
          <div className="text-xs font-bold text-sky-950 uppercase tracking-wide">Observe</div>
          <div className="text-sm font-semibold text-sky-900 mt-1">Regional NASA Information</div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-sky-100 text-sky-800 border border-sky-300">
            Project Evidence
          </div>
        </div>

        <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/80 text-center">
          <div className="text-xs font-bold text-emerald-950 uppercase tracking-wide">Compare</div>
          <div className="text-sm font-semibold text-emerald-900 mt-1">Model-Defined Options</div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-300">
            Internal Simulation
          </div>
        </div>

        <div className="p-4 rounded-lg border border-amber-200 bg-amber-50/80 text-center">
          <div className="text-xs font-bold text-amber-950 uppercase tracking-wide">Validate</div>
          <div className="text-sm font-semibold text-amber-900 mt-1">Independent Field Effects</div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-100 text-amber-800 border border-amber-300">
            Future Study
          </div>
        </div>
      </div>
      <p className="text-[11px] text-zinc-500 mt-3 italic">
        Observed data access and scenario comparisons are distinct from measured field effects.
      </p>
    </div>
  );
}

// ─── Figure 10.1: 12-Month SMAP Moisture Chart (ee-chart.csv) ───────────────
export function SmapMonthlyChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const surface = [21.263, 24.177, 34.840, 27.351, 19.238, 17.086, 15.020, 14.484, 14.298, 13.337, 18.926, 32.488];
  const rootzone = [26.204, 28.344, 36.398, 33.213, 28.209, 25.639, 23.978, 22.826, 22.302, 22.116, 23.915, 33.043];

  const minVal = 10;
  const maxVal = 40;
  const width = 640;
  const height = 220;
  const padding = { top: 20, right: 30, bottom: 35, left: 40 };

  const getX = (idx: number) => padding.left + (idx / (months.length - 1)) * (width - padding.left - padding.right);
  const getY = (val: number) => height - padding.bottom - ((val - minVal) / (maxVal - minVal)) * (height - padding.top - padding.bottom);

  const surfacePoints = surface.map((v, i) => `${getX(i)},${getY(v)}`).join(" ");
  const rootzonePoints = rootzone.map((v, i) => `${getX(i)},${getY(v)}`).join(" ");

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold text-zinc-900">
            Figure 10.1 — 2025 Monthly SMAP Soil Moisture Series
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">
            Recorded from ee-chart.csv export (Meknes region, 2025)
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
            <span className="text-zinc-600">Surface (0–5 cm)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-700" />
            <span className="text-zinc-600">Root zone (0–100 cm)</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px] h-auto">
          {/* Y Axis Grid lines */}
          {[10, 20, 30, 40].map((tick) => {
            const y = getY(tick);
            return (
              <g key={tick}>
                <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e4e4e7" strokeDasharray="3 3" />
                <text x={padding.left - 8} y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-zinc-400">
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Rootzone Line */}
          <polyline fill="none" stroke="#334155" strokeWidth="2" points={rootzonePoints} />
          {rootzone.map((v, i) => (
            <rect
              key={`rz-${i}`}
              x={getX(i) - 3}
              y={getY(v) - 3}
              width="6"
              height="6"
              fill="#334155"
              className="cursor-pointer hover:scale-125 transition-transform"
              onMouseEnter={() => setHoveredIdx(i)}
            />
          ))}

          {/* Surface Line */}
          <polyline fill="none" stroke="#0d9488" strokeWidth="2" points={surfacePoints} />
          {surface.map((v, i) => (
            <circle
              key={`sf-${i}`}
              cx={getX(i)}
              cy={getY(v)}
              r="3.5"
              fill="#0d9488"
              className="cursor-pointer hover:scale-125 transition-transform"
              onMouseEnter={() => setHoveredIdx(i)}
            />
          ))}

          {/* X Axis Labels */}
          {months.map((m, i) => (
            <text key={m} x={getX(i)} y={height - 10} textAnchor="middle" className="text-[11px] font-mono fill-zinc-600 font-medium">
              {m}
            </text>
          ))}
        </svg>
      </div>

      {hoveredIdx !== null && (
        <div className="mt-2 p-2 rounded bg-zinc-50 border border-zinc-200 text-xs font-mono flex items-center justify-between">
          <span className="font-semibold text-zinc-800">Mois: {months[hoveredIdx]} 2025</span>
          <span className="text-teal-700">Surface (0-5 cm): {surface[hoveredIdx]}</span>
          <span className="text-slate-700">Root Zone (0-100 cm): {rootzone[hoveredIdx]}</span>
          <span className="text-zinc-500">Diff: +{(rootzone[hoveredIdx] - surface[hoveredIdx]).toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

// ─── Figure 17.1: Root Zone minus Surface (2025 Difference) ─────────────────
export function SoilDepthDifferenceChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const diffs = [4.941, 4.167, 1.558, 5.862, 8.971, 8.553, 8.958, 8.342, 8.004, 8.779, 4.989, 0.555];

  const width = 640;
  const height = 180;
  const padding = { top: 20, right: 30, bottom: 35, left: 40 };

  const getX = (idx: number) => padding.left + (idx / (months.length - 1)) * (width - padding.left - padding.right);
  const getY = (val: number) => height - padding.bottom - (val / 10) * (height - padding.top - padding.bottom);

  const points = diffs.map((v, i) => `${getX(i)},${getY(v)}`).join(" ");

  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white shadow-2xs">
      <div className="text-xs font-bold text-zinc-900 mb-1">
        Figure 17.1 — Derived Difference (Root Zone Minus Surface)
      </div>
      <div className="text-[11px] text-zinc-500 font-mono mb-3">
        Illustrates the seasonal decoupling between root-zone buffer and immediate surface evaporation (2025).
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px] h-auto">
          {[0, 2.5, 5, 7.5, 10].map((tick) => {
            const y = getY(tick);
            return (
              <g key={tick}>
                <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e4e4e7" strokeDasharray="3 3" />
                <text x={padding.left - 8} y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-zinc-400">
                  {tick}
                </text>
              </g>
            );
          })}

          <polyline fill="none" stroke="#0d9488" strokeWidth="2" points={points} />
          {diffs.map((v, i) => (
            <circle key={i} cx={getX(i)} cy={getY(v)} r="3.5" fill="#0d9488" />
          ))}

          {months.map((m, i) => (
            <text key={m} x={getX(i)} y={height - 10} textAnchor="middle" className="text-[11px] font-mono fill-zinc-600">
              {m}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ─── Figure 21.1 & 21.2: Crop Battle Lab (Modeled Demand & % Difference) ──────
export function CropBattleComparisonCharts() {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Figure 21.1 */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 21.1 — Annualized Modeled ETc Demand
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-4">
          Revised Meknes internal reference (mm/year)
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Wheat Monoculture</span>
              <span className="text-zinc-600 font-bold">455.8 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-teal-600 h-full w-[100%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                455.8
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Wheat → Lentils → Barley</span>
              <span className="text-teal-700 font-bold">362.4 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-teal-600 h-full w-[79.5%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                362.4
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Wheat → Forage → Fallow</span>
              <span className="text-teal-800 font-bold">241.0 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-teal-700 h-full w-[52.9%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                241.0
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Figure 21.2 */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 21.2 — Relative Model-Demand Difference (%)
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-4">
          Relative to 455.8 mm/yr wheat monoculture baseline
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Wheat Monoculture</span>
              <span className="text-zinc-500 font-mono">0.00%</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-zinc-300 h-full w-[2%] rounded-md" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Diversified Rotation</span>
              <span className="text-emerald-700 font-bold">+20.49% lower demand</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-emerald-600 h-full w-[43.5%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                20.49%
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Conservation-Oriented</span>
              <span className="text-emerald-800 font-bold">+47.13% lower demand</span>
            </div>
            <div className="w-full bg-zinc-100 h-6 rounded-md overflow-hidden">
              <div className="bg-emerald-700 h-full w-[100%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                47.13%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Figure 22.1 & 22.2: Climate Attack Multipliers & Shock Response ────────
export function ClimateAttackCharts() {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Figure 22.1 */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 22.1 — Climate Attack Shock Multipliers
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-3">
          Configurable stress parameters from the internal audit
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 text-[11px]">
                <th className="text-left pb-1.5">Scenario</th>
                <th className="text-right pb-1.5">Rain (mP)</th>
                <th className="text-right pb-1.5">Soil (mSM)</th>
                <th className="text-right pb-1.5">ET (mET)</th>
                <th className="text-right pb-1.5">Penalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr>
                <td className="py-1.5 font-semibold text-zinc-900">Baseline</td>
                <td className="text-right">1.00</td>
                <td className="text-right">1.00</td>
                <td className="text-right">1.00</td>
                <td className="text-right text-zinc-400">0</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-rose-700">Drought</td>
                <td className="text-right text-rose-600 font-bold">0.60</td>
                <td className="text-right text-rose-600 font-bold">0.70</td>
                <td className="text-right text-amber-600">1.10</td>
                <td className="text-right font-bold text-rose-600">35</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-amber-700">Heatwave</td>
                <td className="text-right text-amber-600">0.90</td>
                <td className="text-right text-amber-600">0.80</td>
                <td className="text-right text-amber-600 font-bold">1.30</td>
                <td className="text-right font-bold text-amber-600">25</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-sky-700">Delayed Rain</td>
                <td className="text-right text-sky-600">0.75</td>
                <td className="text-right text-sky-600">0.65</td>
                <td className="text-right text-sky-600">1.05</td>
                <td className="text-right font-bold text-sky-600">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Figure 22.2 */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 22.2 — Baseline vs. Drought Stress Score (0–100)
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-3">
          Simulated impact: lower score represents higher resilience
        </div>

        <div className="space-y-3 pt-1">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Wheat Monoculture</span>
              <span className="text-rose-600 font-bold">15 → 50 (+35 penalty)</span>
            </div>
            <div className="w-full bg-zinc-100 h-5 rounded overflow-hidden flex">
              <div className="bg-slate-500 h-full w-[15%]" title="Baseline: 15" />
              <div className="bg-rose-500 h-full w-[35%]" title="Drought shock: 50" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Diversified Rotation</span>
              <span className="text-amber-600 font-bold">8 → 23.8 (+15.8 penalty)</span>
            </div>
            <div className="w-full bg-zinc-100 h-5 rounded overflow-hidden flex">
              <div className="bg-slate-500 h-full w-[8%]" title="Baseline: 8" />
              <div className="bg-amber-500 h-full w-[15.8%]" title="Drought shock: 23.8" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800">Conservation-Oriented</span>
              <span className="text-emerald-700 font-bold">5 → 5 (0 penalty)</span>
            </div>
            <div className="w-full bg-zinc-100 h-5 rounded overflow-hidden flex">
              <div className="bg-emerald-600 h-full w-[5%]" title="Baseline & Shock: 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Figure 33.1: Volumetric ETc Equivalent (m3/ha/year) ────────────────────
export function VolumetricDemandChart() {
  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white shadow-2xs">
      <div className="text-xs font-bold text-zinc-900 mb-1">
        Figure 33.1 — Exact Unit Conversion: Modeled Demand Difference (m³/ha/year)
      </div>
      <div className="text-[11px] text-zinc-500 font-mono mb-4">
        1 mm uniform depth over 1 hectare = 10 m³. (Formula: 10 × ΔETc)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-teal-200 bg-teal-50/50">
          <div className="text-xs font-bold text-teal-950 uppercase">Diversified Plan (B)</div>
          <div className="text-2xl font-bold font-mono text-teal-800 mt-1">934 m³/ha/yr</div>
          <div className="text-[11px] text-teal-700 font-mono mt-1">
            ΔETc = 93.4 mm/year × 10 = 934 m³/ha
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 border-t border-teal-200/80 pt-1.5">
            For 5 ha smallholder: 4,670 m³/year modeled demand equivalent
          </div>
        </div>

        <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50">
          <div className="text-xs font-bold text-emerald-950 uppercase">Conservation Plan (C)</div>
          <div className="text-2xl font-bold font-mono text-emerald-800 mt-1">2,148 m³/ha/yr</div>
          <div className="text-[11px] text-emerald-700 font-mono mt-1">
            ΔETc = 214.8 mm/year × 10 = 2,148 m³/ha
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 border-t border-emerald-200/80 pt-1.5">
            For 5 ha smallholder: 10,740 m³/year modeled demand equivalent
          </div>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-zinc-500 italic">
        * Volumetric equivalents of differences in modeled crop ET demand, not measured pumped irrigation savings.
      </div>
    </div>
  );
}

// ─── Figure 36.1 & 38.1 - 38.4: Impact 2030 Scaling Model ────────────────────
export function ImpactScalingVisualizations() {
  return (
    <div className="my-6 space-y-6">
      {/* Figure 36.1: Global Freshwater Share */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 36.1 — Global Freshwater Withdrawals (FAO Context)
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-3">
          Global baseline statistic (FAO 2025 assessment: $3.26T disaster losses over 30 years)
        </div>
        <div className="space-y-2">
          <div className="w-full bg-zinc-100 h-8 rounded-lg overflow-hidden flex font-mono text-xs text-white font-medium">
            <div className="bg-teal-600 h-full w-[72%] flex items-center justify-center">
              Agriculture (72%)
            </div>
            <div className="bg-slate-500 h-full w-[28%] flex items-center justify-center">
              Other (28%)
            </div>
          </div>
        </div>
      </div>

      {/* Table 38.1 & Figure 38.1: Impact 2030 Conditional Scenarios */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-2xs">
        <div className="text-xs font-bold text-zinc-900 mb-1">
          Figure 38.1 &amp; Table 38.1 — Impact 2030 Conditional Scaling Scenarios
        </div>
        <div className="text-[11px] text-zinc-500 font-mono mb-3">
          Model parameters: h = 5 ha, d = 93.4 mm/ha/year, q = 0.35, i = 50 mm/ha/year
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 text-[11px]">
                <th className="text-left pb-1.5">Scenario</th>
                <th className="text-right pb-1.5">Farmers (F)</th>
                <th className="text-right pb-1.5">Adoption (a)</th>
                <th className="text-right pb-1.5">Area (ha)</th>
                <th className="text-right pb-1.5">ET Equivalent (m³/yr)</th>
                <th className="text-right pb-1.5">Hypo. Irrigation (m³/yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="py-2 font-semibold">Pilot Phase</td>
                <td className="text-right">1,000</td>
                <td className="text-right">20%</td>
                <td className="text-right">1,000 ha</td>
                <td className="text-right font-bold text-teal-700">934,000 m³</td>
                <td className="text-right text-zinc-600">175,000 m³</td>
              </tr>
              <tr className="bg-teal-50/50">
                <td className="py-2 font-semibold text-teal-950">Regional Scale (Saïss)</td>
                <td className="text-right font-bold">10,000</td>
                <td className="text-right font-bold">30%</td>
                <td className="text-right font-bold text-teal-900">15,000 ha</td>
                <td className="text-right font-bold text-teal-800">14,010,000 m³</td>
                <td className="text-right font-bold text-teal-900">2,625,000 m³</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Multi-Region Scale</td>
                <td className="text-right">50,000</td>
                <td className="text-right">40%</td>
                <td className="text-right">100,000 ha</td>
                <td className="text-right font-bold text-teal-700">93,400,000 m³</td>
                <td className="text-right text-zinc-600">17,500,000 m³</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Comparison: ETc equivalent vs Illustrative Irrigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <div className="text-[11px] font-mono text-zinc-500 uppercase">Regional ET-Equivalent</div>
            <div className="text-xl font-bold font-mono text-teal-700 mt-0.5">14.01 Million m³/yr</div>
            <div className="text-[10px] text-zinc-500 mt-1">15,000 ha × 93.4 mm × 10 (potential demand reduction)</div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 bg-zinc-50">
            <div className="text-[11px] font-mono text-zinc-500 uppercase">Regional Irrigation Proxy</div>
            <div className="text-xl font-bold font-mono text-slate-700 mt-0.5">2.63 Million m³/yr</div>
            <div className="text-[10px] text-zinc-500 mt-1">15,000 ha × 35% irrigated × 50 mm × 10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
