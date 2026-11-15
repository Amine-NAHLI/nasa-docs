"use client";

import React, { useState, useEffect } from "react";
import { DocsHeader } from "@/components/layout/DocsHeader";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { useDocsContext } from "@/context/DocsContext";
import { getChapterById, getDossierNavigation } from "@/data/dossier-pages";
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
import {
  Esp32HardwareChapterView,
  SoilMoistureSensorsChapterView,
  WiringAndFirmwareChapterView,
  SensorCalibrationChapterView,
  IotTelemetryChapterView,
  SmapVsGroundSensorsChapterView,
  HardwareValidationChapterView,
  PhysicalSoilLabChapterView,
} from "@/components/docs/chapters/IotChapterViews";
import { BusinessPlanChapterView } from "@/components/docs/chapters/BusinessPlanChapterView";
import Image from "next/image";
import { ChevronRight, ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function DocsPage() {
  const [activeChapterId, setActiveChapterId] = useState<string>("overview");
  const [activeSubChapterId, setActiveSubChapterId] = useState<string | undefined>("evidence-policy");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const navigation = getDossierNavigation(lang);

  const currentChapter =
    getChapterById(activeChapterId, lang) || getChapterById("overview", lang)!;

  // Resolve current active sub-chapter ID (defaulting to the first sub-chapter if unset or mismatched)
  const effectiveSubChapterId =
    currentChapter.subChapters.find((s) => s.id === activeSubChapterId)?.id ||
    currentChapter.subChapters[0]?.id;

  const currentSubChapter = currentChapter.subChapters.find(
    (s) => s.id === effectiveSubChapterId
  ) || currentChapter.subChapters[0];

  // Deep-linking: listen to URL hash on mount or hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setActiveChapterId("overview");
        setActiveSubChapterId("evidence-policy");
        return;
      }

      for (const cat of navigation) {
        for (const ch of cat.chapters) {
          const foundSub = ch.subChapters.find((s) => s.id === hash);
          if (foundSub) {
            setActiveChapterId(ch.id);
            setActiveSubChapterId(foundSub.id);
            return;
          }
          if (ch.id === hash) {
            setActiveChapterId(ch.id);
            setActiveSubChapterId(ch.subChapters[0]?.id);
            return;
          }
        }
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, [navigation]);

  const handleSelectChapter = (chapterId: string, subChapterId?: string) => {
    const targetChapter = getChapterById(chapterId, lang);
    const targetSubId = subChapterId || targetChapter?.subChapters[0]?.id;

    setActiveChapterId(chapterId);
    setActiveSubChapterId(targetSubId);
    setMobileMenuOpen(false);

    if (targetSubId) {
      window.history.pushState(null, "", `#${targetSubId}`);
    } else {
      window.history.pushState(null, "", `#${chapterId}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build a flat list of all sub-chapters in order for linear sequential pagination
  const flatSubChapters = React.useMemo(() => {
    return navigation.flatMap((cat) =>
      cat.chapters.flatMap((ch) =>
        ch.subChapters.map((sub) => ({
          chapterId: ch.id,
          chapterTitle: ch.title,
          subChapterId: sub.id,
          subChapterTitle: sub.title,
          badge: ch.badge,
        }))
      )
    );
  }, [navigation]);

  const currentIndex = flatSubChapters.findIndex(
    (item) =>
      item.chapterId === activeChapterId &&
      item.subChapterId === effectiveSubChapterId
  );

  const prevItem = currentIndex > 0 ? flatSubChapters[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < flatSubChapters.length - 1
      ? flatSubChapters[currentIndex + 1]
      : null;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors">
      {/* ─── 1. Fixed Top Header ────────────────────────────────────────────── */}
      <DocsHeader onOpenMobileNav={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* ─── Mobile Slide-over Navigation Drawer (Phones & Tablets) ────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-background border-r border-border shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-200">
            {/* Drawer Top Header with Brand and Close Button */}
            <div className="h-14 border-b border-border/70 px-4 flex items-center justify-between shrink-0 bg-muted/20">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/Logo_Farmer_Eye__œil_agricole_coloré-removebg-preview.png"
                  alt="Farmer Eye Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="font-semibold text-sm tracking-tight text-foreground">
                  Farmer Eye <span className="text-muted-foreground font-normal text-xs">/ Docs</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                aria-label={isEn ? "Close menu" : "Fermer le menu"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Navigation */}
            <div className="flex-1 overflow-y-auto px-2 py-4">
              <DocsSidebar
                activeChapterId={activeChapterId}
                activeSubChapterId={effectiveSubChapterId}
                onSelectChapter={handleSelectChapter}
                onItemClick={() => setMobileMenuOpen(false)}
                className="w-full border-none p-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* ─── 2. Main 2-Column Centralized Container ─────────────────────────── */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex items-start">
        {/* Left Column: Fixed Sticky Docs Sidebar with Accordion (Desktop >= 1024px) */}
        <div className="hidden lg:block shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] self-start">
          <DocsSidebar
            activeChapterId={activeChapterId}
            activeSubChapterId={effectiveSubChapterId}
            onSelectChapter={handleSelectChapter}
            className="h-full w-64 xl:w-72"
          />
        </div>

        {/* Center Column: Typography-First Document Body (Single Sub-Chapter View) */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-10 max-w-4xl mx-auto w-full">
          {/* Breadcrumbs: Docs / Category / Chapter / Sub-Chapter */}
          <nav className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-muted-foreground mb-4 sm:mb-6 select-none" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => handleSelectChapter("overview")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Docs
            </button>
            <span className="text-muted-foreground/30 font-mono text-xs select-none">/</span>
            <span className="truncate opacity-75">{currentChapter.category}</span>
            <span className="text-muted-foreground/30 font-mono text-xs select-none">/</span>
            <button
              type="button"
              onClick={() => handleSelectChapter(currentChapter.id)}
              className="hover:text-foreground transition-colors cursor-pointer truncate max-w-[140px] sm:max-w-none"
            >
              {currentChapter.title}
            </button>
            {currentSubChapter && (
              <>
                <span className="text-muted-foreground/30 font-mono text-xs select-none">/</span>
                <span className="text-foreground font-medium truncate max-w-[160px] sm:max-w-none">
                  {currentSubChapter.title}
                </span>
              </>
            )}
          </nav>

          {/* Sub-Chapter Main Title Header */}
          <header className="space-y-2 sm:space-y-3 pb-6 sm:pb-8 border-b border-border/60 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              {currentChapter.badge && (
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-muted text-foreground border border-border/80 font-medium">
                  {currentChapter.badge}
                </span>
              )}
              <span className="text-[11px] sm:text-xs font-mono text-muted-foreground">
                NASA Space Apps Challenge 2026 — DEVUPWARD
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {currentSubChapter ? currentSubChapter.title : currentChapter.title}
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
              {currentChapter.description}
            </p>
          </header>

          {/* Sub-Chapter Content: Displays ONLY the active sub-chapter! */}
          <div className="w-full">
            {activeChapterId === "overview" && (
              <OverviewChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "why-farmer-eye" && (
              <WhyFarmerEyeChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "nasa-power" && (
              <NasaPowerChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "nasa-smap" && (
              <NasaSmapChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "architecture-pipeline" && (
              <ArchitecturePipelineChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "esp32-hardware" && (
              <Esp32HardwareChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "soil-moisture-sensors" && (
              <SoilMoistureSensorsChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "wiring-and-firmware" && (
              <WiringAndFirmwareChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "sensor-calibration" && (
              <SensorCalibrationChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "iot-telemetry" && (
              <IotTelemetryChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "smap-vs-ground-sensors" && (
              <SmapVsGroundSensorsChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "hardware-validation" && (
              <HardwareValidationChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "fao-56-et0" && (
              <Fao56Et0ChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "etc-crop-water" && (
              <EtcCropWaterChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "crop-battle-lab" && (
              <CropBattleLabChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "climate-attack-lab" && (
              <ClimateAttackLabChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "farm-time-machine" && (
              <FarmTimeMachineChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "physical-soil-lab" && (
              <PhysicalSoilLabChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "ai-architecture" && (
              <AiArchitectureChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "ai-scientific-tribunal" && (
              <AiScientificTribunalChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "meknes-reference-case" && (
              <MeknesReferenceCaseChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "impact-2030" && (
              <Impact2030ChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "business-plan" && (
              <BusinessPlanChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
            {activeChapterId === "annexes" && (
              <AnnexesChapterView activeSubChapterId={effectiveSubChapterId} />
            )}
          </div>

          {/* Bottom Pagination Links (Sequential Sub-Chapter Previous / Next) */}
          <div className="mt-10 pt-6 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevItem ? (
              <button
                type="button"
                onClick={() => handleSelectChapter(prevItem.chapterId, prevItem.subChapterId)}
                className="p-4 rounded-md border border-border/70 hover:border-foreground/30 hover:bg-muted/30 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>{isEn ? "Previous" : "Précédent"}</span>
                  <span className="opacity-40">·</span>
                  <span className="text-[11px] truncate opacity-80">{prevItem.chapterTitle}</span>
                </div>
                <div className="font-medium text-sm text-foreground mt-1 truncate">
                  {prevItem.subChapterTitle}
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextItem && (
              <button
                type="button"
                onClick={() => handleSelectChapter(nextItem.chapterId, nextItem.subChapterId)}
                className="p-4 rounded-md border border-border/70 hover:border-foreground/30 hover:bg-muted/30 transition-all text-right group cursor-pointer"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors font-mono">
                  <span className="text-[11px] truncate opacity-80">{nextItem.chapterTitle}</span>
                  <span className="opacity-40">·</span>
                  <span>{isEn ? "Next" : "Suivant"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <div className="font-medium text-sm text-foreground mt-1 truncate">
                  {nextItem.subChapterTitle}
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
