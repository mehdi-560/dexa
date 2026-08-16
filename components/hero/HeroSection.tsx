// dexent/components/hero/HeroSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT, EQUIPMENT } from "@/lib/constants";

// Live-feel rate ticker seed values (avg $/mi). Wire to real data source later.
const RATE_SEED: Record<string, number> = {
  "Power Only": 2.31,
  "Dry Van": 2.45,
  Reefer: 2.94,
  Flatbed: 2.58,
};

export default function HeroSection() {
  const [rates, setRates] = useState(RATE_SEED);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) return;
    const id = setInterval(() => {
      setRates((prev) => {
        const next: Record<string, number> = {};
        for (const k in prev)
          next[k] = +(prev[k] + (Math.random() - 0.5) * 0.04).toFixed(2);
        return next;
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background: drifting contour + freight-lane curves */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 680 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="var(--color-brand)" strokeWidth="1" fill="none" opacity="0.07">
          <path d="M-40,90 C120,50 260,140 420,95 C560,55 660,120 740,90" />
          <path d="M-40,150 C120,110 260,200 420,155 C560,115 660,180 740,150" />
          <path d="M-40,210 C120,170 260,260 420,215 C560,175 660,240 740,210" />
        </g>
        <g fill="none" strokeLinecap="round">
          <path d="M-30,250 C160,200 240,300 380,255 C520,210 600,280 710,230" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.35" />
          <path d="M0,180 C140,170 300,220 430,160 C540,110 600,160 700,120" stroke="var(--color-brand)" strokeWidth="1.5" strokeDasharray="3 9" opacity="0.3" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-12 pb-6">
        <span className="dx-fade-up inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-3 py-1.5 text-[11px] font-medium text-brand" style={{ animationDelay: "0.05s" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Live dispatch desk · 48 states
        </span>

        <h1 className="dx-fade-up mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl font-[family-name:var(--font-display)]" style={{ animationDelay: "0.15s" }}>
          Dispatch that pays for itself <span className="text-brand">in the rate.</span>
        </h1>

        <p className="dx-fade-up mt-4 max-w-xl text-[15px] leading-relaxed text-steel" style={{ animationDelay: "0.25s" }}>
          Power Only, Dry Van, Reefer &amp; Flatbed. We negotiate harder, so your
          net-per-mile beats a cheaper dispatcher. No contracts, ever.
        </p>

        <div className="dx-fade-up mt-6 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.35s" }}>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" /></svg>
            Call or text a dispatcher
          </a>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 py-3 text-sm font-semibold text-ink transition hover:text-brand">
            See pricing
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path strokeLinecap="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      {/* Sketchy straight road with moving dashes + truck driving across */}
      <div className="relative z-10 mt-2 h-[70px] w-full overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 680 70" preserveAspectRatio="none">
          <filter id="dx-road-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.06" numOctaves="2" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" />
          </filter>
          <g filter="url(#dx-road-rough)">
            <rect x="-5" y="20" width="690" height="38" fill="var(--color-road)" />
            <path d="M-5,21 L685,21" stroke="var(--color-brand)" strokeWidth="2" opacity="0.7" fill="none" />
            <path d="M-5,57 L685,57" stroke="var(--color-accent)" strokeWidth="2" opacity="0.7" fill="none" />
            <line className="dx-road-dashes" x1="0" y1="39" x2="760" y2="39" stroke="#f7c948" strokeWidth="3" strokeDasharray="26 22" opacity="0.9" />
          </g>
        </svg>

        <div className="dx-road-truck absolute bottom-[8px] left-0">
          <svg width="120" height="46" viewBox="0 0 140 52" fill="none" filter="url(#dx-road-rough)">
            <rect x="2" y="10" width="88" height="34" rx="3" fill="#123f2f" stroke="var(--color-brand)" strokeWidth="2" />
            <rect x="4" y="12" width="84" height="8" rx="1" fill="#1a5540" />
            <text x="50" y="32" textAnchor="middle" fill="#f7c948" fontSize="11" fontWeight="700" fontFamily="sans-serif">DEXENT</text>
            <rect x="90" y="14" width="44" height="30" rx="4" fill="var(--color-accent)" stroke="var(--color-accent-600)" strokeWidth="1.5" />
            <rect x="94" y="8" width="30" height="18" rx="3" fill="#c26a10" />
            <rect x="97" y="10" width="23" height="13" rx="2" fill="rgba(150,220,255,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
            <rect x="130" y="20" width="8" height="6" rx="2" fill="#fdba74" />
            <rect x="90" y="6" width="4" height="12" rx="1" fill="#7c8ba1" />
            {[24, 64, 112].map((cx) => (
              <g key={cx} className="dx-wheel" style={{ transformOrigin: `${cx}px 46px` }}>
                <circle cx={cx} cy="46" r="8" fill="#161a20" stroke="#7c8ba1" strokeWidth="2" />
                <circle cx={cx} cy="46" r="3.5" fill="#333" />
                <rect x={cx - 1} y="39" width="2" height="14" fill="#7c8ba1" />
                <rect x={cx - 7} y="45" width="14" height="2" fill="#7c8ba1" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Live rate ticker */}
      <div className="relative z-10 mx-auto mt-2 max-w-6xl px-5">
        <div className="overflow-hidden rounded-xl border border-line bg-white/80 shadow-[var(--shadow-card)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-[11px] text-steel">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> LIVE SPOT RATES · avg $/mi
            </span>
            <span className="text-steel/70">updated weekly</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {EQUIPMENT.map((e, i) => (
              <div key={e.slug} className={`px-4 py-3 ${i < EQUIPMENT.length - 1 ? "border-r border-line" : ""}`}>
                <div className="text-[11px] text-steel">{e.name}</div>
                <div className={`text-lg font-semibold ${e.name === "Reefer" ? "text-brand" : "text-ink"}`}>
                  ${rates[e.name]?.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dx-road-truck { animation: dx-truck-drive 5.5s linear infinite; }
        .dx-road-dashes { animation: dx-dash-scroll 0.7s linear infinite; }
        .dx-wheel { animation: dx-wheel-spin 0.45s linear infinite; }
        @keyframes dx-dash-scroll { to { stroke-dashoffset: -48; } }
        @media (prefers-reduced-motion: reduce) {
          .dx-road-truck { animation: none; transform: translateX(40vw); }
          .dx-road-dashes, .dx-wheel { animation: none; }
        }
      `}</style>
    </section>
  );
}