/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const SectionServices = () => {
  const subheadlineBoxRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: {
        trigger: subheadlineBoxRef.current,
        start: "top 95%",
      },
    });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.085,
        duration: 1,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

    // description text animation
    const descriptionSplit = new SplitText(descriptionRef.current, {
      type: "words",
    });
    gsap.fromTo(
      descriptionSplit.words,
      { filter: "blur(8px)", opacity: 0, skewX: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        skewX: 0,
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" },
      }
    );

    // button animation
    gsap.to(buttonRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: buttonRef.current, start: "top 95%" },
    });
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/917777909218?text=Hi%2C%20I%20want%20to%20book%20a%20call.",
      "_blank"
    );
  };

  return (
    <section className="services">
      <div className="services-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">Our Services</h2>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h1 className="subheadline white" ref={titleRef}>
              Your Digital Powerhouse
            </h1>
          </div>
          <p className="description grey" ref={descriptionRef}>
            Where innovation fuels transformation. We empower brands to redefine
            possibilities and thrive <br /> in the ever-evolving digital
            landscape.
          </p>
          <div
            className="contact-button-wrapper opacity-blur"
            ref={buttonRef}
            onClick={handleWhatsAppRedirect}
          >
            <button className="contact-button-white">
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
          <div className="services-content-container-left" />
          <div className="services-content-container-right" />
          <div className="services-content-container-bottom" />
          <div className="services-content-container-top" />
          <video
            src="/videos/serviceshighquality.mp4"
            className="services-content-video"
            autoPlay
            muted
            playsInline
            data-wf-ignore="true"
            preload="auto"
            loop
          />
        </div>
      </div>
    </section>
  );
};
