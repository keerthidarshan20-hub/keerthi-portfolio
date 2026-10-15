import { profile, services, experience, skills } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";
import ResultsSection from "@/components/ResultsSection";
import Reveal from "@/components/motion/Reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.siteUrl}/#person`,
      name: profile.name,
      jobTitle: profile.title,
      url: profile.siteUrl,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
      worksFor: { "@type": "Organization", name: "Contentstack" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: ["Next.js", "React", "TypeScript", "Technical SEO", "Core Web Vitals", "AI crawlability", "Schema.org"],
    },
    {
      "@type": "WebSite",
      "@id": `${profile.siteUrl}/#website`,
      url: profile.siteUrl,
      name: `${profile.name} Portfolio`,
      publisher: { "@id": `${profile.siteUrl}/#person` },
    },
    {
      "@type": "ProfessionalService",
      name: `${profile.name} Frontend & SEO Consulting`,
      provider: { "@id": `${profile.siteUrl}/#person` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-10 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <span className="font-semibold">{profile.name}</span>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <div className="flex items-center gap-6">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-24">
          <p className="text-sm font-medium text-indigo-600">{profile.title} · {profile.location}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">
              Work with me
            </a>
            <a href={profile.linkedin} className="rounded-lg border border-slate-300 px-5 py-3 font-medium hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900">
              LinkedIn
            </a>
          </div>
        </section>

        {/* Results strip */}
        {/* <section aria-label="Key results" className="grid gap-6 border-y border-slate-200 py-10 sm:grid-cols-3 dark:border-slate-800">
          {[
            ["18 → 38", "Semrush AI Visibility Score"],
            ["42% → 84%", "AI Search Health Score"],
            ["90+", "Lighthouse performance"],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold">{num}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </section> */}
        <ResultsSection />

        {/* Services */}
        <section id="services" className="py-20">
          <h2 className="text-3xl font-bold">Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <article className="h-full rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-xs font-medium text-indigo-600">{s.stack}</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">{s.description}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience + skills */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold">Experience</h2>
          <ul className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
            {experience.map((e) => (
              <li key={e.role + e.company} className="flex flex-col py-4 sm:flex-row sm:justify-between">
                <span><strong>{e.role}</strong>, {e.company}</span>
                <span className="text-slate-500">{e.period}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">{s}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold">Let&apos;s talk</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Need a site audit, a Next.js build, or help getting cited by AI search?
          </p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {profile?.name}
      </footer>
    </>
  );
}