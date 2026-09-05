/* Placeholder content only. Nothing here is a real campaign, update, figure or
   story — it exists so the layout can be reviewed before Supabase is wired up.
   Replace each entry with organisation-approved content before launch. */

import type { Campaign, Story, Update, WorkArea } from "@/types/content";

export const workAreas: WorkArea[] = [
  {
    slug: "food-and-water",
    title: "Food and clean water",
    description:
      "Getting essentials to families where supply routes are unreliable, working through people already on the ground.",
    iconSrc: "/images/icons/bowl.svg",
    imageSrc: "/images/campaigns/placeholder_food.svg",
    imageAlt: "Illustration of a bowl of food framed by wheat and olive branches",
  },
  {
    slug: "shelter",
    title: "Shelter and warmth",
    description:
      "Helping households keep a dry, warmer place to sleep, with a focus on the months when conditions are hardest.",
    iconSrc: "/images/icons/shelter.svg",
    imageSrc: "/images/campaigns/placeholder_shelter.svg",
    imageAlt: "Illustration of homes and shelters on open ground",
  },
  {
    slug: "medical",
    title: "Medical relief",
    description:
      "Supporting access to basic medical supplies and care for people who cannot reach a functioning facility.",
    iconSrc: "/images/icons/cross.svg",
    imageSrc: "/images/campaigns/placeholder_water.svg",
    imageAlt: "Illustration of a water droplet above spreading ripples",
  },
  {
    slug: "children",
    title: "Care for children",
    description:
      "Practical support for children and the adults looking after them, including schooling and everyday needs.",
    iconSrc: "/images/icons/leaf.svg",
    imageSrc: "/images/impact/placeholder_field.svg",
    imageAlt: "Illustration of olive trees across terraced fields",
  },
];

export const campaigns: Campaign[] = [
  {
    slug: "placeholder-food-parcels",
    title: "Food parcel distribution",
    summary:
      "Placeholder entry. Replace with a real campaign, its scope, and its verified funding position.",
    imageSrc: "/images/campaigns/placeholder_food.svg",
    imageAlt: "",
    status: "draft",
  },
  {
    slug: "placeholder-clean-water",
    title: "Clean water access",
    summary:
      "Placeholder entry. Replace with a real campaign, its scope, and its verified funding position.",
    imageSrc: "/images/campaigns/placeholder_water.svg",
    imageAlt: "",
    status: "draft",
  },
  {
    slug: "placeholder-winter-shelter",
    title: "Winter shelter support",
    summary:
      "Placeholder entry. Replace with a real campaign, its scope, and its verified funding position.",
    imageSrc: "/images/campaigns/placeholder_shelter.svg",
    imageAlt: "",
    status: "draft",
  },
];

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
