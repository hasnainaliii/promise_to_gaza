@AGENTS.md
# CLAUDE.md

This file gives Claude Code (and any other AI coding assistant reading it) the standing context and rules for this project. Read this before making any changes. Don't ask about things already answered here, just follow it.

## What this project is

**Stand for Ummah** (formerly Promise to Gaza) is a warm, human-centered welfare and donation website. Its current focus is supporting families in Gaza, with the stated vision of standing with oppressed people everywhere. The name is defined once as `SITE_NAME` / `SITE_WORDMARK` in `src/content/site.ts`; never hardcode it.

The website allows visitors to:

* Learn about Stand for Ummah and its mission.
* Understand what work and welfare initiatives are being carried out.
* See where donations and support are directed.
* Make donations.
* Read updates, stories, and impact information.
* Learn about specific campaigns or initiatives.
* Contact the organization or get involved in other ways.

This is a public-facing website, not an internal dashboard. Trust, warmth, clarity, accessibility, and emotional connection are important, but the design should never feel manipulative or overly dramatic.

The website should feel like a **real human organization with a caring personality**, not a generic charity template or AI-generated landing page.

The project should remain clean and structured enough that additional campaigns, donation methods, impact reports, updates, and potentially an admin system can be added later without rebuilding the frontend.

Don't build unnecessary features just because they might be useful later. Build the current product properly while keeping the architecture extensible.

## Stack

* Next.js (App Router), npm
* Tailwind CSS
* Zustand for client state
* Supabase (Postgres) for the backend, kept outside `src/`
* TypeScript

## Folder structure

```text
project-root/

├── src/
│   ├── app/                       # Routes. Each page gets its own folder.
│   │   ├── home/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── donate/
│   │   │   └── page.tsx
│   │   ├── our-work/
│   │   │   └── page.tsx
│   │   ├── updates/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/                # Shared, reusable components
│   │   ├── home.jsx
│   │   ├── donation.jsx
│   │   ├── campaign_card.jsx
│   │   └── site_header.jsx
│   ├── hooks/                     # All custom hooks live here
│   ├── theme/                     # ALL colors, fonts, spacing tokens live here
│   ├── types/                     # All TypeScript types/interfaces live here
│   └── store/                     # Zustand stores
├── public/
│   └── images/                    # Organized into sensible subfolders
│       ├── campaigns/
│       ├── impact/
│       ├── stories/
│       ├── icons/
│       └── brand/
├── supabase/                      # Outside src/. Migrations, schema, edge functions.
├── tailwind.config.ts
└── CLAUDE.md
```

Rules:

* Every page lives in its own folder under `src/app/`.
* Shared components live in `src/components/`.
* Hooks only in `src/hooks/`.
* Theme values only in `src/theme/`.
* Types only in `src/types/`.
* `supabase/` sits at the project root, outside `src/`, kept clean and separate from frontend code.
* Images go in `public/images/` in properly organized subfolders, never dumped loose.
* Don't create folders just for the sake of organization. The structure should remain understandable.

## Naming conventions

* Component/page files: `snake_case.jsx` where the project convention uses JSX.
* TypeScript files should use descriptive `snake_case` names where appropriate.
* Keep names literal and descriptive.
* A file's name should tell you what it is without opening it.
* Avoid vague names such as `thing.tsx`, `stuff.tsx`, `section.tsx`, or `new_component.tsx` when a more meaningful name exists.

## Component philosophy

* Reuse components. Don't create hundreds of near-duplicate page/component files.
* If writing something inline would only take a few extra lines, just write it inline.
* Don't extract a component purely for the sake of "clean code" if it adds indirection without adding reuse.
* Extract components when something is genuinely reused or genuinely complex.
* Prefer small, understandable components over giant page files.
* A component should generally have one clear responsibility.
* Keep the interface of shared components simple.
* Don't build a giant generic component system before there is a real need for one.

Soft target: keep files around 300 lines. This is not a hard wall. If a file needs to be 320 lines because splitting it would be artificial, that's fine. But treat it as a signal. If a file is drifting well past 300 lines, that's usually a sign it is doing too much and should be split along real boundaries.

## Comments

* Keep comments short and rare.
* Only comment where something is genuinely non-obvious or could confuse the next person reading it.
* Explain the "why," not the "what."
* Don't narrate obvious code.
* No comment blocks explaining basic JSX, Tailwind, or JavaScript.

## Styling

