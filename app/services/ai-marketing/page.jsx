// app/services/ai-marketing/page.tsx

import { AIMarketingSection } from "./Marketing";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "AI Marketing Agent | Content, Ads & Social Media Automation | Arcenik Technologies",
  description:
    "AI-powered marketing automation for content generation, ad optimization, social media scheduling, and email marketing. 3x ROAS improvement, 50% time savings. Transform your marketing with AI.",
  keywords:
    "ai marketing, ai content generation, social media automation, ad optimization ai, email marketing automation, marketing ai agent, digital marketing ai, content ai, facebook ads ai, google ads ai, marketing automation india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "AI Marketing Agent | Arcenik Technologies",
    description:
      "AI-powered marketing that creates content, optimizes ads, and nurtures leads 24/7. 3x ROAS improvement, 50% time saved.",
    url: "https://arceniktechnologies.com/services/ai-marketing",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "AI Marketing Agent - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Agent | Arcenik Technologies",
    description:
      "Automate your marketing with AI. Content creation, ad optimization, social scheduling. 3x better results.",
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
    canonical: "https://arceniktechnologies.com/services/ai-marketing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/ai-marketing",
  name: "AI Marketing Agent",
  description:
    "AI-powered marketing automation including content generation, social media scheduling, ad campaign optimization, email marketing, and lead nurturing for businesses.",
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
    name: "AI Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Content Generation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Ad Campaign Optimization" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Email Marketing Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Lead Scoring & Nurturing" },
      },
    ],
  },
};

const AIMarketing = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIMarketingSection />
    </>
  );
};

export default AIMarketing;