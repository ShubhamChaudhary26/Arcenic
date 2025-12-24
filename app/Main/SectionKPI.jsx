"use client";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import "./SectionKPI.css";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cone, Globe, User, Zap, BarChart3, CheckCircle2 } from "lucide-react"; // Added new icons

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionKPI = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const bentoBoxRef1 = useRef();
  const bentoBoxRef2 = useRef();
  const bentoBoxRef3 = useRef();
  const [isClient, setIsClient] = useState(false);

  // Memoize KPI data - UPDATED CONTENT
  const kpiData = useMemo(
    () => [
      {
        number: "100%",
        unit: "Delivery Rate",
        description:
          "Projects delivered on time, on budget, and beyond expectations.",
        icon: CheckCircle2, // Changed icon to represent success
        ref: bentoBoxRef1,
      },
      {
        number: "3x",
        unit: "Average ROI",
        description:
          "The average return on investment our clients experience in the first year.",
        icon: BarChart3, // Changed to Chart for ROI
        ref: bentoBoxRef2,
      },
      {
        number: "50+",
        unit: "Global Launches",
        description:
          "Websites, apps, and brands launched across diverse industries.",
        icon: Globe, // Kept Globe for reach
        ref: bentoBoxRef3,
      },
    ],
    []
  );

  // Client-side check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // GSAP ANIMATIONS with cleanup
  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Subheadline box animation
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

      // Headline text animation
      if (titleRef.current) {
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      // Bento grid boxes animations with stagger
      kpiData.forEach((item, index) => {
        gsap.fromTo(
          item.ref.current,
          { rotationY: 30, scale: 0.6, opacity: 0 },
          {
            delay: index * 0.2,
            rotationY: 0,
            scale: 1,
            opacity: 1,
            duration: 0.75,
            ease: "power1.out",
            scrollTrigger: {
              trigger: item.ref.current,
              start: "top bottom",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [isClient, kpiData]);

  // SSR fallback
  if (!isClient) {
    return (
      <section className="kpi">
        <div className="kpi-content">
          <div className="textbox">
            <div className="subheadline-box">
              <Zap className="subheadline-box-icon" />
              <h2 className="small-description grey">
                Key Performance Indicators
              </h2>
            </div>
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h2 className="subheadline white">
                Driven by Data, Defined by Results
              </h2>
            </div>
          </div>
          <div className="kpi-loading">Loading KPIs...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="kpi">
      <div className="kpi-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">
              Key Performance Indicators
            </h2>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h2 className="subheadline white" ref={titleRef}>
              Driven by Data, Defined by Results
            </h2>
          </div>
        </div>

        <div className="kpi-content-row">
          {kpiData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div className="kpi-content-item" ref={item.ref} key={index}>
                <div className="kpi-item-textbox">
                  <div className="kpi-item-textbox-top">
                    <div className="kpi-item-textbox-number">
                      <h2 className="headline kpi-item-textbox-number-text white">
                        {item.number}
                      </h2>
                      <div className="kpi-item-textbox-number-gradient" />
                    </div>
                    <h3 className="small-subheadline kpi-item-textbox-top-text white">
                      {item.unit}
                    </h3>
                  </div>
                  <p className="description grey">{item.description}</p>
                </div>
                <div className="kpi-item-button">
                  <IconComponent className="kpi-item-button-icon" />
                </div>
                <div className="kpi-item-grid" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
