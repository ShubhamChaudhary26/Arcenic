// components/services/AutomationSection.jsx
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
  Workflow,
  Bot,
  Database,
  Link2,
  Clock,
  RefreshCw,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Mail,
  FileText,
  ShoppingCart,
  Users,
  Calendar,
  MessageSquare,
  Rocket,
  BarChart3,
  Cog,
  GitBranch,
  Plug,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const AutomationSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Refs
  const heroTitleRef = useRef();
  const heroDescRef = useRef();
  const featuresRef = useRef();
  const processRef = useRef();
  const techRef = useRef();
  const pricingRef = useRef();
  const projectsRef = useRef();
  const faqRef = useRef();

  // ============ AUTOMATION DATA ============

  // Features / Solutions
  const features = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "End-to-end business process automation using n8n. Connect your apps, automate workflows, and eliminate manual tasks.",
      highlights: ["Multi-Step Workflows", "Conditional Logic", "Error Handling"],
    },
    {
      icon: Link2,
      title: "App Integrations",
      description:
        "Connect 400+ apps seamlessly - CRM, ERP, Email, Slack, Google Workspace, Notion, Airtable, and custom APIs.",
      highlights: ["400+ Integrations", "Real-time Sync", "Bi-directional"],
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description:
        "Intelligent automation with GPT, Claude, and custom AI models for content generation, data extraction, and decision making.",
      highlights: ["GPT Integration", "Smart Decisions", "NLP Processing"],
    },
    {
      icon: Database,
      title: "Data Pipeline Automation",
      description:
        "Automated data collection, transformation, and loading (ETL). Keep your databases and dashboards always in sync.",
      highlights: ["ETL Pipelines", "Data Cleaning", "Auto Reports"],
    },
    {
      icon: Mail,
      title: "Email & Communication",
      description:
        "Automated email sequences, notifications, Slack alerts, WhatsApp messages, and multi-channel communication.",
      highlights: ["Email Sequences", "Smart Notifications", "Multi-channel"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Automation",
      description:
        "Order processing, inventory sync, abandoned cart recovery, review requests, and fulfillment automation.",
      highlights: ["Order Processing", "Inventory Sync", "Customer Journey"],
    },
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description:
        "We analyze your current workflows, identify automation opportunities, and calculate potential time/cost savings.",
      duration: "1-2 Days",
    },
    {
      number: "02",
      title: "Workflow Design",
      description:
        "We map out the automation flow, define triggers, actions, conditions, and error handling strategies.",
      duration: "2-3 Days",
    },
    {
      number: "03",
      title: "Build & Test",
      description:
        "We build the automation in n8n, integrate all apps, and rigorously test with real data scenarios.",
      duration: "3-7 Days",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description:
        "We deploy to production, set up monitoring, and ensure everything runs smoothly with ongoing support.",
      duration: "1-2 Days",
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "n8n", logo: "/logos/n8n.svg", category: "Automation" },
    { name: "OpenAI", logo: "/logos/openai.svg", category: "AI" },
    { name: "Make", logo: "/logos/make.svg", category: "Automation" },
    { name: "Zapier", logo: "/logos/zapier.svg", category: "Automation" },
    { name: "Slack", logo: "/logos/slack.svg", category: "Communication" },
    { name: "HubSpot", logo: "/logos/hubspot.svg", category: "CRM" },
    { name: "Airtable", logo: "/logos/Airtable.svg", category: "Database" },
    { name: "Notion", logo: "/logos/notion.png", category: "Productivity" },
  ];

