"use client";

import { motion } from "framer-motion";

const budgetLines = [
  { label: "Catering", committed: 8200, projected: 8500, budget: 9000 },
  { label: "Florals", committed: 3400, projected: 4200, budget: 4000 },
  { label: "Photography", committed: 4500, projected: 4500, budget: 4500 },
  { label: "Venue", committed: 12000, projected: 12000, budget: 12000 },
  { label: "Music", committed: 0, projected: 2800, budget: 3000 },
];

export default function FounderStory() {
  return (
    <section className="pt-28 pb-36 bg-vow-card overflow-x-clip">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — story */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-vow-gold" />
              <span className="text-xs tracking-[0.35em] uppercase text-vow-gold font-sans">
                The founder
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-light text-vow-dark leading-tight mb-8">
              Built by someone
              <br />
              <em className="italic">5 months out.</em>
            </h2>

            <div className="space-y-5 text-vow-secondary leading-[1.85] text-[15px] font-sans">
              <p>
                The founder is using this exact system to plan her own wedding
                right now — tracking her budget across 14 vendors, forecasting
                RSVPs with probability modeling, and reviewing contracts in real
                time.
              </p>
              <p>
                Vow isn&apos;t theoretical. It&apos;s what she built because
                nothing else existed.
              </p>
            </div>

            <div className="mt-8 pl-5 border-l-2 border-vow-gold/40">
              <p className="font-display text-xl md:text-2xl italic text-vow-dark leading-snug">
                &ldquo;Your florist contract has an attrition clause buried in
                section 4. Ours found it in 30 seconds.&rdquo;
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-vow-dark/10">
              {[
                { val: "14", label: "vendors tracked" },
                { val: "97%", label: "RSVP forecast accuracy" },
                { val: "3", label: "contract flags found" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-display text-[2rem] font-light text-vow-dark">
                    {val}
                  </div>
                  <div className="text-xs text-vow-secondary mt-1 leading-tight font-sans">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — elegant light product card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-w-0"
          >
            {/* Offset shadow */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-vow-gold/[0.07] border border-vow-gold/15" />

            {/* Light card */}
            <div className="relative bg-white border border-vow-dark/[0.08] shadow-[0_16px_60px_rgba(37,30,22,0.08)]">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-vow-dark/[0.06]">
                <div>
                  <div className="text-[9.5px] tracking-[0.38em] uppercase text-vow-stone font-sans mb-1">
                    Vow · Budget model
                  </div>
                  <div className="font-display text-lg font-light text-vow-dark">
                    Wedding budget
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9.5px] tracking-[0.2em] uppercase text-vow-stone font-sans mb-1">Total</div>
                  <div className="font-display text-lg font-light text-vow-dark">
                    $32,000
                    <span className="text-sm text-vow-stone ml-1">/ $35,000</span>
                  </div>
                </div>
              </div>

              {/* Column labels */}
              <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_auto_auto_auto] gap-x-3 sm:gap-x-4 px-4 sm:px-6 py-3 border-b border-vow-dark/[0.05] bg-vow-bg/40">
                <span className="text-[9.5px] tracking-[0.1em] sm:tracking-[0.3em] uppercase text-vow-stone font-sans">Category</span>
                <span className="text-[9.5px] tracking-[0.1em] sm:tracking-[0.3em] uppercase text-vow-stone font-sans text-right w-20 hidden sm:block">Committed</span>
                <span className="text-[9.5px] tracking-[0.1em] sm:tracking-[0.3em] uppercase text-vow-stone font-sans text-right w-16 sm:w-20">Projected</span>
                <span className="text-[9.5px] tracking-[0.1em] sm:tracking-[0.3em] uppercase text-vow-stone font-sans text-right w-14 sm:w-16">Budget</span>
              </div>

              {/* Line items */}
              <div className="divide-y divide-vow-dark/[0.04]">
                {budgetLines.map((item, i) => {
                  const over = item.projected > item.budget;
                  const pct = Math.min((item.projected / item.budget) * 100, 100);
                  return (
                    <div key={item.label} className={`px-4 sm:px-6 py-3.5 ${over ? "bg-vow-terra/[0.03]" : ""}`}>
                      <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_auto_auto_auto] gap-x-3 sm:gap-x-4 items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] text-vow-dark/70 font-sans">{item.label}</span>
                          {over && (
                            <span className="text-[9px] tracking-[0.1em] uppercase text-vow-terra font-sans">
                              ⚠
                            </span>
                          )}
                        </div>
                        <span className="hidden sm:block text-[12px] text-vow-dark/40 font-sans text-right w-20 tabular-nums">
                          ${item.committed.toLocaleString()}
                        </span>
                        <span className={`text-[12px] font-sans text-right w-16 sm:w-20 tabular-nums ${over ? "text-vow-terra font-medium" : "text-vow-dark/60"}`}>
                          ${item.projected.toLocaleString()}
                        </span>
                        <span className="text-[12px] text-vow-dark/30 font-sans text-right w-14 sm:w-16 tabular-nums">
                          ${item.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-[2px] bg-vow-dark/[0.06] rounded-full overflow-hidden ml-0">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.4 + i * 0.14,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`h-full rounded-full ${over ? "bg-vow-terra/50" : "bg-vow-gold/55"}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer total */}
              <div className="flex items-center justify-between px-6 py-4 bg-vow-bg/50 border-t border-vow-dark/[0.06]">
                <span className="text-[10.5px] tracking-[0.25em] uppercase text-vow-stone font-sans">
                  Projected total
                </span>
                <span className="font-display text-base text-vow-dark">
                  $32,000{" "}
                  <span className="text-vow-stone text-sm">/ $35,000</span>
                </span>
              </div>
            </div>

            {/* Alert card — entrance then pulse */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -bottom-16 right-4 sm:-right-5"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 6px 20px rgba(0,0,0,0.08)",
                    "0 6px 24px rgba(192,113,78,0.20)",
                    "0 6px 20px rgba(0,0,0,0.08)",
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="bg-white border border-vow-dark/[0.08] px-4 py-3.5 max-w-[200px] border-l-2 border-l-vow-terra/60 shadow-lg"
              >
                <div className="flex gap-2.5 items-start">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                    className="text-vow-terra text-sm leading-none mt-0.5 flex-shrink-0"
                  >
                    ⚠
                  </motion.span>
                  <div>
                    <div className="text-[11.5px] font-medium text-vow-dark font-sans">Florals over budget</div>
                    <div className="text-[10.5px] text-vow-secondary mt-0.5 leading-snug font-sans">
                      $200 over. Adjust now?
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
