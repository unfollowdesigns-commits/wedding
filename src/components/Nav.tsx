"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [barVisible, setBarVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 80) setBarVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How it works", href: "#how-it-works" },
    { label: "For planners", href: "#for-planners" },
    { label: "Founding rate", href: "#concierge" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-vow-bg/[0.96] backdrop-blur-md border-b border-vow-dark/[0.06] shadow-[0_1px_0_rgba(28,28,30,0.04)]"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <AnimatePresence initial={false}>
        {barVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <a
              href="#concierge"
              className="block bg-vow-gold text-vow-dark text-center py-2.5 px-6 hover:bg-vow-dark hover:text-vow-gold transition-colors duration-300"
            >
              <span className="text-[10.5px] font-sans font-medium tracking-[0.25em] uppercase">
                5 founding spots available · $799 founding rate · Claim yours
                <span className="ml-2">→</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-light tracking-[0.3em] text-vow-dark hover:text-vow-gold transition-colors duration-300"
        >
          Vow
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] text-vow-secondary hover:text-vow-dark transition-colors duration-200 tracking-[0.08em] uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://calendly.com/vowplanning"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-2.5 text-[11px] font-medium bg-vow-dark text-vow-bg hover:bg-vow-gold hover:text-vow-dark transition-all duration-300 tracking-[0.15em] uppercase"
          >
            Book a free call
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center gap-[6px] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-px bg-vow-dark transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-full h-px bg-vow-dark transition-all duration-300 ${mobileOpen ? "opacity-0 -translate-x-2" : ""}`} />
          <span className={`block w-full h-px bg-vow-dark transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-vow-bg border-t border-vow-card"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-vow-secondary text-sm tracking-wide uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://calendly.com/vowplanning"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3.5 text-center bg-vow-dark text-vow-bg text-xs tracking-[0.15em] uppercase"
              >
                Book a free call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
