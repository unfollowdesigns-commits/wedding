"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nextSteps = [
  { num: "01", title: "Check your inbox", desc: "Confirmation arriving now. Check spam if you don't see it." },
  { num: "02", title: "Within 48 hours", desc: "Your Vow setup guide and what to prepare for your kickoff." },
  { num: "03", title: "Book your call", desc: "30 minutes to map your full planning system.", cta: true },
];

const previewBars = [
  { label: "Venue", pct: 100, over: false },
  { label: "Catering", pct: 88, over: false },
  { label: "Florals", pct: 108, over: true },
  { label: "Photography", pct: 100, over: false },
];

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Graceful — UI still transitions to success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-36 bg-vow-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(192,113,78,0.08),transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-vow-terra/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Confirmation */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-8 h-px bg-vow-olive/50" />
                <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-olive/70 font-sans">
                  You&apos;re in
                </span>
                <span className="w-8 h-px bg-vow-olive/50" />
              </div>

              <h2
                className="font-display font-light text-white leading-[0.95] mb-4"
                style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
              >
                <em className="italic text-vow-gold">You&apos;re on the list.</em>
              </h2>
              <p className="text-white/35 text-base font-sans max-w-xs mx-auto mb-14 leading-relaxed">
                We&apos;ll be in touch within 48 hours.
              </p>

              {/* Next steps */}
              <div className="grid md:grid-cols-3 gap-3 mb-12 text-left">
                {nextSteps.map(({ num, title, desc, cta }) => (
                  <div key={num} className="bg-white/[0.04] border border-white/[0.07] p-6">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-vow-gold/50 font-sans mb-3">
                      {num}
                    </div>
                    <h4 className="font-display text-lg text-white mb-2">{title}</h4>
                    <p className="text-white/35 text-sm leading-relaxed mb-0">{desc}</p>
                    {cta && (
                      <a
                        href="https://calendly.com/vowplanning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-vow-gold text-[11px] tracking-[0.2em] uppercase hover:text-white transition-colors duration-200 font-sans"
                      >
                        Book now →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mini dashboard preview */}
              <div className="max-w-xs mx-auto bg-white/[0.03] border border-white/[0.06] p-5">
                <div className="text-white/20 text-[10px] font-mono mb-4 text-left">
                  vow — your system preview
                </div>
                <div className="space-y-3">
                  {previewBars.map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between text-[11px] font-sans mb-1.5">
                        <span className="text-white/40">{b.label}</span>
                        <span className={b.over ? "text-vow-terra" : "text-white/30"}>
                          {b.over ? "over budget" : "on track"}
                        </span>
                      </div>
                      <div className="h-[2px] bg-white/[0.07] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(b.pct, 100)}%` }}
                          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                          className={`h-full rounded-full ${b.over ? "bg-vow-terra/60" : "bg-vow-gold/50"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.06] text-[11px] text-white/20 font-sans text-left">
                  Your real model is being prepared.
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <span className="w-8 h-px bg-vow-gold/50" />
                <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold/60 font-sans">
                  Limited spots
                </span>
                <span className="w-8 h-px bg-vow-gold/50" />
              </div>

              <h2
                className="font-display font-light text-white leading-[0.95] mb-6"
                style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
              >
                5 founding spots.
                <br />
                <em className="italic text-vow-gold">Real weddings.</em>
                <br />
                Starting now.
              </h2>

              <p className="text-white/30 text-base mb-14 font-sans max-w-xs mx-auto leading-relaxed">
                30 minutes. No commitment. We&apos;ll map out your planning system together.
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://calendly.com/vowplanning"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 px-12 py-5 bg-vow-gold text-vow-dark text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 mb-16"
              >
                Book your free discovery call
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </motion.a>

              <div className="flex items-center gap-5 mb-10">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-white/[0.18] text-[11px] font-sans tracking-[0.2em] uppercase">
                  or stay in the loop
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                  className="flex-1 px-5 py-4 bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/20 text-[13px] font-sans focus:outline-none focus:border-vow-gold/35 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-4 bg-vow-gold/[0.12] border border-l-0 border-vow-gold/25 text-vow-gold text-[11px] font-sans tracking-[0.15em] uppercase hover:bg-vow-gold hover:text-vow-dark transition-all duration-300 whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? "..." : "Get early access"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
