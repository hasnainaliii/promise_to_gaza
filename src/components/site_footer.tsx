import Link from "next/link";
import { SiteWordmark } from "@/components/site_wordmark";
import { SITE_NAME } from "@/content/site";

const FOOTER_LINKS = [
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

const LINK_CLASSES = "transition-colors duration-200 hover:text-on-dark";

export function SiteFooter() {
  return (
    <footer className="tone-dark bg-jet text-on-dark">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-4">
          {/* The ring keeps the black stripe visible against the jet footer. */}
          <svg
            viewBox="0 0 6 3"
            role="img"
            aria-label="Flag of Palestine"
            className="h-9 w-18 ring-1 ring-on-dark-line"
          >
            <rect width="6" height="1" className="fill-flag-black" />
            <rect y="1" width="6" height="1" className="fill-flag-white" />
            <rect y="2" width="6" height="1" className="fill-flag-green" />
            <path d="M0 0 2 1.5 0 3Z" className="fill-flag-red" />
          </svg>
          <p className="text-sm text-on-dark-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}, a My Network project.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <Link
            href="/"
            aria-label={`${SITE_NAME} - home`}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <SiteWordmark accentClass="text-clay" className="text-2xl text-on-dark" />
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-on-dark-muted">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASSES}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
