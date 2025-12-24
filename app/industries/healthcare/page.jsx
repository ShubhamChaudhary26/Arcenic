import { HealthcareSection } from "./HealthcareSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "Healthcare Software Development | Digital Health Solutions | Arcenik",
  description:
    "Leading healthcare software development company in India. We build HIPAA-compliant telemedicine platforms, hospital management systems, and AI-powered diagnostic solutions.",
  keywords:
    "healthcare software development, telemedicine app development, hospital management system, EHR EMR development, healthcare IT solutions, medical app development india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Healthcare Software Development | Arcenik Technologies",
    description:
      "Transform healthcare delivery with digital solutions. From telemedicine to AI diagnostics, we build secure and compliant healthcare platforms.",
    url: "https://arceniktechnologies.com/industries/healthcare",
    siteName: "Arcenik Technologies",
    images: [
      {
       url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Healthcare Software Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Software Development | Arcenik Technologies",
    description:
      "Build the future of healthcare with secure, scalable digital health solutions.",
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
    canonical: "https://arceniktechnologies.com/industries/healthcare",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/healthcare",
  name: "Healthcare Software Development Services",
  description:
    "Custom healthcare software development including telemedicine platforms, hospital management systems, EHR/EMR solutions, and medical device integration.",
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
  serviceType: "Healthcare Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const HealthcarePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthcareSection />
    </>
  );
};

export default HealthcarePage;
