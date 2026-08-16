// dexent/components/home/StickerBanner.tsx
// Position 2 on the homepage (right after hero). Server component.
// IMAGE: /images/sticker/truck-sticker.png (see homepage image manifest).

import Link from "next/link";
import Image from "next/image";

export default function StickerBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-accent/25 bg-accent-50 p-5 sm:flex-row">
        <div className="relative hidden h-24 w-32 shrink-0 overflow-hidden rounded-xl sm:block">
          <Image
            src="/images/sticker/truck-sticker.png"
            alt="Dexent sticker applied to the door of a semi-truck cab"
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <span className="mb-2 inline-block rounded bg-accent/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-600">
            Promotion
          </span>
          <h2 className="text-lg font-semibold font-[family-name:var(--font-display)]">
            Get Free Dispatch Services
          </h2>
          <p className="mt-1 text-[13px] leading-relaxed text-steel">
            Put our sticker on your truck and earn{" "}
            <span className="font-semibold text-ink">
              1 free week of dispatch every 2 months.
            </span>{" "}
            Your truck becomes your discount.
          </p>
        </div>

        <Link
          href="/roll-with-dexent"
          className="shrink-0 rounded-lg bg-ink px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-brand"
        >
          Claim it
        </Link>
      </div>
    </section>
  );
}
