"use client";

import { useState } from "react";

interface DonateAccountCardProps {
  accountNumber?: string;
  accountTitle?: string;
  providers?: string[];
  whatsappNumber?: string;
}

export function DonateAccountCard({
  accountNumber = "0335 9756566",
  accountTitle = "Muhammad Hassan Azmat",
  providers = ["Easypaisa", "Sadapay"],
  whatsappNumber = "923359756566",
}: DonateAccountCardProps) {
  const [copied, setCopied] = useState(false);

  const cleanNumber = accountNumber.replace(/\s+/g, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Assalam o Alaikum, I have sent a donation for Promise to Gaza. Here is my transfer receipt/screenshot."
  )}`;

  return (
    <div className="flex flex-col gap-6 rounded-card border-2 border-palestine-green/30 bg-white p-6 sm:p-9 shadow-soft">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-charcoal">
            Account Details
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {providers.map((p) => (
            <span
              key={p}
              className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-charcoal shadow-xs"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Account Number Box */}
      <div className="rounded-xl border border-line/80 bg-surface/80 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-warm-gray">
              Account / Mobile Number
            </span>
            <div className="mt-1 font-mono text-2xl sm:text-3xl font-bold tracking-wider text-charcoal select-all">
              {accountNumber}
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 shadow-xs ${
              copied
                ? "bg-palestine-green text-white"
                : "bg-charcoal text-white hover:bg-black hover:-translate-y-0.5"
            }`}
            aria-label="Copy account number"
          >
            {copied ? (
              <>
                <svg
                  className="size-4.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="size-4.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy Number</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Account Title */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface/50 p-4 sm:p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-warm-gray">
            Account Title
          </span>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-charcoal">
            {accountTitle}
          </p>
          <p className="mt-1 text-xs text-warm-gray">
            Please verify this name in your banking app before sending.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface/50 p-4 sm:p-5">
          <span className="text-xs font-bold uppercase tracking-wider text-warm-gray">
            Accepted Methods
          </span>
          <p className="mt-1 text-lg sm:text-xl font-semibold text-charcoal">
            Easypaisa / Sadapay
          </p>
          <p className="mt-1 text-xs text-warm-gray">
            Also accepts transfers from any Pakistani bank via IBFT / Raast.
          </p>
        </div>
      </div>

      {/* Recommended Micro-Donation Info */}
      <div className="rounded-xl border border-olive/30 bg-olive-tint/40 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-palestine-green text-white text-xs font-bold">
            ✓
          </span>
          <div className="text-sm leading-relaxed text-charcoal">
            <strong className="font-semibold text-palestine-green-deep">
              Weekly Rs. 100 (~$0.35 USD) Model:
            </strong>{" "}
            You can give any amount you wish, or join hundreds of students contributing
            just Rs. 100 each week. Consistent small contributions fund major water tankers
            and food distributions in Gaza.
          </div>
        </div>
      </div>

      {/* Receipt confirmation link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-line pt-4 text-xs text-warm-gray">
        <span>Transferred your donation? Share your receipt for confirmation.</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-palestine-green-deep hover:underline"
        >
          <svg className="size-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.949 3.018.949h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm3.393 8.354c-.149.42-1.077 1.01-1.492 1.045-.415.035-.826-.08-2.316-.692-1.49-.612-2.457-2.128-2.531-2.228-.075-.1-.611-.812-.611-1.549 0-.736.386-1.099.523-1.248.137-.149.3-.186.4-.186.1 0 .2 0 .287.005.09.005.21-.035.328.25.118.286.406.99.442 1.063.036.074.06.161.011.26-.05.099-.074.16-.148.247-.074.086-.156.192-.223.258-.074.074-.151.155-.065.303.086.148.382.631.819 1.02.563.501 1.038.656 1.186.73.149.074.236.062.324-.037.087-.1.372-.434.471-.582.099-.149.198-.124.334-.074.137.05.867.409 1.015.483.149.075.248.112.285.174.037.062.037.36-.112.78z" />
          </svg>
          Send Receipt on WhatsApp &rarr;
        </a>
      </div>
    </div>
  );
}
