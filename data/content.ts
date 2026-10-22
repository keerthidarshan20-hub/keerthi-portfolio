export const profile = {
  name: "Keerthi Mohan",
  title: "Senior Frontend Engineer",
  headline: "I build fast Next.js sites that rank in Google and get cited by AI search.",
  intro:
    "10 years building React and Next.js platforms. At Contentstack I lifted the Semrush AI Visibility Score from 18 to 38 and AI Search Health from 42% to 84%, while keeping Lighthouse above 90.",
  email: "keerthidarshan20@gmail.com",
  linkedin: "https://linkedin.com/in/keerthi-mohan-uideveloper/",
  github: "https://github.com/keerthidarshan20-hub/keerthi-portfolio",
  location: "Riyadh, Saudi Arabia",
  siteUrl: "https://your-domain.com", // replace after deploy
};

export const services = [
  {
    title: "Frontend Web Architecture",
    stack: "React · Next.js · SSR · TypeScript",
    description:
      "Scalable, maintainable frontends with reusable component systems, server rendering, and headless CMS integration.",
    points: [
      "Built Contentstack Academy from scratch on Next.js",
      "Led marketing and docs platforms for a headless CMS company",
      "Legacy jQuery to React migrations (Bed Bath & Beyond, Lecet)",
    ],
  },
  {
    title: "Technical SEO Audits & Core Web Vitals",
    stack: "Semrush · Lighthouse · PageSpeed · GTM/GA",
    description:
      "Audits that turn into shipped fixes: metadata, rendering, accessibility, and performance budgets.",
    points: [
      "Kept Lighthouse performance above 90 across key pages",
      "Optimized LCP, CLS, and INP with WCAG-compliant builds",
      "Analytics and tag setup for campaign measurement",
    ],
  },
  {
    title: "AI Crawlability & Schema Integration",
    stack: "JSON-LD · Schema.org · robots · llms.txt",
    description:
      "Making content readable and citable by ChatGPT, Perplexity, and other LLM-powered search.",
    points: [
      "AI Visibility Score 18 → 38 in Semrush",
      "AI Search Health 42% → 84%",
      "Structured data, clean server-rendered HTML, crawler-friendly rules",
    ],
  },
];

export const experience = [
  { role: "Senior Software Engineer 2", company: "Contentstack", period: "2022 – Present" },
  { role: "Senior Software Engineer", company: "Y Media Labs", period: "2018 – 2022" },
  { role: "Associate Technology", company: "Publicis Sapient", period: "2016 – 2018" },
];

export const skills = [
  "React.js", "Next.js", "TypeScript", "Tailwind/SCSS", "Redux",
  "Semrush", "Lighthouse", "Core Web Vitals", "Schema.org",
  "Contentstack", "Contentful", "Playwright", "Jest", "GA/GTM",
];

export const results = {
  beforeAfter: [
    // max = top of the scale. I'm assuming 0-100 for both; adjust if your Semrush score uses a different scale.
    { label: "Semrush AI Visibility Score", before: 18, after: 38, max: 100, unit: "" },
    { label: "Semrush AI Search Health", before: 42, after: 84, max: 100, unit: "%" },
  ],
  // TODO: replace with the real Lighthouse scores from your deployed site
  gauges: [
    { label: "Performance", value: 99 },
    { label: "Accessibility", value: 99 },
    { label: "Best Practices", value: 100 },
    { label: "SEO", value: 100 },
  ],
};