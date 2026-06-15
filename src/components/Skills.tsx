"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="The tools and frameworks I use to build modern web experiences."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                  <Icon className="size-5" />
                </div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
