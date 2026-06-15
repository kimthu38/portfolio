"use client";

import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] dark:opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-violet-400" />
            </span>
            Available for new opportunities
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-50"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-4 text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300"
          >
            {personal.role}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            className="mt-10 flex items-center gap-4"
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
                className="flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:text-violet-400"
              >
                <Icon className="size-4" />
              </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300 sm:flex"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="size-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
