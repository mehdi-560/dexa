// dexent/components/layout/Footer.tsx
// Server component (no JS). Also carries internal links (equipment) for SEO silo.

import Link from "next/link";
import Image from "next/image";
import { SITE, CONTACT, EQUIPMENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-3">
            <Image
              src="/images/logo.png"
              alt="Dexent Logistics"
              width={330}
              height={202}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-[13px] leading-relaxed text-steel">
            Truck dispatch for owner-operators and small fleets. Higher
            net-per-mile, transparent pricing, no contracts.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Dispatch
          </h3>
          <ul className="space-y-2">
            {EQUIPMENT.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/dispatch/${e.slug}`}
                  className="text-[13px] text-ink transition-colors hover:text-brand"
                >
                  {e.name} Dispatch
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Company
          </h3>
          <ul className="space-y-2 text-[13px]">
            <li><Link href="/pricing" className="text-ink hover:text-brand">Pricing</Link></li>
            <li><Link href="/new-mc-program" className="text-ink hover:text-brand">New MC Program</Link></li>
            <li><Link href="/roll-with-dexent" className="text-ink hover:text-brand">Roll With Dexent</Link></li>
            <li><Link href="/resources" className="text-ink hover:text-brand">Resources</Link></li>
            <li><Link href="/about" className="text-ink hover:text-brand">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-steel">
            Contact
          </h3>
          <ul className="space-y-2 text-[13px]">
            <li>
              <a href={CONTACT.phoneHref} className="font-semibold text-brand">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li><a href={CONTACT.emailHref} className="text-ink hover:text-brand">{CONTACT.email}</a></li>
            <li className="text-steel">{CONTACT.city}, {CONTACT.region} · Dispatching nationwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-[12px] text-steel sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>FMCSA-compliant dispatch · No contracts</span>
        </div>
      </div>
    </footer>
  );
}
