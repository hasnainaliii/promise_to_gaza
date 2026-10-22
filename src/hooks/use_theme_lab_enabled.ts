"use client";

import { startTransition, useEffect, useState } from "react";

const FLAG_KEY = "sfu-theme-lab-enabled";

/** The theme lab is a team tool, never shown to visitors. It is always on in
    development; on the live site, visiting any page with ?theme-lab turns it
    on for that browser and ?theme-lab=off turns it off again. */
export function useThemeLabEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("theme-lab");
    let stored = false;
    try {
      if (param === "off") localStorage.removeItem(FLAG_KEY);
      else if (param !== null) localStorage.setItem(FLAG_KEY, "1");
      stored = localStorage.getItem(FLAG_KEY) === "1";
    } catch {
      // Storage can be blocked (private mode); the lab then only works in development.
    }
    startTransition(() => {
      setEnabled(process.env.NODE_ENV === "development" || stored);
    });
  }, []);

  return enabled;
}
