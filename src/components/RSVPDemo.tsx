"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function compute(invited: number, destination: boolean) {
  const base = destination ? 0.63 : 0.78;
  const spread = destination ? 0.11 : 0.08;
  const min = Math.round(invited * Math.max(0, base - spread));
  const expected = Math.round(invited * base);
  const max = Math.round(Math.min(invited, invited * (base + spread)));
  const hotelBlock = Math.ceil(expected * 0.38);
  const pctMin = Math.round((base - spread) * 100);
  const pctMax = Math.round(Math.min(1, base + spread) * 100);
  return { min, expected, max, hotelBlock, pctMin, pctMax };
}

function Ticker({ value }: { value: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="inline-block tabular-nums"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export default function RSVPDemo() {
  const [invited, setInvited] = useState(120);
  const [destination, setDestination] = useState(false);
  const result = compute(invited, destination);
  const fill = ((invited - 50) / 250) * 100;

  const bandLeft = (result.min / invited) * 100;
  const bandWidth = ((result.max - result.min) / invited) * 100;
  const markerPos = (result.expected / invited) * 100;

  const handleInvited = useCallback((v: number) => setInvited(v), []);

  return (
    <section className="py-28 bg-[#1C1408] relative overflow-hidden">
      {/* Large background number */}
      <div
        className="absolute right-0 bottom-0 font-display font-light text-white/[0.025] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 28vw, 22rem)" }}
      >
        03
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(192,113,78,0.07),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-6 h-px bg-vow-terra/60" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-terra/70 font-sans">
              RSVP probability model
            </span>
            <span className="w-6 h-px bg-vow-terra/60" />
          </div>
          <h2
            className="font-display font-light text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Not a headcount.
            <br />
            <em className="italic text-vow-terra">A statistical model.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          {/* Controls */}
          <div className="bg-white/[0.035] border border-white/[0.07] p-8 md:p-10 mb-3">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Invited count */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10.5px] tracking-[0.35em] uppercase text-white/35 font-sans">
                    Guests invited
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-5">
                  <span
                    className="font-display font-light text-white leading-none tabular-nums"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
                  >
                    <Ticker value={invited} />
                  </span>
                  <span className="text-white/25 text-base font-sans">invited</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={300}
                  value={invited}
                  onChange={(e) => handleInvited(Number(e.target.value))}
                  className="w-full"
                  style={{ "--range-fill": `${fill}%` } as React.CSSProperties}
                />
                <div className="flex justify-between text-white/[0.18] text-[11px] mt-2 font-sans">
                  <span>50</span><span>300</span>
                </div>
              </div>

              {/* Destination toggle */}
              <div className="flex flex-col justify-center">
                <span className="text-[10.5px] tracking-[0.35em] uppercase text-white/35 font-sans mb-5">
                  Wedding type
                </span>
                <div className="space-y-3">
                  {[
                    { label: "Local / domestic", desc: "~78% expected attendance", val: false },
                    { label: "Destination", desc: "~63% expected attendance", val: true },
                  ].map(({ label, desc, val }) => (
                    <button
                      key={label}
                      onClick={() => setDestination(val)}
                      className={`w-full text-left px-5 py-4 border transition-all duration-200 ${
                        destination === val
                          ? "border-vow-terra/50 bg-vow-terra/10"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <div className={`text-sm font-sans mb-0.5 ${destination === val ? "text-vow-terra" : "text-white/55"}`}>
                        {label}
                      </div>
                      <div className="text-[11px] text-white/25 font-sans">{desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Probability band visualization */}
            <div className="pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10.5px] tracking-[0.35em] uppercase text-white/30 font-sans">
                  Expected attendance range
                </span>
                <span className={`text-[10.5px] tracking-[0.2em] uppercase font-sans ${destination ? "text-vow-gold/60" : "text-vow-olive/70"}`}>
                  {destination ? "Moderate" : "High"} confidence
                </span>
              </div>

              {/* The band */}
              <div className="relative h-3 bg-white/[0.06] rounded-full overflow-hidden mb-3">
                <motion.div
                  animate={{ left: `${bandLeft}%`, width: `${bandWidth}%` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 bottom-0 bg-gradient-to-r from-vow-terra/60 to-vow-gold/60 rounded-full"
                />
                {/* Expected marker */}
                <motion.div
                  animate={{ left: `calc(${markerPos}% - 6px)` }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"
                />
              </div>

              {/* Range labels */}
              <div className="flex justify-between text-[11px] font-sans text-white/35 mb-1">
                <span>0</span>
                <span>{invited} guests invited</span>
              </div>

              {/* Key numbers */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Minimum expected", value: result.min, unit: "guests", color: "text-vow-terra" },
                  { label: "Most likely", value: result.expected, unit: "guests", color: "text-white" },
                  { label: "Maximum expected", value: result.max, unit: "guests", color: "text-vow-gold" },
                ].map(({ label, value, unit, color }) => (
                  <div key={label} className="text-center">
                    <div className={`font-display text-3xl font-light leading-none mb-1 ${color}`}>
                      <Ticker value={value} />
                    </div>
                    <div className="text-white/25 text-[10.5px] font-sans">{unit}</div>
                    <div className="text-white/20 text-[10px] font-sans mt-1 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hotel block callout */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.025] border border-white/[0.06] p-5">
              <div className="text-[10.5px] tracking-[0.3em] uppercase text-white/25 font-sans mb-2">
                Recommended hotel block
              </div>
              <div className="font-display text-3xl font-light text-vow-gold">
                <Ticker value={result.hotelBlock} />
                <span className="text-white/30 text-lg font-sans ml-1.5">rooms</span>
              </div>
            </div>
            <div className="bg-white/[0.025] border border-white/[0.06] p-5">
              <div className="text-[10.5px] tracking-[0.3em] uppercase text-white/25 font-sans mb-2">
                Attendance rate
              </div>
              <div className="font-display text-3xl font-light text-vow-olive">
                {result.pctMin}–{result.pctMax}
                <span className="text-white/30 text-lg font-sans ml-1">%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
