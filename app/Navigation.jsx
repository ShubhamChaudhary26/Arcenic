"use client";
import { ArrowUpRight, X } from "lucide-react"; // 👈 X icon import
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import "./Navigation.css";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 39c9af97b31c4f83f97846e69d167b7b99fc38fa

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

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        backdropFilter: "blur(8px)",
        duration: 0.4,
        ease: "power2.out",
        display: "block",
      });
      gsap.to(mobileMenuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        display: "flex",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
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
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-inside" ref={navigationBar}>
        {/* LEFT */}
        <div className="navigation-left">
<<<<<<< HEAD
        <Image    width={20} height={20} src="/images/dwlogo.webp" className="logo" alt="logo" />
=======
          <img src="/images/dwlogo.webp" className="logo" alt="logo" />
>>>>>>> 39c9af97b31c4f83f97846e69d167b7b99fc38fa
        </div>

        {/* DESKTOP MENU */}
        <div className="navigation-center" ref={navigationBarCenter}>
          <p ref={navigationBarCenterRef1} onClick={() => handleNavigate("/")}>Home</p>
          <p ref={navigationBarCenterRef2} onClick={() => handleNavigate("/about")}>About</p>
          <p ref={navigationBarCenterRef3} onClick={() => handleNavigate("/works")}>Works</p>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="navigation-right">
          <button onClick={() => handleNavigate("/contact")} className="nav-button">
            <span>Get In Touch</span>
            <ArrowUpRight className="icon" />
          </button>
        </div>

        {/* MOBILE CROSS ONLY */}
        {isMenuOpen && (
          <div className="cross-btn" onClick={() => setIsMenuOpen(false)}>
            <X className="cross-icon" />
          </div>
        )}
      </div>

      {/* OVERLAY */}
      <div ref={overlayRef} className="overlay" onClick={() => setIsMenuOpen(false)} />

      {/* MOBILE MENU */}
      <div ref={mobileMenuRef} className="mobile-menu">
        <p onClick={() => handleNavigate("/")}>Home</p>
        <p onClick={() => handleNavigate("/about")}>About</p>
        <p onClick={() => handleNavigate("/works")}>Works</p>
        <p onClick={() => handleNavigate("/contact")}>Get In Touch</p>
      </div>
    </div>
  );
};
