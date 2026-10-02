import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

const ASPECTS = {
  photo: "aspect-photo",
  wide: "aspect-wide",
  portrait: "aspect-portrait",
};

interface FramedPhotoProps {
  src: string;
  alt: string;
  sizes: string;
  /** arch: 4:5 doorway crop · soft: organic rounded corners. */
  shape?: "arch" | "soft";
  /** Ratio for the soft shape; arches are always 4:5. */
  aspect?: "photo" | "wide" | "portrait";
  /** Tailwind object-position class to steer the crop, e.g. object-[45%_50%]. */
  crop?: string;
  /** Above-the-fold photos animate on load and are fetched eagerly. */
  onLoad?: boolean;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

export function FramedPhoto({
  src,
  alt,
  sizes,
  shape = "arch",
  aspect = "photo",
  crop = "object-center",
  onLoad = false,
  delay = 0,
  className = "",
  children,
}: FramedPhotoProps) {
  const frame =
    shape === "arch" ? "arch-frame" : `organic-frame ${ASPECTS[aspect]}`;

  const photo = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={onLoad}
      className={`object-cover ${crop}`}
    />
  );

  if (onLoad) {
    return (
      <div
        className={`relative overflow-hidden bg-cream-deep shadow-photo animate-unveil ${frame} ${className}`}
      >
        {photo}
        {children}
      </div>
    );
  }

  return (
    <Reveal effect="unveil" delay={delay} className={className}>
      <div className={`relative overflow-hidden bg-cream-deep shadow-photo ${frame}`}>
        {photo}
        {children}
      </div>
    </Reveal>
  );
}
