/* eslint-disable react/jsx-key */
import React, { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PrevButton, NextButton, usePrevNextButtons} from "./Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { Send } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTestimonials = () => {

    const subheadlineBoxRef = useRef()
    const titleRef = useRef()
    const emblaWrapperRef = useRef()

    // GSAP ANIMATIONS

    useEffect(() => {

        // subheadline box animation
        gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" }});

        // headline text animation
        const titleSplit = new SplitText(titleRef.current, { type: "words" });
        gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

        // embla wrapper animation
        gsap.to(emblaWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: emblaWrapperRef.current, start: "top 95%" }});

    }, [])

    // EMBLA CAROUSEL

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true})
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return
    
        onScroll(emblaApi)
        emblaApi
          .on("reInit", onScroll)
          .on("scroll", onScroll)
          .on("slideFocus", onScroll)
    }, [emblaApi, onScroll])

  return (
    <section className="testimonials">
    <div className="testimonials-content">
        <div className="textbox testimonials-content-textbox">
            <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
                <Send className="subheadline-box-icon" />
                <h2 className="small-description grey" >Accounting on autopilot</h2>
            </div>
            <div className="titlebox">
                <div className="titlebox-big-gradient" />
                <h1 className="subheadline white" ref={titleRef} >Don&apos;t Take Our Word For It! <br />Hear It From Our Partners.</h1>
            </div>
        </div>
        <div className="opacity-blur" ref={emblaWrapperRef} >
            <div className="testimonials-carousel" ref={emblaRef} >
               <div className="testimonials-carousel-row">
  <div className="testimonials-item-padding" />

  {/* Testimonial 1 */}
{/* Testimonial 1 */}
<div className="testimonials-item">
  <div className="testimonials-item-content">
    <div className="testimonials-item-profile">
      <img
        src="https://i.pravatar.cc/150?img=68"
        alt="Rakesh Kumar"
        className="avatar"
      />
    </div>
    <div className="testimonials-item-center">
      <p className="big-description white">Rakesh Kumar</p>
      <p className="description grey">Small Business Owner</p>
    </div>
    <p className="description white">
      The team’s solution helped us streamline operations and increase our customer satisfaction. Tasks are now much faster to complete.
    </p>
  </div>
  <div className="testimonials-item-grid" />
</div>

{/* Testimonial 2 */}
<div className="testimonials-item">
  <div className="testimonials-item-content">
    <div className="testimonials-item-profile">
      <img
        src="https://i.pravatar.cc/150?img=54"
        alt="Krish Patel"
        className="avatar"
      />
    </div>
    <div className="testimonials-item-center">
      <p className="big-description white">Krish Patel</p>
      <p className="description grey">Project Manager</p>
    </div>
    <p className="description white">
      This solution transformed how our team collaborates on projects. We now meet deadlines more efficiently and communicate seamlessly.
    </p>
  </div>
  <div className="testimonials-item-grid" />
</div>

{/* Testimonial 3 */}
<div className="testimonials-item">
  <div className="testimonials-item-content">
    <div className="testimonials-item-profile">
      <img
        src="https://i.pravatar.cc/150?img=31"
        alt="Palkhi Sharma"
        className="avatar"
      />
    </div>
    <div className="testimonials-item-center">
      <p className="big-description white">Palkhi Sharma</p>
      <p className="description grey">Operations Manager</p>
    </div>
    <p className="description white">
      Implementing this platform simplified our workflow and improved team performance. Everyone is more aligned and productive now.
    </p>
  </div>
  <div className="testimonials-item-grid" />
</div>

{/* Testimonial 4 */}
<div className="testimonials-item">
  <div className="testimonials-item-content">
    <div className="testimonials-item-profile">
      <img
        src="https://i.pravatar.cc/150?img=9"
        alt="Palkhi Sharma"
        className="avatar"
      />
    </div>
    <div className="testimonials-item-center">
      <p className="big-description white">Ananya Singh</p>
      <p className="description grey">Marketing Head</p>
    </div>
    <p className="description white">
      Thanks to this tool, our marketing campaigns run smoothly, and reporting has become much easier. It’s a game-changer for our department.
    </p>
  </div>
  <div className="testimonials-item-grid" />
</div>



  {/* Last call-to-action item */}
  <div className="testimonials-item testimonials-item-last">
    <div className="testimonials-item-content testimonials-item-content-last">
      <div className="testimonials-item-last-top">
        <p className="description white">Be our next client in this section!</p>
      </div>
      <p className="small-subheadline white">Let us get you a coffee.</p>
      <div className="contact-button-wrapper">
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
    <div className="background-gradient-circle-3" />
    <div className="testimonials-item-grid" />
  </div>

  <div className="testimonials-item-padding" />
</div>

            </div>
        </div>

        <div className="testimonials-content-bottom">
            <div className="testimonials-content-bottom-buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
            <div className="embla__progress">
                <div
                    className="embla__progress__bar"
                    style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                />
            </div>
        </div>
    </div>
</section>
  );
};