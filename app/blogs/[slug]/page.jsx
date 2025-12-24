import { BlogDetailSection } from "./BlogDetailSection";
import "./blog-detail.css";
import { notFound } from "next/navigation";
import { blogsData } from "../../../data/blog.js";

export async function generateStaticParams() {
  return Object.keys(blogsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = blogsData[params.slug];

  if (!blog) {
    return {
      title: "Blog Not Found | Arcenik Technologies",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const blogImageUrl = blog.image.startsWith("http")
    ? blog.image
    : `https://arceniktechnologies.com${blog.image}`;

  return {
    metadataBase: new URL("https://arceniktechnologies.com"),

    title: `${blog.title} | Arcenik Technologies`,

    description: blog.description,

    keywords: Array.isArray(blog.tags) ? blog.tags : blog.tags.split(", "),

    authors: [{ name: blog.author?.name || "Arcenik Technologies" }],
    creator: "Arcenik Technologies",
    publisher: "Arcenik Technologies",

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://arceniktechnologies.com/blogs/${blog.slug}`,
      siteName: "Arcenik Technologies",
      images: [
        {
          url: blogImageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: "image/webp",
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.modifiedDate || blog.date,
      authors: [blog.author?.name || "Arcenik Technologies"],
      section: blog.category || "Technology",
      tags: Array.isArray(blog.tags) ? blog.tags : blog.tags.split(", "),
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blogImageUrl],
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
      canonical: `https://arceniktechnologies.com/blogs/${blog.slug}`,
    },
  };
}

const BlogDetail = ({ params }) => {
  const blog = blogsData[params.slug];

  if (!blog) {
    notFound();
  }

  const blogImageUrl = blog.image.startsWith("http")
    ? blog.image
    : `https://arceniktechnologies.com${blog.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://arceniktechnologies.com/blogs/${blog.slug}#article`,
        headline: blog.title,
        description: blog.description,
        image: {
          "@type": "ImageObject",
          url: blogImageUrl,
          width: 1200,
          height: 630,
        },
        datePublished: blog.date,
        dateModified: blog.modifiedDate || blog.date,
        author: {
          "@type": "Person",
          name: blog.author?.name || "Arcenik Technologies",
          url: "https://arceniktechnologies.com/about",
        },
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://arceniktechnologies.com/blogs/${blog.slug}`,
        },
        isPartOf: {
          "@id": "https://arceniktechnologies.com/blogs#blog",
        },
        wordCount: blog.content ? blog.content.split(" ").length : 1500,
        articleSection: blog.category || "Technology",
        keywords: Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags,
        inLanguage: "en-IN",
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
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `https://arceniktechnologies.com/blogs/${blog.slug}`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `https://arceniktechnologies.com/blogs/${blog.slug}#webpage`,
        url: `https://arceniktechnologies.com/blogs/${blog.slug}`,
        name: blog.title,
        isPartOf: {
          "@id": "https://arceniktechnologies.com/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: blogImageUrl,
        },
        datePublished: blog.date,
        dateModified: blog.modifiedDate || blog.date,
        description: blog.description,
        breadcrumb: {
          "@id": `https://arceniktechnologies.com/blogs/${blog.slug}#breadcrumb`,
        },
        inLanguage: "en-IN",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`https://arceniktechnologies.com/blogs/${blog.slug}`],
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailSection blog={blog} allBlogs={Object.values(blogsData)} />
    </>
  );
};

export default BlogDetail;
