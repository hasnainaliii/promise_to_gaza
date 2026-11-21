"use client";

import { useId, useState, type ReactNode } from "react";
import { samePalette } from "@/theme/theme_lab_css";
import { ROLE_LABELS, ROLE_SHARE, THEME_PRESETS } from "@/theme/theme_presets";
import type { LabRegion, Palette, PaletteRole, ThemeLabApi } from "@/types/theme_lab";

export const ROLES: PaletteRole[] = ["primary", "secondary", "accent", "base"];

const SHARE_BASIS: Record<PaletteRole, string> = {
  primary: "basis-1/2",
  secondary: "basis-1/5",
  accent: "basis-1/5",
  base: "basis-1/10",
};

const REGIONS: { id: LabRegion; label: string; hint: string; from: PaletteRole }[] = [
  { id: "navbar", label: "Navbar", hint: "Once you scroll past the photo", from: "primary" },
  { id: "footer", label: "Footer", hint: "Bottom of every page", from: "base" },
  { id: "pageHeader", label: "Page headers", hint: "Top of Donate, Contact, Updates", from: "secondary" },
  { id: "button", label: "Buttons", hint: "Donate and every call to action", from: "secondary" },
  { id: "accentText", label: "Links & labels", hint: "Eyebrows, links, italic words", from: "secondary" },
];

const FIELD = "rounded-md border border-lab-line bg-lab-panel px-2.5 py-1.5 text-sm text-lab-text";

export function LabGroup({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-lab-muted">{title}</h3>
        {hint ? <p className="mt-1 text-xs text-lab-muted">{hint}</p> : null}
      </div>
      {children}
    </section>
  );
}

/** The palette drawn at its brand proportions, like the brand sheet. */
export function PaletteBar({ palette }: { palette: Palette }) {
  return (
    <span aria-hidden="true" className="flex h-10 overflow-hidden rounded-md">
      {ROLES.map((role) => (
        <span key={role} className={SHARE_BASIS[role]} style={{ backgroundColor: palette[role] }} />
      ))}
    </span>
  );
}

function ThemeCard({
  name,
  note,
  palette,
  active,
  onSelect,
}: {
  name: string;
  note?: string;
  palette: Palette;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onSelect}
      className={`flex w-full flex-col gap-2 rounded-lg border p-2 text-left transition-colors ${
        active ? "border-lab-focus bg-lab-panel" : "border-lab-line hover:bg-lab-panel"
      }`}
    >
      <PaletteBar palette={palette} />
      <span className="px-0.5">
        <span className="block text-sm font-medium">{name}</span>
        {note ? <span className="block text-xs text-lab-muted">{note}</span> : null}
      </span>
    </button>
  );
}

