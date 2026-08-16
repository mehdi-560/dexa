// dexent/components/home/StatsStrip.tsx
// Server component. Trust stats from constants (single source of truth).

import { STATS } from "@/lib/constants";

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="grid grid-cols-2 divide-line overflow-hidden rounded-xl border border-line sm:grid-cols-4 sm:divide-x">
        {STATS.map((s) => (
          <div key={s.label} className="bg-paper px-4 py-5 text-center">
            <div className="text-2xl font-semibold text-brand font-[family-name:var(--font-display)]">
              {s.value}
            </div>
            <div className="mt-1 text-[11px] text-steel">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}