"use client";

import React, { useState } from "react";
import { useDocsContext } from "@/context/DocsContext";

// ─── Figure 2.1: Evidence Maturity Diagram ──────────────────────────────────
export function EvidenceMaturityDiagram() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-5 rounded-xl border border-zinc-200 dark:border-[#232529] bg-zinc-50/70 dark:bg-[#141518] transition-colors">
      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
        {isEn ? "Figure 2.1 — Evidence Maturity Pipeline" : "Figure 2.1 — Pipeline de Maturité des Preuves"}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 rounded-lg border border-sky-200 dark:border-sky-900/40 bg-sky-50/80 dark:bg-sky-950/20 text-center">
          <div className="text-xs font-bold text-sky-950 dark:text-sky-300 uppercase tracking-wide">
            {isEn ? "Observe" : "Observer"}
          </div>
          <div className="text-sm font-semibold text-sky-900 dark:text-sky-200 mt-1">
            {isEn ? "Regional NASA Information" : "Données Régionales NASA"}
          </div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-700/50">
            {isEn ? "Project Evidence" : "Données Projet"}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/80 dark:bg-emerald-950/20 text-center">
          <div className="text-xs font-bold text-emerald-950 dark:text-emerald-300 uppercase tracking-wide">
            {isEn ? "Compare" : "Comparer"}
          </div>
          <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 mt-1">
            {isEn ? "Model-Defined Options" : "Options Définies par Modèles"}
          </div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50">
            {isEn ? "Internal Simulation" : "Simulation Interne"}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-amber-200 dark:border-amber-900/40 bg-amber-50/80 dark:bg-amber-950/20 text-center">
          <div className="text-xs font-bold text-amber-950 dark:text-amber-300 uppercase tracking-wide">
            {isEn ? "Validate" : "Valider"}
          </div>
          <div className="text-sm font-semibold text-amber-900 dark:text-amber-200 mt-1">
            {isEn ? "Independent Field Effects" : "Mesures In Situ Indépendantes"}
          </div>
          <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50">
            {isEn ? "Future Study" : "Études Futures"}
          </div>
        </div>
      </div>
      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-3 italic">
        {isEn
          ? "Observed data access and scenario comparisons are distinct from measured field effects."
          : "L'accès aux données observées et les comparaisons de scénarios restent distincts des effets mesurés sur le terrain."}
      </p>
    </div>
  );
}

