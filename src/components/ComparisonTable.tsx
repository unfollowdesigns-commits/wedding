"use client";

import { motion } from "framer-motion";

const rows = [
  {
    feature: "Budget cascade modeling",
    vow: { val: "✓", note: "Live, linked model" },
    knot: { val: "—", note: "Basic calculator only" },
    coordinator: { val: "partial", note: "Manual tracking" },
    diy: { val: "✗", note: "Spreadsheet" },
  },
  {
    feature: "RSVP probability forecast",
    vow: { val: "✓", note: "Statistical model" },
    knot: { val: "—", note: "Headcount only" },
    coordinator: { val: "✗", note: "Estimate only" },
    diy: { val: "✗", note: "Manual count" },
  },
  {
    feature: "AI contract review",
    vow: { val: "✓", note: "Red flags in seconds" },
    knot: { val: "—", note: "Not offered" },
    coordinator: { val: "partial", note: "Experience-dependent" },
    diy: { val: "✗", note: "You read it yourself" },
  },
  {
    feature: "Vendor tracking",
    vow: { val: "✓", note: "14+ vendors, all linked" },
    knot: { val: "listings", note: "Marketplace only" },
    coordinator: { val: "✓", note: "Their preferred vendors" },
    diy: { val: "partial", note: "Spreadsheet rows" },
  },
  {
    feature: "Async AI support",
    vow: { val: "✓", note: "8 weeks included" },
    knot: { val: "—", note: "Not offered" },
    coordinator: { val: "✗", note: "Hourly add-on" },
    diy: { val: "✗", note: "YouTube" },
  },
  {
    feature: "Price",
    vow: { val: "$799", note: "Founding rate" },
    knot: { val: "free*", note: "You are the product" },
    coordinator: { val: "$2–5k", note: "Partial planning" },
    diy: { val: "free", note: "Your time isn't" },
  },
];

const checkColor = (val: string) => {
  if (val === "✓") return "text-vow-olive font-medium";
  if (val === "✗") return "text-vow-terra/70";
  if (val === "—") return "text-vow-dark/25";
  return "text-vow-dark/50 text-sm";
};

export default function ComparisonTable() {
  return (
    <section className="py-28 bg-vow-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-vow-gold" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold font-sans">
              The honest comparison
            </span>
          </div>
          <h2
            className="font-display font-light text-vow-dark leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
          >
            What each option
            <br />
            <em className="italic text-vow-secondary/60">actually does.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left pb-5 pr-6 text-[10.5px] tracking-[0.3em] uppercase text-vow-dark/30 font-sans font-normal w-[28%]" />
                {/* Vow column header — highlighted */}
                <th className="pb-5 px-6 bg-vow-card border-x border-t border-vow-gold/20 text-center">
                  <div className="font-display text-xl font-light text-vow-dark">Vow</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-vow-gold font-sans mt-1">
                    AI concierge
                  </div>
                </th>
                {[
                  { name: "The Knot", sub: "free platform" },
                  { name: "Coordinator", sub: "human planner" },
                  { name: "DIY", sub: "spreadsheet" },
                ].map((col) => (
                  <th key={col.name} className="pb-5 px-4 text-center">
                    <div className="font-display text-lg font-light text-vow-dark/50">{col.name}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-vow-dark/25 font-sans mt-1">
                      {col.sub}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-vow-dark/[0.06]">
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <td className="py-5 pr-6 text-sm text-vow-dark font-sans">{row.feature}</td>

                  {/* Vow cell — highlighted */}
                  <td className="py-5 px-6 bg-vow-card border-x border-vow-gold/20 text-center">
                    <div className={`font-display text-xl ${checkColor(row.vow.val)}`}>
                      {row.vow.val}
                    </div>
                    <div className="text-[10.5px] text-vow-dark/40 font-sans mt-0.5">
                      {row.vow.note}
                    </div>
                  </td>

                  {[row.knot, row.coordinator, row.diy].map((cell, j) => (
                    <td key={j} className="py-5 px-4 text-center">
                      <div className={`font-display text-xl ${checkColor(cell.val)}`}>
                        {cell.val}
                      </div>
                      <div className="text-[10.5px] text-vow-dark/30 font-sans mt-0.5">
                        {cell.note}
                      </div>
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
            {/* Bottom border on Vow column */}
            <tfoot>
              <tr>
                <td />
                <td className="pt-0 bg-vow-card border-x border-b border-vow-gold/20 h-4" />
                <td /><td /><td />
              </tr>
            </tfoot>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-[11px] text-vow-dark/30 font-sans"
        >
          * The Knot earns revenue from vendor advertising. Your data funds their marketplace.
        </motion.p>
      </div>
    </section>
  );
}
