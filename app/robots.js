export default function robots() {
  return {
    rules: [
      // ✅ All good bots - full access
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // API routes
          "/admin/", // Admin panel (if any)
          "/_next/", // Next.js internals
          "/private/", // Private content
        ],
      },
      // ✅ Bad bots ko block karo
      {
        userAgent: [
          "AhrefsBot", // Ahrefs
          "SemrushBot", // Semrush
          "DotBot", // Moz
          "MJ12bot", // Majestic
        ],
        crawlDelay: 10, // Slow them down instead of blocking
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      "https://arceniktechnologies.com/sitemap.xml",
      // Add more sitemaps if you have
      // "https://arceniktechnologies.com/blog-sitemap.xml",
      // "https://arceniktechnologies.com/services-sitemap.xml",
    ],
  };
}
