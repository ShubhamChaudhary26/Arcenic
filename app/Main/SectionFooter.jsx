"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Twitter } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const SectionFooter = () => {
  const router = useRouter();

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

  // Navigation handler
  const handleNavigate = (path) => {
    router.push(path);
  };

  // Social links handler
  const handleSocialClick = (platform) => {
    const urls = {
      instagram: "https://instagram.com/arceniktechnologies",
      twitter: "https://twitter.com/arceniktechnologies",
      linkedin: "https://linkedin.com/company/arceniktechnologies",
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

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
          <img
            src="/images/logo1.png"
            className="footer-logo"
            alt="Arcenik Logo"
            onClick={() => handleNavigate("/")}
            style={{ cursor: "pointer" }}
          />
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
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/")}
              >
                <p className="description grey hover-text-grey">Home</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/about")}
              >
                <p className="description grey hover-text-grey">About</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/services")}
              >
                <p className="description grey hover-text-grey">Services</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/works")}
              >
                <p className="description grey hover-text-grey">Works</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/blog")}
              >
                <p className="description grey hover-text-grey">Blog</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/contact")}
              >
                <p className="description grey hover-text-grey">Contact</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
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
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/services/web-development")}
              >
                <p className="description grey hover-text-grey">
                  Web Development
                </p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/services/ui-ux-design")}
              >
                <p className="description grey hover-text-grey">UI/UX Design</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/services/e-commerce-solutions")}
              >
                <p className="description grey hover-text-grey">E-Commerce</p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/services/branding-seo")}
              >
                <p className="description grey hover-text-grey">
                  Branding & SEO
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="footer-content-right-column">
            <h2 className="description white">Legal</h2>
            <div className="footer-column-contents">
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/terms")}
              >
                <p className="description grey hover-text-grey">
                  Terms of Service
                </p>
              </div>
              <div
                className="footer-column-contents-item"
                onClick={() => handleNavigate("/privacy-policy")}
              >
                <p className="description grey hover-text-grey">
                  Privacy Policy
                </p>
              </div>
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
          <Instagram
            strokeWidth={1.25}
            className="footer-socials-icon"
            aria-label="Visit our Instagram"
            onClick={() => handleSocialClick("instagram")}
          />
          <Twitter
            strokeWidth={1.25}
            className="footer-socials-icon"
            aria-label="Visit our Twitter"
            onClick={() => handleSocialClick("twitter")}
          />
          <Linkedin
            strokeWidth={1.25}
            className="footer-socials-icon"
            aria-label="Visit our LinkedIn"
            onClick={() => handleSocialClick("linkedin")}
          />
        </div>
      </div>
    </footer>
  );
};
