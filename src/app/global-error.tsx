"use client";

import { ActionButton } from "@/components/action_button";
import { SITE_NAME } from "@/content/site";
import { fontVariables } from "@/theme/fonts";
import "./globals.css";

/** Replaces the root layout when the layout itself fails, so it renders its
    own document and cannot rely on the header, footer or Next.js <Link>. */
export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-dvh flex-col bg-surface">
        <title>{`Something went wrong - ${SITE_NAME}`}</title>
        <main className="mx-auto flex max-w-narrow flex-col items-start gap-6 px-5 py-section-lg sm:px-8">
          <h1 className="font-heading text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Something went wrong at our end.
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted">
            The site did not load properly. It is a problem on our side, not
            something you did. Trying again often clears it.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionButton variant="secondary" size="lg" onClick={() => retry()}>
              Try loading it again
            </ActionButton>
            {/* A full reload, not client navigation: the root layout itself just failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-rule bg-raised px-7 py-2.5 text-base font-medium text-ink shadow-xs transition-all duration-200 ease-soft hover:border-accent"
            >
              Back to the home page
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
