import Reveal from "@/components/motion/Reveal";
import BeforeAfterBar from "@/components/charts/BeforeAfterBar";
import Gauge from "@/components/charts/Gauge";
import { results } from "@/data/content";

export default function ResultsSection() {
  return (
    <section id="results" className="py-20">
      <Reveal>
        <h2 className="text-3xl font-bold">Results</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Measured outcomes from technical SEO and AI crawlability work at Contentstack, plus
          this site&apos;s own Lighthouse scores.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="space-y-8 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          {results.beforeAfter.map((r) => (
            <BeforeAfterBar key={r.label} {...r} />
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
        >
          <h3 className="mb-6 font-medium">This site&apos;s Lighthouse scores</h3>
          <div className="grid grid-cols-2 gap-6">
            {results.gauges.map((g) => (
              <Gauge key={g.label} {...g} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}