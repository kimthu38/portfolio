"use client";

import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const stats = [
  { value: "7+", label: "Years\nExperience" },
  { value: "4", label: "Companies\nWorked" },
  { value: "10+", label: "Projects\nDelivered" },
];

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Amber blob — top right */}
        <div className="absolute -top-32 -right-32 size-[700px] rounded-full bg-amber-500/[0.07] blur-[130px]" />
        {/* Orange blob — bottom left */}
        <div className="absolute -bottom-48 -left-48 size-[600px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
        {/* Subtle warm center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-amber-400/[0.03] blur-[160px]" />
        {/* Fine grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
          {/* Left — text content */}
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            {/* Available pill */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2.5"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-amber-400" />
              </span>
              <span className="text-sm font-medium text-foreground/40">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name above heading */}
            <motion.p
              custom={1}
              variants={fadeUp}
              className="mb-2 text-sm font-semibold tracking-[0.2em] text-foreground/30 uppercase"
            >
              Kim Thu Nguyen
            </motion.p>

            {/* Big heading */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              className="text-6xl font-extrabold leading-none tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="block text-foreground">Frontend</span>
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Engineer.
              </span>
            </motion.h1>

            {/* Location */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-3 flex items-center gap-1.5 text-sm text-foreground/30"
            >
              <MapPin className="size-3.5 text-amber-400/50" />
              {personal.location}
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={4}
              variants={fadeUp}
              className="mt-8 max-w-lg text-base leading-relaxed text-foreground/50 sm:text-lg"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-300/30"
              >
                View Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-6 py-2.5 text-sm font-semibold text-foreground/60 transition-all hover:border-amber-400/40 hover:text-foreground"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={6}
              variants={fadeUp}
              className="mt-8 flex items-center gap-3"
            >
              {personal.socialLinks.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex size-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/40 transition-all hover:border-amber-400/40 hover:text-amber-400"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden flex-col overflow-hidden rounded-2xl border border-white/[0.08] lg:flex"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "group px-10 py-7 transition-colors hover:bg-amber-400/[0.04]",
                  i < stats.length - 1 && "border-b border-white/[0.06]",
                )}
              >
                <div className="text-4xl font-bold text-amber-400">{stat.value}</div>
                <div className="mt-1 whitespace-pre-line text-[10px] font-semibold leading-relaxed tracking-[0.15em] text-foreground/30 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-foreground/25 transition-colors hover:text-amber-400 sm:flex"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">
            Scroll
          </span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-amber-400/60 to-transparent" />
        </motion.a>
      </div>
    </section>
  );
}
