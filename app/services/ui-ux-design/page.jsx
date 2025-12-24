import { UIUXDesignSection } from "./UIUXDesignSection";
// import "./ui-ux-design.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),
  title: "UI/UX Design Services | User Experience & Interface Design | Arcenik",
  description:
    "Professional UI/UX design services in Vapi, Gujarat. We create intuitive, user-centered interfaces that delight users and drive conversions. Wireframing, prototyping, and user research.",
  keywords:
    "ui ux design services vapi, user interface design gujarat, user experience design, wireframing, prototyping, figma design, mobile app design, web app design, ui designer vapi",
  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "UI/UX Design Services | Arcenik Technologies",
    description:
      "Create memorable digital experiences with our UI/UX design services. User research, wireframing, prototyping, and beautiful interface design.",
    url: "https://arceniktechnologies.com/services/ui-ux-design",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services - Arcenik Technologies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Arcenik Technologies",
    description:
      "User-centered design that converts. Beautiful interfaces backed by research.",
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
    canonical: "https://arceniktechnologies.com/services/ui-ux-design",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arceniktechnologies.com/services/ui-ux-design",
  name: "UI/UX Design Services",
  description:
    "Professional UI/UX design services including user research, wireframing, prototyping, and interface design.",
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
    name: "UI/UX Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "User Research & Analysis" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Wireframing & Prototyping" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Visual Interface Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Design System Creation" },
      },
    ],
  },
};

const UIUXDesign = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UIUXDesignSection />
    </>
  );
};

export default UIUXDesign;
