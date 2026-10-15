"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    when: "Day 0",
    title: "Discovery call",
    desc: "30 minutes to understand your wedding, your vendors, and what's keeping you up at night.",
  },
  {
    num: "02",
    when: "Day 1–2",
    title: "90-min kickoff",
    desc: "Deep dive: your date, venue, guest list, rough budget, and every vendor contact you have.",
  },
  {
    num: "03",
    when: "Day 3–5",
    title: "Your system is live",
    desc: "Linked budget model built. RSVP forecast running. Hotel block calculated. All connected.",
  },
  {
    num: "04",
    when: "Week 1",
    title: "Contracts reviewed",
    desc: "Upload up to 3 vendor contracts. Red flags surfaced, renegotiation points identified.",
  },
  {
    num: "05",
    when: "Weeks 2–9",
    title: "Async AI support",
    desc: "Questions answered, numbers updated, new contracts reviewed — on your schedule, not ours.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28 bg-vow-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-vow-gold" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold font-sans">
              What happens after you book
            </span>
          </div>
          <h2
            className="font-display font-light text-vow-dark leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
          >
            From zero to system
            <br />
            <em className="italic text-vow-secondary/60">in under a week.</em>
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[28px] left-[calc(100%/10)] right-[calc(100%/10)] h-px bg-gradient-to-r from-vow-terra/40 via-vow-gold/60 to-vow-olive/40 origin-left"
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-vow-bg border-2 border-vow-gold/40 flex items-center justify-center">
                      <span className="font-display text-lg font-light text-vow-gold">{step.num}</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="text-center">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-vow-secondary/50 font-sans mb-2">
                    {step.when}
                  </div>
                  <h3 className="font-display text-lg font-medium text-vow-dark mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-vow-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[17px] top-0 bottom-0 w-px bg-gradient-to-b from-vow-terra/40 via-vow-gold/60 to-vow-olive/40 origin-top"
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Node */}
                <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-vow-bg border-2 border-vow-gold/40 flex items-center justify-center">
                  <span className="font-display text-sm font-light text-vow-gold">{step.num}</span>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-vow-secondary/50 font-sans mb-1.5">
                    {step.when}
                  </div>
                  <h3 className="font-display text-xl font-medium text-vow-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-vow-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
