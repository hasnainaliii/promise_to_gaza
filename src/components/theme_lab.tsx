"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeLabPageTab } from "@/components/theme_lab_page_tab";
import { ThemeLabColoursTab, ThemeLabThemesTab } from "@/components/theme_lab_tabs";
import { useThemeLab } from "@/hooks/use_theme_lab";

const TABS = [
  { id: "themes", label: "Themes" },
  { id: "colours", label: "Colours" },
  { id: "page", label: "This page" },
] as const;

/** Team-only button and side panel for trying palettes on the real site.
    Loaded lazily, and only when useThemeLabEnabled allows it. */
export function ThemeLab() {
  const lab = useThemeLab();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("themes");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close theme lab" : "Open theme lab"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-10 items-center justify-center rounded-md border border-rule text-ink transition-colors duration-200 hover:bg-ink/10"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.9-.3-.9.3-1.9 1.3-1.9H17a4 4 0 0 0 4-4c0-5.5-4-10.2-9-10.2z" />
          <circle cx="7.5" cy="11" r="1.2" />
          <circle cx="10.5" cy="7" r="1.2" />
          <circle cx="15" cy="7.5" r="1.2" />
        </svg>
      </button>

      {open
        ? createPortal(
            <aside
              role="dialog"
              aria-label="Theme lab"
              data-theme-lab=""
              className="lab-chrome fixed inset-x-0 bottom-0 top-1/4 z-50 flex flex-col rounded-t-card border-t border-lab-line font-sans shadow-lift sm:top-0 sm:left-auto sm:w-sm sm:rounded-none sm:border-l sm:border-t-0"
            >
              <div className="flex items-start justify-between gap-4 border-b border-lab-line px-5 py-4">
                <div>
                  <h2 className="text-base font-semibold">Theme lab</h2>
                  <p className="mt-0.5 text-xs text-lab-muted">
                    Only you see this. Changes stay in this browser.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={lab.reset}
                    className="rounded-md border border-lab-line px-3 py-1.5 text-xs font-medium transition-colors hover:bg-lab-panel"
                  >
                    Reset to live
                  </button>
                  <button
                    ref={closeRef}
                    type="button"
                    aria-label="Close theme lab"
                    onClick={() => setOpen(false)}
                    className="inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-lab-panel"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>
              </div>

              <div role="tablist" aria-label="Theme lab sections" className="flex gap-1 border-b border-lab-line px-3 py-2">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    onClick={() => setTab(t.id)}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                      tab === t.id ? "bg-lab-panel text-lab-text" : "text-lab-muted hover:text-lab-text"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div role="tabpanel" className="flex-1 overflow-y-auto px-5 py-5">
                {tab === "themes" ? <ThemeLabThemesTab lab={lab} /> : null}
                {tab === "colours" ? <ThemeLabColoursTab lab={lab} /> : null}
                {tab === "page" ? <ThemeLabPageTab lab={lab} /> : null}
              </div>
            </aside>,
            document.body,
          )
        : null}
    </>
  );
}
