"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { brandAssets } from "@/config/media";
import { Eye } from "lucide-react";
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
  const [imgError, setImgError] = useState(false);

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
        <div className="relative rounded-full border border-teal-500/30 p-1 bg-[#070D17]/90 shadow-md flex items-center justify-center">
          {!imgError ? (
            <Image
              src={brandAssets.logoUrl}
              alt="Farmer Eye Logo"
              width={currentSize.icon}
              height={currentSize.icon}
              className="w-auto h-auto transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
              priority
              unoptimized
            />
          ) : (
            <div className="p-1 text-teal-400">
              <Eye className="h-5 w-5" />
            </div>
          )}
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

export function TeamLogo({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src={brandAssets.teamLogoUrl}
        alt="DEVUPWARD Team Logo"
        width={120}
        height={30}
        className="w-auto h-6 object-contain"
        unoptimized
      />
    </div>
  );
}

export function MascotSlot({ className }: { className?: string }) {
  const [error, setError] = useState(false);

  if (!brandAssets.mascotUrl || error) {
    return null;
  }

  return (
    <div className={cn("relative rounded-xl overflow-hidden p-2", className)}>
      <Image
        src={brandAssets.mascotUrl}
        alt="Farmer Eye Team Mascot"
        width={80}
        height={80}
        className="w-auto h-auto object-contain"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  );
}
