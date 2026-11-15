"use client";

import React, { useState, useEffect } from "react";
import { getDossierNavigation } from "@/data/dossier-pages";
import { useDocsContext } from "@/context/DocsContext";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface DocsSidebarProps {
  activeChapterId?: string;
  activeSubChapterId?: string;
  onSelectChapter?: (chapterId: string, subChapterId?: string) => void;
  onItemClick?: () => void;
  className?: string;
}

export function DocsSidebar({
  activeChapterId = "why-farmer-eye",
  activeSubChapterId,
  onSelectChapter,
  onItemClick,
  className,
}: DocsSidebarProps) {
  const { lang } = useDocsContext();
  const navigation = getDossierNavigation(lang);

  // Accordion state: by default, ONLY the active chapter is expanded ("mnghir fen rani db ykun m7lol mzyan")
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({
    [activeChapterId]: true,
  });

  // When activeChapterId changes (e.g. from bottom Next/Prev pagination or deep link),
  // automatically expand it and keep the accordion focused.
  useEffect(() => {
    if (activeChapterId) {
      setOpenChapters((prev) => ({
        ...prev,
        [activeChapterId]: true,
      }));
    }
  }, [activeChapterId]);

  const handleToggleChevron = (e: React.MouseEvent, chapterId: string) => {
    e.stopPropagation();
    setOpenChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const handleChapterClick = (chapterId: string, firstSubId?: string) => {
    // Accordion behavior: expand clicked chapter, collapse others
    setOpenChapters({ [chapterId]: true });
    if (onSelectChapter) {
      onSelectChapter(chapterId, firstSubId);
    }
    if (onItemClick) onItemClick();
  };

  const handleSubChapterClick = (chapterId: string, subId: string) => {
    if (onSelectChapter) {
      onSelectChapter(chapterId, subId);
    }
    if (onItemClick) onItemClick();
  };

  return (
    <aside
      className={cn(
        "w-72 shrink-0 py-6 px-3 select-none overflow-y-auto h-full text-xs font-sans border-r border-border/60 bg-background transition-colors",
        className
      )}
    >
      <div className="space-y-6">
        {navigation.map((category) => (
          <div key={category.title} className="space-y-1">
            {/* Category Header */}
            <h3 className="text-[11px] font-semibold text-muted-foreground/80 tracking-wider uppercase font-mono px-2 py-1">
              {category.title}
            </h3>

            {/* Chapter Items List */}
            <div className="space-y-0.5">
              {category.chapters.map((chapter) => {
                const isActive = activeChapterId === chapter.id;
                const isOpen = !!openChapters[chapter.id];
                const hasSubChapters =
                  chapter.subChapters && chapter.subChapters.length > 0;
                const firstSubId = chapter.subChapters?.[0]?.id;

                return (
                  <div key={chapter.id} className="space-y-0.5">
                    {/* Chapter Row: Title + Chevron Arrow */}
                    <div
                      className={cn(
                        "w-full rounded-md text-[13px] leading-snug transition-colors flex items-center justify-between group cursor-pointer",
                        isActive
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40 font-normal"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => handleChapterClick(chapter.id, firstSubId)}
                        className="flex-1 text-left py-1.5 px-2 truncate cursor-pointer"
                        title={chapter.title}
                      >
                        {chapter.title}
                      </button>

                      {hasSubChapters && (
                        <button
                          type="button"
                          onClick={(e) => handleToggleChevron(e, chapter.id)}
                          aria-label={isOpen ? "Collapse chapter" : "Expand chapter"}
                          className="p-1.5 mr-1 text-muted-foreground/70 hover:text-foreground rounded transition-transform cursor-pointer"
                        >
                          <ChevronRight
                            className={cn(
                              "w-3.5 h-3.5 transition-transform duration-200",
                              isOpen && "rotate-90 text-foreground"
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* Sub-Chapters Indented List (Visible ONLY when this chapter is open) */}
                    {isOpen && hasSubChapters && (
                      <div className="ml-2.5 pl-2.5 my-1 border-l border-border/60 space-y-0.5 animate-in fade-in-50 duration-150">
                        {chapter.subChapters.map((sub) => {
                          const isSubActive =
                            isActive && activeSubChapterId === sub.id;

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() =>
                                handleSubChapterClick(chapter.id, sub.id)
                              }
                              className={cn(
                                "w-full text-left py-1 px-2 rounded text-[12px] leading-relaxed transition-colors block cursor-pointer truncate",
                                isSubActive
                                  ? "text-foreground font-medium bg-muted/70 shadow-xs"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                              )}
                              title={sub.title}
                            >
                              {sub.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
