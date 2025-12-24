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
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  BarChart3,
  Store,
  Tag,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Search,
  RefreshCw,
  Globe,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const ECommerceSection = () => {
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

  // ============ E-COMMERCE-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: ShoppingCart,
      title: "Cart Abandonment",
      description:
        "70% of shoppers abandon carts. Optimized checkout flows, multiple payment options, and retargeting are critical for conversion.",
      impact: "70% average cart abandonment rate",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time inventory sync across channels, automated reordering, and warehouse management are essential for operations.",
      impact: "30% revenue loss from stockouts",
    },
    {
      icon: Truck,
      title: "Logistics & Fulfillment",
      description:
        "Complex shipping calculations, multi-courier integration, and real-time tracking expectations require robust systems.",
      impact: "85% expect order tracking",
    },
    {
      icon: Users,
      title: "Customer Retention",
      description:
        "Building loyalty requires personalized experiences, recommendation engines, and seamless omnichannel engagement.",
      impact: "5x cheaper to retain than acquire",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Store,
      title: "Online Store Development",
      description:
        "Custom e-commerce stores with advanced product catalogs, smart search, personalized recommendations, and conversion optimization.",
      features: ["Product Management", "Smart Search", "One-Click Checkout"],
    },
    {
      icon: Globe,
      title: "Multi-Vendor Marketplaces",
      description:
        "Build the next Amazon or Flipkart with vendor onboarding, commission management, and automated payouts.",
      features: ["Vendor Dashboard", "Commission Engine", "Dispute Management"],
    },
    {
      icon: Package,
      title: "Headless Commerce",
      description:
        "API-first commerce platforms enabling omnichannel selling across web, mobile, social, and voice interfaces.",
      features: ["API-First", "Omnichannel", "PWA Support"],
    },
    {
      icon: RefreshCw,
      title: "Subscription Commerce",
      description:
        "Recurring revenue models with subscription management, automated billing, and customer retention tools.",
      features: ["Recurring Billing", "Subscription Box", "Churn Prevention"],
    },
    {
      icon: Tag,
      title: "B2B E-Commerce",
      description:
        "Wholesale platforms with bulk ordering, custom pricing, quote management, and purchase order workflows.",
      features: ["Bulk Orders", "Custom Pricing", "Net Terms"],
    },
    {
      icon: BarChart3,
      title: "Commerce Analytics",
      description:
        "Advanced analytics dashboards tracking sales, inventory, customer behavior, and predictive insights.",
      features: ["Sales Analytics", "Customer LTV", "Demand Forecasting"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Framework" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "Shopify", logo: "/logos/shopify.svg", category: "Platform" },
    { name: "Stripe", logo: "/logos/stripe.svg", category: "Payments" },
    { name: "Redis", logo: "/logos/redis.svg", category: "Cache" },
    {
      name: "Elasticsearch",
      logo: "/logos/elasticsearch.svg",
      category: "Search",
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Fashion Marketplace",
      category: "E-Commerce • Fashion",
      image: "/works/ecommerce-fashion.webp",
      description:
        "Multi-brand fashion marketplace with 10K+ sellers and ₹100Cr+ GMV.",
      stats: ["10K+ Sellers", "₹100Cr GMV", "2M+ Products"],
      tech: ["Next.js", "PostgreSQL", "Elasticsearch"],
      link: "/works/fashion-marketplace",
    },
    {
      title: "D2C Beauty Brand",
      category: "E-Commerce • Beauty",
      image: "/works/ecommerce-beauty.webp",
      description:
        "Direct-to-consumer beauty platform with AR try-on and subscription model.",
      stats: ["500K+ Users", "40% Repeat Rate", "₹50Cr ARR"],
      tech: ["React", "Shopify Plus", "AR.js"],
      link: "/works/beauty-brand",
    },
    {
      title: "Grocery Delivery App",
      category: "E-Commerce • Quick Commerce",
      image: "/works/ecommerce-grocery.webp",
      description:
        "10-minute grocery delivery app serving 50K+ daily orders across 10 cities.",
      stats: ["50K Daily Orders", "10min Delivery", "95% SLA"],
      tech: ["React Native", "Node.js", "Redis"],
      link: "/works/grocery-delivery",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you integrate with existing ERP and inventory systems?",
      answer:
        "Yes. We have extensive experience integrating with SAP, Oracle, Tally, and custom ERP systems. We build real-time sync mechanisms for inventory, orders, and customer data across all your systems.",
    },
    {
      question: "Do you support multiple payment gateways and methods?",
      answer:
        "Absolutely. We integrate Razorpay, PayU, Stripe, PayPal, and bank transfers. We also support UPI, wallets, EMI options, BNPL (Buy Now Pay Later), and international payment methods.",
    },
    {
      question: "Can you build recommendation engines and personalization?",
      answer:
        "Yes. We implement AI-powered recommendation engines using collaborative filtering, content-based filtering, and hybrid approaches. We also build personalized search, dynamic pricing, and targeted promotions.",
    },
    {
      question: "How do you handle high-traffic sales and flash sales?",
      answer:
        "We design for scale using auto-scaling infrastructure, CDN caching, queue management for orders, rate limiting, and database optimization. Our platforms handle 100K+ concurrent users during sales.",
    },
    {
      question: "What's the typical timeline for an e-commerce platform?",
      answer:
        "A basic online store with payment integration takes 8-10 weeks. Multi-vendor marketplaces take 12-16 weeks. Enterprise platforms with ERP integration and custom features take 16-24 weeks.",
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
                <ShoppingCart className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  E-Commerce Solutions
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Commerce That
                <br />
                Truly & Converts.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From D2C brands to multi-vendor marketplaces, we build
                e-commerce platforms that drive sales, delight customers, and
                scale seamlessly. Trusted by 100+ online brands.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Launch Your Online Store
                    </span>
                    <span className="small-description">
                      Launch Your Online Store
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">₹500Cr+</span>
                    <span className="small-description grey">
                      GMV Processed
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">100+</span>
                    <span className="small-description grey">
                      E-Commerce Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/ecommerc.jpeg"
                alt="E-Commerce Development"
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
                E-Commerce Competition is Fierce
              </h2>
              <p className="description grey">
                Success in e-commerce requires solving complex challenges around
                conversion, fulfillment, and customer retention.
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
                E-Commerce Products We Build
              </h2>
              <p className="description grey">
                Complete commerce solutions from storefront to fulfillment,
                built to convert visitors and scale with growth.
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
              <h2 className="subheadline white">Commerce Infrastructure</h2>
              <p className="description grey">
                Modern tech stack for building fast, scalable e-commerce
                platforms.
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
              <h2 className="subheadline white">E-Commerce Success Stories</h2>
              <p className="description grey">
                Online brands and marketplaces scaling with our technology.
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
              <Link href="/works?industry=e-commerce" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All E-Commerce Projects
                  </span>
                  <span className="small-description">
                    View All E-Commerce Projects
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
                Everything about e-commerce development.
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
                Ready to Launch Your E-Commerce Empire?
              </h2>
              <p className="description grey">
                Let's build an online platform that drives sales, delights
                customers, and scales with your ambitions. Free consultation.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your E-Commerce Project
                    </span>
                    <span className="small-description">
                      Start Your E-Commerce Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Package size={20} />
                    <span className="small-description white">
                      5M+ Orders Processed
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">₹500Cr+ GMV</span>
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
