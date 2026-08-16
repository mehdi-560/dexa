// dexent/lib/schema.ts
// Centralized JSON-LD builders. Every page uses these so structured data
// stays consistent and correct (helps Google + LLM citation).

import { SITE, CONTACT, PRICING } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.domain,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    areaServed: { "@type": "Country", name: "United States" },
    priceRange: "6%–8% per load",
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Truck Dispatch Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      description: PRICING.headline,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}