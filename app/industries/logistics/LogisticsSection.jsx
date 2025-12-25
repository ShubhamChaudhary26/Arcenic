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
  Truck,
  Package,
  MapPin,
  Navigation,
  Warehouse,
  Clock,
  Route,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Fuel,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const LogisticsSection = () => {
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

  // ============ LOGISTICS-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: MapPin,
      title: "Real-Time Visibility",
      description:
        "Lack of end-to-end visibility into shipments leads to customer complaints, missed SLAs, and operational inefficiencies.",
      impact: "30% deliveries delayed due to poor tracking",
    },
    {
      icon: Route,
      title: "Route Optimization",
      description:
        "Inefficient routes increase fuel costs, delivery times, and vehicle wear. Manual planning can't handle dynamic conditions.",
      impact: "20% fuel savings with optimized routes",
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description:
        "Managing driver schedules, vehicle maintenance, compliance, and performance across large fleets is extremely complex.",
      impact: "₹50L+ annual savings per 100 vehicles",
    },
    {
      icon: Package,
      title: "Last-Mile Delivery",
      description:
        "Last-mile accounts for 53% of shipping costs. Failed deliveries and returns eat into margins significantly.",
      impact: "53% of total delivery cost is last-mile",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Truck,
      title: "Fleet Management Systems",
      description:
        "Complete fleet control with GPS tracking, driver management, fuel monitoring, maintenance scheduling, and compliance tracking.",
      features: ["GPS Tracking", "Driver App", "Maintenance Alerts"],
    },
    {
      icon: Package,
      title: "Delivery Management",
      description:
        "End-to-end delivery orchestration with order management, dispatch automation, POD capture, and customer notifications.",
      features: ["Auto Dispatch", "POD Capture", "Live Tracking"],
    },
    {
      icon: Warehouse,
      title: "Warehouse Management (WMS)",
      description:
        "Optimize warehouse operations with inventory tracking, pick-pack-ship workflows, barcode scanning, and space utilization.",
      features: ["Inventory Control", "Pick Optimization", "Barcode/RFID"],
    },
    {
      icon: Route,
      title: "Route Optimization",
      description:
        "AI-powered route planning considering traffic, delivery windows, vehicle capacity, and driver constraints for maximum efficiency.",
      features: ["Dynamic Routing", "Traffic Integration", "Multi-stop"],
    },
    {
      icon: Smartphone,
      title: "Last-Mile Delivery Apps",
      description:
        "Driver and customer apps for seamless last-mile execution with real-time tracking, OTP verification, and digital payments.",
      features: ["Driver App", "Customer Tracking", "Digital POD"],
    },
    {
      icon: BarChart3,
      title: "Freight & TMS",
      description:
        "Transportation management with load planning, carrier management, freight billing, and shipment visibility across modes.",
      features: ["Load Optimization", "Carrier Portal", "Freight Audit"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React Native", logo: "/logos/react.svg", category: "Mobile" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "Redis", logo: "/logos/redis.svg", category: "Real-time" },
    { name: "Google Maps", logo: "/logos/googlemaps.jpeg", category: "Maps" },
    {
      name: "Socket.io",
      logo: "/logos/socket.svg",
      category: "Live Tracking",
    },
    {
      name: "Firebase",
      logo: "/logos/firebase.svg",
      category: "Notifications",
    },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Fleet Management Platform",
      category: "Logistics • Fleet",
      image: "/works/logistics-fleet.webp",
      description:
        "GPS-enabled fleet management for 5000+ vehicles with real-time tracking and driver management.",
      stats: ["5000+ Vehicles", "30% Fuel Savings", "99.9% Uptime"],
      tech: ["React Native", "Node.js", "PostgreSQL"],
      link: "/works/fleet-management",
    },
    {
      title: "Last-Mile Delivery App",
      category: "Logistics • Delivery",
      image: "/works/logistics-delivery.webp",
      description:
        "Delivery platform handling 50K+ daily orders with route optimization and real-time tracking.",
      stats: ["50K+ Daily Orders", "95% On-Time", "4.8 Rating"],
      tech: ["React Native", "Google Maps", "Socket.io"],
      link: "/works/delivery-app",
    },
    {
      title: "Warehouse Management System",
      category: "Logistics • WMS",
      image: "/works/logistics-wms.webp",
      description:
        "Multi-warehouse WMS managing 1M+ SKUs with barcode scanning and automated picking.",
      stats: ["1M+ SKUs", "40% Faster Picking", "99.8% Accuracy"],
      tech: ["Next.js", "PostgreSQL", "Redis"],
      link: "/works/warehouse-management",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you integrate with GPS devices and telematics hardware?",
      answer:
        "Yes. We integrate with all major GPS/telematics providers like Tata Motors, Volvo, Ashok Leyland OEM systems, and aftermarket devices. We support protocols like MQTT, TCP/IP, and REST APIs for device communication.",
    },
    {
      question: "How do you handle real-time tracking at scale?",
      answer:
        "We use WebSocket connections via Socket.io for real-time updates, Redis for caching location data, and time-series databases for historical tracking. Our architecture handles 100K+ concurrent vehicle tracking.",
    },
    {
      question: "Can you integrate with e-commerce platforms and ERPs?",
      answer:
        "Absolutely. We integrate with Shopify, WooCommerce, Magento for order sync, and SAP, Oracle, Tally for ERP connectivity. We also support EDI and API integrations with 3PL providers.",
    },
    {
      question: "Do you support multi-modal logistics (road, rail, air, sea)?",
      answer:
        "Yes. Our TMS solutions support multi-modal shipments with carrier management across modes, unified tracking, handoff management, and consolidated documentation for each transport mode.",
    },
    {
      question: "What's the typical timeline for a logistics platform?",
      answer:
        "A basic fleet tracking app takes 8-10 weeks. Delivery management with driver apps takes 12-14 weeks. Full TMS with WMS integration takes 20-24 weeks depending on complexity.",
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
                <Truck className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Logistics & Transportation
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Powering  <br /> Todays
               
                Logistics.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From fleet management to last-mile delivery, we build logistics
                technology that optimizes routes, reduces costs, and delights
                customers. Trusted by India's leading logistics companies.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Optimize Your Logistics
                    </span>
                    <span className="small-description">
                      Optimize Your Logistics
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/logistic.jpeg"
                alt="Logistics Software Development"
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
                Logistics Complexity at Scale
              </h2>
              <p className="description grey">
                Modern logistics demands real-time visibility, optimization, and
                seamless coordination across the supply chain.
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
              <h2 className="subheadline white">Logistics Products We Build</h2>
              <p className="description grey">
                End-to-end logistics technology from warehouse to doorstep.
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
              <h2 className="subheadline white">Logistics Infrastructure</h2>
              <p className="description grey">
                Real-time technologies for tracking, routing, and operations.
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
              <h2 className="subheadline white">Logistics Success Stories</h2>
              <p className="description grey">
                Logistics companies optimized with our technology.
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
              <Link href="/works?industry=logistics" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Logistics Projects
                  </span>
                  <span className="small-description">
                    View All Logistics Projects
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
                Everything about logistics software development.
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
                Ready to Optimize Your Logistics?
              </h2>
              <p className="description grey">
                Let's build logistics technology that reduces costs, improves
                efficiency, and delights customers. Free consultation included.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Logistics Project
                    </span>
                    <span className="small-description">
                      Start Your Logistics Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Truck size={20} />
                    <span className="small-description white">
                      10K+ Vehicles
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      30% Cost Savings
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
