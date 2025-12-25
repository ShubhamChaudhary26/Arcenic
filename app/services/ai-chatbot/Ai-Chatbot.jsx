"use client";
import React, { useEffect, useRef, useState } from "react";
import "../services-shared.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  MessageSquare,
  MessagesSquare,
  Bot,
  Globe,
  Smartphone,
  Brain,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Send,
  Sparkles,
  Database,
  Link2,
  ShieldCheck,
  Workflow,
  Languages,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const AIChatbotSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Refs - Fixed with null
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const faqRef = useRef(null);

  // ============ DATA (AI Chatbot) ============

  const features = [
    {
      icon: Globe,
      title: "Website Chatbot",
      description:
        "Engage visitors instantly on your website. Answer questions, capture leads, and guide users to conversion 24/7 without human intervention.",
      highlights: ["Lead Capture", "Product Guidance", "Instant Answers"],
    },
    {
      icon: Smartphone,
      title: "WhatsApp Bot",
      description:
        "Meet customers on WhatsApp - India's favorite messaging app. Handle orders, support queries, and send notifications automatically.",
      highlights: ["WhatsApp Business API", "Broadcast Messages", "Order Updates"],
    },
    {
      icon: MessagesSquare,
      title: "Multi-Platform Support",
      description:
        "One chatbot, everywhere. Deploy on Instagram, Facebook Messenger, Telegram, and your website simultaneously.",
      highlights: ["Instagram DM", "Facebook Messenger", "Telegram"],
    },
    {
      icon: Brain,
      title: "AI-Powered Responses",
      description:
        "Not just keyword matching. Our chatbots understand context, intent, and can handle complex multi-turn conversations naturally.",
      highlights: ["GPT-4 Powered", "Context Memory", "Intent Detection"],
    },
    {
      icon: Database,
      title: "Knowledge Base Training",
      description:
        "Train the bot on your documents, FAQs, product catalogs, and website content. It becomes an expert on your business.",
      highlights: ["PDF Training", "Website Scraping", "Custom Knowledge"],
    },
    {
      icon: Link2,
      title: "CRM & Tool Integration",
      description:
        "Seamlessly connect with HubSpot, Salesforce, Google Sheets, Shopify, and 500+ other tools via API and Zapier.",
      highlights: ["CRM Sync", "Order Management", "Ticket Creation"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your customer queries, FAQs, and conversation flows. We map out every possible user journey and response.",
      duration: "2-3 days",
    },
    {
      number: "02",
      title: "Bot Design & Training",
      description:
        "Building conversation flows, training on your knowledge base, and crafting the perfect personality that matches your brand voice.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Integration & Testing",
      description:
        "Connecting to your website, WhatsApp, CRM, and other tools. Extensive testing with real scenarios to ensure accuracy.",
      duration: "1 week",
    },
    {
      number: "04",
      title: "Launch & Improve",
      description:
        "Go live with monitoring. We analyze conversations, identify gaps, and continuously improve bot responses.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    { name: "OpenAI", logo: "/logos/openai.svg", category: "GPT-4" },
    { name: "n8n", logo: "/logos/n8n.svg", category: "Ai Automation" },
    { name: "Twilio", logo: "/logos/twilio.svg", category: "API" },
    { name: "postgresql", logo: "/logos/postgresql.svg", category: "Data Base" },
    { name: "Firebase", logo: "/logos/firebase.svg", category: "Backend" },
    { name: "Make", logo: "/logos/make.svg", category: "Automation" },
    { name: "Langchain", logo: "/logos/langchain.svg", category: "AI Framework" },
    { name: "Chat API", logo: "/logos/api.svg", category: "Messaging" },
  ];

  const faqs = [
    {
      question: "How is this different from basic chatbots?",
      answer:
        "Unlike rule-based chatbots that only respond to specific keywords, our AI chatbots understand natural language, context, and intent. They can handle complex questions, remember previous messages in a conversation, and provide human-like responses. They're powered by GPT-4 and custom-trained on your business data.",
    },
    {
      question: "Can the chatbot answer questions about my products/services?",
      answer:
        "Absolutely! We train the chatbot on your website content, product catalogs, PDFs, FAQs, and any other documentation you have. It becomes an expert on your business and can answer detailed questions about pricing, features, availability, and more.",
    },
    {
      question: "What happens when the bot can't answer a question?",
      answer:
        "The bot gracefully hands off to a human agent when it encounters questions outside its scope. It can collect user details, create a support ticket, or directly connect to live chat - all while providing the conversation context to your team.",
    },
    {
      question: "Can I see what customers are asking the bot?",
      answer:
        "Yes! You get a complete dashboard with all conversations, analytics, most asked questions, drop-off points, and customer satisfaction scores. This helps identify training gaps and improve the bot over time.",
    },
    {
      question: "How long does setup take for WhatsApp Business API?",
      answer:
        "WhatsApp Business API approval typically takes 2-5 business days. Once approved, we can have your bot live within a week. We handle the entire application and verification process for you.",
    },
    {
      question: "Can the chatbot process orders or bookings?",
      answer:
        "Yes! The chatbot can be integrated with your booking system, Shopify store, or custom order management. Customers can browse products, check availability, make bookings, and even complete payments - all within the chat.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹7,999",
      priceSubtext: "per month",
      duration: "1 Platform",
      features: [
        "Website OR WhatsApp",
        "1,000 conversations/mo",
        "Basic AI responses",
        "Lead capture forms",
        "Email notifications",
        "Email support",
      ],
      ideal: "Small businesses",
    },
    {
      name: "Professional",
      price: "₹19,999",
      priceSubtext: "per month",
      duration: "3 Platforms",
      features: [
        "Website + WhatsApp + 1 more",
        "5,000 conversations/mo",
        "GPT-4 powered responses",
        "Custom knowledge training",
        "CRM integration",
        "Analytics dashboard",
        "Priority support",
      ],
      ideal: "Growing businesses",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹49,999+",
      priceSubtext: "per month",
      duration: "Unlimited",
      features: [
        "All platforms",
        "Unlimited conversations",
        "Advanced AI training",
        "Custom integrations",
        "Multi-language support",
        "API access",
        "Dedicated manager",
        "SLA guarantee",
      ],
      ideal: "Large businesses",
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
    <section className="service-page">
      <div className="service-content">
        {/* ========== HERO SECTION ========== */}
        <div className="service-hero">
          <div className="service-hero-content">
            <div className="service-hero-badge">
              <MessageSquare className="service-hero-badge-icon" />
              <span className="small-description grey">
                AI Automation Chatbot
              </span>
            </div>

            <h1
              className="headline white service-hero-title"
              ref={heroTitleRef}
              style={{ opacity: isClient ? undefined : 1 }}
            >
              Chat Smarter.
              <br />
              Convert Faster.
            </h1>

            <p
              className="big-description grey opacity-blur"
              ref={heroDescRef}
              style={{
                opacity: isClient ? undefined : 1,
                filter: isClient ? undefined : "none",
              }}
            >
              Deploy intelligent AI chatbots on your website, WhatsApp, and 
              social media. Answer queries instantly, capture leads 24/7, 
              and never miss a customer conversation again.
            </p>

            <div className="service-hero-actions">
              <Link href="/contact" className="button service-hero-button">
                <div className="button-content">
                  <span className="small-description">Get Free Chatbot Demo</span>
                  <span className="small-description">Get Free Chatbot Demo</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

             
            </div>
          </div>

          <div className="service-hero-visual">
            <img
              src="/services/aichatbot.jpg"
              alt="AI Chatbot Automation"
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
            <h2 className="subheadline white">
              What Our AI Chatbot Can Do
            </h2>
            <p className="description grey">
              From lead generation to customer support - handle every 
              conversation scenario with intelligent, instant responses.
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
              <h2 className="small-description grey">Implementation</h2>
            </div>
            <h2 className="subheadline white">How We Build Your Chatbot</h2>
            <p className="description grey">
              From planning to launch in weeks. A streamlined process 
              that gets your AI chatbot live and learning quickly.
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
              <h2 className="small-description grey">Technology</h2>
            </div>
            <h2 className="subheadline white">Powered By Best-in-Class AI</h2>
            <p className="description grey">
              We use cutting-edge AI models and platforms to build 
              chatbots that truly understand and help your customers.
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
              <h2 className="small-description grey">Pricing</h2>
            </div>
            <h2 className="subheadline white">AI Chatbot Plans</h2>
            <p className="description grey">
              Affordable plans for every business size. Scale as you grow 
              with transparent, predictable pricing.
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
                  <MessageSquare size={16} />
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

        {/* ========== FAQ SECTION ========== */}
        <div className="service-faq" ref={faqRef}>
          <div className="service-section-header">
            <div className="subheadline-box">
              <Zap className="subheadline-box-icon" />
              <h2 className="small-description grey">FAQs</h2>
            </div>
            <h2 className="subheadline white">Common Questions</h2>
            <p className="description grey">
              Everything you need to know about our AI chatbot service.
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
              Ready to Deploy Your AI Chatbot?
            </h2>
            <p className="description grey">
              Get a free demo and see how an AI chatbot can transform 
              your customer engagement. No commitment required.
            </p>

            <div className="service-cta-actions">
              <Link
                href="/contact"
                className="button service-cta-button-primary"
              >
                <div className="button-content">
                  <span className="small-description">Get Free Demo</span>
                  <span className="small-description">Get Free Demo</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

              <div className="service-cta-info">
                <div className="service-cta-info-item">
                  <MessageSquare size={20} />
                  <span className="small-description white">
                    1M+ messages handled for clients
                  </span>
                </div>
                <div className="service-cta-info-item">
                  <TrendingUp size={20} />
                  <span className="small-description white">
                    70% queries auto-resolved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};