import { EdTechSection } from "./EdTechSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "EdTech Development | E-Learning & Education Platform Solutions | Arcenik",
  description:
    "Leading EdTech development company in India. We build online learning platforms, LMS systems, virtual classrooms, and educational apps for schools and universities.",
  keywords:
    "edtech development, elearning platform development, LMS development, virtual classroom software, educational app development, online education platform india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "EdTech Development | Arcenik Technologies",
    description:
      "Transform education with digital learning solutions. From LMS platforms to virtual classrooms, we build technology that makes learning engaging and accessible.",
    url: "https://arceniktechnologies.com/industries/edtech",
    siteName: "Arcenik Technologies",
    images: [
      {
         url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "EdTech Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EdTech Development | Arcenik Technologies",
    description:
      "Build the future of education with innovative learning technology.",
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
    canonical: "https://arceniktechnologies.com/industries/edtech",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/edtech",
  name: "EdTech Development Services",
  description:
    "Custom EdTech development including learning management systems, virtual classrooms, online course platforms, and educational mobile applications.",
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
  serviceType: "EdTech Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const EdTechPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EdTechSection />
    </>
  );
};

export default EdTechPage;
