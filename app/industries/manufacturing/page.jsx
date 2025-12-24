import { ManufacturingSection } from "./ManufacturingSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Manufacturing Software Development | Industry 4.0 Solutions | Arcenik",
  description:
    "Leading manufacturing software development company in India. We build ERP systems, IoT solutions, supply chain platforms, and smart factory automation for Industry 4.0.",
  keywords:
    "manufacturing software development, industry 4.0 solutions, smart factory software, manufacturing ERP, IoT manufacturing, supply chain software india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Manufacturing Software Development | Arcenik Technologies",
    description:
      "Transform manufacturing with Industry 4.0 solutions. From ERP systems to IoT integration, we build technology for smart factories.",
    url: "https://arceniktechnologies.com/industries/manufacturing",
    siteName: "Arcenik Technologies",
    images: [
      {
         url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Manufacturing Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Software Development | Arcenik Technologies",
    description:
      "Build the factory of the future with smart manufacturing technology.",
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
    canonical: "https://arceniktechnologies.com/industries/manufacturing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/manufacturing",
  name: "Manufacturing Software Development Services",
  description:
    "Custom manufacturing software development including ERP systems, IoT integration, supply chain management, and smart factory automation.",
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
  serviceType: "Manufacturing Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const ManufacturingPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManufacturingSection />
    </>
  );
};

export default ManufacturingPage;
