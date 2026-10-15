"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this software I download?",
    a: "No. It's an AI-powered system. For concierge clients, we set everything up for you. Self-serve software is coming mid-2026.",
  },
  {
    q: "Why pay for this when The Knot is free?",
    a: "The Knot is a vendor marketplace. It doesn't model your budget, review your contracts, or forecast your RSVPs. It's free because you're the product.",
  },
  {
    q: "When is the software launching?",
    a: "Target mid-2026. Founding concierge clients get first access and lifetime pricing.",
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "The concierge service is fully done-for-you. You don't touch any software.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 bg-vow-card relative overflow-hidden">
      {/* Background number */}
      <div
        className="absolute right-0 bottom-0 font-display font-light text-vow-dark/[0.028] leading-none select-none pointer-events-none translate-y-[15%]"
        style={{ fontSize: "clamp(12rem, 26vw, 20rem)" }}
        aria-hidden="true"
      >
        FAQ
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-14 lg:gap-24">
          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-vow-gold" />
              <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold font-sans">
                Questions
              </span>
            </div>
            <h2
              className="font-display font-light text-vow-dark leading-[0.95] mb-7"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              The obvious
              <br />
              <em className="italic text-vow-secondary/70">ones.</em>
            </h2>
            <p className="text-vow-secondary text-[15px] leading-[1.85] max-w-xs font-sans">
              Something we didn&apos;t cover? Ask on your discovery call — or
              write to{" "}
              <a
                href="mailto:hello@vowplanning.com"
                className="text-vow-gold underline underline-offset-4 decoration-vow-gold/30 hover:decoration-vow-gold transition-all"
              >
                hello@vowplanning.com
              </a>
              .
            </p>
          </motion.div>

          {/* Right — numbered accordion */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-vow-dark/[0.09] last:border-b"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left py-8 md:py-9 flex items-start gap-6 md:gap-9 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-sm md:text-base mt-1.5 md:mt-2 flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-vow-gold" : "text-vow-dark/25 group-hover:text-vow-gold/60"
                      }`}
                    >
                      №{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-display font-light leading-[1.15] transition-colors duration-300 ${
                        isOpen ? "text-vow-dark" : "text-vow-dark/75 group-hover:text-vow-dark"
                      }`}
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex-shrink-0 text-2xl md:text-3xl font-light mt-0.5 leading-none transition-colors duration-300 ${
                        isOpen ? "text-vow-gold" : "text-vow-dark/30 group-hover:text-vow-gold"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 pl-[calc(1.5rem+1.5rem)] md:pl-[calc(2rem+2.25rem)] pr-12">
                          <p className="text-vow-secondary leading-[1.9] max-w-lg text-[15px] font-sans">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
