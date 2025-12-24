import { ERPSystemsSection } from "./ERPSystemsSection";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "ERP Systems | Enterprise Resource Planning Solutions | Arcenik Technologies",
  description:
    "Complete ERP solutions in Vapi, Gujarat. Custom ERP development, SAP implementation, inventory management, accounting automation, and business process optimization.",
  keywords:
    "erp systems vapi, enterprise resource planning gujarat, custom erp development, sap implementation, odoo erp, inventory management, accounting automation, business management software",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "ERP Systems | Arcenik Technologies",
    description:
      "Streamline your entire business with powerful ERP systems. Custom development and implementation for manufacturing, retail, and service industries.",
    url: "https://arceniktechnologies.com/services/erp-systems",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "ERP Systems - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ERP Systems | Arcenik Technologies",
    description:
      "Unify all business operations - inventory, accounting, HR, sales - in one powerful ERP system.",
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
    canonical: "https://arceniktechnologies.com/services/erp-systems",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/erp-systems",
  name: "ERP Systems",
  description:
    "Complete enterprise resource planning solutions including custom ERP development, implementation, integration, inventory management, and accounting automation.",
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
    name: "ERP Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom ERP Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "ERP Implementation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Inventory Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Accounting Automation" },
      },
    ],
  },
};

const ERPSystems = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ERPSystemsSection />
    </>
  );
};

export default ERPSystems;
