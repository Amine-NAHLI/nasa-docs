"use client";

import React, { useRef, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { MediaVideoItem } from "@/types/media";
import {
  Film,
  Radio,
  Info,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoItem: MediaVideoItem;
}

export function VideoModal({ isOpen, onClose, videoItem }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const hasRealVideo = videoItem.status === "available" && Boolean(videoItem.videoUrl);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    onClose();
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={videoItem.title}
      description={videoItem.subtitle}
      maxWidth="4xl"
    >
      <div className="space-y-4">
        {/* Media Frame */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
          {hasRealVideo ? (
            <div className="relative w-full h-full group">
              <video
                ref={videoRef}
                src={videoItem.videoUrl!}
                poster={videoItem.posterUrl || undefined}
                className="w-full h-full object-contain"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                playsInline
                preload="metadata"
              >
                {videoItem.captionUrl && (
                  <track
                    kind="captions"
                    src={videoItem.captionUrl}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay Controls */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950/90 to-transparent flex items-center justify-between gap-3 opacity-90 transition-opacity">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-teal-400 text-slate-950 hover:bg-teal-300 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden mx-2">
                  <div
                    className="h-full bg-teal-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="text-xs font-mono text-slate-300">
                  {videoItem.duration || "0:00"}
                </span>
              </div>
            </div>
          ) : (
            /* Scientific Polished Placeholder Interface */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#070D17] via-[#0B1728] to-[#123354] select-none">
              {/* Animated Orbital Radar simulation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-80 h-80 rounded-full border border-teal-400/40 animate-ping" style={{ animationDuration: "4s" }} />
                <div className="absolute w-96 h-96 rounded-full border border-white/10" />
                <div className="absolute w-64 h-64 rounded-full border border-teal-500/20" />
              </div>

              {/* Status Badge */}
              <div className="z-10 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-teal-400/30 text-teal-300 text-xs font-mono">
                <Radio className="h-3.5 w-3.5 animate-pulse text-amber-400" />
                <span>OFFICIAL MEDIA ASSET SLOT READY</span>
              </div>

              {/* Center icon */}
              <div className="z-10 w-16 h-16 rounded-2xl bg-slate-900/80 border border-white/15 flex items-center justify-center shadow-lg mb-3">
                <Film className="h-8 w-8 text-teal-400" />
              </div>

              <h3 className="z-10 text-lg font-bold text-slate-100 max-w-md">
                Cinematic Video Ready for Integration
              </h3>
              <p className="z-10 text-xs text-slate-400 max-w-lg mt-2 leading-relaxed">
                {videoItem.placeholderNotes ||
                  "Place the official MP4 video file in the public repository to stream directly through this player."}
              </p>

              {/* Technical Specifications Pill */}
              <div className="z-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left w-full max-w-lg text-[11px] font-mono">
                <div className="bg-slate-900/70 p-2 rounded border border-white/10">
                  <span className="text-slate-500 block">RESOLUTION</span>
                  <span className="text-slate-200">{videoItem.specs?.resolution || "4K / 1080p"}</span>
                </div>
                <div className="bg-slate-900/70 p-2 rounded border border-white/10">
                  <span className="text-slate-500 block">CONTAINER</span>
                  <span className="text-slate-200">{videoItem.specs?.codec || "H.264 MP4"}</span>
                </div>
                <div className="bg-slate-900/70 p-2 rounded border border-white/10">
                  <span className="text-slate-500 block">AUDIO</span>
                  <span className="text-slate-200">{videoItem.specs?.audio || "AAC Stereo"}</span>
                </div>
                <div className="bg-slate-900/70 p-2 rounded border border-white/10">
                  <span className="text-slate-500 block">DURATION</span>
                  <span className="text-teal-300">{videoItem.duration || "Estimated ~3m"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Description & DEVUPWARD Integration Hint */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pt-2">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Info className="h-4 w-4 text-teal-400" />
              Video Overview
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              {videoItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
