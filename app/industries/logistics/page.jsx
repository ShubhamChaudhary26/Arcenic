import { LogisticsSection } from "./LogisticsSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Logistics Software Development | Fleet & Supply Chain Solutions | Arcenik",
  description:
    "Leading logistics software development company in India. We build fleet management systems, delivery tracking apps, warehouse management, and supply chain platforms.",
  keywords:
    "logistics software development, fleet management system, delivery tracking app, warehouse management system, supply chain software, transportation management india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Logistics Software Development | Arcenik Technologies",
    description:
      "Transform logistics operations with digital solutions. From fleet tracking to warehouse management, we build technology for modern supply chains.",
    url: "https://arceniktechnologies.com/industries/logistics",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Logistics Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Logistics Software Development | Arcenik Technologies",
    description:
      "Build the future of logistics with smart fleet and supply chain technology.",
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
    canonical: "https://arceniktechnologies.com/industries/logistics",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/logistics",
  name: "Logistics Software Development Services",
  description:
    "Custom logistics software development including fleet management, delivery tracking, warehouse management, and transportation management systems.",
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
  serviceType: "Logistics Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const LogisticsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LogisticsSection />
    </>
  );
};

export default LogisticsPage;
