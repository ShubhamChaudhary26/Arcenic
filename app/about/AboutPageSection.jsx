"use client";
import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = () => {
  const titleRef = useRef();
  const titleRef2 = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);
  const stickyRefs = useRef([]);

 const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "At Arcenik, we craft modern, responsive, and SEO-optimized websites that not only look stunning but also deliver exceptional performance across all devices. Our development focuses on speed, scalability, and a seamless user experience.",
    image: "/images/macbook.webp",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We design intuitive, user-centered interfaces that combine creativity with functionality. Every design decision is backed by research to ensure your users enjoy a smooth, engaging, and memorable digital journey.",
    image: "/images/iphoneoptimized.webp",
  },
  {
    number: "03",
    title: "Digital Commerce",
    description:
      "Sell smarter with Arcenik’s custom e-commerce solutions. From product catalogs to secure payments and personalized shopping experiences, we build scalable online stores that grow with your business.",
    image: "/casestudy/cs2.webp",
  },
  {
    number: "04",
    title: "Branding & SEO",
    description:
      "A powerful website deserves visibility. Arcenik strengthens your digital identity with impactful branding and data-driven SEO strategies that boost reach, improve rankings, and maximize conversions.",
    image: "/images/test17.webp",
  },
  {
    number: "05",
    title: "CRM Solutions",
    description:
      "Streamline customer management with our tailored CRM systems. From automating workflows to analyzing customer data, our solutions help businesses build stronger relationships and accelerate sales growth.",
    image: "/images/CRM.webp",
  },
  {
    number: "06",
    title: "ERP Systems",
    description:
      "Take control of your business processes with robust ERP solutions. We integrate finance, HR, supply chain, and operations into one unified system for greater efficiency and productivity.",
    image: "/images/ERP.webp",
  },
  {
    number: "07",
    title: "Graphic Design",
    description:
      "From logos to complete brand kits, our creative design team delivers visuals that capture attention, inspire trust, and bring your brand identity to life across digital and print platforms.",
    image: "/images/GD.webp",
  },
];


  useEffect(() => {
    const mm = gsap.matchMedia();

    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
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

    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
    );

    const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
    gsap.fromTo(
      titleSplit2.words,
      { opacity: 0, filter: "blur(8px)" },
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

    itemRefs.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { yPercent: 100, opacity: 0, filter: "blur(8px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            delay: index * 0.1,
            ease: "power3",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
            },
          }
        );
      }
    });

    mm.add("(min-width: 768px)", () => {
      stickyRefs.current.forEach((ref, position) => {
        if (!ref) return;

        const el = ref;
        const isLast = position === stickyRefs.current.length - 1;

        gsap.set(el, { willChange: "transform, filter" });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: "350%",
            scrub: 1,
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
                scrub: 1,
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
    });

    return () => {
      mm.revert();
      titleSplit.revert();
      titleSplit2.revert();
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          {/* Top Section */}
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />
               <h1 className="headline white" ref={titleRef}>
  Building Next-Gen Web Experiences
</h1>
</div>
<p className="description grey opacity-blur" ref={descriptionRef}>
  We specialize in creating fast, scalable, and modern websites tailored to your brand. 
  From intuitive design to seamless development, our solutions are built to help your 
  business grow in the digital world.
</p>

            </div>
            <div className="about-divider" ref={lineRef} />
          </div>

          {/* Why Us */}
          <div className="about-whyus">
            <p className="description about-whyus-description grey">Why us</p>
            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
            >
             At Arcenik, innovation is at the heart of everything we do. 
  By blending creativity with cutting-edge technology, we partner with 
  clients to build modern digital products that solve problems and 
  create lasting impact.
            </p>
          </div>

          <div className="about-divider" />

          {/* Services Section */}
          <div className="about-sticky-container">
            {services.map((service, index) => (
              <div
                className="about-sticky-item"
                key={index}
                ref={(el) => (stickyRefs.current[index] = el)}
              >
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className="headline white about-sticky-headline">
                      {service.title}
                    </h1>
                    <p className="description about-sticky-item-left-textbox-description grey">
                      {service.description}
                    </p>
                  </div>
                  {/* <h1 className="headline white about-sticky-number">
                    ({service.number})
                  </h1> */}
                </div>
                <div className="about-sticky-item-right">
                  <div className="about-sticky-item-right-imagebox">
                    <img
                      src={service.image}
                      className="about-sticky-item-right-image"
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
