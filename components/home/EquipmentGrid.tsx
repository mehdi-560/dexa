// dexent/components/home/EquipmentGrid.tsx
// Server component. Links into the /dispatch/[equipment] silo.
// IMAGES: /images/equipment/{slug}.png (see homepage image manifest).

import Link from "next/link";
import Image from "next/image";
import { EQUIPMENT } from "@/lib/constants";

export default function EquipmentGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="mb-1 text-[12px] font-semibold uppercase tracking-wider text-steel">
        Equipment we dispatch
      </h2>
      <p className="mb-6 text-[13px] text-steel/80">
        Specialized desks for each trailer type — priced right, kept moving.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EQUIPMENT.map((e) => (
          <Link
            key={e.slug}
            href={`/dispatch/${e.slug}`}
            className="group overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-paper-2">
              <Image
                src={e.image}
                alt={`${e.name} freight dispatched by Dexent`}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <div className="text-[15px] font-semibold">{e.name}</div>
              <p className="mt-1 text-[12px] leading-relaxed text-steel">{e.blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand">
                {e.name} dispatch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
