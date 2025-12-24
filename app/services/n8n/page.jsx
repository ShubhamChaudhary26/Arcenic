import AutomationSection from "./AutomationSection";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),

  title:
    "n8n Workflow Automation Services | Business Process Automation | Arcenik",

  description:
    "Expert n8n workflow automation services in Vapi, Gujarat. We build custom automation workflows, app integrations, AI-powered automation & business process automation for companies across India.",

  keywords: [
    "n8n automation services",
    "workflow automation india",
    "business process automation vapi",
    "n8n developer india",
    "app integration services",
    "automation consulting gujarat",
    "zapier alternative india",
    "make.com alternative",
    "custom workflow automation",
    "AI automation services",
    "n8n self-hosted setup",
    "business automation solutions",
  ],

  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "n8n Workflow Automation Services | Arcenik Technologies",
    description:
      "Automate your business with n8n. Custom workflows, 400+ app integrations, AI-powered automation. Save time, reduce errors, scale operations.",
    url: "https://arceniktechnologies.com/services/n8n",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/services/n8n.jpg",
        width: 1200,
        height: 630,
        alt: "n8n Workflow Automation Services - Arcenik Technologies Vapi Gujarat",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "n8n Workflow Automation | Arcenik Technologies",
    description:
      "Stop wasting hours on repetitive tasks. We build intelligent automation workflows using n8n.",
    images: ["https://arceniktechnologies.com/services/n8n.jpg"],
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
    canonical: "https://arceniktechnologies.com/services/n8n",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://arceniktechnologies.com/services/n8n#service",
      name: "n8n Workflow Automation Services",
      description:
        "Custom n8n workflow automation services including app integrations, AI-powered automation, business process automation, and self-hosted n8n setup.",
      provider: {
        "@type": "Organization",
        name: "Arcenik Technologies",
        url: "https://arceniktechnologies.com",
        logo: "https://arceniktechnologies.com/logo1.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vapi",
          addressRegion: "Gujarat",
          postalCode: "396191",
          addressCountry: "IN",
        },
      },
      serviceType: "Workflow Automation",
      areaServed: [
        { "@type": "City", name: "Vapi" },
        { "@type": "City", name: "Silvassa" },
        { "@type": "City", name: "Valsad" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "n8n Automation Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Starter Automation Package",
              description: "Up to 3 workflow automations, 5 app integrations",
            },
            price: "9999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth Automation Package",
              description:
                "Up to 10 workflows, 15 app integrations, AI-powered automation",
            },
            price: "29999",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise Automation Package",
              description: "Unlimited workflows, self-hosted n8n, 24/7 support",
            },
            price: "79999",
            priceCurrency: "INR",
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
          name: "Services",
          item: "https://arceniktechnologies.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "n8n Automation",
          item: "https://arceniktechnologies.com/services/n8n",
        },
      ],
    },
  ],
};

const N8nAutomation = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutomationSection />
    </>
  );
};

export default N8nAutomation;
