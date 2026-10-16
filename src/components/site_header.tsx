"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, startTransition } from "react";
import { ActionLink } from "@/components/action_button";
import { SiteWordmark } from "@/components/site_wordmark";
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
          ? "tone-dark border-b-0 bg-transparent shadow-none"
          : "border-b border-line/60 bg-parchment"
      }`}
    >
      <div className="mx-auto grid h-24 max-w-page grid-cols-2 items-center px-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center justify-start">
          <Link
            href="/"
            aria-label={`${SITE_NAME} - home`}
            className={`flex items-center py-1 transition-[color,opacity] duration-300 hover:opacity-80 ${
              isTransparent ? "text-parchment" : "text-jet"
            }`}
          >
            <SiteWordmark
              accentClass={isTransparent ? "text-clay" : "text-crimson"}
              className="text-2xl font-bold leading-none sm:text-3xl md:text-2xl lg:text-[2.15rem]"
            />
          </Link>
        </div>

        {/* Center: Centered navigation links (Duna style) */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center md:flex"
        >
          <ul className="flex items-center gap-7 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const active = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-2 text-base font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-current after:transition-transform after:duration-300 after:ease-soft ${
                      active ? "after:scale-x-100" : "after:scale-x-0"
                    } ${
                      isTransparent
                        ? active
                          ? "text-parchment"
                          : "text-on-dark-muted hover:text-parchment"
                        : active
                          ? "text-crimson"
                          : "text-jet-muted hover:text-jet"
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
          <ActionLink
            href="/donate"
            variant="primary"
            size="sm"
            className="max-sm:hidden"
          >
            Donate now
          </ActionLink>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex size-10 items-center justify-center rounded-md backdrop-blur-sm transition-colors duration-200 md:hidden ${
              isTransparent
                ? "border border-parchment/30 bg-jet/30 text-parchment hover:bg-jet/50"
                : "border border-line bg-parchment/70 text-jet hover:bg-parchment-light"
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
          className="border-t border-line/60 bg-parchment px-6 pb-6 pt-3 md:hidden"
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
                          ? "font-bold text-crimson"
                          : "font-medium text-jet hover:text-crimson"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active ? (
                        <span
                          className="size-2 rounded-full bg-crimson"
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
            <ActionLink
              href="/donate"
              variant="primary"
              size="lg"
              onClick={() => setMenuOpen(false)}
              className="w-full max-w-xs"
            >
              Donate now
            </ActionLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
