"use client";

import { motion } from "framer-motion";

const contractSegments = [
  { text: "VENDOR SERVICES AGREEMENT", style: "text-vow-dark/30 text-[11px] tracking-widest uppercase font-sans mb-4 block" },
  { text: "This agreement is entered into between the undersigned parties for the provision of floral design and installation services on the event date specified herein.", plain: true },
  { text: "SECTION 4 · ATTRITION AND CANCELLATION", style: "text-vow-dark/30 text-[10px] tracking-widest uppercase font-sans mt-5 mb-2 block" },
  { text: "The Vendor reserves the right to cancel this Agreement with thirty (30) days written notice under conditions deemed beyond reasonable operational control. In the event of such cancellation, the Client may forfeit all deposit amounts paid to the date of cancellation notice.", highlight: "terra" },
  { text: "SECTION 7 · PAYMENT SCHEDULE", style: "text-vow-dark/30 text-[10px] tracking-widest uppercase font-sans mt-5 mb-2 block" },
  { text: "Client shall remit fifty percent (50%) of the total agreed service fee upon execution of this Agreement. The remaining balance shall be due no later than fourteen (14) days prior to the event date.", highlight: "gold" },
  { text: "SECTION 12 · LIMITATION OF LIABILITY", style: "text-vow-dark/30 text-[10px] tracking-widest uppercase font-sans mt-5 mb-2 block" },
  { text: "Vendor's maximum liability under this Agreement shall not exceed the total amount of service fees paid by Client. Vendor shall not be liable for indirect, consequential, or incidental damages of any kind.", highlight: "olive" },
];

const flags = [
  {
    sev: "HIGH",
    color: "text-vow-terra",
    dot: "bg-vow-terra",
    section: "§ 4.2",
    title: "Vendor cancellation clause",
    desc: "Vendor can exit with 30 days notice and keep your deposit. Negotiate a full refund trigger on vendor-initiated cancellation.",
    delay: 0.2,
  },
  {
    sev: "REVIEW",
    color: "text-vow-gold",
    dot: "bg-vow-gold",
    section: "§ 7.1",
    title: "50% due upon signing",
    desc: "Above the industry standard of 25–30%. Request a staged schedule: 25% signing, 25% 60 days prior, 50% at delivery.",
    delay: 0.38,
  },
  {
    sev: "NOTED",
    color: "text-vow-olive",
    dot: "bg-vow-olive",
    section: "§ 12",
    title: "Liability capped at fees paid",
    desc: "Standard limitation. Acceptable in most vendor contracts — no action required, but keep a copy of all payments made.",
    delay: 0.56,
  },
];

export default function ContractReview() {
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
            <span className="w-6 h-px bg-vow-terra" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-terra font-sans">
              Contract review
            </span>
          </div>
          <h2
            className="font-display font-light text-vow-dark leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
          >
            Red flags in 30 seconds.
            <br />
            <em className="italic text-vow-secondary">Not after you&apos;ve signed.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* Contract document */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-vow-card shadow-sm p-7 text-[13px] leading-[1.8] text-vow-dark/50 font-sans relative overflow-hidden"
          >
            {/* Paper texture suggestion */}
            <div className="absolute inset-0 bg-gradient-to-br from-vow-card/30 to-transparent pointer-events-none" />
            <div className="relative">
              {contractSegments.map((seg, i) => {
                if (seg.style) {
                  return <span key={i} className={seg.style}>{seg.text}</span>;
                }
                if (seg.highlight === "terra") {
                  return (
                    <p key={i} className="mb-3">
                      <span className="bg-vow-terra/[0.12] text-vow-dark/70 px-0.5 leading-[1.9]">
                        {seg.text}
                      </span>
                    </p>
                  );
                }
                if (seg.highlight === "gold") {
                  return (
                    <p key={i} className="mb-3">
                      <span className="bg-vow-gold/15 text-vow-dark/70 px-0.5 leading-[1.9]">
                        {seg.text}
                      </span>
                    </p>
                  );
                }
                if (seg.highlight === "olive") {
                  return (
                    <p key={i} className="mb-3">
                      <span className="bg-vow-olive/[0.12] text-vow-dark/70 px-0.5 leading-[1.9]">
                        {seg.text}
                      </span>
                    </p>
                  );
                }
                return <p key={i} className="mb-3 text-vow-dark/35">{seg.text}</p>;
              })}
            </div>
          </motion.div>

          {/* AI flags panel */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10.5px] tracking-[0.35em] uppercase text-vow-secondary/60 font-sans flex items-center gap-3 mb-1"
            >
              <span>Vow analysis</span>
              <span className="flex-1 h-px bg-vow-dark/10" />
              <span>{flags.length} items found</span>
            </motion.div>

            {flags.map((flag) => (
              <motion.div
                key={flag.section}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: flag.delay, ease: [0.16, 1, 0.3, 1] }}
                className="bg-vow-card border border-vow-dark/[0.07] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${flag.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium ${flag.color}`}>
                        {flag.sev}
                      </span>
                      <span className="text-vow-dark/25 text-[10.5px] font-sans">{flag.section}</span>
                    </div>
                    <h4 className="font-display text-lg font-medium text-vow-dark mb-2">
                      {flag.title}
                    </h4>
                    <p className="text-vow-secondary text-sm leading-relaxed">{flag.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-1 text-[11px] text-vow-secondary/50 font-sans flex items-center gap-2"
            >
              <span className="w-4 h-px bg-vow-dark/15" />
              Reviewed in 28 seconds · Florist agreement · 6 pages
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
