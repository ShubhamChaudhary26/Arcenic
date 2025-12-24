// app/services/ai-calling-agent/page.tsx

import { AICallingAgentSection } from "./Ai-Agents";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "AI Calling Agent | Automated Voice Calls 24/7 | Arcenik Technologies",
  description:
    "Deploy AI voice agents that make and receive calls 24/7. Automate outbound sales, inbound support, appointment booking, and payment reminders. Human-like conversations, 80% cost reduction.",
  keywords:
    "ai calling agent, voice ai, automated calls, ai voice bot, outbound calling automation, inbound call handling, appointment booking ai, payment reminder calls, conversational ai, voice automation india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "AI Calling Agent | Arcenik Technologies",
    description:
      "AI voice agents that handle thousands of calls simultaneously with human-like conversations. 24/7 availability, 80% cost savings.",
    url: "https://arceniktechnologies.com/services/ai-calling-agent",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "AI Calling Agent - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent | Arcenik Technologies",
    description:
      "Automate your calls with AI. Human-like voice, 24/7 availability, 80% cost reduction.",
    images: ["/logo1.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://arceniktechnologies.com/services/ai-calling-agent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/ai-calling-agent",
  name: "AI Calling Agent",
  description:
    "AI-powered voice agents for automated inbound and outbound calling. Handle sales calls, customer support, appointment booking, and payment reminders 24/7 with human-like conversations.",
  provider: {
    "@type": "LocalBusiness",
    name: "Arcenik Technologies",
    url: "https://arceniktechnologies.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vapi",
      addressRegion: "Gujarat",
      postalCode: "396191",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Vapi" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Calling Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Outbound AI Calling" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Inbound Call Handling" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Appointment Booking AI" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Payment Reminder Calls" },
      },
    ],
  },
};

const AICallingAgent = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AICallingAgentSection />
    </>
  );
};

export default AICallingAgent;