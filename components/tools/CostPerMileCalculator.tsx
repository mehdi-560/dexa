// dexent/components/tools/CostPerMileCalculator.tsx
"use client";

import { useState, useMemo } from "react";
import { CONTACT } from "@/lib/constants";

export default function CostPerMileCalculator() {
  const [miles, setMiles] = useState("");
  const [fixed, setFixed] = useState("");
  const [variable, setVariable] = useState("");
  const [salary, setSalary] = useState("");

  const result = useMemo(() => {
    const m = parseFloat(miles);
    const total =
      (parseFloat(fixed) || 0) +
      (parseFloat(variable) || 0) +
      (parseFloat(salary) || 0);
    if (!m || m <= 0) return null;
    return total / m;
  }, [miles, fixed, variable, salary]);

  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Miles driven (per month)" value={miles} onChange={setMiles} placeholder="e.g. 10000" />
        <Field label="Fixed costs ($/mo)" value={fixed} onChange={setFixed} placeholder="truck note, insurance…" />
        <Field label="Variable costs ($/mo)" value={variable} onChange={setVariable} placeholder="fuel, maintenance…" />
        <Field label="Your pay ($/mo)" value={salary} onChange={setSalary} placeholder="what you pay yourself" />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-paper-2 p-5 text-center">
        <div className="text-[12px] font-semibold uppercase tracking-wider text-steel">
          Your cost per mile
        </div>
        <div className="mt-2 text-4xl font-semibold text-brand font-[family-name:var(--font-display)]">
          {result !== null ? `$${result.toFixed(2)}` : "—"}
        </div>
        <p className="mt-2 text-[12px] text-steel">
          {result !== null
            ? "Never book a load below this number without a reason."
            : "Enter your miles and costs to see your break-even rate."}
        </p>
      </div>

      <div className="mt-5 rounded-xl bg-brand-50 p-4 text-center">
        <p className="text-[13px] text-ink">
          Want us to book loads that clear this rate?{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-brand">
            Call {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-ink">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink focus:border-brand focus:outline-none"
      />
    </label>
  );
}