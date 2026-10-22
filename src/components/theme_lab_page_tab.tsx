"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LabGroup, ROLES } from "@/components/theme_lab_tabs";
import { parseHex } from "@/theme/theme_lab_css";
import { ROLE_LABELS, ROLE_SHARE } from "@/theme/theme_presets";
import type { BalanceBucket, Palette, PaletteRole, ThemeLabApi } from "@/types/theme_lab";

const BUCKETS: BalanceBucket[] = [...ROLES, "photos"];

/** Normalises any CSS colour the browser reports (rgb, oklab, color-mix…) to
    RGBA by painting it on a 1px canvas. */
function makeColourReader() {
  const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  const cache = new Map<string, number[]>();
  return (css: string) => {
    const hit = cache.get(css);
    if (hit) return hit;
    let rgba = [0, 0, 0, 0];
    if (ctx) {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = css;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      rgba = [d[0], d[1], d[2], d[3] / 255];
    }
    cache.set(css, rgba);
    return rgba;
  };
}

/** Rough share of the page painted in each palette colour. Every opaque
    background claims its area minus what its own opaque children cover;
    images and video count as photos. Text is not counted. */
function measureBalance(palette: Palette): Record<BalanceBucket, number> {
  const read = makeColourReader();
  const roleColours = ROLES.map((role) => [role, parseHex(palette[role])] as const);
  const nearest = ([r, g, b]: number[]): PaletteRole =>
    roleColours.reduce(
      (best, [role, [pr, pg, pb]]) => {
        const d = (r - pr) ** 2 + (g - pg) ** 2 + (b - pb) ** 2;
        return d < best.d ? { role, d } : best;
      },
      { role: "primary" as PaletteRole, d: Infinity },
    ).role;

  const width = document.documentElement.clientWidth;
  const boxes: { bucket: BalanceBucket; own: number }[] = [
    {
      bucket: nearest(read(getComputedStyle(document.body).backgroundColor)),
      own: width * document.documentElement.scrollHeight,
    },
  ];

  const walk = (el: Element, owner: number) => {
    for (const child of Array.from(el.children)) {
      if (child.hasAttribute("data-theme-lab") || child.tagName === "NEXTJS-PORTAL") continue;
      const style = getComputedStyle(child);
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") continue;
      const media = child.tagName === "IMG" || child.tagName === "VIDEO";
      const rgba = media ? [0, 0, 0, 1] : read(style.backgroundColor);
      let next = owner;
      if (media || rgba[3] >= 0.6) {
        const rect = child.getBoundingClientRect();
        const area = Math.min(rect.width, width) * rect.height;
        if (area > 0) {
          boxes.push({ bucket: media ? "photos" : nearest(rgba), own: area });
          boxes[owner].own -= area;
          next = boxes.length - 1;
        }
      }
      if (!media) walk(child, next);
    }
  };
  walk(document.body, 0);

  const totals = Object.fromEntries(BUCKETS.map((b) => [b, 0])) as Record<BalanceBucket, number>;
  for (const box of boxes) totals[box.bucket] += Math.max(0, box.own);
  const sum = BUCKETS.reduce((n, b) => n + totals[b], 0) || 1;
  for (const b of BUCKETS) totals[b] = Math.round((totals[b] / sum) * 100);
  return totals;
}

function scanSections() {
  const seen = new Map<string, string>();
  document.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => {
    const id = el.dataset.section;
    if (id && !seen.has(id)) seen.set(id, el.dataset.sectionLabel ?? id);
  });
  return [...seen].map(([id, label]) => ({ id, label }));
}

export function ThemeLabPageTab({ lab }: { lab: ThemeLabApi }) {
  const pathname = usePathname();
  const { state } = lab;
  const [balance, setBalance] = useState<Record<BalanceBucket, number> | null>(null);
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);

  // Waits for the page (and the lab's own stylesheet) to settle before measuring.
  useEffect(() => {
    const timer = setTimeout(() => {
      setBalance(measureBalance(state.palette));
      setSections(scanSections());
    }, 450);
    return () => clearTimeout(timer);
  }, [pathname, state]);

  return (
    <div className="flex flex-col gap-7">
      <LabGroup
        title="Colour balance on this page"
        hint="Measured from what is on screen now, against the brand target. Text is not counted."
      >
        {balance ? (
          <>
            <span aria-hidden="true" className="flex h-8 overflow-hidden rounded-md">
              {BUCKETS.map((b) =>
                balance[b] > 0 ? (
                  <span
                    key={b}
                    className={b === "photos" ? "bg-lab-muted" : undefined}
                    style={{
                      flexGrow: balance[b],
                      backgroundColor: b === "photos" ? undefined : state.palette[b],
                    }}
                  />
                ) : null,
              )}
            </span>
            <table className="w-full text-sm">
              <thead className="text-xs text-lab-muted">
                <tr>
                  <th className="pb-1 text-left font-normal">Colour</th>
                  <th className="pb-1 text-right font-normal">Now</th>
                  <th className="pb-1 text-right font-normal">Target</th>
                </tr>
              </thead>
              <tbody>
                {BUCKETS.map((b) => (
                  <tr key={b} className="border-t border-lab-line">
                    <td className="py-1.5">
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={`size-3 rounded-sm ${b === "photos" ? "bg-lab-muted" : ""}`}
                          style={b === "photos" ? undefined : { backgroundColor: state.palette[b] }}
                        />
                        {b === "photos" ? "Photos" : ROLE_LABELS[b].name}
                      </span>
                    </td>
                    <td className="py-1.5 text-right tabular-nums">{balance[b]}%</td>
                    <td className="py-1.5 text-right tabular-nums text-lab-muted">
                      {b === "photos" ? "-" : `${ROLE_SHARE[b]}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-xs text-lab-muted">Measuring…</p>
        )}
      </LabGroup>

      <LabGroup
        title="Sections on this page"
        hint="Repaint any section in a palette colour to shift the balance. Click a name to scroll to it."
      >
        {sections.length ? (
          <ul className="flex flex-col gap-2">
            {sections.map(({ id, label }) => {
              const role = state.sections[id];
              return (
                <li key={id} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="size-4 shrink-0 rounded-sm border border-lab-line"
                    style={role ? { backgroundColor: state.palette[role] } : undefined}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector(`[data-section="${id}"]`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="min-w-0 flex-1 truncate text-left text-sm hover:underline"
                  >
                    {label}
                  </button>
                  <select
                    aria-label={`Colour for ${label}`}
                    value={role ?? ""}
                    onChange={(e) => lab.setSection(id, (e.target.value || null) as PaletteRole | null)}
                    className="rounded-md border border-lab-line bg-lab-panel px-2 py-1 text-sm text-lab-text"
                  >
                    <option value="">As designed</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {ROLE_LABELS[r].name}
                      </option>
                    ))}
                  </select>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-xs text-lab-muted">No adjustable sections on this page.</p>
        )}
      </LabGroup>
    </div>
  );
}
