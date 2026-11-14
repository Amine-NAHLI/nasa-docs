export type VideoStatus = "available" | "placeholder" | "upcoming";

export interface MediaVideoItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: "cinematic" | "explainer" | "field-trial" | "technical";
  videoUrl?: string | null;
  posterUrl?: string | null;
  captionUrl?: string | null;
  duration?: string;
  status: VideoStatus;
  specs?: {
    resolution?: string;
    codec?: string;
    audio?: string;
    framerate?: string;
  };
  placeholderNotes?: string;
}

export interface BrandAssetConfig {
  logoUrl: string;
  logoFallbackText: string;
  mascotUrl?: string | null;
  teamLogoUrl: string;
  initiativeLogoUrl: string;
}
