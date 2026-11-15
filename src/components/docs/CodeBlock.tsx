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
  language = "bash",
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
        "rounded-md border border-border/80 bg-zinc-50 dark:bg-zinc-950 overflow-hidden my-5 text-xs font-mono",
        className
      )}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/60 bg-zinc-100/60 dark:bg-zinc-900/60 text-muted-foreground select-none">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[11px] font-mono font-medium text-foreground/80">
            {filename || language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] text-muted-foreground hover:text-foreground hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
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
      <pre className="p-4 overflow-x-auto text-foreground/90 leading-relaxed font-mono text-[13px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
