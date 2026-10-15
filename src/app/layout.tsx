import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://wedding-planning-iota.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Vow — AI Wedding Planning That Actually Works",
  description:
    "The AI planning system that models your entire wedding as one connected system — budget, RSVPs, vendors, and contracts — so nothing falls through the cracks.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Vow — AI Wedding Planning That Actually Works",
    description:
      "Change one thing. Watch everything update. The first wedding planning system that models your entire day as one connected model.",
    type: "website",
    url: BASE_URL,
    siteName: "Vow",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vow — AI Wedding Planning That Actually Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vow — AI Wedding Planning That Actually Works",
    description: "Change one thing. Watch everything update.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vow",
    url: BASE_URL,
    description:
      "AI-powered wedding planning system that models your entire wedding as one connected system — budget, RSVPs, vendors, and contracts.",
    foundingDate: "2026",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://calendly.com/vowplanning",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vow Concierge Wedding Planning",
    serviceType: "Wedding Planning",
    provider: {
      "@type": "Organization",
      name: "Vow",
      url: BASE_URL,
    },
    description:
      "Done-for-you AI wedding planning setup: 90-min kickoff, linked budget model, RSVP probability forecast, contract review for 3 vendors, hotel block calculator, and 8 weeks of async AI support.",
    offers: {
      "@type": "Offer",
      price: "799",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      description: "Founding rate — 5 spots available",
      url: BASE_URL + "/#concierge",
    },
    areaServed: "US",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Vow software I download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Vow is an AI-powered planning system. For concierge clients, we set everything up for you. Self-serve software is coming mid-2026.",
        },
      },
      {
        "@type": "Question",
        name: "Why pay for Vow when The Knot is free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Knot is a vendor marketplace. It doesn't model your budget, review your contracts, or forecast your RSVPs. It's free because you're the product.",
        },
      },
      {
        "@type": "Question",
        name: "When is Vow's self-serve software launching?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Target mid-2026. Founding concierge clients get first access and lifetime pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm not tech-savvy — can I still use Vow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The concierge service is fully done-for-you. You don't touch any software.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
