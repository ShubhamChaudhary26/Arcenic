import { HospitalitySection } from "./HospitalitySection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "Hospitality Software Development | Hotel & Restaurant Solutions | Arcenik",
  description:
    "Leading hospitality software development company in India. We build hotel management systems, restaurant POS, booking engines, and guest experience platforms.",
  keywords:
    "hospitality software development, hotel management system, restaurant POS, booking engine development, hotel app development, hospitality technology india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Hospitality Software Development | Arcenik Technologies",
    description:
      "Transform guest experiences with digital hospitality solutions. From hotel PMS to restaurant management, we build technology for modern hospitality.",
    url: "https://arceniktechnologies.com/industries/hospitality",
    siteName: "Arcenik Technologies",
    images: [
      {
         url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Hospitality Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hospitality Software Development | Arcenik Technologies",
    description:
      "Build the future of hospitality with innovative guest experience technology.",
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
    canonical: "https://arceniktechnologies.com/industries/hospitality",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/hospitality",
  name: "Hospitality Software Development Services",
  description:
    "Custom hospitality software development including hotel management systems, booking engines, restaurant POS, and guest experience applications.",
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
  serviceType: "Hospitality Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const HospitalityPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HospitalitySection />
    </>
  );
};

export default HospitalityPage;
