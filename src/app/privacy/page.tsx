import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vow",
  description: "How Vow collects and uses your personal information.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24">
        {/* Logo */}
        <div className="mb-14">
          <Link
            href="/"
            className="font-display text-2xl font-light tracking-[0.3em] text-[#251E16] hover:text-[#C9A96E] transition-colors duration-200"
          >
            Vow
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-px bg-[#C9A96E]" />
          <span className="text-[10.5px] tracking-[0.42em] uppercase text-[#C9A96E] font-sans">
            Legal
          </span>
        </div>

        <h1
          className="font-display font-light text-[#251E16] leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-[#B5A898] text-sm font-sans mb-14">Last updated: June 2026</p>

        <div className="space-y-10 text-[#7A6E62] leading-[1.85] font-sans text-[15px]">
          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              What we collect
            </h2>
            <p>
              When you join our waitlist, we collect your email address. When you book a discovery call through Calendly, Calendly collects your name, email, and any information you share in booking notes — under their own privacy policy.
            </p>
            <p className="mt-4">
              We do not collect payment information, browsing data, or any information beyond what you explicitly provide.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              How we use it
            </h2>
            <p>
              Your email is used only to send you:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "A confirmation that your spot is reserved",
                "Your onboarding guide when it's ready",
                "Updates about Vow's launch and availability",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C9A96E] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We will never sell, share, or rent your email address to any third party. We will never use it to send advertising unrelated to Vow.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Email service
            </h2>
            <p>
              We send emails via Resend, a transactional email service. Your email address is shared with Resend only for the purpose of delivering messages from Vow. Resend is SOC 2 compliant and does not use your data for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Data retention
            </h2>
            <p>
              We retain your email address until you ask us to remove it, or until Vow ceases operations. We do not store emails longer than necessary.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Your rights
            </h2>
            <p>
              You can unsubscribe from any email at any time using the unsubscribe link in the footer of any message we send. To request deletion of your data, email us at{" "}
              <a href="mailto:hello@vowplanning.com" className="text-[#C9A96E] underline underline-offset-2 hover:text-[#251E16] transition-colors">
                hello@vowplanning.com
              </a>{" "}
              and we will remove your information within 7 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-[#251E16] mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Questions
            </h2>
            <p>
              If you have any questions about this policy, reach us at{" "}
              <a href="mailto:hello@vowplanning.com" className="text-[#C9A96E] underline underline-offset-2 hover:text-[#251E16] transition-colors">
                hello@vowplanning.com
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#251E16]/10">
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase text-[#B5A898] font-sans hover:text-[#251E16] transition-colors duration-200"
          >
            ← Back to Vow
          </Link>
        </div>
      </div>
    </main>
  );
}
