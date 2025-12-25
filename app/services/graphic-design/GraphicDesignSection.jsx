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
  Palette,
  Image as ImageIcon,
  Printer,
  Share2,
  Package,
  Award,
  Sparkles,
  PenTool,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Layers,
  Dribbble,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const GraphicDesignSection = () => {
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
      icon: Palette,
      title: "Logo Design",
      description:
        "Memorable, timeless logos that capture your brand essence. Multiple concepts, unlimited revisions until you're 100% satisfied.",
      highlights: ["3+ Concepts", "Unlimited Revisions", "Vector Files"],
    },
    {
      icon: Share2,
      title: "Social Media Graphics",
      description:
        "Eye-catching posts, stories, and ads for Instagram, Facebook, LinkedIn. Templates for consistent posting.",
      highlights: ["All Platforms", "Editable Templates", "Quick Turnaround"],
    },
    {
      icon: Printer,
      title: "Print Design",
      description:
        "Brochures, flyers, posters, banners, and business cards designed for impact. Print-ready files with proper bleed and color modes.",
      highlights: ["Print-Ready", "CMYK Color", "High Resolution"],
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "Product packaging that stands out on shelves and drives sales. Box design, labels, and wrapping materials.",
      highlights: ["3D Mockups", "Die-cut Files", "Label Design"],
    },
    {
      icon: ImageIcon,
      title: "Marketing Materials",
      description:
        "Complete marketing collateral - presentations, eBooks, infographics, email templates, and ad creatives.",
      highlights: ["Presentations", "Infographics", "Email Design"],
    },
    {
      icon: Layers,
      title: "Brand Collateral",
      description:
        "Consistent brand materials across all touchpoints. Letterheads, certificates, ID cards, and stationery design.",
      highlights: ["Letterheads", "ID Cards", "Certificates"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Brief & Research",
      description:
        "Understanding your vision, target audience, and competition. Gathering inspiration and reference materials.",
      duration: "1-2 days",
    },
    {
      number: "02",
      title: "Concept Creation",
      description:
        "Creating initial design concepts based on the brief. Exploring different styles, colors, and layouts.",
      duration: "2-3 days",
    },
    {
      number: "03",
      title: "Feedback & Refinement",
      description:
        "Incorporating your feedback and refining the chosen concept. Multiple revision rounds until perfection.",
      duration: "2-4 days",
    },
    {
      number: "04",
      title: "Final Delivery",
      description:
        "Delivering final designs in all required formats - vector, PNG, print-ready PDFs, and source files.",
      duration: "1 day",
    },
  ];

  const techStack = [
    {
      name: "Illustrator",
      logo: "/logos/illustrator.svg",
      category: "Vector Design",
    },
    {
      name: "Photoshop",
      logo: "/logos/photoshop.svg",
      category: "Image Editing",
    },
    {
      name: "InDesign",
      logo: "/logos/indesign.svg",
      category: "Layout Design",
    },
    { name: "Figma", logo: "/logos/figma.svg", category: "UI Design" },
    {
      name: "CorelDRAW",
      logo: "/logos/coreldraw.png",
      category: "Vector Design",
    },
    { name: "Canva Pro", logo: "/logos/canva.svg", category: "Templates" },
    {
      name: "After Effects",
      logo: "/logos/ahrefs.svg",
      category: "Motion",
    },
    { name: "Blender", logo: "/logos/blender.svg", category: "3D Design" },
  ];

  const relatedProjects = [
    {
      title: "Restaurant Branding",
      category: "Complete Brand Identity",
      image: "/works/restaurant-design.webp",
      description: "Logo, menu design, signage, and social media templates.",
      tech: ["Logo", "Print", "Social Media"],
      link: "/works/restaurant-branding",
    },
    {
      title: "Product Packaging",
      category: "Packaging Design",
      image: "/works/product-packaging.webp",
      description: "Premium tea brand packaging with minimalist aesthetic.",
      tech: ["3D Mockups", "Label", "Box Design"],
      link: "/works/product-packaging",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Graphics",
      image: "/works/social-campaign.webp",
      description: "30-day social media content for real estate company.",
      tech: ["Instagram", "Facebook", "Templates"],
      link: "/works/social-campaign",
    },
  ];

  const faqs = [
    {
      question: "How many logo concepts will I receive?",
      answer:
        "We provide 3 unique logo concepts in the initial round. You choose one, and we refine it through unlimited revisions until you're completely satisfied. Each concept comes with different styles and variations.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive vector files (AI, EPS, SVG), high-resolution PNG (transparent and white background), JPG, and print-ready PDF. For social media, you get optimized files for each platform. All source files are included.",
    },
    {
      question: "Can you match my existing brand colors?",
      answer:
        "Absolutely! Share your brand guidelines or color codes (Pantone, CMYK, RGB, HEX), and we'll match them exactly. We can also suggest complementary colors if needed to expand your palette.",
    },
    {
      question: "Do you provide print-ready files?",
      answer:
        "Yes! All print designs come in print-ready format with proper bleed, crop marks, and CMYK color mode. We provide specifications for your printer and can even coordinate directly with them if needed.",
    },
    {
      question: "How long does a typical design project take?",
      answer:
        "Logo design takes 5-7 days, social media graphics 2-3 days per batch, print materials 3-5 days. Rush delivery is available for urgent projects at an additional cost. We'll provide exact timelines based on your specific requirements.",
    },
  ];

  const pricingPlans = [
    {
      name: "Logo Only",
      price: "₹2,999",
      priceSubtext: "Fixed price",
      duration: "5-7 days",
      features: [
        "3 logo concepts",
        "Unlimited revisions",
        "Vector files (AI, EPS, SVG)",
        "PNG & JPG exports",
        "Basic brand guidelines",
      ],
      ideal: "Startups, small businesses",
    },
    {
      name: "Social Media Pack",
      price: "₹4,999",
      priceSubtext: "Fixed price",
      duration: "1 week",
      features: [
        "15 custom posts",
        "5 story templates",
        "Editable Canva templates",
        "All platforms optimized",
        "Hashtag suggestions",
        "1 month support",
      ],
      ideal: "Social media marketing",
      popular: true,
    },
    {
      name: "Complete Brand",
      price: "₹12,999",
      priceSubtext: "Fixed price",
      duration: "2-3 weeks",
      features: [
        "Logo design",
        "Business card",
        "Letterhead",
        "Social media templates",
        "Brochure/flyer",
        "Brand guidelines",
        "Unlimited revisions",
      ],
      ideal: "New brands, rebranding",
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
                <PenTool className="service-hero-badge-icon" />
                <span className="small-description grey">Graphic Design</span>
              </div>

              <h1
                className="headline white service-hero-title"
                ref={heroTitleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Designs That
                <br />
                Speaks Loud.
              </h1>

              <p
                className="big-description grey opacity-blur"
                ref={heroDescRef}
                style={{
                  opacity: isClient ? undefined : 1,
                  filter: isClient ? undefined : "none",
                }}
              >
                From eye-catching logos to stunning social media graphics to
                professional print materials - we create designs that make your
                brand unforgettable.
              </p>

              <div className="service-hero-actions">
                <Link href="/contact" className="button service-hero-button">
                  <div className="button-content">
                    <span className="small-description">Start Your Design</span>
                    <span className="small-description">Start Your Design</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>

              
              </div>
            </div>

            <div className="service-hero-visual">
              <img
                src="/services/graphic.webp"
                alt="Graphic Design Services"
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
                <h2 className="small-description grey">What We Design</h2>
              </div>
              <h2 className="subheadline white">Complete Design Services</h2>
              <p className="description grey">
                Every visual asset your brand needs - from digital to print, we
                design it all with creativity and precision.
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
              <h2 className="subheadline white">From Brief to Beautiful</h2>
              <p className="description grey">
                A collaborative process that ensures your vision comes to life
                exactly as you imagined.
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
                <h2 className="small-description grey">Design Tools</h2>
              </div>
              <h2 className="subheadline white">Professional Software</h2>
              <p className="description grey">
                We use industry-standard design tools to create pixel-perfect,
                print-ready, and professional-quality graphics.
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
                <h2 className="small-description grey">Packages</h2>
              </div>
              <h2 className="subheadline white">Design Packages</h2>
              <p className="description grey">
                Affordable packages for every design need. Custom quotes
                available for larger projects.
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
                      <span className="small-description white">
                        Most Popular
                      </span>
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
                    <span className="small-description grey">
                      {plan.priceSubtext}
                    </span>
                  </div>

                  <div className="service-pricing-timeline">
                    <Clock size={16} />
                    <span className="small-description white">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="service-pricing-features">
                    {plan.features.map((feature, idx) => (
                      <div className="service-pricing-feature" key={idx}>
                        <CheckCircle size={16} />
                        <span className="small-description grey">
                          {feature}
                        </span>
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
              <h2 className="subheadline white">Featured Design Work</h2>
              <p className="description grey">
                A showcase of our creative designs across various industries and
                mediums.
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
                      <span className="description white">View Project</span>
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
                Everything you need to know about our graphic design services.
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
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="description grey">
                Let's create stunning designs that make your brand stand out.
                Free consultation to discuss your design needs.
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
                    <Sparkles size={20} />
                    <span className="small-description white">
                      10+ designs created
                    </span>
                  </div>
                  <div className="service-cta-info-item">
                    <Award size={20} />
                    <span className="small-description white">
                      98% client satisfaction
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
