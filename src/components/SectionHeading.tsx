"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 max-w-2xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-amber-400" />
        <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
          {label}
        </p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foreground/50">
          {description}
        </p>
      )}
    </motion.div>
  );
}
