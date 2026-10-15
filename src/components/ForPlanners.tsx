"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Sarah & James",
    date: "Jun 14, 2026",
    budget: { used: 24400, total: 26000, pct: 94 },
    rsvp: "127 / 150",
    status: "healthy",
    next: "Final venue walkthrough — Jun 1",
  },
  {
    name: "Maya & Carlos",
    date: "Sep 7, 2026",
    budget: { used: 19200, total: 18500, pct: 104 },
    rsvp: "89 / 120",
    status: "over",
    next: "Florist contract — flag needs review",
  },
  {
    name: "Emma & Luca",
    date: "Oct 22, 2026",
    budget: { used: 0, total: 22000, pct: 0 },
    rsvp: "—",
    status: "new",
    next: "90-min kickoff call pending",
  },
];

const features = [
  { title: "Multi-wedding dashboard", desc: "Every active client at a glance — budget health, RSVPs, upcoming actions." },
  { title: "Client-facing PDF reports", desc: "Generate a polished summary your couple can review any time." },
  { title: "Contract tracking", desc: "AI-reviewed contracts across all vendors, all clients, one view." },
  { title: "RSVP & logistics", desc: "Probability forecasts, hotel blocks, transportation — automatically." },
];

export default function ForPlanners() {
  return (
    <section id="for-planners" className="py-28 bg-vow-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-vow-gold" />
              <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold font-sans">
                For planners
              </span>
            </div>
            <h2
              className="font-display font-light text-vow-dark leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
            >
              Manage every client wedding
              <br />
              <em className="italic">from one AI system.</em>
            </h2>
            <p className="text-vow-secondary leading-[1.85] mb-10 max-w-sm font-sans text-[15px]">
              One planner manages 15–30 weddings per year. Vow becomes your AI
              backend across all of them — less tracking, more client time.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-vow-gold mt-[7px] flex-shrink-0" />
                  <div>
                    <span className="font-display text-base font-medium text-vow-dark">{f.title}</span>
                    <span className="text-vow-secondary text-sm leading-relaxed font-sans"> — {f.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing card */}
            <div className="inline-flex items-stretch gap-6 p-6 bg-vow-card mb-8 border border-vow-dark/[0.06]">
              <div>
                <div className="font-display text-4xl font-light text-vow-dark">
                  $149<span className="text-xl text-vow-secondary">/mo</span>
                </div>
                <div className="text-[11px] text-vow-gold tracking-wide mt-1.5 font-sans">
                  Currently in private beta
                </div>
              </div>
              <div className="w-px bg-vow-dark/10 self-stretch" />
              <div className="flex flex-col justify-center">
                <div className="text-sm font-medium text-vow-dark">$399/year</div>
                <div className="text-xs text-vow-secondary mt-0.5 font-sans">Save 2 months</div>
              </div>
            </div>

            <div>
              <a
                href="https://calendly.com/vowplanning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-vow-dark text-vow-dark text-[11px] font-medium tracking-[0.18em] uppercase hover:bg-vow-dark hover:text-vow-bg transition-all duration-300 font-sans"
              >
                Apply for planner beta →
              </a>
            </div>
          </motion.div>

          {/* Right — light professional dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="self-center"
          >
            <div className="relative">
              {/* Offset shadow */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-vow-gold/[0.07] border border-vow-gold/15" />

              {/* Dashboard card */}
              <div className="relative bg-white border border-vow-dark/[0.08] shadow-[0_16px_60px_rgba(37,30,22,0.08)]">

                {/* Dashboard header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-vow-dark/[0.06]">
                  <div>
                    <div className="text-[9.5px] tracking-[0.38em] uppercase text-vow-stone font-sans mb-1">
                      Vow · Planner dashboard
                    </div>
                    <div className="font-display text-lg font-light text-vow-dark">
                      Active weddings
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9.5px] tracking-[0.2em] uppercase text-vow-stone font-sans mb-1">
                      This season
                    </div>
                    <div className="font-display text-lg font-light text-vow-dark">
                      3 active
                    </div>
                  </div>
                </div>

                {/* Column labels */}
                <div className="grid grid-cols-[1fr_auto_auto] px-6 py-2.5 border-b border-vow-dark/[0.04] bg-vow-bg/40">
                  <span className="text-[9.5px] tracking-[0.3em] uppercase text-vow-stone font-sans">Client</span>
                  <span className="text-[9.5px] tracking-[0.3em] uppercase text-vow-stone font-sans text-right w-24 mr-3">Budget</span>
                  <span className="text-[9.5px] tracking-[0.3em] uppercase text-vow-stone font-sans text-right w-16">Status</span>
                </div>

                {/* Client rows */}
                <div className="divide-y divide-vow-dark/[0.04]">
                  {clients.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                      className="px-6 py-4"
                    >
                      <div className="grid grid-cols-[1fr_auto_auto] items-start gap-x-3 mb-2.5">
                        <div>
                          <div className="text-[13.5px] font-sans font-medium text-vow-dark/85">{c.name}</div>
                          <div className="text-[11px] text-vow-stone font-sans mt-0.5">
                            {c.date} · RSVPs {c.rsvp}
                          </div>
                        </div>
                        <div className="text-right w-24 mr-3">
                          <div className="text-[11.5px] text-vow-dark/50 font-sans tabular-nums">
                            ${c.budget.used.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-vow-stone font-sans">
                            / ${c.budget.total.toLocaleString()}
                          </div>
                        </div>
                        <div className="w-16 text-right">
                          <span className={`inline-block text-[9.5px] font-sans tracking-[0.12em] uppercase px-2 py-1 ${
                            c.status === "healthy" ? "bg-vow-olive/[0.12] text-vow-olive" :
                            c.status === "over" ? "bg-vow-terra/[0.12] text-vow-terra" :
                            "bg-vow-dark/[0.06] text-vow-stone"
                          }`}>
                            {c.status === "healthy" ? "On track" : c.status === "over" ? "Review" : "New"}
                          </span>
                        </div>
                      </div>

                      {/* Budget bar */}
                      <div className="h-[2px] bg-vow-dark/[0.06] rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(c.budget.pct, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.6 + i * 0.12 }}
                          className={`h-full rounded-full ${
                            c.status === "over" ? "bg-vow-terra/55" :
                            c.status === "new" ? "bg-vow-dark/10" :
                            "bg-vow-gold/60"
                          }`}
                        />
                      </div>

                      <div className="text-[10.5px] text-vow-stone font-sans">
                        → {c.next}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4 bg-vow-bg/50 border-t border-vow-dark/[0.05]">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-vow-stone font-sans">
                    3 active · 1 needs attention
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-vow-gold font-sans">
                    View all →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
