"use client";
import { ArrowUpRight } from "lucide-react";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const navigationBar = useRef(null);
  const navigationBarCenter = useRef(null);
  const navigationBarCenterRef1 = useRef(null);
  const navigationBarCenterRef2 = useRef(null);
  const navigationBarCenterRef3 = useRef(null);

  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  // Initial desktop animation
  useLayoutEffect(() => {
    gsap.to(navigationBar.current, {
      opacity: 1,
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      duration: 0.75,
      ease: "power1",
      delay: 0.75,
    });
    gsap.fromTo(
      navigationBar.current,
      { width: "25%" },
      { width: "100%", duration: 0.75, ease: "power1", delay: 1.75 }
    );
    gsap.fromTo(
      navigationBarCenter.current,
      { display: "none" },
      { display: "flex", duration: 0.01, delay: 1.75 }
    );
    gsap.to(navigationBarCenterRef1.current, { opacity: 1, duration: 1, delay: 1.75 });
    gsap.to(navigationBarCenterRef2.current, { opacity: 1, duration: 1, delay: 1.85 });
    gsap.to(navigationBarCenterRef3.current, { opacity: 1, duration: 1, delay: 1.95 });
  }, []);

  // Mobile menu + overlay animation
  useEffect(() => {
    if (isMenuOpen) {
      // overlay blur & fade in
      gsap.to(overlayRef.current, {
        opacity: 1,
        backdropFilter: "blur(8px)",
        duration: 0.4,
        ease: "power2.out",
        display: "block",
      });
      // menu slide in
      gsap.to(mobileMenuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        display: "flex",
      });
    } else {
      // menu slide out
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
      // overlay fade out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none", backdropFilter: "blur(0px)" });
        },
      });
    }
  }, [isMenuOpen]);

  const handleNavigate = (path) => {
    setIsMenuOpen(false); // close after navigation
    router.push(path);
  };

  return (
    <div className="navigation-wrapper relative">
      <div className="navigation-inside" ref={navigationBar}>
        {/* LEFT */}
        <div className="navigation-inside-left">
          <img src="/images/dwlogo.webp" className="navigation-inside-left-image" alt="logo" />
        </div>

        {/* DESKTOP MENU */}
        <div className="navigation-inside-big hidden md:flex" ref={navigationBarCenter}>
          <p
            className="small-description white hover-text-white opacity cursor-pointer"
            ref={navigationBarCenterRef1}
            onClick={() => handleNavigate("/")}
          >
            Home
          </p>
          <p
            className="small-description white hover-text-white opacity cursor-pointer"
            ref={navigationBarCenterRef2}
            onClick={() => handleNavigate("/about")}
          >
            About
          </p>
          <p
            className="small-description white hover-text-white opacity cursor-pointer"
            ref={navigationBarCenterRef3}
            onClick={() => handleNavigate("/works")}
          >
            Works
          </p>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="navigation-inside-right hidden md:block">
          <button
            className="button button-navigation button-transparent-border"
            onClick={() => handleNavigate("/contact")}
          >
            <div className="button-content">
              <span className="small-description">Get In Touch</span>
              <span className="small-description">Get In Touch</span>
            </div>
            <div className="button-circle button-circle-white">
              <ArrowUpRight className="button-icon" />
            </div>
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="navigation-inside-right-mobile md:hidden cursor-pointer flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="navigation-inside-right-mobile-line bg-white h-[3px] w-6 rounded" />
          <div className="navigation-inside-right-mobile-line bg-white h-[3px] w-6 rounded" />
          <div className="navigation-inside-right-mobile-line bg-white h-[3px] w-6 rounded" />
        </div>
      </div>

      {/* BACKDROP OVERLAY (blur effect) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 hidden"
        style={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU (GSAP animated) */}
      <div
        ref={mobileMenuRef}
        className="mobile-menu fixed top-0 left-0 w-full h-screen text-white flex-col items-center justify-center gap-8 hidden z-50"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        <p onClick={() => handleNavigate("/")} className="text-2xl cursor-pointer hover:text-gray-300">
          Home
        </p>
        <p onClick={() => handleNavigate("/about")} className="text-2xl cursor-pointer hover:text-gray-300">
          About
        </p>
        <p onClick={() => handleNavigate("/works")} className="text-2xl cursor-pointer hover:text-gray-300">
          Works
        </p>
        <p onClick={() => handleNavigate("/contact")} className="text-2xl cursor-pointer hover:text-gray-300">
          Get In Touch
        </p>
      </div>
    </div>
  );
};
