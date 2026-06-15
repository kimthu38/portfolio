"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Experience" title="My journey" />

        <div className="relative max-w-3xl border-l border-white/[0.08] pl-8 ml-2">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={index < experience.length - 1 ? "mb-14" : ""}
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-[0.3125rem] mt-1.5 size-2.5 rounded-full border-2 border-amber-400 bg-background" />

              <time className="text-xs font-semibold tracking-[0.18em] text-amber-400/70 uppercase">
                {item.period}
              </time>

              <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-0.5 text-sm font-medium text-foreground/35">
                {item.organization}
              </p>

              <ul className="mt-4 space-y-2">
                {item.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/50"
                  >
                    <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-amber-400/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
