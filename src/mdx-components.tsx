import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-bold tracking-tight text-slate-100 mt-8 mb-4 border-b border-white/10 pb-2" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 mt-8 mb-4 flex items-center gap-2" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl font-semibold text-slate-200 mt-6 mb-3" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-slate-300 leading-relaxed mb-4 text-base" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300 ml-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-300 ml-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-slate-300 leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-teal-400/60 bg-teal-950/20 px-4 py-3 rounded-r-lg my-4 text-slate-300 italic" {...props}>
        {children}
      </blockquote>
    ),
    a: ({ href = "", children, ...props }) => {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href} className="text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors" {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-4 transition-colors" {...props}>
          {children}
        </a>
      );
    },
    code: ({ children, ...props }) => (
      <code className="bg-slate-900 border border-white/10 rounded px-1.5 py-0.5 text-xs font-mono text-teal-300" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre className="bg-slate-950 border border-white/10 rounded-xl p-4 overflow-x-auto my-4 text-sm font-mono text-slate-200" {...props}>
        {children}
      </pre>
    ),
    hr: () => <hr className="border-white/10 my-8" />,
    ...components,
  };
}
