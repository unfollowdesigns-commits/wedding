"use client";

import { motion } from "framer-motion";

const spotsRemaining = process.env.NEXT_PUBLIC_SPOTS_REMAINING ?? "5";

const deliverables = [
  {
    num: "I",
    title: "90-minute planning kickoff",
    desc: "A focused session to map your entire wedding system from scratch.",
    tag: "Live session",
  },
  {
    num: "II",
    title: "Linked budget model",
    desc: "Built specifically for your wedding, not a generic template.",
    tag: "Custom build",
  },
  {
    num: "III",
    title: "RSVP probability forecast",
    desc: "Not just a headcount — a statistical model of who will actually show.",
    tag: "Statistical",
  },
  {
    num: "IV",
    title: "Contract review — three vendors",
    desc: "We read them so you don't have to. Red flags surfaced in minutes.",
    tag: "AI review",
  },
  {
    num: "V",
    title: "Hotel block calculator",
    desc: "Exactly how many rooms to block without over-committing.",
    tag: "Included",
  },
  {
    num: "VI",
    title: "Eight weeks async AI support",
    desc: "Questions answered, contracts reviewed, numbers recalculated.",
    tag: "Ongoing",
  },
];

export default function ConciergeOffer() {
  return (
    <section id="concierge" className="py-32 bg-vow-bg relative overflow-hidden">
      {/* Ambient warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_85%_10%,rgba(201,169,110,0.07),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-vow-gold" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold font-sans">
              The concierge service
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2
              className="font-display font-light text-vow-dark leading-[0.95]"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
            >
              Done-for-you setup.
              <br />
              <em className="italic text-vow-secondary/70">Starting this week.</em>
            </h2>
            <div className="text-left md:text-right flex-shrink-0">
              <div className="flex items-baseline md:justify-end gap-2">
                <span
                  className="font-display font-light text-vow-dark leading-none"
                  style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
                >
                  $799
                </span>
              </div>
              <div className="text-vow-gold text-[10.5px] mt-2 tracking-[0.25em] uppercase font-sans">
                Founding rate · {spotsRemaining} spot{spotsRemaining === "1" ? "" : "s"} remaining
              </div>
              <div className="text-vow-stone text-[11px] mt-1 font-sans">
                Lifetime software pricing included
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu — what's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[9.5px] tracking-[0.4em] uppercase text-vow-stone font-sans">
              Everything included
            </span>
            <span className="flex-1 h-px bg-vow-dark/[0.08]" />
            <span className="text-vow-gold text-[10px]">◆</span>
          </div>

          <div>
            {deliverables.map((d, i) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[3.5rem_auto_1fr_auto] items-baseline gap-x-4 md:gap-x-6 py-6 md:py-7 border-b border-vow-dark/[0.07] hover:bg-vow-gold/[0.03] transition-colors duration-300 px-2 -mx-2"
              >
                <span className="font-display italic text-vow-gold/60 text-lg md:text-xl group-hover:text-vow-gold transition-colors duration-300">
                  {d.num}
                </span>
                <div className="md:contents">
                  <h3
                    className="font-display font-light text-vow-dark leading-tight"
                    style={{ fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="hidden md:block text-vow-secondary text-[13.5px] leading-relaxed font-sans self-center max-w-xs md:justify-self-end md:text-right">
                    {d.desc}
                  </p>
                  <p className="md:hidden text-vow-secondary text-[13px] leading-relaxed font-sans mt-1.5">
                    {d.desc}
                  </p>
                </div>
                <span className="text-[9px] tracking-[0.22em] uppercase text-vow-stone font-sans border border-vow-dark/10 px-2.5 py-1 group-hover:border-vow-gold/40 group-hover:text-vow-gold transition-all duration-300 whitespace-nowrap self-center">
                  {d.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price anchor bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-vow-dark p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_90%_50%,rgba(201,169,110,0.07),transparent)]" />

          <div className="relative">
            <p className="text-white/35 text-[10px] font-sans uppercase tracking-[0.3em] mb-3">
              Human coordinator
            </p>
            <p className="font-display text-3xl font-light text-white/25 line-through decoration-white/20 decoration-1">
              $2,000–$5,000
            </p>
            <p className="text-white/25 text-[13px] mt-1.5 font-sans">for partial planning</p>
          </div>

          <div className="hidden md:block relative w-px h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="relative">
            <p className="text-vow-gold/60 text-[10px] font-sans uppercase tracking-[0.3em] mb-3">
              Vow concierge
            </p>
            <p className="font-display text-5xl font-light text-vow-gold">$799</p>
            <p className="text-white/35 text-[13px] mt-1.5 font-sans">
              more structured · fully AI-powered
            </p>
          </div>

          <div className="relative md:ml-auto">
            <a
              href="https://calendly.com/vowplanning"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-9 py-5 bg-vow-gold text-vow-dark text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-vow-bg transition-colors duration-300 whitespace-nowrap font-sans"
            >
              Book your spot
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <p className="text-white/25 text-[10.5px] mt-3 font-sans text-center md:text-left">
              Free 30-min call · no commitment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
