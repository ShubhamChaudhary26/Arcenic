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
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  BarChart3,
  Truck,
  Shield,
  Globe,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Users,
  IndianRupee,
  Store,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const EcommerceSolutionsSection = () => {
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
      icon: Store,
      title: "Custom Online Stores",
      description:
        "Fully customized e-commerce websites tailored to your brand identity and business requirements. Unique designs that stand out.",
      highlights: ["Custom Design", "Brand Integration", "Unique Features"],
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Seamless integration with all major payment gateways - Razorpay, Stripe, PayU, Paytm, and more. Secure transactions guaranteed.",
      highlights: ["Razorpay", "Stripe", "UPI/Wallets"],
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time stock tracking, low stock alerts, and automated inventory updates across all your sales channels.",
      highlights: ["Real-time Sync", "Stock Alerts", "Multi-warehouse"],
    },
    {
      icon: Truck,
      title: "Shipping Integration",
      description:
        "Connect with Shiprocket, Delhivery, and other logistics partners. Automatic shipping rate calculation and tracking.",
      highlights: ["Auto Rates", "Live Tracking", "Multi-carrier"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description:
        "Comprehensive dashboard with sales analytics, customer insights, and inventory reports to make data-driven decisions.",
      highlights: ["Sales Reports", "Customer Insights", "Revenue Tracking"],
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description:
        "Mobile-first design ensuring your store looks perfect and converts well on all devices. PWA support available.",
      highlights: ["Mobile-First", "PWA Ready", "Fast Loading"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Business Analysis",
      description:
        "Understanding your products, target audience, competition, and business goals to create the perfect e-commerce strategy.",
      duration: "2-3 days",
    },
    {
      number: "02",
      title: "Store Design",
      description:
        "Creating conversion-focused designs with optimized product pages, smooth checkout flow, and trust elements.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Building your store with payment gateways, shipping partners, inventory systems, and all required integrations.",
      duration: "2-4 weeks",
    },
    {
      number: "04",
      title: "Launch & Growth",
      description:
        "Launching your store with SEO optimization, analytics setup, and ongoing support to maximize sales.",
      duration: "Ongoing",
    },
  ];

  const techStack = [
    { name: "Shopify", logo: "/logos/shopify.svg", category: "Platform" },
    {
      name: "WooCommerce",
      logo: "/logos/woocommerce.svg",
      category: "Platform",
    },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Custom" },
    { name: "Razorpay", logo: "/logos/razorpay.svg", category: "Payment" },
    { name: "Stripe", logo: "/logos/stripe.svg", category: "Payment" },
    { name: "Shiprocket", logo: "/logos/shiprocket.svg", category: "Shipping" },
    { name: "MongoDB", logo: "/logos/mongodb.svg", category: "Database" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Hosting" },
  ];

  const relatedProjects = [
    {
      title: "Fashion Boutique Store",
      category: "Fashion E-Commerce",
      image: "/works/fashion-store.webp",
      description:
        "Complete fashion store with size guides, wishlists, and AR try-on.",
      tech: ["Shopify", "Razorpay", "Shiprocket"],
      link: "/works/fashion-boutique",
    },
    {
      title: "Electronics Marketplace",
      category: "Multi-vendor Platform",
      image: "/works/electronics-store.webp",
      description:
        "Multi-vendor marketplace with EMI options and warranty management.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "/works/electronics-marketplace",
    },
    {
      title: "Grocery Delivery App",
      category: "Food & Grocery",
      image: "/works/grocery-store.webp",
      description:
        "Quick commerce platform with slot booking and real-time delivery tracking.",
      tech: ["React Native", "Node.js", "Firebase"],
      link: "/works/grocery-delivery",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build an e-commerce website?",
      answer:
        "A basic Shopify/WooCommerce store takes 2-3 weeks, while a custom-built e-commerce platform can take 6-8 weeks. Timeline depends on the number of products, custom features, and integrations required. We'll provide an exact timeline after understanding your requirements.",
    },
    {
      question: "Which platform is best - Shopify, WooCommerce, or custom?",
      answer:
        "Shopify is great for quick setup and ease of use. WooCommerce is ideal if you need more customization and have a WordPress site. Custom development is best for unique requirements and full control. We'll recommend the best option based on your specific needs and budget.",
    },
    {
      question: "What payment gateways do you integrate?",
      answer:
        "We integrate all major Indian and international payment gateways including Razorpay, PayU, Paytm, CCAvenue, Stripe, and PayPal. We also support UPI, wallets, EMI options, and Buy Now Pay Later services like Simpl and LazyPay.",
    },
    {
      question: "Can you migrate my existing store to a new platform?",
      answer:
        "Yes! We handle complete store migrations including products, customers, orders, and reviews. We ensure zero downtime and maintain your SEO rankings during the migration. We've migrated stores from Magento, OpenCart, and other platforms.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Absolutely! We offer monthly maintenance packages that include security updates, plugin updates, bug fixes, product uploads, and technical support. We also provide training for your team to manage the store independently.",
    },
  ];

const pricingPlans = [
  {
    name: "Starter Store",
    price: "₹12,999",
    priceSubtext: "Starting from",
    duration: "2-3 weeks",
    features: [
      "Up to 50 products",
      "Shopify/WooCommerce setup",
      "Payment gateway (1)",
      "Basic theme customization",
      "Mobile responsive",
      "1 month support",
    ],
    ideal: "Small businesses, startups",
  },
  {
    name: "Business Store",
    price: "₹29,999",
    priceSubtext: "Starting from",
    duration: "3-5 weeks",
    features: [
      "Up to 500 products",
      "Custom design",
      "Multiple payment gateways",
      "Shipping integration",
      "Inventory management",
      "Analytics dashboard",
      "3 months support",
    ],
    ideal: "Growing businesses",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹59,999+",
    priceSubtext: "Starting from",
    duration: "6-10 weeks",
    features: [
      "Unlimited products",
      "Custom development",
      "Multi-vendor support",
      "Advanced integrations",
      "ERP/CRM connection",
      "Dedicated support",
      "Performance optimization",
    ],
    ideal: "Large businesses, marketplaces",
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
                <ShoppingCart className="service-hero-badge-icon" />
                <span className="small-description grey">
                  E-Commerce Solutions
                </span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Sell Online.
                <br />
                Grow Revenue.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From local shop to online empire. We build powerful e-commerce
                stores that convert visitors into customers and customers into
                loyal fans.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">Launch Your Store</span>
                    <span className="small-description">Launch Your Store</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-hero-stats">
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">₹2Cr+</span>
                    <span className="small-description grey">
                      Revenue Generated
                    </span>
                  </div>
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">35+</span>
                    <span className="small-description grey">
                      Stores Launched
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/ecom.jpg"
                alt="E-Commerce Solutions"
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
              <h2 className="subheadline white">
                Complete E-Commerce Ecosystem
              </h2>
              <p className="description grey">
                Everything you need to sell online successfully - from store
                setup to payment processing to order fulfillment.
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
              <h2 className="subheadline white">From Idea to Online Store</h2>
              <p className="description grey">
                A proven process that gets your store live quickly while
                ensuring quality and scalability.
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
                <h2 className="small-description grey">Platforms & Tools</h2>
              </div>
              <h2 className="subheadline white">Trusted Technologies</h2>
              <p className="description grey">
                We work with industry-leading platforms and integrate with all
                major payment and shipping providers.
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
              <h2 className="subheadline white">E-Commerce Packages</h2>
              <p className="description grey">
                Choose a package that fits your business size. All packages
                include free consultation and post-launch support.
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
                <h2 className="small-description grey">Portfolio</h2>
              </div>
              <h2 className="subheadline white">Stores We've Built</h2>
              <p className="description grey">
                Real stores generating real revenue. See how we've helped
                businesses succeed online.
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
                Everything you need to know about our e-commerce services.
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
                Ready to Start Selling Online?
              </h2>
              <p className="description grey">
                Let's build an online store that turns browsers into buyers.
                Free consultation to discuss your products and goals.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">Launch Your Store</span>
                    <span className="small-description">Launch Your Store</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <IndianRupee size={20} />
                    <span className="small-description white">
                      ₹2Cr+ revenue generated for clients
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      Average 3x conversion improvement
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
