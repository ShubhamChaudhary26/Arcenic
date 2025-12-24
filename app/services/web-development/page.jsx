import { WebDevelopmentSection } from "./WebDevelopmentSection";
import "./web-development.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Web Development Services | Custom Websites & Web Apps | Arcenik Technologies",
  description:
    "Professional web development services in Vapi, Gujarat. We build fast, modern websites and web applications using React, Next.js, and cutting-edge technologies. Get a free consultation today.",
  keywords:
    "web development services vapi, website development gujarat, custom web applications, react development, next.js development, full stack development, responsive web design, web development company vapi",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Web Development Services | Arcenik Technologies",
    description:
      "Transform your business with custom web solutions. From responsive websites to complex web applications, we deliver results that matter.",
    url: "https://arceniktechnologies.com/services/web-development",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Web Development Services - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Arcenik Technologies",
    description:
      "Custom web development solutions using modern technologies. Fast, scalable, and user-friendly.",
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
    canonical: "https://arceniktechnologies.com/services/web-development",
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/web-development",
  name: "Web Development Services",
  description:
    "Professional web development services including custom websites, web applications, e-commerce solutions, and more.",
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
    {
      "@type": "City",
      name: "Vapi",
    },
    {
      "@type": "State",
      name: "Gujarat",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Responsive Website Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Progressive Web Apps",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Development",
        },
      },
    ],
  },
};

const WebDevelopment = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebDevelopmentSection />
    </>
  );
};

export default WebDevelopment;
