"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use_prefers_reduced_motion";

interface Slide {
  src: string;
  position: string;
}

const SLIDES: Slide[] = [
  {
    src: "/images/hero/gaza_young_people_together.jpg",
    position: "object-[50%_35%]",
  },
  {
    src: "/images/hero/gaza_children_standing_together.jpg",
    position: "object-[50%_40%]",
  },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none bg-jet" aria-hidden="true">
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              preload={index === 0}
              sizes="100vw"
              className={`object-cover ${slide.position} grayscale contrast-[1.08] brightness-[0.96] transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
