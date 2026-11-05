import ThemeToggle from "@/components/ThemeToggle";
import ResultsSection from "@/components/ResultsSection";
import Reveal from "@/components/motion/Reveal";
import CurrentYear from "@/components/CurrentYear";
import { getPortfolio } from "@/sanity/lib/portfolio";

export default async function Home() {
  const data = await getPortfolio();
  if (!data || !data.content) return <main className="mx-auto max-w-5xl px-6 py-24">Portfolio content is unavailable. Please complete the Site Content fields in the Sanity document.</main>;
  const content = data.content;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: data.profile.name,
        jobTitle: data.profile.title,
        url: data.profile.siteUrl,
        email: `mailto:${data.profile.email}`,
        address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
        sameAs: [data.profile.linkedin, data.profile.github],
        knowsAbout: data.skills,
      }) }} />

      <a className="skip-link" href="#home">Skip to content</a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label={`${data.profile.name}, home`}>KM<span>.</span></a>
          <div className="nav-links">
            <a href="#work">{content.navigation.expertise}</a><a href="#experience">{content.navigation.experience}</a><a href="#contact">{content.navigation.contact}</a>
            <ThemeToggle lightLabel={content.themeLightLabel} darkLabel={content.themeDarkLabel} />
          </div>
        </nav>
      </header>

      <main id="home" className="page-shell">
        <section className="hero pt-4" aria-labelledby="hero-title">
          <div className="wordmark pb-6">Keerthi Mohan</div>
          <div className="eyebrow"><span className="status-dot" aria-hidden="true" /> {data.profile.location} <span className="eyebrow-divider" aria-hidden="true">/</span> {content.availabilityText}</div>
          <h1 id="hero-title">{data.profile.headline}</h1>
          <p className="hero-copy">{data.profile.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">{content.hero.ctaLabel} <span aria-hidden="true">↘</span></a>
            <a className="button-secondary" href="/Keerthi-Mohan-Resume.pdf" download>{content.hero.resumeLabel}</a>
          </div>
          <div className="hero-meta">{content.hero.meta.map((item: string) => <span key={item}>{item}</span>)}</div>
        </section>

        <section id="work" className="section-block">
          <div className="section-heading"><p className="section-kicker">{content.sections.expertiseKicker}</p><h2>{content.sections.expertiseTitle}</h2><p className="section-intro">{content.sections.expertiseIntro}</p></div>
          <div className="focus-grid">
            {content.focusAreas.map((item: {number: string; title: string; detail: string}, i: number) => <Reveal key={item.number} delay={i * 0.08}><article className="focus-card"><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p></article></Reveal>)}
          </div>
        </section>

        <section className="results-wrap" aria-labelledby="results-title">
          <div className="section-heading compact"><p className="section-kicker">{content.sections.resultsKicker}</p><h2 id="results-title">{content.sections.resultsTitle}</h2></div>
          <ResultsSection results={data.results} heading={content.sections.resultsHeading} description={content.sections.resultsDescription} lighthouseTitle={content.sections.lighthouseTitle} beforeLabel={content.beforeLabel} afterLabel={content.afterLabel} />
        </section>

        <section id="experience" className="section-block experience-section">
          <div className="section-heading"><p className="section-kicker">{content.sections.experienceKicker}</p><h2>{content.sections.experienceTitle}</h2></div>
          <div className="experience-list">
            {data.experience.map((e: { role: string; company: string; period: string }, i: number) => <Reveal key={e.role + e.company} delay={i * 0.08}><div className="experience-row"><div><h3>{e.role}</h3><p>{e.company}</p></div><span>{e.period}</span></div></Reveal>)}
          </div>
          <div className="skill-cloud" aria-label={content.sections.skillsLabel}>{data.skills.map((s: string) => <span key={s}>{s}</span>)}</div>
        </section>

        <section id="contact" className="contact-panel">
          <p className="section-kicker">{content.sections.contactKicker}</p><h2>{content.sections.contactTitle} <span className="accent-text">{content.sections.contactAccent}</span></h2><p>{content.sections.contactDescription}</p>
          <a className="button-primary" href={`mailto:${data.profile.email}`}>{content.sections.contactCta} ↗</a>
          <div className="contact-links"><a href={data.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={data.profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </section>
      </main>

      <footer className="site-footer"><span>{data.profile.name} <span className="accent-text">©</span> <CurrentYear /></span><span>{content.sections.footerTagline}</span></footer>
    </>
  );
}
