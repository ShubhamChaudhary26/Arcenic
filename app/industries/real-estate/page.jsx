import { RealEstateSection } from "./RealEstateSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "Real Estate Software Development | Property Tech Solutions | Arcenik",
  description:
    "Leading real estate software development company in India. We build property listing platforms, virtual tour solutions, CRM for brokers, and property management systems.",
  keywords:
    "real estate software development, property listing platform, real estate CRM, virtual property tours, property management system, real estate app development india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Real Estate Software Development | Arcenik Technologies",
    description:
      "Transform property business with digital solutions. From listing platforms to virtual tours, we build technology for modern real estate.",
    url: "https://arceniktechnologies.com/industries/real-estate",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Real Estate Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Software Development | Arcenik Technologies",
    description:
      "Build the future of property tech with innovative real estate solutions.",
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
    canonical: "https://arceniktechnologies.com/industries/real-estate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/real-estate",
  name: "Real Estate Software Development Services",
  description:
    "Custom real estate software development including property listing platforms, virtual tours, broker CRM, and property management systems.",
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
  serviceType: "Real Estate Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const RealEstatePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RealEstateSection />
    </>
  );
};

export default RealEstatePage;
