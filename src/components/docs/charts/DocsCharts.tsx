"use client";

import React, { useState } from "react";
import { useDocsContext } from "@/context/DocsContext";

// ─── Figure 2.1: Evidence Maturity Diagram ──────────────────────────────────
export function EvidenceMaturityDiagram() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
        {isEn ? "Figure 2.1 — Evidence Maturity Pipeline" : "Figure 2.1 — Pipeline de Maturité des Preuves"}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded border border-border/60 bg-background text-left">
          <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide">
            {isEn ? "01 / Observe" : "01 / Observer"}
          </div>
          <div className="text-sm font-medium text-foreground mt-1">
            {isEn ? "Regional NASA Data" : "Données Régionales NASA"}
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            {isEn ? "POWER & SMAP L4 Observations" : "Observations POWER & SMAP L4"}
          </div>
        </div>

        <div className="p-3.5 rounded border border-foreground/30 bg-background text-left">
          <div className="text-[11px] font-mono text-foreground font-semibold uppercase tracking-wide">
            {isEn ? "02 / Compare" : "02 / Comparer"}
          </div>
          <div className="text-sm font-medium text-foreground mt-1">
            {isEn ? "Agronomic Modeling" : "Modélisation Agronomique"}
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            {isEn ? "FAO-56 & Soil Balances" : "FAO-56 & Bilans Hydriques"}
          </div>
        </div>

        <div className="p-3.5 rounded border border-border/60 bg-background text-left">
          <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wide">
            {isEn ? "03 / Validate" : "03 / Valider"}
          </div>
          <div className="text-sm font-medium text-foreground mt-1">
            {isEn ? "In Situ Ground Truth" : "Mesures Terrain In Situ"}
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-mono">
            {isEn ? "Independent Field Protocol" : "Protocole Parcellaire Indépendant"}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 font-mono">
        {isEn
          ? "Note: Observed data access and model comparisons remain distinct from field-validated crop yields."
          : "Note : L'accès aux données observées et les comparaisons de modèles restent distincts des rendements validés sur le terrain."}
      </p>
    </div>
  );
}

