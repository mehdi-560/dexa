// dexent/content/pricing-faqs.ts
// Answer-first FAQ for the pricing page. Targets the highest-volume queries
// ("how much does a truck dispatcher cost", "flat fee vs percentage", etc.)
// Feeds both the on-page FAQ and faqSchema so text + structured data match.

export const PRICING_FAQS = [
  {
    q: "How much does a truck dispatcher cost?",
    a: "Most truck dispatchers charge 5–10% of each load, or a flat weekly fee. Dexent charges 8% per load for owner-operators (1–5 trucks), 7% for 6–10 trucks, and 6% for fleets of 10+. New MC authorities pay $100/month plus 8% for their first 3 months, then just 8% with no monthly fee.",
  },
  {
    q: "Is a percentage or a flat fee better for dispatch?",
    a: "A percentage aligns the dispatcher with you — they only earn more when they book you higher-paying loads, so they're motivated to negotiate hard. A flat fee can look cheaper on a good week but doesn't reward the dispatcher for getting you better rates. Dexent uses a percentage so our incentive is your revenue.",
  },
  {
    q: "Does Dexent charge setup fees or require a contract?",
    a: "No. There are no setup fees and no long-term contracts. You can start and stop service on your terms.",
  },
  {
    q: "Why does Dexent charge 8% when some dispatchers charge 5%?",
    a: "Because we compete on your net-per-mile, not the fee. A dispatcher charging 5% on cheap loads can leave you with less than one charging 8% on well-negotiated loads. What matters is what lands in your pocket after the fee — and we negotiate to make that number higher.",
  },
  {
    q: "What does the dispatch fee include?",
    a: "Load sourcing and negotiation, booking, rate confirmations, broker setup and paperwork, and ongoing support. There are no hidden add-ons — the percentage is the price.",
  },
  {
    q: "When does the $100/month new-authority fee stop?",
    a: "Automatically after your first 3 months. New MC authorities pay $100/month plus 8% while getting established; once the 3 months are up, the monthly fee drops off and you continue at the standard 8%.",
  },
];