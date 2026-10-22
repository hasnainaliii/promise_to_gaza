"use client";

import { useCallback, useEffect, useState } from "react";
import { buildThemeCss } from "@/theme/theme_lab_css";
import { BRAND_PALETTE, BRAND_PRESET_ID } from "@/theme/theme_presets";
import type {
  LabRegion,
  Palette,
  PaletteRole,
  ThemeLabState,
  ThemePreset,
} from "@/types/theme_lab";

const STORAGE_KEY = "sfu-theme-lab";
const STYLE_ID = "theme-lab-css";

const DEFAULT_STATE: ThemeLabState = {
  palette: BRAND_PALETTE,
  presetId: BRAND_PRESET_ID,
  regions: {},
  sections: {},
  saved: [],
};

function readStored(): ThemeLabState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    // Corrupt or blocked storage: start from the brand theme.
  }
  return DEFAULT_STATE;
}

/** State for the theme lab, persisted in this browser and applied to the page
    as an injected stylesheet. Only ever runs client-side (the lab is loaded
    with ssr: false), so reading storage in the initialiser is safe. */
export function useThemeLab() {
  const [state, setState] = useState<ThemeLabState>(readStored);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Not persisting is fine; the theme still applies for this visit.
    }

    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = buildThemeCss(state, BRAND_PALETTE);
  }, [state]);

  useEffect(() => () => document.getElementById(STYLE_ID)?.remove(), []);

  const applyPreset = useCallback((preset: ThemePreset) => {
    setState((s) => ({ ...s, palette: preset.palette, presetId: preset.id }));
  }, []);

  const applyPalette = useCallback((palette: Palette) => {
    setState((s) => ({ ...s, palette, presetId: null }));
  }, []);

  const setColour = useCallback((role: PaletteRole, hex: string) => {
    setState((s) => ({ ...s, palette: { ...s.palette, [role]: hex }, presetId: null }));
  }, []);

  const setRegion = useCallback((region: LabRegion, hex: string | null) => {
    setState((s) => {
      const regions = { ...s.regions };
      if (hex) regions[region] = hex;
      else delete regions[region];
      return { ...s, regions };
    });
  }, []);

  const setSection = useCallback((id: string, role: PaletteRole | null) => {
    setState((s) => {
      const sections = { ...s.sections };
      if (role) sections[id] = role;
      else delete sections[id];
      return { ...s, sections };
    });
  }, []);

  const saveCurrent = useCallback((name: string) => {
    setState((s) => ({ ...s, saved: [...s.saved, { name, palette: s.palette }] }));
  }, []);

  const removeSaved = useCallback((index: number) => {
    setState((s) => ({ ...s, saved: s.saved.filter((_, i) => i !== index) }));
  }, []);

  /** Back to the live site's look; saved themes are kept. */
  const reset = useCallback(() => {
    setState((s) => ({ ...DEFAULT_STATE, saved: s.saved }));
  }, []);

  return {
    state,
    applyPreset,
    applyPalette,
    setColour,
    setRegion,
    setSection,
    saveCurrent,
    removeSaved,
    reset,
  };
}