// ─── Figure 10.1: 12-Month SMAP Moisture Chart (ee-chart.csv) ───────────────
export function SmapMonthlyChart() {
  const { lang, theme } = useDocsContext();
  const isEn = lang === "en";
  const isDark = theme === "dark";

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

  const surfaceStroke = isDark ? "#ffffff" : "#18181b";
  const rootzoneStroke = isDark ? "#a1a1aa" : "#71717a";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-semibold text-foreground font-mono">
            {isEn
              ? "Figure 10.1 — 2025 Monthly SMAP Soil Moisture Series"
              : "Figure 10.1 — Série Mensuelle d'Humidité du Sol SMAP 2025"}
          </div>
          <div className="text-[11px] text-muted-foreground font-mono">
            {isEn
              ? "Recorded from ee-chart.csv export (Meknes region, 2025)"
              : "Enregistrée d'après l'export ee-chart.csv (région de Meknès, 2025)"}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-foreground" />
            <span className="text-foreground">
              {isEn ? "Surface (0–5 cm)" : "Surface (0–5 cm)"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 border-t border-dashed border-muted-foreground" />
            <span className="text-muted-foreground">
              {isEn ? "Root zone (0–100 cm)" : "Zone racinaire (0–100 cm)"}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-full h-auto text-xs font-mono">
          {/* Grid lines */}
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
                  className="text-border/60"
                  strokeDasharray="2 4"
                />
                <text
                  x={padding.left - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="fill-muted-foreground text-[10px]"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {/* Month labels */}
          {months.map((m, i) => (
            <text
              key={m}
              x={getX(i)}
              y={height - 10}
              textAnchor="middle"
              className="fill-muted-foreground text-[10px]"
            >
              {m}
            </text>
          ))}

          {/* Lines */}
          <polyline
            fill="none"
            stroke={rootzoneStroke}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            points={rootzonePoints}
          />
          <polyline
            fill="none"
            stroke={surfaceStroke}
            strokeWidth="1.75"
            points={surfacePoints}
          />

          {/* Data points */}
          {surface.map((v, i) => (
            <g key={i}>
              <circle
                cx={getX(i)}
                cy={getY(v)}
                r={hoveredIdx === i ? 4 : 2.5}
                fill={surfaceStroke}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
              <circle
                cx={getX(i)}
                cy={getY(rootzone[i])}
                r={hoveredIdx === i ? 4 : 2.5}
                fill={rootzoneStroke}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </g>
          ))}
        </svg>
      </div>

      {hoveredIdx !== null && (
        <div className="mt-3 p-2.5 rounded border border-border/70 bg-background text-xs font-mono flex items-center justify-between">
          <span className="font-semibold text-foreground">
            {months[hoveredIdx]} 2025:
          </span>
          <div className="flex gap-4">
            <span className="text-foreground">
              Surface: {surface[hoveredIdx].toFixed(2)}%
            </span>
            <span className="text-muted-foreground">
              Root-Zone: {rootzone[hoveredIdx].toFixed(2)}%
            </span>
            <span className="text-foreground font-semibold">
              Delta: +{(rootzone[hoveredIdx] - surface[hoveredIdx]).toFixed(2)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Figure 17.1: Soil Depth Difference Chart ───────────────────────────────
export function SoilDepthDifferenceChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const data = [
    { month: "Jan", diff: 4.941 },
    { month: "Feb", diff: 4.167 },
    { month: "Mar", diff: 1.558 },
    { month: "Apr", diff: 5.862 },
    { month: "May", diff: 8.971 },
    { month: "Jun", diff: 8.553 },
    { month: "Jul", diff: 8.958 },
    { month: "Aug", diff: 8.342 },
    { month: "Sep", diff: 8.004 },
    { month: "Oct", diff: 8.779 },
    { month: "Nov", diff: 4.989 },
    { month: "Dec", diff: 0.555 },
  ];

  const maxDiff = 10;
  const width = 640;
  const height = 180;
  const padding = { top: 15, right: 20, bottom: 30, left: 35 };

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20 transition-colors">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 17.1 — Seasonal Buffer Decoupling: Root-Zone minus Surface (m³/m³ × 100)"
          : "Figure 17.1 — Découplage Saisonnier : Zone Racinaire moins Surface (%)"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Shows how deep root layers preserve moisture buffer (+8.9% in May–July) while topsoil evaporates."
          : "Démontre le maintien de la réserve racinaire (+8,9% en mai-juillet) malgré l'assèchement de surface."}
      </p>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-full h-auto text-xs font-mono">
          {[0, 2.5, 5, 7.5, 10].map((t) => {
            const y = height - padding.bottom - (t / maxDiff) * (height - padding.top - padding.bottom);
            return (
              <g key={t}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="currentColor"
                  className="text-border/60"
                  strokeDasharray="2 4"
                />
                <text x={padding.left - 6} y={y + 3} textAnchor="end" className="fill-muted-foreground text-[10px]">
                  +{t}%
                </text>
              </g>
            );
          })}

          {data.map((d, i) => {
            const barW = 24;
            const x = padding.left + (i / data.length) * (width - padding.left - padding.right) + 8;
            const barH = (d.diff / maxDiff) * (height - padding.top - padding.bottom);
            const y = height - padding.bottom - barH;

            return (
              <g key={d.month}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  className="fill-foreground/80 hover:fill-foreground transition-colors cursor-pointer"
                  rx="1"
                />
                <text
                  x={x + barW / 2}
                  y={height - 10}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[10px]"
                >
                  {d.month}
                </text>
                <text
                  x={x + barW / 2}
                  y={y - 4}
                  textAnchor="middle"
                  className="fill-foreground text-[9px] font-semibold"
                >
                  +{d.diff.toFixed(1)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ─── Figure 21.1 & 21.2: Crop Battle Comparison Charts ───────────────────────
export function CropBattleComparisonCharts() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const plans = [
    { name: isEn ? "Plan A (Wheat Monoculture)" : "Plan A (Monoculture Blé)", demand: 455.8, stress: 78, soil: 42 },
    { name: isEn ? "Plan B (Wheat-Lentils-Barley)" : "Plan B (Rotation Blé-Lentilles-Orge)", demand: 362.4, stress: 44, soil: 76 },
    { name: isEn ? "Plan C (Conservation Rotation)" : "Plan C (Rotation Conservation)", demand: 320.1, stress: 36, soil: 88 },
  ];

  return (
    <div className="my-6 space-y-4">
      <div className="p-5 rounded-md border border-border/70 bg-muted/20">
        <div className="text-xs font-semibold text-foreground font-mono mb-4">
          {isEn
            ? "Figure 21.1 — Annual Modeled ETc Demand Comparison (mm/year)"
            : "Figure 21.1 — Comparaison de la Demande ETc Annuelle Modélisée (mm/an)"}
        </div>

        <div className="space-y-3 font-mono text-xs">
          {plans.map((p) => {
            const pct = (p.demand / 500) * 100;
            return (
              <div key={p.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-sans font-medium text-foreground">{p.name}</span>
                  <span className="font-mono text-foreground font-semibold">{p.demand} mm/yr</span>
                </div>
                <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-border/60 text-xs text-muted-foreground flex justify-between font-mono">
          <span>{isEn ? "Plan B vs Plan A Difference:" : "Écart Plan B vs Plan A :"}</span>
          <span className="text-foreground font-semibold">
            −93.4 mm/year (−20.5%) [934 m³/ha]
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Figure 22.1 & 22.2: Climate Attack Charts ──────────────────────────────
export function ClimateAttackCharts() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const shocks = [
    { name: isEn ? "Baseline (2025 Normal)" : "Référence (2025 Normal)", planA: 78, planB: 44, planC: 36 },
    { name: isEn ? "Drought Shock (−30% Rain)" : "Choc Sécheresse (−30% Pluie)", planA: 92, planB: 58, planC: 48 },
    { name: isEn ? "Heat Wave Shock (+2.5°C Tmax)" : "Choc Canicule (+2.5°C Tmax)", planA: 86, planB: 52, planC: 42 },
    { name: isEn ? "Delayed Rain (30-day shift)" : "Retard de Pluie (Décalage 30j)", planA: 88, planB: 49, planC: 39 },
  ];

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 22.1 — Vulnerability & Stress Index Under Controlled Shocks (0–100)"
          : "Figure 22.1 — Indice de Stress et Vulnérabilité sous Chocs Contrôlés (0–100)"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Lower score indicates higher resilience. Diversified rotations maintain resilience under weather stress."
          : "Un score inférieur indique une plus grande résilience face aux stress climatiques."}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono text-left border-collapse">
          <thead className="border-b border-border text-muted-foreground uppercase text-[11px]">
            <tr>
              <th className="py-2 pr-4">{isEn ? "Scenario" : "Scénario"}</th>
              <th className="py-2 pr-4 text-right">Plan A (Mono)</th>
              <th className="py-2 pr-4 text-right">Plan B (Rotation)</th>
              <th className="py-2 pr-4 text-right">Plan C (Conservation)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 text-muted-foreground">
            {shocks.map((s) => (
              <tr key={s.name}>
                <td className="py-2.5 pr-4 text-foreground font-sans font-medium">{s.name}</td>
                <td className="py-2.5 pr-4 text-right font-mono font-medium text-foreground">{s.planA}</td>
                <td className="py-2.5 pr-4 text-right font-mono font-semibold text-foreground">{s.planB}</td>
                <td className="py-2.5 pr-4 text-right font-mono text-muted-foreground">{s.planC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Figure 33.1: Volumetric Demand Chart ───────────────────────────────────
export function VolumetricDemandChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-2">
        {isEn
          ? "Figure 33.1 — Area-Scaled Evapotranspirative Equivalent: 1 Hectare (m³/year)"
          : "Figure 33.1 — Équivalent Évapotranspiratif ramené à la surface : 1 Hectare (m³/an)"}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs font-mono">
        <div className="p-3 rounded border border-border/60 bg-background text-left">
          <span className="text-[11px] text-muted-foreground block">{isEn ? "Plan A (Wheat)" : "Plan A (Blé)"}</span>
          <span className="text-base font-semibold text-foreground mt-0.5 block">4,558 m³/ha</span>
          <span className="text-[10px] text-muted-foreground">{isEn ? "Reference depth: 455.8 mm" : "Hauteur réf. : 455,8 mm"}</span>
        </div>
        <div className="p-3 rounded border border-foreground/30 bg-background text-left">
          <span className="text-[11px] text-foreground font-medium block">{isEn ? "Plan B (Rotation)" : "Plan B (Rotation)"}</span>
          <span className="text-base font-semibold text-foreground mt-0.5 block">3,624 m³/ha</span>
          <span className="text-[10px] text-muted-foreground">{isEn ? "Reference depth: 362.4 mm" : "Hauteur réf. : 362,4 mm"}</span>
        </div>
        <div className="p-3 rounded border border-border/60 bg-background text-left">
          <span className="text-[11px] text-muted-foreground block">{isEn ? "Modeled Difference" : "Écart Modélisé"}</span>
          <span className="text-base font-semibold text-foreground mt-0.5 block">−934 m³/ha</span>
          <span className="text-[10px] text-muted-foreground">−20.5% {isEn ? "modeled demand" : "demande modélisée"}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground font-mono">
        {isEn
          ? "Formula: 10 × Area (ha) × ΔETc (mm) = 10 × 1 × 93.4 = 934 m³. This represents modeled biological demand difference, not measured groundwater extraction savings."
          : "Formule : 10 × Surface (ha) × ΔETc (mm) = 10 × 1 × 93,4 = 934 m³. Il s'agit d'un écart de demande biologique modélisée et non d'une économie d'eau souterraine mesurée."}
      </p>
    </div>
  );
}

// ─── Figure 36.1: Global Freshwater Withdrawals (FAO Baseline) ──────────────
export function GlobalWithdrawalsChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 36.1 — FAO Global Freshwater Withdrawals by Sector"
          : "Figure 36.1 — Répartition Mondiale des Prélèvements d'Eau Douce selon la FAO"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Agriculture accounts for ~72% of worldwide freshwater withdrawals. 28% represents industrial and domestic uses."
          : "L'agriculture absorbe environ 72% des prélèvements mondiaux d'eau douce. Les 28% restants couvrent l'industrie et l'usage domestique."}
      </p>

      <div className="space-y-3 font-mono text-xs">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-sans font-medium text-foreground">{isEn ? "Agriculture Sector" : "Secteur Agricole"}</span>
            <span className="font-semibold text-foreground">72.0%</span>
          </div>
          <div className="w-full bg-border/60 h-3 rounded-full overflow-hidden">
            <div className="h-full bg-foreground" style={{ width: "72%" }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-sans font-medium text-muted-foreground">{isEn ? "Industrial & Municipal Uses" : "Industrie & Usages Domestiques"}</span>
            <span className="text-muted-foreground">28.0%</span>
          </div>
          <div className="w-full bg-border/60 h-3 rounded-full overflow-hidden">
            <div className="h-full bg-muted-foreground/60" style={{ width: "28%" }} />
          </div>
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground font-mono mt-4">
        {isEn
          ? "Source: FAO Water Scarcity Assessment [1]. Global context baseline, not attributable to Farmer Eye."
          : "Source : Évaluation de la rareté de l'eau, FAO [1]. Donnée macroéconomique mondiale, non imputable à Farmer Eye."}
      </p>
    </div>
  );
}

// ─── Figure 38.4: Two Volumes Comparison Chart ──────────────────────────────
export function TwoVolumesComparisonChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 38.4 — Two Conceptually Different Volumes (Regional Scenario: 15,000 ha)"
          : "Figure 38.4 — Deux Volumes aux Significations Scientifiques Distinctes (Scénario Régional : 15 000 ha)"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Demonstrating the fundamental distinction between atmospheric modeled demand (ETc) and hypothetical irrigation savings (pumping)."
          : "Démontre la distinction fondamentale entre demande atmosphérique modélisée (ETc) et économie d'irrigation hypothétique (pompage)."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-4 rounded border border-foreground/30 bg-background text-left space-y-2">
          <div className="text-[11px] text-muted-foreground uppercase font-semibold">
            {isEn ? "Volume 1: ETc Demand Equivalent" : "Volume 1 : Équivalent Demande ETc"}
          </div>
          <div className="text-2xl font-bold text-foreground">14.01 Mm³/yr</div>
          <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
            {isEn
              ? "V_ETc = 15,000 ha × 93.4 mm × 10 = 14,010,000 m³/year. Represents biological evapotranspirative crop requirement difference across full growing cycle."
              : "V_ETc = 15 000 ha × 93,4 mm × 10 = 14 010 000 m³/an. Représente l'écart biologique d'évapotranspiration modélisée sur l'ensemble du cycle cultural."}
          </p>
        </div>

        <div className="p-4 rounded border border-border/70 bg-background text-left space-y-2">
          <div className="text-[11px] text-muted-foreground uppercase font-semibold">
            {isEn ? "Volume 2: Illustrative Irrigation Reduction" : "Volume 2 : Réduction d'Irrigation Hypothétique"}
          </div>
          <div className="text-2xl font-bold text-foreground">2.63 Mm³/yr</div>
          <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
            {isEn
              ? "V_I^sim = 15,000 ha × 35% irrigated × 50 mm × 10 = 2,625,000 m³/year. Separate conditional assumption requiring local water meters and pump verification."
              : "V_I^sim = 15 000 ha × 35% irrigué × 50 mm × 10 = 2 625 000 m³/an. Hypothèse distincte exigeant des compteurs de pompage et un suivi in situ."}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Figure 38.3: Transferability Sensitivity Chart ─────────────────────────
export function TransferabilitySensitivityChart() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const rows = [
    { s: "s = 0.50 (50% transfer)", d: "46.7 mm/ha/yr", vol: "7.005 Mm³/yr", pct: "50%" },
    { s: "s = 0.75 (75% transfer)", d: "70.05 mm/ha/yr", vol: "10.508 Mm³/yr", pct: "75%" },
    { s: "s = 1.00 (100% full transfer)", d: "93.4 mm/ha/yr", vol: "14.010 Mm³/yr", pct: "100%" },
  ];

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Figure 38.3 — Sensitivity to Geographic Transferability Factor s (Regional Case: 15,000 ha)"
          : "Figure 38.3 — Sensibilité au Facteur de Transférabilité Géographique s (Cas Régional : 15 000 ha)"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Exploring outcomes when the local Meknes biological difference (93.4 mm) only partially transfers to other microclimates."
          : "Explore les résultats lorsque l'écart biologique de Meknès (93,4 mm) ne s'applique que partiellement à d'autres microclimats."}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono text-left border-collapse">
          <thead className="border-b border-border text-muted-foreground uppercase text-[11px]">
            <tr>
              <th className="py-2 pr-4">{isEn ? "Transfer Factor (s)" : "Facteur (s)"}</th>
              <th className="py-2 pr-4">{isEn ? "Local ET Delta (d)" : "Écart Local (d)"}</th>
              <th className="py-2 pr-4 text-right">{isEn ? "Modeled ET Equivalent (V_ETc)" : "Équivalent Modélisé (V_ETc)"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 text-muted-foreground">
            {rows.map((r) => (
              <tr key={r.s}>
                <td className="py-2.5 pr-4 text-foreground font-medium">{r.s}</td>
                <td className="py-2.5 pr-4">{r.d}</td>
                <td className="py-2.5 pr-4 text-right font-semibold text-foreground">{r.vol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Figure 38.1 & 38.2: Interactive Scaling Simulator ──────────────────────
export function ImpactScalingVisualizations() {
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const [farms, setFarms] = useState<number>(10000);
  const [adoptionShare, setAdoptionShare] = useState<number>(30); // %
  const [transferability, setTransferability] = useState<number>(100); // %
  const [irrigatedShare, setIrrigatedShare] = useState<number>(35); // %
  const [irrigationSaving, setIrrigationSaving] = useState<number>(50); // mm

  const avgHa = 5;
  const deltaETcBase = 93.4; // mm

  const effectiveDeltaETc = (deltaETcBase * transferability) / 100;
  const totalAreaHa = (farms * avgHa * adoptionShare) / 100;
  const volETcM3 = totalAreaHa * effectiveDeltaETc * 10;
  const volETcMillion = (volETcM3 / 1_000_000).toFixed(2);

  const irrigatedAreaHa = (totalAreaHa * irrigatedShare) / 100;
  const volIrrigationM3 = irrigatedAreaHa * irrigationSaving * 10;
  const volIrrigationMillion = (volIrrigationM3 / 1_000_000).toFixed(2);

  return (
    <div className="my-6 p-5 rounded-md border border-border/70 bg-muted/20">
      <div className="text-xs font-semibold text-foreground font-mono mb-1">
        {isEn
          ? "Interactive 2030 Deployment & Sensitivity Simulator (Eq. 10–13)"
          : "Simulateur Interactif de Déploiement & Sensibilité 2030 (Éq. 10–13)"}
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        {isEn
          ? "Directly adjust scaling parameters to inspect resulting adoption area, ETc equivalent, and illustrative irrigation proxy."
          : "Ajustez les paramètres d'échelle pour observer la surface adoptée, l'équivalent ETc et l'approximation d'irrigation."}
      </p>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
        {/* Farms */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{isEn ? "Farms (F):" : "Exploitations (F) :"}</span>
            <span className="font-semibold text-foreground">{farms.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={farms}
            onChange={(e) => setFarms(Number(e.target.value))}
            className="w-full accent-foreground cursor-pointer"
          />
        </div>

        {/* Adoption % */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{isEn ? "Adoption Share (a):" : "Part d'Adoption (a) :"}</span>
            <span className="font-semibold text-foreground">{adoptionShare}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            step="5"
            value={adoptionShare}
            onChange={(e) => setAdoptionShare(Number(e.target.value))}
            className="w-full accent-foreground cursor-pointer"
          />
        </div>

        {/* Transferability % */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{isEn ? "Transfer Factor (s):" : "Facteur Transférabilité (s) :"}</span>
            <span className="font-semibold text-foreground">{transferability}% ({(effectiveDeltaETc).toFixed(1)} mm)</span>
          </div>
          <input
            type="range"
            min="40"
            max="100"
            step="5"
            value={transferability}
            onChange={(e) => setTransferability(Number(e.target.value))}
            className="w-full accent-foreground cursor-pointer"
          />
        </div>

        {/* Irrigation saving assumption */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{isEn ? "Irrigation Delta (i):" : "Hypothèse Irrigation (i) :"}</span>
            <span className="font-semibold text-foreground">{irrigationSaving} mm/yr ({irrigatedShare}% irr.)</span>
          </div>
          <input
            type="range"
            min="20"
            max="100"
            step="5"
            value={irrigationSaving}
            onChange={(e) => setIrrigationSaving(Number(e.target.value))}
            className="w-full accent-foreground cursor-pointer"
          />
        </div>
      </div>

      {/* Output Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 font-mono text-xs">
        <div className="p-3.5 rounded border border-border/60 bg-background text-left">
          <span className="text-[11px] text-muted-foreground block">{isEn ? "Adopted Area (A_2030)" : "Surface Adoptée (A_2030)"}</span>
          <span className="text-base font-semibold text-foreground mt-0.5 block">{totalAreaHa.toLocaleString()} ha</span>
          <span className="text-[10px] text-muted-foreground">F × h (5ha) × a ({adoptionShare}%)</span>
        </div>
        <div className="p-3.5 rounded border border-foreground/30 bg-background text-left">
          <span className="text-[11px] text-foreground font-medium block">{isEn ? "Modeled ETc Delta (V_ETc)" : "Demande ETc (V_ETc)"}</span>
          <span className="text-base font-bold text-foreground mt-0.5 block">{volETcMillion} Mm³/yr</span>
          <span className="text-[10px] text-muted-foreground">10 × A × d ({effectiveDeltaETc.toFixed(1)} mm)</span>
        </div>
        <div className="p-3.5 rounded border border-border/60 bg-background text-left">
          <span className="text-[11px] text-muted-foreground block">{isEn ? "Assumed Irrigation (V_I^sim)" : "Irrigation Hypothétique (V_I^sim)"}</span>
          <span className="text-base font-semibold text-foreground mt-0.5 block">{volIrrigationMillion} Mm³/yr</span>
          <span className="text-[10px] text-muted-foreground">10 × A × q ({irrigatedShare}%) × i ({irrigationSaving}mm)</span>
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground font-mono mt-3">
        {isEn
          ? "Note: These amounts represent mathematical scaling under declared parameter choices. They are not measured aquifer savings or guaranteed benefits."
          : "Note : Ces montants représentent des extrapolations mathématiques sous des choix de paramètres déclarés. Ils ne constituent pas des économies de nappe mesurées."}
      </p>
    </div>
  );
}
