"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "../industries-shared.css"; // ← Industries ka CSS
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Home,
  MapPin,
  Building,
  Key,
  Camera,
  BarChart3,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Search,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const RealEstateSection = () => {
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

  // ============ REAL ESTATE-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: Search,
      title: "Property Discovery",
      description:
        "Buyers struggle to find properties matching their exact needs. Advanced search filters, map-based discovery, and AI recommendations are essential.",
      impact: "85% buyers start property search online",
    },
    {
      icon: Camera,
      title: "Virtual Property Tours",
      description:
        "Physical site visits are time-consuming and limited by geography. Virtual 3D tours and AR visualization are becoming mandatory.",
      impact: "3x higher engagement with virtual tours",
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Real estate involves complex paperwork. Digital document management, e-signatures, and automated workflows are critical for efficiency.",
      impact: "40% deals delayed due to paperwork",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description:
        "Accurate property valuation and market trends analysis require real-time data aggregation and predictive analytics.",
      impact: "₹2L+ saved with accurate valuations",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Home,
      title: "Property Listing Platforms",
      description:
        "Feature-rich portals with advanced search, map integration, property comparison, and lead management for agents.",
      features: ["Advanced Filters", "Map Search", "Lead Capture"],
    },
    {
      icon: Camera,
      title: "Virtual Tour Solutions",
      description:
        "360° virtual tours, 3D walkthroughs, AR furniture placement, and drone photography integration for immersive experiences.",
      features: ["3D Tours", "AR Visualization", "Drone Integration"],
    },
    {
      icon: Users,
      title: "Broker CRM Systems",
      description:
        "Complete CRM for real estate agents with lead management, property inventory, commission tracking, and automated follow-ups.",
      features: ["Lead Scoring", "Pipeline Management", "Commission Tracking"],
    },
    {
      icon: Building,
      title: "Property Management",
      description:
        "End-to-end solutions for property managers covering tenant management, maintenance requests, rent collection, and accounting.",
      features: ["Tenant Portal", "Maintenance Tracking", "Online Payments"],
    },
    {
      icon: DollarSign,
      title: "Real Estate Investment",
      description:
        "Platforms for REITs, crowdfunding, and fractional ownership with investor dashboards, returns tracking, and compliance.",
      features: ["Fractional Ownership", "ROI Analytics", "KYC Integration"],
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description:
        "AI-powered location analytics providing insights on amenities, connectivity, price trends, and investment potential.",
      features: ["Heat Maps", "Price Predictions", "Neighborhood Score"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Framework" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "Mapbox", logo: "/logos/mapbox.svg", category: "Maps" },
    { name: "Matterport", logo: "/logos/matterport.webp", category: "3D Tours" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
    { name: "Stripe", logo: "/logos/stripe.svg", category: "Payments" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "99acres Clone Platform",
      category: "Real Estate • Portal",
      image: "/works/realestate-portal.webp",
      description:
        "Property listing platform with 1M+ properties and 50K+ daily active users.",
      stats: ["1M+ Properties", "50K DAU", "₹500Cr+ GMV"],
      tech: ["Next.js", "PostgreSQL", "Elasticsearch"],
      link: "/works/property-portal",
    },
    {
      title: "Virtual Tour Platform",
      category: "Real Estate • PropTech",
      image: "/works/realestate-virtual.webp",
      description:
        "3D virtual tour platform used by 500+ builders for project showcasing.",
      stats: ["500+ Builders", "10K+ Tours", "3x Conversion"],
      tech: ["Three.js", "Matterport", "AWS"],
      link: "/works/virtual-tours",
    },
    {
      title: "Broker Management CRM",
      category: "Real Estate • SaaS",
      image: "/works/realestate-crm.webp",
      description:
        "Complete CRM solution for real estate agencies managing 10K+ agents.",
      stats: ["10K+ Agents", "100K+ Leads", "2x Productivity"],
      tech: ["React", "Node.js", "MongoDB"],
      link: "/works/broker-crm",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you integrate MLS and property data feeds?",
      answer:
        "Yes. We have experience integrating with MLS systems, property aggregators like MagicBricks API, government land records, and custom XML/JSON feeds. We can also build web scrapers for public property data.",
    },
    {
      question: "How do you handle virtual tours and 3D visualization?",
      answer:
        "We integrate with Matterport for professional 3D tours, build custom 360° viewers using Three.js, implement AR for furniture placement using ARCore/ARKit, and support drone photography integration.",
    },
    {
      question: "Can you build property valuation and price prediction models?",
      answer:
        "Absolutely. We use machine learning models trained on historical sales data, location factors, amenities, and market trends to provide accurate property valuations and price predictions.",
    },
    {
      question: "Do you provide location-based search and map integration?",
      answer:
        "Yes. We implement advanced map search using Mapbox/Google Maps, polygon search for drawing custom areas, nearby amenities display, commute time calculations, and heat maps for price/demand visualization.",
    },
    {
      question: "What's the typical timeline for a property listing platform?",
      answer:
        "A basic property portal with listings, search, and agent dashboard takes 10-12 weeks. Advanced features like virtual tours, CRM integration, and analytics add 4-6 weeks more.",
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
                <Home className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Property Technology
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Revolutionizing
                <br />
                Real Estate Tech.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From property discovery to virtual tours, we build technology
                that transforms how people buy, sell, and manage real estate.
                Trusted by India's leading property platforms.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Build Your Property Platform
                    </span>
                    <span className="small-description">
                      Build Your Property Platform
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">₹1000Cr+</span>
                    <span className="small-description grey">
                      Property Value Listed
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">25+</span>
                    <span className="small-description grey">
                      PropTech Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/realstate.jpeg"
                alt="Real Estate Software Development"
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
              <h2 className="subheadline white">
                Real Estate Digital Transformation
              </h2>
              <p className="description grey">
                The property market demands innovative solutions for discovery,
                visualization, and transaction management.
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
              <h2 className="subheadline white">PropTech Products We Build</h2>
              <p className="description grey">
                Complete real estate technology solutions for buyers, sellers,
                agents, and property managers.
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
              <h2 className="subheadline white">PropTech Infrastructure</h2>
              <p className="description grey">
                Modern technologies for building scalable real estate platforms.
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
              <h2 className="subheadline white">Real Estate Success Stories</h2>
              <p className="description grey">
                PropTech platforms transforming India's real estate market.
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
              <Link href="/works?industry=real-estate" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Real Estate Projects
                  </span>
                  <span className="small-description">
                    View All Real Estate Projects
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
                Everything about real estate software development.
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
                Ready to Build Your PropTech Platform?
              </h2>
              <p className="description grey">
                Let's create innovative real estate solutions that transform
                property buying and selling experiences. Free consultation.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Real Estate Project
                    </span>
                    <span className="small-description">
                      Start Your Real Estate Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Building size={20} />
                    <span className="small-description white">
                      1M+ Properties Listed
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      ₹1000Cr+ GMV
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