* Tailwind only.
* No inline styles, except for truly dynamic runtime values.
* No hardcoded colors, fonts, or spacing values anywhere in component files.
* Every color, font, and spacing value is defined once in `src/theme/` and referenced from `tailwind.config.ts` as theme tokens.
* Components consume Tailwind classes that resolve to those tokens.
* Never introduce a random hex color directly into a component.
* Never introduce a random font directly into a component.
* Never use arbitrary Tailwind values such as `mt-[17px]` just to solve a local spacing problem unless there is a genuine dynamic/design-system reason.
* If a new visual value is needed, add it to `theme/` first.

## State management

* Zustand for client-side state.
* Zustand stores live in `src/store/`.
* Use one store per real domain concern.
* Don't create one giant global store.
* Server state fetched from Supabase should NOT be duplicated into Zustand unless there is a real client-side reason.
* Don't put ordinary form state into a global store.
* Prefer local React state for local UI state.
* Use Zustand when state genuinely needs to be shared across distant components or persisted across navigation.

## Libraries

* **shadcn/ui** — component primitives such as dialogs, forms, dropdowns, buttons, and other accessible UI primitives. These are copied into the repo and edited directly.
* **Zod** — schema validation for donation forms, contact forms, campaigns, and Supabase writes.
* **React Hook Form** — form handling where forms become sufficiently complex.
* **Recharts** — impact and donation visualizations where charts genuinely improve understanding.
* **TanStack Table** — only if an admin/data-management area is introduced later and requires real table functionality.

Add a library here before installing it elsewhere in the project.

Don't reach for a library not listed here without updating this file first.

Prefer CSS, Tailwind, and existing project primitives over adding dependencies for small visual effects.

## Data & donation integrity

Donation-related data must be treated as sensitive business data.

Where donation records are stored, they should contain enough information to understand the transaction without unnecessarily storing personal information.

Potential entities include:

* Campaigns
* Donations
* Donation methods
* Impact initiatives
* Updates
* Stories
* Volunteers/supporters
* Contact submissions
* Organizations
* Audit records

Do not collect personal information that the website does not actually need.

Donation amounts should be validated before being submitted.

Financial values must be represented consistently and never silently rounded or changed in the UI.

The frontend must never claim that a donation was successful simply because a button was clicked.

The donation flow should clearly distinguish between:

1. Donation form submitted.
2. Payment/transfer initiated.
3. Payment confirmed.
4. Payment failed.
5. Payment cancelled.

Never fabricate donation success states.

If a payment provider is introduced, keep provider-specific logic isolated from the general donation UI so another provider can be added later without rewriting the whole donation system.

## Content principles

Stand for Ummah should communicate clearly and honestly.

* Don't invent statistics.
* Don't invent beneficiaries, stories, locations, campaigns, or impact numbers.
* Don't use fake testimonials.
* Don't create fake urgency.
* Don't imply that a specific amount of money produces a specific result unless the organization has provided that information.
* Don't make unverifiable claims about where money goes.
* Don't use exaggerated language simply to increase donations.
* If content is missing, use a clear placeholder rather than inventing information.

The website should make it easy for a visitor to understand:

**Who we are → What we do → Where support goes → How to help → What impact looks like.**

## Design/UI principles

The visual identity should be **warm, cute, human, and distinctive**.

It should feel welcoming and hopeful rather than corporate, sterile, or overly serious.

Think:

* Soft organic shapes.
* Friendly typography.
* Warm backgrounds.
* Gentle illustrations.
* Small hand-drawn or imperfect details where appropriate.
* Rounded elements used intentionally.
* Subtle texture.
* Friendly icons.
* Soft transitions.
* Generous whitespace.
* Human photography when real approved photography is available.
* Small moments of delight without turning the website into a children's website.

The word **cute** means approachable and emotionally warm, not childish.

The site should feel appropriate for a serious welfare organization and a donation platform.

### Avoid generic charity design

Do NOT automatically build:

* Giant full-screen hero photos with a dark gradient.
* Huge red "DONATE NOW" buttons everywhere.
* Generic charity statistics cards.
* Stock-photo-heavy layouts.
* Generic blue NGO websites.
* Corporate SaaS dashboards.
* Excessive glassmorphism.
* Excessive gradients.
* Identical rounded cards repeated throughout every section.
* Huge typography used only to look impressive.
* Fake urgency countdowns.
* Excessive animations.
* Decorative elements that interfere with reading.
* AI-looking illustrations with no connection to the brand.

