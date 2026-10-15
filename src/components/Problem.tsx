"use client";

import { motion } from "framer-motion";

const tools = [
  { icon: "⊞", label: "Budget spreadsheet" },
  { icon: "≡", label: "Guest list doc" },
  { icon: "✉", label: "Vendor email threads" },
  { icon: "✓", label: "RSVP tracker" },
  { icon: "⊕", label: "Pinterest board" },
  { icon: "◉", label: "Notes app" },
  { icon: "◻", label: "Paper contracts" },
  { icon: "◈", label: "Group chats" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Problem() {
  return (
    <section id="how-it-works" className="py-28 bg-vow-dark relative overflow-hidden">
      {/* Large background section number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-light text-white/[0.025] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 28vw, 22rem)" }}
      >
        01
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-vow-gold/60" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold/70 font-sans">
              The problem
            </span>
          </div>
          <h2
            className="font-display font-light text-vow-bg leading-[0.96] tracking-[-0.01em]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
          >
            You&apos;re managing 8 tools
            <br />
            <em className="italic text-white/35">that don&apos;t talk</em>
            <br />
            to each other.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-12"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.label}
              variants={itemVariants}
              className="group relative p-5 bg-white/[0.035] border border-white/[0.07] hover:border-red-400/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              {/* Pulsing "disconnected" dot */}
              <span className="absolute top-3 right-3 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400/35" />
              </span>

              <span className="text-white/20 text-base mb-3 block font-mono group-hover:text-white/35 transition-colors duration-200">
                {tool.icon}
              </span>
              <span className="text-[12.5px] text-white/40 group-hover:text-white/60 transition-colors duration-200 font-sans leading-snug">
                {tool.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-start gap-5 pt-5 border-t border-white/[0.05]"
        >
          <div className="w-8 h-px bg-vow-gold/40 mt-4 flex-shrink-0" />
          <p
            className="font-display italic text-white/40"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
          >
            Change your guest count in one.
            <br />
            Watch nothing update in the others.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
