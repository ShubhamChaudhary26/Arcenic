"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "./web-development.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import {
  ArrowUpRight,
  Zap,
  Code,
  Globe,
  Smartphone,
  Gauge,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const WebDevelopmentSection = () => {
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

  // Features/Offerings - REWRITTEN FOR IMPACT
  const features = [
    {
      icon: Globe,
      title: "Custom Web Architecture",
      description:
        "We don't use cookie-cutter templates. We architect scalable, secure, and high-performance web solutions tailored to your specific business logic.",
      highlights: ["Scalable Architecture", "Cloud-Native", "API First"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experiences",
      description:
        "Traffic is mobile. We design for the smallest screen first, ensuring your site creates a fluid, app-like experience on any device.",
      highlights: ["Responsive Layouts", "Touch Optimized", "Adaptive UI"],
    },
    {
      icon: Gauge,
      title: "Performance Engineering",
      description:
        "Speed is a feature. We optimize every line of code, asset, and query to ensure your site loads instantly and retains users.",
      highlights: ["Core Web Vitals Optimized", "Next.js SSR", "Edge Caching"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "We implement banking-grade security protocols, protecting your data and your users from modern cyber threats.",
      highlights: [
        "DDOS Protection",
        "End-to-End Encryption",
        "Regular Audits",
      ],
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description:
        "Built on the same technology used by Netflix and Uber. We use React and Next.js to ensure your site is future-proof.",
      highlights: ["React Ecosystem", "TypeScript", "Serverless Functions"],
    },
    {
      icon: Layers,
      title: "Headless CMS Integration",
      description:
        "Manage your content without touching code. We integrate intuitive CMS platforms that give your marketing team full control.",
      highlights: ["Sanity / Strapi", "Live Preview", "Dynamic Content"],
    },
  ];

  // Development Process - TIMELINES ADJUSTED FOR REALISM
  const process = [
    {
      number: "01",
      title: "Strategy & Architecture",
      description:
        "We dig deep into your business goals, user personas, and technical requirements to create a blueprint for success.",
      duration: "1 Week",
    },
    {
      number: "02",
      title: "UI/UX & Prototyping",
      description:
        "We create high-fidelity interactive prototypes. You'll see exactly how the final product will look and feel before we write a line of code.",
      duration: "2 Weeks",
    },
    {
      number: "03",
      title: "Agile Development",
      description:
        "Our engineers build your system in sprints, providing you with regular updates and demos to ensure we remain aligned with the vision.",
      duration: "4-8 Weeks",
    },
    {
      number: "04",
      title: "Deployment & Scale",
      description:
        "We handle the launch, server configuration, and SEO setup. Post-launch, we monitor performance to ensure stability.",
      duration: "Ongoing",
    },
  ];

  // Tech Stack
  const techStack = [
    { name: "React", logo: "/logos/react.svg", category: "Frontend" },
    { name: "Next.js", logo: "/logos/nextjs.svg", category: "Framework" },
    { name: "TypeScript", logo: "/logos/typescript.svg", category: "Safety" },
    { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" }, // Swapped Mongo for SQL (more enterprise feel)
    { name: "Tailwind", logo: "/logos/tailwind.svg", category: "Styling" },
    { name: "AWS", logo: "/logos/aws.svg", category: "Infrastructure" },
    { name: "Vercel", logo: "/logos/vercel.svg", category: "Edge Network" },
  ];

  // Related Projects
  const relatedProjects = [
    {
      title: "Global E-Commerce Platform",
      category: "Full Stack Development",
      image: "/works/heave.webp",
      description: "A headless commerce solution handling 10k+ daily users.",
      tech: ["Next.js", "Shopify Headless", "Redis"],
      link: "/works/ecommerce-platform",
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Web Application",
      image: "/works/essentia.webp",
      description: "Real-time data visualization platform for B2B clients.",
      tech: ["React", "D3.js", "Python"],
      link: "/works/saas-dashboard",
    },
    {
      title: "Corporate Identity Site",
      category: "Marketing Website",
      image: "/works/kinimatic.webp",
      description: "Award-winning design implementation with rich animations.",
      tech: ["GSAP", "Next.js", "Sanity"],
      link: "/works/corporate-website",
    },
  ];

  // FAQs - POLISHED FOR AUTHORITY
  const faqs = [
    {
      question: "Do you build from scratch or use templates?",
      answer:
        "We strictly build custom solutions. Templates are bloated, slow, and insecure. We write clean, semantic code tailored specifically to your design and functional needs.",
    },
    {
      question: "Will I be able to update content myself?",
      answer:
        "Yes. We integrate modern Headless CMS solutions (like Strapi or Sanity) that allow non-technical team members to easily update text, images, and blogs without breaking the site.",
    },
    {
      question: "How do you ensure the website is fast?",
      answer:
        "Performance is core to our process. We use Server-Side Rendering (SSR), image optimization, code splitting, and Edge caching to aim for a 95+ Google PageSpeed score.",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "We don't disappear. We offer post-launch support periods and ongoing maintenance retainers to ensure your site stays secure, updated, and performing at its peak.",
    },
    {
      question: "Do you handle hosting and domains?",
      answer:
        "We guide you through the process. We recommend modern hosting platforms like Vercel or AWS for superior performance and can manage the entire setup for you.",
    },
  ];

  // Engagement Models (Formerly Pricing) - MOVED TO VALUE BASED
const pricingPlans = [
  {
    name: "MVP / Startup",
    price: "₹10,999",
    priceSubtext: "Limited Offer",
    duration: "2-3 Weeks",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "CMS Integration",
      "Basic SEO Setup",
      "15 Days Support",
    ],
    ideal: "Early-stage startups",
  },
  {
    name: "Business Scale",
    price: "₹24,999",
    priceSubtext: "Best Value",
    duration: "4-6 Weeks",
    features: [
      "Advanced Interactions",
      "Performance Optimization",
      "Integrations (CRM/Email)",
      "Advanced SEO Schema",
      "2 Months Support",
    ],
    ideal: "Growing brands",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹59,999+",
    priceSubtext: "Starting from",
    duration: "Custom Timeline",
    features: [
      "Microservices Architecture",
      "Custom Web Apps/SaaS",
      "High-Traffic Infrastructure",
      "Security Audits",
      "Dedicated Team",
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
        // Hero animations
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

        // Features animation
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

        // Process animation
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

        // Tech stack animation
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

        // Projects animation
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

        // FAQ animation
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

  // ============ FAQ TOGGLE ============
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
                <Zap className="service-hero-badge-icon" />
                <span className="small-description grey">Web Development</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Build Digital.
                <br />
                Grow Business.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                We don't just write code; we engineer digital assets. Using
                Next.js and modern architectures, we build websites that are
                fast, secure, and designed to scale with your business.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">
                      Discuss Your Project
                    </span>
                    <span className="small-description">
                      Discuss Your Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                {/* <div className="service-hero-stats">
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">50+</span>
                    <span className="small-description grey">
                      Projects Delivered
                    </span>
                  </div>
                  <div className="service-hero-stat">
                    <span className="small-subheadline white">100%</span>
                    <span className="small-description grey">
                      Client Satisfaction
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="service-hero-visual">
              <img
                src="/images/image.png"
                alt="Web Development Services"
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
                Enterprise-Grade Development
              </h2>
              <p className="description grey">
                We bridge the gap between design and technology to deliver
                websites that perform as beautifully as they look.
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
                <h2 className="small-description grey">Our Workflow</h2>
              </div>
              <h2 className="subheadline white">A Transparent Process</h2>
              <p className="description grey">
                We believe in keeping you in the loop. From the first line of
                code to the final deployment, our process is collaborative and
                clear.
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
                <h2 className="small-description grey">Technology Stack</h2>
              </div>
              <h2 className="subheadline white">Built With Modern Tools</h2>
              <p className="description grey">
                We use industry-leading technologies to build fast, scalable,
                and maintainable web solutions.
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

          {/* ========== PRICING SECTION (Renamed to Engagement Models) ========== */}
          <div className="service-pricing">
            <div className="service-section-header">
              <div className="subheadline-box">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Engagement Models</h2>
              </div>
              <h2 className="subheadline white">Flexible Partnerships</h2>
              <p className="description grey">
                Whether you are a startup needing an MVP or an enterprise
                needing a platform, we have a model that fits.
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

      {/* Pricing Section */}
      <div className="service-pricing-amount">
        <span 
          className="small-description grey" 
          style={{ fontSize: "0.85rem" }}
        >
          {plan.priceSubtext}
        </span>
        <span
          className="headline white"
          style={{ 
            fontSize: "2.5rem", 
            display: "block", 
            marginTop: "0.25rem",
            fontWeight: "700"
          }}
        >
          {plan.price}
        </span>
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
          <span className="small-description">Book Now</span>
          <span className="small-description">Book Now</span>
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
              <h2 className="subheadline white">
                Recent Web Development Projects
              </h2>
              <p className="description grey">
                See how we've helped businesses transform their digital presence
                with custom web solutions.
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
                Everything you need to know about our web development services.
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
                Ready to Build Something Amazing?
              </h2>
              <p className="description grey">
                Let's discuss your project and create a web solution that drives
                results. Free consultation, no obligations.
              </p>

              <div className="service-cta-actions">
                <Link
                  href="/contact"
                  className="button service-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">
                      Start Your Project
                    </span>
                    <span className="small-description">
                      Start Your Project
                    </span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

                <div className="service-cta-info">
                  <div className="service-cta-info-item">
                    <Users size={20} />
                    <span className="small-description white">
                      Join 30+ satisfied clients
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <TrendingUp size={20} />
                    <span className="small-description white">
                      Average 150% ROI increase
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
