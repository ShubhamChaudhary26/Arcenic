export async function GET() {
  const urls = [
    {
      loc: "https://arceniktechnologies.com/",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: "https://arceniktechnologies.com/about",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "https://arceniktechnologies.com/works",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "https://arceniktechnologies.com/contact",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
