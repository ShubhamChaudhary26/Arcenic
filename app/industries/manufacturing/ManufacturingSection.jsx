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
  Factory,
  Package,
  BarChart3,
  Cpu,
  Cog,
  Truck,
  ClipboardCheck,
  Wrench,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Activity,
  Gauge,
  Settings,
  Box,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const ManufacturingSection = () => {
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

  // ============ MANUFACTURING-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: Package,
      title: "Supply Chain Visibility",
      description:
        "Lack of real-time visibility into inventory, suppliers, and logistics leads to production delays and excess stock costs.",
      impact: "₹2L Cr lost to supply chain inefficiencies",
    },
    {
      icon: Cog,
      title: "Production Efficiency",
      description:
        "Unplanned downtime, quality issues, and manual processes reduce Overall Equipment Effectiveness (OEE) significantly.",
      impact: "Average OEE is only 60% globally",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Control",
      description:
        "Manual quality checks are slow and error-prone. Defects caught late in production lead to costly rework and waste.",
      impact: "3-4% revenue lost to quality issues",
    },
    {
      icon: Wrench,
      title: "Maintenance & Downtime",
      description:
        "Reactive maintenance leads to unexpected breakdowns. Predictive maintenance can reduce downtime by 50%.",
      impact: "Unplanned downtime costs ₹50L/hour",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Factory,
      title: "Manufacturing ERP Systems",
      description:
        "Complete ERP solutions covering production planning, inventory, procurement, finance, and HR in one integrated platform.",
      features: ["MRP Planning", "BOM Management", "Cost Tracking"],
    },
    {
      icon: Cpu,
      title: "IoT & Smart Factory",
      description:
        "Connect machines, sensors, and systems for real-time monitoring, predictive maintenance, and automated workflows.",
      features: ["Machine Connectivity", "Real-time Dashboards", "Alerts"],
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "End-to-end visibility from raw materials to finished goods with vendor management, logistics tracking, and demand planning.",
      features: ["Vendor Portal", "Demand Forecast", "Logistics Tracking"],
    },
    {
      icon: ClipboardCheck,
      title: "Quality Management (QMS)",
      description:
        "Digital quality control with inspection checklists, non-conformance tracking, CAPA management, and audit trails.",
      features: ["Inspection App", "NCR Tracking", "Audit Management"],
    },
    {
      icon: Gauge,
      title: "Production Monitoring",
      description:
        "Real-time OEE tracking, production dashboards, downtime analysis, and performance reports for continuous improvement.",
      features: ["OEE Analytics", "Downtime Tracking", "Shift Reports"],
    },
    {
      icon: Wrench,
      title: "Maintenance Management",
      description:
        "Preventive and predictive maintenance scheduling, work orders, spare parts inventory, and technician mobile apps.",
      features: ["CMMS", "Predictive Alerts", "Mobile Work Orders"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    {
      name: "TimescaleDB",
      logo: "/logos/timescaledb.svg",
      category: "Time-series",
    },
    { name: "Grafana", logo: "/logos/grafana.svg", category: "Dashboards" },
    { name: "Docker", logo: "/logos/docker.svg", category: "DevOps" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
    { name: "MQTT", logo: "/logos/mqtt.svg", category: "IoT Protocol" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Automotive Parts ERP",
      category: "Manufacturing • Automotive",
      image: "/works/manufacturing-automotive.webp",
      description:
        "Complete ERP for automotive parts manufacturer with 5 plants and 10K+ SKUs.",
      stats: ["5 Plants", "10K+ SKUs", "40% Efficiency Gain"],
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "/works/automotive-erp",
    },
    {
      title: "Smart Factory IoT Platform",
      category: "Manufacturing • Industry 4.0",
      image: "/works/manufacturing-iot.webp",
      description:
        "IoT platform connecting 500+ machines for real-time monitoring and predictive maintenance.",
      stats: ["500+ Machines", "30% Less Downtime", "Real-time OEE"],
      tech: ["MQTT", "TimescaleDB", "Grafana"],
      link: "/works/smart-factory",
    },
    {
      title: "Pharma Quality Management",
      category: "Manufacturing • Pharma",
      image: "/works/manufacturing-pharma.webp",
      description:
        "FDA-compliant QMS for pharmaceutical manufacturer with batch tracking and audit trails.",
      stats: ["FDA Compliant", "100% Traceability", "Zero Recalls"],
      tech: ["Next.js", "PostgreSQL", "Docker"],
      link: "/works/pharma-qms",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you integrate with existing machines and PLCs?",
      answer:
        "Yes. We have experience integrating with Siemens, Allen-Bradley, Mitsubishi, and other PLCs using protocols like OPC-UA, Modbus, and MQTT. We also integrate with legacy systems using custom adapters and middleware.",
    },
    {
      question: "Do you support SAP and other ERP integrations?",
      answer:
        "Absolutely. We integrate with SAP, Oracle, Microsoft Dynamics, Tally, and custom ERPs. We build middleware for real-time data sync and can work with SAP BAPI/RFC interfaces for deep integration.",
    },
    {
      question: "How do you ensure data security for manufacturing systems?",
      answer:
        "We implement multi-layer security: network segmentation for OT/IT, encrypted data transmission, role-based access control, audit logging, and regular security assessments. We follow IEC 62443 standards for industrial cybersecurity.",
    },
    {
      question: "Can you build solutions that work offline in factory floors?",
      answer:
        "Yes. Our solutions support offline-first architecture for factory floor apps. Data syncs automatically when connectivity is restored. We also support edge computing for local processing of critical operations.",
    },
    {
      question: "What's the typical timeline for a manufacturing ERP?",
      answer:
        "A basic MES or single-module implementation takes 10-12 weeks. Full ERP with multiple modules (production, inventory, quality, maintenance) takes 20-30 weeks depending on complexity and integrations required.",
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
                <Factory className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Industry 4.0 Solutions
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Smart Manufacturing
                <br />
                Redefined.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From ERP systems to IoT-enabled smart factories, we build
                technology that transforms manufacturing operations, reduces
                costs, and drives efficiency. Trusted by India's leading
                manufacturers.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Digitize Your Factory
                    </span>
                    <span className="small-description">
                      Digitize Your Factory
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">50+</span>
                    <span className="small-description grey">
                      Factories Digitized
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">35%</span>
                    <span className="small-description grey">
                      Avg Efficiency Gain
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/manufacturing.jpg"
                alt="Manufacturing Software Development"
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
              <h2 className="subheadline white">Manufacturing Pain Points</h2>
              <p className="description grey">
                Modern manufacturing demands digital transformation to stay
                competitive in global markets.
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
                Manufacturing Products We Build
              </h2>
              <p className="description grey">
                Complete Industry 4.0 solutions from shop floor to top floor.
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
              <h2 className="subheadline white">
                Industrial-Grade Infrastructure
              </h2>
              <p className="description grey">
                Reliable technologies for mission-critical manufacturing
                operations.
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
              <h2 className="subheadline white">
                Manufacturing Success Stories
              </h2>
              <p className="description grey">
                Factories transformed with our Industry 4.0 solutions.
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
              <Link href="/works?industry=manufacturing" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Manufacturing Projects
                  </span>
                  <span className="small-description">
                    View All Manufacturing Projects
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
                Everything about manufacturing software development.
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
                Ready for Industry 4.0 Transformation?
              </h2>
              <p className="description grey">
                Let's build smart manufacturing solutions that boost efficiency,
                reduce costs, and drive growth. Free consultation included.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Manufacturing Project
                    </span>
                    <span className="small-description">
                      Start Your Manufacturing Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Factory size={20} />
                    <span className="small-description white">
                      50+ Factories
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      35% Efficiency Gain
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
