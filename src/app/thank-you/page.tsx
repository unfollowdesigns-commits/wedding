import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call Booked — Vow",
  description: "Your discovery call is confirmed. Here's what to bring and what to expect.",
};

const prepItems = [
  { num: "01", title: "Your wedding date", desc: "Even if it's tentative. Venue confirmed or shortlisted is a bonus." },
  { num: "02", title: "A rough budget range", desc: "Total you're working with — doesn't need to be exact. Even a range helps." },
  { num: "03", title: "Vendor contacts so far", desc: "Anyone you've signed with, or are in conversation with. Emails or names are fine." },
];

const callFlow = [
  { time: "0–20 min", label: "Your wedding overview", desc: "We learn your timeline, priorities, and where you feel most uncertain." },
  { time: "20–60 min", label: "Building your system live", desc: "We build your linked budget model and RSVP forecast during the call — not after." },
  { time: "60–90 min", label: "Questions and next steps", desc: "Contract uploads, hotel block calculator, and what the next 8 weeks look like." },
];

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-6">
        <Link
          href="/"
          className="font-display text-2xl font-light tracking-[0.3em] text-[#251E16] hover:text-[#C9A96E] transition-colors duration-200"
        >
          Vow
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#C9A96E]" />
          <span className="text-[10.5px] tracking-[0.42em] uppercase text-[#C9A96E] font-sans">
            Booking confirmed
          </span>
        </div>

        <h1
          className="font-display font-light text-[#251E16] leading-[0.93] mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Your call
          <br />
          <em style={{ fontStyle: "italic", color: "#C9A96E" }}>is booked.</em>
        </h1>

        <p className="text-[#7A6E62] text-lg leading-relaxed max-w-lg mb-16" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          You&apos;ll receive a calendar invite with the Zoom link shortly. In the meantime, here&apos;s what to bring and what to expect.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Prepare */}
          <div>
            <h2 className="font-display text-2xl font-light text-[#251E16] mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              What to bring
            </h2>
            <div className="space-y-7">
              {prepItems.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <div className="font-display text-sm text-[#C9A96E]/60 mt-0.5 flex-shrink-0 w-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    {num}
                  </div>
                  <div>
                    <div className="font-display text-lg font-medium text-[#251E16] mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                      {title}
                    </div>
                    <p className="text-[#7A6E62] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call flow */}
          <div>
            <h2 className="font-display text-2xl font-light text-[#251E16] mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              The 90 minutes
            </h2>
            <div className="space-y-6">
              {callFlow.map(({ time, label, desc }) => (
                <div key={time} className="pl-5 border-l border-[#C9A96E]/30">
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-[#B5A898] font-sans mb-1">
                    {time}
                  </div>
                  <div className="font-display text-lg font-medium text-[#251E16] mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    {label}
                  </div>
                  <p className="text-[#7A6E62] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 pt-10 border-t border-[#251E16]/10">
          <p className="text-[#7A6E62] text-sm font-sans leading-relaxed">
            Something came up or need to reschedule?{" "}
            <a
              href="mailto:hello@vowplanning.com"
              className="text-[#C9A96E] hover:text-[#251E16] transition-colors duration-200 underline underline-offset-2"
            >
              hello@vowplanning.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
