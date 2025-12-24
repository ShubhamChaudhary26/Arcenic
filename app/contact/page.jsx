import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),

  title: "Contact Us | Arcenik - Software Development Company Vapi, Gujarat",

  description:
    "Contact Arcenik Technologies for software development, website development & digital solutions in Vapi, Gujarat. Call +91-7777909218 or email. Free consultation available.",

  keywords: [
    "contact arcenik",
    "website development vapi contact",
    "software company vapi contact",
    "web development quote",
    "web developer vapi",
    "website design consultation",
    "software development inquiry",
    "IT company vapi contact",
    "digital solutions gujarat",
  ],

  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Contact Arcenik | Software Development Company Vapi, Gujarat",
    description:
      "Get in touch with Arcenik for software development, website development & digital solutions. Free consultation available.",
    url: "https://arceniktechnologies.com/contact",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Arcenik Technologies - Software Development Company Vapi",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Arcenik | Software Development Company Vapi",
    description:
      "Get in touch for software development, website development & digital solutions. Free consultation available.",
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
    canonical: "https://arceniktechnologies.com/contact",
  },

  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vapi",
    "geo.position": "20.3893;72.9106",
    ICBM: "20.3893, 72.9106",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://arceniktechnologies.com/contact#webpage",
      url: "https://arceniktechnologies.com/contact",
      name: "Contact Arcenik Technologies",
      description:
        "Contact page for Arcenik Technologies - Software Development Company in Vapi, Gujarat",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://arceniktechnologies.com/#website",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://arceniktechnologies.com/#business",
      name: "Arcenik Technologies",
      image: "https://arceniktechnologies.com/logo1.webp",
      telephone: "+91-7777909218",
      email: "arceniktechnologies@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Arihant Garden Building, Chanod Village Rd",
        addressLocality: "Vapi",
        addressRegion: "Gujarat",
        postalCode: "396195",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.3893,
        longitude: 72.9106,
      },
      url: "https://arceniktechnologies.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "17:00",
        },
      ],
      priceRange: "₹₹",
      areaServed: [
        { "@type": "City", name: "Vapi" },
        { "@type": "City", name: "Silvassa" },
        { "@type": "City", name: "Valsad" },
        { "@type": "City", name: "Navsari" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://arceniktechnologies.com/contact#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly do you respond to inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We respond to all inquiries within 24 hours during business days. For urgent requests, you can call us directly at +91-7777909218.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer free consultations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer free initial consultations to discuss your project requirements, timeline, and budget.",
          },
        },
        {
          "@type": "Question",
          name: "What are your office hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We're available Monday to Friday from 9:00 AM to 7:00 PM IST, and Saturday from 10:00 AM to 5:00 PM IST.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients outside Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we work with clients across India and internationally. We're experienced in remote project management.",
          },
        },
        {
          "@type": "Question",
          name: "What information should I include in my inquiry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please include your project type (website, app, etc.), budget range, timeline, and any specific requirements.",
          },
        },
      ],
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
          name: "Contact Us",
          item: "https://arceniktechnologies.com/contact",
        },
      ],
    },
  ],
};

const Contact = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageSection />
    </>
  );
};

export default Contact;
