import { BlogsSection } from "./BlogsSection";
import "./blogs.css";

export const metadata = {
  metadataBase: new URL("https://arceniktechnologies.com"),

  title: "Blog | Software Development & Web Design Insights | Arcenik",

  description:
    "Expert blogs on software development, website development, UI/UX design, SEO & digital marketing. Tips, tutorials & industry trends from Arcenik Technologies.",

  keywords: [
    "software development blog",
    "web development blog india",
    "website development tips",
    "ui ux design blog",
    "seo guide india",
    "digital marketing blog",
    "tech blog vapi",
    "nextjs tutorial",
    "react development tips",
    "ecommerce website guide",
    "web design trends",
    "software company blog",
  ],

  authors: [{ name: "Arcenik Technologies" }],
  creator: "Arcenik Technologies",
  publisher: "Arcenik Technologies",

  openGraph: {
    title: "Blog | Software Development & Web Design Insights | Arcenik",
    description:
      "Expert insights on software development, website development, design & digital marketing from Arcenik Technologies.",
    url: "https://arceniktechnologies.com/blogs",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "https://arceniktechnologies.com/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Arcenik Technologies Blog - Software Development Insights",
        type: "image/webp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Arcenik Technologies",
    description:
      "Expert insights on software development, web design & digital growth strategies.",
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
    canonical: "https://arceniktechnologies.com/blogs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://arceniktechnologies.com/blogs#blog",
      name: "Arcenik Technologies Blog",
      description:
        "Expert insights on software development, website development, UI/UX design, SEO, and digital marketing.",
      url: "https://arceniktechnologies.com/blogs",
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: "Arcenik Technologies",
        url: "https://arceniktechnologies.com",
        logo: {
          "@type": "ImageObject",
          url: "https://arceniktechnologies.com/logo1.webp",
          width: 600,
          height: 60,
        },
      },
      blogPost: [
        {
          "@type": "BlogPosting",
          headline: "How Much Does Website Development Cost in India 2026",
          url: "https://arceniktechnologies.com/blogs/website-cost-india-2026",
        },
        {
          "@type": "BlogPosting",
          headline: "How to Choose Web Development Company in India",
          url: "https://arceniktechnologies.com/blogs/how-to-choose-web-development-company-india",
        },
        {
          "@type": "BlogPosting",
          headline: "Local SEO Guide for Small Business India 2026",
          url: "https://arceniktechnologies.com/blogs/local-seo-guide-small-business-india-2026",
        },
        {
          "@type": "BlogPosting",
          headline: "How to Rank on Google SEO Guide 2026",
          url: "https://arceniktechnologies.com/blogs/how-to-rank-on-google-seo-guide-2026",
        },
        {
          "@type": "BlogPosting",
          headline: "Mobile App Development Cost India 2026",
          url: "https://arceniktechnologies.com/blogs/mobile-app-development-cost-india-2026",
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
          name: "Blog",
          item: "https://arceniktechnologies.com/blogs",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://arceniktechnologies.com/blogs#webpage",
      url: "https://arceniktechnologies.com/blogs",
      name: "Blog | Arcenik Technologies",
      isPartOf: {
        "@id": "https://arceniktechnologies.com/#website",
      },
      about: {
        "@id": "https://arceniktechnologies.com/#organization",
      },
      description:
        "Expert blogs on software development, website development, UI/UX design and digital marketing.",
    },
  ],
};

const Blogs = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsSection />
    </>
  );
};

export default Blogs;
