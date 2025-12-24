"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import "../services-shared.css";
import {
  ArrowUpRight,
  Zap,
  Palette,
  Users,
  MousePointer2,
  Layers,
  Eye,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  Figma,
  PenTool,
  Layout,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const UIUXDesignSection = () => {
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

  // Features - ELEVATED TO "STRATEGIC CAPABILITIES"
  const features = [
    {
      icon: Users,
      title: "Behavioral User Research",
      description:
        "We go beyond demographics. We analyze user psychology and behavior patterns to build products that feel natural and intuitive.",
      highlights: [
        "Cognitive Walkthroughs",
        "User Journey Mapping",
        "Stakeholder Workshops",
      ],
    },
    {
      icon: Layout,
      title: "Information Architecture",
      description:
        "We organize complex data into clear, logical structures. We ensure your users can find exactly what they need without friction.",
      highlights: [
        "Sitemap Planning",
        "Navigation Strategy",
        "Content Hierarchy",
      ],
    },
    {
      icon: Layers,
      title: "Interactive Prototyping",
      description:
        "We simulate the full product experience before code is written. Validate flows and interactions early to save development costs.",
      highlights: [
        "High-Fidelity Clickables",
        "Micro-interactions",
        "Flow Validation",
      ],
    },
    {
      icon: Palette,
      title: "Interface Design (UI)",
      description:
        "We craft pixel-perfect, accessible interfaces that align with your brand identity and evoke the right emotional response.",
      highlights: ["Visual Systems", "Accessibility (WCAG)", "Motion Design"],
    },
    {
      icon: Eye,
      title: "Usability Engineering",
      description:
        "We test with real users to identify friction points. We iterate based on data, not assumptions, ensuring high adoption rates.",
      highlights: ["A/B Testing", "Heatmap Analysis", "Usability Audits"],
    },
    {
      icon: Sparkles,
      title: "Scalable Design Systems",
      description:
        "We build a single source of truth—components, tokens, and guidelines—ensuring consistency as your product scales.",
      highlights: [
        "Atomic Design",
        "Component Libraries",
        "Developer Documentation",
      ],
    },
  ];

  // Process - REALISTIC TIMELINES FOR QUALITY
  const process = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We immerse ourselves in your business goals and user needs. We define the 'Why' before we touch the 'How'.",
      duration: "1-2 Weeks",
    },
    {
      number: "02",
      title: "UX & Architecture",
      description:
        "We map out user flows and wireframes. We solve the structural problems on paper to ensure a solid foundation.",
      duration: "2-3 Weeks",
    },
    {
      number: "03",
      title: "UI & Interaction",
      description:
        "We apply visual layers, branding, and motion. This is where your product comes to life and develops its personality.",
      duration: "3-5 Weeks",
    },
    {
      number: "04",
      title: "Handoff & Support",
      description:
        "We prepare pixel-perfect assets and documentation for developers, ensuring the final build matches the design exactly.",
      duration: "Ongoing",
    },
  ];

  // Tech Stack - FOCUSED ON MODERN TOOLING
  const techStack = [
    { name: "Figma", logo: "/logos/figma.svg", category: "Core Design" },
    { name: "Adobe CC", logo: "/logos/adobe.svg", category: "Assets" },
    { name: "Framer", logo: "/logos/framer.svg", category: "Prototyping" },
    { name: "Maze", logo: "/logos/maze.svg", category: "Testing" },
    { name: "Hotjar", logo: "/logos/hotjar.svg", category: "Analytics" },
    { name: "Miro", logo: "/logos/miro.svg", category: "Workshop" },
    {
      name: "Storybook",
      logo: "/logos/storybook.svg",
      category: "Design ",
    },
    { name: "Lottie", logo: "/logos/lottie.svg", category: "Motion" },
  ];

  const relatedProjects = [
    {
      title: "Fintech Mobile App",
      category: "Product Design",
      image: "/works/essentia.webp",
      description: "Simplifying complex investment data for millennial users.",
      tech: ["UX Research", "Figma", "Design System"],
      link: "/works/banking-app",
    },
    {
      title: "EdTech Learning Platform",
      category: "Web Application",
      image: "/works/heave.webp",
      description:
        "Gamified learning experience increasing student retention by 40%.",
      tech: ["Gamification", "Prototyping", "User Testing"],
      link: "/works/elearning-platform",
    },
    {
      title: "Medical Data Dashboard",
      category: "Enterprise UX",
      image: "/works/kinimatic.webp",
      description:
        "Intuitive interface for doctors to monitor patient vitals in real-time.",
      tech: ["Data Viz", "Accessibility", "Complex Workflows"],
      link: "/works/healthcare-dashboard",
    },
  ];

  // FAQs - ADDRESSING CLIENT FEARS
  const faqs = [
    {
      question: "Do you just make it look pretty?",
      answer:
        "No. While aesthetics are important, our primary focus is usability and conversion. We design solutions that solve business problems and make tasks easier for your users.",
    },
    {
      question: "How do you ensure developers build exactly what you designed?",
      answer:
        "We bridge the gap. We provide detailed developer documentation, red-lines, asset exports, and even walk through the code logic with your engineering team during handoff.",
    },
    {
      question: "Do you create Design Systems?",
      answer:
        "Yes. For scaling products, we build comprehensive Design Systems (Components, Tokens, Guidelines) that ensure consistency and speed up future development cycles.",
    },
    {
      question: "Can you audit our existing product?",
      answer:
        "Absolutely. We perform comprehensive UX Audits where we analyze your current interface against usability heuristics to identify friction points and quick wins.",
    },
    {
      question: "What is your research process?",
      answer:
        "We don't guess. Depending on the budget, we use competitor analysis, user interviews, personas, and heatmaps to inform every design decision we make.",
    },
  ];

  // Engagement Models (Replaced Pricing)
