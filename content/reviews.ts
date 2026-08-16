// dexent/content/reviews.ts
// ⚠️ PLACEHOLDER REVIEWS — replace with real carrier reviews before relying on
// AggregateRating schema. Fabricated ratings in schema can violate Google's
// guidelines, so keep this honest: swap in real reviews, or remove the rating.

export const REVIEWS = [
  {
    quote:
      "Switched from a 5% dispatcher and I make more after Dexent's fee. They actually fight for the rate.",
    name: "Marcus D.",
    detail: "Reefer · Georgia",
    rating: 5,
    image: "/images/testimonials/carrier-1.png",
  },
  {
    quote:
      "Got my authority in the spring and Dexent got me loaded when nobody else would touch a new MC.",
    name: "Ade O.",
    detail: "Dry Van · Ohio",
    rating: 5,
    image: "/images/testimonials/carrier-2.png",
  },
  {
    quote:
      "No contract, straight answers, and my flatbed stays booked. That's all I wanted.",
    name: "Ricky T.",
    detail: "Flatbed · Texas",
    rating: 5,
    image: "/images/testimonials/carrier-3.png",
  },
];

// Toggle to true ONLY when the reviews above are real, to emit rating schema.
export const REVIEWS_ARE_REAL = false;
