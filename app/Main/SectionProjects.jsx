/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Carousel/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjects = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const contentRef = useRef();
  const imageContainerRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP animations
  useEffect(() => {
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

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.05,
        duration: 0.75,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

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
        ease: "sine",
        scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" },
      }
    );

    gsap.fromTo(
      imageContainerRef.current,
      { yPercent: 7.5 },
      {
        yPercent: -7.5,
        scrollTrigger: {
          trigger: ".projects",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // Embla carousel (without fade)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Cursor follow effect
  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      cursorX = 0,
      cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;
      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.to(cursor.current, {
      autoAlpha: showCursor ? 1 : 0,
      scale: showCursor ? 1 : 0,
      duration: 0.3,
      ease: showCursor ? "power3.out" : "power3.in",
    });
  }, [showCursor]);

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  return (
    <section className="projects projects-desktop">
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
          <Star className="subheadline-box-icon" />
          <h2 className="small-description grey">Featured Works</h2>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h1 className="subheadline white" ref={titleRef}>
            Pioneering Projects That Consistently{" "}
            <br className="hide-on-mobile" /> Redefine What’s Possible
          </h1>
        </div>
        <p className="description grey" ref={descriptionRef}>
          Transforming startups, SMEs, and industry{" "}
          <br className="hide-on-desktop" /> giants into digital leaders.
        </p>
      </div>

      <div
        className="projects-content"
        ref={contentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onNextButtonClick}
      >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="project-content-wrapper" ref={imageContainerRef}>
          <div className="projects-carousel" ref={emblaRef}>
            <div className="projects-carousel-row">
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/heave.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Heavecorp project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/essentia.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Essentia project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/kinimatic.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Kinimatic project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/peak.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Peak project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/vitalenta.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Vitalenta project"
                />
              </div>
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/rev.webp"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="Rev project"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>

      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white">See More</p>
      </div>
    </section>
  );
};
