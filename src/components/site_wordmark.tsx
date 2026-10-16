import { SITE_WORDMARK } from "@/content/site";

/** The name set as a wordmark. Size, weight and base colour come from the
    caller; accentClass colours the italic connecting word. */
export function SiteWordmark({
  accentClass = "text-crimson",
  className = "",
}: {
  accentClass?: string;
  className?: string;
}) {
  return (
    <span className={`font-heading tracking-tight whitespace-nowrap ${className}`}>
      {SITE_WORDMARK.lead}{" "}
      <em className={`font-normal italic ${accentClass}`}>{SITE_WORDMARK.connector}</em>{" "}
      {SITE_WORDMARK.tail}
    </span>
  );
}
