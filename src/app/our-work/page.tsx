import type { Metadata } from "next";
import Image from "next/image";
import { ClosingInvitation } from "@/components/closing_invitation";
import { DriveShowcase } from "@/components/drive_timeline";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section_intro";

export const metadata: Metadata = {
  title: "Our Work & Relief Drives",
  description:
    "Explore the 9 executed relief operations by Promise to Gaza, upcoming healthcare & education initiatives, and university campus expansion.",
};

const UPCOMING_INITIATIVES = [
  {
    phase: "Phase 1 — In Preparation",
    status: "Next Deployment",
    title: "Healthcare Initiative",
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


      {/* ── 01 Relief drives ─────────────────────────────────── */}
      <section id="drives" className="scroll-mt-24">
        <div className="mx-auto max-w-page px-5 py-section-lg sm:px-8">
          <SectionIntro
            index="01"
            eyebrow="Executed operations"
            title="Relief drives & impact milestones"
            lede="Nine phased relief operations tailored to seasonal, spiritual, and emergency needs across high-scarcity zones in Gaza."
          />
          <div className="mt-10">
            <DriveShowcase />
          </div>
        </div>
      </section>

      {/* ── 02 Upcoming initiatives ─────────────────────────────── */}
      <section className="bg-cream paper-grain">
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
                className="flex flex-col rounded-blob bg-paper p-8 shadow-soft sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-eyebrow text-palestine-green">
                    {initiative.phase}
                  </span>
                  <span className="font-heading text-sm italic text-warm-gray">
                    {initiative.status}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-title text-charcoal">
                  {initiative.title}
                </h3>
                <p className="mt-4 leading-relaxed text-warm-gray">
                  {initiative.description}
                </p>
                <ul className="mt-auto flex flex-col gap-3 border-t border-line pt-6 text-charcoal">
                  {initiative.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-berry" />
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
          title="Multi-university strategic expansion"
          lede="Establishing active campus chapters across academic institutions to build a unified, student-led humanitarian alliance."
        />

        <ul className="mt-12 border-t border-line">
          {CAMPUS_EXPANSION.map((chapter, i) => (
            <Reveal
              as="li"
              key={chapter.name}
              delay={i * 120}
              className="grid gap-3 border-b border-line py-7 sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <div className="sm:col-span-4">
                <h3 className="font-heading text-2xl tracking-tight text-charcoal">
                  {chapter.name}
                </h3>
                <p className="mt-1 text-sm text-warm-gray">{chapter.location}</p>
              </div>
              <p className="leading-relaxed text-warm-gray sm:col-span-6">
                {chapter.description}
              </p>
              <span className="inline-flex items-center gap-2 justify-self-start text-sm font-medium text-palestine-green sm:col-span-2 sm:justify-self-end">
                <span aria-hidden="true" className="size-2 rounded-full bg-palestine-green animate-pulse-dot" />
                {chapter.status}
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-6">
          <p className="text-sm text-warm-gray">
            Each chapter replicates the weekly Rs. 100 model.
          </p>
        </Reveal>
      </section>

      {/* ── 04 Awareness tools ──────────────────────────────────── */}
      <section className="bg-cream paper-grain">
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
                className="border-t border-charcoal/15 pt-6"
              >
                <span className="font-heading text-sm italic text-berry">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-2xl tracking-tight text-charcoal">
                  {tool.title}
                </h3>
                <p className="mt-3 leading-relaxed text-warm-gray">{tool.summary}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ClosingInvitation
        eyebrow="Ways to help"
        title="Help make the next drive possible."
        body="Initiated first at UET Taxila, PTG is designed so that everyone can play their part without financial strain."
        secondary={{ href: "/about", label: "Read about us" }}
      />
    </>
  );
}
