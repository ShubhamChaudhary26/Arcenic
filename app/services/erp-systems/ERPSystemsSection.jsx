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
  Package,
  DollarSign,
  Users,
  Truck,
  BarChart3,
  Settings,
  Factory,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  Building2,
  Boxes,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const ERPSystemsSection = () => {
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
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time stock tracking across multiple warehouses. Automated reordering, stock alerts, and batch/serial number tracking.",
      highlights: ["Multi-warehouse", "Auto Reordering", "Barcode/QR"],
    },
    {
      icon: DollarSign,
      title: "Accounting & Finance",
      description:
        "Complete accounting automation with GST compliance. Invoicing, expense tracking, and financial reporting in one system.",
      highlights: ["GST Compliance", "Auto Invoicing", "Financial Reports"],
    },
    {
      icon: Factory,
      title: "Manufacturing Module",
      description:
        "Production planning, Bill of Materials (BOM), work orders, and quality control for manufacturing businesses.",
      highlights: ["BOM Management", "Work Orders", "Quality Control"],
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "Manage purchases, vendors, logistics, and deliveries. Track shipments and optimize supply chain operations.",
      highlights: ["Vendor Management", "Purchase Orders", "Shipment Tracking"],
    },
    {
      icon: Users,
      title: "HR & Payroll",
      description:
        "Employee management, attendance tracking, leave management, and automated payroll processing with tax calculations.",
      highlights: ["Attendance", "Leave Management", "Auto Payroll"],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Real-time dashboards and custom reports. Data-driven insights across all departments for better decision making.",
      highlights: ["Live Dashboards", "Custom Reports", "Analytics"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Business Process Mapping",
      description:
        "Understanding your complete business workflow - from procurement to sales to accounting. Identifying bottlenecks and improvement areas.",
      duration: "1-2 weeks",
    },
    {
      number: "02",
      title: "ERP Design & Planning",
      description:
        "Designing the ERP architecture, module selection, custom feature planning, and creating a detailed implementation roadmap.",
      duration: "2-3 weeks",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Building custom modules, integrating with existing systems, data migration, and thorough testing with your team.",
      duration: "8-16 weeks",
    },
    {
      number: "04",
      title: "Deployment & Training",
      description:
        "Phased rollout, comprehensive team training, documentation, and ongoing support to ensure smooth adoption.",
      duration: "2-4 weeks + Ongoing",
    },
  ];

  const techStack = [
    { name: "Odoo ERP", logo: "/logos/odoo.svg", category: "Open Source" },
    { name: "SAP B1", logo: "/logos/sap.svg", category: "Enterprise" },
    { name: "Custom ERP", logo: "/logos/erp.svg", category: "Tailored" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "MongoDB", logo: "/logos/mongodb.svg", category: "Database" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
  ];

  const relatedProjects = [
    {
      title: "Manufacturing ERP",
      category: "Custom Development",
      image: "/works/manufacturing-erp.webp",
      description:
        "Complete ERP with production planning, inventory, and quality modules.",
      tech: ["Custom Dev", "PostgreSQL", "Multi-plant"],
      link: "/works/manufacturing-erp",
    },
    {
      title: "Retail Chain ERP",
      category: "Odoo Implementation",
      image: "/works/retail-erp.webp",
      description:
        "Multi-store inventory, POS integration, and centralized accounting.",
      tech: ["Odoo", "POS", "20+ Locations"],
      link: "/works/retail-erp",
    },
    {
      title: "Distribution ERP",
      category: "Hybrid Solution",
      image: "/works/distribution-erp.webp",
      description:
        "Warehouse management, route planning, and delivery tracking system.",
      tech: ["Custom + Odoo", "GPS Tracking", "Mobile App"],
      link: "/works/distribution-erp",
    },
  ];

  const faqs = [
    {
      question: "What's the difference between ERP and accounting software?",
      answer:
        "Accounting software only handles finances (invoicing, expenses, reports). ERP is a complete business management system that includes accounting PLUS inventory, manufacturing, HR, sales, purchases, and more - all integrated in one platform. ERP gives you a 360° view of your entire business.",
    },
    {
      question: "How long does ERP implementation take?",
      answer:
        "Implementation timeline varies by business size and complexity. A basic Odoo setup takes 8-12 weeks. Custom ERP development takes 4-6 months. Large enterprise implementations can take 6-12 months. We work in phases so you can start using core modules while others are being built.",
    },
    {
      question: "Can we customize the ERP to our specific needs?",
      answer:
        "Absolutely! Whether you choose Odoo, SAP, or custom development, we customize everything to match your exact workflows. Custom fields, reports, workflows, approvals - everything can be tailored to your business processes.",
    },
    {
      question: "Will ERP integrate with our existing software?",
      answer:
        "Yes! We integrate ERP with e-commerce platforms, payment gateways, shipping partners, banking systems, Tally, GST portals, and any other software you use. APIs and webhooks ensure seamless data flow between systems.",
    },
    {
      question: "What about data security and backups?",
      answer:
        "We implement bank-level security with encryption, role-based access, and audit trails. Daily automated backups are stored in multiple locations. You can host on your own servers or we provide secure cloud hosting with 99.9% uptime guarantee.",
    },
  ];

  const pricingPlans = [
  {
    name: "Odoo Starter",
    price: "₹49,999",
    priceSubtext: "One-time implementation",
    duration: "8-12 weeks",
    features: [
      "Odoo Community Edition",
      "5 core modules",
      "Up to 10 users",
      "Basic customization",
      "Data migration",
      "Team training",
      "3 months support",
    ],
    ideal: "Small businesses",
  },
  {
    name: "Business ERP",
    price: "₹1,49,999",
    priceSubtext: "One-time implementation",
    duration: "12-16 weeks",
    features: [
      "Odoo Enterprise / Custom",
      "10+ modules",
      "Up to 50 users",
      "Advanced customization",
      "Third-party integrations",
      "Comprehensive training",
      "1 year support",
    ],
    ideal: "Growing companies",
    popular: true,
  },
  {
    name: "Enterprise Custom",
    price: "₹3,99,999+",
    priceSubtext: "Starting from",
    duration: "20-30 weeks",
    features: [
      "Fully custom ERP",
      "Unlimited modules",
      "Unlimited users",
      "Multi-company/location",
      "Mobile apps",
      "Advanced analytics",
      "Dedicated support",
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
                <Building2 className="service-hero-badge-icon" />
                <span className="small-description grey">ERP Systems</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                One System.
                <br />
                Entire Business.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                Stop juggling multiple software. We build and implement ERP
                systems that unify inventory, accounting, manufacturing, HR, and
                sales in one powerful platform.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">Discuss Your ERP</span>
                    <span className="small-description">Discuss Your ERP</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

               
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/erp.webp"
                alt="ERP Systems"
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
              <h2 className="subheadline white">Complete ERP Modules</h2>
              <p className="description grey">
                Every module you need to run a modern business, integrated
                seamlessly and customized to your workflows.
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
              <h2 className="subheadline white">From Analysis to Automation</h2>
              <p className="description grey">
                A structured approach that ensures your ERP fits perfectly with
                your business processes.
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
                <h2 className="small-description grey">ERP Platforms</h2>
              </div>
              <h2 className="subheadline white">Flexible Technology Stack</h2>
              <p className="description grey">
                We work with leading ERP platforms and build custom solutions
                using modern, scalable technologies.
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
              <h2 className="subheadline white">ERP Packages</h2>
              <p className="description grey">
                Transparent pricing based on your business size and module
                requirements.
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
                <h2 className="small-description grey">Case Studies</h2>
              </div>
              <h2 className="subheadline white">ERP Success Stories</h2>
              <p className="description grey">
                See how businesses transformed their operations with our ERP
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
                Everything you need to know about ERP implementation.
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
                Ready to Streamline Your Entire Business?
              </h2>
              <p className="description grey">
                Let's discuss how ERP can eliminate manual work, reduce errors,
                and give you real-time visibility into your operations.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Schedule Consultation
                    </span>
                    <span className="small-description">
                      Schedule Consultation
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      60% average time savings
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <Boxes size={20} />
                    <span className="small-description white">
                      15+ successful implementations
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