const packages = [
  {
    name: "Starter",
    price: "₹9,999",
    priceSubtext: "one-time",
    timeline: "1-2 weeks",
    description: "Perfect for small businesses starting with automation",
    features: [
      "Up to 3 workflow automations",
      "5 app integrations",
      "Basic error handling",
      "Email support",
      "1 month maintenance",
    ],
    ideal: "Small businesses, Solopreneurs",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹29,999",
    priceSubtext: "one-time",
    timeline: "2-4 weeks",
    description: "For growing businesses with complex workflows",
    features: [
      "Up to 10 workflow automations",
      "15 app integrations",
      "AI-powered automations",
      "Advanced error handling",
      "Priority support",
      "3 months maintenance",
      "Performance dashboard",
    ],
    ideal: "Growing startups, SMBs",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹79,999+",
    priceSubtext: "starting from",
    timeline: "4-8 weeks",
    description: "Complete automation transformation for enterprises",
    features: [
      "Unlimited workflows",
      "Unlimited integrations",
      "Custom AI models",
      "Self-hosted n8n setup",
      "24/7 dedicated support",
      "12 months maintenance",
      "Training & documentation",
      "SLA guarantee",
    ],
    ideal: "Enterprises, Large teams",
    popular: false,
  },
];

  // Case Studies
  const caseStudies = [
    {
      title: "D2C Brand Automation",
      category: "E-Commerce • Retail",
      image: "/works/automation-ecommerce.webp",
      description:
        "Complete order-to-delivery automation for a D2C brand processing 500+ daily orders.",
      tech: ["n8n", "Shopify", "Shiprocket", "WhatsApp"],
      link: "/works/d2c-automation",
    },
    {
      title: "SaaS Lead Pipeline",
      category: "SaaS • B2B",
      image: "/works/automation-saas.webp",
      description:
        "Automated lead scoring, nurturing, and sales handoff. 40% increase in conversion rate.",
      tech: ["n8n", "HubSpot", "Slack", "OpenAI"],
      link: "/works/saas-lead-automation",
    },
    {
      title: "HR Operations Suite",
      category: "HR Tech • Enterprise",
      image: "/works/automation-hr.webp",
      description:
        "End-to-end HR automation - recruitment to onboarding to payroll integration.",
      tech: ["n8n", "BambooHR", "Slack", "Google Workspace"],
      link: "/works/hr-automation",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What is n8n and why do you use it for automation?",
      answer:
        "n8n is a powerful open-source workflow automation tool that allows us to connect any app, API, or database. Unlike Zapier or Make, n8n can be self-hosted giving you full data control, unlimited executions, and lower long-term costs. It's highly customizable with code nodes for complex logic.",
    },
    {
      question: "Can you integrate with our existing software and tools?",
      answer:
        "Absolutely. n8n supports 400+ native integrations including Salesforce, HubSpot, Shopify, Slack, Google Workspace, and more. For tools without native support, we use HTTP/REST API, webhooks, or build custom integrations. If it has an API, we can connect it.",
    },
    {
      question: "How secure is automated data handling?",
      answer:
        "Security is our priority. We offer self-hosted n8n deployments on your own infrastructure for complete data control. All connections use encrypted APIs, we implement proper authentication, and follow data privacy best practices.",
    },
    {
      question: "What happens if an automation fails?",
      answer:
        "We build robust error handling into every workflow. This includes retry logic, fallback actions, error notifications via Slack/Email, and detailed logging. We also set up monitoring dashboards so you can track automation health in real-time.",
    },
    {
      question: "How long does it take to build automations?",
      answer:
        "Simple workflows (2-3 apps, linear flow) take 2-3 days. Complex workflows with multiple branches, AI integration, and error handling take 1-2 weeks. Full automation suites for departments take 4-8 weeks.",
    },
    {
      question: "Do you provide training and documentation?",
      answer:
        "Yes. Every project includes documentation of all workflows, video walkthroughs, and basic training for your team. For enterprise clients, we provide comprehensive training sessions and ongoing support.",
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

        // Hero Description
        if (heroDescRef.current) {
          gsap.to(heroDescRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.6,
          });
        }

        // Feature Cards
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

        // Process Steps
        if (processRef.current) {
          gsap.fromTo(
            ".service-process-step",
            { opacity: 0, x: -20 },
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

        // Tech Items
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

        // Pricing Cards
        if (pricingRef.current) {
          gsap.fromTo(
            ".service-pricing-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: pricingRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // Project Cards
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

        // FAQ Items
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
                <Workflow className="service-hero-badge-icon" />
                <span className="small-description grey">
                  n8n Automation Services
                </span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Automate <br /> Everything.
                <br />
                Scale Infinitely.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                Stop wasting hours on repetitive tasks. We build intelligent
                automation workflows using n8n that connect your apps, streamline
                operations, and let your team focus on what matters.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Get Free Automation Audit
                    </span>
                    <span className="small-description">
                      Get Free Automation Audit
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-hero-stats">
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">500+</span>
                    <span className="small-description grey">
                      Workflows Built
                    </span>
                  </div>
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">10,000+</span>
                    <span className="small-description grey">
                      Hours Saved/Month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/n8n.jpg"
                alt="n8n Workflow Automation"
                className="service-hero-image"
              />
              <div className="service-hero-gradient" />
            </div>
          </div>

          {/* ========== FEATURES / SOLUTIONS ========== */}
          <div className="service-features" ref={featuresRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <Zap className="service-hero-badge-icon" />
                <span className="small-description grey">Our Solutions</span>
              </div>
              <h2 className="subheadline white">
                Automation Services We Offer
              </h2>
              <p className="description grey">
                From simple task automation to complex AI-powered workflows, we
                build systems that work 24/7.
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

          {/* ========== PROCESS ========== */}
          <div className="service-process" ref={processRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <Cog className="service-hero-badge-icon" />
                <span className="small-description grey">Our Process</span>
              </div>
              <h2 className="subheadline white">How We Build Automations</h2>
              <p className="description grey">
                A systematic approach to eliminate manual work from your
                business.
              </p>
            </div>

            <div className="service-process-timeline">
              {processSteps.map((step, index) => (
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
                      <span className="small-description grey">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="service-process-connector" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ========== TECH STACK ========== */}
          <div className="service-tech" ref={techRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <Layers className="service-hero-badge-icon" />
                <span className="small-description grey">Technology Stack</span>
              </div>
              <h2 className="subheadline white">Tools We Work With</h2>
              <p className="description grey">
                Industry-leading automation tools and 400+ app integrations.
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

          {/* ========== PRICING ========== */}
          <div className="service-pricing" ref={pricingRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <Zap className="service-hero-badge-icon" />
                <span className="small-description grey">Pricing</span>
              </div>
              <h2 className="subheadline white">Automation Packages</h2>
              <p className="description grey">
                Transparent pricing for every business size.
              </p>
            </div>

        <div className="service-pricing-grid">
  {packages.map((pkg, index) => (
    <div
      className={`service-pricing-card ${
        pkg.popular ? "service-pricing-popular" : ""
      }`}
      key={index}
      style={{ opacity: isClient ? undefined : 1 }}
    >
      {pkg.popular && (
        <div className="service-pricing-badge">
          <span className="small-description">Most Popular</span>
        </div>
      )}

      <h3 className="small-subheadline white">{pkg.name}</h3>
      <p className="description grey">{pkg.description}</p>

      <div className="service-pricing-amount">
        <span 
          className="headline white" 
          style={{ fontSize: "2.5rem", fontWeight: "700" }}
        >
          {pkg.price}
        </span>
        <span className="small-description grey">{pkg.priceSubtext}</span>
      </div>

      <div className="service-pricing-timeline">
        <Clock size={16} />
        <span className="small-description grey">{pkg.timeline}</span>
      </div>

      <div className="service-pricing-features">
        {pkg.features.map((feature, idx) => (
          <div className="service-pricing-feature" key={idx}>
            <CheckCircle size={16} />
            <span className="small-description white">{feature}</span>
          </div>
        ))}
      </div>

      <div className="service-pricing-ideal">
        <span className="small-description grey">Ideal for: {pkg.ideal}</span>
      </div>

      <Link
        href="/contact"
        className={`button service-pricing-button ${
          pkg.popular ? "service-pricing-button-primary" : ""
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

          {/* ========== CASE STUDIES ========== */}
          {/* <div className="service-projects" ref={projectsRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <Rocket className="service-hero-badge-icon" />
                <span className="small-description grey">Case Studies</span>
              </div>
              <h2 className="subheadline white">Automation Success Stories</h2>
              <p className="description grey">
                Real businesses saving real time with our automation solutions.
              </p>
            </div>

            <div className="service-projects-grid">
              {caseStudies.map((project, index) => (
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
              <Link href="/works?service=automation" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Automation Projects
                  </span>
                  <span className="small-description">
                    View All Automation Projects
                  </span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
            </div>
          </div> */}

          {/* ========== FAQ ========== */}
          <div className="service-faq" ref={faqRef}>
            <div className="service-section-header">
              <div className="service-hero-badge">
                <MessageSquare className="service-hero-badge-icon" />
                <span className="small-description grey">FAQs</span>
              </div>
              <h2 className="subheadline white">Common Questions</h2>
              <p className="description grey">
                Everything you need to know about our automation services.
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
                      expandedFaq === index ? "service-faq-content-expanded" : ""
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

          {/* ========== CTA ========== */}
          <div className="service-cta">
            <div className="service-cta-content">
              <h2 className="subheadline white">
                Ready to Automate Your Business?
              </h2>
              <p className="description grey">
                Get a free automation audit. We'll identify opportunities to save
                time, reduce errors, and scale your operations effortlessly.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Get Free Automation Audit
                    </span>
                    <span className="small-description">
                      Get Free Automation Audit
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <Clock size={16} />
                    <span className="small-description white">
                      30-min Discovery Call
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <CheckCircle size={16} />
                    <span className="small-description white">
                      Free ROI Analysis
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

export default AutomationSection;