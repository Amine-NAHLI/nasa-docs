"use client";

import React, { useState } from "react";
import { MediaVideoItem } from "@/types/media";
import { mediaRegistry } from "@/config/media";
import { VideoPoster } from "./VideoPoster";
import { VideoModal } from "./VideoModal";

interface ExplainerVideoProps {
  id: string;
  fallbackItem?: MediaVideoItem;
  className?: string;
}

export function ExplainerVideo({ id, fallbackItem, className }: ExplainerVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoItem = mediaRegistry[id] || fallbackItem;

  if (!videoItem) {
    return null;
  }

  return (
    <div className={className}>
      <VideoPoster
        title={videoItem.title}
        subtitle={videoItem.subtitle}
        duration={videoItem.duration}
        onPlay={() => setIsOpen(true)}
      />
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoItem={videoItem}
      />
    </div>
  );
}
