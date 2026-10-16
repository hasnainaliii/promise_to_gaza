import { SITE_WORDMARK } from "@/content/site";

/** The name set as a wordmark: the connecting word drops to a lighter italic
    in the surface's accent colour. Size and weight come from the caller. */
export function SiteWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading tracking-tight whitespace-nowrap ${className}`}>
      {SITE_WORDMARK.lead}{" "}
      <em className="font-normal italic text-accent">{SITE_WORDMARK.connector}</em>{" "}
      {SITE_WORDMARK.tail}
    </span>
  );
}
