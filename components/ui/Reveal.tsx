// dexent/components/ui/Reveal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

// Feather-light scroll reveal. Wraps static server content; only this
// tiny wrapper ships JS. Respects reduced-motion via the CSS class.
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`dx-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}