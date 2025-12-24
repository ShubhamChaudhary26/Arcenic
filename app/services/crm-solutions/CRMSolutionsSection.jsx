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
  Users,
  TrendingUp,
  Target,
  Mail,
  BarChart3,
  RefreshCw,
  Phone,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Workflow,
  Database,
  LineChart,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const CRMSolutionsSection = () => {
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
      icon: Users,
      title: "Contact Management",
      description:
        "Centralize all customer data, interactions, and history in one place. Never lose track of important customer information.",
      highlights: [
        "360° Customer View",
        "Activity Tracking",
        "Smart Segmentation",
      ],
    },
    {
      icon: Target,
      title: "Sales Pipeline",
      description:
        "Visual sales pipeline with drag-and-drop stages. Track deals from lead to close and forecast revenue accurately.",
      highlights: ["Visual Pipeline", "Deal Tracking", "Revenue Forecast"],
    },
    {
      icon: Workflow,
      title: "Sales Automation",
      description:
        "Automate repetitive tasks like follow-ups, emails, and data entry. Let your team focus on selling, not admin work.",
      highlights: ["Auto Follow-ups", "Task Automation", "Email Sequences"],
    },
    {
      icon: Mail,
      title: "Email Integration",
      description:
        "Sync Gmail, Outlook, and other email providers. Track opens, clicks, and automatically log all communications.",
      highlights: ["Email Sync", "Open Tracking", "Auto Logging"],
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description:
        "Real-time dashboards and custom reports. Track sales performance, conversion rates, and team productivity.",
      highlights: [
        "Custom Dashboards",
        "Performance Metrics",
        "Export Reports",
      ],
    },
    {
      icon: Phone,
      title: "Call & WhatsApp Integration",
      description:
        "Make calls directly from CRM, log conversations automatically, and integrate WhatsApp for customer communication.",
      highlights: ["Click-to-Call", "Call Recording", "WhatsApp Sync"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "Understanding your sales process, team structure, and requirements. Analyzing current workflows and pain points.",
      duration: "3-5 days",
    },
    {
      number: "02",
      title: "CRM Setup & Customization",
      description:
        "Configuring CRM to match your process. Custom fields, stages, automations, and integrations setup.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Data Migration & Training",
      description:
        "Migrating existing customer data safely. Comprehensive training for your team on CRM usage and best practices.",
      duration: "1-2 weeks",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "Continuous optimization based on usage data. Adding new features and automations as your business grows.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    {
      name: "Salesforce",
      logo: "/logos/salesforce.svg",
      category: "Enterprise CRM",
    },
    { name: "HubSpot", logo: "/logos/hubspot.svg", category: "Marketing CRM" },
    { name: "Zoho CRM", logo: "/logos/zoho.svg", category: "Business CRM" },
    { name: "Pipedrive", logo: "/logos/pipedrive.svg", category: "Sales CRM" },
    { name: "Custom CRM", logo: "/logos/custom-crm.svg", category: "Tailored" },
    { name: "Zapier", logo: "/logos/zapier.svg", category: "Integration" },
    { name: "Twilio", logo: "/logos/twilio.svg", category: "Communication" },
    { name: "API", logo: "/logos/api.svg", category: "Integration" },
  ];

  const relatedProjects = [
    {
      title: "Real Estate CRM",
      category: "Custom Development",
      image: "/works/real-estate-crm.webp",
      description:
        "Custom CRM for property listings, client management, and site visits.",
      tech: ["Custom Dev", "WhatsApp API", "Lead Scoring"],
      link: "/works/real-estate-crm",
    },
    {
      title: "Manufacturing CRM",
      category: "Salesforce Implementation",
      image: "/works/manufacturing-crm.webp",
      description: "Salesforce CRM with inventory sync and dealer management.",
      tech: ["Salesforce", "ERP Integration", "Mobile App"],
      link: "/works/manufacturing-crm",
    },
    {
      title: "Education CRM",
      category: "HubSpot Setup",
      image: "/works/education-crm.webp",
      description: "HubSpot CRM for student admissions and course enrollment.",
      tech: ["HubSpot", "Email Automation", "Payment Integration"],
      link: "/works/education-crm",
    },
  ];

  const faqs = [
    {
      question: "Which CRM is best for my business?",
      answer:
        "It depends on your industry, team size, and budget. Salesforce is best for large enterprises, HubSpot for marketing-focused teams, Zoho for budget-friendly solutions, and custom CRM for unique requirements. We'll recommend the best fit during consultation.",
    },
    {
      question: "How long does CRM implementation take?",
      answer:
        "A basic CRM setup takes 2-3 weeks. Complex implementations with custom workflows, integrations, and data migration can take 4-8 weeks. We provide a detailed timeline after analyzing your requirements.",
    },
    {
      question: "Can you migrate data from our existing system?",
      answer:
        "Yes! We safely migrate all customer data, contacts, deals, and history from spreadsheets, old CRMs, or other systems. We ensure zero data loss and maintain data integrity during migration.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Absolutely! We provide comprehensive training including live sessions, video tutorials, and documentation. We also offer ongoing support to ensure your team uses the CRM effectively.",
    },
    {
      question: "Can CRM integrate with our existing tools?",
      answer:
        "Yes! We integrate CRM with email (Gmail/Outlook), WhatsApp, phone systems, accounting software, marketing tools, and custom applications. Most integrations are possible via APIs or tools like Zapier.",
    },
  ];

  const pricingPlans = [
    {
      name: "CRM Starter",
      price: "₹9,999",
      priceSubtext: "One-time setup",
      duration: "2-3 weeks",
      features: [
        "Zoho/Pipedrive setup",
        "Basic customization",
        "Contact import",
        "Email integration",
        "Team training (4 hours)",
        "1 month support",
      ],
      ideal: "Small teams (5-10 users)",
    },
    {
      name: "Business CRM",
      price: "₹29,999",
      priceSubtext: "One-time setup",
      duration: "4-6 weeks",
      features: [
        "HubSpot/Salesforce setup",
        "Custom workflows",
        "Automation rules",
        "Multiple integrations",
        "Data migration",
        "Comprehensive training",
        "3 months support",
      ],
      ideal: "Growing businesses",
      popular: true,
    },
    {
      name: "Enterprise/Custom",
      price: "₹69,999+",
      priceSubtext: "Starting from",
      duration: "8-12 weeks",
      features: [
        "Fully custom CRM",
        "Unlimited customization",
        "Advanced integrations",
        "Mobile app",
        "Dedicated support",
        "Ongoing optimization",
      ],
      ideal: "Large organizations",
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
                <Database className="service-hero-badge-icon" />
                <span className="small-description grey">CRM Solutions</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Track Leads.
                <br />
                Win Deals.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                Stop losing leads in spreadsheets. We implement and customize
                CRM systems that help you track, nurture, and convert customers
                effortlessly.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">Get CRM Demo</span>
                    <span className="small-description">Get CRM Demo</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-hero-stats">
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">40%</span>
                    <span className="small-description grey">
                      Sales Increase
                    </span>
                  </div>
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">25+</span>
                    <span className="small-description grey">
                      CRM Implementations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/crm.webp"
                alt="CRM Solutions"
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
              <h2 className="subheadline white">Complete CRM Solutions</h2>
              <p className="description grey">
                From implementation to customization, we help you leverage CRM
                technology to boost sales and improve customer relationships.
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
              <h2 className="subheadline white">From Chaos to Control</h2>
              <p className="description grey">
                A proven methodology that ensures smooth CRM adoption and
                maximum ROI for your business.
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
                <h2 className="small-description grey">CRM Platforms</h2>
              </div>
              <h2 className="subheadline white">We Work With All Major CRMs</h2>
              <p className="description grey">
                Whether you need Salesforce, HubSpot, Zoho, or a custom
                solution, we have the expertise to implement it perfectly.
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
                <h2 className="subheadline white">CRM Packages</h2>
                <p className="description grey">
                  Transparent pricing based on your team size and requirements.
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
                        <span className="small-description white">
                          Most Popular
                        </span>
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
                      <span className="small-description grey">
                        {plan.priceSubtext}
                      </span>
                    </div>

                    <div className="service-pricing-timeline">
                      <Clock size={16} />
                      <span className="small-description white">
                        {plan.duration}
                      </span>
                    </div>

                    <div className="service-pricing-features">
                      {plan.features.map((feature, idx) => (
                        <div className="service-pricing-feature" key={idx}>
                          <CheckCircle size={16} />
                          <span className="small-description grey">
                            {feature}
                          </span>
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
                <h2 className="small-description grey">Case Studies</h2>
              </div>
              <h2 className="subheadline white">CRM Implementations</h2>
              <p className="description grey">
                Real businesses achieving real results with our CRM solutions.
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
                Everything you need to know about CRM implementation.
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
                Ready to Transform Your Sales Process?
              </h2>
              <p className="description grey">
                Let's implement a CRM system that your team will actually use.
                Free CRM consultation and demo included.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">Book Free Demo</span>
                    <span className="small-description">Book Free Demo</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      40% average sales increase
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <UserCheck size={20} />
                    <span className="small-description white">
                      95% user adoption rate
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
