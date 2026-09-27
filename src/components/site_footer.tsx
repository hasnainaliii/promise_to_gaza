import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/content/site";

const FOOTER_SECTIONS = [
  {
    heading: "Explore",
    links: [
      { href: "/our-work", label: "Our work" },
      { href: "/about", label: "About us" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/contact", label: "Get in touch" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line text-charcoal">

      {/* Wave art — rises up from the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 sm:h-64 opacity-85"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 70%)",
        }}
      >
        <Image
          src="/images/Downloaded/7018109.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 mx-auto grid max-w-page gap-10 px-5 py-section sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logos/Promise to Gaza Transparent Logo.png"
              alt="Promise to Gaza Logo"
              width={48}
              height={48}
              unoptimized
              className="size-11 object-contain"
            />
            <span className="font-heading text-2xl font-bold tracking-tight">{SITE_NAME}</span>
          </div>
          <p className="max-w-sm leading-relaxed text-warm-gray">{SITE_TAGLINE}.</p>
          <p className="max-w-sm text-sm leading-relaxed text-warm-gray">
            Registered details, published accounts and contact information will
            appear here once confirmed by the organisation.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <nav key={section.heading} aria-label={section.heading}>
            <h2 className="font-heading text-lg font-bold tracking-tight">{section.heading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray transition-colors duration-200 ease-soft hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mx-auto max-w-page border-t border-line px-5 py-6 sm:px-8">
        <p className="text-sm font-medium text-warm-gray">
          &copy; {new Date().getFullYear()} {SITE_NAME}.
        </p>
      </div>
    </footer>
  );
}
