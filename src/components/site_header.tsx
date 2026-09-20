"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, startTransition } from "react";
import { PlantDonateButton } from "@/components/plant_donate_button";
import { NAV_LINKS, SITE_NAME } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const hasHero = pathname === "/" || pathname === "/our-work";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isTransparent = hasHero && !isScrolled && !menuOpen;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isTransparent
          ? "border-b-0 bg-transparent shadow-none"
          : "border-b border-line/60 bg-paper/90 backdrop-blur-md shadow-xs"
      }`}
    >
      <div className="mx-auto grid h-24 max-w-page grid-cols-2 items-center px-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: Brand / Logo */}
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className={`group flex items-center py-1 transition-colors duration-300 ${
              isTransparent
                ? "text-white hover:text-white/85"
                : "text-charcoal hover:text-olive-deep"
            }`}
          >
            <span
              className={`font-heading text-2xl sm:text-3xl md:text-[1.95rem] lg:text-[2.15rem] font-bold leading-none tracking-tight whitespace-nowrap transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-charcoal"
              }`}
            >
              {SITE_NAME}
            </span>
          </Link>
        </div>

        {/* Center: Centered navigation links (Duna style) */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center md:flex"
        >
          <ul className="flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const active = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`py-1 text-base transition-colors duration-300 ease-out ${
                      isTransparent
                        ? active
                          ? "font-semibold text-olive-tint"
                          : "font-medium text-white/80 hover:text-white"
                        : active
                        ? "font-semibold text-palestine-green"
                        : "font-medium text-charcoal/75 hover:text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA button & Mobile toggle */}
        <div className="flex items-center justify-end gap-3.5">
          <PlantDonateButton
            href="/donate"
            size="sm"
            showLeaves={false}
            className="!hidden sm:!inline-flex"
          >
            Donate now
          </PlantDonateButton>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex size-10 items-center justify-center rounded-md backdrop-blur-sm transition-colors duration-200 md:hidden ${
              isTransparent
                ? "border border-white/30 bg-black/30 text-white hover:bg-black/50"
                : "border border-line bg-paper/70 text-charcoal hover:bg-surface"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-line/60 bg-paper/95 px-6 pb-6 pt-3 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col">
            {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map(
              (link) => {
                const active = isCurrent(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex min-h-12 items-center justify-between border-b border-line/50 text-base transition-colors duration-200 ${
                        active
                          ? "font-bold text-palestine-green"
                          : "font-medium text-charcoal hover:text-palestine-green"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active ? (
                        <span
                          className="size-2 rounded-full bg-palestine-green"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          <div className="mt-6 flex justify-center">
            <PlantDonateButton
              href="/donate"
              size="default"
              showLeaves={false}
              onClick={() => setMenuOpen(false)}
              className="w-full max-w-xs text-center justify-center"
            >
              Donate now
            </PlantDonateButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
