"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "./CountUp";

type Props = {
  value: number; // 0-100
  label: string;
  size?: number;
};

export default function Gauge({ value, label, size = 110 }: Props) {
  const reduce = useReducedMotion();

  return (
    <figure className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 120 120" width={size} height={size} className="-rotate-90" aria-hidden>
          <circle
            cx="60" cy="60" r="52" fill="none" strokeWidth="10"
            className="stroke-slate-200 dark:stroke-slate-800"
          />
          <motion.circle
            cx="60" cy="60" r="52" fill="none" strokeWidth="10" strokeLinecap="round"
            className="stroke-indigo-600"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: value / 100 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          <CountUp to={value} />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-slate-500">{label}</figcaption>
    </figure>
  );
}