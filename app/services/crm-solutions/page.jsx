import { CRMSolutionsSection } from "./CRMSolutionsSection";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "CRM Solutions | Customer Relationship Management | Arcenik Technologies",
  description:
    "Complete CRM solutions in Vapi, Gujarat. Salesforce, HubSpot, Zoho CRM implementation, custom CRM development, sales automation, and customer management systems.",
  keywords:
    "crm solutions vapi, customer relationship management gujarat, salesforce implementation, hubspot setup, zoho crm, custom crm development, sales automation, lead management",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "CRM Solutions | Arcenik Technologies",
    description:
      "Transform your customer relationships with powerful CRM solutions. Implementation, customization, and training for all major CRM platforms.",
    url: "https://arceniktechnologies.com/services/crm-solutions",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "CRM Solutions - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | Arcenik Technologies",
    description:
      "Streamline sales, manage customers better, close more deals with our CRM solutions.",
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
    canonical: "https://arceniktechnologies.com/services/crm-solutions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/crm-solutions",
  name: "CRM Solutions",
  description:
    "Complete customer relationship management solutions including CRM implementation, customization, integration, automation, and training for businesses.",
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
    name: "CRM Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CRM Implementation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom CRM Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CRM Integration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sales Automation" },
      },
    ],
  },
};

const CRMSolutions = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CRMSolutionsSection />
    </>
  );
};

export default CRMSolutions;
