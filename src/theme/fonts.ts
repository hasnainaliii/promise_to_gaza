import { Fraunces, Inter } from "next/font/google";

export const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;
