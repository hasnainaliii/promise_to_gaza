export interface HistoryStep {
  marker: string;
  title: string;
  body: string;
  /** Phrase within `body` to set in bold. */
  highlight?: string;
  current?: boolean;
}

export const HISTORY: HistoryStep[] = [
  {
    marker: "6 August 2025",
    title: "The spark — UET Taxila",
    body: "Promise to Gaza began as a student-led campaign at UET Taxila, initially launched within the Department of Computer Science under the name UET Taxila Donation Drive.",
    highlight: "UET Taxila Donation Drive",
  },
  {
    marker: "Next",
    title: "Campus-wide expansion",
    body: "Following its initial success, the campaign expanded beyond the Computer Science Department to cover departments across the entire UET Taxila campus, through which donations were collected from the university community on multiple occasions.",
  },
  {
    marker: "Then",
    title: "A formal project of My Network",
    body: "As the initiative grew beyond its original campus-level efforts, it was later developed into a formal project of My Network under the name Promise to Gaza (PTG).",
    highlight: "Promise to Gaza (PTG)",
  },
  {
    marker: "Current phase",
    title: "Multi-university expansion",
    body: "Building on this journey, PTG is now being expanded to three additional universities, with the intention, In Sha Allah, of extending the initiative to more universities in the future.",
    current: true,
  },
];

export type CoreValueIcon = "heart" | "shield" | "people";

export const CORE_VALUES: {
  title: string;
  description: string;
  icon: CoreValueIcon;
}[] = [
  {
    title: "Compassion",
    description:
      "Standing with people who are suffering and responding to their needs with sincerity and care.",
    icon: "heart",
  },
  {
    title: "Responsibility",
    description:
      "Recognising our responsibility towards the Ummah and taking meaningful action instead of remaining passive.",
    icon: "shield",
  },
  {
    title: "Collective action",
    description:
      "Believing that lasting impact comes when people come together, contribute what they can, and support one another.",
    icon: "people",
  },
];

export const TONE_ATTRIBUTES = [
  {
    label: "Compassionate & purposeful",
    description: "Every word carries weight and intent, driven by genuine care.",
  },
  {
    label: "Empathetic & resilient",
    description: "We feel deeply, yet we stand firm in our resolve to act.",
  },
  {
    label: "Warm, sincere & urgent",
    description:
      "We speak from the heart with a sense of pressing responsibility.",
  },
];
