"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = () => {
  // ANIMATIONS

  const titleRef = useRef();
  const titleRef2 = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);

  const teamMembers = [
    { name: "Shubham Chaudhary", title: "Co-CEO & Co-Founder" },
    { name: "Aditya Mishra", title: "Co-CEO & Co-Founder" },
    { name: "Amit Mishra", title: "COO & Co-Founder" },
    { name: "Krish Patel", title: "Motion Graphics Designer" },
    // { name: "Romet Kriks", title: "Motion Graphics Designer" },
    { name: "Abhimanyu Chaudhary", title: "Visualization Expert" },
  ];

  useEffect(() => {
    // title animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
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

    // description animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    // line animation
    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
    );

    // title 2 animation
    const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
    gsap.fromTo(
      titleSplit2.words,
      { "will-change": "opacity", filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: titleRef2.current,
          start: "top 95%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // team member boxes animations
    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { yPercent: 100, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          delay: index * 0.2,
          ease: "power3",
          scrollTrigger: {
            trigger: ".five-content",
            start: "top bottom",
          },
        }
      );
    });
  }, []);

  // STICKY SECTION

  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);

  useEffect(() => {
    const refs = [item1Ref, item2Ref, item3Ref, item4Ref];

    refs.forEach((ref, position) => {
      const el = ref.current;
      const isLast = position === refs.length - 1;

      gsap.set(el, { willChange: "transform, filter" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: "350%",
          scrub: true,
        },
      });

      timeline
        .to(
          el,
          {
            ease: "none",
            startAt: { filter: "blur(0px)" },
            filter: isLast ? "blur(0px)" : "blur(3px)",
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=100%",
              scrub: true,
            },
          },
          0
        )
        .to(
          el,
          {
            ease: "none",
            scale: isLast ? 1 : 0.55,
            yPercent: isLast ? 0 : -45,
          },
          0
        );
    });
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />
                <h1 className="headline white" ref={titleRef}>
                  A Global Network Of Talent
                </h1>
              </div>
              <p className="description grey opacity-blur" ref={descriptionRef}>
                We&apos;ve assembled a team of dedicated professionals from
                diverse backgrounds who share the same passion for your brand as
                you do.
              </p>
            </div>
            <div className="about-divider" ref={lineRef} />
          </div>
          {/* <div className="about-team"> */}
            {/* <div className="about-team-container"> */}
              {/* {teamMembers.map((member, index) => (
                <div
                  className="about-team-item"
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <p className="description white">{member.name}</p>
                  <p className="description white">{member.title}</p>
                </div>
              ))} */}
            {/* </div> */}
          {/* </div> */}
          <div className="about-divider" />
          <div className="about-whyus">
            <p className="description about-whyus-description grey">Why us</p>
            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
            >
              At Arcenik, we embody the startup mindset — dynamic, innovative,
              and hungry to make a difference. We don&apos;t just create amazing
              works; we partner with our clients to revolutionize their
              industries through groundbreaking digital experiences. From
              redefining brand engagement to boosting conversions, every project
              we take on is an opportunity to challenge the norm, deliver
              excellence, and leave an impact.
            </p>
          </div>
          <div className="about-divider" />
          <div className="about-sticky-container">
            {/* (01) Website Development */}
            <div className="about-sticky-item" ref={item1Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    Website <br /> Development
                  </h1>
                  <p className="description about-sticky-item-left-textbox-description grey">
                    At <b>Arcenik</b>, we build modern, responsive, and
                    SEO-friendly websites that not only look amazing but also
                    perform flawlessly. From simple portfolios to enterprise web
                    apps, our team delivers high-quality digital experiences
                    tailored to your business.
                  </p>
                </div>
                <h1 className="headline white">(01)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <Image
                    width={300}
                    height={500}
                    src="/images/mockup4.webp"
                    className="about-sticky-item-right-image"
                    alt="Website Development"
                  />
                </div>
              </div>
            </div>

            {/* (02) UI/UX Design */}
            <div className="about-sticky-item" ref={item2Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    UI/UX <br /> Design
                  </h1>
                  <p className="description about-sticky-item-left-textbox-description grey">
                    We believe design is more than visuals—it’s about creating
                    experiences.
                    <b> Arcenik</b> crafts clean, intuitive, and engaging UI/UX
                    designs that guide users smoothly and keep them connected to
                    your brand.
                  </p>
                </div>
                <h1 className="headline white">(02)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <Image
                    src="/images/mockup12.webp"
                    className="about-sticky-item-right-image"
                    alt="UI/UX Design"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* (03) E-Commerce Solutions */}
            <div className="about-sticky-item" ref={item3Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    E-Commerce <br /> Solutions
                  </h1>
                  <p className="description about-sticky-item-left-textbox-description grey">
                    Sell smarter with <b>Arcenik’s</b> custom e-commerce
                    solutions. From product catalogs to secure payments, we
                    develop online stores that are scalable, user-friendly, and
                    optimized to drive more conversions.
                  </p>
                </div>
                <h1 className="headline white">(03)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <Image
                    src="/images/mockup7.webp"
                    className="about-sticky-item-right-image"
                    alt="E-Commerce Solutions"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>

            {/* (04) Branding & SEO */}
            <div className="about-sticky-item" ref={item4Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    Branding & <br /> SEO
                  </h1>
                  <p className="description about-sticky-item-left-textbox-description grey">
                    A great website needs visibility. <b>Arcenik</b> boosts your
                    digital presence with powerful branding and SEO strategies,
                    helping your business rank higher, attract the right
                    audience, and grow consistently online.
                  </p>
                </div>
                <h1 className="headline white">(04)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <Image
                    src="/images/mockup11.webp"
                    className="about-sticky-item-right-image"
                    alt="Branding & SEO"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