export function ThemeLabThemesTab({ lab }: { lab: ThemeLabApi }) {
  const { state } = lab;
  return (
    <div className="flex flex-col gap-7">
      {state.saved.length ? (
        <LabGroup title="Your saved themes">
          <ul className="grid grid-cols-2 gap-3">
            {state.saved.map((theme, i) => (
              <li key={`${theme.name}-${i}`} className="relative">
                <ThemeCard
                  name={theme.name}
                  palette={theme.palette}
                  active={samePalette(theme.palette, state.palette)}
                  onSelect={() => lab.applyPalette(theme.palette)}
                />
                <button
                  type="button"
                  aria-label={`Delete ${theme.name}`}
                  onClick={() => lab.removeSaved(i)}
                  className="absolute right-3 top-3 rounded bg-lab-bg px-1.5 text-xs text-lab-muted hover:text-lab-text"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </LabGroup>
      ) : null}

      <LabGroup
        title={`${THEME_PRESETS.length} themes`}
        hint="Each bar shows the colours at their share of the page: 50 · 20 · 20 · 10."
      >
        <ul className="grid grid-cols-2 gap-3">
          {THEME_PRESETS.map((preset) => (
            <li key={preset.id}>
              <ThemeCard
                name={preset.name}
                note={preset.note}
                palette={preset.palette}
                active={state.presetId === preset.id}
                onSelect={() => lab.applyPreset(preset)}
              />
            </li>
          ))}
        </ul>
      </LabGroup>
    </div>
  );
}

function ColourField({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (hex: string) => void;
}) {
  const id = useId();
  // While typing, the text box shows the draft; it only applies once it is a full hex.
  const [draft, setDraft] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-3">
      <input
        type="color"
        aria-label={`${label} colour`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-12 shrink-0 cursor-pointer rounded-md border border-lab-line bg-lab-panel p-1"
      />
      <div className="min-w-0 flex-1">
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
        {hint ? <span className="block text-xs text-lab-muted">{hint}</span> : null}
      </div>
      <input
        id={id}
        type="text"
        spellCheck={false}
        value={draft ?? value}
        onFocus={() => setDraft(value)}
        onBlur={() => setDraft(null)}
        onChange={(e) => {
          const next = e.target.value.trim();
          setDraft(next);
          if (/^#[0-9a-f]{6}$/i.test(next)) onChange(next.toLowerCase());
        }}
        className={`${FIELD} w-24 font-mono`}
      />
    </div>
  );
}

function RegionField({
  region,
  lab,
}: {
  region: (typeof REGIONS)[number];
  lab: ThemeLabApi;
}) {
  const value = lab.state.regions[region.id];
  if (!value) {
    return (
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-10 w-12 shrink-0 rounded-md border border-dashed border-lab-line" />
        <div className="min-w-0 flex-1">
          <span className="block text-sm font-medium">{region.label}</span>
          <span className="block text-xs text-lab-muted">{region.hint} · follows palette</span>
        </div>
        <button
          type="button"
          onClick={() => lab.setRegion(region.id, lab.state.palette[region.from])}
          className="rounded-md border border-lab-line px-3 py-1.5 text-xs font-medium hover:bg-lab-panel"
        >
          Own colour
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1.5">
      <ColourField
        label={region.label}
        hint={region.hint}
        value={value}
        onChange={(hex) => lab.setRegion(region.id, hex)}
      />
      <button
        type="button"
        onClick={() => lab.setRegion(region.id, null)}
        className="self-end text-xs text-lab-muted underline-offset-2 hover:text-lab-text hover:underline"
      >
        Follow palette again
      </button>
    </div>
  );
}

export function ThemeLabColoursTab({ lab }: { lab: ThemeLabApi }) {
  const { state } = lab;
  const [name, setName] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const settings = JSON.stringify(
    { palette: state.palette, regions: state.regions, sections: state.sections },
    null,
    2,
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(settings);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <LabGroup title="Palette" hint="The four colours every section is built from. Text colours adjust to stay readable.">
        <PaletteBar palette={state.palette} />
        {ROLES.map((role) => (
          <ColourField
            key={role}
            label={`${ROLE_LABELS[role].name} · ${ROLE_SHARE[role]}%`}
            hint={ROLE_LABELS[role].use}
            value={state.palette[role]}
            onChange={(hex) => lab.setColour(role, hex)}
          />
        ))}
      </LabGroup>

      <LabGroup title="Parts of the site" hint="Give any part its own colour, separate from the palette.">
        {REGIONS.map((region) => (
          <RegionField key={region.id} region={region} lab={lab} />
        ))}
      </LabGroup>

      <LabGroup title="Save or share">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            lab.saveCurrent(name.trim() || `My theme ${state.saved.length + 1}`);
            setName("");
          }}
        >
          <input
            type="text"
            aria-label="Theme name"
            placeholder="Name this theme"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${FIELD} min-w-0 flex-1`}
          />
          <button type="submit" className="rounded-md bg-lab-text px-3 py-1.5 text-sm font-medium text-lab-bg">
            Save
          </button>
        </form>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-lab-line px-3 py-2 text-sm font-medium hover:bg-lab-panel"
        >
          Copy settings to send to Claude
        </button>
        {copyStatus === "copied" ? (
          <p className="text-xs text-lab-muted">Copied. Paste it in the chat to make this the real theme.</p>
        ) : null}
        {copyStatus === "failed" ? (
          <textarea
            readOnly
            aria-label="Theme settings"
            value={settings}
            className={`${FIELD} h-40 font-mono text-xs`}
          />
        ) : null}
      </LabGroup>
    </div>
  );
}
