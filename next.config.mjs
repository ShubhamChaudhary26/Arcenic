/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ESLint (keep as is)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Compression enabled
  compress: true,

  // ✅ REMOVED: swcMinify (default true in Next.js 14+, no need to specify)

  // ✅ No trailing slash for consistent URLs
  trailingSlash: false,

  // ✅ Powered by header hide karo (security)
  poweredByHeader: false,

  // ✅ Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arceniktechnologies.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  // ✅ Security & Caching Headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // Security Headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Static assets caching (images, fonts, etc.)
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // JS/CSS caching
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Videos caching
        source: "/videos/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ✅ Redirects: www to non-www (SEO - single canonical domain)
  async redirects() {
    return [
      // www to non-www redirect
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.arceniktechnologies.com",
          },
        ],
        destination: "https://arceniktechnologies.com/:path*",
        permanent: true, // 301 redirect
      },
      // Trailing slash redirect (backup)
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
