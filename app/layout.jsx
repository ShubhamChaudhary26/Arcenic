// app/layout.jsx

import "./globals.css";
import { SectionFooter } from "./Main/SectionFooter";
import { Navigation } from "./Navigation";

// ✅ SEO Optimized Metadata - Software + Website Focus
export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),

  // ✅ Title: Software Development Company (Professional Positioning)
  title: {
    default: "Arcenik | Software Development Company in Vapi, Gujarat",
  },

  // ✅ Description: Mix both Software + Website (Best Coverage)
  description:
    "Leading software development company in Vapi, Gujarat. Expert website development, web design, mobile apps, CRM, ERP & digital solutions for businesses across India.",

  // ✅ Keywords: 60% Website + 40% Software (Optimal Mix)
  keywords: [
    // 🎯 PRIMARY - Software Development (Positioning)
    "software development company vapi",
    "software development company gujarat",
    "custom software development india",

    // 🔥 HIGH VOLUME - Website Development (Maximum Searches)
    "website development vapi",
    "website development company gujarat",
    "web development vapi",
    "web development company india",
    "website design vapi",
    "web design company gujarat",

    // 🎯 SECONDARY - Specific Services
    "web developer vapi",
    "website design silvassa",
    "digital solutions valsad",
    "UI UX design vapi",
    "mobile app development vapi",
    "ecommerce website development",

    // 🎯 LOCAL - Area Targeting
    "web development navsari",
    "website developer silvassa",
    "software company valsad",
    "IT company vapi",
    "tech company gujarat",
  ],

  authors: [
    { name: "Arcenik Technologies", url: "https://arceniktechnologies.com" },
  ],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ✅ Proper Favicon Setup
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // ✅ OpenGraph - Both Software + Website
  openGraph: {
    title: "Arcenik | Software & Website Development Company Vapi, Gujarat",
    description:
      "Leading software development company in Vapi. Custom website development, web design, mobile apps & digital solutions for businesses.",
    url: "https://arceniktechnologies.com",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Arcenik Technologies - Software & Website Development Company Vapi Gujarat",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Arcenik | Software & Website Development Company Vapi",
    description:
      "Custom software & website development in Vapi, Gujarat. Web apps, mobile apps, digital solutions.",
    images: ["https://arceniktechnologies.com/logo1.webp"],
    creator: "@arcenik",
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical URL
  alternates: {
    canonical: "https://arceniktechnologies.com",
  },

  // ✅ Verification - Add your actual Google Search Console code
  verification: {
    google: "YOUR_ACTUAL_GOOGLE_VERIFICATION_CODE", // Replace this
  },

  category: "technology",

  // ✅ Geo Meta Tags
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vapi",
    "geo.position": "20.3893;72.9106",
    ICBM: "20.3893, 72.9106",
  },
};

// ✅ OPTIMIZED JSON-LD Schema (Comprehensive)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arceniktechnologies.com/#organization",
      name: "Arcenik Technologies",
      url: "https://arceniktechnologies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 600,
        height: 60,
      },
      image: "https://arceniktechnologies.com/logo1.webp",

      // ✅ UPDATED: Mix Software + Website in description
      description:
        "Leading software development company in Vapi, Gujarat specializing in custom website development, web applications, mobile apps, CRM, ERP and digital solutions for businesses.",

      telephone: "+91-7777909218",
      email: "contact@arceniktechnologies.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Vapi",
        addressLocality: "Vapi",
        addressRegion: "Gujarat",
        postalCode: "396191",
        addressCountry: "IN",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.3893,
        longitude: 72.9106,
      },

      sameAs: [
        "https://www.facebook.com/arceniktechnologies",
        "https://www.instagram.com/arceniktechnologies",
        "https://www.linkedin.com/company/arceniktechnologies",
        "https://twitter.com/arcenik",
      ],

      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7777909218",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },

      // ✅ NEW: knowsAbout - Comprehensive skills list
      knowsAbout: [
        "Software Development",
        "Custom Software Solutions",
        "Website Development",
        "Web Application Development",
        "Mobile App Development",
        "Web Design",
        "UI/UX Design",
        "E-Commerce Development",
        "CRM Development",
        "ERP Systems",
        "Business Automation",
        "Digital Solutions",
        "SEO Services",
        "Digital Marketing",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://arceniktechnologies.com/#website",
      url: "https://arceniktechnologies.com",
      name: "Arcenik Technologies",
      description: "Software & Website Development Company in Vapi, Gujarat",
      publisher: {
        "@id": "https://arceniktechnologies.com/#organization",
      },
      inLanguage: "en-IN",

      // ✅ NEW: Search Action for Google Search Box
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://arceniktechnologies.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },

    {
      // ✅ UPDATED: Multiple types for broader coverage
      "@type": ["LocalBusiness", "SoftwareCompany", "WebDesigner"],
      "@id": "https://arceniktechnologies.com/#localbusiness",
      name: "Arcenik Technologies",
      image: "https://arceniktechnologies.com/logo1.webp",
      url: "https://arceniktechnologies.com",
      telephone: "+91-7777909218",
      email: "contact@arceniktechnologies.com",
      priceRange: "₹₹",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Vapi",
        addressLocality: "Vapi",
        addressRegion: "Gujarat",
        postalCode: "396191",
        addressCountry: "IN",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.3893,
        longitude: 72.9106,
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],

      areaServed: [
        { "@type": "City", name: "Vapi" },
        { "@type": "City", name: "Silvassa" },
        { "@type": "City", name: "Valsad" },
        { "@type": "City", name: "Navsari" },
        { "@type": "City", name: "Surat" },
        { "@type": "City", name: "Daman" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],

      // ✅ UPDATED: Comprehensive service catalog
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software & Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description:
                "Custom website development services in Vapi, Gujarat using modern technologies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Application Development",
              description:
                "Modern web applications using React, Next.js and Node.js",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description:
                "Tailored software solutions for specific business needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "iOS and Android mobile application development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description: "User interface and user experience design services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Solutions",
              description:
                "Complete e-commerce website and online store development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM Solutions",
              description:
                "Custom CRM development for sales and customer management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP Systems",
              description: "Enterprise resource planning software development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing & SEO",
              description: "SEO optimization and digital marketing services",
            },
          },
        ],
      },

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

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#010101" />
        <meta name="msapplication-TileColor" content="#010101" />

        {/* ✅ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Google Analytics - Fixed Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8XB7M5VSCR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8XB7M5VSCR');
            `,
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <SectionFooter />
      </body>
    </html>
  );
}
