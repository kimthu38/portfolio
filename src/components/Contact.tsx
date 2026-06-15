"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                I&apos;m currently open to freelance projects and full-time
                opportunities. Drop me a message and I&apos;ll get back to you
                within 24 hours.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                <Mail className="size-4" />
                {personal.email}
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-50 dark:placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-50 dark:placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-50 dark:placeholder:text-zinc-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-sm text-emerald-400">
                  Thanks! Your message has been sent successfully.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
