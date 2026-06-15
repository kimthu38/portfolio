import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolioData";
import BgLineImage from "@/assets/images/bg-line.webp";
import Image from "next/image";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { personal } = portfolioData;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description = `${personal.name} is a ${personal.role} based in ${personal.location} with 6+ years of experience building scalable web applications using React, Next.js, TypeScript, Vue.js, and Angular. Currently open to new opportunities.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personal.name,
      jobTitle: personal.role,
      url: siteUrl,
      email: personal.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
      sameAs: personal.socialLinks
        .filter((l) => !l.href.startsWith("mailto:"))
        .map((l) => l.href),
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue.js",
        "Angular",
        "JavaScript",
        "Frontend Development",
        "Web Performance",
        "TailwindCSS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${personal.name} | ${personal.role}`,
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} | ${personal.role}`,
    template: `%s | ${personal.name}`,
  },
  description,
  keywords: [
    personal.name,
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Vue.js",
    "Angular",
    "JavaScript",
    "Web Developer",
    "UI Developer",
    "Portfolio",
    "Ho Chi Minh City",
    "Vietnam",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Web Performance",
    "Accessibility",
  ],
  authors: [
    {
      name: personal.name,
      url: personal.socialLinks.find((l) => l.name === "GitHub")?.href,
    },
  ],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${personal.name} Portfolio`,
    title: `${personal.name} | ${personal.role}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | ${personal.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Amber accent line at very top */}
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <Image
            src={BgLineImage}
            alt=""
            aria-hidden="true"
            width={200}
            height={168}
            loading="eager"
            className="pointer-events-none absolute -inset-10 -z-10 h-auto w-[250px] md:w-[300px] object-cover rotate-90 opacity-30"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
