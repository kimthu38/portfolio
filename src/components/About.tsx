"use client";

import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building the web, one component at a time"
          description="A quick look at who I am and what drives my work."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="size-4 text-violet-400" />
              {personal.location}
            </div>
            <div className="space-y-4">
              {personal.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
