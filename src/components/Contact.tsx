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

  const inputClass =
    "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 outline-none transition-all focus:border-amber-400/40 focus:bg-amber-400/[0.03] focus:ring-1 focus:ring-amber-400/20";

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <p className="text-sm leading-relaxed text-foreground/50">
                I&apos;m currently open to freelance projects and full-time
                opportunities. Drop me a message and I&apos;ll get back to you
                within 24 hours.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
              >
                <Mail className="size-4" />
                {personal.email}
              </a>
            </div>

            {/* Decorative amber block */}
            <div className="hidden rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-8 lg:block">
              <p className="text-2xl font-bold leading-tight text-foreground/20">
                &ldquo;Good design is as little design as possible.&rdquo;
              </p>
              <p className="mt-3 text-xs text-foreground/25">— Dieter Rams</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold tracking-wider text-foreground/40 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold tracking-wider text-foreground/40 uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold tracking-wider text-foreground/40 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-sm text-emerald-400">Sent successfully!</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
