"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SyntheticEvent, useState } from "react";
import Image from "next/image";
import CatDevImage from "@/assets/images/cat-dev.webp";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
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
            <Image
              src={CatDevImage}
              alt="Contact illustration"
              width={400}
              height={200}
              className="h-full max-w-sm rounded-lg object-cover object-top"
            />
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
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold tracking-wider text-foreground/40 uppercase"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold tracking-wider text-foreground/40 uppercase"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full px-6 py-2.5 h-auto font-semibold shadow-lg shadow-amber-400/20"
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </Button>

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
