import { Cormorant_Garamond, Work_Sans } from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

export const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;
