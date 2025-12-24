import { GraphicDesignSection } from "./GraphicDesignSection";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Graphic Design Services | Logo, Social Media & Print Design | Arcenik",
  description:
    "Professional graphic design services in Vapi, Gujarat. Logo design, social media graphics, brochures, packaging, business cards, and complete brand identity design.",
  keywords:
    "graphic design vapi, logo design gujarat, social media design, brochure design, packaging design, business card design, flyer design, poster design, creative design agency",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Graphic Design Services | Arcenik Technologies",
    description:
      "Eye-catching designs that communicate your message. From logos to social media graphics to print materials - we design it all.",
    url: "https://arceniktechnologies.com/services/graphic-design",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Graphic Design Services - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services | Arcenik Technologies",
    description:
      "Creative designs that make your brand stand out. Professional graphic design for all your needs.",
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
    canonical: "https://arceniktechnologies.com/services/graphic-design",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/graphic-design",
  name: "Graphic Design Services",
  description:
    "Professional graphic design services including logo design, social media graphics, brochures, packaging, business cards, and complete brand identity.",
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
    name: "Graphic Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Logo Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Graphics" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Print Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Packaging Design" },
      },
    ],
  },
};

const GraphicDesign = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GraphicDesignSection />
    </>
  );
};

export default GraphicDesign;
