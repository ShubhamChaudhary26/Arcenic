"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Twitter } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const SectionFooter = () => {
  const topRef1 = useRef();
  const topRef2 = useRef();
  const topRef3 = useRef();
  const centerRef1 = useRef();
  const bottomRef1 = useRef();
  const bottomRef2 = useRef();

  const [isClient, setIsClient] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          topRef1.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: topRef1.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        gsap.fromTo(
          topRef2.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0.2,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: topRef1.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        gsap.fromTo(
          topRef3.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0.4,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: topRef1.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        gsap.fromTo(
          centerRef1.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: centerRef1.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        gsap.fromTo(
          bottomRef1.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: bottomRef1.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        gsap.fromTo(
          bottomRef2.current,
          { filter: "blur(8px)", opacity: 0 },
          {
            delay: 0.2,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger: bottomRef2.current,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & Description */}
        <div
          className="footer-content-left"
          ref={topRef1}
          style={{
            opacity: isClient ? undefined : 1,
            filter: isClient ? undefined : "none",
          }}
        >
          <Link href="/">
            <img
              src="/images/logo1.png"
              className="footer-logo"
              alt="Arcenik Logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <h2 className="description grey">Where vision meets web.</h2>
          <p className="description grey">
            We design and develop tailor-made web solutions that blend
            creativity, technology, and strategy to help brands stand out in the
            digital world.
          </p>
        </div>

        {/* Right Section - Links */}
        <div
          className="footer-content-right"
          ref={topRef2}
          style={{
            opacity: isClient ? undefined : 1,
            filter: isClient ? undefined : "none",
          }}
        >
          {/* Company Links */}
          <div className="footer-content-right-column">
            <h2 className="description white">Company</h2>
            <div className="footer-column-contents">
              <Link href="/" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">Home</p>
              </Link>
              <Link href="/about" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">About</p>
              </Link>
              <Link href="/works" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">Works</p>
              </Link>
              <Link href="/blogs" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">Blog</p>
              </Link>
              <Link href="/contact" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">Contact</p>
              </Link>
            </div>
          </div>

          {/* Services Links - ✅ NOW WITH PROPER <Link> TAGS! */}
          <div
            className="footer-content-right-column"
            ref={topRef3}
            style={{
              opacity: isClient ? undefined : 1,
              filter: isClient ? undefined : "none",
            }}
          >
            <h2 className="description white">Services</h2>
            <div className="footer-column-contents">
              <Link
                href="/services/web-development"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">
                  Web Development
                </p>
              </Link>
              <Link
                href="/services/ui-ux-design"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">UI/UX Design</p>
              </Link>
              <Link
                href="/services/e-commerce-solutions"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">E-Commerce</p>
              </Link>
              <Link
                href="/services/ai-calling-agent"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">
                  AI Calling Agent
                </p>
              </Link>
              <Link
                href="/services/ai-chatbot"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">AI Chatbot</p>
              </Link>
              <Link
                href="/services/branding-seo"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">
                  Branding & SEO
                </p>
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="footer-content-right-column">
            <h2 className="description white">Legal</h2>
            <div className="footer-column-contents">
              <Link href="/terms" className="footer-column-contents-item">
                <p className="description grey hover-text-grey">
                  Terms of Service
                </p>
              </Link>
              <Link
                href="/privacy-policy"
                className="footer-column-contents-item"
              >
                <p className="description grey hover-text-grey">
                  Privacy Policy
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-divider"
        ref={centerRef1}
        style={{
          opacity: isClient ? undefined : 1,
          filter: isClient ? undefined : "none",
        }}
      />

      <div className="footer-content-bottom">
        <p
          className="small-description grey"
          ref={bottomRef1}
          style={{
            opacity: isClient ? undefined : 1,
            filter: isClient ? undefined : "none",
          }}
        >
          © {currentYear} Arcenik Technologies. All Rights Reserved.
        </p>
        <div
          className="footer-socials"
          ref={bottomRef2}
          style={{
            opacity: isClient ? undefined : 1,
            filter: isClient ? undefined : "none",
          }}
        >
          <a
            href="https://www.instagram.com/arcenik_technologies/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <Instagram strokeWidth={1.25} className="footer-socials-icon" />
          </a>
          <a
            href="https://twitter.com/arcenik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter"
          >
            <Twitter strokeWidth={1.25} className="footer-socials-icon" />
          </a>
          <a
            href="https://in.linkedin.com/company/arcenik-technologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
          >
            <Linkedin strokeWidth={1.25} className="footer-socials-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
