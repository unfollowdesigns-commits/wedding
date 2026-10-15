import Link from "next/link";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "For planners", href: "#for-planners" },
      { label: "Founding rate", href: "#concierge" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a call", href: "https://calendly.com/vowplanning", external: true },
      { label: "hello@vowplanning.com", href: "mailto:hello@vowplanning.com" },
    ],
  },
  {
    heading: "Legal",
    links: [{ label: "Privacy", href: "/privacy", internal: true }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-vow-dark relative overflow-hidden">
      {/* Top hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-vow-gold/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        {/* Upper — statement + columns */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-24 mb-20">
          <div>
            <p
              className="font-display font-light text-vow-bg/85 leading-[1.15] tracking-[-0.01em] max-w-md"
              style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)" }}
            >
              Planned with <em className="italic text-vow-gold">intention</em>.
              <br />
              Powered by a system.
            </p>
            <a
              href="https://calendly.com/vowplanning"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 mt-9 text-[11px] font-sans font-medium tracking-[0.22em] uppercase text-vow-gold hover:text-vow-bg transition-colors duration-300"
            >
              <span className="w-9 h-px bg-vow-gold/50 group-hover:w-14 group-hover:bg-vow-bg/50 transition-all duration-300" />
              Book your discovery call
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-[9.5px] tracking-[0.38em] uppercase text-white/25 font-sans mb-5">
                  {col.heading}
                </div>
                <ul className="space-y-3.5">
                  {col.links.map((l) =>
                    "internal" in l && l.internal ? (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[13px] text-white/45 hover:text-vow-gold transition-colors duration-200 font-sans"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...("external" in l && l.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-[13px] text-white/45 hover:text-vow-gold transition-colors duration-200 font-sans"
                        >
                          {l.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative select-none pointer-events-none" aria-hidden="true">
          <div
            className="font-display font-light text-center leading-[0.78] tracking-[0.04em] bg-gradient-to-b from-white/[0.10] to-white/[0.015] bg-clip-text text-transparent -mb-3 md:-mb-5"
            style={{ fontSize: "clamp(7rem, 24vw, 21rem)" }}
          >
            Vow
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8 border-t border-white/[0.06]">
          <span className="text-white/20 text-[10.5px] font-sans tracking-[0.18em] uppercase">
            © 2026 Vow · AI wedding planning
          </span>
          <span className="text-white/20 text-[10.5px] font-sans tracking-[0.18em] uppercase">
            Self-serve software · mid-2026
          </span>
        </div>
      </div>
    </footer>
  );
}
