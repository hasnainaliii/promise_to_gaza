import type { LabRegion, Palette, PaletteRole, ThemeLabState } from "@/types/theme_lab";

/* Builds the stylesheet the theme lab injects. It redefines the same semantic
   tokens theme.css uses, so every component follows without knowing the lab
   exists. Text colours are picked and nudged here until they pass WCAG AA,
   which keeps any palette, light or dark, readable. */

type Rgb = [number, number, number];

const WHITE: Rgb = [255, 255, 255];
const BLACK: Rgb = [0, 0, 0];
const ROLES: PaletteRole[] = ["primary", "secondary", "accent", "base"];

export function isHexColor(value: string) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
}

export function parseHex(hex: string): Rgb {
  const raw = hex.replace("#", "");
  const full = raw.length === 3 ? [...raw].map((c) => c + c).join("") : raw;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function toHex(rgb: Rgb) {
  return `#${rgb
    .map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mix(a: Rgb, b: Rgb, amountOfB: number): Rgb {
  return [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * amountOfB) as Rgb;
}

function linear(v: number) {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

export function luminance([r, g, b]: Rgb) {
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

export function contrast(a: Rgb, b: Rgb) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function withAlpha([r, g, b]: Rgb, a: number) {
  return `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)} / ${a})`;
}

/** Moves `fg` towards `toward` until it reaches `target` contrast on `bg`;
    null if that takes more than `maxShift` of the way. */
function reach(fg: Rgb, bg: Rgb, target: number, toward: Rgb, maxShift: number) {
  for (let t = 0; t <= maxShift + 1e-9; t += 0.05) {
    const candidate = mix(fg, toward, t);
    if (contrast(candidate, bg) >= target) return candidate;
  }
  return null;
}

/** The lightest and darkest colours the palette can offer as text, pushed
    towards white and black when the palette itself has no true extremes. */
export function textExtremes(palette: Palette) {
  const sorted = ROLES.map((r) => parseHex(palette[r])).sort(
    (a, b) => luminance(a) - luminance(b),
  );
  let dark = sorted[0];
  let light = sorted[sorted.length - 1];
  if (luminance(dark) > 0.03) dark = mix(dark, BLACK, 0.55);
  if (luminance(light) < 0.7) light = mix(light, WHITE, 0.6);
  return { light, dark };
}

function bestText(bg: Rgb, palette: Palette) {
  const { light, dark } = textExtremes(palette);
  return contrast(light, bg) >= contrast(dark, bg) ? light : dark;
}

/* Which palette colours to try, in order, for links and for numerals/dots on
   each role's surface. Mirrors the brand: clay labels on teal, teal on aqua. */
const ACCENT_ORDER: Record<PaletteRole, PaletteRole[]> = {
  primary: ["accent", "secondary", "base"],
  secondary: ["primary", "accent"],
  accent: ["primary", "base"],
  base: ["accent", "primary"],
};
const SOFT_ORDER: Record<PaletteRole, PaletteRole[]> = {
  primary: ["secondary", "accent"],
  secondary: ["primary", "accent"],
  accent: ["primary", "base"],
  base: ["primary", "secondary"],
};
const ANY_ORDER: PaletteRole[] = ["accent", "secondary", "primary", "base"];
const ACTION_ORDER: PaletteRole[] = ["secondary", "primary", "accent", "base"];

type Vars = Record<string, string>;

/** Every semantic token for a surface painted `bgHex`. `role` picks the
    accent order; regions painted a free colour pass null. */
export function surfaceVars(bgHex: string, palette: Palette, role: PaletteRole | null): Vars {
  const bg = parseHex(bgHex);
  const ink = bestText(bg, palette);
  const muted = reach(mix(ink, bg, 0.22), bg, 4.5, ink, 1) ?? ink;
  const faint = reach(mix(ink, bg, 0.38), bg, 3.2, ink, 1) ?? ink;

  const pick = (roles: PaletteRole[], target: number, maxShift: number) => {
    for (const r of roles) {
      const colour = parseHex(palette[r]);
      if (contrast(colour, bg) < 1.3) continue;
      const hit = reach(colour, bg, target, ink, maxShift);
      if (hit) return hit;
    }
    return null;
  };

  const accent = pick(role ? ACCENT_ORDER[role] : ANY_ORDER, 4.5, 0.45) ?? ink;
  const accentSoft = pick(role ? SOFT_ORDER[role] : ANY_ORDER, 3, 0.5) ?? faint;
  const action =
    ACTION_ORDER.map((r) => parseHex(palette[r])).find((c) => contrast(c, bg) >= 1.6) ?? ink;
  const onAction = bestText(action, palette);
  const isDark = luminance(bg) < 0.18;

  return {
    "--color-surface": toHex(bg),
    "--color-raised": isDark ? withAlpha(textExtremes(palette).light, 0.06) : withAlpha(WHITE, 0.45),
    "--color-ink": toHex(ink),
    "--color-ink-muted": toHex(muted),
    "--color-ink-faint": toHex(faint),
    "--color-rule": withAlpha(ink, 0.16),
    "--color-accent": toHex(accent),
    "--color-accent-soft": toHex(accentSoft),
    "--color-action": toHex(action),
    "--color-on-action": toHex(onAction),
    "--color-action-hover": toHex(mix(action, onAction, 0.15)),
    "--color-focus": toHex(accent),
  };
}

const SURFACE_SELECTOR: Record<PaletteRole, string> = {
  primary: ":root, .surface-primary",
  secondary: ".surface-secondary",
  accent: ".surface-accent",
  base: ".surface-base",
};

const REGION_SELECTOR: Record<"navbar" | "footer" | "pageHeader", string> = {
  // Over the hero the navbar stays transparent, so it keeps the photo's light text.
  navbar: 'header[data-theme-region="navbar"]:not([data-transparent])',
  footer: '[data-theme-region="footer"]',
  pageHeader: '[data-theme-region="page-header"]',
};

const EVERY_SURFACE =
  ":root, .surface-primary, .surface-secondary, .surface-accent, .surface-base, [data-section], [data-theme-region]";

function block(selector: string, vars: Vars, paint = false, important = false) {
  const flag = important ? " !important" : "";
  const lines = Object.entries(vars).map(([k, v]) => `  ${k}: ${v}${flag};`);
  if (paint) lines.push("  background-color: var(--color-surface);", "  color: var(--color-ink);");
  return `${selector} {\n${lines.join("\n")}\n}`;
}

export function samePalette(a: Palette, b: Palette) {
  return ROLES.every((r) => a[r].toLowerCase() === b[r].toLowerCase());
}

/** The full override stylesheet for a lab state. With the brand palette and
    no overrides it is empty, so the site renders exactly as shipped. */
export function buildThemeCss(state: ThemeLabState, brand: Palette) {
  const { palette, regions, sections } = state;
  const parts: string[] = [];

  if (!samePalette(palette, brand)) {
    const { light, dark } = textExtremes(palette);
    parts.push(
      block(":root", {
        // Raw tokens still read directly: photo overlays, the hero tint, selection.
        "--color-brand-primary": palette.primary,
        "--color-brand-secondary": palette.secondary,
        "--color-brand-accent": palette.accent,
        "--color-brand-base": palette.base,
        "--color-overlay": toHex(dark),
        "--color-on-overlay": toHex(light),
      }),
    );
    for (const role of ROLES) {
      parts.push(block(SURFACE_SELECTOR[role], surfaceVars(palette[role], palette, role)));
    }
    // Photo heroes, and the navbar while it floats over them, keep light text
    // on the darkened photo even when the palette's page colour is light.
    parts.push(
      block(
        'header[data-theme-region="navbar"][data-transparent], [data-photo-surface]',
        surfaceVars(toHex(dark), palette, "primary"),
      ),
    );
  }

  for (const [id, role] of Object.entries(sections)) {
    const safeId = id.replace(/[^a-z0-9-]/gi, "");
    parts.push(block(`[data-section="${safeId}"]`, surfaceVars(palette[role], palette, role), true));
  }

  for (const region of ["navbar", "footer", "pageHeader"] as const) {
    const colour = regions[region];
    if (colour) parts.push(block(REGION_SELECTOR[region], surfaceVars(colour, palette, null), true));
  }

  const { button, accentText } = regions as Partial<Record<LabRegion, string>>;
  if (button) {
    const action = parseHex(button);
    const onAction = bestText(action, palette);
    parts.push(
      block(
        EVERY_SURFACE,
        {
          "--color-action": toHex(action),
          "--color-on-action": toHex(onAction),
          "--color-action-hover": toHex(mix(action, onAction, 0.15)),
        },
        false,
        true,
      ),
    );
  }
  if (accentText) {
    parts.push(
      block(EVERY_SURFACE, { "--color-accent": accentText, "--color-focus": accentText }, false, true),
    );
  }

  return parts.join("\n\n");
}
