import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { brandAssets } from "@/config/media";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showSlogan?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function BrandLogo({
  className,
  showSlogan = false,
  size = "md",
  href = "/",
}: BrandLogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-base", sub: "text-[10px]" },
    md: { icon: 34, text: "text-lg", sub: "text-xs" },
    lg: { icon: 44, text: "text-2xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      <div className="relative flex items-center justify-center">
        {/* Ambient pulse around logo */}
        <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md group-hover:bg-teal-400/35 transition-all" />
        <div className="relative rounded-full border border-teal-500/30 p-1 bg-[#070D17]/90 shadow-md">
          <Image
            src={brandAssets.logoUrl}
            alt="Farmer Eye Official Logo"
            width={currentSize.icon}
            height={currentSize.icon}
            className="w-auto h-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={cn("font-bold tracking-tight text-white font-mono", currentSize.text)}>
            FARMER<span className="text-teal-400 ml-1">EYE</span>
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-amber-300/90 border border-amber-400/20">
            2030
          </span>
        </div>
        {showSlogan && (
          <span className={cn("text-slate-400 font-sans tracking-wide mt-0.5", currentSize.sub)}>
            {siteConfig.slogan}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block transition-opacity hover:opacity-95">
        {content}
      </Link>
    );
  }

  return content;
}
