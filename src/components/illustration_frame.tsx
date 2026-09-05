import Image from "next/image";

type Aspect = "photo" | "portrait" | "wide" | "square";

const ASPECTS: Record<Aspect, string> = {
  photo: "aspect-photo",
  portrait: "aspect-portrait",
  wide: "aspect-wide",
  square: "aspect-square",
};

interface IllustrationFrameProps {
  src: string;
  alt: string;
  aspect?: Aspect;
  /** Mirrors the corner rounding so adjacent frames do not look stamped. */
  flip?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function IllustrationFrame({
  src,
  alt,
  aspect = "photo",
  flip = false,
  priority = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className = "",
}: IllustrationFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-surface ring-1 ring-line ${
        flip ? "organic-frame-alt" : "organic-frame"
      } ${ASPECTS[aspect]} ${className}`}
    >
      {/* unoptimized: the placeholders are first-party SVG. Drop this once
          real raster photography replaces them. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        className="object-cover"
      />
    </div>
  );
}
