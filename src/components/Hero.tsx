"use client";

import { motion } from "framer-motion";

const budgetItems = [
  { label: "Venue deposit", amount: "$12,000", pct: 100, status: "ok" },
  { label: "Catering", amount: "$8,200", pct: 91, status: "ok" },
  { label: "Florals", amount: "$4,200", pct: 105, status: "over" },
  { label: "Photography", amount: "$4,500", pct: 100, status: "ok" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-vow-bg pt-24 lg:pt-28">
      {/* Ambient glow — top center warm tone */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_60%_20%,rgba(201,169,110,0.08),transparent)]" />
      {/* Bottom warmth */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-vow-card/40 to-transparent" />

      {/* Thin top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-vow-dark/[0.06]" />

      {/* Main grid */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 lg:gap-20 items-center">

            {/* Left — editorial headline */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.1 }}
                className="flex items-center gap-3 mb-10"
              >
                <span className="w-7 h-px bg-vow-gold" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-vow-gold font-sans">
                  AI Wedding Planning
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-light text-vow-dark leading-[0.90] tracking-[-0.022em]"
                style={{ fontSize: "clamp(4.2rem, 11.5vw, 10rem)" }}
              >
                Your
                <br />
                wedding
                <br />
                <em className="italic text-vow-gold">isn&apos;t</em> a
                <br />
                spreadsheet.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex items-start gap-5"
              >
                <div className="w-8 h-px bg-vow-dark/20 mt-4 flex-shrink-0" />
                <div>
                  <p
                    className="font-display italic font-light text-vow-dark/45 leading-snug mb-5"
                    style={{ fontSize: "clamp(1.25rem, 2.8vw, 2rem)" }}
                  >
                    It&apos;s a living system.
                  </p>
                  <p className="text-[15px] text-vow-secondary leading-[1.8] max-w-[320px]">
                    Every decision linked. Every vendor tracked. Every budget
                    change cascades automatically — so nothing falls through
                    the cracks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.72 }}
                className="mt-10 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="https://calendly.com/vowplanning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between gap-6 px-7 py-4 bg-vow-dark text-vow-bg text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-vow-gold hover:text-vow-dark transition-all duration-300 whitespace-nowrap"
                >
                  Get the founding rate — $799
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-between gap-5 px-7 py-4 border border-vow-dark/[0.12] text-vow-dark text-[11px] font-medium tracking-[0.18em] uppercase hover:border-vow-gold hover:text-vow-gold transition-all duration-300 whitespace-nowrap"
                >
                  See how it works
                  <span>↓</span>
                </a>
              </motion.div>
            </div>

            {/* Right — elegant light product card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Offset shadow card */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-vow-gold/[0.08] border border-vow-gold/15 rounded-none" />

                {/* Main product card */}
                <div className="relative bg-white border border-vow-dark/[0.08] shadow-[0_24px_80px_rgba(37,30,22,0.09)]">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-7 py-5 border-b border-vow-dark/[0.06]">
                    <div>
                      <div className="text-[9.5px] tracking-[0.38em] uppercase text-vow-stone font-sans mb-1">
                        Budget overview
                      </div>
                      <div className="font-display text-xl font-light text-vow-dark tracking-[-0.01em]">
                        June 14, 2026
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9.5px] tracking-[0.25em] uppercase text-vow-stone font-sans mb-1">
                        Projected
                      </div>
                      <div className="font-display text-xl font-light text-vow-dark">
                        $32,000
                        <span className="text-sm text-vow-stone ml-1.5">/ $35,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Line items */}
                  <div className="px-7 py-5 space-y-4">
                    {budgetItems.map((item, i) => (
                      <motion.div key={item.label}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[13px] text-vow-dark/65 font-sans">{item.label}</span>
                          <div className="flex items-center gap-2.5">
                            <span className="text-[13px] text-vow-dark/45 font-sans tabular-nums">
                              {item.amount}
                            </span>
                            {item.status === "over" && (
                              <span className="text-[9px] tracking-[0.12em] uppercase text-vow-terra bg-vow-terra/10 px-2 py-0.5 font-sans">
                                Over
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="h-[2.5px] bg-vow-dark/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(item.pct, 100)}%` }}
                            transition={{
                              duration: 1.3,
                              delay: 0.9 + i * 0.14,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`h-full rounded-full ${
                              item.status === "over" ? "bg-vow-terra/55" : "bg-vow-gold/65"
                            }`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Alert */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.7 }}
                    className="mx-7 mb-7 flex items-start gap-3 px-4 py-3.5 bg-vow-terra/[0.06] border-l-2 border-vow-terra/40"
                  >
                    <span className="text-vow-terra text-sm mt-0.5 flex-shrink-0">⚠</span>
                    <div>
                      <div className="text-[12.5px] font-medium text-vow-dark font-sans">
                        Florals over budget
                      </div>
                      <div className="text-[11.5px] text-vow-secondary font-sans mt-0.5 leading-snug">
                        Projected $200 over. Shift $200 from catering buffer to offset?
                      </div>
                    </div>
                  </motion.div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between px-7 py-4 bg-vow-bg/50 border-t border-vow-dark/[0.05]">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-vow-stone font-sans">
                      14 vendors tracked
                    </span>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-vow-gold font-sans">
                      All linked →
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical editorial tag */}
              <div className="mt-8 flex items-center gap-3 justify-end">
                <span className="text-[10px] tracking-[0.35em] uppercase text-vow-dark/20 font-sans">
                  Your real model. Built in 30 min.
                </span>
                <span className="w-10 h-px bg-vow-dark/[0.12]" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        className="relative max-w-7xl mx-auto px-6 w-full mt-14 pb-14"
      >
        <div className="pt-8 border-t border-vow-dark/[0.08] flex flex-wrap gap-x-14 gap-y-6">
          {[
            { val: "74%", label: "of couples go over budget" },
            { val: "5–8", label: "disconnected tools per couple" },
            { val: "0", label: "tools that model the cascade", accent: true },
          ].map(({ val, label, accent }) => (
            <div key={label} className="flex items-baseline gap-3">
              <div
                className={`font-display font-light leading-none ${
                  accent ? "text-vow-gold" : "text-vow-dark"
                }`}
                style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.5rem)" }}
              >
                {val}
              </div>
              <div className="text-[12px] text-vow-secondary max-w-[120px] leading-snug font-sans">
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
