import type { CurrencyCode, Money } from "@/types/content";

/** Whole amounts drop the decimals; anything with cents always shows both.
    Values are never rounded — only formatted. */
export function formatMoney(
  { currency, minorUnits }: Money,
  locale = "en-US",
): string {
  const hasCents = minorUnits % 100 !== 0;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(minorUnits / 100);
}

export function formatMinorUnits(
  minorUnits: number,
  currency: CurrencyCode,
): string {
  return formatMoney({ currency, minorUnits });
}

/** Parses a typed amount into exact integer minor units. Returns null for
    anything that is not a plain amount with at most two decimal places, so a
    third decimal is rejected rather than quietly rounded away. */
export function parseAmountToMinorUnits(raw: string): number | null {
  const trimmed = raw.trim().replace(/,/g, "");
  if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) return null;
  const [whole, fraction = ""] = trimmed.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}
