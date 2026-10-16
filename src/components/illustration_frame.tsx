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
  preload?: boolean;
  sizes?: string;
  className?: string;
}

export function IllustrationFrame({
  src,
  alt,
  aspect = "photo",
  preload = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className = "",
}: IllustrationFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-soft bg-parchment-deep ring-1 ring-line ${ASPECTS[aspect]} ${className}`}
    >
      {/* unoptimized: the placeholders are first-party SVG. Drop this once
          real raster photography replaces them. */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        unoptimized
        className="object-cover grayscale contrast-[1.05]"
      />
    </div>
  );
}
