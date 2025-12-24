"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "../industries-shared.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Hotel,
  Coffee,
  Calendar,
  Star,
  CreditCard,
  Users,
  Utensils,
  Smartphone,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Bell,
  BarChart3,
  Key,
  Wifi,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const HospitalitySection = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Refs
  const heroTitleRef = useRef();
  const heroDescRef = useRef();
  const challengesRef = useRef();
  const solutionsRef = useRef();
  const techRef = useRef();
  const projectsRef = useRef();
  const faqRef = useRef();

  // ============ HOSPITALITY-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: Calendar,
      title: "Booking Management",
      description:
        "Managing reservations across multiple channels (OTAs, website, phone) while preventing overbooking and maximizing occupancy.",
      impact: "30% revenue lost to poor booking management",
    },
    {
      icon: Star,
      title: "Guest Experience",
      description:
        "Meeting rising guest expectations for contactless check-in, personalized services, and seamless digital experiences.",
      impact: "86% pay more for better experience",
    },
    {
      icon: BarChart3,
      title: "Revenue Optimization",
      description:
        "Dynamic pricing, demand forecasting, and yield management require sophisticated algorithms and real-time market data.",
      impact: "20% revenue increase with smart pricing",
    },
    {
      icon: Users,
      title: "Staff Management",
      description:
        "Scheduling housekeeping, managing shifts, tracking performance, and ensuring service quality across departments.",
      impact: "40% of costs go to labor",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Hotel,
      title: "Property Management Systems",
      description:
        "Complete hotel PMS with reservations, front desk operations, housekeeping, billing, and guest management in one platform.",
      features: ["Multi-property", "Channel Manager", "Night Audit"],
    },
    {
      icon: Calendar,
      title: "Booking Engines",
      description:
        "Direct booking websites with real-time availability, dynamic pricing, promotional codes, and seamless payment integration.",
      features: ["Real-time Sync", "Dynamic Pricing", "Promo Codes"],
    },
    {
      icon: Utensils,
      title: "Restaurant POS Systems",
      description:
        "Complete restaurant management with table ordering, kitchen display, inventory tracking, and integrated billing.",
      features: ["Table Management", "Kitchen Display", "Inventory"],
    },
    {
      icon: Smartphone,
      title: "Guest Experience Apps",
      description:
        "Mobile apps for contactless check-in, room service ordering, concierge requests, and local recommendations.",
      features: ["Mobile Key", "Room Service", "Chat Support"],
    },
    {
      icon: BarChart3,
      title: "Revenue Management",
      description:
        "AI-powered pricing optimization, demand forecasting, competitor analysis, and yield management dashboards.",
      features: ["Dynamic Pricing", "Demand Forecast", "Competitor Intel"],
    },
    {
      icon: Bell,
      title: "Operations Management",
      description:
        "Housekeeping scheduling, maintenance tracking, staff management, and quality control automation.",
      features: ["Task Assignment", "Maintenance Logs", "Staff Scheduling"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Framework" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "Redis", logo: "/logos/redis.svg", category: "Cache" },
    { name: "Stripe", logo: "/logos/stripe.svg", category: "Payments" },
    { name: "Twilio", logo: "/logos/twilio.svg", category: "Communication" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Luxury Hotel Chain PMS",
      category: "Hospitality • Hotels",
      image: "/works/hospitality-hotel.webp",
      description:
        "Complete property management system for 50+ luxury hotels managing 10K+ rooms daily.",
      stats: ["50+ Properties", "10K+ Rooms", "99.9% Uptime"],
      tech: ["Next.js", "PostgreSQL", "Redis"],
      link: "/works/luxury-hotel-pms",
    },
    {
      title: "Restaurant Chain Platform",
      category: "Hospitality • F&B",
      image: "/works/hospitality-restaurant.webp",
      description:
        "Multi-outlet POS and management system for 200+ restaurant locations with centralized control.",
      stats: ["200+ Outlets", "₹50Cr+ Revenue", "1M+ Orders"],
      tech: ["React", "Node.js", "MongoDB"],
      link: "/works/restaurant-chain",
    },
    {
      title: "Hotel Booking Platform",
      category: "Hospitality • OTA",
      image: "/works/hospitality-booking.webp",
      description:
        "White-label booking engine integrated with 100+ channel partners and payment gateways.",
      stats: ["100+ Channels", "50K Bookings/mo", "₹100Cr GMV"],
      tech: ["Next.js", "Elasticsearch", "Stripe"],
      link: "/works/hotel-booking",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you integrate with OTAs like Booking.com and MakeMyTrip?",
      answer:
        "Yes. We have experience integrating with all major OTAs including Booking.com, Expedia, MakeMyTrip, Goibibo, and Agoda. We build channel managers that sync availability and rates in real-time across all platforms.",
    },
    {
      question: "Do you support multiple properties and chains?",
      answer:
        "Absolutely. Our solutions are built for scale - from single boutique hotels to chains with 100+ properties. We provide centralized dashboards, cross-property reporting, and role-based access for each location.",
    },
    {
      question: "Can you implement contactless check-in and mobile keys?",
      answer:
        "Yes. We implement mobile check-in/check-out, digital key integration with smart locks (Assa Abloy, Salto, etc.), ID verification, and digital registration cards. Guests can bypass the front desk entirely.",
    },
    {
      question: "How do you handle payment processing and billing?",
      answer:
        "We integrate with payment gateways like Razorpay, Stripe, and PayU for online payments. We also handle split billing, advance deposits, folio management, tax calculations, and GST-compliant invoicing.",
    },
    {
      question: "What's the typical timeline for a hotel PMS?",
      answer:
        "A basic PMS with reservations, front desk, and billing takes 10-12 weeks. Full-featured systems with channel management, revenue optimization, and guest apps take 16-20 weeks depending on integrations.",
    },
  ];

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
          const titleSplit = new SplitText(heroTitleRef.current, {
            type: "words,chars", // ← Both words and chars
            wordsClass: "split-word",
            charsClass: "split-char",
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

        if (heroDescRef.current) {
          gsap.to(heroDescRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.6,
          });
        }

        if (challengesRef.current) {
          gsap.fromTo(
            ".industry-challenge-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: challengesRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (solutionsRef.current) {
          gsap.fromTo(
            ".industry-solution-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: solutionsRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (techRef.current) {
          gsap.fromTo(
            ".industry-tech-item",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.05,
              duration: 0.5,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: techRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (projectsRef.current) {
          gsap.fromTo(
            ".industry-project-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: projectsRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (faqRef.current) {
          gsap.fromTo(
            ".industry-faq-item",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: faqRef.current,
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

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <ReactLenis root>
      <section className="industry-page">
        <div className="industry-content">
          {/* ========== HERO SECTION ========== */}
          <div className="industry-hero">
            <div className="industry-hero-content">
              <div className="industry-hero-badge">
                <Hotel className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Hospitality Technology
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Elevating Guest
                <br />
                Experiences Digitally.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From boutique hotels to restaurant chains, we build hospitality
                technology that delights guests, streamlines operations, and
                maximizes revenue. Trusted by India's leading hospitality
                brands.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Transform Your Property
                    </span>
                    <span className="small-description">
                      Transform Your Property
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">500+</span>
                    <span className="small-description grey">
                      Properties Managed
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">40+</span>
                    <span className="small-description grey">
                      Hospitality Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/hospitalit.jpeg"
                alt="Hospitality Software Development"
                className="industry-hero-image"
              />
              <div className="industry-hero-gradient" />
            </div>
          </div>

          {/* ========== INDUSTRY CHALLENGES ========== */}
          <div className="industry-challenges" ref={challengesRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <AlertCircle className="subheadline-box-icon" />
                <h2 className="small-description grey">Industry Challenges</h2>
              </div>
              <h2 className="subheadline white">Modern Hospitality Demands</h2>
              <p className="description grey">
                Today's guests expect seamless digital experiences while
                operators need efficient systems to manage complex operations.
              </p>
            </div>

            <div className="industry-challenges-grid">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    className="industry-challenge-card"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="industry-challenge-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="small-subheadline white">
                      {challenge.title}
                    </h3>
                    <p className="description grey">{challenge.description}</p>
                    <div className="industry-challenge-impact">
                      <TrendingUp size={14} />
                      <span className="small-description white">
                        {challenge.impact}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== OUR SOLUTIONS ========== */}
          <div className="industry-solutions" ref={solutionsRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Our Solutions</h2>
              </div>
              <h2 className="subheadline white">
                Hospitality Products We Build
              </h2>
              <p className="description grey">
                Complete technology solutions for hotels, restaurants, and
                hospitality chains.
              </p>
            </div>

            <div className="industry-solutions-grid">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    className="industry-solution-card"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="industry-solution-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="small-subheadline white">
                      {solution.title}
                    </h3>
                    <p className="description grey">{solution.description}</p>
                    <div className="industry-solution-features">
                      {solution.features.map((feature, idx) => (
                        <div className="industry-solution-tag" key={idx}>
                          <CheckCircle size={14} />
                          <span className="small-description white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== TECH STACK ========== */}
          <div className="industry-tech" ref={techRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Technology Stack</h2>
              </div>
              <h2 className="subheadline white">Hospitality Infrastructure</h2>
              <p className="description grey">
                Reliable technologies for 24/7 hospitality operations.
              </p>
            </div>

            <div className="industry-tech-grid">
              {techStack.map((tech, index) => (
                <div
                  className="industry-tech-item"
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="industry-tech-logo">
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                  <p className="small-description white">{tech.name}</p>
                  <p className="small-description grey">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== CASE STUDIES ========== */}
          {/* <div className="industry-projects" ref={projectsRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Case Studies</h2>
              </div>
              <h2 className="subheadline white">Hospitality Success Stories</h2>
              <p className="description grey">
                Hotels and restaurants transforming with our technology.
              </p>
            </div>

            <div className="industry-projects-grid">
              {caseStudies.map((project, index) => (
                <Link
                  href={project.link}
                  className="industry-project-card"
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="industry-project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="industry-project-overlay">
                      <span className="description white">View Case Study</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="industry-project-content">
                    <span className="small-description grey">
                      {project.category}
                    </span>
                    <h3 className="small-subheadline white">{project.title}</h3>
                    <p className="description grey">{project.description}</p>

                    <div className="industry-project-tech">
                      {project.stats.map((stat, idx) => (
                        <span
                          className="industry-project-tag"
                          key={idx}
                          style={{
                            background: "rgba(34, 197, 94, 0.1)",
                            borderColor: "rgba(34, 197, 94, 0.3)",
                          }}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    <div className="industry-project-tech">
                      {project.tech.map((tech, idx) => (
                        <span className="industry-project-tag" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="industry-projects-cta">
              <Link href="/works?industry=hospitality" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Hospitality Projects
                  </span>
                  <span className="small-description">
                    View All Hospitality Projects
                  </span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
            </div>
          </div> */}

          {/* ========== FAQ ========== */}
          <div className="industry-faq" ref={faqRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">FAQs</h2>
              </div>
              <h2 className="subheadline white">Common Questions</h2>
              <p className="description grey">
                Everything about hospitality software development.
              </p>
            </div>

            <div className="industry-faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`industry-faq-item ${
                    expandedFaq === index ? "industry-faq-item-expanded" : ""
                  }`}
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <button
                    className="industry-faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="industry-faq-number">0{index + 1}</span>
                    <span className="industry-faq-question description white">
                      {faq.question}
                    </span>
                    <span className="industry-faq-icon">
                      {expandedFaq === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`industry-faq-content ${
                      expandedFaq === index
                        ? "industry-faq-content-expanded"
                        : ""
                    }`}
                  >
                    <div className="industry-faq-inner">
                      <p className="description grey">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== CTA ========== */}
          <div className="industry-cta">
            <div className="industry-cta-content">
              <h2 className="subheadline white">
                Ready to Elevate Your Guest Experience?
              </h2>
              <p className="description grey">
                Let's build hospitality technology that delights guests and
                streamlines your operations. Free consultation included.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Hospitality Project
                    </span>
                    <span className="small-description">
                      Start Your Hospitality Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Hotel size={20} />
                    <span className="small-description white">
                      500+ Properties
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <Star size={20} />
                    <span className="small-description white">
                      4.9 Guest Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};
