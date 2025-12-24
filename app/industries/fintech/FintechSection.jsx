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
  Lock,
  Smartphone,
  Globe,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Users,
  AlertCircle,
  CreditCard,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const FintechSection = () => {
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

  // ============ FINTECH-SPECIFIC DATA ============

  // Industry Challenges (2-column grid)
  const challenges = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Financial platforms require bank-grade security with PCI-DSS, GDPR, and RBI compliance to protect sensitive user data.",
      impact: "60% of users abandon apps due to security concerns",
    },
    {
      icon: Lock,
      title: "Fraud Prevention",
      description:
        "Real-time fraud detection and prevention systems are critical to protect transactions and build user trust.",
      impact: "$32B lost to payment fraud annually",
    },
    {
      icon: TrendingUp,
      title: "Scalability Under Load",
      description:
        "Fintech platforms must handle millions of transactions per day without downtime or performance degradation.",
      impact: "99.99% uptime is industry standard",
    },
    {
      icon: Smartphone,
      title: "Seamless User Experience",
      description:
        "Complex financial operations need to be simplified into intuitive mobile-first interfaces for mass adoption.",
      impact: "70% of banking is done via mobile",
    },
  ];

  // Our Solutions (3-column grid)
  const solutions = [
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description:
        "Secure integration with Razorpay, Stripe, PayU, and custom payment processors with PCI-DSS compliance.",
      features: ["Multi-currency support", "Recurring billing", "3D Secure"],
    },
    {
      icon: Smartphone,
      title: "Digital Banking Platforms",
      description:
        "White-label neobank solutions with core banking integration, KYC automation, and real-time analytics.",
      features: ["Account management", "P2P transfers", "Investment tracking"],
    },
    {
      icon: BarChart3,
      title: "Wealth Management Apps",
      description:
        "Robo-advisory platforms with portfolio tracking, automated rebalancing, and financial goal planning.",
      features: ["Stock trading APIs", "Mutual funds", "Tax optimization"],
    },
    {
      icon: Shield,
      title: "Blockchain & Web3",
      description:
        "Decentralized finance (DeFi) platforms, smart contracts, crypto wallets, and NFT marketplaces.",
      features: ["Smart contracts", "Token economics", "Web3 wallets"],
    },
    {
      icon: DollarSign,
      title: "Lending Platforms",
      description:
        "AI-powered credit scoring, automated loan processing, and NBFC-compliant lending infrastructure.",
      features: ["Credit risk models", "EMI calculators", "Document OCR"],
    },
    {
      icon: Globe,
      title: "Remittance Solutions",
      description:
        "Cross-border payment platforms with FX integrations, SWIFT/UPI connectivity, and regulatory compliance.",
      features: ["Real-time FX rates", "KYC/AML checks", "Multi-corridor"],
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React Native", logo: "/logos/react.svg", category: "Mobile" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Web" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
    { name: "Redis", logo: "/logos/redis.svg", category: "Cache" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Cloud" },
    { name: "Stripe", logo: "/logos/stripe.svg", category: "Payments" },
    { name: "Plaid", logo: "/logos/plaid.png", category: "Banking APIs" },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Digital Wallet Platform",
      category: "Fintech • Payments",
      image: "/works/fintech-wallet.webp",
      description:
        "UPI-based wallet with 500K+ users, handling ₹10Cr+ monthly transactions.",
      stats: ["500K+ Users", "₹10Cr+ GMV", "99.9% Uptime"],
      tech: ["React Native", "Node.js", "Razorpay"],
      link: "/works/digital-wallet",
    },
    {
      title: "Robo-Advisory Platform",
      category: "Fintech • WealthTech",
      image: "/works/fintech-robo.webp",
      description:
        "AI-powered investment platform managing ₹50Cr+ AUM for retail investors.",
      stats: ["₹50Cr AUM", "10K+ Investors", "12% Avg Returns"],
      tech: ["Next.js", "Python", "Zerodha APIs"],
      link: "/works/robo-advisory",
    },
    {
      title: "NBFC Lending Portal",
      category: "Fintech • Lending",
      image: "/works/fintech-lending.webp",
      description:
        "Automated loan disbursement system with credit scoring and document verification.",
      stats: ["5K+ Loans", "₹20Cr Disbursed", "2-min Approval"],
      tech: ["Vue.js", "Django", "Aadhaar APIs"],
      link: "/works/lending-platform",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Do you handle RBI and financial regulatory compliance?",
      answer:
        "Yes. We build platforms that comply with RBI guidelines, PCI-DSS for payments, GDPR for data privacy, and KYC/AML regulations. We also assist with RBI sandbox applications if required.",
    },
    {
      question: "Can you integrate with banking APIs and payment gateways?",
      answer:
        "Absolutely. We have experience integrating Razorpay, Stripe, PayU, Cashfree, UPI, NEFT/RTGS via bank APIs, Plaid for account aggregation, and even custom ISO 8583 integrations for card networks.",
    },
    {
      question: "How do you ensure data security in fintech applications?",
      answer:
        "We implement end-to-end encryption (AES-256), TLS for data in transit, tokenization for sensitive data, multi-factor authentication, regular security audits, and penetration testing. We follow OWASP and PCI-DSS standards.",
    },
    {
      question: "Can you build blockchain and cryptocurrency solutions?",
      answer:
        "Yes. We develop DeFi platforms, smart contracts on Ethereum/Polygon, crypto wallets (custodial & non-custodial), NFT marketplaces, and Web3 integrations using Solidity, Hardhat, and Web3.js.",
    },
    {
      question: "What is the typical timeline for a fintech MVP?",
      answer:
        "A basic fintech MVP (wallet, payments, basic KYC) takes 8-12 weeks. Complex platforms like neobanks or lending systems can take 16-24 weeks depending on integrations and compliance requirements.",
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
        // FIXED VERSION
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
                <DollarSign className="industry-hero-badge-icon" />
                <span className="small-description grey">
                  Fintech Development
                </span>
              </div>

              <h1
                className="headline white industry-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Building the Future
                <br />
                of Finance.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From digital wallets to decentralized finance, we engineer
                secure, scalable fintech platforms that transform how people
                interact with money. Trusted by banks, startups, and NBFCs.
              </p>

              <div className="industry-hero-actions">
                <Link href="/contact" className="button industry-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Discuss Your Fintech Idea
                    </span>
                    <span className="small-description">
                      Discuss Your Fintech Idea
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="industry-hero-stats">
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">₹100Cr+</span>
                    <span className="small-description grey">
                      Transactions Processed
                    </span>
                  </div>
                  <div className="industry-hero-stat">
                    <span className="small-subheadline white">15+</span>
                    <span className="small-description grey">
                      Fintech Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="industry-hero-visual">
              <img
                src="/industries/fintech1.jpg"
                alt="Fintech Software Development"
                className="industry-hero-image"
              />
              <div className="industry-hero-gradient" />
            </div>
          </div>

          {/* ========== INDUSTRY CHALLENGES (2-col grid) ========== */}
          <div className="industry-challenges" ref={challengesRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <AlertCircle className="subheadline-box-icon" />
                <h2 className="small-description grey">Industry Challenges</h2>
              </div>
              <h2 className="subheadline white">
                Why Fintech Development is Complex
              </h2>
              <p className="description grey">
                Financial technology demands the highest standards of security,
                compliance, and performance. Here's what we solve.
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

          {/* ========== OUR SOLUTIONS (3-col grid) ========== */}
          <div className="industry-solutions" ref={solutionsRef}>
            <div className="industry-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Our Solutions</h2>
              </div>
              <h2 className="subheadline white">Fintech Products We Build</h2>
              <p className="description grey">
                From MVPs to enterprise-grade platforms, we've built every type
                of fintech solution.
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
                Fintech-Grade Infrastructure
              </h2>
              <p className="description grey">
                We use battle-tested technologies trusted by leading financial
                institutions.
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
              <h2 className="subheadline white">Fintech Success Stories</h2>
              <p className="description grey">
                Real-world fintech platforms we've built that are handling
                millions in transactions.
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
              <Link href="/works?industry=fintech" className="button">
                <div className="button-content">
                  <span className="small-description">
                    View All Fintech Projects
                  </span>
                  <span className="small-description">
                    View All Fintech Projects
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
                Everything you need to know about fintech development.
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
                Ready to Disrupt Financial Services?
              </h2>
              <p className="description grey">
                Let's build a secure, scalable fintech platform that transforms
                how people manage money. Free consultation.
              </p>

              <div className="industry-cta-actions">
                <Link
                  href="/contact"
                  className="button industry-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Fintech Project
                    </span>
                    <span className="small-description">
                      Start Your Fintech Project
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
                      PCI-DSS Compliant
                    </span>
                  </div>
                  <div className="industry-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      ₹100Cr+ Processed Safely
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
