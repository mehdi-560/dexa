// dexent/app/layout.tsx
import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Truck Dispatch for Owner-Operators & Fleets`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Dispatch that pays for itself in the rate`,
    description: SITE.description,
    url: SITE.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Truck Dispatch`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
