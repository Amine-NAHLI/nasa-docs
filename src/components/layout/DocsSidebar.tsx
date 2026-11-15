"use client";

import React from "react";
import { getDossierNavigation } from "@/data/dossier-pages";
import { useDocsContext } from "@/context/DocsContext";
import { cn } from "@/lib/utils";

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

  const handleChapterClick = (chapterId: string) => {
    if (onSelectChapter) onSelectChapter(chapterId);
    if (onItemClick) onItemClick();
  };

  const handleSubChapterClick = (chapterId: string, subId: string) => {
    if (onSelectChapter) onSelectChapter(chapterId, subId);
    if (onItemClick) onItemClick();
  };

  return (
    <aside
      className={cn(
        "w-68 shrink-0 py-6 px-4 select-none overflow-y-auto h-full text-xs font-sans border-r border-border/60 bg-background transition-colors",
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

                return (
                  <div key={chapter.id} className="space-y-0.5">
                    {/* Chapter Link */}
                    <button
                      type="button"
                      onClick={() => handleChapterClick(chapter.id)}
                      className={cn(
                        "w-full text-left py-1.5 px-2 rounded-md text-[13px] leading-snug transition-colors flex items-center justify-between cursor-pointer",
                        isActive
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40 font-normal"
                      )}
                    >
                      <span className="truncate">{chapter.title}</span>
                    </button>

                    {/* Sub-Chapters Indented List */}
                    {isActive && chapter.subChapters && chapter.subChapters.length > 0 && (
                      <div className="ml-2.5 pl-2.5 my-1 border-l border-border/60 space-y-0.5">
                        {chapter.subChapters.map((sub) => {
                          const isSubActive = activeSubChapterId === sub.id;

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleSubChapterClick(chapter.id, sub.id)}
                              className={cn(
                                "w-full text-left py-1 px-1.5 rounded text-[12px] leading-relaxed transition-colors block cursor-pointer truncate",
                                isSubActive
                                  ? "text-foreground font-medium bg-muted/40"
                                  : "text-muted-foreground hover:text-foreground"
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
