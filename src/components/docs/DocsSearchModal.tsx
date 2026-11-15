"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/Modal";
import { Search, CornerDownLeft, Sparkles, BookOpen } from "lucide-react";
import { searchDocumentation } from "@/lib/search-index";

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocsSearchModal({ isOpen, onClose }: DocsSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

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
      title="Search Documentation"
      description="Search Phase 1 documentation, mission architecture, and scientific concepts."
      maxWidth="xl"
    >
      <div className="space-y-4">
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation (e.g. 'NASA', 'POWER', 'Penman', 'Saïss')..."
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:bg-white transition-all"
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
                  className="p-3 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-600 mb-1">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {item.section}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-zinc-400">
                      Jump <CornerDownLeft className="h-3 w-3" />
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-zinc-500 text-sm">
                No matching documentation found for &ldquo;{query}&rdquo;.
              </div>
            )
          ) : (
            <div className="p-6 text-center text-xs text-zinc-500 space-y-2">
              <Sparkles className="h-4 w-4 mx-auto text-emerald-500/70" />
              <p>Type at least 2 characters to search documentation.</p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {["Overview", "NASA Datasets", "Water Modeling", "Fès Saïss", "AI Engine"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>Farmer Eye Docs Index</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </Modal>
  );
}
