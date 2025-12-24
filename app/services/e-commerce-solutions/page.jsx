import { EcommerceSolutionsSection } from "./EcommerceSolutionsSection";
import "../services-shared.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "E-Commerce Solutions | Online Store Development | Arcenik Technologies",
  description:
    "Complete e-commerce solutions in Vapi, Gujarat. Custom online stores, payment integration, inventory management, and multi-channel selling. Shopify, WooCommerce, and custom development.",
  keywords:
    "ecommerce development vapi, online store development gujarat, shopify development, woocommerce development, payment gateway integration, ecommerce website india, online selling platform",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "E-Commerce Solutions | Arcenik Technologies",
    description:
      "Launch your online store with our complete e-commerce solutions. From product catalog to payment processing, we handle everything.",
    url: "https://arceniktechnologies.com/services/e-commerce-solutions",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "E-Commerce Solutions - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solutions | Arcenik Technologies",
    description:
      "Complete online store solutions. Sell more, grow faster with our e-commerce expertise.",
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
    canonical: "https://arceniktechnologies.com/services/e-commerce-solutions",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/e-commerce-solutions",
  name: "E-Commerce Solutions",
  description:
    "Complete e-commerce development services including custom online stores, payment integration, inventory management, and multi-channel selling solutions.",
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
    name: "E-Commerce Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Online Store Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Payment Gateway Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inventory Management System",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Multi-Channel Selling" },
      },
    ],
  },
};

const EcommerceSolutions = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceSolutionsSection />
    </>
  );
};

export default EcommerceSolutions;
