import { BrandingSEOSection } from "./BrandingSEOSection";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Branding & SEO Services | Brand Identity & Search Optimization | Arcenik",
  description:
    "Complete branding and SEO services in Vapi, Gujarat. Logo design, brand identity, SEO optimization, Google ranking, content marketing, and digital strategy.",
  keywords:
    "branding services vapi, seo services gujarat, logo design, brand identity, search engine optimization, google ranking, digital marketing, content strategy",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Branding & SEO Services | Arcenik Technologies",
    description:
      "Build a memorable brand and dominate search results. Complete branding and SEO services to grow your business online.",
    url: "https://arceniktechnologies.com/services/branding-seo",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Branding & SEO Services - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Branding & SEO Services | Arcenik Technologies",
    description:
      "Create a powerful brand identity and rank #1 on Google with our expert services.",
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
    canonical: "https://arceniktechnologies.com/services/branding-seo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/branding-seo",
  name: "Branding & SEO Services",
  description:
    "Complete branding and search engine optimization services including logo design, brand identity, SEO strategy, content marketing, and Google ranking.",
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
    name: "Branding & SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Identity Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Logo Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SEO Optimization" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Content Marketing" },
      },
    ],
  },
};

const BrandingSEO = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandingSEOSection />
    </>
  );
};

export default BrandingSEO;
