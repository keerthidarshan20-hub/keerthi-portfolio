import type { MetadataRoute } from "next";
import { getPortfolio } from "@/sanity/lib/portfolio";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const data = await getPortfolio();
  const bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...bots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    ...(data?.profile?.siteUrl ? {sitemap: `${data.profile.siteUrl}/sitemap.xml`} : {}),
  };
}