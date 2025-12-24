"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
  Suspense,
} from "react";
import { ReactLenis } from "lenis/react";
import "./contact.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import CustomEase from "gsap/CustomEase";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Video,
  X,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Instagram,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load Calendly widget
const CalendlyWidget = dynamic(() => import("../Main/CalendlyWidget"), {
  ssr: false,
  loading: () => <div className="calendly-loading">Loading calendar...</div>,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin, CustomEase);
}

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const ContactPageSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // REFS
  const titleRef = useRef();
  const lineRef = useRef();
  const contactItem1 = useRef();
  const contactItem2 = useRef();
  const contactItem3 = useRef();
  const contactItem4 = useRef();
  const contactItem5 = useRef();
  const contactItem6 = useRef();
  const contactItem7 = useRef();
  const formRef = useRef();
  const mapRef = useRef();
  const faqRef = useRef();
  const officeHoursRef = useRef();
  const overlayRef = useRef();
  const overlayWidgetRef = useRef();
  const overlayWidgetButtonRef = useRef();

  // ============ DATA ============

  // Contact methods
  const contactData = useMemo(
    () => [
      {
        icon: Phone,
        label: "Call",
        value: "+91 7777909218",
        href: "tel:+917777909218",
      },
      {
        icon: Mail,
        label: "Email",
        value: "arceniktechnologies@gmail.com",
        href: "mailto:arceniktechnologies@gmail.com",
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Connect with us",
        href: "https://linkedin.com/company/arcenik",
      },
    ],
    []
  );

  // FAQ Data - POLISHED ANSWERS
  const faqs = [
    {
      question: "How quickly do you respond?",
      answer:
        "We value your time. We respond to all inquiries within 24 hours during business days. For urgent matters, give us a call directly.",
    },
    {
      question: "Is the initial consultation free?",
      answer:
        "Yes, absolutely. The first meeting is on us. We'll discuss your goals, budget, and timeline to see if we're a good fit.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes, we work globally. We use tools like Google Meet, Slack, and Notion to ensure smooth collaboration regardless of time zones.",
    },
    {
      question: "What details do you need to start?",
      answer:
        "Just a rough idea is enough! If you have specific requirements, budget, or examples of what you like, that helps us move faster.",
    },
    {
      question: "How do payments work?",
      answer:
        "We typically split payments: 30% to start, 40% mid-project, and 30% on completion. We can adjust this for larger projects.",
    },
    {
      question: "How long does a website take?",
      answer:
        "A standard business website takes 2-3 weeks. Custom web apps or complex platforms can take 6-8 weeks or more depending on features.",
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
        // Headline text animation
        if (titleRef.current) {
          const titleSplit = new SplitText(titleRef.current, { type: "chars" });
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
              ease: "power1.out",
            }
          );
        }

        // Line animation
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { opacity: 0, filter: "blur(8px)" },
            { opacity: 1, filter: "blur(0px)", duration: 1, delay: 0.5 }
          );
        }

        // Contact items animation
        const contactRefs = [
          contactItem1,
          contactItem2,
          contactItem3,
          contactItem4,
          contactItem5,
          contactItem6,
          contactItem7,
          formRef,
        ];

        contactRefs.forEach((ref, index) => {
          if (ref.current) {
            gsap.to(ref.current, {
              delay: 0.4 + index * 0.1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1,
              ease: "power1.out",
            });
          }
        });

        // Map section animation
        if (mapRef.current) {
          gsap.fromTo(
            mapRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mapRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // Office hours animation
        if (officeHoursRef.current) {
          gsap.fromTo(
            ".contact-office-hours-item",
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: officeHoursRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // FAQ animation
        if (faqRef.current) {
          gsap.fromTo(
            ".contact-faq-item",
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

  // ============ FORM HANDLERS ============
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        const serviceId = "service_jk8l7cb";
        const templateId = "template_40vl5fm";
        const publicKey = "4StxwdIVjXDm7fCgp";

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Arcenik Team",
          time: new Date().toLocaleString(),
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSubmitStatus(""), 5000);
      } catch (error) {
        console.error("Email send failed:", error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(""), 5000);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  // ============ FAQ TOGGLE ============
  const toggleFaq = useCallback((index) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  }, []);

  // ============ OVERLAY TOGGLE ============
  const toggleOverlay = useCallback(() => {
    if (!isOverlayVisible) {
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        overlayWidgetRef.current,
        { yPercent: 10, rotate: 5, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 0.5, ease: customEase }
      );
      gsap.fromTo(
        overlayWidgetButtonRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: customEase }
      );
    } else {
      gsap.to(overlayWidgetRef.current, {
        yPercent: 10,
        rotate: 5,
        opacity: 0,
        duration: 0.5,
        ease: customEase,
      });
      gsap.to(overlayWidgetButtonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: customEase,
      });
      gsap.to(overlayRef.current, {
        delay: 0.1,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        },
      });
    }
    setIsOverlayVisible(!isOverlayVisible);
  }, [isOverlayVisible]);

  const handleBookMeeting = useCallback(() => {
    toggleOverlay();
  }, [toggleOverlay]);

  // SSR fallback
  if (!isClient) {
    return (
      <section className="contact">
        <div className="contact-content">
          <div className="contact-loading">Loading contact page...</div>
        </div>
      </section>
    );
  }

  return (
    <ReactLenis root>
      {/* Calendly Overlay */}
      <div
        className="calendly-overlay"
        ref={overlayRef}
        style={{ display: "none", opacity: 0 }}
        onClick={toggleOverlay}
      >
        <div className="calendly-overlay-widget" ref={overlayWidgetRef}>
          <div className="calendly-overlay-widget-border" />
          <div className="calendly-overlay-widget-scrollbar-hider" />
          <Suspense
            fallback={
              <div className="calendly-loading">Loading calendar...</div>
            }
          >
            <CalendlyWidget />
          </Suspense>
        </div>
        <div
          className="calendly-overlay-widget-button"
          ref={overlayWidgetButtonRef}
          onClick={(e) => {
            e.stopPropagation();
            toggleOverlay();
          }}
        >
          <X className="calendly-overlay-widget-button-icon" />
        </div>
      </div>

      <section className="contact">
        <div className="contact-content">
          {/* ========== HERO SECTION ========== */}
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h1
                className="headline white"
                ref={titleRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                Let's Build Something Great
              </h1>
            </div>
            <div
              className="contact-divider"
              ref={lineRef}
              style={{ opacity: isClient ? undefined : 1 }}
            />
          </div>

          {/* ========== CONTACT INFO + FORM ========== */}
          <div className="contact-content-row">
            <div className="contact-content-left">
              <div className="contact-content-column">
                {/* Main contact card */}
                <div
                  className="contact-content-top-item opacity-blur"
                  ref={contactItem1}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="contact-content-top-item-profile">
                    <Image
                      src="/images/1.jpeg"
                      width={80}
                      height={80}
                      className="contact-content-top-item-image"
                      alt="Arcenik contact representative"
                      loading="lazy"
                    />
                  </div>
                  <div className="contact-content-top-item-text">
                    <p className="description white">
                      Have a project in mind? We'd love to hear about it. Let's
                      discuss how we can help your business grow.
                    </p>
                  </div>
                </div>

                {/* Contact methods row */}
                <div className="contact-content-column-row">
                  {contactData.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        href={contact.href}
                        className="contact-content-small-item opacity-blur"
                        ref={
                          index === 0
                            ? contactItem2
                            : index === 1
                            ? contactItem3
                            : contactItem4
                        }
                        key={index}
                        target={
                          contact.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        style={{ opacity: isClient ? undefined : 1 }}
                        aria-label={`${contact.label}: ${contact.value}`}
                      >
                        <IconComponent
                          className="contact-content-small-item-icon"
                          strokeWidth={2.5}
                        />
                        <p className="small-description grey">
                          {contact.label}
                        </p>
                      </a>
                    );
                  })}
                </div>

                {/* Contact details */}
                <div
                  className="contact-content-item contact-content-item-clickable opacity-blur"
                  ref={contactItem5}
                  onClick={handleBookMeeting}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <div className="contact-content-item-header">
                    <Video className="contact-content-item-icon" />
                    <p className="small-description grey">Meeting</p>
                  </div>
                  <p className="description white">Book a meeting</p>
                </div>

                <div
                  className="contact-content-item opacity-blur"
                  ref={contactItem6}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <p className="small-description grey">Email</p>
                  <p className="description white">
                    arceniktechnologies@gmail.com
                  </p>
                </div>

                <div
                  className="contact-content-item opacity-blur"
                  ref={contactItem7}
                  style={{ opacity: isClient ? undefined : 1 }}
                >
                  <p className="small-description grey">Address</p>
                  <p className="description white">Vapi, Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-content-right">
              <div
                className="contact-form-wrapper opacity-blur"
                ref={formRef}
                style={{ opacity: isClient ? undefined : 1 }}
              >
                <div className="contact-form-header">
                  <h2 className="subheadline white">
                    Tell Us About Your Project
                  </h2>
                  <p className="description grey">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label">
                        <User className="contact-form-icon" />
                        <span className="small-description grey">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="Your full name"
                        required
                        aria-label="Your full name"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">
                        <Mail className="contact-form-icon" />
                        <span className="small-description grey">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="your.email@example.com"
                        required
                        aria-label="Your email address"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <MessageSquare className="contact-form-icon" />
                      <span className="small-description grey">Subject</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      placeholder="What's this about?"
                      required
                      aria-label="Message subject"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">
                      <Send className="contact-form-icon" />
                      <span className="small-description grey">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="contact-form-textarea"
                      placeholder="Tell us about your project..."
                      rows="5"
                      required
                      aria-label="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-form-submit"
                    disabled={isSubmitting}
                    aria-label={
                      isSubmitting ? "Sending message" : "Send message"
                    }
                  >
                    <span className="contact-form-submit-text">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <Send className="contact-form-submit-icon" />
                  </button>

                  {submitStatus === "success" && (
                    <div className="contact-form-status contact-form-success">
                      <p>
                        Message sent successfully! We&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="contact-form-status contact-form-error">
                      <p>
                        Failed to send message. Please try again or contact us
                        directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* ========== MAP + OFFICE HOURS SECTION - CLEAN VERSION ========== */}
          {/* ========== MAP + OFFICE HOURS SECTION - FULL WIDTH ========== */}
          {/* ========== MAP + OFFICE HOURS SECTION ========== */}
          {/* ========== MAP + OFFICE INFO SECTION ========== */}
          <div className="contact-location-section" ref={mapRef}>
            <div className="contact-section-header">
              <h2 className="subheadline white">Visit Our Office</h2>
              <p className="description grey">
                Based in Vapi, Gujarat. Working with clients globally.
              </p>
            </div>

            {/* Map Container */}
            <div className="contact-map-container">
              <div className="contact-map-fullwidth">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29925.983141632187!2d72.91011793476561!3d20.352031000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2f7d996b9b%3A0x9d76c84234aeb935!2sArcenik%20%7C%20Software%20Development%20%26%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1765516080566!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) contrast(85%)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arcenik Technologies Location"
                ></iframe>
                <div className="contact-map-overlay" />
              </div>
            </div>

            {/* Office Details Grid */}
            <div className="contact-office-grid" ref={officeHoursRef}>
              {/* Address Card */}
              <div className="contact-office-card">
                <div className="contact-office-card-header">
                  <MapPin className="contact-office-card-icon" />
                  <p className="small-description grey">Address</p>
                </div>
                <p className="description white">Arihant Garden Building,</p>
                <p className="description white">Chanod Village Rd, Chanod,</p>
                Vapi, Gujarat 396195, India
              </div>

              {/* Office Hours Card */}
              <div className="contact-office-card">
                <div className="contact-office-card-header">
                  <Clock className="contact-office-card-icon" />
                  <p className="small-description grey">Office Hours</p>
                </div>
                <div className="contact-office-hours-list">
                  <p className="description white">
                    Mon-Fri: 9:00 AM - 7:00 PM
                  </p>
                  <p className="description white">Sat: 10:00 AM - 5:00 PM</p>
                  <p className="description white">Sun: Closed</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-office-card">
                <div className="contact-office-card-header">
                  <Phone className="contact-office-card-icon" />
                  <p className="small-description grey">Call Us</p>
                </div>
                <a
                  href="tel:+917777909218"
                  className="description white contact-phone-link"
                >
                  +91 7777909218
                </a>
                <a
                  href="tel:+919429902427"
                  className="description white contact-phone-link"
                >
                  +91 9429902427
                </a>
                <p className="small-description grey">
                  Response within 24 hours
                </p>
              </div>
              {/* Social Card */}
              <div className="contact-office-card">
                <div className="contact-office-card-header">
                  <MessageSquare className="contact-office-card-icon" />
                  <p className="small-description grey">Follow Us</p>
                </div>
                <div className="contact-social-links">
                  <a
                    href="https://www.instagram.com/arcenik_technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/arcenik-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ========== FAQ SECTION - SMOOTH VERSION ========== */}
          <div className="contact-faq-section" ref={faqRef}>
            <div className="contact-section-header">
              <h2 className="subheadline white">Common Questions</h2>
              <p className="description grey">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="contact-faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`contact-faq-item ${
                    expandedFaq === index ? "contact-faq-item-expanded" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="contact-faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span className="contact-faq-number">0{index + 1}</span>
                    <span className="contact-faq-question description white">
                      {faq.question}
                    </span>
                    <span className="contact-faq-icon">
                      {expandedFaq === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`contact-faq-content ${
                      expandedFaq === index
                        ? "contact-faq-content-expanded"
                        : ""
                    }`}
                  >
                    <div className="contact-faq-inner">
                      <p className="description grey">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};
