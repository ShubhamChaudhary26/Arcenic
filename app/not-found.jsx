"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import {
  ArrowUpRight,
  Home,
  FileText,
  Briefcase,
  Phone,
  BookOpen,
} from "lucide-react";
import "./not-found.css";

export default function NotFound() {
  const containerRef = useRef(null);
  const glitchTextRef = useRef(null);
  const numberRefs = useRef([]);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const linksRef = useRef(null);
  const particlesRef = useRef([]);

  const router = useRouter();

  // ✅ FIX: Render particles only on client-side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline();

      // Animate 404 numbers with stagger
      tl.fromTo(
        numberRefs.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
          scale: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      )
        .fromTo(
          glitchTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.2"
        )
        .fromTo(
          linksRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );

      // Continuous glitch effect on 404
      gsap.to(numberRefs.current, {
        textShadow:
          "2px 2px 0px rgba(255,0,0,0.3), -2px -2px 0px rgba(0,255,255,0.3)",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3,
      });

      // Floating animation
      gsap.to(numberRefs.current, {
        y: "-=15",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      // Particles floating animation
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: `random(-100, 100)`,
            x: `random(-100, 100)`,
            opacity: `random(0.1, 0.5)`,
            duration: `random(3, 6)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted]);

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="not-found-container" ref={containerRef}>
      {/* ✅ FIX: Render particles only after mount (client-side only) */}
      {isMounted && (
        <div
          className="particles-bg"
          aria-hidden="true"
          suppressHydrationWarning
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              ref={(el) => (particlesRef.current[i] = el)}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="not-found-content">
        {/* 404 Numbers */}
        <div className="error-code" aria-label="Error 404">
          <span
            className="digit"
            ref={(el) => (numberRefs.current[0] = el)}
            aria-hidden="true"
          >
            4
          </span>
          <span
            className="digit digit-middle"
            ref={(el) => (numberRefs.current[1] = el)}
            aria-hidden="true"
          >
            0
          </span>
          <span
            className="digit"
            ref={(el) => (numberRefs.current[2] = el)}
            aria-hidden="true"
          >
            4
          </span>
        </div>

        {/* H1 tag */}
        <h1
          className="glitch-text"
          ref={glitchTextRef}
          data-text="Page Not Found"
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p className="error-description" ref={descriptionRef}>
          The page you're looking for seems to have wandered off into the
          digital void.
          <br />
          Let's get you back to familiar territory.
        </p>

        {/* Back to Home Button */}
        <button
          className="back-home-button"
          ref={buttonRef}
          onClick={handleGoHome}
          aria-label="Go back to homepage"
        >
          <span className="button-text">
            <Home size={18} />
            Back to Home
          </span>
          <div className="button-circle">
            <ArrowUpRight className="button-icon" size={18} />
          </div>
        </button>

        {/* Internal Links for SEO */}
        <nav
          className="helpful-links"
          ref={linksRef}
          aria-label="Helpful links"
        >
          <h2 className="helpful-links-title">Quick Links</h2>
          <div className="helpful-links-grid">
            <Link href="/services" className="helpful-link">
              <Briefcase size={20} />
              <span>Our Services</span>
            </Link>
            <Link href="/works" className="helpful-link">
              <FileText size={20} />
              <span>Our Works</span>
            </Link>
            <Link href="/contact" className="helpful-link">
              <Phone size={20} />
              <span>Contact Us</span>
            </Link>
          </div>
        </nav>
      </main>

      {/* Scan Line Effect */}
      <div className="scan-line" aria-hidden="true"></div>
    </div>
  );
}