The design should have its own visual language.

### Warmth without manipulation

The website can be emotional, but it should never exploit suffering for visual impact.

Prefer:

* Dignified photography.
* Human-centered stories.
* Clear explanations.
* Positive evidence of work.
* Warm illustrations.
* Hopeful language.
* Transparent donation information.

Avoid:

* Graphic imagery.
* Shock imagery used as decoration.
* Manipulative guilt-based copy.
* Constant emotional pressure to donate.
* Overly dramatic visual effects.

### Layout

Do not make every section look like a card grid.

Use different types of composition:

* Large editorial sections.
* Split image/text sections.
* Organic shapes.
* Simple donation blocks.
* Story sections.
* Campaign highlights.
* Timeline-style impact sections.
* Full-width sections.
* Small supporting cards.
* Handwritten-style decorative elements where appropriate.
* Illustrated separators.

The page should have rhythm.

A visitor should not feel like they are scrolling through the same card repeated 15 times.

## Interaction principles

Animations should feel soft and intentional.

Use animation for:

* Page entrances.
* Image reveals.
* Hover states.
* Donation amount selection.
* Campaign interactions.
* Small decorative movement.
* Scroll-based storytelling when it genuinely improves the experience.

Don't animate everything.

Avoid:

* Constant floating objects.
* Large bouncing elements.
* Excessive parallax.
* Long loading animations.
* Animations that delay access to important information.

Respect `prefers-reduced-motion`.

## Navigation

The primary navigation should remain simple.

Possible primary navigation:

* Home
* Our Work
* About
* Updates
* Donate

Contact can live in the navigation or footer depending on the final layout.

The Donate action can have stronger visual emphasis than ordinary navigation, but it should still feel like part of the website rather than an aggressive advertisement.

The navigation should work extremely well on mobile.

## Donation experience

The donation flow is one of the most important parts of the website.

It should be:

* Fast.
* Clear.
* Trustworthy.
* Mobile-friendly.
* Easy to understand.
* Accessible.
* Free of unnecessary steps.

Donation amount selection should feel friendly rather than like a financial checkout dashboard.

If preset donation amounts are provided, make them easy to select while still allowing a custom amount.

Clearly show:

* Currency.
* Amount.
* Payment/donation method.
* Any relevant fees or conditions.
* What happens after submission.
* Whether the donation is one-time or recurring.

Don't hide important information behind unnecessary interactions.

The final confirmation should clearly tell the user what happened.

## Accessibility

Accessibility is a core requirement.

* Use semantic HTML.
* Buttons must be actual buttons.
* Links must be actual links.
* Form fields need proper labels.
* Images need meaningful alt text when they convey information.
* Decorative images should use appropriate empty alt text.
* Keyboard navigation must work.
* Focus states must remain visible.
* Color must not be the only way to communicate meaning.
* Maintain readable contrast.
* Respect reduced-motion preferences.
* Don't make text unreadably small.
* Donation forms must be usable on mobile and keyboard-only navigation.

## Responsive design

Design mobile-first.

The website should feel intentionally designed at:

* Small phones.
* Large phones.
* Tablets.
* Laptops.
* Large desktop screens.

Don't simply shrink the desktop layout.

On mobile:

* Navigation should remain simple.
* Donation actions should remain easy to reach.
* Text should remain readable.
* Images should crop intentionally.
* Buttons should have comfortable touch targets.
* Decorative elements should never cover content.

## SEO and metadata

Each public page should have meaningful metadata.

Page titles and descriptions should describe the actual page.

Don't use generic titles such as:

* "Home"
* "Website"
* "Page"
* "Welcome"

Use meaningful titles such as:

* Stand for Ummah — Support & Welfare
* Our Work — Stand for Ummah
* Donate — Stand for Ummah
* About Stand for Ummah
* Updates — Stand for Ummah

Where appropriate, pages should include structured metadata and social sharing metadata.

Don't fabricate organization information for SEO.

## Images and media

Images should be treated as part of the visual identity.

Organize images under:

```text
public/images/
├── brand/
├── campaigns/
├── impact/
├── stories/
└── icons/
```

Don't dump all images into `public/images/`.

Prefer real, approved organization photography when available.

If photography isn't available, use carefully selected illustrations or neutral visual elements rather than generic stock imagery that makes the website feel fake.

Every image should have a reason for being there.

Don't add an image simply because an empty section "looks boring."

