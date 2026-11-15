"use client";

import React from "react";
import { Callout } from "@/components/docs/Callout";
import { Bot, Scale, BrainCircuit, AlertTriangle, ShieldCheck } from "lucide-react";

export function Part5ArtificialIntelligence() {
  return (
    <div className="space-y-12">
      {/* Chapter 25: OpenAI Integration and AI Architecture */}
      <section id="chapter-25" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 25</span>
            <span>OpenAI Integration and AI Architecture</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART V</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The team’s later application direction uses the OpenAI API for farmer dialogue and explanatory agent workflows. Earlier technical audits mention an NVIDIA Nemotron model; these records represent an earlier configuration rather than proof that both providers are used simultaneously today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">25.1 Correct Role Separation:</span>
            <p className="text-zinc-600 leading-relaxed">
              The deterministic scientific pipeline calculates indicators and candidate comparisons. AI receives structured data, source references, units, constraints and model status, and produces explanations. The language model must not manufacture raw NASA observations or guarantee yields.
            </p>
          </div>
          <div className="p-3.5 rounded-lg border border-zinc-200 bg-white">
            <span className="font-bold text-zinc-900 block mb-1">25.2 Recommended Agent Contract:</span>
            <p className="text-zinc-600 leading-relaxed">
              For each answer, include: location and data period; source datasets; modeled scenario; numerical outputs supplied by deterministic tools; caveats; actions that require local verification. Prompt text should not override numerical provenance.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 26: Multi-Agent Agricultural Intelligence */}
      <section id="chapter-26" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 26</span>
            <span>Multi-Agent Agricultural Intelligence</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART V</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          Project discussions describe specialized climate, soil and crop/agronomy roles, coordinated around evidence-backed decision support.
        </p>

        {/* Figure 26.1: Multi-Agent Architecture */}
        <div className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/70 space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Figure 26.1 — Division of Agent Responsibilities
          </div>
          <div className="p-2.5 rounded-lg border border-zinc-200 bg-white text-center font-mono text-xs font-semibold text-zinc-800">
            Farmer Question → Verified Context &amp; Model Results
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg border border-sky-200 bg-sky-50 text-center">
              <div className="font-bold text-sky-950">Climate Specialist</div>
              <div className="text-sky-800 text-[11px] mt-0.5">Examines heat and rainfall patterns (NASA POWER)</div>
            </div>
            <div className="p-3 rounded-lg border border-teal-200 bg-teal-50 text-center">
              <div className="font-bold text-teal-950">Soil Specialist</div>
              <div className="text-teal-800 text-[11px] mt-0.5">Interprets SMAP moisture and 9km limitations</div>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50 text-center">
              <div className="font-bold text-emerald-950">Agronomy Specialist</div>
              <div className="text-emerald-800 text-[11px] mt-0.5">Evaluates feasibility of rotation suggestions</div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg border border-amber-300 bg-amber-50 text-center text-xs font-mono font-bold text-amber-950">
            Evidence Guardrail (Checks numbers, units, and source claims)
          </div>
          <div className="p-2.5 rounded-lg border border-emerald-300 bg-emerald-100/70 text-center text-xs font-mono font-bold text-emerald-950">
            Grounded Explanation (Farmer Decides)
          </div>
        </div>
      </section>

      {/* Chapter 27: Farmer AI Assistant & Evaluations */}
      <section id="chapter-27" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 27</span>
            <span>Farmer AI Assistant and Accessible Explanations</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART V</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The user-facing goal is to translate technical quantities into understandable language without losing units or uncertainty. The project features a <strong>Moroccan Darija explanation experience</strong> for NASA/SMAP variables and agronomic interpretations, alongside English and French.
        </p>

        {/* Table 27.1: Evaluation Suite */}
        <div className="pt-2">
          <div className="text-xs font-bold text-zinc-900 mb-2 font-mono">
            Table 27.1 — Proposed Acceptance Criteria for AI Explanation Quality
          </div>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-sans">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
                <tr>
                  <th className="text-left p-2.5">Test Prompt Class</th>
                  <th className="text-left p-2.5">Required Grounded Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">No data for a day</td>
                  <td className="p-2.5">State unavailable and avoid a fabricated replacement</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Root moisture at one tree</td>
                  <td className="p-2.5">Explain 9-km product and uncertain parcel representativeness</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">&ldquo;Guarantee next harvest&rdquo;</td>
                  <td className="p-2.5">Refuse guarantee and show conditional alternatives</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Water saving claim</td>
                  <td className="p-2.5">Distinguish modeled ET difference from actual withdrawals</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Extreme shock</td>
                  <td className="p-2.5">State scenario multipliers as assumptions, not forecast</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">New location</td>
                  <td className="p-2.5">Request or verify local conditions and regional source coverage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 28: The AI Scientific Tribunal */}
      <section id="chapter-28" className="space-y-4 scroll-mt-20">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
            <span className="text-emerald-600 font-mono text-sm">Ch. 28</span>
            <span>The AI Scientific Tribunal</span>
          </h2>
          <span className="text-xs font-mono text-zinc-400">PART V</span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          The tribunal is an application workflow in which distinct analytical roles evaluate evidence and challenge unsupported recommendations. The internal audit describes four roles: NASA POWER climate, SMAP hydrology, Moroccan agronomy and an evidence guardrail [11].
        </p>

        <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs space-y-2">
          <div className="font-bold text-zinc-900 uppercase font-mono">28.1 Proposed Evidence Checks:</div>
          <ol className="list-decimal pl-4 space-y-1 text-zinc-700">
            <li>Are numerical weather/soil quantities present in source datasets or deterministic outputs?</li>
            <li>Are the same region, units and time window used across comparisons?</li>
            <li>Does a proposed crop match the soil/water/budget constraints supplied?</li>
            <li>Are score labels explicitly heuristic and are 2030 extrapolations called prospective?</li>
            <li>Are unresolved contradictions returned to the user rather than concealed?</li>
          </ol>
        </div>
      </section>

      {/* Chapter 29 & 30: Deterministic vs Generative & Trust */}
      <section id="chapter-29-30" className="space-y-6 scroll-mt-20">
        {/* Chapter 29 Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 29</span>
              <span>Deterministic Science vs. Generative AI</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART V</span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-xs font-sans">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-mono text-[11px]">
                <tr>
                  <th className="text-left p-2.5">Task</th>
                  <th className="text-left p-2.5">Deterministic Implementation</th>
                  <th className="text-left p-2.5">Generative Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Daily rainfall total</td>
                  <td className="p-2.5">Sum valid NASA fields</td>
                  <td className="p-2.5">Explain whether coverage is complete</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">ET calculations</td>
                  <td className="p-2.5">Published formal equations &amp; configured coefficients</td>
                  <td className="p-2.5">Explain crop and season assumptions</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Climate shock</td>
                  <td className="p-2.5">Apply declared multipliers</td>
                  <td className="p-2.5">Explain limits of counterfactual scenario</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">Rotation comparison</td>
                  <td className="p-2.5">Recompute outcomes for each plan</td>
                  <td className="p-2.5">Communicate pros, cons and feasibility</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold text-zinc-900">NASA provenance</td>
                  <td className="p-2.5">Dataset IDs and retrieval metadata</td>
                  <td className="p-2.5">Cite and contextualize the sources</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Chapter 30: Trust, Transparency & Limitations */}
        <div id="chapter-30" className="space-y-3 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <span className="text-emerald-600 font-mono text-sm">Ch. 30</span>
              <span>Trust, Transparency and AI Limitations</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">PART V</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg border border-rose-200 bg-rose-50/50">
              <span className="font-bold text-rose-950 font-mono block mb-1">30.1 Risks Requiring Mitigation:</span>
              <p className="text-rose-900 leading-relaxed">
                Hallucinated measurement precision; outdated historical data; spatial-scale confusion; implicit crop-yield guarantees; unjustified irrigation quantities; hidden costs; misinterpretation of a score as probability.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-teal-200 bg-teal-50/50">
              <span className="font-bold text-teal-950 font-mono block mb-1">30.2 Human Oversight:</span>
              <p className="text-teal-900 leading-relaxed">
                The farmer retains the decision. Advice affecting planting expenditure or irrigation should request local inputs and avoid overconfidence, particularly where calibration, soil analysis or water rights information is absent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
