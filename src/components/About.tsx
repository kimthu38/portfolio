"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About" title="Building the web" />

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {personal.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-foreground/55"
              >
                {paragraph}
              </p>
            ))}

            <ul className="list-inside list-disc space-y-2 pt-2 marker:text-amber-400">
              {personal.summary.map((point) => (
                <li
                  key={point.slice(0, 32)}
                  className="text-sm text-foreground/50"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <div className="rounded-xl border dark:border-white/[0.07] bg-white/[0.02] p-5">
              <p className="mb-1.5 flex items-center gap-1.5 text-xs text-foreground/30">
                <MapPin className="size-3.5 text-amber-400/50" />
                Location
              </p>
              <p className="text-sm font-medium text-foreground/70">
                {personal.location}
              </p>
            </div>

            <div className="rounded-xl border dark:border-white/[0.07] bg-white/[0.02] p-5">
              <p className="mb-1.5 flex items-center gap-1.5 text-xs text-foreground/30">
                <Briefcase className="size-3.5 text-amber-400/50" />
                Status
              </p>
              <p className="text-sm font-semibold text-amber-400">
                Open to opportunities
              </p>
            </div>

            <div className="rounded-xl border dark:border-white/[0.07] bg-white/[0.02] p-5">
              <p className="mb-2 text-xs text-foreground/30">Focus areas</p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "TypeScript", "Performance"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-amber-400/60 dark:border-amber-400/20 px-2.5 py-0.5 text-xs font-medium text-amber-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
