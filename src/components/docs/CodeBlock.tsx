"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  filename?: string;
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  filename,
  code,
  language = "typescript",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-200 bg-zinc-50/90 overflow-hidden my-4 text-xs font-mono shadow-2xs",
        className
      )}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-zinc-200 bg-zinc-100/70">
        <div className="flex items-center gap-2 text-zinc-600">
          <Terminal className="h-3.5 w-3.5 text-zinc-500" />
          <span className="text-[11px] font-medium text-zinc-700">
            {filename || language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <pre className="p-4 overflow-x-auto text-zinc-800 leading-relaxed font-mono text-[12.5px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
