"use client";

const items = [
  "Budget cascade",
  "RSVP forecasting",
  "Contract review",
  "Vendor tracking",
  "Hotel blocks",
  "Seating logic",
];

function Strip() {
  return (
    <div className="flex items-center flex-shrink-0">
      {items.map((item) => (
        <span key={item} className="flex items-center flex-shrink-0">
          <em
            className="font-display italic font-light text-vow-dark/70 whitespace-nowrap px-8 md:px-12"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
          >
            {item}
          </em>
          <span className="text-vow-gold text-xs">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative py-8 md:py-10 bg-vow-bg border-y border-vow-dark/[0.07] overflow-hidden select-none">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-vow-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-vow-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
