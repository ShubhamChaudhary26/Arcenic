import { FintechSection } from "./FintechSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "Fintech Software Development | Banking & Payment Solutions | Arcenik",
  description:
    "Leading fintech software development company in India. We build secure, scalable payment gateways, digital banking platforms, and blockchain solutions for modern financial services.",
  keywords:
    "fintech development, payment gateway development, digital banking solutions, blockchain fintech, financial software development, neobank development, fintech app development india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Fintech Software Development | Arcenik Technologies",
    description:
      "Transform financial services with cutting-edge fintech solutions. From payment gateways to blockchain integration, we build secure and compliant platforms.",
    url: "https://arceniktechnologies.com/industries/fintech",
    siteName: "Arcenik Technologies",
    images: [
      {
         url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Fintech Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fintech Software Development | Arcenik Technologies",
    description:
      "Build the future of finance with secure, scalable fintech solutions.",
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
    canonical: "https://arceniktechnologies.com/industries/fintech",
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/fintech",
  name: "Fintech Software Development Services",
  description:
    "Custom fintech software development including payment gateways, digital banking, blockchain integration, and financial management platforms.",
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
  serviceType: "Fintech Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const FintechPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FintechSection />
    </>
  );
};

export default FintechPage;
