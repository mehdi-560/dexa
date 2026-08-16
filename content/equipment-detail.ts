// dexent/content/equipment-detail.ts
// Rich, unique content for each equipment hub page (/dispatch/[equipment]).
// Written to be genuinely informative — not templated filler — so each page
// earns its ranking. Add your real dispatcher observations over time.

export type EquipmentDetail = {
  slug: string;
  name: string;
  h1: string;
  intro: string; // answer-first opening
  whatWeHaul: string[];
  whyDexent: string;
  rateContext: string; // general, non-fabricated framing
  faqs: { q: string; a: string }[];
};

export const EQUIPMENT_DETAIL: Record<string, EquipmentDetail> = {
  "power-only": {
    slug: "power-only",
    name: "Power Only",
    h1: "Power Only Dispatch Service for Owner-Operators",
    intro:
      "Power only dispatch matches your tractor to pre-loaded trailers and drop-and-hook freight, so you keep moving without owning or maintaining a box. Dexent books power only loads for owner-operators nationwide at 8% (1–5 trucks), with new MC authorities starting at $100/month + 8% for their first 3 months.",
    whatWeHaul: [
      "Drop-and-hook trailer moves for shippers and brokers",
      "Trailer repositioning and spotting",
      "Pre-loaded van and reefer trailers (power only)",
      "Regional and over-the-road lanes",
    ],
    whyDexent:
      "Power only can mean lots of deadhead if it's dispatched lazily. We plan your moves to keep loaded miles high and empty miles low — because on power only, deadhead is the difference between a good week and a wasted one.",
    rateContext:
      "Power only rates vary widely by lane, trailer availability, and how much repositioning a broker needs. Rather than quote a number that goes stale, we work your specific lanes to beat what you'd find on your own. Call and we'll talk real numbers for your area.",
    faqs: [
      {
        q: "What is power only dispatch?",
        a: "Power only dispatch books loads for carriers who have a tractor but no trailer. You pull the shipper's or broker's pre-loaded trailer, so you skip trailer ownership and maintenance costs.",
      },
      {
        q: "Do I need my own trailer for power only?",
        a: "No. Power only means you provide the tractor and pull a trailer supplied by the shipper or broker — that's the point of the service.",
      },
    ],
  },

  "dry-van": {
    slug: "dry-van",
    name: "Dry Van",
    h1: "Dry Van Dispatch Service for Owner-Operators & Fleets",
    intro:
      "Dry van is the backbone of freight, and steady dry van lanes keep your truck earning consistently. Dexent dispatches dry van owner-operators and small fleets nationwide at 8% (1–5 trucks), 7% (6–10), and 6% (10+) — with new authorities starting at $100/month + 8% for 3 months.",
    whatWeHaul: [
      "General palletized freight",
      "Consumer goods and retail distribution",
      "Packaged food and beverage (non-temp)",
      "Paper, packaging, and light manufacturing",
    ],
    whyDexent:
      "Dry van is competitive, which means the dispatcher's negotiation is what separates a $2.00/mi week from a $2.50/mi one. We push for the better rate on every load instead of taking the first cheap offer on the board.",
    rateContext:
      "Dry van spot rates move with season and region — stronger in produce season and around retail peaks, softer in slow months. We track your lanes and book to the market rather than quoting a fixed rate that won't hold. Call for current numbers on your routes.",
    faqs: [
      {
        q: "Is dry van dispatch worth it for a single owner-operator?",
        a: "Yes — a good dispatcher keeps you booked on better-paying lanes and handles the paperwork, so you spend your time driving instead of searching load boards. The fee is covered when the rates we negotiate beat what you'd find alone.",
      },
    ],
  },

  reefer: {
    slug: "reefer",
    name: "Reefer",
    h1: "Reefer Dispatch Service — Temperature-Controlled Freight",
    intro:
      "Reefer freight pays a premium, but it demands tight scheduling and reliable temp compliance. Dexent dispatches refrigerated owner-operators and fleets nationwide at 8% (1–5 trucks), and we treat reefer's higher rates as the reason to negotiate even harder. New authorities start at $100/month + 8% for 3 months.",
    whatWeHaul: [
      "Produce and fresh fruit/vegetables",
      "Frozen foods and ice cream",
      "Dairy, meat, and poultry",
      "Temperature-sensitive pharmaceuticals",
    ],
    whyDexent:
      "Reefer rewards planning — produce seasons, backhaul availability, and detention all swing your take-home. We schedule to keep you in high-rate lanes and push brokers on detention so you're paid for your time.",
    rateContext:
      "Reefer rates run above dry van and spike hard during regional produce seasons. Because they move so much by season and lane, we book to live conditions rather than a stale posted number. Call and we'll talk real rates for your equipment and area.",
    faqs: [
      {
        q: "Why do reefer loads pay more than dry van?",
        a: "Reefer freight requires specialized equipment, fuel for the reefer unit, strict temperature compliance, and tighter scheduling — so it commands higher rates than general dry van freight.",
      },
    ],
  },

  flatbed: {
    slug: "flatbed",
    name: "Flatbed",
    h1: "Flatbed Dispatch Service for Owner-Operators & Fleets",
    intro:
      "Flatbed hauls the freight that builds the country — steel, lumber, machinery — and it rewards carriers who handle securement right. Dexent dispatches flatbed owner-operators and fleets nationwide at 8% (1–5 trucks), with new authorities starting at $100/month + 8% for 3 months.",
    whatWeHaul: [
      "Steel, coils, and metal products",
      "Lumber and building materials",
      "Machinery and equipment",
      "Construction and industrial freight",
    ],
    whyDexent:
      "Flatbed rates hold up better than van in soft markets, but only if you're in the right lanes. We keep you on freight that matches your securement setup and pushes the rate, and we factor tarping and securement time into what you should be paid.",
    rateContext:
      "Flatbed rates generally run above dry van and are steadier through the year, with regional strength around construction and steel country. We work your specific lanes to the current market. Call for real numbers on your routes.",
    faqs: [
      {
        q: "Does flatbed pay more than dry van?",
        a: "Flatbed typically pays more than dry van because it requires securement skills, tarping, and specialized equipment, and it tends to hold rates better than van freight in softer markets.",
      },
    ],
  },
};
