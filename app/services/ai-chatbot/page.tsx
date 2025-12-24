// app/services/ai-chatbot/page.tsx

import { AIChatbotSection } from "./Ai-Chatbot";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "AI Chatbot | WhatsApp Bot & Website Chatbot | Arcenik Technologies",
  description:
    "Deploy intelligent AI chatbots on your website, WhatsApp, Instagram & Facebook. GPT-4 powered, 24/7 customer support, lead capture, and seamless CRM integration. 70% queries auto-resolved.",
  keywords:
    "ai chatbot, whatsapp bot, website chatbot, gpt chatbot, customer support bot, lead generation chatbot, facebook messenger bot, instagram dm bot, conversational ai, chatbot development india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "AI Chatbot | Arcenik Technologies",
    description:
      "GPT-4 powered chatbots for website, WhatsApp & social media. 24/7 customer support, instant responses, 70% queries auto-resolved.",
    url: "https://arceniktechnologies.com/services/ai-chatbot",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "AI Chatbot - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot | Arcenik Technologies",
    description:
      "Deploy AI chatbots on website & WhatsApp. Instant responses, 24/7 support, GPT-4 powered.",
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
    canonical: "https://arceniktechnologies.com/services/ai-chatbot",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/ai-chatbot",
  name: "AI Automation Chatbot",
  description:
    "AI-powered chatbots for websites, WhatsApp, and social media platforms. GPT-4 powered conversations, custom knowledge training, and seamless CRM integration for 24/7 customer engagement.",
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
    name: "AI Chatbot Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website Chatbot" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "WhatsApp Bot" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Chatbot" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Lead Generation Bot" },
      },
    ],
  },
};

const AIChatbot = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIChatbotSection />
    </>
  );
};

export default AIChatbot;