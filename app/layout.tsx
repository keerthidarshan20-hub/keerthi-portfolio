import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  icons: { icon: "/favicon.ico" },
  title: `${profile.name} | Frontend Architecture, Technical SEO & AI Crawlability`,
  description: profile.intro,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.headline,
    url: "/",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}