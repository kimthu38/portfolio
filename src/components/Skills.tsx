"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";
import type { Skill } from "@/types";
import { motion } from "framer-motion";

const GROUPS: { key: Skill["category"]; label: string; speed: number }[] = [
  { key: "languages", label: "Languages", speed: 22 },
  { key: "frameworks", label: "Frameworks & Libraries", speed: 28 },
  { key: "tools", label: "Tools & Platforms", speed: 24 },
];

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Skills" title="Technologies I work with" />
      </div>

      <div className="space-y-10">
        {GROUPS.map((group, groupIndex) => {
          const groupSkills = skills.filter((s) => s.category === group.key);
          const isReverse = groupIndex % 2 === 1;
          // Duplicate to make a seamless loop
          const items = [...groupSkills, ...groupSkills, ...groupSkills, ...groupSkills];

          return (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              {/* Group label */}
              <div className="mx-auto mb-5 max-w-6xl px-4 sm:px-6 lg:px-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-foreground/30 uppercase">
                  {group.label}
                </p>
              </div>

              {/* Track with fade edges */}
              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

                <div
                  className="flex w-max gap-3 py-1"
                  style={{
                    animation: `${isReverse ? "marquee-reverse" : "marquee"} ${group.speed}s linear infinite`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
                  }}
                >
                  {items.map((skill, i) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <div
                        key={`${skill.name}-${i}`}
                        className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-2.5 transition-colors hover:border-amber-400/30 hover:bg-amber-400/[0.05] cursor-default"
                      >
                        <Icon className="size-4 shrink-0 text-amber-400/60" />
                        <span className="whitespace-nowrap text-sm font-medium text-foreground/60">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
