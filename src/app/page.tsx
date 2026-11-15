"use client";

import React, { useState } from "react";
import { DocsHeader } from "@/components/layout/DocsHeader";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import {
  DOSSIER_NAVIGATION,
  getChapterById,
} from "@/data/dossier-pages";
import {
  OverviewChapterView,
  WhyFarmerEyeChapterView,
  NasaPowerChapterView,
  NasaSmapChapterView,
  ArchitecturePipelineChapterView,
  Fao56Et0ChapterView,
  EtcCropWaterChapterView,
  CropBattleLabChapterView,
  ClimateAttackLabChapterView,
  FarmTimeMachineChapterView,
  AiArchitectureChapterView,
  AiScientificTribunalChapterView,
  MeknesReferenceCaseChapterView,
  Impact2030ChapterView,
  AnnexesChapterView,
} from "@/components/docs/chapters/ChapterViews";
import { ChevronRight, ArrowLeft, ArrowRight, ListFilter } from "lucide-react";
import { cn } from "@/lib/utils";

export function DocsPage() {
  const [activeChapterId, setActiveChapterId] = useState<string>("why-farmer-eye");
  const [activeSubChapterId, setActiveSubChapterId] = useState<string | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentChapter = getChapterById(activeChapterId) || getChapterById("why-farmer-eye")!;

  const handleSelectChapter = (chapterId: string, subChapterId?: string) => {
    setActiveChapterId(chapterId);
    setActiveSubChapterId(subChapterId);
    setMobileMenuOpen(false);

    if (subChapterId) {
      setTimeout(() => {
        const el = document.getElementById(subChapterId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${subChapterId}`);
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevChapter = currentChapter.prevId ? getChapterById(currentChapter.prevId) : undefined;
  const nextChapter = currentChapter.nextId ? getChapterById(currentChapter.nextId) : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── 1. Fixed Top Header (Drizzle Style, 56px) ─────────────────────────── */}
      <DocsHeader onOpenMobileNav={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* ─── 2. Main 2-Column Centralized Container (No Right Sidebar) ─────────── */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex">
        {/* Left Column: Docs Sidebar with Tree Rail (280px / w-72) */}
        <div
          className={`lg:block shrink-0 ${
            mobileMenuOpen
              ? "fixed inset-0 z-50 bg-white p-4 block"
              : "hidden"
          }`}
        >
          <DocsSidebar
            activeChapterId={activeChapterId}
            activeSubChapterId={activeSubChapterId}
            onSelectChapter={handleSelectChapter}
            onItemClick={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* Center Column: Centralized Reading Experience (Max-W 860px) */}
        <main className="flex-1 min-w-0 px-6 sm:px-12 lg:px-20 py-10 max-w-4xl mx-auto">
          {/* Breadcrumbs (Drizzle Style) */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-6">
            <button
              type="button"
              onClick={() => handleSelectChapter("overview")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Docs
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-zinc-500">{currentChapter.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-zinc-900 font-semibold">{currentChapter.title}</span>
          </nav>

          {/* Chapter Main Title Header (Drizzle Style) */}
          <header className="space-y-3 pb-6 border-b border-zinc-200/80 mb-8">
            <div className="flex items-center gap-2">
              {currentChapter.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200">
                  {currentChapter.badge}
                </span>
              )}
              <span className="text-xs font-mono text-zinc-400">
                NASA Space Apps Challenge 2026 — DEVUPWARD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              {currentChapter.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              {currentChapter.description}
            </p>

            {/* Quick in-page sub-chapter jump links */}
            {currentChapter.subChapters && currentChapter.subChapters.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-500">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 flex items-center gap-1 mr-1">
                  <ListFilter className="h-3 w-3" />
                  Sections:
                </span>
                {currentChapter.subChapters.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => handleSelectChapter(currentChapter.id, sub.id)}
                    className="px-2 py-0.5 rounded bg-zinc-50 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200 text-[11.5px] transition-colors cursor-pointer"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </header>

          {/* Chapter Content Component */}
          <div className="min-h-[500px]">
            {activeChapterId === "overview" && <OverviewChapterView />}
            {activeChapterId === "why-farmer-eye" && <WhyFarmerEyeChapterView />}
            {activeChapterId === "nasa-power" && <NasaPowerChapterView />}
            {activeChapterId === "nasa-smap" && <NasaSmapChapterView />}
            {activeChapterId === "architecture-pipeline" && <ArchitecturePipelineChapterView />}
            {activeChapterId === "fao-56-et0" && <Fao56Et0ChapterView />}
            {activeChapterId === "etc-crop-water" && <EtcCropWaterChapterView />}
            {activeChapterId === "crop-battle-lab" && <CropBattleLabChapterView />}
            {activeChapterId === "climate-attack-lab" && <ClimateAttackLabChapterView />}
            {activeChapterId === "farm-time-machine" && <FarmTimeMachineChapterView />}
            {activeChapterId === "ai-architecture" && <AiArchitectureChapterView />}
            {activeChapterId === "ai-scientific-tribunal" && <AiScientificTribunalChapterView />}
            {activeChapterId === "meknes-reference-case" && <MeknesReferenceCaseChapterView />}
            {activeChapterId === "impact-2030" && <Impact2030ChapterView />}
            {activeChapterId === "annexes" && <AnnexesChapterView />}
          </div>

          {/* Bottom Pagination Links (Drizzle Style: Previous / Next) */}
          <div className="mt-16 pt-8 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevChapter ? (
              <button
                type="button"
                onClick={() => handleSelectChapter(prevChapter.id)}
                className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/70 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </div>
                <div className="font-semibold text-sm text-zinc-900 mt-1">
                  {prevChapter.title}
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextChapter && (
              <button
                type="button"
                onClick={() => handleSelectChapter(nextChapter.id)}
                className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/70 transition-all text-right group cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  <span>Next</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="font-semibold text-sm text-zinc-900 mt-1">
                  {nextChapter.title}
                </div>
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DocsPage;
