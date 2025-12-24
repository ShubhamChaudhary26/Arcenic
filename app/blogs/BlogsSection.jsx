"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "./blogs.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const BlogsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Refs
  const heroTitleRef = useRef();
  const heroDescRef = useRef();
  const blogsGridRef = useRef();

  // ============ BLOG DATA ============

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "SEO",
    "E-Commerce",
    "Business",
    "Marketing",
    "AI & Tech",
  ];

  const blogs = [
    // ========== FEATURED (Top 3 - Maximum Traffic Potential) ==========
    {
      slug: "website-cost-india-2026",
      category: "Business",
      title:
        "How Much Does a Website Cost in India in 2026? Complete Pricing Guide",
      description:
        "Detailed breakdown of website development costs in India. From basic sites to e-commerce, know exactly what you'll pay.",
      image: "/images/blog/image.png",
      author: "Arcenik Team",
      date: "Dec 28, 2025",
      readTime: "12 min read",
      featured: true,
    },
    {
      slug: "how-to-choose-web-development-company-india",
      category: "Business",
      title:
        "How to Choose the Best Web Development Company in India (2026 Guide)",
      description:
        "Complete guide to hiring the right web development agency. Red flags, questions to ask, and what to look for.",
      image: "/images/blog/2.jpg",
      author: "Arcenik Team",
      date: "Dec 25, 2025",
      readTime: "14 min read",
      featured: true,
    },
    {
      slug: "local-seo-guide-small-business-india-2026",
      category: "SEO",
      title: "Local SEO Guide for Small Businesses in India 2026",
      description:
        "Rank higher in local searches. Complete guide to Google Business Profile, local citations, and getting found by nearby customers.",
      image: "/images/blog/3.jpg",
      author: "Arcenik Team",
      date: "Dec 22, 2025",
      readTime: "13 min read",
      featured: true,
    },

    // ========== HIGH TRAFFIC BLOGS ==========
    {
      slug: "mobile-app-development-cost-india-2026",
      category: "Business",
      title: "Mobile App Development Cost in India 2026: Complete Breakdown",
      description:
        "How much does it cost to build an app in India? Android, iOS, and cross-platform pricing with real numbers.",
      image: "/images/blog/4.jpg",
      author: "Arcenik Team",
      date: "Dec 20, 2025",
      readTime: "15 min read",
      featured: false,
    },
    {
      slug: "how-to-rank-on-google-seo-guide-2026",
      category: "SEO",
      title: "How to Rank #1 on Google: Complete SEO Guide for 2026",
      description:
        "Learn proven SEO strategies to rank your website on Google's first page. Step-by-step guide that actually works.",
      image: "/images/blog/5.jpg",
      author: "Arcenik Team",
      date: "Dec 18, 2025",
      readTime: "14 min read",
      featured: false,
    },
    {
      slug: "website-speed-optimization-guide-2026",
      category: "Web Development",
      title:
        "Website Speed Optimization: Complete Guide to Faster Loading (2026)",
      description:
        "Make your website lightning fast. Technical guide covering images, caching, CDN, and Core Web Vitals optimization.",
      image: "/images/blog/6.jpg",
      author: "Arcenik Team",
      date: "Dec 15, 2025",
      readTime: "16 min read",
      featured: false,
    },
    {
      slug: "digital-marketing-guide-small-business-india-2026",
      category: "Marketing",
      title:
        "Digital Marketing for Small Businesses in India: Complete Guide 2026",
      description:
        "Start your digital marketing journey. SEO, social media, Google Ads, email marketing — everything explained simply.",
      image: "/images/blog/7.jpg",
      author: "Arcenik Team",
      date: "Dec 12, 2025",
      readTime: "18 min read",
      featured: false,
    },
    {
      slug: "shopify-vs-woocommerce-2026",
      category: "E-Commerce",
      title:
        "Shopify vs WooCommerce: Which Platform Should You Choose in 2026?",
      description:
        "Honest comparison of Shopify and WooCommerce. Pricing, features, ease of use, and real recommendations for Indian businesses.",
      image: "/images/blog/8.jpg",
      author: "Arcenik Team",
      date: "Dec 10, 2025",
      readTime: "13 min read",
      featured: false,
    },
    {
      slug: "whatsapp-business-api-guide-2026",
      category: "Business",
      title: "WhatsApp Business API for Customer Service: Complete Guide 2026",
      description:
        "Use WhatsApp for customer support at scale. API setup, pricing, automation, and best practices for Indian businesses.",
      image: "/images/blog/9.jpg",
      author: "Arcenik Team",
      date: "Dec 8, 2025",
      readTime: "12 min read",
      featured: false,
    },
    {
      slug: "instagram-marketing-strategy-2026",
      category: "Marketing",
      title: "Instagram Marketing Strategy for Small Businesses in India 2026",
      description:
        "Grow your business on Instagram. Reels strategy, content ideas, hashtags, and proven tactics for engagement and sales.",
      image: "/images/blog/10.jpg",
      author: "Arcenik Team",
      date: "Dec 5, 2025",
      readTime: "14 min read",
      featured: false,
    },
    {
      slug: "best-ai-tools-for-business-2026",
      category: "AI & Tech",
      title:
        "Best AI Tools for Business in 2026: Complete Guide (With Pricing)",
      description:
        "Discover the top AI tools transforming businesses. Content, design, customer service, automation — with real pricing.",
      image: "/images/blog/11.jpg",
      author: "Arcenik Team",
      date: "Dec 3, 2025",
      readTime: "15 min read",
      featured: false,
    },
    {
      slug: "ui-design-trends-2026",
      category: "UI/UX Design",
      title: "10 UI Design Trends Dominating 2026 (With Examples)",
      description:
        "Discover the hottest UI design trends shaping websites and apps. From bento grids to AI-powered interfaces.",
      image: "/images/blog/12.jpg",
      author: "Arcenik Team",
      date: "Dec 30, 2025",
      readTime: "11 min read",
      featured: false,
    },
    {
      slug: "custom-website-vs-template-2026",
      category: "Web Development",
      title: "Custom Website vs Template: Which Should You Choose in 2026?",
      description:
        "Honest comparison of custom-built websites vs templates. Cost, flexibility, time, and when each makes sense.",
      image: "/images/blog/13.jpg",
      author: "Arcenik Team",
      date: "Dec 28, 2025",
      readTime: "10 min read",
      featured: false,
    },
    {
      slug: "nextjs-vs-react-2026",
      category: "Web Development",
      title: "Next.js vs React: Which One to Choose in 2026?",
      description:
        "A comprehensive comparison of Next.js and React to help you decide the best framework for your next project.",
      image: "/images/blog/react1.png",
      author: "Arcenik Team",
      date: "Dec 25, 2025",
      readTime: "12 min read",
      featured: false,
    },
    {
      slug: "wordpress-security-guide-2026",
      category: "Web Development",
      title: "WordPress Security: Complete Guide to Protect Your Site in 2026",
      description:
        "Secure your WordPress website from hackers. Plugins, best practices, backups, and security measures every site needs.",
      image: "/images/blog/15.jpg",
      author: "Arcenik Team",
      date: "Dec 23, 2025",
      readTime: "13 min read",
      featured: false,
    },
    {
      slug: "top-javascript-frameworks-2026",
      category: "Web Development",
      title: "Top 10 JavaScript Frameworks in 2026: Complete Comparison",
      description:
        "Explore the most popular JavaScript frameworks developers are using. React, Vue, Angular, Svelte and more compared.",
      image: "/images/blog/16.jpg",
      author: "Arcenik Team",
      date: "Dec 22, 2025",
      readTime: "14 min read",
      featured: false,
    },
    {
      slug: "figma-tips-tricks-2026",
      category: "UI/UX Design",
      title: "25 Figma Tips That Will Speed Up Your Workflow in 2026",
      description:
        "Hidden Figma features, shortcuts, and plugins every designer should know to work 10x faster.",
      image: "/images/blog/17.jpg",
      author: "Arcenik Team",
      date: "Dec 20, 2025",
      readTime: "10 min read",
      featured: false,
    },
    {
      slug: "landing-page-design-best-practices-2026",
      category: "UI/UX Design",
      title:
        "Landing Page Design Best Practices: Convert More Visitors in 2026",
      description:
        "Design landing pages that convert. Psychology, layout, copywriting, and real examples of high-converting pages.",
      image: "/images/blog/18.jpg",
      author: "Arcenik Team",
      date: "Dec 18, 2025",
      readTime: "11 min read",
      featured: false,
    },
    {
      slug: "google-ads-guide-small-business-india-2026",
      category: "Marketing",
      title:
        "Google Ads for Small Business in India: Complete Beginner's Guide 2026",
      description:
        "Start advertising on Google. Campaign setup, keyword research, budgeting, and optimization tips for Indian businesses.",
      image: "/images/blog/19.jpg",
      author: "Arcenik Team",
      date: "Dec 15, 2025",
      readTime: "16 min read",
      featured: false,
    },
    {
      slug: "payment-gateway-integration-india-2026",
      category: "E-Commerce",
      title:
        "Payment Gateway Integration in India 2026: Razorpay, PayU, Cashfree Compared",
      description:
        "Choose the right payment gateway for your business. Pricing, features, integration difficulty, and India-specific considerations.",
      image: "/images/blog/20.jpg",
      author: "Arcenik Team",
      date: "Dec 12, 2025",
      readTime: "12 min read",
      featured: false,
    },
  ];

  // ============ FILTER BLOGS ============

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = blogs.filter((blog) => blog.featured);

  // ============ CLIENT CHECK ============
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ============ ANIMATIONS ============
  // ============ ANIMATIONS ============
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero Title Animation
        if (heroTitleRef.current) {
          const titleSplit = new SplitText(heroTitleRef.current, {
            type: "chars",
          });
          gsap.fromTo(
            titleSplit.chars,
            { filter: "blur(8px)", opacity: 0, yPercent: 50 },
            {
              delay: 0.2,
              opacity: 1,
              filter: "blur(0px)",
              yPercent: 0,
              stagger: 0.02,
              duration: 0.75,
              ease: "power1",
            }
          );
        }

        // Hero Description Animation
        if (heroDescRef.current) {
          gsap.to(heroDescRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.6,
          });
        }

        // ✅ FIX: Animate FEATURED cards separately (on page load, no scroll trigger)
        gsap.fromTo(
          ".blog-card-featured",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.8, // After hero animations
          }
        );

        // ✅ FIX: Animate only GRID cards (not featured) with scroll trigger
        if (blogsGridRef.current) {
          // Use querySelectorAll to scope to only cards inside the grid
          const gridCards = blogsGridRef.current.querySelectorAll(".blog-card");

          gsap.fromTo(
            gridCards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: blogsGridRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  return (
    <ReactLenis root>
      <section className="blogs-page">
        <div className="blogs-content">
          {/* ========== HERO SECTION ========== */}
          <div className="blogs-hero">
            <div className="blogs-hero-content">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <span className="small-description grey">Our Blog</span>
              </div>

              <h1
                className="headline white blogs-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Ideas & Insights
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                Expert tips, industry trends, and practical guides on web
                development, design, and growing your business online.
              </p>

              {/* Search Bar */}
              <div className="blogs-search">
                <Search className="blogs-search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="blogs-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* ========== FEATURED BLOGS ========== */}
          <div className="blogs-featured">
            <div className="blogs-section-header">
              <h2 className="small-subheadline white">Featured Articles</h2>
              <Link href="#all-blogs" className="blogs-view-all">
                <span className="small-description grey">View All</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="blogs-featured-grid">
              {featuredBlogs.map((blog, index) => (
                <Link
                  href={`/blogs/${blog.slug}`}
                  className={`blog-card blog-card-featured ${
                    index === 0 ? "blog-card-large" : ""
                  }`}
                  key={blog.slug}
                >
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                    <div className="blog-card-overlay">
                      <span className="description white">Read Article</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">
                        {blog.category}
                      </span>
                      <span className="blog-card-date">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="small-subheadline white blog-card-title">
                      {blog.title}
                    </h3>

                    <p className="description grey blog-card-description">
                      {blog.description}
                    </p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <User size={14} />
                        <span className="small-description grey">
                          {blog.author}
                        </span>
                      </div>
                      <div className="blog-card-readtime">
                        <Clock size={14} />
                        <span className="small-description grey">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ========== CATEGORY FILTERS ========== */}
          <div className="blogs-categories" id="all-blogs">
            <div className="blogs-categories-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`blogs-category-btn ${
                    activeCategory === category ? "blogs-category-active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  <span className="small-description">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ========== ALL BLOGS GRID ========== */}
          <div className="blogs-grid-section" ref={blogsGridRef}>
            <div className="blogs-grid">
              {filteredBlogs.map((blog) => (
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="blog-card"
                  key={blog.slug}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                    <div className="blog-card-overlay">
                      <span className="description white">Read Article</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">
                        {blog.category}
                      </span>
                      <span className="blog-card-date">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="small-subheadline white blog-card-title">
                      {blog.title}
                    </h3>

                    <p className="description grey blog-card-description">
                      {blog.description}
                    </p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <User size={14} />
                        <span className="small-description grey">
                          {blog.author}
                        </span>
                      </div>
                      <div className="blog-card-readtime">
                        <Clock size={14} />
                        <span className="small-description grey">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredBlogs.length === 0 && (
              <div className="blogs-no-results">
                <p className="description grey">
                  No articles found. Try a different search or category.
                </p>
              </div>
            )}
          </div>

          {/* ========== NEWSLETTER CTA ========== */}
          <div className="blogs-newsletter">
            <div className="blogs-newsletter-content">
              <h2 className="subheadline white">Stay Updated</h2>
              <p className="description grey">
                Subscribe to our newsletter for the latest insights, tips, and
                trends delivered straight to your inbox.
              </p>

              <div className="blogs-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="blogs-newsletter-input"
                />
                <button className="button blogs-newsletter-btn">
                  <div className="button-content">
                    <span className="small-description">Subscribe</span>
                    <span className="small-description">Subscribe</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};
