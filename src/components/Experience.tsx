"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  milestone: Star,
};

const typeColors = {
  work: "border-violet-500/40 bg-violet-500/10 text-violet-400",
  education: "border-indigo-500/40 bg-indigo-500/10 text-indigo-400",
  milestone: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My journey so far"
          description="Professional experience, education, and milestones that shaped my career."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-4 h-full w-px bg-linear-to-b from-violet-500/50 via-zinc-700 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const Icon = typeIcons[item.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col sm:flex-row sm:items-start",
                    isEven ? "sm:flex-row-reverse" : "",
                  )}
                >
                  <div className="hidden flex-1 sm:block" />

                  <div className="absolute left-4 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-zinc-300 bg-zinc-50 sm:left-1/2 dark:border-zinc-700 dark:bg-zinc-900">
                    <div
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full border",
                        typeColors[item.type],
                      )}
                    >
                      <Icon className="size-3" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "ml-12 flex-1 sm:ml-0",
                      isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12",
                    )}
                  >
                    <div className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700">
                      <time className="text-xs font-medium tracking-wider text-violet-600 uppercase dark:text-violet-400">
                        {item.period}
                      </time>
                      <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {item.organization}
                      </p>
                      <ul className="mt-3 space-y-1.5 text-left">
                        {item.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-zinc-500"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-violet-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
