// components/AppModal/AppModal.jsx

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import gsap from "gsap";
import "./AppModal.css";

export const AppModal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const phoneRef = useRef(null);
  const infoRef = useRef(null);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Open/Close Animation
  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Prevent layout shift

      gsap.set(modalRef.current, { display: "flex" });

      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.fromTo(
        contentWrapperRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.4)",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 60, rotateY: -20, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.fromTo(
        infoRef.current?.children,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.35,
        }
      );
    } else {
      gsap.to(phoneRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.25,
        ease: "power2.in",
      });

      gsap.to(contentWrapperRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power2.in",
      });

      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: () => {
          if (modalRef.current) {
            gsap.set(modalRef.current, { display: "none" });
          }
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
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

  // Auto-slide screenshots
  useEffect(() => {
    if (
      !isOpen ||
      !project?.screenshots?.length ||
      project.screenshots.length <= 1
    )
      return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isOpen, project]);

  // Screenshot transition animation
  useEffect(() => {
    if (!phoneRef.current || !project?.screenshots?.length) return;

    const screenshots = phoneRef.current.querySelectorAll(
      ".app-modal-screenshot"
    );

    screenshots.forEach((ss, index) => {
      if (index === currentIndex) {
        gsap.fromTo(
          ss,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
      } else {
        gsap.to(ss, { opacity: 0, duration: 0.3 });
      }
    });
  }, [currentIndex, project]);

  // ============ SCROLL FIX - Prevent background scroll ============
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const scrollableContent = contentRef.current;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // Allow scroll only if not at boundaries, or if scrolling away from boundary
      if (isAtTop && e.deltaY < 0) {
        e.preventDefault();
      } else if (isAtBottom && e.deltaY > 0) {
        e.preventDefault();
      }

      // Always stop propagation to prevent background scroll
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
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  // Prevent scroll on modal container
  const handleModalWheel = (e) => {
    // Only allow scroll inside content area
    if (!contentRef.current?.contains(e.target)) {
      e.preventDefault();
    }
  };

  if (!project) return null;

  return (
    <div className="app-modal" ref={modalRef} onWheel={handleModalWheel}>
      {/* Backdrop */}
      <div
        className="app-modal-backdrop"
        ref={backdropRef}
        onClick={handleBackdropClick}
      />

      {/* Content Wrapper */}
      <div className="app-modal-content-wrapper" ref={contentWrapperRef}>
        {/* Close Button */}
        <button
          className="app-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Scrollable Content */}
        <div className="app-modal-content" ref={contentRef}>
          <div className="app-modal-layout">
            {/* ============ LEFT: PHONE MOCKUP ============ */}
            <div className="app-modal-phone-section" ref={phoneRef}>
              <div className="app-modal-phone-wrapper">
                {/* Glow Effect */}
                <div className="app-modal-phone-glow" />

                {/* Phone Device */}
                <div className="app-modal-phone">
                  {/* Frame Highlights */}
                  <div className="app-modal-phone-frame-highlight" />

                  {/* Dynamic Island */}
                  <div className="app-modal-phone-island">
                    <div className="app-modal-phone-island-camera" />
                  </div>

                  {/* Screen */}
                  <div className="app-modal-phone-screen">
                    {project.screenshots?.map((ss, index) => (
                      <Image
                        key={index}
                        src={ss}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 240px, 300px"
                        className={`app-modal-screenshot ${
                          index === currentIndex ? "active" : ""
                        }`}
                        priority={index === 0}
                      />
                    ))}

                    {/* Screen Glare */}
                    <div className="app-modal-phone-glare" />
                  </div>

                  {/* Home Indicator */}
                  <div className="app-modal-phone-home" />

                  {/* Physical Buttons */}
                  <div className="app-modal-phone-button-power" />
                  <div className="app-modal-phone-button-vol-up" />
                  <div className="app-modal-phone-button-vol-down" />
                  <div className="app-modal-phone-button-silent" />
                </div>
              </div>

              {/* Screenshot Navigation */}
              {project.screenshots?.length > 1 && (
                <div className="app-modal-nav">
                  <button
                    className="app-modal-nav-btn"
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="app-modal-dots">
                    {project.screenshots.map((_, index) => (
                      <button
                        key={index}
                        className={`app-modal-dot ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="app-modal-nav-btn"
                    onClick={handleNext}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}

              {/* Screenshot Counter */}
              <div className="app-modal-counter">
                <span>{currentIndex + 1}</span>
                <span className="app-modal-counter-divider">/</span>
                <span>{project.screenshots?.length || 0}</span>
              </div>
            </div>

            {/* ============ RIGHT: PROJECT INFO ============ */}
            <div className="app-modal-info" ref={infoRef}>
              {/* Category Badge */}
              <div className="app-modal-category-badge">
                <span>{project.categoryLabel}</span>
              </div>

              {/* Title */}
              <h2 className="app-modal-title">{project.title}</h2>

              {/* Description */}
              <p className="app-modal-description">{project.description}</p>

              {/* Tags */}
              <div className="app-modal-tags">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="app-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div className="app-modal-features">
                  <h4 className="app-modal-features-title">Key Features</h4>
                  <ul className="app-modal-features-list">
                    {project.features.map((feature, index) => (
                      <li key={index} className="app-modal-feature">
                        <div className="app-modal-feature-dot" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Highlights */}
              <div className="app-modal-highlights">
                <div className="app-modal-highlight">
                  <div className="app-modal-highlight-icon">
                    <Layers size={20} />
                  </div>
                  <div className="app-modal-highlight-text">
                    <span className="app-modal-highlight-label">Platform</span>
                    <span className="app-modal-highlight-value">
                      iOS & Android
                    </span>
                  </div>
                </div>
                <div className="app-modal-highlight">
                  <div className="app-modal-highlight-icon">
                    <Sparkles size={20} />
                  </div>
                  <div className="app-modal-highlight-text">
                    <span className="app-modal-highlight-label">Design</span>
                    <span className="app-modal-highlight-value">
                      Custom UI/UX
                    </span>
                  </div>
                </div>
                <div className="app-modal-highlight">
                  <div className="app-modal-highlight-icon">
                    <Zap size={20} />
                  </div>
                  <div className="app-modal-highlight-text">
                    <span className="app-modal-highlight-label">
                      Performance
                    </span>
                    <span className="app-modal-highlight-value">Optimized</span>
                  </div>
                </div>
                <div className="app-modal-highlight">
                  <div className="app-modal-highlight-icon">
                    <Target size={20} />
                  </div>
                  <div className="app-modal-highlight-text">
                    <span className="app-modal-highlight-label">Status</span>
                    <span className="app-modal-highlight-value">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
