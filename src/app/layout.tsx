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

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.role}`,
  description: personal.tagline,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | ${personal.role}`,
    description: personal.tagline,
    type: "website",
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
            alt="Background line pattern"
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