// ─── Figure 10.1: 12-Month SMAP Moisture Chart (ee-chart.csv) ───────────────
export function SmapMonthlyChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthsFr = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  const months = isEn ? monthsEn : monthsFr;

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
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            {isEn
              ? "Figure 10.1 — 2025 Monthly SMAP Soil Moisture Series"
              : "Figure 10.1 — Série Mensuelle d'Humidité du Sol SMAP 2025"}
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
            {isEn
              ? "Recorded from ee-chart.csv export (Meknes region, 2025)"
              : "Enregistrée d'après l'export ee-chart.csv (région de Meknès, 2025)"}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              {isEn ? "Surface (0–5 cm)" : "Surface (0–5 cm)"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-400 dark:bg-slate-300" />
            <span className="text-zinc-600 dark:text-zinc-400">
              {isEn ? "Root zone (0–100 cm)" : "Zone racinaire (0–100 cm)"}
            </span>
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
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-[#282B30]"
                  strokeDasharray="3 3"
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Rootzone Line */}
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-slate-600 dark:text-slate-400"
            strokeWidth="2"
            points={rootzonePoints}
          />
          {rootzone.map((v, i) => (
            <rect
              key={`rz-${i}`}
              x={getX(i) - 3}
              y={getY(v) - 3}
              width="6"
              height="6"
              className="fill-slate-600 dark:fill-slate-300 cursor-pointer hover:scale-125 transition-transform"
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
            <text
              key={m}
              x={getX(i)}
              y={height - 10}
              textAnchor="middle"
              className="text-[11px] font-mono fill-zinc-600 dark:fill-zinc-400 font-medium"
            >
              {m}
            </text>
          ))}
        </svg>
      </div>

      {hoveredIdx !== null && (
        <div className="mt-2 p-2 rounded bg-zinc-50 dark:bg-[#1A1C20] border border-zinc-200 dark:border-[#232529] text-xs font-mono flex items-center justify-between">
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            {isEn ? "Month:" : "Mois :"} {months[hoveredIdx]} 2025
          </span>
          <span className="text-teal-700 dark:text-teal-400">
            Surface (0-5 cm): {surface[hoveredIdx]}
          </span>
          <span className="text-slate-700 dark:text-slate-300">
            Root Zone (0-100 cm): {rootzone[hoveredIdx]}
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            Diff: +{(rootzone[hoveredIdx] - surface[hoveredIdx]).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Figure 17.1: Root Zone minus Surface (2025 Difference) ─────────────────
export function SoilDepthDifferenceChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthsFr = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  const months = isEn ? monthsEn : monthsFr;

  const diffs = [4.941, 4.167, 1.558, 5.862, 8.971, 8.553, 8.958, 8.342, 8.004, 8.779, 4.989, 0.555];

  const width = 640;
  const height = 180;
  const padding = { top: 20, right: 30, bottom: 35, left: 40 };

  const getX = (idx: number) => padding.left + (idx / (months.length - 1)) * (width - padding.left - padding.right);
  const getY = (val: number) => height - padding.bottom - (val / 10) * (height - padding.top - padding.bottom);

  const points = diffs.map((v, i) => `${getX(i)},${getY(v)}`).join(" ");

  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
        {isEn
          ? "Figure 17.1 — Derived Difference (Root Zone Minus Surface)"
          : "Figure 17.1 — Différence Dérivée (Zone Racinaire Moins Surface)"}
      </div>
      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-3">
        {isEn
          ? "Illustrates the seasonal decoupling between root-zone buffer and immediate surface evaporation (2025)."
          : "Illustre le découplage saisonnier entre le tampon racinaire et l'évaporation de surface immédiate (2025)."}
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px] h-auto">
          {[0, 2.5, 5, 7.5, 10].map((tick) => {
            const y = getY(tick);
            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-[#282B30]"
                  strokeDasharray="3 3"
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500"
                >
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
            <text
              key={m}
              x={getX(i)}
              y={height - 10}
              textAnchor="middle"
              className="text-[11px] font-mono fill-zinc-600 dark:fill-zinc-400"
            >
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
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Figure 21.1 */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 21.1 — Annualized Modeled ETc Demand"
            : "Figure 21.1 — Demande Modélisée ETc Annualisée"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-4">
          {isEn
            ? "Revised Meknes internal reference (mm/year)"
            : "Référence interne révisée Meknès (mm/an)"}
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Wheat Monoculture" : "Monoculture de Blé"}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-bold">455.8 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
              <div className="bg-teal-600 h-full w-[100%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                455.8
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Wheat → Lentils → Barley" : "Blé → Lentilles → Orge"}
              </span>
              <span className="text-teal-700 dark:text-teal-400 font-bold">362.4 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
              <div className="bg-teal-600 h-full w-[79.5%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                362.4
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Wheat → Forage → Fallow" : "Blé → Fourrage → Jachère"}
              </span>
              <span className="text-teal-800 dark:text-teal-300 font-bold">241.0 mm/yr</span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
              <div className="bg-teal-700 h-full w-[52.9%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                241.0
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Figure 21.2 */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 21.2 — Relative Model-Demand Difference (%)"
            : "Figure 21.2 — Écart Relatif de Demande Modélisée (%)"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-4">
          {isEn
            ? "Relative to 455.8 mm/yr wheat monoculture baseline"
            : "Par rapport à la référence monoculture blé (455,8 mm/an)"}
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Wheat Monoculture" : "Monoculture Blé"}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">0.00%</span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
              <div className="bg-zinc-300 dark:bg-zinc-700 h-full w-[2%] rounded-md" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Diversified Rotation" : "Rotation Diversifiée"}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                {isEn ? "+20.49% lower demand" : "+20,49% demande réduite"}
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
              <div className="bg-emerald-600 h-full w-[43.5%] rounded-md flex items-center justify-end pr-2 text-[11px] text-white font-mono font-medium">
                20.49%
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Conservation-Oriented" : "Orientée Conservation"}
              </span>
              <span className="text-emerald-800 dark:text-emerald-300 font-bold">
                {isEn ? "+47.13% lower demand" : "+47,13% demande réduite"}
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-6 rounded-md overflow-hidden">
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
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Figure 22.1 */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 22.1 — Climate Attack Shock Multipliers"
            : "Figure 22.1 — Multiplicateurs de Choc 'Climate Attack'"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-3">
          {isEn
            ? "Configurable stress parameters from the internal audit"
            : "Paramètres de stress configurables d'après l'audit interne"}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-[#232529] text-zinc-500 dark:text-zinc-400 text-[11px]">
                <th className="text-left pb-1.5">{isEn ? "Scenario" : "Scénario"}</th>
                <th className="text-right pb-1.5">{isEn ? "Rain (mP)" : "Pluie (mP)"}</th>
                <th className="text-right pb-1.5">{isEn ? "Soil (mSM)" : "Sol (mSM)"}</th>
                <th className="text-right pb-1.5">{isEn ? "ET (mET)" : "ET (mET)"}</th>
                <th className="text-right pb-1.5">{isEn ? "Penalty" : "Pénalité"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-700 dark:text-zinc-300">
              <tr>
                <td className="py-1.5 font-semibold text-zinc-900 dark:text-white">
                  {isEn ? "Baseline" : "Référence"}
                </td>
                <td className="text-right">1.00</td>
                <td className="text-right">1.00</td>
                <td className="text-right">1.00</td>
                <td className="text-right text-zinc-400 dark:text-zinc-500">0</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-rose-700 dark:text-rose-400">
                  {isEn ? "Drought" : "Sécheresse"}
                </td>
                <td className="text-right text-rose-600 dark:text-rose-400 font-bold">0.60</td>
                <td className="text-right text-rose-600 dark:text-rose-400 font-bold">0.70</td>
                <td className="text-right text-amber-600 dark:text-amber-400">1.10</td>
                <td className="text-right font-bold text-rose-600 dark:text-rose-400">35</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-amber-700 dark:text-amber-400">
                  {isEn ? "Heatwave" : "Canicule"}
                </td>
                <td className="text-right text-amber-600 dark:text-amber-400">0.90</td>
                <td className="text-right text-amber-600 dark:text-amber-400">0.80</td>
                <td className="text-right text-amber-600 dark:text-amber-400 font-bold">1.30</td>
                <td className="text-right font-bold text-amber-600 dark:text-amber-400">25</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-sky-700 dark:text-sky-400">
                  {isEn ? "Delayed Rain" : "Pluie Retardée"}
                </td>
                <td className="text-right text-sky-600 dark:text-sky-400">0.75</td>
                <td className="text-right text-sky-600 dark:text-sky-400">0.65</td>
                <td className="text-right text-sky-600 dark:text-sky-400">1.05</td>
                <td className="text-right font-bold text-sky-600 dark:text-sky-400">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Figure 22.2 */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 22.2 — Baseline vs. Drought Stress Score (0–100)"
            : "Figure 22.2 — Score de Stress : Référence vs Sécheresse (0–100)"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-3">
          {isEn
            ? "Simulated impact: lower score represents higher resilience"
            : "Impact simulé : un score plus bas traduit une plus forte résilience"}
        </div>

        <div className="space-y-3 pt-1">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Wheat Monoculture" : "Monoculture Blé"}
              </span>
              <span className="text-rose-600 dark:text-rose-400 font-bold">
                15 → 50 {isEn ? "(+35 penalty)" : "(+35 pénalité)"}
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-5 rounded overflow-hidden flex">
              <div className="bg-slate-500 h-full w-[15%]" title="Baseline: 15" />
              <div className="bg-rose-500 h-full w-[35%]" title="Drought shock: 50" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Diversified Rotation" : "Rotation Diversifiée"}
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">
                8 → 23.8 {isEn ? "(+15.8 penalty)" : "(+15,8 pénalité)"}
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-5 rounded overflow-hidden flex">
              <div className="bg-slate-500 h-full w-[8%]" title="Baseline: 8" />
              <div className="bg-amber-500 h-full w-[15.8%]" title="Drought shock: 23.8" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isEn ? "Conservation-Oriented" : "Orientée Conservation"}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                5 → 5 {isEn ? "(0 penalty)" : "(0 pénalité)"}
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-5 rounded overflow-hidden flex">
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
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
        {isEn
          ? "Figure 33.1 — Exact Unit Conversion: Modeled Demand Difference (m³/ha/year)"
          : "Figure 33.1 — Conversion d'Unité : Écart de Demande Modélisée (m³/ha/an)"}
      </div>
      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-4">
        {isEn
          ? "1 mm uniform depth over 1 hectare = 10 m³. (Formula: 10 × ΔETc)"
          : "1 mm de hauteur d'eau sur 1 hectare = 10 m³. (Formule : 10 × ΔETc)"}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-teal-200 dark:border-teal-900/40 bg-teal-50/50 dark:bg-teal-950/20">
          <div className="text-xs font-bold text-teal-950 dark:text-teal-300 uppercase">
            {isEn ? "Diversified Plan (B)" : "Plan Diversifié (B)"}
          </div>
          <div className="text-2xl font-bold font-mono text-teal-800 dark:text-teal-300 mt-1">
            934 m³/ha/yr
          </div>
          <div className="text-[11px] text-teal-700 dark:text-teal-400 font-mono mt-1">
            ΔETc = 93.4 mm/an × 10 = 934 m³/ha
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 dark:text-zinc-400 border-t border-teal-200/80 dark:border-teal-900/40 pt-1.5">
            {isEn
              ? "For 5 ha smallholder: 4,670 m³/year modeled demand equivalent"
              : "Pour 5 ha : 4 670 m³/an d'équivalent de demande modélisée"}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="text-xs font-bold text-emerald-950 dark:text-emerald-300 uppercase">
            {isEn ? "Conservation Plan (C)" : "Plan de Conservation (C)"}
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-800 dark:text-emerald-300 mt-1">
            2,148 m³/ha/yr
          </div>
          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono mt-1">
            ΔETc = 214.8 mm/an × 10 = 2 148 m³/ha
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 dark:text-zinc-400 border-t border-emerald-200/80 dark:border-emerald-900/40 pt-1.5">
            {isEn
              ? "For 5 ha smallholder: 10,740 m³/year modeled demand equivalent"
              : "Pour 5 ha : 10 740 m³/an d'équivalent de demande modélisée"}
          </div>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400 italic">
        {isEn
          ? "* Volumetric equivalents of differences in modeled crop ET demand, not measured pumped irrigation savings."
          : "* Équivalents volumétriques des écarts d'ETc modélisée, non pas des économies mesurées d'irrigation pompée."}
      </div>
    </div>
  );
}

// ─── Figure 36.1 & 38.1 - 38.4: Impact 2030 Scaling Model ────────────────────
export function ImpactScalingVisualizations() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 space-y-6">
      {/* Figure 36.1: Global Freshwater Share */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 36.1 — Global Freshwater Withdrawals (FAO Context)"
            : "Figure 36.1 — Prélèvements Mondiaux d'Eau Douce (Contexte FAO)"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-3">
          {isEn
            ? "Global baseline statistic (FAO 2025 assessment: $3.26T disaster losses over 30 years)"
            : "Statistique mondiale de référence (Évaluation FAO 2025 : 3 260 Mds $ de pertes en 30 ans)"}
        </div>
        <div className="space-y-2">
          <div className="w-full bg-zinc-100 dark:bg-[#1E2024] h-8 rounded-lg overflow-hidden flex font-mono text-xs text-white font-medium">
            <div className="bg-teal-600 h-full w-[72%] flex items-center justify-center">
              {isEn ? "Agriculture (72%)" : "Agriculture (72%)"}
            </div>
            <div className="bg-slate-500 dark:bg-slate-600 h-full w-[28%] flex items-center justify-center">
              {isEn ? "Other (28%)" : "Autres (28%)"}
            </div>
          </div>
        </div>
      </div>

      {/* Table 38.1 & Figure 38.1: Impact 2030 Conditional Scenarios */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] shadow-2xs transition-colors">
        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          {isEn
            ? "Figure 38.1 & Table 38.1 — Impact 2030 Conditional Scaling Scenarios"
            : "Figure 38.1 & Tableau 38.1 — Scénarios d'Échelle Conditionnels Impact 2030"}
        </div>
        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono mb-3">
          {isEn
            ? "Model parameters: h = 5 ha, d = 93.4 mm/ha/year, q = 0.35, i = 50 mm/ha/year"
            : "Paramètres : h = 5 ha, d = 93,4 mm/ha/an, q = 0,35, i = 50 mm/ha/an"}
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-[#232529] text-zinc-500 dark:text-zinc-400 text-[11px]">
                <th className="text-left pb-1.5">{isEn ? "Scenario" : "Scénario"}</th>
                <th className="text-right pb-1.5">{isEn ? "Farmers (F)" : "Fermes (F)"}</th>
                <th className="text-right pb-1.5">{isEn ? "Adoption (a)" : "Adoption (a)"}</th>
                <th className="text-right pb-1.5">{isEn ? "Area (ha)" : "Superficie (ha)"}</th>
                <th className="text-right pb-1.5">{isEn ? "ET Equivalent (m³/yr)" : "Équiv. ET (m³/an)"}</th>
                <th className="text-right pb-1.5">{isEn ? "Hypo. Irrigation (m³/yr)" : "Irrigation Hypo. (m³/an)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-[#1E2024] text-zinc-800 dark:text-zinc-200">
              <tr>
                <td className="py-2 font-semibold">{isEn ? "Pilot Phase" : "Phase Pilote"}</td>
                <td className="text-right">1,000</td>
                <td className="text-right">20%</td>
                <td className="text-right">1,000 ha</td>
                <td className="text-right font-bold text-teal-700 dark:text-teal-400">934,000 m³</td>
                <td className="text-right text-zinc-600 dark:text-zinc-400">175,000 m³</td>
              </tr>
              <tr className="bg-teal-50/50 dark:bg-teal-950/30">
                <td className="py-2 font-semibold text-teal-950 dark:text-teal-300">
                  {isEn ? "Regional Scale (Saïss)" : "Échelle Régionale (Saïss)"}
                </td>
                <td className="text-right font-bold">10,000</td>
                <td className="text-right font-bold">30%</td>
                <td className="text-right font-bold text-teal-900 dark:text-teal-300">15,000 ha</td>
                <td className="text-right font-bold text-teal-800 dark:text-teal-400">14,010,000 m³</td>
                <td className="text-right font-bold text-teal-900 dark:text-teal-300">2,625,000 m³</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">{isEn ? "Multi-Region Scale" : "Échelle Multi-Régions"}</td>
                <td className="text-right">50,000</td>
                <td className="text-right">40%</td>
                <td className="text-right">100,000 ha</td>
                <td className="text-right font-bold text-teal-700 dark:text-teal-400">93,400,000 m³</td>
                <td className="text-right text-zinc-600 dark:text-zinc-400">17,500,000 m³</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Comparison: ETc equivalent vs Illustrative Irrigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-100 dark:border-[#1E2024]">
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">
              {isEn ? "Regional ET-Equivalent" : "Équivalent ET Régional"}
            </div>
            <div className="text-xl font-bold font-mono text-teal-700 dark:text-teal-400 mt-0.5">
              14.01 Million m³/yr
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
              15,000 ha × 93.4 mm × 10 ({isEn ? "potential demand reduction" : "réduction potentielle de demande"})
            </div>
          </div>
          <div className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-zinc-50 dark:bg-[#141518]">
            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">
              {isEn ? "Regional Irrigation Proxy" : "Approximation Irrigation Régionale"}
            </div>
            <div className="text-xl font-bold font-mono text-slate-700 dark:text-slate-300 mt-0.5">
              2.63 Million m³/yr
            </div>
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
              15,000 ha × 35% {isEn ? "irrigated" : "irrigué"} × 50 mm × 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
