"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/Modal";
import { Search, CornerDownLeft, Sparkles, BookOpen } from "lucide-react";
import { searchDocumentation } from "@/lib/search-index";
import { useDocsContext } from "@/context/DocsContext";

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocsSearchModal({ isOpen, onClose }: DocsSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { lang } = useDocsContext();
  const isEn = lang === "en";

  const results = query.trim().length >= 2 ? searchDocumentation(query) : [];

  const handleSelect = (href: string) => {
    onClose();
    setQuery("");
    router.push(href);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEn ? "Search Documentation" : "Recherche Documentation"}
      description={
        isEn
          ? "Search technical dossier, mission architecture, and scientific equations."
          : "Rechercher dans le dossier technique, l'architecture et les équations."
      }
      maxWidth="xl"
    >
      <div className="space-y-4">
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isEn
                ? "Search documentation (e.g. 'NASA', 'POWER', 'Penman', 'Saïss')..."
                : "Rechercher (ex: 'NASA', 'POWER', 'Penman', 'Saïss')..."
            }
            className="w-full bg-zinc-50 dark:bg-[#1A1C20] border border-zinc-200 dark:border-[#282B30] rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:bg-white dark:focus:bg-[#141518] transition-all"
            autoFocus
          />
        </div>

        {/* Results Container */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {query.trim().length >= 2 ? (
            results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className="p-3 rounded-lg border border-zinc-200 dark:border-[#232529] bg-white dark:bg-[#141518] hover:bg-zinc-50 dark:hover:bg-[#1E2024] hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {item.section}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
                      {isEn ? "Jump" : "Aller"} <CornerDownLeft className="h-3 w-3" />
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                {isEn ? (
                  <>No matching documentation found for &ldquo;{query}&rdquo;.</>
                ) : (
                  <>Aucun résultat trouvé pour &laquo; {query} &raquo;.</>
                )}
              </div>
            )
          ) : (
            <div className="p-6 text-center text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
              <Sparkles className="h-4 w-4 mx-auto text-emerald-500/70" />
              <p>
                {isEn
                  ? "Type at least 2 characters to search documentation."
                  : "Tapez au moins 2 caractères pour rechercher dans la documentation."}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {["Overview", "NASA Datasets", "Water Modeling", "Fès Saïss", "AI Engine"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#1E2024] border border-zinc-200 dark:border-[#2E3138] text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-[#282B30] transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
