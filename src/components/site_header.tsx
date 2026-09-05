"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionLink } from "@/components/action_button";
import { NAV_LINKS, SITE_NAME } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
    setMenuOpen(false);
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isHome && !isScrolled && !menuOpen
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line/60 bg-paper/90 backdrop-blur-md shadow-xs"
      }`}
    >
      <div className="mx-auto grid h-22 sm:h-24 max-w-page grid-cols-2 items-center px-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: Brand / Logo */}
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className="group flex items-center gap-3.5 py-1 text-charcoal"
          >
            <Image
              src="/images/Logos/Promise to Gaza Transparent Logo.png"
              alt="Promise to Gaza Logo"
              width={64}
              height={64}
              unoptimized
              className="size-14 sm:size-16 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-heading text-2xl sm:text-[1.65rem] font-bold leading-none tracking-tight text-charcoal">
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
                    className={`text-base transition-colors duration-200 ${
                      active
                        ? "font-semibold text-charcoal"
                        : "font-medium text-charcoal/80 hover:text-charcoal"
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
        <div className="flex items-center justify-end gap-3">
          <ActionLink
            href="/donate"
            variant="primary"
            className="max-sm:hidden min-h-11 px-6 text-base font-medium tracking-normal"
          >
            Donate now
          </ActionLink>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper/70 text-charcoal backdrop-blur-sm transition-colors duration-200 hover:bg-surface md:hidden"
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
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-12 items-center border-b border-line/50 text-base font-medium text-charcoal aria-[current=page]:font-semibold aria-[current=page]:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ActionLink
            href="/donate"
            variant="primary"
            size="lg"
            className="mt-5 w-full"
          >
            Donate now
          </ActionLink>
        </nav>
      ) : null}
    </header>
  );
}
