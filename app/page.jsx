import Main from "./Main/Main";

// ✅ OPTIMIZED: Home Page Metadata (Perfect Balance)
export const metadata = {
  // ✅ Title: Software Development (Professional Brand)
  title: "Arcenik | Software Development Company in Vapi, Gujarat",

  // ✅ Description: Mix both Software + Website (155 chars optimal)
  description:
    "Leading software development company in Vapi, Gujarat. Custom website development, web apps, mobile apps, CRM, ERP & digital solutions for businesses.",

  // ✅ Keywords: 60% Website + 40% Software (Best Coverage)
  keywords: [
    // 🔥 PRIMARY - High Volume Website Keywords
    "website development vapi",
    "web development company vapi",
    "website development company gujarat",
    "web design vapi",
    "web developer vapi",

    // 🎯 SECONDARY - Software Development Keywords
    "software development company vapi",
    "software development company india",
    "custom software development",

    // 🎯 SERVICES - Specific Solutions
    "mobile app development vapi",
    "web application development",
    "UI UX design services vapi",
    "ecommerce website development",
    "CRM development india",
    "ERP solutions gujarat",

    // 🎯 LOCAL - Area Coverage
    "website development silvassa",
    "web design company valsad",
    "digital solutions navsari",
    "arcenik technologies",
  ],

  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  // ✅ OpenGraph: Software + Website
  openGraph: {
    title: "Arcenik | Software & Website Development Company Vapi, Gujarat",
    description:
      "Leading software development company in Vapi. Custom website development, web apps, mobile apps & digital solutions for businesses.",
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
    title: "Arcenik | Software Development Company Vapi, Gujarat",
    description:
      "Custom software & website development in Vapi. Web apps, mobile apps, CRM & digital solutions.",
    images: ["https://arceniktechnologies.com/logo1.webp"],
    creator: "@arcenik",
  },

  // ✅ Robots
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

  // ✅ Canonical URL
  alternates: {
    canonical: "https://arceniktechnologies.com",
  },
};

export default function Home() {
  return <Main />;
}
