import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SITE_NAME, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/content/site";

const FOOTER_SECTIONS = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
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

const LINK_CLASS =
  "group inline-flex items-center gap-2 text-on-forest-muted transition-colors duration-300 ease-soft hover:text-on-forest";

/* The underline grows from the left on hover, like a pen stroke. */
const LINK_UNDERLINE =
  "relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-soft group-hover:after:scale-x-100";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest text-on-forest">
      <div aria-hidden="true" className="tatreez-band h-3 text-berry opacity-70" />

      <div className="mx-auto max-w-page px-5 pt-section-lg sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-on-forest p-1.5">
                <Image
                  src="/images/Logos/Promise to Gaza Transparent Logo.png"
                  alt=""
                  width={48}
                  height={48}
                  unoptimized
                  className="size-full object-contain"
                />
              </span>
              <span className="font-heading text-2xl font-semibold tracking-tight">
                {SITE_NAME}
              </span>
            </Link>

            <p className="mt-10 font-heading text-headline text-balance">
              Keeping a promise
              <br />
              <em className="text-sand">to families in Gaza.</em>
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-on-forest-muted">
              A project of My Network, turning moral concern into tangible
              relief and solidarity for families in Gaza.
            </p>

            <Link
              href="/donate"
              className="mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-on-forest px-6 py-3 font-semibold text-forest shadow-soft transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:bg-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4 fill-berry"
              >
                <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.6.7-1.4 2.2-2.6 4.3-2.6 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
              Donate now
            </Link>
          </Reveal>

          {FOOTER_SECTIONS.map((section, i) => (
            <Reveal
              key={section.heading}
              delay={120 + i * 90}
              className={`lg:col-span-2 lg:pt-3 ${i === 0 ? "lg:col-start-7" : ""}`}
            >
              <nav aria-label={section.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-sand">
                  {section.heading}
                </h2>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={LINK_CLASS}>
                        <span className={LINK_UNDERLINE}>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          ))}

          <Reveal delay={300} className="lg:col-span-2 lg:pt-3">
            <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-sand">
              Reach us
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  <span className={LINK_UNDERLINE}>WhatsApp</span>
                </a>
                <p className="mt-1 text-sm text-on-forest-muted">
                  {WHATSAPP_DISPLAY}
                </p>
              </li>
              <li>
                <Link href="/contact" className={LINK_CLASS}>
                  <span className={LINK_UNDERLINE}>Contact form</span>
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Oversized wordmark that sinks below the fold of the footer. */}
      <div aria-hidden="true" className="pointer-events-none mt-section select-none">
        <Reveal className="mx-auto flex justify-center overflow-hidden">
          <span className="block translate-y-1/5 whitespace-nowrap font-heading text-wordmark text-forest-soft">
            Promise to Gaza
          </span>
        </Reveal>
      </div>

      <div className="relative border-t border-on-forest-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-6 text-sm text-on-forest-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. A project of My Network.
          </p>
          <a
            href="#main-content"
            className="group inline-flex items-center gap-2 self-start transition-colors duration-300 hover:text-on-forest sm:self-auto"
          >
            Back to top
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
