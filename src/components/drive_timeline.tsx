"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { RELIEF_DRIVES } from "@/content/relief_drives";
import { usePrefersReducedMotion } from "@/hooks/use_prefers_reduced_motion";
import type { ReliefDrive } from "@/types/content";

// Hover-only controls would be unreachable on touch screens and by keyboard.
const REVEAL_CONTROLS =
  "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100";

/* Custom video player with no download button, clean controls, and auto-pause when scrolled out */
function DriveVideoPlayer({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-pause when scrolled out of screen
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const percent = Number(e.target.value);
    video.currentTime = (percent / 100) * video.duration;
    setProgress(percent);
  };

  return (
    <div
      ref={containerRef}
      onClick={togglePlay}
      onContextMenu={(e) => e.preventDefault()}
      className="group relative aspect-[9/16] max-h-[460px] w-full max-w-sm cursor-pointer overflow-hidden surface-jet rounded-card border border-rule shadow-soft"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        aria-label={label}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
        className="size-full object-cover"
      />

      {/* Top badge */}
      <div className="pointer-events-none absolute top-3 left-3 z-10">
        <span className="rounded-md bg-jet/60 px-2.5 py-1 text-xs font-medium text-parchment backdrop-blur-sm">
          Field Video
        </span>
      </div>

      {/* Big center play button when paused */}
      {!isPlaying && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={`Play ${label}`}
          className="absolute inset-0 flex items-center justify-center bg-jet/30 transition-opacity"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-parchment/95 text-jet shadow-lift transition-transform group-hover:scale-110">
            <svg aria-hidden="true" className="ml-1 size-6 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Bottom control bar (no download button anywhere) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-gradient-to-t from-jet/85 via-jet/40 to-transparent p-3 text-parchment transition-opacity duration-200 ${REVEAL_CONTROLS}`}
      >
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          aria-label="Seek"
          className="h-1.5 w-full cursor-pointer accent-clay"
        />

        {/* Controls row */}
        <div className="flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={togglePlay}
            className="rounded p-1 text-parchment transition-colors hover:text-clay"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            className="rounded p-1 text-parchment transition-colors hover:text-clay"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Auto-sliding image carousel that advances every 5 seconds */
function DriveImageCarousel({
  images,
}: {
  images: { src: string; alt?: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isPaused = isHovered || isFocused || reducedMotion;

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false);
      }}
      className="group relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-rule bg-raised shadow-soft"
    >
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-soft ${
            idx === currentIndex
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt || "Relief drive field photo"}
            fill
            className="object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
            sizes="(min-width: 1024px) 35vw, 85vw"
          />
        </div>
      ))}

      {/* Top badge */}
      <span className="absolute top-3 left-3 z-20 rounded-md bg-jet/60 px-2.5 py-1 text-xs font-medium text-parchment backdrop-blur-sm">
        Field Photo{images.length > 1 ? ` • ${currentIndex + 1}/${images.length}` : ""}
      </span>

      {/* Arrow navigation if multiple images */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photo"
            className={`absolute left-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-jet/50 p-2 text-parchment backdrop-blur-sm transition-all duration-200 hover:bg-jet/75 ${REVEAL_CONTROLS}`}
          >
            <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photo"
            className={`absolute right-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-jet/50 p-2 text-parchment backdrop-blur-sm transition-all duration-200 hover:bg-jet/75 ${REVEAL_CONTROLS}`}
          >
            <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-1.5">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === currentIndex ? "w-6 bg-parchment-light" : "w-1.5 bg-parchment/50"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* Slightly wobbly hand-drawn rectangle via an SVG border. Each drive gets
   a different seed so borders don't all look identical. */
function SketchBox({ children, seed }: { children: React.ReactNode; seed: number }) {
  /* Small offsets per seed to break the machine-perfect look */
  const a = 1 + (seed % 3) * 0.4;
  const b = 1.5 - (seed % 2) * 0.6;

  return (
    <span className="relative inline-block px-3.5 py-1.5">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full text-ink"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d={`M4 ${3 + a} C20 ${2 + b},100 ${2 + a},117 ${4 + b} C118 15,118 25,117 ${36 - a} C100 ${38 - b},20 ${38 + a},4 ${37 - b} C3 25,3 15,4 ${3 + a} Z`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative text-sm font-medium text-ink">{children}</span>
    </span>
  );
}

function DriveRow({ drive, index }: { drive: ReliefDrive; index: number }) {
  const flipped = index % 2 === 1;

  const infoSide = (
    <div className="flex flex-1 flex-col justify-center gap-4">
      {/* Drive label in a hand-drawn box + date */}
      <div className="flex flex-wrap items-center gap-3">
        <SketchBox seed={index}>{drive.label}</SketchBox>
        <span className="text-sm text-ink-muted">{drive.date}</span>
      </div>

      <h3 className="font-heading text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
        {drive.focus}
      </h3>

      <p className="max-w-md leading-relaxed text-ink-muted">
        {drive.impact}
      </p>
    </div>
  );

  const videoItem = drive.media?.find((m) => m.type === "video");
  const imageItems = drive.media?.filter((m) => m.type === "image") || [];

  const mediaSide = (
    <div className="flex flex-1 items-center justify-center">
      {videoItem ? (
        <DriveVideoPlayer
          src={videoItem.src}
          poster={videoItem.poster}
          label={`${drive.label} field video: ${drive.focus}`}
        />
      ) : imageItems.length > 0 ? (
        <DriveImageCarousel images={imageItems} />
      ) : (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-card border-2 border-dashed border-rule bg-raised">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-8 text-ink-faint/60"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="mt-2 max-w-[10rem] text-center text-xs leading-relaxed text-ink-faint">
            Photos &amp; videos for this drive will appear here
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Reveal delay={index * 60}>
      <div className="grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className={flipped ? "lg:order-last" : undefined}>
          {infoSide}
        </div>
        <div className={flipped ? "lg:order-first" : undefined}>
          {mediaSide}
        </div>
      </div>
    </Reveal>
  );
}

export function DriveShowcase() {
  return (
    <div className="flex flex-col" role="list" aria-label="Relief drives">
      {RELIEF_DRIVES.map((drive, index) => (
        <div
          key={drive.id}
          id={drive.id}
          role="listitem"
          className="scroll-mt-28"
        >
          <div className="py-8 lg:py-10">
            <DriveRow drive={drive} index={index} />
          </div>
          {index < RELIEF_DRIVES.length - 1 && (
            <div
              aria-hidden="true"
              className="mx-auto h-px w-full border-t border-dashed border-ink-faint/40"
            />
          )}
        </div>
      ))}
    </div>
  );
}
