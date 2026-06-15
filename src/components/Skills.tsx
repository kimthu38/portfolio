"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";
import type { Skill } from "@/types";
import { motion } from "framer-motion";

const GROUPS: { key: Skill["category"]; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks & Libraries" },
  { key: "tools", label: "Tools & Platforms" },
];

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Skills" title="Technologies I work with" />

        <div className="mt-12 space-y-10">
          {GROUPS.map((group, groupIndex) => {
            const groupSkills = skills.filter((s) => s.category === group.key);

            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-foreground/30 uppercase">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {groupSkills.map((skill) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 rounded-full border border-foreground/5 dark:border-white/[0.08] bg-white/[0.025] px-5 md:px-8 py-2.5 md:py-4 hover:shadow-lg hover:shadow-amber-400/20 transition-colors hover:border-amber-400/30 hover:bg-amber-400/[0.05] cursor-default"
                      >
                        <Icon className="size-4 md:size-5 shrink-0 text-amber-400/60" />
                        <span className="text-sm md:text-base font-medium text-foreground/60">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
