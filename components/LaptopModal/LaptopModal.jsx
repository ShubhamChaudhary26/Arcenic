// components/LaptopModal/LaptopModal.jsx

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Shield,
  Database,
  Cloud,
  Cpu,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import "./LaptopModal.css";

export const LaptopModal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const laptopRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Open/Close Animation
  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(modalRef.current, { display: "flex" });

      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.fromTo(
        contentWrapperRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        laptopRef.current,
        { opacity: 0, y: 50, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      if (infoRef.current?.children) {
        gsap.fromTo(
          infoRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.4,
          }
        );
      }
    } else {
      gsap.to(contentWrapperRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.25,
        ease: "power2.in",
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.05,
        onComplete: () => {
          if (modalRef.current) {
            gsap.set(modalRef.current, { display: "none" });
          }
          document.body.style.overflow = "";
        },
      });
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  // Auto-slide
  useEffect(() => {
    if (
      !isOpen ||
      !project?.screenshots?.length ||
      project.screenshots.length <= 1
    )
      return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpen, project]);

  // Screenshot transition
  useEffect(() => {
    if (!laptopRef.current || !project?.screenshots?.length) return;

    const screenshots = laptopRef.current.querySelectorAll(
      ".laptop-modal-screenshot"
    );

    screenshots.forEach((ss, index) => {
      if (index === currentIndex) {
        gsap.fromTo(
          ss,
          { opacity: 0, scale: 1.02 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
      } else {
        gsap.to(ss, { opacity: 0, duration: 0.3 });
      }
    });
  }, [currentIndex, project]);

  // Scroll prevention
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const scrollableContent = contentRef.current;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    const handleTouchMove = (e) => {
      e.stopPropagation();
    };

    scrollableContent.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    scrollableContent.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      scrollableContent.removeEventListener("wheel", handleWheel);
      scrollableContent.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  const handlePrev = () => {
    if (!project?.screenshots) return;
    setCurrentIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!project?.screenshots) return;
    setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  if (!project) return null;

  return (
    <div className="laptop-modal" ref={modalRef}>
      {/* Backdrop */}
      <div
        className="laptop-modal-backdrop"
        ref={backdropRef}
        onClick={handleBackdropClick}
      />

      {/* Content Wrapper */}
      <div className="laptop-modal-wrapper" ref={contentWrapperRef}>
        {/* Close Button */}
        <button
          className="laptop-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Scrollable Content */}
        <div className="laptop-modal-content" ref={contentRef}>
          {/* ============ LAPTOP DEVICE - BIG SCREEN ============ */}
          <div className="laptop-modal-device-section" ref={laptopRef}>
            {/* Glow Effect */}
            <div className="laptop-modal-glow" />

            {/* MacBook Style Laptop */}
            <div className="laptop-modal-macbook">
              {/* Screen/Lid */}
              <div className="laptop-modal-screen-container">
                {/* Top Bezel with Camera */}
                <div className="laptop-modal-top-bezel">
                  <div className="laptop-modal-camera-dot" />
                </div>

                {/* Main Screen */}
                <div className="laptop-modal-screen">
                  {project.screenshots?.map((ss, index) => (
                    <Image
                      key={index}
                      src={ss}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 95vw, 1100px"
                      className={`laptop-modal-screenshot ${
                        index === currentIndex ? "active" : ""
                      }`}
                      priority={index === 0}
                    />
                  ))}

                  {/* Screen Glare */}
                  <div className="laptop-modal-screen-glare" />
                </div>
              </div>

              {/* Bottom Part - Keyboard Base */}
              <div className="laptop-modal-base">
                <div className="laptop-modal-base-top">
                  <div className="laptop-modal-notch" />
                </div>
                <div className="laptop-modal-base-bottom" />
              </div>
            </div>

            {/* Navigation Dots */}
            {project.screenshots?.length > 1 && (
              <div className="laptop-modal-nav">
                <button
                  className="laptop-modal-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="laptop-modal-dots">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`laptop-modal-dot ${
                        index === currentIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <button
                  className="laptop-modal-nav-btn"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* ============ PROJECT INFO ============ */}
          <div className="laptop-modal-info" ref={infoRef}>
            {/* Header */}
            <div className="laptop-modal-header">
              <div className="laptop-modal-badge">
                <Monitor size={14} />
                <span>{project.categoryLabel}</span>
              </div>
              <h2 className="laptop-modal-title">{project.title}</h2>
              <p className="laptop-modal-desc">{project.description}</p>
            </div>

            {/* Tags */}
            <div className="laptop-modal-tags">
              {project.tags?.map((tag, index) => (
                <span key={index} className="laptop-modal-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="laptop-modal-features">
                <h4>Key Features</h4>
                <div className="laptop-modal-features-grid">
                  {project.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="laptop-modal-feature">
                      <div className="laptop-modal-feature-dot" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="laptop-modal-highlights">
              <div className="laptop-modal-highlight">
                <Database size={18} />
                <div>
                  <span className="label">Platform</span>
                  <span className="value">Web App</span>
                </div>
              </div>
              <div className="laptop-modal-highlight">
                <Shield size={18} />
                <div>
                  <span className="label">Security</span>
                  <span className="value">Enterprise</span>
                </div>
              </div>
              <div className="laptop-modal-highlight">
                <Cloud size={18} />
                <div>
                  <span className="label">Hosting</span>
                  <span className="value">Cloud</span>
                </div>
              </div>
              <div className="laptop-modal-highlight">
                <Cpu size={18} />
                <div>
                  <span className="label">Performance</span>
                  <span className="value">Optimized</span>
                </div>
              </div>
            </div>

            {/* Link Button */}
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="laptop-modal-link"
              >
                <span>View Live Project</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
