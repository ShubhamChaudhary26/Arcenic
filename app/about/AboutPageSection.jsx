"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Users,
  Award,
  Rocket,
  Target,
  MessageSquare,
  Zap,
  Code,
  Headphones,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);
}

export const AboutPageSection = () => {
  const [isClient, setIsClient] = useState(false);

  const titleRef = useRef();
  const titleRef2 = useRef();
  const storyRef = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const statsRef = useRef();
  const guidesRef = useRef();
  const stickyRefs = useRef([]);

  // UPDATED SERVICES CONTENT
  const services = [
    {
      title: "Website Development",
      shortDesc: "Fast, Modern & SEO-Ready",
      description:
        "We don't just use templates. We build custom, high-performance websites using Next.js that rank high on Google and convert visitors into customers. Perfect for brands that want to stand out, not blend in.",
      image: "/images/macbook.webp",
      link: "/services/web-development",
    },
    {
      title: "UI/UX Design",
      shortDesc: "Design That Makes Sense",
      description:
        "Pretty isn't enough. We design interfaces that are easy to use and intuitive. We focus on how your users think and behave, creating experiences that feel natural and frictionless.",
      image: "/images/iphoneoptimized.webp",
      link: "/services/ui-ux-design",
    },
    {
      title: "E-Commerce Solutions",
      shortDesc: "Stores Built to Sell",
      description:
        "From simple shops to complex marketplaces. We build scalable e-commerce platforms with secure payments, inventory tracking, and smooth checkout flows that maximize your sales.",
      image: "/casestudy/cs2.webp",
      link: "/services/e-commerce-solutions",
    },
    {
      title: "Branding & SEO",
      shortDesc: "Be Seen, Be Remembered",
      description:
        "A logo is just the start. We build complete brand identities and back them with data-driven SEO strategies. We ensure you look professional and get found by the right people.",
      image: "/images/test17.webp",
      link: "/services/branding-seo",
    },
    {
      title: "Custom CRM Systems",
      shortDesc: "Organize Your Customer Data",
      description:
        "Stop using spreadsheets to manage clients. Our custom CRMs are built for your specific workflow—automating follow-ups, tracking leads, and giving you a clear view of your sales pipeline.",
      image: "/images/CRM.webp",
      link: "/services/crm-solutions",
    },
    {
      title: "ERP Solutions",
      shortDesc: "Run Your Entire Business",
      description:
        "Finance, HR, Inventory, Operations—all in one place. We build custom ERPs that connect every part of your business, eliminating data silos and manual entry errors.",
      image: "/images/ERP.webp",
      link: "/services/erp-systems",
    },
    {
      title: "Graphic Design",
      shortDesc: "Visuals That Communicate",
      description:
        "Consistent, professional visuals across every touchpoint. From social media assets to marketing materials, we ensure your brand looks cohesive and premium everywhere.",
      image: "/images/GD.webp",
      link: "/services/graphic-design",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "20+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Target },
    { number: "24/7", label: "Support Available", icon: Headphones },
  ];

  // UPDATED GUIDES CONTENT
  const guides = [
    {
      icon: MessageSquare,
      title: "Simple by Design",
      description:
        "We skip the jargon. We explain technical concepts in plain English so you always know exactly what you're paying for.",
    },
    {
      icon: Zap,
      title: "Built to Work",
      description:
        "We prioritize utility over vanity. Every feature we build solves a specific business problem or saves you time.",
    },
    {
      icon: Code,
      title: "Future-Ready Tech",
      description:
        "We build on modern stacks like React and Next.js, ensuring your software is fast, secure, and easy to scale as you grow.",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero animations
        if (titleRef.current) {
          const titleSplit = new SplitText(titleRef.current, { type: "chars" });
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

        if (descriptionRef.current) {
          gsap.to(descriptionRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.6,
          });
        }

        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { opacity: 0, filter: "blur(8px)" },
            { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
          );
        }

        // Story section animation
        if (storyRef.current) {
          gsap.fromTo(
            ".about-story-content",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: storyRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // Stats animation
        gsap.fromTo(
          ".about-stats-item",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        if (titleRef2.current) {
          const titleSplit2 = new SplitText(titleRef2.current, {
            type: "words",
          });
          gsap.fromTo(
            titleSplit2.words,
            { opacity: 0, filter: "blur(8px)" },
            {
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.025,
              ease: "sine",
              scrollTrigger: {
                trigger: titleRef2.current,
                start: "top 95%",
                end: "bottom center",
                scrub: true,
              },
            }
          );
        }

        // Guides section animation
        if (guidesRef.current) {
          gsap.fromTo(
            ".about-guides-item",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: guidesRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // Sticky services animation
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
          stickyRefs.current.forEach((ref, position) => {
            if (!ref) return;
            const isLast = position === stickyRefs.current.length - 1;
            gsap.set(ref, { willChange: "transform, filter" });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ref,
                  start: "center center",
                  end: "350%",
                  scrub: 1,
                },
              })
              .to(ref, {
                ease: "none",
                filter: isLast ? "blur(0px)" : "blur(3px)",
                scale: isLast ? 1 : 0.55,
                yPercent: isLast ? 0 : -45,
              });
          });
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          {/* ========== HERO SECTION ========== */}
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />
                <h1
                  className="headline white about-main-title"
                  ref={titleRef}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  Smart Digital Solutions for <br /> Growing Businesses
                </h1>
              </div>
              <p
                className="description grey opacity-blur"
                ref={descriptionRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                We help businesses move from manual chaos to digital clarity.
                From custom software to high-performance websites, we build
                tools that actually save you time.
              </p>
            </div>
            <div
              className="about-divider"
              ref={lineRef}
              style={{ opacity: isClient ? undefined : 1 }}
            />
          </div>
          {/* ========== STATS SECTION ========== */}
          <div className="about-stats-wrapper" ref={statsRef}>
            <div className="about-stats">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    className="about-stats-item"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="about-stats-number">{stat.number}</div>
                    <div className="about-stats-label">{stat.label}</div>
                    <div className="about-stats-icon-bg">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ========== ORIGIN STORY ========== */}
          <div className="about-story" ref={storyRef}>
            <div className="about-story-content">
              <h2 className="subheadline white about-story-title">
                How It Started
              </h2>
              <div className="about-story-text">
                <p className="description grey">
                  In 2022, we took on our first project - a gym management
                  system for a local fitness center. They were managing
                  memberships, payments, and attendance manually through
                  spreadsheets and paper forms.
                </p>
                <p className="description grey">
                  The system we built automated their entire workflow. Member
                  registration, payment tracking, and attendance monitoring
                  became digital. What previously took hours now happened in
                  minutes.
                </p>
                <p className="description grey">
                  This project revealed a pattern: many businesses were trapped
                  in outdated processes, not because they chose to, but because
                  accessible solutions didn't exist.
                </p>
                <p
                  className="description white"
                  style={{
                    fontSize: "1.25vw",
                    marginTop: "2vh",
                    fontWeight: "500",
                  }}
                >
                  That's why Arcenik exists - to make digital transformation
                  accessible for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>

          <div className="about-divider" />

          {/* ========== WHY CHOOSE US ========== */}
          <div className="about-whyus">
            <h2 className="description about-whyus-description grey">
              Why Choose Us
            </h2>
            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
              style={{ opacity: isClient ? undefined : 1 }}
            >
              We don't believe in one-size-fits-all. We blend creativity with
              technical expertise to build digital products that solve real
              problems and drive measurable growth.
            </p>
          </div>

          <div className="about-divider" />

          {/* ========== WHAT GUIDES OUR WORK ========== */}
          <div className="about-guides" ref={guidesRef}>
            <div className="about-section-header">
              <h2 className="subheadline white">What Guides Our Work</h2>
            </div>
            <div className="about-guides-grid">
              {guides.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    className="about-guides-item"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="about-guides-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="small-subheadline white">{item.title}</h3>
                    <p className="description grey">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-divider" />

          {/* ========== SERVICES - UPDATED WITH BUTTONS ========== */}
          <div className="about-section-header">
            <h2 className="subheadline white">What We Build</h2>
            <p className="description grey">
              Custom solutions tailored to your business needs
            </p>
          </div>

          <div className="about-sticky-container">
            {services.map((service, index) => (
              <div
                className="about-sticky-item"
                key={index}
                ref={(el) => (stickyRefs.current[index] = el)}
              >
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <div className="about-service-badge">
                      <span className="small-description grey">
                        {service.shortDesc}
                      </span>
                    </div>
                    <h2 className="headline white about-sticky-headline">
                      {service.title}
                    </h2>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="button about-service-button"
                    >
                      <div className="button-content">
                        <span className="small-description">Learn More</span>
                        <span className="small-description">Learn More</span>
                      </div>
                      <div className="button-circle">
                        <ArrowUpRight className="button-icon" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <img
                      src={service.image}
                      className="about-sticky-item-right-image"
                      alt={`${service.title} - Arcenik service`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========== CTA SECTION ========== */}
          <div className="about-cta">
            <div className="about-cta-text">
              <h2 className="subheadline white">
                Ready to Digitize Your Business?
              </h2>
              <p className="description grey" style={{ marginTop: "2vh" }}>
                Whether you need a full system overhaul or a modern website,
                let's talk about how we can make your business run smoother.
              </p>
            </div>
            <div className="about-cta-actions">
              <a href="/contact" className="button about-cta-button">
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </a>
              <a href="/works" className="about-cta-link">
                <span className="description white">View Our Work</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};
