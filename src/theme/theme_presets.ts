import type { Palette, PaletteRole, ThemePreset } from "@/types/theme_lab";

/** Target share of the page for each palette role, from the brand sheet. */
export const ROLE_SHARE: Record<PaletteRole, number> = {
  primary: 50,
  secondary: 20,
  accent: 20,
  base: 10,
};

export const ROLE_LABELS: Record<PaletteRole, { name: string; use: string }> = {
  primary: { name: "Primary", use: "Page background, navbar" },
  secondary: { name: "Secondary", use: "Buttons, statement sections, links" },
  accent: { name: "Accent", use: "Cards, warm sections" },
  base: { name: "Base", use: "Text, footer, full-width dark bands" },
};

/** The palette the live site ships with; choosing it clears the lab. */
export const BRAND_PRESET_ID = "ivory-crimson";

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "ivory-crimson",
    name: "Ivory & Crimson",
    note: "The live site today",
    palette: { primary: "#f0eee8", secondary: "#720c0c", accent: "#d4ac90", base: "#0c0c0c" },
  },
  {
    id: "night-teal",
    name: "Night Teal",
    note: "Stand for Ummah, darker teal",
    palette: { primary: "#0f2e2e", secondary: "#9acaca", accent: "#d4ac90", base: "#f6f0e6" },
  },
  {
    id: "deep-teal",
    name: "Deep Teal",
    note: "Stand for Ummah brand sheet",
    palette: { primary: "#244f58", secondary: "#9acaca", accent: "#d4ac90", base: "#f0e8dc" },
  },
  {
    id: "jet-crimson",
    name: "Jet & Crimson",
    note: "The Promise for Ummah palette",
    palette: { primary: "#0c0c0c", secondary: "#720c0c", accent: "#d4ac90", base: "#f0e8dc" },
  },
  {
    id: "olive-berry",
    name: "Olive & Berry",
    note: "The original light site",
    palette: { primary: "#fbf8f1", secondary: "#68745a", accent: "#b94b52", base: "#292821" },
  },
  {
    id: "olive-grove",
    name: "Olive Grove",
    note: "Deep olive, sage and terracotta",
    palette: { primary: "#1f2a1d", secondary: "#a8b89a", accent: "#c98b5e", base: "#f3eee3" },
  },
  {
    id: "midnight-saffron",
    name: "Midnight & Saffron",
    note: "Ink blue with a saffron call to action",
    palette: { primary: "#141b33", secondary: "#9aa7d1", accent: "#e3a64f", base: "#f5f0e6" },
  },
  {
    id: "desert-night",
    name: "Desert Night",
    note: "Espresso, sand and rust",
    palette: { primary: "#2b2118", secondary: "#d9c3a5", accent: "#c2683f", base: "#f7f1e8" },
  },
  {
    id: "plum-gold",
    name: "Plum & Gold",
    note: "Dark plum with old gold",
    palette: { primary: "#2a1730", secondary: "#c9b3d1", accent: "#d7a84e", base: "#f6f0e8" },
  },
  {
    id: "harbour",
    name: "Harbour Blue",
    note: "Navy, sea mist and peach",
    palette: { primary: "#0f2a43", secondary: "#9cc3db", accent: "#e8a87c", base: "#f5f1ea" },
  },
  {
    id: "charcoal-coral",
    name: "Charcoal & Coral",
    note: "Neutral charcoal, warm coral",
    palette: { primary: "#1e1e1e", secondary: "#bfc7c9", accent: "#e07a5f", base: "#f4efe6" },
  },
  {
    id: "burgundy-cream",
    name: "Burgundy & Cream",
    note: "Deep wine with dusty rose",
    palette: { primary: "#3a0f18", secondary: "#d9b8b0", accent: "#d4ac90", base: "#f6efe6" },
  },
  {
    id: "sage-paper",
    name: "Sage Paper",
    note: "Light: paper, sage and forest",
    palette: { primary: "#f4f1ea", secondary: "#b9c7b4", accent: "#2f5d50", base: "#1e2b26" },
  },
  {
    id: "parchment-teal",
    name: "Parchment & Teal",
    note: "Light version of the brand",
    palette: { primary: "#f6f0e6", secondary: "#9acaca", accent: "#c08a63", base: "#0f2e2e" },
  },
  {
    id: "dome-gold",
    name: "Dome Gold",
    note: "Slate night with Al-Aqsa gold",
    palette: { primary: "#102027", secondary: "#a7c4c2", accent: "#c9a227", base: "#f5efe0" },
  },
  {
    id: "terracotta-dusk",
    name: "Terracotta Dusk",
    note: "Brown dusk, clay and brick",
    palette: { primary: "#3b2a25", secondary: "#e2c2a6", accent: "#b5543a", base: "#f8f1e7" },
  },
  {
    id: "emerald-ivory",
    name: "Emerald & Ivory",
    note: "Rich green with warm gold",
    palette: { primary: "#0e3b2e", secondary: "#a9d3b9", accent: "#e2b65b", base: "#faf6ee" },
  },
  {
    id: "slate-apricot",
    name: "Slate & Apricot",
    note: "Cool slate, bright apricot",
    palette: { primary: "#263238", secondary: "#b0bec5", accent: "#f2a65a", base: "#f7f3ec" },
  },
  {
    id: "pine-clay",
    name: "Pine & Clay",
    note: "Pine green with the brand clay",
    palette: { primary: "#1c3a32", secondary: "#9fb8a8", accent: "#d4ac90", base: "#f2ece2" },
  },
  {
    id: "tatreez-thread",
    name: "Tatreez Thread",
    note: "Embroidery red and gold thread",
    palette: { primary: "#201a17", secondary: "#9e2a2b", accent: "#d9a441", base: "#f4ebdd" },
  },
  {
    id: "dawn",
    name: "Dawn",
    note: "Light: cream, peach and brick",
    palette: { primary: "#fbf6ee", secondary: "#f1d9c2", accent: "#9e3d2c", base: "#2b2420" },
  },
  {
    id: "nordic-calm",
    name: "Nordic Calm",
    note: "Light: cool grey and spruce",
    palette: { primary: "#f2f4f3", secondary: "#c8d5d1", accent: "#2e5e59", base: "#1d2524" },
  },
  {
    id: "night-sand",
    name: "Night Sky & Sand",
    note: "Near-black blue with sand",
    palette: { primary: "#0b1622", secondary: "#8fa9c2", accent: "#d6b98c", base: "#eee7da" },
  },
  {
    id: "mulberry",
    name: "Mulberry",
    note: "Mulberry, lilac and apricot",
    palette: { primary: "#2d1b2e", secondary: "#b79ab4", accent: "#e8b07c", base: "#f6eee6" },
  },
  {
    id: "cedar",
    name: "Cedar",
    note: "Cedar bark, stone and amber",
    palette: { primary: "#2e2a21", secondary: "#b8ad93", accent: "#c7863f", base: "#f4efe4" },
  },
  {
    id: "indigo-clay",
    name: "Indigo & Clay",
    note: "Indigo with the brand clay",
    palette: { primary: "#1e2240", secondary: "#a9b4d8", accent: "#d4ac90", base: "#f4eee6" },
  },
];

export const BRAND_PALETTE: Palette = THEME_PRESETS[0].palette;
