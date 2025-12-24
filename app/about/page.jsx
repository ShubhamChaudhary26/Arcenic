// app/about/page.jsx
import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

// ✅ SEO Optimized Metadata - Software + Website Focus
export const metadata = {
  // ✅ Title: Software Development Company (Professional Positioning)
  title: "About Us | Arcenik - Software Development Company in Vapi",

  // ✅ Description: Mix both Software + Website
  description:
    "Arcenik is a leading software development company in Vapi, Gujarat. We specialize in custom website development, web applications, mobile apps, CRM, ERP & digital solutions.",

  // ✅ Keywords: 60% Website + 40% Software
  keywords: [
    // 🔥 PRIMARY - High Volume Website Keywords
    "about arcenik",
    "website development company vapi",
    "web development agency gujarat",
    "website design company silvassa",

    // 🎯 SECONDARY - Software Development
    "software development company vapi",
    "software company gujarat",
    "IT company vapi",

    // 🎯 SERVICES - Specific
    "UI UX design vapi",
    "digital agency valsad",
    "tech company gujarat",
    "web developer vapi",
  ],

  authors: [{ name: "Arcenik Technologies" }],

  openGraph: {
    title: "About Arcenik | Software Development Company Vapi, Gujarat",
    description:
      "Leading software development company in Vapi. Custom website development, web apps, mobile apps & digital solutions.",
    url: "https://arceniktechnologies.com/about",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 1200,
        height: 630,
        alt: "About Arcenik Technologies - Software Development Company Vapi Gujarat",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Arcenik | Software Development Company Vapi",
    description:
      "Software development company in Vapi, Gujarat. Custom websites, web apps & digital solutions.",
    images: ["https://arceniktechnologies.com/logo1.webp"],
    creator: "@arcenik",
  },

  alternates: {
    canonical: "https://arceniktechnologies.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ✅ JSON-LD Schema for About Page
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Arcenik Technologies",
  description:
    "Learn about Arcenik Technologies - Leading software development company in Vapi, Gujarat",
  url: "https://arceniktechnologies.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Arcenik Technologies",
    url: "https://arceniktechnologies.com",
    logo: "https://arceniktechnologies.com/logo1.webp",
    foundingDate: "2022",
    foundingLocation: {
      "@type": "Place",
      name: "Vapi, Gujarat, India",
    },
    description:
      "We help businesses move from manual chaos to digital clarity. Custom software, high-performance websites, and digital solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vapi",
      addressRegion: "Gujarat",
      postalCode: "396191",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7777909218",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://www.facebook.com/arceniktechnologies",
      "https://www.instagram.com/arceniktechnologies",
      "https://www.linkedin.com/company/arceniktechnologies",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 15,
    },
    areaServed: [
      { "@type": "City", name: "Vapi" },
      { "@type": "City", name: "Silvassa" },
      { "@type": "City", name: "Valsad" },
      { "@type": "City", name: "Navsari" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Software Development",
      "Website Development",
      "Web Application Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-Commerce Solutions",
      "CRM Systems",
      "ERP Solutions",
      "SEO",
      "Digital Marketing",
    ],
  },
};

// ✅ Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://arceniktechnologies.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://arceniktechnologies.com/about",
    },
  ],
};

const About = () => {
  return (
    <>
      {/* ✅ JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageSection />
    </>
  );
};

export default About;
