import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { getPortfolio } from "@/sanity/lib/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPortfolio();
  const profile = data?.profile;

  if (!profile) {
    return { title: "Portfolio", icons: { icon: "/favicon.ico" } };
  }

  return {
    metadataBase: new URL(profile.siteUrl),
    icons: { icon: "/favicon.ico" },
    title: `${profile.name} | ${profile.title}`,
    description: profile.intro,
    alternates: { canonical: "/" },
    openGraph: {
      title: `${profile.name} | ${profile.title}`,
      description: profile.headline,
      url: "/",
      type: "website",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${profile.name} portfolio` }],
    },
    twitter: { card: "summary_large_image", images: ["/twitter-image.png"] },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}