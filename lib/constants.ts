// dexent/lib/constants.ts
// ONE source of truth for business identity, contact, pricing, and services.
// Every page imports from here so NAP + pricing are identical everywhere
// (prevents the indexing/duplicate + pricing-contradiction problems).

export const SITE = {
  name: "Dexent Logistics",
  shortName: "Dexent",
  domain: "https://dexentlogistics.com",
  tagline: "Dispatch that pays for itself in the rate.",
  description:
    "Truck dispatch for owner-operators and small fleets — Power Only, Dry Van, Reefer & Flatbed. Higher net-per-mile, transparent pricing, no contracts. Dispatching nationwide.",
} as const;

// --- NAP (Name / Address / Phone) — keep identical across the whole site ---
export const CONTACT = {
  phoneDisplay: "(202) 417-7994",
  phoneHref: "tel:+12024177994",
  smsHref: "sms:+12024177994",
  email: "dispatch@dexentlogistics.com",
  emailHref: "mailto:dispatch@dexentlogistics.com",
  city: "Washington",
  region: "DC",
  country: "USA",
} as const;

// --- Pricing: the locked model. Quotable headline + tiers. ---
export const PRICING = {
  // The one sentence LLMs/Google should extract — keep wording stable.
  headline:
    "New MC authorities pay $100/month + 8% for their first 3 months, then just 8% (no monthly fee). Established carriers pay 8% for 1–5 trucks, 7% for 6–10 trucks, and 6% for 10+ trucks. No contracts, no hidden fees.",
  newMc: {
    name: "New Authority Start",
    monthly: 100,
    percent: 8,
    window: "MC 0–3 months",
    note: "The $100/month drops off automatically after 3 months.",
  },
  tiers: [
    { name: "Owner-Operator", trucks: "1–5 trucks", percent: 8 },
    { name: "Growing Fleet", trucks: "6–10 trucks", percent: 7 },
    { name: "Fleet", trucks: "10+ trucks", percent: 6 },
  ],
} as const;

// --- Equipment we dispatch (drives cards + /dispatch/[equipment] routes) ---
export const EQUIPMENT = [
  {
    slug: "power-only",
    name: "Power Only",
    blurb: "Your tractor, our trailers and loads — keep rolling without owning a box.",
    image: "/images/equipment/power-only.png",
  },
  {
    slug: "dry-van",
    name: "Dry Van",
    blurb: "Steady general-freight lanes with consistent, reliable volume.",
    image: "/images/equipment/dry-van.png",
  },
  {
    slug: "reefer",
    name: "Reefer",
    blurb: "Temperature-controlled freight at premium, well-negotiated rates.",
    image: "/images/equipment/reefer.png",
  },
  {
    slug: "flatbed",
    name: "Flatbed",
    blurb: "Steel, lumber, and machinery — secured, compliant, and paid right.",
    image: "/images/equipment/flatbed.png",
  },
] as const;

// --- Trust stats (homepage). Update values as they become real. ---
export const STATS = [
  { value: "300+", label: "Carriers moved" },
  { value: "48", label: "States covered" },
  { value: "<15m", label: "Callback time" },
  { value: "$0", label: "Contracts" },
] as const;

export type Equipment = (typeof EQUIPMENT)[number];
