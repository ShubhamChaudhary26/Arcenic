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
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  Brain,
  FileCheck,
  Gamepad2,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Laptop,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const EdTechSection = () => {
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

  // ============ EDTECH-SPECIFIC DATA ============

  // Industry Challenges
  const challenges = [
    {
      icon: Users,
      title: "Student Engagement",
      description:
        "Online learning faces 40% dropout rates. Interactive content, gamification, and social learning are essential for retention.",
      impact: "40% average course dropout rate",
    },
    {
      icon: Video,
      title: "Live Class Scalability",
      description:
        "Streaming to thousands of students simultaneously while maintaining quality and interactivity requires robust infrastructure.",
      impact: "70% prefer live over recorded classes",
    },
    {
      icon: FileCheck,
      title: "Assessment Integrity",
      description:
        "Online exams require proctoring, plagiarism detection, and secure test environments to maintain academic standards.",
      impact: "35% institutions worry about cheating",
    },
    {
      icon: Brain,
      title: "Personalized Learning",
      description:
        "Every student learns differently. Adaptive learning paths and AI tutors are needed for personalized education at scale.",
      impact: "2x better outcomes with personalization",
    },
  ];

  // Our Solutions
  const solutions = [
    {
      icon: Laptop,
      title: "Learning Management Systems",
      description:
        "Complete LMS with course creation, student management, assignments, grading, and detailed analytics for institutions.",
      features: ["Course Builder", "Auto-Grading", "Progress Tracking"],
    },
    {
      icon: Video,
      title: "Virtual Classroom Platforms",
      description:
        "HD video streaming, screen sharing, breakout rooms, whiteboard, and real-time collaboration for engaging online classes.",
      features: ["WebRTC Streaming", "Interactive Whiteboard", "Recordings"],
    },
    {
      icon: BookOpen,
      title: "Online Course Marketplaces",
      description:
        "Build platforms like Udemy or Coursera with instructor onboarding, course sales, certificates, and revenue sharing.",
      features: ["Multi-instructor", "Payment Gateway", "Certificates"],
    },
    {
      icon: Gamepad2,
      title: "Educational Games & Apps",
      description:
        "Gamified learning apps for K-12 with rewards, leaderboards, and adaptive difficulty to make education fun.",
      features: ["Gamification", "Rewards System", "Parent Dashboard"],
    },
    {
      icon: Brain,
      title: "AI-Powered Tutoring",
      description:
        "Intelligent tutoring systems using NLP for doubt resolution, personalized recommendations, and learning path optimization.",
      features: ["AI Chat Support", "Concept Maps", "Smart Recommendations"],
    },
    {
      icon: FileCheck,
      title: "Online Examination Systems",
      description:
        "Secure exam platforms with question banks, auto-proctoring, plagiarism detection, and instant result generation.",
      features: ["AI Proctoring", "Question Banks", "Analytics"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Framework" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "MongoDB", logo: "/logos/mongodb.svg", category: "Database" },
    { name: "OpenAI", logo: "/logos/openai.svg", category: "AI" },
    { name: "WebRTC", logo: "/logos/webrtc.svg", category: "Video" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
    { name: "Socket.io", logo: "/logos/socket.svg", category: "Real-time" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Byju's Clone Platform",
      category: "EdTech • K-12",
      image: "/works/edtech-k12.webp",
      description:
        "K-12 learning app with animated lessons, live classes, and personalized learning paths for 1M+ students.",
      stats: ["1M+ Students", "50K+ Videos", "95% Retention"],
      tech: ["React Native", "Node.js", "AWS"],
      link: "/works/k12-platform",
    },
    {
      title: "University LMS",
      category: "EdTech • Higher Ed",
      image: "/works/edtech-university.webp",
      description:
        "Complete LMS for university with 50K+ students, handling courses, exams, and administrative tasks.",
      stats: ["50K Students", "500+ Courses", "99.9% Uptime"],
      tech: ["Next.js", "PostgreSQL", "Kubernetes"],
      link: "/works/university-lms",
    },
    {
      title: "Coding Bootcamp Platform",
      category: "EdTech • Skill Development",
      image: "/works/edtech-coding.webp",
      description:
        "Interactive coding platform with IDE, auto-grading, and mentor support for 10K+ aspiring developers.",
      stats: ["10K+ Learners", "85% Placement", "500+ Projects"],
      tech: ["React", "Docker", "Judge0 API"],
      link: "/works/coding-platform",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Can you handle high-volume live streaming for classes?",
      answer:
        "Yes. We implement WebRTC for low-latency streaming, CDN distribution for scalability, adaptive bitrate streaming, and can handle 10K+ concurrent students. We also integrate with services like AWS IVS, Agora, and Twilio for enterprise-grade streaming.",
    },
    {
      question: "How do you prevent cheating in online exams?",
      answer:
        "We implement multi-layer security: AI-based proctoring with face detection, browser lockdown to prevent tab switching, screen recording, plagiarism detection, randomized questions, and time limits. We also provide detailed analytics on suspicious behavior.",
    },
    {
      question: "Can you integrate with existing school/university systems?",
      answer:
        "Absolutely. We have experience integrating with popular systems like Canvas, Moodle, Blackboard, and Google Classroom. We also build custom APIs for integration with ERP systems, student information systems (SIS), and payment gateways.",
    },
    {
      question: "Do you support offline learning and mobile apps?",
      answer:
        "Yes. We build mobile apps with offline content download, sync when online, progressive web apps (PWA), and native apps for iOS/Android. Content can be encrypted for security and accessed offline with periodic license checks.",
    },
    {
      question: "What's the typical timeline for an EdTech platform?",
      answer:
        "A basic LMS with course management takes 8-10 weeks. Virtual classroom with live streaming adds 4-6 weeks. Complete platforms with AI features, analytics, and mobile apps take 16-20 weeks depending on complexity.",
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
                <GraduationCap className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Education Technology
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Learning That
                <br />
                Truly Inspires.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From K-12 to higher education, we build learning platforms that
                engage students, empower teachers, and deliver measurable
                outcomes. Making quality education accessible to millions.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Build Your Learning Platform
                    </span>
                    <span className="small-description">
                      Build Your Learning Platform
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
                src="/industries/edtech.jpg"
                alt="EdTech Development"
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
                Online Learning Complexities
              </h2>
              <p className="description grey">
                Digital education faces unique challenges in engagement,
                assessment, and delivering personalized learning at scale.
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
              <h2 className="subheadline white">EdTech Products We Build</h2>
              <p className="description grey">
                Complete education technology solutions for learners, educators,
                and institutions of all sizes.
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
              <h2 className="subheadline white">EdTech Infrastructure</h2>
              <p className="description grey">
                Modern technologies for building scalable learning platforms.
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
              <h2 className="subheadline white">EdTech Success Stories</h2>
              <p className="description grey">
                Learning platforms transforming education across India.
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
              <Link href="/works?industry=edtech" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All EdTech Projects
                  </span>
                  <span className="small-description">
                    View All EdTech Projects
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
                Everything about EdTech development.
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
                Ready to Transform Education?
              </h2>
              <p className="description grey">
                Let's build engaging learning experiences that inspire students
                and empower educators. Free consultation included.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your EdTech Project
                    </span>
                    <span className="small-description">
                      Start Your EdTech Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-cta-info">
                  <div className="industry-cta-info-item">
                    <Users size={20} />
                    <span className="small-description white">
                      5M+ Students
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <Award size={20} />
                    <span className="small-description white">
                      95% Success Rate
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
