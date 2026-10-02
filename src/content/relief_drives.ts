import type { ReliefDrive } from "@/types/content";

/** Every executed drive, oldest first. Media is field documentation shared
    by the team on the ground. */
export const RELIEF_DRIVES: ReliefDrive[] = [
  {
    id: "drive-1",
    label: "Drive 1",
    date: "August 2025",
    focus: "Initial Relief & Setup",
    impact:
      "Executed in collaboration with an established partner organization, as PTG was in its initial setup phase with limited resources, to deliver urgent emergency aid. Cooked food was provided to families in high-scarcity zones.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907430/drive_10_video.mp4",
        poster: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907430/drive_10_video.jpg",
      },
    ],
  },
  {
    id: "drives-2-3",
    label: "Drives 2 & 3",
    date: "Ramadan 2025",
    focus: "Ramadan Food Ration",
    impact:
      "Distributed complete food packages to displaced families in the last ashra of the holy month of Ramadan.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907379/drive_11_video.mp4",
        poster: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907379/drive_11_video.jpg",
      },
    ],
  },
  {
    id: "drive-4",
    label: "Drive 4",
    date: "Post-Ramadan 2025",
    focus: "Essential Ration Drive",
    impact:
      "Delivered targeted food ration kits to families in high-scarcity zones.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907331/drive_18_video.mp4",
        poster: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907331/drive_18_video.jpg",
      },
    ],
  },
  {
    id: "drive-5",
    label: "Drive 5",
    date: "Eid 2025",
    focus: "Direct Cash (Eidi) Drive",
    impact:
      "Provided direct cash support to destitute families, helping them celebrate Eid with dignity.",
    media: [
      {
        type: "image",
        src: "/images/ourwork/water-drive-tanker-distribution-1.png",
        alt: "Gaza youth holding Promise to Gaza emblem in front of clean water tanker",
      },
      {
        type: "image",
        src: "/images/ourwork/water-drive-tanker-distribution-2.png",
        alt: "Child holding Promise to Gaza emblem during water distribution",
      },
      {
        type: "image",
        src: "/images/ourwork/water-drive-tanker-distribution-3.png",
        alt: "Boy in Gaza holding Promise to Gaza emblem while water containers are filled",
      },
    ],
  },
  {
    id: "drives-6-7",
    label: "Drives 6 & 7",
    date: "June 2026",
    focus: "First Clean Water Drive",
    impact:
      "Deployed clean drinking water tankers to combat severe water shortages.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907340/drive_17_video.mp4",
        poster: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907340/drive_17_video.jpg",
      },
    ],
  },
  {
    id: "drive-8",
    label: "Drive 8",
    date: "June / July 2026",
    focus: "Muharram Special Ration",
    impact:
      "Distributed food ration packages across displacement camps in collaboration with partner organizations during Muharram.",
    media: [
      {
        type: "image",
        src: "/images/ourwork/water-drive-tanker-distribution-2.png",
        alt: "Children in displacement camp during relief drive",
      },
      {
        type: "image",
        src: "/images/ourwork/water-drive-tanker-distribution-1.png",
        alt: "Clean water relief coordination in Gaza",
      },
    ],
  },
  {
    id: "drive-9",
    label: "Drive 9",
    date: "September 2026",
    focus: "Second Clean Water Drive",
    impact:
      "Executed a major clean water tanker deployment in high-density areas.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907325/drive_19_video.mp4",
        poster: "https://res.cloudinary.com/k5vfnicu/video/upload/v1789907325/drive_19_video.jpg",
      },
    ],
  },
];
