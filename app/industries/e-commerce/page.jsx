import { ECommerceSection } from "./ECommerceSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title:
    "E-Commerce Development | Online Store & Marketplace Solutions | Arcenik",
  description:
    "Leading e-commerce development company in India. We build custom online stores, multi-vendor marketplaces, headless commerce solutions, and mobile shopping apps.",
  keywords:
    "ecommerce development, online store development, marketplace development, headless commerce, shopify development, ecommerce app development india",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "E-Commerce Development | Arcenik Technologies",
    description:
      "Build powerful e-commerce platforms that drive sales. From online stores to marketplaces, we create shopping experiences that convert.",
    url: "https://arceniktechnologies.com/industries/e-commerce",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "E-Commerce Development - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development | Arcenik Technologies",
    description:
      "Build next-generation e-commerce platforms that scale with your business.",
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
    canonical: "https://arceniktechnologies.com/industries/e-commerce",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/industries/e-commerce",
  name: "E-Commerce Development Services",
  description:
    "Custom e-commerce development including online stores, marketplaces, headless commerce, inventory management, and mobile shopping applications.",
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
  serviceType: "E-Commerce Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

const ECommercePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ECommerceSection />
    </>
  );
};

export default ECommercePage;
