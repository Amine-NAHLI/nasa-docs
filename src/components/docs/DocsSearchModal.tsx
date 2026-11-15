"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/Modal";
import { Search, CornerDownLeft, BookOpen } from "lucide-react";
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
      title={isEn ? "Search Documentation" : "Rechercher dans la documentation"}
      description={
        isEn
          ? "Search technical dossier, scientific equations, and mission data."
          : "Rechercher dans le dossier technique, les équations et les données."
      }
      maxWidth="lg"
    >
      <div className="space-y-3">
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isEn
                ? "Type a query (e.g. 'POWER', 'SMAP', 'Penman', 'Meknes')..."
                : "Entrez un terme (ex: 'POWER', 'SMAP', 'Penman', 'Meknès')..."
            }
            className="w-full bg-muted/40 border border-border/80 rounded-md pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 focus:bg-background transition-colors font-sans"
            autoFocus
          />
        </div>

        {/* Results Container */}
        <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
          {query.trim().length >= 2 ? (
            results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className="p-2.5 rounded-md hover:bg-muted/60 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-0.5">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 opacity-70" />
                      {item.section}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[11px]">
                      {isEn ? "Select" : "Ouvrir"} <CornerDownLeft className="h-3 w-3" />
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground group-hover:underline underline-offset-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {item.snippet}
                  </p>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground text-xs font-mono">
                {isEn ? (
                  <>No results found for &ldquo;{query}&rdquo;.</>
                ) : (
                  <>Aucun résultat trouvé pour &laquo; {query} &raquo;.</>
                )}
              </div>
            )
          ) : (
            <div className="py-6 text-center text-xs text-muted-foreground font-mono">
              {isEn
                ? "Type at least 2 characters to search across all chapters."
                : "Tapez au moins 2 caractères pour chercher dans les chapitres."}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
