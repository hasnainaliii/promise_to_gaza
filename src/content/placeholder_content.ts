/* Placeholder content only. Nothing here is a real update, figure or story —
   it exists so the layout can be reviewed before Supabase is wired up.
   Replace each entry with organisation-approved content before launch. */

import type { Story, Update } from "@/types/content";

export const updates: Update[] = [
  {
    slug: "placeholder-update-one",
    title: "First field update",
    summary:
      "Placeholder entry. Replace with a real update written or approved by the team.",
    imageSrc: "/images/impact/placeholder_field.svg",
    imageAlt: "",
  },
  {
    slug: "placeholder-update-two",
    title: "Where your support went this month",
    summary:
      "Placeholder entry. Replace with a real update written or approved by the team.",
    imageSrc: "/images/impact/placeholder_route.svg",
    imageAlt: "",
  },
];

/** Intentionally empty: we will not publish a story until a real, consented
    one exists. The stories section renders its empty state until then. */
export const stories: Story[] = [];
