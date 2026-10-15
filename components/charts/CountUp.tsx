"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  from?: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

export default function CountUp({ to, from = 0, suffix = "", duration = 1.2, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;

    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }

    const controls = animate(from, to, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, from, suffix, duration, delay]);

  return (
    <>
      {/* Final value stays in the HTML for crawlers and screen readers */}
      <span className="sr-only">{`${to}${suffix}`}</span>
      <span ref={ref} aria-hidden>{`${from}${suffix}`}</span>
    </>
  );
}