const pricingPlans = [
  {
    name: "UX Audit & Fix",
    price: "₹7,999",
    priceSubtext: "Starting from",
    duration: "1-2 Weeks",
    features: [
      "Heuristic Evaluation",
      "UX Friction Report",
      "Quick UI Polish",
      "Accessibility Check",
      "Actionable Roadmap",
    ],
    ideal: "Existing products needing improvement",
  },
  {
    name: "Product Design",
    price: "₹19,999",
    priceSubtext: "Starting from",
    duration: "4-8 Weeks",
    features: [
      "User Research & Strategy",
      "Wireframing & Flows",
      "High-Fidelity UI",
      "Interactive Prototype",
      "Developer Handoff",
    ],
    ideal: "New MVPs or Redesigns",
    popular: true,
  },
  {
    name: "Design System",
    price: "₹49,999+",
    priceSubtext: "Starting from",
    duration: "Custom Timeline",
    features: [
      "Component Library",
      "Design Tokens",
      "Usage Guidelines",
      "Documentation Site",
      "Team Training",
    ],
    ideal: "Enterprise & Scaling Teams",
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
                <Palette className="service-hero-badge-icon" />
                <span className="small-description grey">UI/UX Design</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
               Cool Design
                <br />
                Better Results.
              </h1>
              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                We don't just make things look good. We use behavioral science
                and data-driven insights to design intuitive interfaces that
                users love and businesses rely on.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Project
                    </span>
                    <span className="small-description">
                      Start Your Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-hero-stats">
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">40+</span>
                    <span className="small-description grey">
                      Products Launched
                    </span>
                  </div>
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">95%</span>
                    <span className="small-description grey">
                      User Retention
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/uiuxx.webp"
                alt="UI/UX Design Services"
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
                <h2 className="small-description grey">Capabilities</h2>
              </div>
              <h2 className="subheadline white">Strategic Design Services</h2>
              <p className="description grey">
                Bridging the gap between user needs and business goals through
                thoughtful design architecture.
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
                <h2 className="small-description grey">Our Approach</h2>
              </div>
              <h2 className="subheadline white">Design Thinking in Action</h2>
              <p className="description grey">
                A structured, scientific approach to creativity that ensures
                measurable results and minimal risk.
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
                <h2 className="small-description grey">Toolkit</h2>
              </div>
              <h2 className="subheadline white">Modern Design Stack</h2>
              <p className="description grey">
                We use industry-standard tools to ensure smooth collaboration
                and effortless developer handoff.
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

          {/* ========== ENGAGEMENT MODELS (Formerly Pricing) ========== */}
          <div className="service-pricing">
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Engagement Models</h2>
              </div>
              <h2 className="subheadline white">Flexible Partnerships</h2>
              <p className="description grey">
                From quick audits to full-scale product design, we fit into your
                team where you need us most.
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
        <span className="small-description grey" style={{ fontSize: "0.85rem" }}>
          {plan.priceSubtext}
        </span>
        <span
          className="headline white"
          style={{ fontSize: "2.5rem", display: "block", marginTop: "0.25rem", fontWeight: "700" }}
        >
          {plan.price}
        </span>
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
                <h2 className="small-description grey">Portfolio</h2>
              </div>
              <h2 className="subheadline white">Recent Design Work</h2>
              <p className="description grey">
                See how we've solved complex problems with elegant design
                solutions.
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
                Everything you need to know about our design process.
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
                Ready to Transform Your Product?
              </h2>
              <p className="description grey">
                Let's create a user experience that sets you apart from the
                competition. Free design consultation included.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Project
                    </span>
                    <span className="small-description">
                      Start Your Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <Users size={20} />
                    <span className="small-description white">
                      User-centered approach
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      Conversion focused
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
