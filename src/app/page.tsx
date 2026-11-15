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
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors">
      {/* ─── 1. Fixed Top Header ────────────────────────────────────────────── */}
      <DocsHeader onOpenMobileNav={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* ─── 2. Main 2-Column Centralized Container ─────────────────────────── */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex items-start">
        {/* Left Column: Fixed Sticky Docs Sidebar */}
        <div
          className={cn(
            "lg:block shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] self-start",
            mobileMenuOpen
              ? "fixed inset-0 z-50 bg-background p-4 block"
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

        {/* Center Column: Typography-First Document Body ───────────────────── */}
        <main className="flex-1 min-w-0 px-6 sm:px-12 lg:px-16 py-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-6 select-none">
            <button
              type="button"
              onClick={() => handleSelectChapter("overview")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Docs
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span>{currentChapter.category}</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-foreground font-medium">
              {currentChapter.title}
            </span>
          </nav>

          {/* Chapter Main Title Header */}
          <header className="space-y-3 pb-8 border-b border-border/60 mb-10">
            <div className="flex items-center gap-2">
              {currentChapter.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-muted text-foreground border border-border/80 font-medium">
                  {currentChapter.badge}
                </span>
              )}
              <span className="text-xs font-mono text-muted-foreground">
                NASA Space Apps Challenge 2026 — DEVUPWARD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              {currentChapter.title}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed pt-1">
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

          {/* Bottom Pagination Links (Previous / Next) */}
          <div className="mt-16 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevChapter ? (
              <button
                type="button"
                onClick={() => handleSelectChapter(prevChapter.id)}
                className="p-4 rounded-md border border-border/70 hover:border-foreground/30 hover:bg-muted/30 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>{isEn ? "Previous" : "Précédent"}</span>
                </div>
                <div className="font-medium text-sm text-foreground mt-1">
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
                className="p-4 rounded-md border border-border/70 hover:border-foreground/30 hover:bg-muted/30 transition-all text-right group cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                  <span>{isEn ? "Next" : "Suivant"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium text-sm text-foreground mt-1">
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
