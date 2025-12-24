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
  Shield,
  TrendingUp,
  Heart,
  Activity,
  Stethoscope,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Users,
  AlertCircle,
  Video,
  Brain,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const HealthcareSection = () => {
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

  // ============ HEALTHCARE-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: Shield,
      title: "HIPAA Compliance & Security",
      description:
        "Healthcare data requires the highest level of security with HIPAA, GDPR, and PIPEDA compliance to protect patient privacy.",
      impact: "₹4.5L average fine for data breach",
    },
    {
      icon: FileText,
      title: "Interoperability Standards",
      description:
        "Seamless data exchange between different healthcare systems using HL7, FHIR, and DICOM standards is critical.",
      impact: "30% of medical errors due to poor data exchange",
    },
    {
      icon: Activity,
      title: "Real-time Critical Systems",
      description:
        "Healthcare platforms need 99.99% uptime as downtime can directly impact patient care and emergency services.",
      impact: "Zero tolerance for system failures",
    },
    {
      icon: Users,
      title: "Multi-stakeholder Access",
      description:
        "Complex role-based access for doctors, nurses, patients, admins, and insurance providers with different permissions.",
      impact: "Average hospital has 50+ user roles",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Video,
      title: "Telemedicine Platforms",
      description:
        "HIPAA-compliant video consultation platforms with prescription management, payment integration, and EHR connectivity.",
      features: ["HD Video Calls", "E-Prescriptions", "Payment Gateway"],
    },
    {
      icon: Stethoscope,
      title: "Hospital Management Systems",
      description:
        "End-to-end HMS covering patient registration, OPD/IPD management, billing, pharmacy, and lab integration.",
      features: ["Multi-location", "Queue Management", "Inventory"],
    },
    {
      icon: FileText,
      title: "EHR/EMR Solutions",
      description:
        "Cloud-based electronic health records with ABDM integration, clinical decision support, and automated workflows.",
      features: ["ABDM Compliant", "Voice Notes", "Smart Templates"],
    },
    {
      icon: Brain,
      title: "AI Diagnostic Tools",
      description:
        "Machine learning models for medical imaging analysis, early disease detection, and treatment recommendations.",
      features: ["X-Ray Analysis", "Risk Prediction", "Drug Discovery"],
    },
    {
      icon: Heart,
      title: "Patient Portals & Apps",
      description:
        "Mobile apps for appointment booking, health records access, medication reminders, and wearable device integration.",
      features: ["Health Tracking", "Lab Reports", "Appointment Booking"],
    },
    {
      icon: Activity,
      title: "IoT & Remote Monitoring",
      description:
        "Real-time patient monitoring systems integrating wearables, medical devices, and alert systems for critical care.",
      features: ["Vitals Monitoring", "Alert System", "Device Integration"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React Native", logo: "/logos/react.svg", category: "Mobile" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "MongoDB", logo: "/logos/mongodb.svg", category: "Database" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
    { name: "Twilio", logo: "/logos/twilio.svg", category: "Video API" },
    { name: "VIM", logo: "/logos/Vim.svg", category: "Standards" },
    { name: "TensorFlow", logo: "/logos/TensorFlow.svg", category: "AI/ML" },
    { name: "Docker", logo: "/logos/Docker.svg", category: "DevOps" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "TeleDoc Platform",
      category: "Healthcare • Telemedicine",
      image: "/works/healthcare-telemedicine.webp",
      description:
        "Telemedicine platform handling 10K+ daily consultations across India.",
      stats: ["10K+ Daily Consults", "4.8 Rating", "5min Avg Wait"],
      tech: ["React Native", "WebRTC", "Node.js"],
      link: "/works/teledoc-platform",
    },
    {
      title: "Apollo HMS",
      category: "Healthcare • Hospital",
      image: "/works/healthcare-hms.webp",
      description:
        "Multi-hospital management system for 50+ locations with centralized control.",
      stats: ["50+ Hospitals", "1M+ Patients", "99.9% Uptime"],
      tech: ["Next.js", "PostgreSQL", "Kubernetes"],
      link: "/works/apollo-hms",
    },
    {
      title: "AI Radiology Assistant",
      category: "Healthcare • AI",
      image: "/works/healthcare-ai.webp",
      description:
        "AI-powered X-ray analysis tool detecting abnormalities with 95% accuracy.",
      stats: ["95% Accuracy", "100K+ Scans", "30sec Analysis"],
      tech: ["Python", "TensorFlow", "AWS"],
      link: "/works/ai-radiology",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Are your healthcare solutions HIPAA and ABDM compliant?",
      answer:
        "Yes. All our healthcare solutions are built with HIPAA compliance for data privacy, ABDM (Ayushman Bharat Digital Mission) integration for Indian healthcare ecosystem, and follow ISO 27001 security standards.",
    },
    {
      question:
        "Can you integrate with existing hospital systems and medical devices?",
      answer:
        "Absolutely. We have experience with HL7, FHIR, DICOM standards for system integration. We can connect with existing HIS, PACS systems, lab equipment, and medical IoT devices using standard protocols.",
    },
    {
      question: "How do you ensure patient data security?",
      answer:
        "We implement end-to-end encryption, role-based access control, audit logging, data anonymization, regular security audits, and VAPT testing. All data is stored in ISO 27001 certified data centers.",
    },
    {
      question:
        "Do you provide post-launch support for healthcare applications?",
      answer:
        "Yes. Healthcare systems need 24/7 monitoring. We provide dedicated support teams, regular updates for compliance changes, performance monitoring, and emergency response with SLAs.",
    },
    {
      question: "What's the typical timeline for a telemedicine platform?",
      answer:
        "A basic telemedicine MVP with video consultation, appointment booking, and prescriptions takes 10-12 weeks. Full-featured platforms with EHR integration and payment systems take 16-20 weeks.",
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
        // REMOVE revert() completely
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
                <Heart className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Healthcare Technology
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Digital Health
                <br />
                Solutions That Save Lives.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From AI-powered diagnostics to telemedicine platforms, we build
                healthcare technology that improves patient outcomes and
                streamlines clinical workflows. HIPAA compliant. ABDM ready.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Transform Healthcare Delivery
                    </span>
                    <span className="small-description">
                      Transform Healthcare Delivery
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">2M+</span>
                    <span className="small-description grey">
                      Patients Served
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">50+</span>
                    <span className="small-description grey">
                      Healthcare Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/healthcare.jpg"
                alt="Healthcare Software Development"
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
                Complex Healthcare Requirements
              </h2>
              <p className="description grey">
                Healthcare technology demands uncompromising standards for
                security, compliance, and reliability. Here's what we solve.
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
                Healthcare Products We Build
              </h2>
              <p className="description grey">
                From patient-facing apps to hospital-wide systems, we deliver
                comprehensive healthcare technology solutions.
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
                Healthcare-Grade Infrastructure
              </h2>
              <p className="description grey">
                We use proven technologies that meet healthcare compliance
                standards and deliver reliable performance.
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
              <h2 className="subheadline white">Healthcare Success Stories</h2>
              <p className="description grey">
                Real-world healthcare platforms improving patient care and
                operational efficiency across India.
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
              <Link href="/works?industry=healthcare" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Healthcare Projects
                  </span>
                  <span className="small-description">
                    View All Healthcare Projects
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
                Everything you need to know about healthcare software
                development.
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
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="description grey">
                Let's build HIPAA-compliant healthcare solutions that improve
                patient outcomes and streamline operations. Free consultation.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Healthcare Project
                    </span>
                    <span className="small-description">
                      Start Your Healthcare Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Shield size={20} />
                    <span className="small-description white">
                      HIPAA Compliant
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      2M+ Patients Served
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
