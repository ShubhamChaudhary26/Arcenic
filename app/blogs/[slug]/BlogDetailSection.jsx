"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "./blog-detail.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  Clock,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const BlogDetailSection = ({ blog, allBlogs }) => {
  const [isClient, setIsClient] = useState(false);
  const [copied, setCopied] = useState(false);

  // Refs
  const heroTitleRef = useRef();
  const heroDescRef = useRef();
  const contentRef = useRef();

  // Related blogs (same category, different slug)
  const relatedBlogs = allBlogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  // ============ SHARE FUNCTIONS ============
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://arceniktechnologies.com/blogs/${blog.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(blog.title)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  // ============ CLIENT CHECK ============
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ============ ANIMATIONS ============
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (heroTitleRef.current) {
          gsap.fromTo(
            heroTitleRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2,
              ease: "power2.out",
            }
          );
        }

        if (heroDescRef.current) {
          gsap.to(heroDescRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.4,
          });
        }

        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.6,
              ease: "power2.out",
            }
          );
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  // ============ CUSTOM COMPONENTS FOR SPECIAL CONTENT ============

  // Process custom HTML components from content
  const processContent = (content) => {
    return content;
  };

  return (
    <ReactLenis root>
      <article className="blog-detail-page">
        <div className="blog-detail-content">
          {/* ========== BACK BUTTON ========== */}
          <div className="blog-detail-back">
            <Link href="/blogs" className="blog-detail-back-link">
              <ArrowLeft size={20} />
              <span className="small-description white">Back to Blogs</span>
            </Link>
          </div>

          {/* ========== HERO SECTION ========== */}
          <header className="blog-detail-hero">
            <div className="blog-detail-hero-meta">
              <span className="blog-detail-category">{blog.category}</span>
              <span className="blog-detail-date">
                <Calendar size={16} />
                {blog.date}
              </span>
              <span className="blog-detail-readtime">
                <Clock size={16} />
                {blog.readTime}
              </span>
            </div>

            <h1
              className="headline white blog-detail-title"
              ref={heroTitleRef}
              style={{ opacity: isClient ? undefined : 1 }}
            >
              {blog.title}
            </h1>

            <p
              className="big-description grey blog-detail-description opacity-blur"
              ref={heroDescRef}
              style={{
                opacity: isClient ? undefined : 1,
                filter: isClient ? undefined : "none",
              }}
            >
              {blog.description}
            </p>

            {/* Author Info */}
            <div className="blog-detail-author">
              <div className="blog-detail-author-avatar">
                <img
                  src={blog.author.avatar || "/team/default-avatar.webp"}
                  alt={blog.author.name}
                />
              </div>
              <div className="blog-detail-author-info">
                <span className="small-description white">
                  {blog.author.name}
                </span>
                <span className="small-description grey">
                  {blog.author.role}
                </span>
              </div>
            </div>
          </header>

          {/* ========== FEATURED IMAGE ========== */}
          <div className="blog-detail-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          {/* ========== MAIN CONTENT ========== */}
          <div className="blog-detail-main">
            {/* Sidebar */}
            <aside className="blog-detail-sidebar">
              {/* Share */}
              <div className="blog-detail-share">
                <span className="small-description grey">Share Article</span>
                <div className="blog-detail-share-buttons">
                  <button
                    className="blog-detail-share-btn"
                    onClick={shareOnTwitter}
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button
                    className="blog-detail-share-btn"
                    onClick={shareOnLinkedIn}
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button
                    className="blog-detail-share-btn"
                    onClick={shareOnFacebook}
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  <button
                    className="blog-detail-share-btn"
                    onClick={handleCopyLink}
                    aria-label="Copy link"
                  >
                    <LinkIcon size={18} />
                  </button>
                </div>
                {copied && (
                  <span className="small-description grey blog-detail-copied">
                    Link copied!
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="blog-detail-tags">
                <span className="small-description grey">Tags</span>
                <div className="blog-detail-tags-list">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="blog-detail-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <div
              className="blog-detail-article"
              ref={contentRef}
              style={{ opacity: isClient ? undefined : 1 }}
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />
          </div>

          {/* ========== RELATED BLOGS ========== */}
          {relatedBlogs.length > 0 && (
            <div className="blog-detail-related">
              <div className="blog-detail-related-header">
                <h2 className="small-subheadline white">Related Articles</h2>
                <Link href="/blogs" className="blog-detail-view-all">
                  <span className="small-description grey">View All</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="blog-detail-related-grid">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    href={`/blogs/${relatedBlog.slug}`}
                    className="blog-detail-related-card"
                    key={relatedBlog.slug}
                  >
                    <div className="blog-detail-related-image">
                      <img src={relatedBlog.image} alt={relatedBlog.title} />
                    </div>
                    <div className="blog-detail-related-content">
                      <span className="small-description grey">
                        {relatedBlog.category}
                      </span>
                      <h3 className="description white">{relatedBlog.title}</h3>
                      <span className="small-description grey">
                        {relatedBlog.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ========== CTA SECTION ========== */}
          <div className="blog-detail-cta">
            <div className="blog-detail-cta-content">
              <h2 className="subheadline white">
                Need Help With Your Project?
              </h2>
              <p className="description grey">
                Let's discuss how we can bring your ideas to life. Free
                consultation included.
              </p>
              <Link href="/contact" className="button blog-detail-cta-btn">
                <div className="button-content">
                  <span className="small-description">Start Your Project</span>
                  <span className="small-description">Start Your Project</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </ReactLenis>
  );
};
