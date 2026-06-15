"use client";

import { portfolioData } from "@/data/portfolioData";
import { getIcon } from "@/lib/icons";

export function SkillsMarquee() {
  const items = [
    ...portfolioData.skills,
    ...portfolioData.skills,
    ...portfolioData.skills,
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max gap-3"
        style={{ animation: "marquee 90s linear infinite" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "running";
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
  );
}
