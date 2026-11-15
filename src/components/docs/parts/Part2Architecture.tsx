"use client";

import React from "react";
import { SmapMonthlyChart } from "@/components/docs/charts/DocsCharts";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";
import {
  Server,
  Database,
  Satellite,
  Layers,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function Part2Architecture() {
  return (
    <div className="space-y-12">
      {/* Chapter 7: Complete System Architecture */}
      <section id="chapter-7" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 7</span>
            <span>Complete System Architecture</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART II</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The historical science application uses the following logical organization: user inputs and location, NASA data clients, normalization/quality controls, scientific calculations, scenario evaluation and an AI interpretation layer. Data export and the user interface consume structured outputs. The separate documentation website is written with Next.js/TypeScript.
        </p>

        {/* Figure 7.1: Logical Architecture Diagram */}
        <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Figure 7.1 — Logical Components &amp; Architecture
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white shadow-2xs">
              <div className="font-bold text-zinc-900">Farmer / Research User</div>
              <div className="text-zinc-500 mt-1">Location, crop constraints, farm management options</div>
            </div>
            <div className="p-3.5 rounded-lg border border-teal-200 bg-teal-50/60 shadow-2xs">
              <div className="font-bold text-teal-950">Application API (FastAPI)</div>
              <div className="text-teal-800 mt-1">Python, Pydantic, deterministic data handling</div>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white shadow-2xs">
              <div className="font-bold text-zinc-900">Dashboard &amp; Exports</div>
              <div className="text-zinc-500 mt-1">Evidence displays, advice, CSV/JSON exports</div>
            </div>
            <div className="p-3.5 rounded-lg border border-sky-200 bg-sky-50/60 shadow-2xs">
              <div className="font-bold text-sky-950">NASA POWER &amp; SMAP</div>
              <div className="text-sky-800 mt-1">Time series, L4 GEE grids, metadata cache</div>
            </div>
            <div className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/60 shadow-2xs">
              <div className="font-bold text-emerald-950">Agronomic Engine</div>
              <div className="text-emerald-800 mt-1">ET0, ETc, water balance simulations and rules</div>
            </div>
            <div className="p-3.5 rounded-lg border border-purple-200 bg-purple-50/60 shadow-2xs">
              <div className="font-bold text-purple-950">AI Interpretation</div>
              <div className="text-purple-800 mt-1">Tribunal / multi-agent grounded explanations</div>
            </div>
          </div>
        </div>

        {/* 7.3 End-to-End Pipeline Trace */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-2 font-mono">
            7.3 End-to-End Functional Request Trace (Figure 7.2)
          </h3>
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
        </div>

        {/* 7.4 Trust Boundaries */}
        <div className="pt-2 space-y-2">
          <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-mono">
            7.4 Trust Boundaries
          </h3>
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
        </div>
      </section>

      {/* Chapter 8: Technologies and Development Stack */}
      <section id="chapter-8" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 8</span>
            <span>Technologies and Development Stack</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART II</span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full text-xs font-sans">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
              <tr>
                <th className="text-left p-3">Layer</th>
                <th className="text-left p-3">Reported Technology and Function</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-800">
              <tr>
                <td className="p-3 font-semibold">Science service</td>
                <td className="p-3 text-zinc-600">Python, FastAPI, Pydantic, HTTPX, Pandas; API and deterministic data handling</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">SMAP analysis</td>
                <td className="p-3 text-zinc-600">Google Earth Engine Python API; image collection selection and reduction</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Climate data</td>
                <td className="p-3 text-zinc-600">NASA POWER public Daily Point API; local normalization and caches</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AI explanation</td>
                <td className="p-3 text-zinc-600">OpenAI API in later team configuration; earlier experiments used NVIDIA Nemotron</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Exports</td>
                <td className="p-3 text-zinc-600">JSON/CSV/spreadsheet results; format support depends on endpoint/version</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Documentation site</td>
                <td className="p-3 text-zinc-600">Next.js App Router, TypeScript, Tailwind CSS, MDX, Motion</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Testing</td>
                <td className="p-3 text-zinc-600">Pytest in science service; TypeScript, ESLint and production build in docs site</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 8.1: Historical Module Responsibilities */}
        <div className="pt-2">
          <div className="text-xs font-bold text-zinc-900 mb-2 font-mono">
            Table 8.1 — Selected Historical Source-Code Responsibilities (FastAPI)
          </div>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-mono">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
                <tr>
                  <th className="text-left p-2.5">Historical Module</th>
                  <th className="text-left p-2.5">Responsibility in Reported FastAPI Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/api/climate.py</td>
                  <td className="p-2.5">Daily series, derived summary, export controllers</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/services/nasa_power.py</td>
                  <td className="p-2.5">Daily point request, upstream response and cache</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/services/climate_analyzer.py</td>
                  <td className="p-2.5">Missing-value handling and deterministic summaries</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/services/geocoding.py</td>
                  <td className="p-2.5">Named place resolution through Nominatim</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/api/agro.py</td>
                  <td className="p-2.5">Deterministic agronomic advisory entry point</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">app/api/smap.py</td>
                  <td className="p-2.5">CMR catalogue/granule discovery in early service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 9: NASA POWER: Climate Intelligence */}
      <section id="chapter-9" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 9</span>
            <span>NASA POWER: Climate Intelligence</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART II</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The NASA Prediction Of Worldwide Energy Resources (POWER) service provides analysis-ready daily weather and solar information through a public API [1]. The project’s repository analysis describes a point request under the agroclimatology community (AG) and local solar time (LST).
        </p>

        {/* Table 9.1: Seven NASA POWER Parameters */}
        <div className="text-xs font-bold text-zinc-900 mb-1 font-mono">
          Table 9.1 — Seven NASA POWER Parameters Identified in Project Service
        </div>
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
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">T2M</td>
                <td className="p-2.5">Daily mean 2-m air temperature</td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">T2M_MAX</td>
                <td className="p-2.5">Maximum daily air temperature</td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">T2M_MIN</td>
                <td className="p-2.5">Minimum daily air temperature</td>
                <td className="p-2.5 text-right">°C</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">PRECTOTCORR</td>
                <td className="p-2.5">Corrected daily precipitation</td>
                <td className="p-2.5 text-right">mm/day</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">RH2M</td>
                <td className="p-2.5">2-m relative humidity</td>
                <td className="p-2.5 text-right">%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">WS2M</td>
                <td className="p-2.5">2-m wind speed</td>
                <td className="p-2.5 text-right">m/s</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-emerald-700">ALLSKY_SFC_SW_DWN</td>
                <td className="p-2.5">All-sky surface shortwave radiation</td>
                <td className="p-2.5 text-right">MJ/m²/day</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <h4 className="font-bold text-xs text-zinc-900 mb-1">9.1 Quality Handling</h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              The service reads the response’s declared missing-data marker (commonly −999), converts missing values to null, tracks coverage and does not interpolate missing weather days in its reported analysis [9].
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <h4 className="font-bold text-xs text-zinc-900 mb-1">9.2 Data Quality &amp; Missingness Formula</h4>
            <p className="text-xs text-zinc-600 leading-relaxed mb-1.5">
              Practical coverage statistic formula:
            </p>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-200 font-mono text-center text-xs text-zinc-800">
              C = 100 × (n_valid / n_expected) [%]
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              For 31-day month with 29 valid days: C = 100(29/31) = 93.55%.
            </p>
          </div>
        </div>

        {/* Listing 9.1: API Request */}
        <div className="pt-2">
          <div className="text-xs font-bold text-zinc-900 mb-1 font-mono">
            Listing 9.1 — NASA POWER API Query Structure
          </div>
          <CodeBlock
            filename="nasa_power_request.sh"
            language="bash"
            code={`https://power.larc.nasa.gov/api/temporal/daily/point?\\
parameters=T2M,T2M_MAX,T2M_MIN,PRECTOTCORR,RH2M,WS2M,ALLSKY_SFC_SW_DWN&\\
community=AG&longitude=-5.5516&latitude=33.8938&\\
start=20250101&end=20250131&format=JSON`}
          />
        </div>
      </section>

      {/* Chapter 10: NASA SMAP: Soil Moisture Intelligence */}
      <section id="chapter-10" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 10</span>
            <span>NASA SMAP: Soil Moisture Intelligence</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART II</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The Soil Moisture Active Passive (SMAP) Level-4 product combines microwave observations and land-surface modeling to estimate soil conditions. Farmer Eye uses Google Earth Engine collection <code>NASA/SMAP/SPL4SMGP/008</code> (3-hourly, nominally 9 km EASE-Grid; approximately 11-km nominal pixel size in GEE) [2, 10].
        </p>

        {/* SMAP Fields Table */}
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
              <tr>
                <td className="p-2.5 font-bold text-teal-700">sm_surface</td>
                <td className="p-2.5">Surface soil moisture, approximately 0–5 cm</td>
                <td className="p-2.5 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-teal-700">sm_rootzone</td>
                <td className="p-2.5">Root-zone soil moisture, approximately 0–100 cm</td>
                <td className="p-2.5 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-teal-700">sm_profile</td>
                <td className="p-2.5">Profile to model bedrock depth</td>
                <td className="p-2.5 text-right">m³/m³</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-teal-700">sm_surface_wetness</td>
                <td className="p-2.5">Surface relative wetness</td>
                <td className="p-2.5 text-right">dimensionless</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-teal-700">sm_rootzone_wetness</td>
                <td className="p-2.5">Root-zone relative wetness</td>
                <td className="p-2.5 text-right">dimensionless</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs">
          <strong>10.1 Source Extraction Example (January 2025 around Meknes):</strong>
          <span className="font-mono text-zinc-700 ml-1">
            surface-moisture estimate = <strong>0.2109277844 m³/m³</strong>, root-zone moisture = <strong>0.2572526634 m³/m³</strong> [10].
          </span>
        </div>

        {/* 10.2 Twelve-Month Chart from ee-chart.csv */}
        <div className="pt-2">
          <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-mono mb-1">
            10.2 Twelve-Month Chart from Supplied Earth Engine Export
          </h3>
          <p className="text-xs text-zinc-600 mb-2">
            Figure 10.1: The 2025 monthly series exactly as recorded in <code>ee-chart.csv</code>:
          </p>
          <SmapMonthlyChart />
        </div>
      </section>

      {/* Chapter 11, 12, 13: Pipeline, Endpoints, Spatial Resolution */}
      <section id="chapter-11-13" className="space-y-6 scroll-mt-20">
        {/* Chapter 11 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 11</span>
              <span>NASA Data Acquisition and Processing Pipeline</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART II</span>
          </div>

          <p className="text-sm text-zinc-700 leading-relaxed">
            A typical request proceeds through geographic validation, geocoding (Nominatim), querying NASA POWER or SMAP collection, preserving source metadata, normalizing units and missing values, calculating derived indicators, and reporting coverage.
          </p>

          {/* Table 11.1: Minimum Metadata Contract */}
          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-sans">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
                <tr>
                  <th className="text-left p-2.5">Field</th>
                  <th className="text-left p-2.5">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Dataset ID and revision</td>
                  <td className="p-2.5">Avoid mixing distinct science products or algorithm revisions</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Lat/lon, region &amp; reduction</td>
                  <td className="p-2.5">Make the sampled area inspectable</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Start/end, time zone, timestamps</td>
                  <td className="p-2.5">Prevent calendar mismatch and temporal leakage</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Native &amp; delivered resolution</td>
                  <td className="p-2.5">Prevent false field-scale claims</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Unit, fill value, valid count</td>
                  <td className="p-2.5">Protect means and accumulations from hidden missingness</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Aggregation operator</td>
                  <td className="p-2.5">Explain why nearby extracts differ</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-semibold">Checksum</td>
                  <td className="p-2.5">Allow regression testing and reproducibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chapter 12: Historical Endpoints */}
        <div id="chapter-12" className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 12</span>
              <span>Data Structures, API Endpoints and Exports</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART II</span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-mono">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 text-[11px]">
                <tr>
                  <th className="text-left p-2.5">Endpoint</th>
                  <th className="text-left p-2.5">Documented Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /health</td>
                  <td className="p-2.5">Process and storage health check</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/climate</td>
                  <td className="p-2.5">Daily POWER observations and metadata</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/climate/summary</td>
                  <td className="p-2.5">Aggregated agronomic indicators, coverage and formulas</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/climate/export</td>
                  <td className="p-2.5">CSV output with blanks for absent values</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/smap</td>
                  <td className="p-2.5">CMR SMAP granule search metadata (not raster extraction)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/catalogue</td>
                  <td className="p-2.5">CMR metadata search for additional catalogued products</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-zinc-900">GET /api/agro</td>
                  <td className="p-2.5">Climate-driven deterministic agronomic advice and rotation steps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chapter 13: Four Levels of Reported Quantities */}
        <div id="chapter-13" className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 13</span>
              <span>Data Provenance, Coverage and Spatial Resolution</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART II</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <span className="font-bold text-zinc-900 font-mono block mb-1">1. Data-product values:</span>
              <p className="text-zinc-600">NASA POWER weather series or SMAP L4 model-assimilated soil moisture.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <span className="font-bold text-zinc-900 font-mono block mb-1">2. Derived values:</span>
              <p className="text-zinc-600">Sums, means, thresholds, evapotranspiration proxies and indicators computed from source series.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <span className="font-bold text-zinc-900 font-mono block mb-1">3. Agronomic assumptions:</span>
              <p className="text-zinc-600">Crop coefficients, season calendars, soil water capacity, management and climate shocks.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
              <span className="font-bold text-zinc-900 font-mono block mb-1">4. Synthetic scores &amp; projections:</span>
              <p className="text-zinc-600">Resilience indices, scenario rankings and rollout assumptions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
