import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),

  title: "Our Work & Portfolio | Software Development Projects | Arcenik",

  description:
    "Explore our portfolio of software development projects. Custom websites, web applications, mobile apps, CRM, ERP systems built for businesses in Vapi, Gujarat & across India.",

  keywords: [
    "software development portfolio",
    "website development projects vapi",
    "web development case studies",
    "web design portfolio gujarat",
    "mobile app development portfolio",
    "CRM development projects",
    "ERP system case studies",
    "arcenik projects",
    "custom software projects india",
    "ecommerce website portfolio",
  ],

  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Our Work & Portfolio | Arcenik Technologies",
    description:
      "Explore our portfolio of 50+ successful software & web development projects. Custom websites, mobile apps, CRM systems and more.",
    url: "https://arceniktechnologies.com/works",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Arcenik Technologies - Software Development Portfolio",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work & Portfolio | Arcenik Technologies",
    description:
      "Explore our portfolio of successful software & web development projects across industries.",
    images: ["https://arceniktechnologies.com/logo1.webp"],
    creator: "@arcenik",
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
    canonical: "https://arceniktechnologies.com/works",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://arceniktechnologies.com/works#webpage",
      name: "Our Work & Portfolio",
      description:
        "Portfolio of software & web development projects by Arcenik Technologies",
      url: "https://arceniktechnologies.com/works",
      isPartOf: {
        "@id": "https://arceniktechnologies.com/#website",
      },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: 12,
        itemListElement: [
          {
            "@type": "CreativeWork",
            position: 1,
            name: "Veltrix",
            description:
              "Modern gym website with interactive class schedules and trainer profiles",
            url: "https://veltrixgym.in",
          },
          {
            "@type": "CreativeWork",
            position: 2,
            name: "MintSurvey",
            description:
              "Survey creation platform with real-time analytics and reporting",
            url: "https://mintsurvey.com",
          },
          {
            "@type": "CreativeWork",
            position: 3,
            name: "7Star Travels",
            description:
              "Travel agency site with booking system and destination guides",
          },
          {
            "@type": "CreativeWork",
            position: 4,
            name: "Gift Shop",
            description: "Online gift store with personalized product options",
            url: "https://mybestgift.in",
          },
          {
            "@type": "CreativeWork",
            position: 5,
            name: "Rent Agreement",
            description:
              "Platform for generating customized rent agreements online",
            url: "https://rentagreementwithus.com",
          },
          {
            "@type": "CreativeWork",
            position: 6,
            name: "LogiFlow ERP",
            description:
              "Complete supply chain management system for logistics",
          },
        ],
      },
    },
    {
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
          name: "Our Work",
          item: "https://arceniktechnologies.com/works",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://arceniktechnologies.com/#organization",
      name: "Arcenik Technologies",
      url: "https://arceniktechnologies.com",
      logo: "https://arceniktechnologies.com/logo1.webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

const Works = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorksPageSection />
    </>
  );
};

export default Works;