## Theme

All visual tokens belong in `src/theme/`.

The exact values may evolve during implementation, but the design direction should remain consistent.

### Brand palette

These are the official Stand for Ummah brand colors and their share of the site. They are fixed: don't introduce colors outside this family.

| Role | Name | Hex | Share | Theme token |
| --- | --- | --- | --- | --- |
| Primary | Deep Teal | `#244F58` | 50% | `teal` |
| Secondary | Soft Aqua | `#9ACACA` | 20% | `aqua` |
| Accent | Desert Clay | `#D4AC90` | 20% | `clay` |
| Base | Parchment | `#F0E8DC` | 10% | `parchment` |

How each color is used:

* **Deep Teal** is the canvas. Every page sits on it; sections on teal are separated by space and hairlines, not by color.
* **Soft Aqua** is for calm sections: page headers and one or two reading sections per page, with deep teal text. On teal it also marks chapter numbers and small highlights.
* **Desert Clay** is the call to action and the warm voice: buttons (deep teal text on clay), eyebrow labels, italic emphasis, the wordmark's connecting word, and one warm statement section per page.
* **Parchment** is the text color on teal, and paper: documents and cards (the account details, the drive ledger, a pinned note), usually with `paper-grain`.

"Share" is how much of the site each color should occupy, so it's a balance guide rather than a per-page measurement.

### Surfaces

Every section (and any card that should stand out) declares one surface utility from `src/theme/theme.css`: `surface-teal`, `surface-aqua`, `surface-clay` or `surface-parchment`. Teal is the body default, so plain sections are teal without a class.

A surface paints the background and redefines the semantic tokens for everything inside it. Components only use these semantic tokens, never raw brand colors, so they read correctly on any surface:

| Token | Use |
| --- | --- |
| `ink`, `ink-muted`, `ink-faint` | headings, body copy, captions (`ink-faint` for captions and numerals only) |
| `rule` | hairlines and borders |
| `accent`, `accent-soft` | eyebrows, links, italic emphasis, chapter numbers, dots |
| `raised` | cards that sit on the surface |
| `action`, `on-action`, `action-hover` | the CTA button: clay with deep teal text on teal and parchment; teal with parchment text on aqua and clay |
| `surface`, `focus` | the surface color itself (for inverted buttons) and the focus ring |

To change the color balance, change which surface a section uses. Don't recolor components.

Raw shades (`teal-deep`, `teal-ink`, `aqua-light`, `clay-light`, `clay-deep`, `parchment-light`) exist only to build the surfaces. The one exception is overlays on photos and videos, which use `teal-ink` and `parchment` regardless of surface.

Hero and field photography sits in grayscale under a teal tint. The Palestinian flag keeps its own colors (`flag-*` tokens).

### Color rules

* Never hardcode colors inside components; use the semantic tokens.
* Don't stack aqua or clay sections back to back, and don't alternate colors just for variety. Teal sections can follow each other; rhythm comes from aqua and clay sections and parchment paper placed with intent.
* Don't fill cards on teal with a solid color; use `bg-raised` (a faint lift) with a `border-rule` hairline.
* Button variants: `primary` is for the main call to action (donating); `secondary` (the inverse of the surface) and `quiet` (outline) cover everything else.
* Every surface pairing in the theme passes WCAG AA for text. Plain clay sits just under AA as small text on teal, so the theme uses `clay-light` for small clay text there. Keep it that way when adding shades.
* No decorative pattern strips (diamonds, cross-stitch bands) as dividers or borders.
* Don't use gradients as a default design technique.

Gradients should only be introduced when there is a deliberate visual reason.

### Theme lab

A team-only panel for trying palettes on the real site (`src/components/theme_lab*.tsx`, `src/theme/theme_lab_css.ts`, `src/theme/theme_presets.ts`). It is always on in development; on the live site, add `?theme-lab` to any URL to turn it on for that browser and `?theme-lab=off` to turn it off. Visitors never see or download it.

It works by redefining the same semantic tokens the surfaces use, so keep components on semantic tokens or the lab cannot recolour them. When adding a full-width section, give it `data-section="page-name"` and a readable `data-section-label` so it can be repainted from the lab. Photo heroes carry `data-photo-surface`.

The lab is for exploring. When a theme is chosen, make it permanent in `theme.css` (the "Copy settings" button gives the exact values).

## Typography

