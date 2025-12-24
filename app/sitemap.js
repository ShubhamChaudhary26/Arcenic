export default function sitemap() {
  const baseUrl = "https://arceniktechnologies.com";

  const staticLastMod = "2025-01-15";
  const blogLastMod = new Date().toISOString().split("T")[0];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: staticLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastMod,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: staticLastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticLastMod,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages = [
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/e-commerce-solutions`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-calling-agent`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-chatbot`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-marketing`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/crm-solutions`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/erp-systems`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/n8n`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/branding-seo`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/graphic-design`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const industriesPages = [
    {
      url: `${baseUrl}/industries/healthcare`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/fintech`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/e-commerce`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/real-estate`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/edtech`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/logistics`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/hospitality`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/manufacturing`,
      lastModified: staticLastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = [
    { slug: "website-cost-india-2026", priority: 0.9, freq: "weekly" },
    {
      slug: "how-to-choose-web-development-company-india",
      priority: 0.9,
      freq: "weekly",
    },
    {
      slug: "local-seo-guide-small-business-india-2026",
      priority: 0.9,
      freq: "weekly",
    },
    {
      slug: "how-to-rank-on-google-seo-guide-2026",
      priority: 0.9,
      freq: "weekly",
    },
    {
      slug: "mobile-app-development-cost-india-2026",
      priority: 0.8,
      freq: "monthly",
    },
    {
      slug: "website-speed-optimization-guide-2026",
      priority: 0.8,
      freq: "monthly",
    },
    {
      slug: "digital-marketing-guide-small-business-india-2026",
      priority: 0.8,
      freq: "monthly",
    },
    { slug: "shopify-vs-woocommerce-2026", priority: 0.8, freq: "monthly" },
    {
      slug: "whatsapp-business-api-guide-2026",
      priority: 0.8,
      freq: "monthly",
    },
    { slug: "best-ai-tools-for-business-2026", priority: 0.7, freq: "monthly" },
    { slug: "ui-design-trends-2026", priority: 0.7, freq: "monthly" },
    { slug: "custom-website-vs-template-2026", priority: 0.7, freq: "monthly" },
    { slug: "nextjs-vs-react-2026", priority: 0.7, freq: "monthly" },
    {
      slug: "instagram-marketing-strategy-2026",
      priority: 0.7,
      freq: "monthly",
    },
    {
      slug: "google-ads-guide-small-business-india-2026",
      priority: 0.7,
      freq: "monthly",
    },
    { slug: "wordpress-security-guide-2026", priority: 0.6, freq: "monthly" },
    { slug: "top-javascript-frameworks-2026", priority: 0.6, freq: "monthly" },
    { slug: "figma-tips-tricks-2026", priority: 0.6, freq: "monthly" },
    {
      slug: "landing-page-design-best-practices-2026",
      priority: 0.6,
      freq: "monthly",
    },
    {
      slug: "payment-gateway-integration-india-2026",
      priority: 0.6,
      freq: "monthly",
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: blogLastMod,
    changeFrequency: post.freq,
    priority: post.priority,
  }));

  return [...staticPages, ...servicePages, ...industriesPages, ...blogPages];
}
