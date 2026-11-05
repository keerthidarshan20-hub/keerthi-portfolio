import Reveal from "@/components/motion/Reveal";
import BeforeAfterBar from "@/components/charts/BeforeAfterBar";
import Gauge from "@/components/charts/Gauge";

type ResultsSectionProps = {
  results: {
    beforeAfter?: Array<{label: string; before: number; after: number; max?: number; unit?: string}>;
    gauges?: Array<{label: string; value: number}>;
  };
  description: string;
  heading: string;
  lighthouseTitle: string;
  beforeLabel: string;
  afterLabel: string;
};

export default function ResultsSection({
  results,
  heading,
  description,
  lighthouseTitle,
  beforeLabel,
  afterLabel,
}: ResultsSectionProps) {
  return (
    <section id="results" className="py-20">
      <Reveal>
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="space-y-8 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
          {(results.beforeAfter ?? []).map((r) => (
            <BeforeAfterBar key={r.label} {...r} beforeLabel={beforeLabel} afterLabel={afterLabel} />
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
        >
          <h3 className="mb-6 font-medium">{lighthouseTitle}</h3>
          <div className="grid grid-cols-2 gap-6">
            {(results.gauges ?? []).map((g) => (
              <Gauge key={g.label} {...g} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}