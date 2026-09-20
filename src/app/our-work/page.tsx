import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DriveShowcase } from "@/components/drive_timeline";
import { SectionIntro } from "@/components/section_intro";

export const metadata: Metadata = {
  title: "Our Work & Executed Relief Drives — Promise to Gaza",
  description:
    "Explore the 9 executed relief operations by Promise to Gaza, upcoming healthcare & education initiatives, and university campus expansion.",
};

const UPCOMING_INITIATIVES = [
  {
    phase: "Phase 1 — In Preparation",
    status: "Next Deployment",
    title: "Healthcare Initiative",
    badgeColor: "bg-olive-tint text-olive-deep",
    description:
      "PTG will establish direct contact and coordination with healthcare personnel and doctors operating on the ground in Gaza. These medical professionals will provide exact assessments of urgent needs, enabling PTG to facilitate medical supplies, trauma support, and aid where it is needed most effectively.",
    highlights: [
      "Direct doctor & field clinic coordination",
      "Emergency trauma care & essential pharmaceuticals",
      "Zero administrative leakage",
    ],
  },
  {
    phase: "Phase 2 — Planned",
    status: "Sequential Deployment",
    title: "Education Initiative",
    badgeColor: "bg-sand text-charcoal",
    description:
      "Focused on providing learning continuity, educational kits, and psychosocial support for displaced Palestinian children living across refugee camps. To ensure operational efficiency, active deployment of the Education Initiative will follow the execution of the Healthcare Initiative.",
    highlights: [
      "Learning continuity kits for displaced children",
      "Temporary makeshift classroom support",
      "Holistic child welfare and trauma healing",
    ],
  },
];

const CAMPUS_EXPANSION = [
  {
    name: "HITEC University",
    location: "Taxila, Punjab",
    status: "Active Chapter",
    description: "Replicating PTG micro-donation workflows and campus awareness campaigns.",
  },
  {
    name: "University of Chenab",
    location: "Gujrat, Punjab",
    status: "Active Chapter",
    description: "Mobilizing student body participation and ethical consumer boycott drives.",
  },
  {
    name: "University of Wah",
    location: "Wah Cantt, Punjab",
    status: "Active Chapter",
    description: "Expanding weekly student pooling network to scale relief capital.",
  },
];

const CAMPAIGN_TOOLS_SUMMARY = [
  {
    title: "Webinars & Expert Sessions",
    summary:
      "Knowledge-sharing sessions with notable scholars and activists, including an exclusive session with Sheikh Uzair featuring first-hand insights from the Freedom Flotilla mission.",
  },
  {
    title: "Weekly News & Crisis Updates",
    summary:
      "Regular graphical field briefs and verified humanitarian statistics to keep university communities informed and actively engaged.",
  },
  {
    title: "Boycott & Economic Advocacy",
    summary:
      "Educational awareness posters highlighting corporate accountability and aligning everyday purchasing decisions with ethical resistance.",
  },
  {
    title: "Field Impact Testimonials",
    summary:
      "Transparent ground media and verified video documentation of all aid distributions to maintain complete donor trust.",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* ── Immersive Full-Bleed Hero Image ──────────────────────── */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden -mt-24 bg-neutral-900">
        {/* Background photograph from public/images/ourwork */}
        <div
          className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none bg-neutral-900"
          aria-hidden="true"
        >
          <Image
            src="/images/ourwork/Expanded to 1920_1080 landscape.png"
            alt="Young girl in Gaza holding Promise to Gaza sign in front of clean water tanker relief drive"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%] grayscale contrast-[1.08] brightness-[0.98]"
          />
        </div>

        {/* Soft bottom fade to transition cleanly into paper background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-[var(--color-paper)] to-transparent opacity-80"
        />

        {/* Organic wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="relative block h-7 w-full sm:h-9 lg:h-11"
            fill="var(--color-paper)"
          >
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>


      {/* ── Section 4: Executed Relief Drives Timeline ──────────────── */}
      <section id="drives" className="scroll-mt-24">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Executed Operations"
            title="Relief Drives & Impact Milestones"
            lede="Nine phased relief operations tailored to seasonal, spiritual, and emergency needs across high-scarcity zones in Gaza."
          />
          <div className="mt-10">
            <DriveShowcase />
          </div>
        </div>
      </section>

      {/* ── Section 5B: Sector-Specific Upcoming Initiatives ─────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Way Forward"
            title="Sector-Specific Upcoming Initiatives"
            lede="Targeted humanitarian projects under active planning to address specialized healthcare and educational continuity needs."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {UPCOMING_INITIATIVES.map((initiative) => (
              <div
                key={initiative.title}
                className="flex flex-col justify-between rounded-card border border-line bg-paper p-7 sm:p-9 shadow-soft transition-all hover:border-olive/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 font-sans text-xs font-semibold ${initiative.badgeColor}`}
                    >
                      {initiative.phase}
                    </span>
                    <span className="font-heading text-sm font-medium text-warm-gray">
                      {initiative.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl tracking-tight text-charcoal">
                    {initiative.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-warm-gray">
                    {initiative.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-line/60 pt-5 text-sm text-charcoal/90">
                    {initiative.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="size-1.5 rounded-full bg-olive shrink-0" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5A: Multi-University Campus Expansion ───────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <SectionIntro
          eyebrow="Campus Chapters"
          title="Multi-University Strategic Expansion"
          lede="Actively establishing active campus chapters across academic institutions to build a unified, student-led humanitarian alliance."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CAMPUS_EXPANSION.map((chapter) => (
            <div
              key={chapter.name}
              className="flex flex-col justify-between rounded-card border border-line bg-surface/70 p-6 shadow-xs"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-2.5 py-0.5 text-xs font-medium text-olive-deep">
                  <span className="size-1.5 rounded-full bg-olive" />
                  {chapter.status}
                </span>
                <h4 className="mt-3 font-heading text-xl text-charcoal">
                  {chapter.name}
                </h4>
                <p className="text-xs font-medium text-olive-deep">{chapter.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                  {chapter.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-line/60 text-xs text-warm-gray-soft">
                Replicating weekly Rs. 100 model.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Campaign Tools & Awareness Initiatives ─────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Awareness Tools"
            title="Translating Empathy Into Action"
            lede="Educational, analytical, and media-focused campaign tools designed to inform and direct student participation."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAMPAIGN_TOOLS_SUMMARY.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col justify-between rounded-card border border-line bg-paper p-6 shadow-xs"
              >
                <div>
                  <h4 className="font-heading text-lg font-semibold text-charcoal">
                    {tool.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-warm-gray">
                    {tool.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-olive px-6 py-3 text-base font-semibold text-paper shadow-xs transition-all hover:bg-olive-deep hover:-translate-y-0.5"
            >
              Read Full Strategic Report &rarr;
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-paper px-6 py-3 text-base font-semibold text-charcoal shadow-xs transition-all hover:bg-white hover:-translate-y-0.5"
            >
              Donate Rs. 100 This Week
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
