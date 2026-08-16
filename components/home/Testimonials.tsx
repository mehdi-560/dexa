// dexent/components/home/Testimonials.tsx
// Server component. IMAGES: /images/testimonials/carrier-{1,2,3}.png
// Replace with REAL carrier photos + quotes when available (biggest trust lever).

import Image from "next/image";
import { TESTIMONIALS } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="mb-6 text-[12px] font-semibold uppercase tracking-wider text-steel">
        What carriers say
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-xl border border-line bg-white p-5">
            <div className="mb-3 flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <blockquote className="text-[14px] leading-relaxed text-ink">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-paper-2">
                <Image
                  src={t.image}
                  alt={`${t.name}, ${t.detail}`}
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-ink">{t.name}</div>
                <div className="text-[11px] text-steel">{t.detail}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
