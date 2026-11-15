"use client";

import React, { useState } from "react";
import { DocsHeader } from "@/components/layout/DocsHeader";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { useDocsContext } from "@/context/DocsContext";
import { getChapterById } from "@/data/dossier-pages";
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
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function DocsPage() {
  const [activeChapterId, setActiveChapterId] = useState<string>("why-farmer-eye");
  const [activeSubChapterId, setActiveSubChapterId] = useState<string | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const currentChapter =
    getChapterById(activeChapterId, lang) || getChapterById("why-farmer-eye", lang)!;

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

  const prevChapter = currentChapter.prevId
    ? getChapterById(currentChapter.prevId, lang)
    : undefined;
  const nextChapter = currentChapter.nextId
    ? getChapterById(currentChapter.nextId, lang)
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0C0D0E] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-900/40 dark:selection:text-emerald-300 transition-colors">
      {/* ─── 1. Fixed Top Header (Drizzle Style, 56px) ─────────────────────────── */}
      <DocsHeader onOpenMobileNav={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* ─── 2. Main 2-Column Centralized Container (No Right Sidebar) ─────────── */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex items-start">
        {/* Left Column: Fixed Sticky Docs Sidebar with Tree Rail (w-72 / 288px) */}
        <div
          className={cn(
            "lg:block shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] self-start",
            mobileMenuOpen
              ? "fixed inset-0 z-50 bg-white dark:bg-[#0C0D0E] p-4 block"
              : "hidden"
          )}
        >
          <DocsSidebar
            activeChapterId={activeChapterId}
            activeSubChapterId={activeSubChapterId}
            onSelectChapter={handleSelectChapter}
            onItemClick={() => setMobileMenuOpen(false)}
            className="h-full"
          />
        </div>

        {/* Center Column: Centralized Reading Experience (Max-W 860px) */}
        <main className="flex-1 min-w-0 px-6 sm:px-12 lg:px-20 py-10 max-w-4xl mx-auto">
          {/* Breadcrumbs (Drizzle Style) */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-6">
            <button
              type="button"
              onClick={() => handleSelectChapter("overview")}
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              Docs
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600" />
            <span className="text-zinc-500 dark:text-zinc-400">{currentChapter.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600" />
            <span className="text-zinc-900 dark:text-white font-semibold">
              {currentChapter.title}
            </span>
          </nav>

          {/* Chapter Main Title Header (Drizzle Style) */}
          <header className="space-y-3 pb-6 border-b border-zinc-200/80 dark:border-[#232529] mb-8">
            <div className="flex items-center gap-2">
              {currentChapter.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-zinc-100 dark:bg-[#1E2024] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-[#2E3138]">
                  {currentChapter.badge}
                </span>
              )}
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                NASA Space Apps Challenge 2026 — DEVUPWARD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {currentChapter.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              {currentChapter.description}
            </p>
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
          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-[#232529] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevChapter ? (
              <button
                type="button"
                onClick={() => handleSelectChapter(prevChapter.id)}
                className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/70 dark:hover:bg-[#1A1C20] transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>{isEn ? "Previous" : "Précédent"}</span>
                </div>
                <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mt-1">
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
                className="p-4 rounded-xl border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/70 dark:hover:bg-[#1A1C20] transition-all text-right group cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  <span>{isEn ? "Next" : "Suivant"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mt-1">
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
