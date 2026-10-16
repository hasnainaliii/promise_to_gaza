import type { Metadata } from "next";
import Image from "next/image";
import { ClosingInvitation } from "@/components/closing_invitation";
import { DriveShowcase } from "@/components/drive_timeline";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section_intro";
import { SITE_NAME } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Work & Relief Drives",
  description:
    `Explore the 9 executed relief operations by ${SITE_NAME}, upcoming healthcare & education initiatives, and university campus expansion.`,
};

const UPCOMING_INITIATIVES = [
  {
    phase: "Phase 1 - In Preparation",
    status: "Next Deployment",
    title: "Healthcare Initiative",
    description:
      "We will establish direct contact and coordination with healthcare personnel and doctors operating on the ground in Gaza. These medical professionals will provide exact assessments of urgent needs, enabling us to facilitate medical supplies, trauma support, and aid where it is needed most effectively.",
    highlights: [
      "Direct doctor & field clinic coordination",
      "Emergency trauma care & essential pharmaceuticals",
      "Zero administrative leakage",
    ],
  },
  {
    phase: "Phase 2 - Planned",
    status: "Sequential Deployment",
    title: "Education Initiative",
    description:
      "Focused on providing learning continuity, educational kits, and psychosocial support for displaced Palestinian children living across refugee camps. To ensure operational efficiency, active deployment of the Education Initiative will follow the execution of the Healthcare Initiative.",
    highlights: [
      "Learning continuity kits for displaced children",
      "Temporary makeshift classroom support",
      "Holistic child welfare and trauma healing",
    ],
  },
];

const CAMPUS_CHAPTERS = [
  {
    name: "UET Taxila",
    location: "Taxila, Punjab",
    founding: true,
    description:
      `Where ${SITE_NAME} began, on 6 August 2025. It started as a student campaign in the Department of Computer Science and grew to cover the whole campus.`,
  },
  {
    name: "HITEC University",
    location: "Taxila, Punjab",
    description: "Replicating our micro-donation workflows and campus awareness campaigns.",
  },
  {
    name: "University of Chenab",
    location: "Gujrat, Punjab",
    description: "Mobilizing student body participation and ethical consumer boycott drives.",
  },
  {
    name: "University of Wah",
    location: "Wah Cantt, Punjab",
    description: "Expanding weekly student pooling network to scale relief capital.",
  },
];

const CAMPAIGN_TOOLS_SUMMARY = [
  {
    title: "Webinars and Expert Sessions",
    summary:
      "Knowledge-sharing sessions with notable scholars and activists, including an exclusive session with Sheikh Uzair featuring first-hand insights from the Freedom Flotilla mission.",
  },
  {
    title: "Weekly News and Crisis Updates",
    summary:
      "Regular graphical field briefs and verified humanitarian statistics to keep university communities informed and actively engaged.",
  },
  {
    title: "Boycott and Economic Advocacy",
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
      <section className="tone-dark relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden -mt-24 bg-jet">
        {/* Background photograph from public/images/ourwork */}
        <div
          className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none bg-jet"
          aria-hidden="true"
        >
          <Image
            src="/images/ourwork/water_drive_hero.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_35%] grayscale contrast-[1.08] brightness-[0.98]"
          />
        </div>

        {/* Soft bottom fade into the parchment page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-parchment to-transparent opacity-80"
        />

        {/* Organic wave transition to next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="relative block h-7 w-full sm:h-9 lg:h-11"
            fill="var(--color-parchment)"
          >
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>


      {/* ── 01 Relief drives ─────────────────────────────────── */}
      <section id="drives" className="scroll-mt-24">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="01"
            eyebrow="Executed operations"
            title="Relief drives and impact milestones"
            lede="Nine phased relief operations tailored to seasonal, spiritual, and emergency needs across high-scarcity zones in Gaza."
          />
          <div className="mt-10">
            <DriveShowcase />
          </div>
        </div>
      </section>

      {/* ── 02 Upcoming initiatives ─────────────────────────────── */}
      <section className="bg-parchment-deep paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="02"
            eyebrow="Way forward"
            title="Sector-specific upcoming initiatives"
            lede="Targeted humanitarian projects under active planning to address specialised healthcare and educational continuity needs."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {UPCOMING_INITIATIVES.map((initiative, i) => (
              <Reveal
                key={initiative.title}
                delay={i * 150}
                className="flex flex-col rounded-blob bg-parchment-light p-8 shadow-soft sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-crimson">
                    {initiative.phase}
                  </span>
                  <span className="font-heading text-sm italic text-jet-muted">
                    {initiative.status}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-title text-jet">
                  {initiative.title}
                </h3>
                <p className="mt-4 leading-relaxed text-jet-muted">
                  {initiative.description}
                </p>
                <ul className="mt-auto flex flex-col gap-3 border-t border-line pt-6 text-jet">
                  {initiative.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Campus chapters ──────────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
        <SectionIntro
          index="03"
          eyebrow="Campus chapters"
          title="From one campus to many"
          lede={`${SITE_NAME} started at UET Taxila. Students at other universities now run chapters of their own.`}
        />

        <ul className="mt-12 border-t border-line">
          {CAMPUS_CHAPTERS.map((chapter, i) => (
            <Reveal
              as="li"
              key={chapter.name}
              delay={i * 120}
              className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <div className="sm:col-span-5">
                {chapter.founding ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-eyebrow text-crimson">
                    Founding chapter
                  </p>
                ) : null}
                <h3 className="font-heading text-2xl tracking-tight text-jet">
                  {chapter.name}
                </h3>
                <p className="mt-1 text-sm text-jet-muted">{chapter.location}</p>
              </div>
              <p className="leading-relaxed text-jet-muted sm:col-span-7">
                {chapter.description}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-6">
          <p className="text-sm text-jet-muted">
            Each chapter replicates the weekly Rs. 100 model.
          </p>
        </Reveal>
      </section>

      {/* ── 04 Awareness tools ──────────────────────────────────── */}
      <section className="bg-parchment-deep paper-grain">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="04"
            eyebrow="Awareness tools"
            title="Translating empathy into action"
            lede="Educational, analytical, and media-focused campaign tools designed to inform and direct student participation."
          />

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
            {CAMPAIGN_TOOLS_SUMMARY.map((tool, i) => (
              <Reveal
                as="li"
                key={tool.title}
                delay={(i % 2) * 120}
                className="border-t border-jet/15 pt-6"
              >
                <span className="font-heading text-sm italic text-clay-deep">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-2xl tracking-tight text-jet">
                  {tool.title}
                </h3>
                <p className="mt-3 leading-relaxed text-jet-muted">{tool.summary}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ClosingInvitation
        eyebrow="Ways to help"
        title="Help make the next drive possible."
        body={`Initiated first at UET Taxila, ${SITE_NAME} is designed so that everyone can play their part without financial strain.`}
        secondary={{ href: "/about", label: "Read about us" }}
      />
    </>
  );
}
