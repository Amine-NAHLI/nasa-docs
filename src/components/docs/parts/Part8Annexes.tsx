"use client";

import React from "react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import { BookOpen, Table, FileCode2, Info, ExternalLink } from "lucide-react";

export function Part8Annexes() {
  return (
    <div className="space-y-12">
      {/* Annex A: Mathematical Reference Sheet */}
      <section id="annex-a" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Annex A</span>
            <span>Mathematical Reference Sheet</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">ANNEXES</span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Concept</th>
                <th className="text-left p-2.5">Equation / Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="p-2.5 font-bold">Valid-day mean</td>
                <td className="p-2.5">x̄ = ∑(v_i · x_i) / ∑ v_i (if ∑ v_i &gt; 0)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Total rainfall</td>
                <td className="p-2.5">P_Σ = ∑ Pt (with missing-day warning)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Hot days</td>
                <td className="p-2.5">N_hot = ∑ 1[Tmax,t ≥ 30°C] on valid days</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Dry days</td>
                <td className="p-2.5">N_dry = ∑ 1[Pt &lt; 1 mm] on valid days</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Crop ET</td>
                <td className="p-2.5">ETc,t = Kc,t · ET₀,t</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Rotation annual average</td>
                <td className="p-2.5">ETc = Y⁻¹ · ∑ ETc⁽ʸ⁾</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Demand difference</td>
                <td className="p-2.5">ΔETc = ETc,baseline − ETc,alternative</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Percent difference</td>
                <td className="p-2.5">r = 100 × (ΔETc / ETc,baseline) %</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Depth and area</td>
                <td className="p-2.5">1 mm × 1 ha = 10 m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Adopted scenario area</td>
                <td className="p-2.5">A = F · h · a</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">ET equivalent</td>
                <td className="p-2.5">V_ET = 10 · A · d</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Illustrative irrigation</td>
                <td className="p-2.5">V_I = 10 · A · q · i</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Sensitivity scaling</td>
                <td className="p-2.5">V_ET(s) = 10 · A · s · d</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Annex B: Complete 12-Month Table from ee-chart.csv */}
      <section id="annex-b" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Annex B</span>
            <span>NASA Dataset Reference and Complete 2025 Table</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">ANNEXES</span>
        </div>

        <div className="text-xs font-bold text-zinc-900 mb-1 font-mono">
          Table B.1 — Monthly Values Transcribed Directly from ee-chart.csv (Full 12 Months)
        </div>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-mono">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
              <tr>
                <th className="text-left p-2.5">Month (2025)</th>
                <th className="text-right p-2.5">Surface Exported (0–5 cm)</th>
                <th className="text-right p-2.5">Root-Zone Exported (0–100 cm)</th>
                <th className="text-right p-2.5">Difference (Root − Surface)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr><td className="p-2">2025-01</td><td className="text-right">21.263</td><td className="text-right">26.204</td><td className="text-right font-bold text-teal-700">4.941</td></tr>
              <tr><td className="p-2">2025-02</td><td className="text-right">24.177</td><td className="text-right">28.344</td><td className="text-right font-bold text-teal-700">4.167</td></tr>
              <tr><td className="p-2">2025-03</td><td className="text-right">34.840</td><td className="text-right">36.398</td><td className="text-right font-bold text-teal-700">1.558</td></tr>
              <tr><td className="p-2">2025-04</td><td className="text-right">27.351</td><td className="text-right">33.213</td><td className="text-right font-bold text-teal-700">5.862</td></tr>
              <tr><td className="p-2">2025-05</td><td className="text-right">19.238</td><td className="text-right">28.209</td><td className="text-right font-bold text-teal-700">8.971</td></tr>
              <tr><td className="p-2">2025-06</td><td className="text-right">17.086</td><td className="text-right">25.639</td><td className="text-right font-bold text-teal-700">8.553</td></tr>
              <tr><td className="p-2">2025-07</td><td className="text-right">15.020</td><td className="text-right">23.978</td><td className="text-right font-bold text-teal-700">8.958</td></tr>
              <tr><td className="p-2">2025-08</td><td className="text-right">14.484</td><td className="text-right">22.826</td><td className="text-right font-bold text-teal-700">8.342</td></tr>
              <tr><td className="p-2">2025-09</td><td className="text-right">14.298</td><td className="text-right">22.302</td><td className="text-right font-bold text-teal-700">8.004</td></tr>
              <tr><td className="p-2">2025-10</td><td className="text-right">13.337</td><td className="text-right">22.116</td><td className="text-right font-bold text-teal-700">8.779</td></tr>
              <tr><td className="p-2">2025-11</td><td className="text-right">18.926</td><td className="text-right">23.915</td><td className="text-right font-bold text-teal-700">4.989</td></tr>
              <tr><td className="p-2">2025-12</td><td className="text-right">32.488</td><td className="text-right">33.043</td><td className="text-right font-bold text-teal-700">0.555</td></tr>
              <tr className="bg-zinc-50 font-bold border-t border-zinc-300">
                <td className="p-2">Simple Mean</td>
                <td className="text-right">21.042</td>
                <td className="text-right">27.182</td>
                <td className="text-right text-teal-800">6.140</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Annex C: API, Code and Configuration Reference */}
      <section id="annex-c" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Annex C</span>
            <span>API, Code and Configuration Reference</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">ANNEXES</span>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-zinc-900 font-mono">
            Listing C.2 — Scientific Test Assertions (Arithmetic Invariants)
          </div>
          <CodeBlock
            filename="tests/test_scientific_invariants.py"
            language="python"
            code={`from math import isclose

# Internal model outputs (demonstrating exact numerical consistency)
assert isclose(455.8 - 362.4, 93.4)
assert isclose(455.8 - 241.0, 214.8)
assert isclose(93.4 * 10, 934.0)                     # mm * (m3 / ha / mm)
assert isclose(100 * (93.4 / 455.8), 20.4914, abs_tol=0.001)
assert isclose(10_000 * 5 * 0.30, 15_000)            # 15,000 ha adopted
assert isclose(15_000 * 93.4 * 10, 14_010_000)       # 14.01M m3 ET-equivalent
assert isclose(15_000 * 0.35 * 50 * 10, 2_625_000)   # 2.625M m3 hypothetical irrigation`}
          />
        </div>
      </section>

      {/* Annex D & E: Agronomic Parameters & Model Comparison Tables */}
      <section id="annex-d-e" className="space-y-6 scroll-mt-20">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Annex D &amp; E</span>
              <span>Agronomic Parameters &amp; Results Tables</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">ANNEXES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <div className="font-bold text-xs text-zinc-900 mb-2 font-mono">
                Table E.1 — Two Internally Documented Model Runs
              </div>
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-500 text-[11px]">
                    <th className="text-left pb-1">Plan</th>
                    <th className="text-right pb-1">Earlier (mm/cycle)</th>
                    <th className="text-right pb-1">Revised (mm/yr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-800">
                  <tr><td>Monoculture</td><td className="text-right">440.0</td><td className="text-right font-bold">455.8</td></tr>
                  <tr><td>Diversified</td><td className="text-right">345.0</td><td className="text-right font-bold text-teal-700">362.4</td></tr>
                  <tr><td>Conservation</td><td className="text-right">285.0</td><td className="text-right font-bold text-emerald-700">241.0</td></tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <div className="font-bold text-xs text-zinc-900 mb-2 font-mono">
                Table D.2 — Soil &amp; Farming Categories (Meknes / Saïss)
              </div>
              <ul className="text-xs text-zinc-700 space-y-1 list-disc pl-4">
                <li><strong>Soil Textures:</strong> <em>Tirs</em> (vertisol), <em>Hamri</em> (calcic red), Calcareous, Sandy.</li>
                <li><strong>Irrigation:</strong> Rainfed (0 mm), Supplemental (75 mm allowance), Irrigated (220 mm allowance).</li>
                <li><strong>Readily Available Fraction:</strong> p = 0.40 (crop threshold).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Annex H: Complete Glossary and Acronyms */}
      <section id="annex-h" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Annex H</span>
            <span>Glossary and Acronyms</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">ANNEXES</span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-2.5">Term</th>
                <th className="text-left p-2.5">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-700">
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">AI</td><td className="p-2.5">Artificial intelligence; used for explanation and analytical coordination</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">API</td><td className="p-2.5">Application programming interface</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">CMR</td><td className="p-2.5">NASA Common Metadata Repository, dataset/granule discovery</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">EARTH TRIALS</td><td className="p-2.5">Farmer Eye&apos;s virtual agricultural experiment suite</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">ET₀</td><td className="p-2.5">Reference evapotranspiration (Penman-Monteith, FAO-56)</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">ETc</td><td className="p-2.5">Crop evapotranspiration under standard conditions</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">ETa</td><td className="p-2.5">Actual evapotranspiration, potentially reduced by water stress</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">FAO-56</td><td className="p-2.5">FAO Irrigation and Drainage Paper 56, crop-water methodology</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">GEE</td><td className="p-2.5">Google Earth Engine platform</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">Kc</td><td className="p-2.5">Crop coefficient</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">NASA POWER</td><td className="p-2.5">Prediction Of Worldwide Energy Resources; climate and solar data services</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">SMAP</td><td className="p-2.5">Soil Moisture Active Passive mission</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">SPL4SMGP</td><td className="p-2.5">SMAP L4 global surface/root-zone moisture data product</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">VWC</td><td className="p-2.5">Volumetric water content, m³/m³</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">Impact 2030</td><td className="p-2.5">Prospective conditional scaling model, not realized deployment</td></tr>
              <tr><td className="p-2.5 font-bold font-mono text-zinc-900">Saïss</td><td className="p-2.5">Moroccan agricultural reference landscape around Fès / Meknes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Annex I & Conclusion */}
      <section id="conclusion-section" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Conclusion</span>
            <span>Formal Dossier Conclusion</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">FINALE</span>
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-3 text-sm text-zinc-700 leading-relaxed">
          <p>
            Farmer Eye’s substantive contribution is an implemented prototype workflow linking NASA environmental information with comparative agricultural modeling and AI-assisted explanations. <strong>EARTH TRIALS</strong> makes options inspectable before a farmer commits to a real management decision. The internally reported Meknes comparisons offer concrete numerical model results and valid mathematical volume conversions; they remain simulated demand differences, not demonstrated water or income savings.
          </p>
          <p>
            The scientific standard for the next stage is clear: maintain reproducible data provenance, document every agronomic assumption, test against appropriate local observations, and distinguish future adoption scenarios from measured outcomes. This is how <strong>&ldquo;The Farmer’s Second Eyes&rdquo;</strong> can be presented as a credible scientific ambition rather than an unsupported promise.
          </p>
        </div>

        {/* Bibliography */}
        <div className="pt-4 space-y-2">
          <h3 className="text-xs font-bold text-zinc-900 uppercase font-mono tracking-wider">
            Bibliography &amp; Citations [1–14]
          </h3>
          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2 text-xs text-zinc-600 font-sans">
            <div>[1] <strong>NASA POWER</strong>, Daily API – Solar and Meteorological Time Series. <span className="font-mono text-teal-700">power.larc.nasa.gov</span></div>
            <div>[2] <strong>NASA/NSIDC &amp; GEE</strong>, SMAP L4 SPL4SMGP Version 8: Global 3-hourly 9 km Surface and Root Zone Soil Moisture. DOI: 10.5067/T5RUATAQREF8</div>
            <div>[3] <strong>Allen, R. G., et al. (1998)</strong>, Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements. FAO Irrigation and Drainage Paper 56.</div>
            <div>[4] <strong>FAO-56, Chapter 8</strong> – ETc under Soil Water Stress Conditions and Root-Zone Water Balance.</div>
            <div>[5] <strong>FAO</strong>, Agricultural Water Management – Water Scarcity.</div>
            <div>[6] <strong>FAO (2025)</strong>, Disasters cost global agriculture USD 3.26 trillion over three decades. DOI: 10.4060/cd7185en.</div>
            <div>[7] <strong>Mudare et al. (2025)</strong>, Crop rotations synergize yield, nutrition, and revenue: a meta-analysis, Nature Communications.</div>
            <div>[8] <strong>United Nations</strong>, 2030 Agenda for Sustainable Development (SDGs).</div>
            <div>[9] <strong>DEVUPWARD / FIELDShift AI</strong> (Nov 2026), Comprehensive Repository Analysis: NASA Climate Data &amp; Earth Observation Service.</div>
            <div>[10] <strong>DEVUPWARD / FIELDShift AI</strong> (Nov 2026), NASA SMAP Level-4 Integration &amp; Interactive Explorer Report.</div>
            <div>[11] <strong>DEVUPWARD / FIELDShift AI</strong> (14 Nov 2026), EARTH TRIALS – Scientific Validation &amp; Algorithmic Audit Report.</div>
            <div>[12] <strong>DEVUPWARD / FIELDShift AI</strong> (14 Nov 2026), IMPACT 2030: Perspectives economiques, hydriques, sociales et environnementales.</div>
            <div>[13] <strong>DEVUPWARD internal Meknes demonstration (2026)</strong>, Revised 2024/2025 modeled ET demand comparison (455.8, 362.4, 241.0 mm/year).</div>
            <div>[14] <strong>Project-provided tabular chart export</strong>, ee-chart.csv, 2025 month-level Surface (0–5 cm) and Root Zone (0–100 cm).</div>
          </div>
        </div>
      </section>
    </div>
  );
}
