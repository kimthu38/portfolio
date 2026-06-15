"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import GetShitDoneImage from "@/assets/images/get-shit-done.webp";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Projects" title="Featured projects" />

        <div className="flex gap-12 flex-col md:flex-row">
          <div className="flex-1">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group border-t border-white/[0.07] py-10 last:border-b transition-colors hover:border-amber-400/20"
              >
                <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
                  {/* Number */}
                  <span className="hidden text-6xl font-extrabold leading-none text-foreground/[0.06] transition-colors group-hover:text-amber-400/60 group-hover:dark:text-amber-400/30 select-none sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div>
                    {project.image && project.imageAlt && (
                      <div className="relative mb-5 aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 60vw"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-amber-400">
                        {project.title}
                      </h3>
                      {(project.githubUrl || project.liveUrl) && (
                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-foreground/40 transition-colors hover:text-foreground"
                            >
                              <GitFork className="size-3.5" />
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-amber-400/70 transition-colors hover:text-amber-300"
                            >
                              <ExternalLink className="size-3.5" />
                              Live
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Tech tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-amber-400/15 px-3 py-0.5 text-xs font-medium text-foreground/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullet points */}
                    <ul className="mt-5 space-y-2">
                      {project.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/50"
                        >
                          <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-amber-400/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <Image
            src={GetShitDoneImage}
            alt="Background line pattern"
            width={640}
            height={360}
            className="hidden rounded-lg object-contain md:block w-[200px] md:w-[250px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
