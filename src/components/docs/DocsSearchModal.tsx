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
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a topic (e.g. 'NASA', 'second eyes', 'pipeline', 'drought')..."
            className="w-full bg-slate-950/80 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
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
                  className="p-3 rounded-lg border border-white/5 bg-slate-900/60 hover:bg-slate-900 hover:border-teal-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-1">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {item.section}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-slate-400">
                      Jump <CornerDownLeft className="h-3 w-3" />
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 text-sm">
                No matching documentation found for &ldquo;{query}&rdquo;.
              </div>
            )
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 space-y-2">
              <Sparkles className="h-5 w-5 mx-auto text-teal-400/50" />
              <p>Type at least 2 characters to search active Phase 1 documentation.</p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {["Our Mission", "Pipeline", "NASA Earth", "Meknes Pilot", "AI Reasoning"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-[11px] text-slate-400 hover:text-teal-300 hover:border-teal-500/30 transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Phase 1 Scoped Local Index</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </Modal>
  );
}
