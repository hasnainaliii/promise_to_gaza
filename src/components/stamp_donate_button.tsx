"use client";

import Link from "next/link";
import { useId } from "react";

interface StampDonateButtonProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Stylized Palestinian olive branch emblem with delicate leaves and a crimson berry.
 * Represents Palestinian resilience, peace, and humanitarian solidarity.
 */
export function OliveBranchIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g className="transition-transform duration-250 ease-soft group-hover:scale-110">
        {/* Branch stem */}
        <path
          d="M12 28 C16 23 20 18 29 13"
          stroke="#fbf8f1"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Terminal leaf */}
        <path
          d="M29 13 C33 9 37 10 36 15 C32 18 29 16 29 13 Z"
          fill="#fbf8f1"
        />
        {/* Upper left leaf */}
        <path
          d="M20 19 C16 16 15 12 20 11 C23 13 22 17 20 19 Z"
          fill="#fbf8f1"
        />
        {/* Upper right leaf */}
        <path
          d="M24 16 C28 13 32 14 31 19 C28 20 25 18 24 16 Z"
          fill="#fbf8f1"
        />
        {/* Lower left leaf */}
        <path
          d="M16 24 C11 21 11 17 16 17 C19 19 18 23 16 24 Z"
          fill="#fbf8f1"
        />
        {/* Crimson red berry accent */}
        <circle cx="22" cy="22" r="2.2" fill="#e4312b" />
      </g>
    </svg>
  );
}

const SIZES = {
  sm: "size-12 sm:size-13",
  md: "size-20 sm:size-22",
  lg: "size-24 sm:size-26",
};

/**
 * Stationary circular Palestine-themed Donate stamp badge.
 * Features Palestine deep green base, arched top text ("DONATE"),
 * arched bottom text ("PROMISE TO GAZA"), crimson separation accents,
 * and an olive branch center emblem. Does NOT spin.
 */
export function StampDonateButton({
  href = "/donate",
  size = "lg",
  className = "",
}: StampDonateButtonProps) {
  const pathId = useId();
  const isSmall = size === "sm";

  return (
    <Link
      href={href}
      aria-label="Donate to Promise to Gaza"
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-full aspect-square bg-[#1c452e] text-[#fbf8f1] shadow-soft transition-all duration-200 ease-soft hover:scale-105 hover:bg-[#163825] hover:shadow-lift active:scale-95 ${
        SIZES[size]
      } ${className}`}
    >
      {/* Outer border rim */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-emerald-400/30 ring-1 ring-black/20"
      />

      {/* SVG Canvas for Arched Typography & Perimeter Rings */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 size-full"
        aria-hidden="true"
      >
        {/* Inner boundary ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(251, 248, 241, 0.25)"
          strokeWidth="1.2"
        />

        {/* Arched Paths Definition */}
        <defs>
          {/* Top Arc (Clockwise from 9 to 3 o'clock) */}
          <path
            id={`${pathId}-top`}
            d="M 16, 50 A 34, 34 0 0, 1 84, 50"
          />
          {/* Bottom Arc (Counter-Clockwise from 9 to 3 o'clock so text reads upright) */}
          <path
            id={`${pathId}-bottom`}
            d="M 16, 50 A 34, 34 0 0, 0 84, 50"
          />
        </defs>

        {/* Top Text: DONATE */}
        <text
          className="fill-[#fbf8f1] font-sans font-black tracking-[0.26em] uppercase"
          style={{ fontSize: isSmall ? "10px" : "9px" }}
        >
          <textPath
            href={`#${pathId}-top`}
            startOffset="50%"
            textAnchor="middle"
          >
            DONATE
          </textPath>
        </text>

        {/* Left & Right Crimson Separation Accents */}
        <circle cx="15.5" cy="50" r="1.8" fill="#e4312b" />
        <circle cx="84.5" cy="50" r="1.8" fill="#e4312b" />

        {/* Bottom Text: PROMISE TO GAZA (or PTG for small) */}
        <text
          className="fill-[#fbf8f1] font-sans font-black tracking-[0.16em] uppercase"
          style={{ fontSize: isSmall ? "8.5px" : "6.8px" }}
        >
          <textPath
            href={`#${pathId}-bottom`}
            startOffset="50%"
            textAnchor="middle"
          >
            {isSmall ? "PTG" : "PROMISE TO GAZA"}
          </textPath>
        </text>
      </svg>

      {/* Center Olive Branch Emblem */}
      <div className="relative z-10 flex items-center justify-center">
        <OliveBranchIcon
          className={
            isSmall
              ? "size-5"
              : size === "md"
                ? "size-7"
                : "size-8 sm:size-9"
          }
        />
      </div>
    </Link>
  );
}
