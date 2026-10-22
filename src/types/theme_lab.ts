import type { useThemeLab } from "@/hooks/use_theme_lab";

/** The four palette roles every theme is built from, with the brand's share
    of the page for each. */
export type PaletteRole = "primary" | "secondary" | "accent" | "base";

export type Palette = Record<PaletteRole, string>;

export interface ThemePreset {
  id: string;
  name: string;
  note: string;
  palette: Palette;
}

/** Parts of the site the lab can recolour independently of the palette. */
export type LabRegion = "navbar" | "footer" | "pageHeader" | "button" | "accentText";

export interface ThemeLabState {
  palette: Palette;
  /** The preset the palette came from; null once a colour is edited by hand. */
  presetId: string | null;
  regions: Partial<Record<LabRegion, string>>;
  /** Section id (the data-section attribute) to the role it should be painted in. */
  sections: Record<string, PaletteRole>;
  saved: { name: string; palette: Palette }[];
}

export type BalanceBucket = PaletteRole | "photos";

/** Everything the lab panel can read and do; returned by useThemeLab. */
export type ThemeLabApi = ReturnType<typeof useThemeLab>;
