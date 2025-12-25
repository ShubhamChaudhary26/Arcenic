"use client";
import React, { useEffect, useRef, useState } from "react";
// Removed Lenis to fix the module error
import "../services-shared.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Calendar,
  Volume2,
  Languages,
  Brain,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const AICallingAgentSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // FIXED: Added 'null' to all useRef calls
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const faqRef = useRef(null);

  // ============ DATA (AI Calling Agent) ============

  const features = [
    {
      icon: PhoneOutgoing,
      title: "Outbound Calling",
      description:
        "Automate sales calls, follow-ups, appointment reminders, and payment collections. Your AI agent makes thousands of calls simultaneously.",
      highlights: ["Lead Outreach", "Payment Reminders", "Survey Calls"],
    },
    {
      icon: PhoneIncoming,
      title: "Inbound Call Handling",
      description:
        "Never miss a customer call. AI answers instantly, handles queries, books appointments, and transfers complex issues to humans.",
      highlights: ["24/7 Availability", "Zero Wait Time", "Smart Routing"],
    },
    {
      icon: Volume2,
      title: "Natural Voice AI",
      description:
        "Human-like conversations with advanced neural voice synthesis. Customers won't realize they're talking to AI until you tell them.",
      highlights: ["Human-Like Voice", "Emotional Tone", "Natural Pauses"],
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description:
        "Speak your customer's language. AI agents fluent in Hindi, English, Gujarati, and 40+ other languages with native accents.",
      highlights: ["Hindi + English", "Regional Languages", "Auto Detection"],
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description:
        "Seamless calendar integration. AI checks availability, books slots, sends confirmations, and handles rescheduling automatically.",
      highlights: ["Google Calendar", "Real-time Slots", "Auto Reminders"],
    },
    {
      icon: Brain,
      title: "Intelligent Conversations",
      description:
        "Context-aware AI that remembers past interactions, handles objections, and adapts responses based on customer sentiment.",
      highlights: ["Context Memory", "Objection Handling", "Sentiment Analysis"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Script Design",
      description:
        "We understand your call flows, create conversation scripts, handle objections, and design the perfect voice persona for your brand.",
      duration: "3-5 days",
    },
    {
      number: "02",
      title: "Voice Training & Testing",
      description:
        "Training the AI with your specific use cases, testing with sample calls, and fine-tuning responses until it's perfect.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Integration & Setup",
      description:
        "Connecting with your phone system, CRM, calendar, and other tools. Setting up call routing and escalation rules.",
      duration: "1 week",
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description:
        "Go live with monitoring. We analyze call recordings, track success rates, and continuously improve AI performance.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    { name: "OpenAI", logo: "/logos/openai.svg", category: "LLM" },
    { name: "Twilio", logo: "/logos/twilio.svg", category: "Telephony" },
    { name: "Vapi AI", logo: "/logos/vapi.svg", category: "Voice AI" },
    { name: "n8n", logo: "/logos/n8n.svg", category: "Ai Automation" },
    { name: "Make", logo: "/logos/make.svg", category: "Automation" },
    { name: "GoHighLevel", logo: "/logos/gohighlevel.svg", category: "CRM" },
    { name: "ElevenLabs", logo: "/logos/elevenlab.png", category: "Voice" },
    { name: "Cal.com", logo: "/logos/calcom.png", category: "Scheduling" },
  ];

  const faqs = [
    {
      question: "How natural does the AI voice sound?",
      answer:
        "Our AI uses advanced neural voice synthesis. The voice includes natural pauses, emotional inflections, and conversational fillers like 'umm' and 'let me check'. In blind tests, 85% of people couldn't distinguish it from a human caller.",
    },
    {
      question: "Can the AI handle interruptions and complex questions?",
      answer:
        "Yes! The AI is trained to handle interruptions naturally. For complex questions outside its scope, it gracefully transfers the call to a human agent while providing full context.",
    },
    {
      question: "What happens if someone asks to speak to a human?",
      answer:
        "The AI immediately respects this request and transfers the call to your team. You can set up rules for when transfers should happen - specific keywords or sentiment detection.",
    },
    {
      question: "How many calls can the AI handle simultaneously?",
      answer:
        "There's no practical limit. The AI can handle 1000+ concurrent calls if needed. It scales instantly without any additional setup.",
    },
    {
      question: "Can I use my existing phone numbers?",
      answer:
        "Absolutely! We can integrate with your existing phone system and numbers. Alternatively, we can provision new numbers for you.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹9,999",
      priceSubtext: "per month",
      duration: "Up to 500 calls/mo",
      features: [
        "1 AI Voice Agent",
        "500 minutes included",
        "Basic call scripts",
        "Call recordings",
        "Email support",
      ],
      ideal: "Small businesses",
    },
    {
      name: "Professional",
      price: "₹29,999",
      priceSubtext: "per month",
      duration: "Up to 2,000 calls/mo",
      features: [
        "3 AI Voice Agents",
        "2,000 minutes included",
        "Custom voice & persona",
        "CRM integration",
        "Analytics dashboard",
        "Priority support",
      ],
      ideal: "Growing businesses",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹79,999+",
      priceSubtext: "per month",
      duration: "Unlimited calls",
      features: [
        "Unlimited AI Agents",
        "Unlimited minutes",
        "Custom AI training",
        "Multi-language support",
        "API access",
        "Dedicated manager",
      ],
      ideal: "Enterprises",
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
    // Removed ReactLenis wrapper
    <section className="service-page">
      <div className="service-content">
        {/* ========== HERO SECTION ========== */}
        <div className="service-hero">
          <div className="service-hero-content">
            <div className="service-hero-badge">
              <Phone className="service-hero-badge-icon" />
              <span className="small-description grey">
                AI Calling Agent
              </span>
            </div>

            <h1
              className="headline white service-hero-title"
              ref={heroTitleRef}
              style={{ opacity: isClient ? undefined : 1 }}
            >
              Automate Calls.
              <br />
              Scale Instantly.
            </h1>

            <p
              className="big-description grey opacity-blur"
              ref={heroDescRef}
              style={{
                opacity: isClient ? undefined : 1,
                filter: isClient ? undefined : "none",
              }}
            >
              AI voice agents that make and receive calls 24/7 with human-like 
              conversations. Handle thousands of calls simultaneously while 
              reducing costs by 80%.
            </p>

            <div className="service-hero-actions">
              <Link href="/contact" className="button service-hero-button">
                <div className="button-content">
                  <span className="small-description">Get Free Demo Call</span>
                  <span className="small-description">Get Free Demo Call</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

           
            </div>
          </div>

          <div className="service-hero-visual">
            <img
              src="/services/aicallingagent.jpg"
              alt="AI Calling Agent"
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
              What Our AI Calling Agent Can Do
            </h2>
            <p className="description grey">
              From outbound sales to inbound support - handle every call 
              scenario with intelligent, natural conversations.
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
            <h2 className="subheadline white">How We Deploy Your AI Agent</h2>
            <p className="description grey">
              From script to live calls in weeks, not months. A proven process 
              that gets your AI calling agent operational quickly.
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
            <h2 className="subheadline white">Powered By Leading AI</h2>
            <p className="description grey">
              We use the best voice AI, telephony, and automation platforms 
              to ensure crystal-clear calls and intelligent conversations.
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
            <h2 className="subheadline white">AI Calling Agent Plans</h2>
            <p className="description grey">
              Start small, scale infinitely. Pay only for what you use with 
              transparent pricing and no hidden fees.
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
                  <PhoneCall size={16} />
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
              Everything you need to know about our AI calling agent service.
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
              Ready to Automate Your Calls?
            </h2>
            <p className="description grey">
              Get a free demo call from our AI agent. Experience the future 
              of business communication firsthand.
            </p>

            <div className="service-cta-actions">
              <Link
                href="/contact"
                className="button service-cta-button-primary"
              >
                <div className="button-content">
                  <span className="small-description">Request Demo Call</span>
                  <span className="small-description">Request Demo Call</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

              <div className="service-cta-info">
                <div className="service-cta-info-item">
                  <Phone size={20} />
                  <span className="small-description white">
                    50,000+ calls handled for clients
                  </span>
                </div>
                <div className="service-cta-info-item">
                  <TrendingUp size={20} />
                  <span className="small-description white">
                    80% reduction in calling costs
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