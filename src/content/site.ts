import type { CurrencyCode } from "@/types/content";

export const SITE_NAME = "Promise to Gaza";
export const SITE_TAGLINE = "Welfare and relief work for families in Gaza";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
] as const;

export const DONATION_CURRENCY: CurrencyCode = "USD";

/** Bare amounts only. We do not claim what any amount buys. */
export const DONATION_PRESETS_MINOR_UNITS = [2500, 5000, 10000, 25000];

export const DONATION_MIN_MINOR_UNITS = 100;
export const DONATION_MAX_MINOR_UNITS = 10_000_00;
