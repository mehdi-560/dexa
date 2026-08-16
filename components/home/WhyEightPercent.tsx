// dexent/components/home/WhyEightPercent.tsx
// Server component. The premium justification — net-per-mile, not fee.

export default function WhyEightPercent() {
  return (
    <section className="bg-paper-2 py-14">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-2xl font-semibold tracking-tight font-[family-name:var(--font-display)]">
          Why 8% earns its keep
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-steel">
          We compete on your net-per-mile, not on the fee. A dispatcher charging
          5% on cheap loads can leave you with less than one charging 8% on
          well-negotiated loads. We negotiate harder so what lands in your pocket
          — after our fee — is higher.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-5">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-steel">
              A cheaper dispatcher
            </div>
            <div className="mt-2 text-[15px] text-ink">
              5% on a $2.00/mi load ={" "}
              <span className="font-semibold">$1.90/mi to you</span>
            </div>
          </div>
          <div className="rounded-xl border-2 border-brand bg-brand-50 p-5">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-brand">
              Dexent at 8%
            </div>
            <div className="mt-2 text-[15px] text-ink">
              8% on a $2.80/mi load ={" "}
              <span className="font-semibold text-brand">$2.58/mi to you</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[12px] text-steel/80">
          Illustrative example. Your rates depend on lane, equipment, and market.
        </p>
      </div>
    </section>
  );
}