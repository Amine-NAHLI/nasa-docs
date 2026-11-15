import React from "react";
import { DocRegionView } from "@/components/globe/DocRegionView";
import { MOROCCO_REGIONS } from "@/config/morocco-regions";

function resolveRegionFromSlug(slug?: string[]): string {
  if (!slug || slug.length === 0) return "overview";
  const first = slug[0].toLowerCase();
  
  if (first.includes("mission")) return "our-mission";
  if (first.includes("nasa") || first.includes("power") || first.includes("smap")) return "nasa-earth";
  if (first.includes("scientific") || first.includes("engine") || first.includes("evapo")) return "scientific-engine";
  if (first.includes("earth") || first.includes("trial") || first.includes("meknes")) return "earth-trials";
  if (first.includes("ai") || first.includes("intelligence")) return "ai-intelligence";
  if (first.includes("impact")) return "impact-2030";
  if (first.includes("architecture") || first.includes("dev")) return "architecture-developers";
  
  return MOROCCO_REGIONS[first] ? first : "overview";
}

export default async function DynamicDocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const regionId = resolveRegionFromSlug(resolvedParams.slug);

  return <DocRegionView regionId={regionId} />;
}
