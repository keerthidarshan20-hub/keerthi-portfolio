"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle({lightLabel, darkLabel}: {lightLabel: string; darkLabel: string}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Placeholder with the same size avoids layout shift and hydration mismatch
  if (!mounted) return <span className="inline-block h-9 w-9" aria-hidden />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? lightLabel : darkLabel}
      aria-pressed={isDark}
      className="h-9 w-9 rounded-lg border border-slate-300 text-base hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}