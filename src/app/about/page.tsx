import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page_header";
import { SectionIntro } from "@/components/section_intro";

export const metadata: Metadata = {
  title: "About & Strategic Vision — Promise to Gaza",
  description:
    "Executive introduction, operational methodology, campaign initiatives, and strategic expansion of the student-led Promise to Gaza movement under My Network.",
};

const SHORT_TERM_OBJECTIVES = [
  "Direct emergency aid delivery including essential Food Rations, Clean Drinking Water, and basic survival items.",
  "Targeted relief drives for displaced families living in refugee camps during peak crisis periods.",
  "Establishing efficient, transparent, and low-overhead fund deployment mechanisms directly into Gaza.",
];

const LONG_TERM_VISION = [
  "Fostering Islamic moral, ethical, and legal accountability across student and youth networks.",
  "Building an interconnected multi-university student alliance committed to global human rights and justice.",
  "Extending structured institutional support to oppressed regions globally over time.",
];

const CAMPAIGN_TOOLS = [
  {
    title: "Webinars & Expert Sessions",
    badge: "Education & Strategy",
    description:
      "PTG organizes strategic knowledge-sharing sessions featuring notable scholars and activists. Notably, a key session was hosted with Sheikh Uzair, who shared direct insights from his participation in the Freedom Flotilla mission to break the siege on Gaza.",
    icon: (
      <svg className="size-6 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l5-5m0 0l-5-5m5 5H9a4 4 0 00-4 4v1m0 4v5a2 2 0 002 2h10a2 2 0 002-2v-5" />
      </svg>
    ),
  },
  {
    title: "Weekly News & Crisis Updates",
    badge: "Field Reporting",
    description:
      "Publishing regular graphical summaries highlighting real-time developments, field reports, and critical humanitarian statistics from Gaza to keep the academic community engaged.",
    icon: (
      <svg className="size-6 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Boycott & Economic Advocacy",
    badge: "Targeted Action",
    description:
      "Awareness materials identifying corporate entities complicit in the crisis, encouraging students to align daily purchasing decisions with ethical principles and economic resistance.",
    icon: (
      <svg className="size-6 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93l14.14 14.14" />
      </svg>
    ),
  },
  {
    title: "Field Impact Testimonials",
    badge: "Verified Transparency",
    description:
      "Sharing verified media and video proof of ground distributions to maintain total transparency and build trust with student donors across every university chapter.",
    icon: (
      <svg className="size-6 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const METHODOLOGY_STEPS = [
  { step: "1", title: "Student Body Participation", subtitle: "Grassroots mobilization across campuses" },
  { step: "2", title: "Weekly Micro-Donation", subtitle: "Accessible Rs. 100 / student commitment" },
  { step: "3", title: "Secure Fund Transfer", subtitle: "Rapid low-overhead capital transmission" },
  { step: "4", title: "Local Gaza Volunteers", subtitle: "Verified on-ground coordination" },
  { step: "5", title: "Direct Aid Delivery", subtitle: "Food, water & relief into hands of families" },
];

const CAMPUS_CHAPTERS = [
  {
    name: "HITEC University",
    location: "Taxila, Punjab",
    status: "Active Chapter",
  },
  {
    name: "University of Chenab",
    location: "Gujrat, Punjab",
    status: "Active Chapter",
  },
  {
    name: "University of Wah",
    location: "Wah Cantt, Punjab",
    status: "Active Chapter",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Immersive Full-Bleed Hero Image ──────────────────────── */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden -mt-24 bg-neutral-900">
        {/* Background photograph with left and right blank, colorful image in center */}
        <div
          className="absolute -top-16 inset-x-0 bottom-0 overflow-hidden pointer-events-none bg-neutral-900"
          aria-hidden="true"
        >
          <Image
            src="/images/about/mynetwork-water-tanker-drive-gaza.jpeg"
            alt="Young Palestinian boy holding My Network sign in front of clean water tanker relief drive in Gaza"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
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

      <PageHeader
        eyebrow="Progress & Strategic Report"
        title="Promise to Gaza (PTG)"
        lede="Promise to Gaza is a project initiated by MyNetwork (an Islamic movement). It started in August 2025 as a university project initiated in UET Taxila first, so students could play their part by donating 100 rupees (approx. $0.35 USD). From that initial effort, it has now grown into a full running relief project delivering continuous, verified aid directly to families in Gaza."
      />

      {/* ── 1. Executive Introduction & Foundational Vision ─────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="max-w-narrow">
          <SectionIntro
            eyebrow="Section 1"
            title="Executive Introduction & Foundational Vision"
            lede="Founded on the core principle that aiding victims of oppression and genocide is a moral and spiritual imperative."
          />
          <p className="mt-5 text-lg leading-relaxed text-charcoal/90">
            Promise to Gaza (PTG) is a project initiated by <strong>MyNetwork</strong> (an Islamic movement). It began in August 2025 as a university project initiated at <strong>UET Taxila</strong>, designed so students and individuals who felt they couldn&apos;t do much could play their part by contributing just <strong>Rs. 100 (approx. $0.35 USD)</strong> weekly. What started as a grassroots campus initiative has now expanded into a full running project, coordinating verified emergency food, clean drinking water, and essential relief directly on the ground in Gaza.
          </p>
        </div>

        {/* Dual Pillar Cards: Short-Term vs Long-Term */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Short Term */}
          <div className="flex flex-col justify-between rounded-card border border-line bg-surface p-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-olive-tint text-olive">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-olive-deep">
                  Immediate Impact
                </span>
              </div>
              <h3 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                Short-Term Relief Objectives
              </h3>
              <ul className="mt-6 flex flex-col gap-4 text-warm-gray">
                {SHORT_TERM_OBJECTIVES.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-olive" aria-hidden="true" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-line/60 text-xs text-warm-gray-soft">
              Focus: Food parcels, drinking water tankers, and refugee shelter essentials.
            </div>
          </div>

          {/* Long Term */}
          <div className="flex flex-col justify-between rounded-card border border-line bg-paper p-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-sand text-charcoal">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </span>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-olive-deep">
                  Generational Framework
                </span>
              </div>
              <h3 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                Long-Term Revival Vision
              </h3>
              <ul className="mt-6 flex flex-col gap-4 text-warm-gray">
                {LONG_TERM_VISION.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sand-deep" aria-hidden="true" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-line/60 text-xs text-warm-gray-soft">
              Focus: Youth leadership, ethical governance, and sustained global advocacy.
            </div>
          </div>
        </div>

        {/* Core Philosophy Callout */}
        <div className="mt-10 rounded-card border border-olive/30 bg-olive-tint/60 p-7 sm:p-9">
          <div className="flex flex-col gap-2.5">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-olive-deep">
              Core Philosophy
            </span>
            <p className="font-heading text-xl sm:text-2xl leading-snug tracking-tight text-charcoal">
              &ldquo;Grounded in the divine mandate to stand against oppression and uphold human dignity, PTG emphasizes that while Gaza stands at the frontline of current crisis, restoring active solidarity, relief, and moral advocacy is a shared obligation across the entire Muslim world.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 2. Operational Methodology & Financial Framework ─────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Section 2"
            title="Operational Methodology & Financial Framework"
            lede="An innovative, high-impact micro-donation strategy specifically designed for student communities."
          />

          <p className="mt-6 max-w-narrow leading-relaxed text-warm-gray">
            PTG stands out from conventional fundraising models by introducing
            an innovative micro-donation strategy. Instead of relying on large
            individual contributions, PTG leverages collective student strength
            through systematic, low-barrier participation.
          </p>

          {/* 5-Step Pipeline Visualization */}
          <div className="mt-12 rounded-card border border-line bg-paper p-6 sm:p-10 shadow-soft">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-line/70 pb-5">
              <h3 className="font-heading text-xl text-charcoal">
                The PTG 5-Stage Direct Deployment Pipeline
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-3 py-1 text-xs font-semibold text-olive-deep">
                <span className="size-2 rounded-full bg-olive animate-pulse" />
                Zero Intermediary Leakage
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {METHODOLOGY_STEPS.map((s, idx) => (
                <div
                  key={s.step}
                  className="relative flex flex-col justify-between rounded-xl border border-line/60 bg-surface/70 p-5 transition-all hover:border-olive/40 hover:bg-surface"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-olive">
                        {s.step}
                      </span>
                      {idx < METHODOLOGY_STEPS.length - 1 ? (
                        <span className="hidden lg:block text-warm-gray-soft text-lg font-bold" aria-hidden="true">
                          &rarr;
                        </span>
                      ) : null}
                    </div>
                    <h4 className="mt-3 font-heading text-base font-semibold text-charcoal leading-tight">
                      {s.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-warm-gray">
                    {s.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Narrative Breakdown */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-card border border-line bg-paper p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-olive">
                Core Model
              </span>
              <h3 className="mt-2 font-heading text-xl text-charcoal">
                Weekly Rs. 100 (~$0.35 USD) Micro-Donation Model
              </h3>
              <p className="mt-4 leading-relaxed text-warm-gray">
                The cornerstone of PTG&apos;s unique approach is an accessible weekly micro-contribution
                of just <strong>Rs. 100 per student (or its dollar equivalent, approx. $0.35 USD)</strong>. By keeping the target
                amount minimal and accessible, it ensures that every student and supporter can
                participate effortlessly without financial burden.
              </p>
              <p className="mt-3 leading-relaxed text-warm-gray">
                When pooled across hundreds of students consistently every week,
                these modest contributions accumulate into substantial capital that
                directly funds large-scale on-ground relief operations.
              </p>
            </div>

            <div className="rounded-card border border-line bg-paper p-7 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-olive">
                Execution
              </span>
              <h3 className="mt-2 font-heading text-xl text-charcoal">
                Ground Execution Network
              </h3>
              <p className="mt-4 leading-relaxed text-warm-gray">
                Accumulated funds are securely routed to verified regional volunteers
                on the ground in Gaza.
              </p>
              <p className="mt-3 leading-relaxed text-warm-gray">
                These trusted teams navigate volatile local market dynamics to purchase
                and distribute essential goods directly — completely avoiding intermediary
                bureaucracy, high administrative cuts, or procedural leakage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 3. Campaign Tools & Awareness Initiatives ────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <SectionIntro
          eyebrow="Section 3"
          title="Campaign Tools & Awareness Initiatives"
          lede="Deploying educational, analytical, and media-focused campaign tools to translate student empathy into tangible, directed action."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CAMPAIGN_TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col justify-between rounded-card border border-line bg-paper p-7 transition-all hover:border-olive/40 hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-olive-tint">
                    {tool.icon}
                  </div>
                  <span className="rounded-full bg-sand/70 px-3 py-1 font-sans text-xs font-semibold text-charcoal">
                    {tool.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl tracking-tight text-charcoal">
                  {tool.title}
                </h3>
                <p className="mt-3 leading-relaxed text-warm-gray">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div aria-hidden="true" className="mx-auto max-w-page border-t border-line/60" />

      {/* ── 4. Way Forward & Strategic Expansion ────────────────────── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-page px-5 py-section sm:px-8">
          <SectionIntro
            eyebrow="Section 4"
            title="Way Forward & Strategic Expansion"
            lede="Building upon existing success, PTG is actively expanding its operational footprint across universities and launching targeted sector-specific initiatives."
          />

          {/* Part A: Multi-University Campus Expansion */}
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-olive">
                  Phase A
                </span>
                <h3 className="mt-1 font-heading text-2xl text-charcoal">
                  Multi-University Campus Expansion
                </h3>
                <p className="mt-2 max-w-xl text-warm-gray">
                  Replicating the core operational model, advocacy campaigns, and relief workflows to build a unified, multi-campus student movement.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {CAMPUS_CHAPTERS.map((chapter) => (
                <div
                  key={chapter.name}
                  className="flex flex-col justify-between rounded-card border border-line bg-paper p-6 shadow-xs"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-2.5 py-0.5 text-xs font-medium text-olive-deep">
                      <span className="size-1.5 rounded-full bg-olive" />
                      {chapter.status}
                    </span>
                    <h4 className="mt-3 font-heading text-lg text-charcoal">
                      {chapter.name}
                    </h4>
                    <p className="text-xs text-warm-gray">{chapter.location}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/60 text-xs text-warm-gray-soft">
                    Active student chapter driving weekly micro-donations.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: Sector-Specific Upcoming Initiatives */}
          <div className="mt-16">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-olive">
              Phase B
            </span>
            <h3 className="mt-1 font-heading text-2xl text-charcoal">
              Sector-Specific Upcoming Initiatives (Under Planning)
            </h3>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Healthcare Phase 1 */}
              <div className="relative overflow-hidden rounded-card border-2 border-olive/30 bg-paper p-7 sm:p-9 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-olive-tint px-3 py-1 font-sans text-xs font-semibold text-olive-deep">
                    Phase 1 — In Preparation
                  </span>
                  <span className="font-heading text-sm font-semibold text-olive">
                    Next Deploy
                  </span>
                </div>
                <h4 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                  Healthcare Initiative
                </h4>
                <p className="mt-4 leading-relaxed text-warm-gray">
                  PTG will establish direct contact and coordination with healthcare personnel
                  and doctors operating on the ground in Gaza.
                </p>
                <p className="mt-3 leading-relaxed text-warm-gray">
                  These medical professionals will provide exact assessments of urgent needs,
                  enabling PTG to facilitate medical supplies, trauma support, and aid where it
                  is needed most effectively.
                </p>
              </div>

              {/* Education Phase 2 */}
              <div className="relative overflow-hidden rounded-card border border-line bg-paper/70 p-7 sm:p-9 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sand px-3 py-1 font-sans text-xs font-semibold text-charcoal">
                    Phase 2 — Planned
                  </span>
                  <span className="font-heading text-sm font-semibold text-warm-gray-soft">
                    Sequential
                  </span>
                </div>
                <h4 className="mt-4 font-heading text-2xl tracking-tight text-charcoal">
                  Education Initiative
                </h4>
                <p className="mt-4 leading-relaxed text-warm-gray">
                  Focused on providing learning continuity, educational kits, and psychosocial
                  support for displaced Palestinian children.
                </p>
                <p className="mt-3 leading-relaxed text-warm-gray">
                  To ensure operational efficiency and clinical focus, active deployment of
                  the Education Initiative will follow the execution of the Healthcare Initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Executed Drives Link CTA ───────────────────────────────── */}
      <section className="mx-auto max-w-page px-5 py-section sm:px-8">
        <div className="relative overflow-hidden rounded-card bg-olive-deep p-8 text-paper sm:p-12">
          <div className="relative z-10 flex flex-col items-start gap-6 max-w-2xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-sand">
              Section 5 — Executed Drives
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl leading-tight">
              Nine executed relief operations. Explore the full timeline.
            </h3>
            <p className="leading-relaxed text-sand/90 text-base sm:text-lg">
              From the August 2025 Initial Relief setup to Ramadan food ration distributions,
              Eid direct cash gifts, and large-scale clean water deployments in June &amp; September 2026.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center rounded-lg bg-sand px-6 py-3 text-base font-semibold text-charcoal shadow-xs transition-all duration-200 hover:bg-white hover:-translate-y-0.5"
              >
                View 9 Drives Timeline &rarr;
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg border border-sand/40 bg-transparent px-6 py-3 text-base font-semibold text-paper transition-all duration-200 hover:bg-paper/10 hover:-translate-y-0.5"
              >
                Give Rs. 100 This Week
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
