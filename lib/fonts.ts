// dexent/lib/fonts.ts
// Self-hosted via next/font — no render-blocking Google request, no layout shift.
// Space Grotesk = characterful display; Inter = clean neutral body (your brief).

import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});