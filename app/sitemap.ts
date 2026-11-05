import type { MetadataRoute } from "next";
import { getPortfolio } from "@/sanity/lib/portfolio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPortfolio();
  return data?.profile?.siteUrl
    ? [{ url: data.profile.siteUrl, lastModified: new Date(), priority: 1 }]
    : [];
}