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
        "w-72 shrink-0 py-6 pl-6 pr-4 select-none overflow-y-auto h-full text-xs font-sans border-r border-zinc-200/80 dark:border-[#232529] bg-white dark:bg-[#0C0D0E] transition-colors",
        className
      )}
    >
      <div className="space-y-6">
        {navigation.map((category) => (
          <div key={category.title} className="space-y-2">
            {/* Category Header (Drizzle Style: Uppercase Bold) */}
            <h3 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-300 tracking-wider uppercase font-sans px-1">
              {category.title}
            </h3>

            {/* Continuous Tree Rail */}
            <div className="border-l border-zinc-200 dark:border-zinc-800 pl-3 space-y-1">
              {category.chapters.map((chapter) => {
                const isActive = activeChapterId === chapter.id;

                return (
                  <div key={chapter.id} className="relative">
                    {/* Chapter Item */}
                    <button
                      type="button"
                      onClick={() => handleChapterClick(chapter.id)}
                      className={cn(
                        "w-full text-left py-1 text-[13px] leading-snug transition-all flex items-center justify-between cursor-pointer group",
                        isActive
                          ? "-ml-[13px] pl-[11px] border-l-2 border-zinc-950 dark:border-white font-bold text-zinc-950 dark:text-white"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white font-normal"
                      )}
                    >
                      <span className="truncate">{chapter.title}</span>
                    </button>

                    {/* Nested Sub-Chapters (Drizzle Style) */}
                    {isActive && chapter.subChapters && chapter.subChapters.length > 0 && (
                      <div className="mt-1 mb-2 ml-1 pl-3.5 border-l border-zinc-200/90 dark:border-zinc-800 space-y-1">
                        {chapter.subChapters.map((sub) => {
                          const isSubActive = activeSubChapterId === sub.id;

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => handleSubChapterClick(chapter.id, sub.id)}
                              className={cn(
                                "w-full text-left py-0.5 text-[12px] leading-relaxed transition-colors block cursor-pointer truncate",
                                isSubActive
                                  ? "text-zinc-950 dark:text-white font-semibold"
                                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
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
