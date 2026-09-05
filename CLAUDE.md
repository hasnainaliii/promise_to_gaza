@AGENTS.md
# CLAUDE.md

This file gives Claude Code (and any other AI coding assistant reading it) the standing context and rules for this project. Read this before making any changes. Don't ask about things already answered here, just follow it.

## What this project is

**Promise to Gaza** is a warm, human-centered welfare and donation website focused on supporting people in Gaza.

The website allows visitors to:

* Learn about Promise to Gaza and its mission.
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

Promise to Gaza should communicate clearly and honestly.

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

* Promise to Gaza — Support & Welfare
* Our Work — Promise to Gaza
* Donate — Promise to Gaza
* About Promise to Gaza
* Updates — Promise to Gaza

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

### Color direction

Promise to Gaza should have a **warm, soft humanitarian palette** rather than a conventional corporate palette.

Use a restrained combination of:

* Warm off-white / paper background.
* Soft olive or muted green as a grounding brand color.
* A warm berry/red accent inspired by the region and the organization's identity.
* Deep charcoal for primary text.
* Soft sand/tan for secondary surfaces.
* Muted neutral tones for supporting text.

The palette should feel warm and organic rather than loud.

Do not turn every section green or red.

Accent colors should have clear purposes.

A suggested starting direction:

```text
Background:
Warm Paper — #FBF8F1

Primary Brand:
Soft Olive — #68745A

Warm Accent:
Muted Berry — #B94B52

Warm Secondary:
Sand — #E9DCC8

Primary Text:
Deep Charcoal — #292821

Secondary Text:
Warm Gray — #766F63

Soft Surface:
#F3EDE2

White:
#FFFFFF
```

These are starting theme tokens, not values to hardcode in components.

The final palette should be refined through the actual design.

### Color rules

* Never hardcode colors inside components.
* Don't use the accent color on everything.
* Don't make every button the same color.
* Primary donation actions should be visually clear.
* Secondary actions should remain visually quieter.
* Maintain sufficient contrast.
* Avoid excessive use of saturated red.
* Avoid making the entire website green.
* Don't use gradients as a default design technique.

Gradients should only be introduced when there is a deliberate visual reason.

## Typography

Use two typefaces maximum.

The typography should feel friendly and editorial rather than corporate.

Recommended direction:

### Headings

Use a distinctive friendly serif or soft display font.

Possible direction:

* Fraunces
* DM Serif Display
* Another warm editorial serif

### Body/UI

Use a clean, highly readable sans-serif.

Possible direction:

* Inter
* DM Sans
* Manrope

The final selection should be defined in `src/theme/` and loaded consistently.

Don't mix multiple decorative fonts.

A handwritten or script font may only be used as a tiny decorative accent if it genuinely improves the brand. It must never be used for important information, navigation, donation amounts, or long-form content.

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

It should feel like **Promise to Gaza has a personality**, not like someone selected a charity template and changed the logo.

*<!-- BEGIN:nextjs-agent-rules -->*

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

*<!-- END:nextjs-agent-rules -->*
