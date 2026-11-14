import { MediaVideoItem, BrandAssetConfig } from "@/types/media";

export const brandAssets: BrandAssetConfig = {
  logoUrl: "/brand/farmer-eye-logo.svg",
  logoFallbackText: "FARMER EYE",
  mascotUrl: null, // Placeholder: drop official mascot image at /brand/farmer-eye-mascot.png
  teamLogoUrl: "/brand/devupward-logo.svg",
  initiativeLogoUrl: "/brand/earth-trials-2030.svg",
};

export const mediaRegistry: Record<string, MediaVideoItem> = {
  "cinematic-intro": {
    id: "cinematic-intro",
    title: "Farmer Eye: The Farmer's Second Eyes",
    subtitle: "Cinematic Overview — Earth Trials & Impact 2030",
    description:
      "A cinematic introduction presenting how NASA Earth observations, agricultural science, and artificial intelligence converge to support farmers facing climate uncertainty.",
    category: "cinematic",
    videoUrl: null, // When DEVUPWARD supplies the file, set: "/videos/farmer-eye-cinematic-intro.mp4"
    posterUrl: null, // Recommended: "/videos/farmer-eye-poster.jpg"
    captionUrl: null, // English VTT: "/videos/farmer-eye-story-captions.vtt"
    duration: "2:45",
    status: "placeholder",
    specs: {
      resolution: "4K UHD (3840x2160) / 1080p FHD",
      codec: "H.264 / HEVC / MP4 Container",
      audio: "Stereo AAC 320 kbps",
      framerate: "24 fps Cinematic",
    },
    placeholderNotes:
      "Official cinematic video slot ready. Place your MP4 in 'public/videos/farmer-eye-cinematic-intro.mp4' and update this registry to 'available'.",
  },
  "our-mission-explainer": {
    id: "our-mission-explainer",
    title: "Mission Briefing: Empowering Human Agricultural Judgment",
    subtitle: "Technical Explainer Video",
    description:
      "A walk-through of the scientific philosophy of Farmer Eye: why AI and satellite observation serve as an additional perspective to empower farmers rather than automate away human judgment.",
    category: "explainer",
    videoUrl: null,
    posterUrl: null,
    captionUrl: null,
    duration: "3:15",
    status: "placeholder",
    specs: {
      resolution: "1080p FHD (1920x1080)",
      codec: "H.264 MP4",
      audio: "Stereo AAC 192 kbps",
      framerate: "30 fps",
    },
    placeholderNotes:
      "Technical mission brief video slot. Place MP4 in 'public/videos/mission-explainer.mp4'.",
  },
  "pipeline-walkthrough": {
    id: "pipeline-walkthrough",
    title: "How It Works: From Radiance to Recommendation",
    subtitle: "Data Pipeline Deep Dive",
    description:
      "Step-by-step breakdown of how Landsat and Sentinel multispectral bands are normalized, processed through soil-water balance equations, and synthesized into farmer-friendly alerts.",
    category: "technical",
    videoUrl: null,
    posterUrl: null,
    captionUrl: null,
    duration: "4:00",
    status: "placeholder",
    specs: {
      resolution: "1080p FHD (1920x1080)",
      codec: "H.264 MP4",
      audio: "Stereo AAC 192 kbps",
      framerate: "30 fps",
    },
    placeholderNotes:
      "Pipeline animation slot. Place MP4 in 'public/videos/pipeline-walkthrough.mp4'.",
  },
};
