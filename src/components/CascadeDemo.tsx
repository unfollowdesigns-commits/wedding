"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function compute(g: number) {
  const tables = Math.ceil(g / 8);
  const catering = g * 85;
  const linens = tables * 22;
  const florals = tables * 145 + 2 * 280;
  const hotelBlock = Math.ceil(g * 0.35);
  const staffHours = 6 + Math.ceil(g / 25);
  const cakeTier = g < 75 ? "2-tier" : g <= 125 ? "3-tier" : "4-tier";
  const total = catering + linens + florals + staffHours * 35 + 8500;
  return { catering, tables, linens, florals, hotelBlock, staffHours, cakeTier, total };
}

type Values = ReturnType<typeof compute>;

const formatValue = (key: keyof Values, v: Values[keyof Values]) => {
  if (key === "cakeTier") return v as string;
  if (key === "tables" || key === "hotelBlock" || key === "staffHours") return `${v}`;
  return `$${(v as number).toLocaleString()}`;
};

const getUnit = (key: keyof Values) => {
  if (key === "tables") return "tables";
  if (key === "hotelBlock") return "rooms";
  if (key === "staffHours") return "hrs";
  return null;
};

const metricDefs: { key: keyof Values; label: string }[] = [
  { key: "catering", label: "Catering" },
  { key: "tables", label: "Tables" },
  { key: "linens", label: "Linens" },
  { key: "florals", label: "Florals" },
  { key: "hotelBlock", label: "Hotel block" },
  { key: "cakeTier", label: "Cake tier" },
  { key: "staffHours", label: "Staff hours" },
  { key: "total", label: "Projected total" },
];

function AnimatedValue({
  displayKey,
  value,
}: {
  displayKey: keyof Values;
  value: Values[keyof Values];
}) {
  const formatted = formatValue(displayKey, value);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={formatted}
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -14, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block tabular-nums"
      >
        {formatted}
      </motion.span>
    </AnimatePresence>
  );
}

// Each card watches its own value and flashes independently
function MetricCard({
  label,
  displayKey,
  value,
  isTotal,
}: {
  label: string;
  displayKey: keyof Values;
  value: Values[keyof Values];
  isTotal: boolean;
}) {
  const unit = getUnit(displayKey);
  const [flashing, setFlashing] = useState(false);
  const prevRef = useRef(value);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (JSON.stringify(value) !== JSON.stringify(prevRef.current)) {
      prevRef.current = value;
      setFlashing(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setFlashing(false), 650);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={[
        "relative p-5 md:p-6 border transition-colors duration-300 overflow-hidden",
        isTotal ? "col-span-2 md:col-span-4" : "",
        flashing
          ? isTotal
            ? "border-vow-gold/60 bg-vow-gold/[0.1]"
            : "border-vow-gold/45 bg-vow-gold/[0.07]"
          : isTotal
          ? "border-vow-gold/[0.18] bg-vow-gold/[0.04]"
          : "border-white/[0.07] bg-white/[0.035]",
      ].join(" ")}
    >
      <p className="text-white/[0.28] text-[10.5px] font-sans tracking-[0.22em] uppercase mb-2.5">
        {label}
      </p>
      <div
        className={`font-display font-light leading-none flex items-baseline gap-1.5 ${
          isTotal ? "text-vow-gold" : "text-white"
        }`}
        style={{
          fontSize: isTotal
            ? "clamp(2rem, 3.5vw, 2.75rem)"
            : "clamp(1.6rem, 2.8vw, 2.1rem)",
        }}
      >
        <AnimatedValue displayKey={displayKey} value={value} />
        {unit && <span className="text-white/25 text-sm font-sans">{unit}</span>}
      </div>
    </div>
  );
}

// Stagger between each card update — this creates the cascade wave
const CASCADE_STEP_MS = 55;

export default function CascadeDemo() {
  const [guests, setGuests] = useState(80);
  // Each metric's display value is updated independently on a stagger
  const [displayValues, setDisplayValues] = useState<Values>(compute(80));
  const cascadeTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleChange = useCallback((next: number) => {
    setGuests(next);
    const next$ = compute(next);

    // Cancel any in-progress cascade from a previous drag position
    cascadeTimers.current.forEach(clearTimeout);
    cascadeTimers.current = [];

    // Fire each metric update at a staggered delay — the cascade
    metricDefs.forEach((def, i) => {
      const t = setTimeout(() => {
        setDisplayValues((prev) => ({ ...prev, [def.key]: next$[def.key] }));
      }, i * CASCADE_STEP_MS);
      cascadeTimers.current.push(t);
    });
  }, []);

  useEffect(() => {
    return () => cascadeTimers.current.forEach(clearTimeout);
  }, []);

  const fill = ((guests - 50) / 150) * 100;

  return (
    <section className="py-28 bg-[#1C1408] relative overflow-hidden">
      {/* Background number */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-light text-white/[0.02] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(12rem, 28vw, 22rem)" }}
      >
        02
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,169,110,0.07),transparent)]" />

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
            <span className="w-6 h-px bg-vow-gold/60" />
            <span className="text-[10.5px] tracking-[0.42em] uppercase text-vow-gold/70 font-sans">
              The cascade effect
            </span>
            <span className="w-6 h-px bg-vow-gold/60" />
          </div>
          <h2
            className="font-display font-light text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Change one thing.
            <br />
            <em className="italic text-vow-gold">Watch everything update.</em>
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="bg-white/[0.035] border border-white/[0.08] p-8 md:p-10">
            <div className="flex items-start justify-between mb-2">
              <span className="text-[10.5px] tracking-[0.35em] uppercase text-white/35 font-sans">
                Guest count
              </span>
              <span className="text-[10.5px] tracking-[0.25em] uppercase text-vow-gold/50 font-sans">
                Drag to cascade
              </span>
            </div>

            {/* Guest number — no AnimatePresence, no flicker during drag */}
            <div className="flex items-baseline gap-2 mb-7">
              <span
                className="font-display font-light text-white leading-none tabular-nums"
                style={{ fontSize: "clamp(4rem, 8vw, 6.5rem)" }}
              >
                {guests}
              </span>
              <span className="text-white/25 text-lg font-sans mb-2">guests</span>
            </div>

            <input
              type="range"
              min={50}
              max={200}
              value={guests}
              onChange={(e) => handleChange(Number(e.target.value))}
              className="w-full"
              style={{ "--range-fill": `${fill}%` } as React.CSSProperties}
            />
            <div className="flex justify-between text-white/[0.18] text-[11px] mt-2.5 font-sans tracking-wide">
              <span>50 guests</span>
              <span>200 guests</span>
            </div>
          </div>
        </motion.div>

        {/* Metrics grid — entrance animation on the container, cards manage their own flash */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
        >
          {metricDefs.map(({ key, label }) => (
            <MetricCard
              key={key}
              label={label}
              displayKey={key}
              value={displayValues[key]}
              isTotal={key === "total"}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10 text-white/25 text-[13px] max-w-sm mx-auto leading-relaxed font-sans"
        >
          This is what Vow does that no spreadsheet, no app, and no other AI tool does.
        </motion.p>
      </div>
    </section>
  );
}
