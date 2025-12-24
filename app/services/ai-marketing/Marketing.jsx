"use client";
import React, { useEffect, useRef, useState } from "react";
import "../services-shared.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Megaphone,
  Target,
  TrendingUp,
  BarChart3,
  Mail,
  Share2,
  PenTool,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Sparkles,
  Brain,
  MousePointerClick,
  Users,
  LineChart,
  Calendar,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const AIMarketingSection = () => {
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

  // ============ DATA (AI Marketing) ============

  const features = [
    {
      icon: PenTool,
      title: "AI Content Generation",
      description:
        "Generate engaging social media posts, blog articles, ad copies, and email content in seconds. Trained on your brand voice for consistent messaging.",
      highlights: ["Social Posts", "Blog Articles", "Ad Copies"],
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description:
        "Auto-schedule posts across Instagram, Facebook, LinkedIn, and Twitter. AI picks the best times for maximum engagement.",
      highlights: ["Auto Scheduling", "Multi-Platform", "Best Time Posting"],
    },
    {
      icon: Target,
      title: "Ad Campaign Optimization",
      description:
        "AI analyzes your ad performance in real-time and automatically adjusts targeting, bids, and creatives to maximize ROAS.",
      highlights: ["Auto Optimization", "A/B Testing", "Budget Allocation"],
    },
    {
      icon: Mail,
      title: "Email Marketing AI",
      description:
        "Personalized email sequences that adapt based on user behavior. AI writes subject lines, content, and determines send times.",
      highlights: ["Smart Sequences", "Personalization", "Send Time AI"],
    },
    {
      icon: LineChart,
      title: "Analytics & Insights",
      description:
        "AI-powered dashboards that turn complex data into actionable insights. Predict trends and get recommendations automatically.",
      highlights: ["Trend Prediction", "ROI Tracking", "Smart Reports"],
    },
    {
      icon: Users,
      title: "Lead Scoring & Nurturing",
      description:
        "AI scores leads based on behavior and automatically nurtures them with personalized content until they're sales-ready.",
      highlights: ["Behavior Scoring", "Auto Nurturing", "Sales Handoff"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Marketing Audit",
      description:
        "We analyze your current marketing efforts, competitors, target audience, and identify opportunities for AI automation.",
      duration: "3-5 days",
    },
    {
      number: "02",
      title: "Strategy & Setup",
      description:
        "Creating AI-powered marketing workflows, training content generators on your brand voice, and setting up automation rules.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Integration & Launch",
      description:
        "Connecting with your ad platforms, email tools, CRM, and social accounts. Testing all automations before going live.",
      duration: "1 week",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "Continuous AI learning from campaign data. Monthly reviews, performance optimization, and scaling winning strategies.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    { name: "OpenAI", logo: "/logos/openai.svg", category: "Content AI" },
    { name: "Meta Ads", logo: "/logos/meta.svg", category: "Advertising" },
    { name: "Google Ads", logo: "/logos/google-ads.svg", category: "Advertising" },
    { name: "HubSpot", logo: "/logos/hubspot.svg", category: "Marketing" },
    { name: "Mailchimp", logo: "/logos/mailchimp.svg", category: "Email" },
    { name: "Buffer", logo: "/logos/buffer.svg", category: "Social" },
    { name: "Zapier", logo: "/logos/zapier.svg", category: "Automation" },
    { name: "Make", logo: "/logos/make.svg", category: "Workflows" },
  ];

  const faqs = [
    {
      question: "How does AI content generation maintain my brand voice?",
      answer:
        "We train the AI on your existing content - website copy, social posts, emails, and brand guidelines. The AI learns your tone, style, and messaging patterns. You can also provide feedback on generated content, and the AI continuously improves to match your voice perfectly.",
    },
    {
      question: "Can AI really optimize my ad campaigns better than humans?",
      answer:
        "AI excels at analyzing large amounts of data quickly. It can process thousands of data points per second to identify patterns humans might miss. For routine optimizations like bid adjustments, audience refinement, and A/B testing, AI is faster and more consistent. However, we combine AI with human strategy for the best results.",
    },
    {
      question: "Will the content look robotic or AI-generated?",
      answer:
        "No! Modern AI, especially when properly trained on your brand, creates natural, engaging content. We always have human review in the workflow for important content. Most people cannot distinguish well-prompted AI content from human-written copy.",
    },
    {
      question: "What marketing platforms do you integrate with?",
      answer:
        "We integrate with all major platforms: Meta (Facebook/Instagram) Ads, Google Ads, LinkedIn Ads, Twitter, TikTok, Mailchimp, HubSpot, Klaviyo, and 200+ other marketing tools via APIs and automation platforms like Zapier and Make.",
    },
    {
      question: "How do you measure success and ROI?",
      answer:
        "We set up comprehensive tracking from day one. You'll get dashboards showing cost per lead, ROAS (Return on Ad Spend), engagement rates, conversion rates, and revenue attribution. Monthly reports highlight wins, learnings, and optimization opportunities.",
    },
    {
      question: "How much can I save with AI marketing automation?",
      answer:
        "Most clients see 40-60% reduction in time spent on routine marketing tasks and 30-50% improvement in campaign performance. The AI works 24/7, responds instantly to data changes, and eliminates human errors in repetitive tasks.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹14,999",
      priceSubtext: "per month",
      duration: "Essential Automation",
      features: [
        "AI Content Generation (50 posts/mo)",
        "2 Social Media Platforms",
        "Basic Email Sequences",
        "Monthly Performance Report",
        "Email Support",
      ],
      ideal: "Small businesses",
    },
    {
      name: "Growth",
      price: "₹34,999",
      priceSubtext: "per month",
      duration: "Full Marketing Suite",
      features: [
        "Unlimited AI Content",
        "All Social Platforms",
        "Ad Campaign Management",
        "Advanced Email Automation",
        "Lead Scoring",
        "Weekly Reports",
        "Priority Support",
      ],
      ideal: "Growing businesses",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹74,999+",
      priceSubtext: "per month",
      duration: "Complete Solution",
      features: [
        "Everything in Growth",
        "Custom AI Training",
        "Multi-brand Support",
        "Advanced Analytics",
        "Dedicated Strategist",
        "API Access",
        "SLA Guarantee",
      ],
      ideal: "Large businesses, agencies",
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
              <Megaphone className="service-hero-badge-icon" />
              <span className="small-description grey">
                AI Marketing Agent
              </span>
            </div>

            <h1
              className="headline white service-hero-title"
              ref={heroTitleRef}
              style={{ opacity: isClient ? undefined : 1 }}
            >
              Market Smarter
              <br />
              Grow Faster.
            </h1>

            <p
              className="big-description grey opacity-blur"
              ref={heroDescRef}
              style={{
                opacity: isClient ? undefined : 1,
                filter: isClient ? undefined : "none",
              }}
            >
              AI-powered marketing automation that creates content, optimizes 
              ads, and nurtures leads 24/7. Get better results with less effort 
              while your competition sleeps.
            </p>

            <div className="service-hero-actions">
              <Link href="/contact" className="button service-hero-button">
                <div className="button-content">
                  <span className="small-description">Get Free Marketing Audit</span>
                  <span className="small-description">Get Free Marketing Audit</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

              <div className="service-hero-stats">
                <div className="service-hero-stat">
                  <span className="small-subheadline white">3x</span>
                  <span className="small-description grey">
                    Avg. ROAS Improvement
                  </span>
                </div>
                <div className="service-hero-stat">
                  <span className="small-subheadline white">50%</span>
                  <span className="small-description grey">
                    Time Saved
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-hero-visual">
            <img
              src="/services/aimarketing.jpg"
              alt="AI Marketing Automation"
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
              What Our AI Marketing Agent Can Do
            </h2>
            <p className="description grey">
              From content creation to campaign optimization - automate 
              your entire marketing funnel with intelligent AI.
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
            <h2 className="subheadline white">How We Deploy AI Marketing</h2>
            <p className="description grey">
              A strategic approach that combines AI power with proven 
              marketing principles for maximum impact.
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
            <h2 className="subheadline white">Powered By Marketing Leaders</h2>
            <p className="description grey">
              We integrate with the best marketing platforms and AI tools 
              to create a seamless automation ecosystem.
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
            <h2 className="subheadline white">AI Marketing Plans</h2>
            <p className="description grey">
              Flexible plans designed to scale with your marketing needs. 
              Start small, grow big with AI-powered results.
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
                  <Megaphone size={16} />
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
              Everything you need to know about our AI marketing services.
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
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="description grey">
              Get a free marketing audit and discover how AI can 
              transform your campaigns. No commitment required.
            </p>

            <div className="service-cta-actions">
              <Link
                href="/contact"
                className="button service-cta-button-primary"
              >
                <div className="button-content">
                  <span className="small-description">Get Free Audit</span>
                  <span className="small-description">Get Free Audit</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>

              <div className="service-cta-info">
                <div className="service-cta-info-item">
                  <Target size={20} />
                  <span className="small-description white">
                    3x average ROAS improvement
                  </span>
                </div>
                <div className="service-cta-info-item">
                  <TrendingUp size={20} />
                  <span className="small-description white">
                    50% reduction in marketing costs
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