"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "./CountUp";

type Props = {
  label: string;
  before: number;
  after: number;
  max?: number;
  unit?: string;
};

export default function BeforeAfterBar({ label, before, after, max = 100, unit = "" }: Props) {
  const reduce = useReducedMotion();

  const rows = [
    { name: "Before", value: before, color: "bg-slate-400 dark:bg-slate-600", delay: 0 },
    { name: "After", value: after, color: "bg-indigo-600", delay: 0.25 },
  ];

  return (
    <figure>
      <figcaption className="mb-3 font-medium">{label}</figcaption>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-14 text-xs text-slate-500">{r.name}</span>
            <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div
                className={`h-full rounded-full ${r.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${(r.value / max) * 100}%` }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : r.delay, ease: "easeOut" }}
              />
            </div>
            <span className="w-14 text-right font-semibold tabular-nums">
              <CountUp to={r.value} suffix={unit} delay={r.delay} />
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}