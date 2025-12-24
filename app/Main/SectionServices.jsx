"use client";
import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import "./SectionServices.css";

const CalendlyWidget = dynamic(() => import("./CalendlyWidget"), {
  ssr: false,
  loading: () => (
    <div className="calendly-loading">
      <div className="calendly-loading-spinner"></div>
      <p className="small-description grey">Loading calendar...</p>
    </div>
  ),
});

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const SectionServices = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  const overlayRef = useRef();
  const overlayWidgetRef = useRef();
  const overlayWidgetButtonRef = useRef();
  const videoRef = useRef();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayVisible]);

  // GSAP Animations
  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      gsap.to(subheadlineBoxRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: subheadlineBoxRef.current,
          start: "top 95%",
          once: true,
        },
      });

      if (titleRef.current) {
        const titleSplit = new SplitText(titleRef.current, { type: "words" });
        gsap.fromTo(
          titleSplit.words,
          { filter: "blur(8px)", opacity: 0, yPercent: 100 },
          {
            opacity: 1,
            filter: "blur(0px)",
            yPercent: 0,
            stagger: 0.085,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (descriptionRef.current) {
        const descriptionSplit = new SplitText(descriptionRef.current, {
          type: "words",
        });
        gsap.fromTo(
          descriptionSplit.words,
          { filter: "blur(8px)", opacity: 0 },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.025,
            ease: "sine.out",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      gsap.to(buttonRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [isClient]);

  // SIMPLE VIDEO FIX - Just ensure it plays once
  useEffect(() => {
    if (!isClient || !videoRef.current) return;

    const video = videoRef.current;
    let hasPlayed = false;

    const tryPlayVideo = async () => {
      if (hasPlayed) return;

      try {
        await video.play();
        hasPlayed = true;
        console.log("Video playing");
      } catch (err) {
        // Wait for user interaction
        console.log("Waiting for user interaction");
      }
    };

    // Try playing immediately
    tryPlayVideo();

    // Try again on user interaction (only once)
    const handleFirstInteraction = () => {
      if (!hasPlayed) {
        tryPlayVideo();
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isClient]);

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

  const handleButtonClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleOverlay();
    },
    [toggleOverlay]
  );

  if (!isClient) {
    return (
      <section className="services">
        <div className="services-content">
          <div className="textbox">
            <div className="subheadline-box">
              <Zap className="subheadline-box-icon" />
              <h2 className="small-description grey">Our Services</h2>
            </div>
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h2 className="subheadline white">Your Digital Powerhouse</h2>
            </div>
            <p className="description grey">
              From websites and branding to custom software — we deliver
              solutions that help your business grow and succeed
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services">
      <div
        className="calendly-overlay"
        ref={overlayRef}
        style={{ display: "none", opacity: 0 }}
        onClick={toggleOverlay}
      >
        <div
          className="calendly-overlay-widget"
          ref={overlayWidgetRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="calendly-overlay-widget-border" />
          <div className="calendly-overlay-widget-scrollbar-hider" />
          <Suspense
            fallback={
              <div className="calendly-loading">
                <div className="calendly-loading-spinner"></div>
                <p className="small-description grey">Loading calendar...</p>
              </div>
            }
          >
            {isOverlayVisible && <CalendlyWidget />}
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

      <div className="services-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">Our Services</h2>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h2 className="subheadline white" ref={titleRef}>
              Your Digital Powerhouse
            </h2>
          </div>
          <p className="description grey" ref={descriptionRef}>
            From websites and branding to custom software — we deliver solutions
            that <br />
            help your business grow and succeed
          </p>

          <div
            className="contact-button-wrapper opacity-blur"
            ref={buttonRef}
            onClick={handleButtonClick}
            onTouchEnd={handleButtonClick}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            <button
              className="contact-button-white"
              onClick={handleButtonClick}
              onTouchEnd={handleButtonClick}
              type="button"
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              <span>
                <span className="contact-button-container-white">
                  <span className="contact-button-primary-white"></span>
                  <span className="contact-button-complimentary-white"></span>
                </span>
              </span>
              <span className="description black">Book a call</span>
            </button>
          </div>
        </div>

        <div className="services-content-container">
          <video
            ref={videoRef}
            className="services-content-video"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/videos/serviceshighquality.mp4" type="video/mp4" />
          </video>

          {/* Borders */}
          <div className="services-content-container-left" />
          <div className="services-content-container-right" />
          <div className="services-content-container-bottom" />
          <div className="services-content-container-top" />
        </div>
      </div>
    </section>
  );
};