Two typefaces, defined in `src/theme/fonts.ts` and `src/theme/theme.css`. Typography does the heavy lifting: layouts stay clean, modern and readable.

| Role | Font | Rules |
| --- | --- | --- |
| Headings | Cormorant Garamond Bold (700) | 1.15 line spacing, -1.5% letter-spacing. Lining numerals, so amounts read plainly. |
| Body | Work Sans Regular (400) | Always Regular, 1.6 line spacing. Light text on dark surfaces already looks heavier, so don't bold paragraphs. |
| Buttons and CTAs | Work Sans SemiBold (600) | UPPERCASE with +6% letter-spacing (`tracking-cta`). |

* `font-heading` is Bold by default; don't add `font-semibold` or `font-medium` to headings.
* Use the `text-display`, `text-headline` and `text-title` sizes, plus `leading-tight` and `tracking-tight`, which already carry the brand rhythm.
* Don't add a third typeface or a script font.

## Shape language

Use a softer shape language than a traditional business website.

Good:

* Soft rounded cards.
* Organic blob-like decorative shapes.
* Rounded image crops.
* Gentle pill shapes for small tags when they genuinely represent tags.
* Hand-drawn accents.
* Slightly irregular decorative elements.

Avoid:

* Every element being a pill.
* Every container having huge border-radius.
* Excessive floating cards.
* Decorative shapes behind every piece of text.

Shapes should create personality, not visual noise.

## Buttons

Buttons should clearly describe their action.

All buttons are UPPERCASE Work Sans SemiBold with +6% letter-spacing. `ActionLink` and `ActionButton` already apply this; use them rather than styling buttons by hand.

Good:

* Donate now
* Give once
* Give monthly
* Learn about our work
* Read our updates
* Get in touch

Avoid vague labels:

* Submit
* Click here
* Continue
* Learn more everywhere

Don't use the arrow `→` on every button.

A small icon can be used where it genuinely helps.

## Cards

Cards should not become the default container for everything.

Use cards when they help group related information.

Campaign cards may contain:

* Campaign image.
* Campaign title.
* Short description.
* Progress/impact information when real data exists.
* Clear action.

Don't put every paragraph inside a card.

## Empty states and errors

Errors should be human and understandable.

Instead of:

> Error 500

Prefer:

> Something went wrong while loading this information. Please try again.

Donation errors should explain what happened and what the visitor can do next.

Never make an error message sound like the user did something wrong when the problem is on the server/payment side.

## Loading states

Loading states should feel calm.

Use simple skeletons or lightweight loading indicators where appropriate.

Don't use fake progress bars that imply progress which isn't actually happening.

Don't block the entire website with unnecessary loading screens.

## Security

Never expose:

* Supabase service-role keys.
* Private API keys.
* Payment provider secrets.
* Server-only credentials.

Public environment variables must contain only information that is safe to expose to the browser.

Supabase service-role operations belong on the server.

Validate all user-controlled input.

Don't trust donation amounts, campaign IDs, or other financial/business values supplied by the client.

## Supabase

Supabase remains outside `src/`.

Keep:

```text
supabase/
├── migrations/
├── functions/
└── ...
```

Database schema and migrations should remain version-controlled.

Don't place database-specific code throughout random frontend components.

Keep data access organized and predictable.

## What NOT to do

* Don't create a generic charity template.
* Don't copy the visual language of common donation websites.
* Don't use generic AI-generated layouts.
* Don't make everything a rounded card.
* Don't use huge red donation buttons everywhere.
* Don't use manipulative donation language.
* Don't invent statistics or stories.
* Don't fabricate impact.
* Don't hardcode visual values outside `theme/`.
* Don't put Supabase client/schema code inside `src/`.
* Don't expose private Supabase credentials.
* Don't use Redux.
* Don't add libraries without updating this file.
* Don't over-comment.
* Don't over-animate.
* Don't sacrifice accessibility for visual design.
* Don't sacrifice donation clarity for visual design.
* Don't create unnecessary pages or components.
* Don't create fake payment-success states.
* Don't collect unnecessary personal information.
* Don't make the website look childish just because the visual direction is cute.
* Don't make the website emotionally manipulative.

The goal is:

**Warm, human, trustworthy, memorable, and genuinely pleasant to use.**

It should feel like **Stand for Ummah has a personality**, not like someone selected a charity template and changed the logo.

*<!-- BEGIN:nextjs-agent-rules -->*

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

*<!-- END:nextjs-agent-rules -->*
