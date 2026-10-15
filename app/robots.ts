import type { MetadataRoute } from "next";
import { profile } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  const bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...bots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}