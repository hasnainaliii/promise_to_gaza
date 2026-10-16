"use client";

import { useEffect, useRef, useState } from "react";
import { DONATION_ACCOUNT, SITE_NAME, WHATSAPP_NUMBER } from "@/content/site";

type CopyState = "idle" | "copied" | "failed";

const COPY_FAILED_MESSAGE =
  "Couldn't copy automatically. Please select the number above and copy it.";

const WHATSAPP_RECEIPT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `Assalam o Alaikum, I have sent a donation for ${SITE_NAME}. Here is my transfer receipt/screenshot.`
)}`;

export function DonateAccountCard() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleCopy = async () => {
    let next: CopyState = "copied";
    try {
      await navigator.clipboard.writeText(DONATION_ACCOUNT.number);
    } catch {
      // Clipboard access is blocked on insecure origins, by permission
      // prompts and in some in-app browsers. Never claim it worked.
      next = "failed";
    }
    setCopyState(next);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    // The failure hint stays up: the donor still needs it to copy by hand.
    if (next === "copied") {
      resetTimer.current = setTimeout(() => setCopyState("idle"), 2200);
    }
  };

  return (
    <div className="flex flex-col gap-6 surface-parchment paper-grain rounded-card p-6 sm:p-9">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Account Details
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {DONATION_ACCOUNT.providers.map((p) => (
            <span
              key={p}
              className="rounded-lg border border-rule bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink shadow-xs"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Account Number Box */}
      <div className="rounded-xl border border-rule/80 bg-ink/5 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              Account / Mobile Number
            </span>
            <div className="mt-1 font-mono text-2xl sm:text-3xl font-bold tracking-wider text-ink select-all">
              {DONATION_ACCOUNT.display}
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 shadow-xs ${
              copyState === "copied"
                ? "bg-action text-on-action"
                : "bg-ink text-surface hover:bg-ink/85 hover:-translate-y-0.5"
            }`}
          >
            {copyState === "copied" ? (
              <svg
                aria-hidden="true"
                className="size-4.5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="size-4.5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
            <span>{copyState === "copied" ? "Copied!" : "Copy Number"}</span>
          </button>
        </div>
        {copyState === "failed" ? (
          <p className="mt-3 text-sm text-accent">{COPY_FAILED_MESSAGE}</p>
        ) : null}
        <span aria-live="polite" className="sr-only">
          {copyState === "copied"
            ? "Account number copied."
            : copyState === "failed"
              ? COPY_FAILED_MESSAGE
              : ""}
        </span>
      </div>

      {/* Account Title */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-rule bg-ink/5 p-4 sm:p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Account Title
          </span>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-ink">
            {DONATION_ACCOUNT.title}
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            Please verify this name in your banking app before sending.
          </p>
        </div>

        <div className="rounded-xl border border-rule bg-ink/5 p-4 sm:p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            Accepted Methods
          </span>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-ink">
            {DONATION_ACCOUNT.providers.join(" / ")}
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            Also accepts transfers from any Pakistani bank via IBFT / Raast.
          </p>
        </div>
      </div>

      {/* Recommended Micro-Donation Info */}
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-action text-on-action text-xs font-bold"
          >
            ✓
          </span>
          <div className="text-sm leading-relaxed text-ink">
            <strong className="font-semibold text-accent">
              Weekly Rs. 100 (~$0.35 USD) Model:
            </strong>{" "}
            You can give any amount you wish, or join hundreds of students contributing
            just Rs. 100 each week. Consistent small contributions fund major water tankers
            and food distributions in Gaza.
          </div>
        </div>
      </div>

      {/* Receipt confirmation link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-rule pt-4 text-xs text-ink-muted">
        <span>Transferred your donation? Share your receipt for confirmation.</span>
        <a
          href={WHATSAPP_RECEIPT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
        >
          <svg aria-hidden="true" className="size-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.949 3.018.949h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm3.393 8.354c-.149.42-1.077 1.01-1.492 1.045-.415.035-.826-.08-2.316-.692-1.49-.612-2.457-2.128-2.531-2.228-.075-.1-.611-.812-.611-1.549 0-.736.386-1.099.523-1.248.137-.149.3-.186.4-.186.1 0 .2 0 .287.005.09.005.21-.035.328.25.118.286.406.99.442 1.063.036.074.06.161.011.26-.05.099-.074.16-.148.247-.074.086-.156.192-.223.258-.074.074-.151.155-.065.303.086.148.382.631.819 1.02.563.501 1.038.656 1.186.73.149.074.236.062.324-.037.087-.1.372-.434.471-.582.099-.149.198-.124.334-.074.137.05.867.409 1.015.483.149.075.248.112.285.174.037.062.037.36-.112.78z" />
          </svg>
          Send Receipt on WhatsApp <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </div>
  );
}
