"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "../services-shared.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Sparkles,
  Search,
  TrendingUp,
  Target,
  PenTool,
  BarChart3,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Users,
  Award,
  Eye,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const BrandingSEOSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Refs
  const heroTitleRef = useRef();
  const heroDescRef = useRef();
  const featuresRef = useRef();
  const processRef = useRef();
  const techRef = useRef();
  const projectsRef = useRef();
  const faqRef = useRef();

  // ============ DATA ============

  const features = [
    {
      icon: Sparkles,
      title: "Brand Identity Design",
      description:
        "Complete brand identity systems including logo, color palette, typography, and brand guidelines that make you unforgettable.",
      highlights: ["Logo Design", "Color System", "Brand Guidelines"],
    },
    {
      icon: PenTool,
      title: "Visual Branding",
      description:
        "Business cards, letterheads, social media templates, and marketing materials that maintain brand consistency.",
      highlights: ["Business Cards", "Templates", "Marketing Materials"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Complete on-page and off-page SEO to rank #1 on Google. Keyword research, content optimization, and link building.",
      highlights: ["Keyword Research", "On-Page SEO", "Link Building"],
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description:
        "SEO-optimized content that ranks and converts. Blog posts, landing pages, and website copy that drive traffic.",
      highlights: ["Blog Writing", "SEO Content", "Copywriting"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Monthly SEO reports with keyword rankings, traffic growth, and actionable insights to improve performance.",
      highlights: [
        "Traffic Reports",
        "Keyword Tracking",
        "Competitor Analysis",
      ],
    },
    {
      icon: Target,
      title: "Local SEO",
      description:
        "Dominate local search results with Google My Business optimization, local citations, and review management.",
      highlights: [
        "Google My Business",
        "Local Citations",
        "Review Management",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Brand Discovery & Audit",
      description:
        "Understanding your business, target audience, competitors, and current brand position to create a winning strategy.",
      duration: "3-5 days",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description:
        "Creating brand identity and SEO strategy. Logo concepts, brand guidelines, and keyword research.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Applying branding across all touchpoints and implementing SEO optimizations on your website.",
      duration: "2-3 weeks",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "Continuous optimization based on performance data. Content creation, link building, and brand refinement.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    { name: "Illustrator", logo: "/logos/illustrator.svg", category: "Design" },
    { name: "Photoshop", logo: "/logos/photoshop.svg", category: "Design" },
    { name: "Figma", logo: "/logos/figma.svg", category: "Design" },
    { name: "Ahrefs", logo: "/logos/ahrefs.svg", category: "SEO" },
    { name: "SEMrush", logo: "/logos/semrush.svg", category: "SEO" },
    {
      name: "Google Analytics",
      logo: "/logos/analytics.svg",
      category: "Analytics",
    },
    {
      name: "Search Console",
      logo: "/logos/searchconsole.svg",
      category: "SEO",
    },
    { name: "Hotjar", logo: "/logos/hotjar.svg", category: "Analytics" },
  ];

  const relatedProjects = [
    {
      title: "Tech Startup Rebrand",
      category: "Brand Identity",
      image: "/works/startup-brand.webp",
      description:
        "Complete rebrand with logo, guidelines, and marketing materials.",
      tech: ["Logo Design", "Brand Guidelines", "Templates"],
      link: "/works/tech-startup-rebrand",
    },
    {
      title: "Restaurant SEO Campaign",
      category: "Local SEO",
      image: "/works/restaurant-seo.webp",
      description:
        "Ranked #1 for 15 local keywords, 300% increase in foot traffic.",
      tech: ["Local SEO", "Google My Business", "Reviews"],
      link: "/works/restaurant-seo",
    },
    {
      title: "E-Commerce SEO Growth",
      category: "Technical SEO",
      image: "/works/ecommerce-seo.webp",
      description:
        "10x organic traffic growth in 6 months with content strategy.",
      tech: ["Technical SEO", "Content", "Link Building"],
      link: "/works/ecommerce-seo",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. You'll start seeing improvements in 2-3 months, with significant results in 4-6 months. We provide monthly reports showing progress in rankings, traffic, and conversions. Quick wins like technical fixes show results faster.",
    },
    {
      question: "What's included in a brand identity package?",
      answer:
        "Our brand identity package includes logo design (with variations), color palette, typography system, brand guidelines document, business card design, letterhead, and social media templates. You get all source files and unlimited revisions during the design phase.",
    },
    {
      question: "Do you guarantee #1 ranking on Google?",
      answer:
        "We can't guarantee specific rankings (no honest SEO company can), but we guarantee significant improvement in visibility, traffic, and leads. We use proven white-hat techniques and focus on sustainable, long-term growth rather than quick tricks.",
    },
    {
      question: "Can you work with our existing brand?",
      answer:
        "Yes! We can either create a new brand from scratch or refine/evolve your existing brand. We'll audit your current branding, identify gaps, and recommend improvements while maintaining brand equity you've already built.",
    },
    {
      question: "What's the difference between SEO and Google Ads?",
      answer:
        "SEO is organic (free) traffic that takes time but lasts long-term. Google Ads is paid traffic that's instant but stops when you stop paying. We recommend a combination: SEO for sustainable growth, Ads for immediate results and testing.",
    },
  ];

const pricingPlans = [
  {
    name: "Brand Starter",
    price: "₹4,999",
    priceSubtext: "Starting from",
    duration: "1-2 weeks",
    features: [
      "Logo design (3 concepts)",
      "2 revisions",
      "Color palette",
      "Basic guidelines",
      "Source files",
    ],
    ideal: "Startups, small businesses",
  },
  {
    name: "Brand + SEO Pro",
    price: "₹14,999",
    priceSubtext: "Starting from",
    duration: "1 month",
    features: [
      "Complete brand identity",
      "Brand guidelines",
      "Marketing templates",
      "SEO audit & strategy",
      "Keyword research",
      "On-page optimization",
      "3 months support",
    ],
    ideal: "Growing businesses",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹39,999+",
    priceSubtext: "Starting from",
    duration: "Ongoing",
    features: [
      "Full brand ecosystem",
      "Advanced SEO strategy",
      "Content marketing",
      "Link building",
      "Monthly reporting",
      "Dedicated account manager",
    ],
    ideal: "Established businesses",
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

        if (featuresRef.current) {
          gsap.fromTo(
            ".service-feature-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (processRef.current) {
          gsap.fromTo(
            ".service-process-step",
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: processRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        if (techRef.current) {
          gsap.fromTo(
            ".service-tech-item",
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
            ".service-project-card",
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
            ".service-faq-item",
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
      <section className="service-page">
        <div className="service-content">
          {/* ========== HERO SECTION ========== */}
          <div className="service-hero">
            <div className="service-hero-content">
              <div className="service-hero-badge">
                <Sparkles className="service-hero-badge-icon" />
                <span className="small-description grey">Branding & SEO</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Build Brand.
                <br />
                Rank #1.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                Create a memorable brand identity and dominate search results.
                We combine creative branding with data-driven SEO to grow your
                business.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">Get Started</span>
                    <span className="small-description">Get Started</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

            
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/seoo.webp"
                alt="Branding & SEO Services"
                className="service-hero-image"
              />
              <div className="service-hero-gradient" />
            </div>
          </div>

          {/* ========== FEATURES SECTION ========== */}
          <div className="service-features" ref={featuresRef}>
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">What We Offer</h2>
              </div>
              <h2 className="subheadline white">
                Complete Brand & SEO Solutions
              </h2>
              <p className="description grey">
                From brand identity to Google rankings, we cover everything
                needed to establish and grow your online presence.
              </p>
            </div>

            <div className="service-features-grid">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    className="service-feature-card"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="service-feature-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="small-subheadline white">{feature.title}</h3>
                    <p className="description grey">{feature.description}</p>
                    <div className="service-feature-highlights">
                      {feature.highlights.map((highlight, idx) => (
                        <div className="service-feature-tag" key={idx}>
                          <CheckCircle size={14} />
                          <span className="small-description white">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== PROCESS SECTION ========== */}
          <div className="service-process" ref={processRef}>
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Our Process</h2>
              </div>
              <h2 className="subheadline white">
                From Unknown to Unforgettable
              </h2>
              <p className="description grey">
                A strategic approach that builds brand recognition and search
                engine visibility simultaneously.
              </p>
            </div>

            <div className="service-process-timeline">
              {process.map((step, index) => (
                <div
                  className="service-process-step"
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="service-process-number">{step.number}</div>
                  <div className="service-process-content">
                    <h3 className="small-subheadline white">{step.title}</h3>
                    <p className="description grey">{step.description}</p>
                    <div className="service-process-duration">
                      <Clock size={16} />
                      <span className="small-description white">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="service-process-connector" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ========== TECH STACK SECTION ========== */}
          <div className="service-tech" ref={techRef}>
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Tools & Software</h2>
              </div>
              <h2 className="subheadline white">Professional Tools</h2>
              <p className="description grey">
                We use industry-standard design and SEO tools to deliver
                professional results and measurable growth.
              </p>
            </div>

            <div className="service-tech-grid">
              {techStack.map((tech, index) => (
                <div
                  className="service-tech-item"
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="service-tech-logo">
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                  <p className="small-description white">{tech.name}</p>
                  <p className="small-description grey">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== PRICING SECTION ========== */}
          <div className="service-pricing">
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Investment</h2>
              </div>
              <h2 className="subheadline white">Flexible Packages</h2>
              <p className="description grey">
                Choose a package that matches your business stage and goals.
              </p>
            </div>

            <div className="service-pricing-grid">
  {pricingPlans.map((plan, index) => (
    <div
      className={`service-pricing-card ${
        plan.popular ? "service-pricing-popular" : ""
      }`}
      key={index}
    >
      {plan.popular && (
        <div className="service-pricing-badge">
          <span className="small-description white">Most Popular</span>
        </div>
      )}

      <h3 className="small-subheadline white">{plan.name}</h3>
      
      <div className="service-pricing-amount">
        <span 
          className="headline white" 
          style={{ fontSize: "2.5rem", fontWeight: "700" }}
        >
          {plan.price}
        </span>
        <span className="small-description grey">{plan.priceSubtext}</span>
      </div>

      <div className="service-pricing-timeline">
        <Clock size={16} />
        <span className="small-description white">{plan.duration}</span>
      </div>

      <div className="service-pricing-features">
        {plan.features.map((feature, idx) => (
          <div className="service-pricing-feature" key={idx}>
            <CheckCircle size={16} />
            <span className="small-description grey">{feature}</span>
          </div>
        ))}
      </div>

      <p className="small-description grey service-pricing-ideal">
        Ideal for: {plan.ideal}
      </p>

      <Link
        href="/contact"
        className={`button service-pricing-button ${
          plan.popular ? "service-pricing-button-primary" : ""
        }`}
      >
        <div className="button-content">
          <span className="small-description">Get Started</span>
          <span className="small-description">Get Started</span>
        </div>
        <div className="button-circle">
          <ArrowUpRight className="button-icon" />
        </div>
      </Link>
    </div>
  ))}
</div>
          </div>

          {/* ========== RELATED PROJECTS ========== */}
          {/* <div className="service-projects" ref={projectsRef}>
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Success Stories</h2>
              </div>
              <h2 className="subheadline white">Brands We've Built</h2>
              <p className="description grey">
                Real results for real businesses. See how branding and SEO
                transformed these companies.
              </p>
            </div>

            <div className="service-projects-grid">
              {relatedProjects.map((project, index) => (
                <Link
                  href={project.link}
                  className="service-project-card"
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="service-project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="service-project-overlay">
                      <span className="description white">View Case Study</span>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="service-project-content">
                    <span className="small-description grey">
                      {project.category}
                    </span>
                    <h3 className="small-subheadline white">{project.title}</h3>
                    <p className="description grey">{project.description}</p>

                    <div className="service-project-tech">
                      {project.tech.map((tech, idx) => (
                        <span className="service-project-tag" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="service-projects-cta">
              <Link href="/works" className="button">
                <div className="button-content">
                  <span className="small-description">View All Projects</span>
                  <span className="small-description">View All Projects</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
            </div>
          </div> */}

          {/* ========== FAQ SECTION ========== */}
          <div className="service-faq" ref={faqRef}>
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">FAQs</h2>
              </div>
              <h2 className="subheadline white">Common Questions</h2>
              <p className="description grey">
                Everything you need to know about branding and SEO services.
              </p>
            </div>

            <div className="service-faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`service-faq-item ${
                    expandedFaq === index ? "service-faq-item-expanded" : ""
                  }`}
                  key={index}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <button
                    className="service-faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="service-faq-number">0{index + 1}</span>
                    <span className="service-faq-question description white">
                      {faq.question}
                    </span>
                    <span className="service-faq-icon">
                      {expandedFaq === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`service-faq-content ${
                      expandedFaq === index
                        ? "service-faq-content-expanded"
                        : ""
                    }`}
                  >
                    <div className="service-faq-inner">
                      <p className="description grey">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== CTA SECTION ========== */}
          <div className="service-cta">
            <div className="service-cta-content">
              <h2 className="subheadline white">
                Ready to Build Your Brand & Rank Higher?
              </h2>
              <p className="description grey">
                Let's create a brand identity that resonates and an SEO strategy
                that drives qualified traffic. Free brand audit included.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">Get Free Audit</span>
                    <span className="small-description">Get Free Audit</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <Award size={20} />
                    <span className="small-description white">
                      60+ brands created
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      10x average traffic growth
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
