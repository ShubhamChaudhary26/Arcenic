"use client";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./Navigation.css";

const servicesData = [
  {
    category: "Development",
    items: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "E-Commerce", path: "/services/e-commerce-solutions" },
      { name: "CRM Solutions", path: "/services/crm-solutions" },
      { name: "ERP Systems", path: "/services/erp-systems" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "Graphic Design", path: "/services/graphic-design" },
      { name: "Branding & SEO", path: "/services/branding-seo" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "AI Calling Agent", path: "/services/ai-calling-agent" },
      { name: "AI Chatbot", path: "/services/ai-chatbot" },
      { name: "AI Marketing", path: "/services/ai-marketing" },
      { name: "N8N Automation", path: "/services/n8n" },
    ],
  },
];

const industriesData = [
  { name: "Fintech", path: "/industries/fintech" },
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Real Estate", path: "/industries/real-estate" },
  { name: "Logistics", path: "/industries/logistics" },
  { name: "E-Commerce", path: "/industries/e-commerce" },
  { name: "EdTech", path: "/industries/edtech" },
  { name: "Hospitality", path: "/industries/hospitality" },
  { name: "Manufacturing", path: "/industries/manufacturing" },
];

export const Navigation = () => {
  const navigationBar = useRef(null);
  const navigationBarCenter = useRef(null);
  const navigationBarCenterRef1 = useRef(null);
  const navigationBarCenterRef2 = useRef(null);
  const navigationBarCenterRef3 = useRef(null);
  const navigationBarCenterRef4 = useRef(null);
  const navigationBarCenterRef5 = useRef(null);
  const navigationBarCenterRef6 = useRef(null);

  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const hamburgerLine1 = useRef(null);
  const hamburgerLine2 = useRef(null);
  const hamburgerLine3 = useRef(null);

  const servicesContainerRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const servicesChevronRef = useRef(null);

  const industriesContainerRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const industriesChevronRef = useRef(null);

  const mobileServicesRef = useRef(null);
  const mobileServicesChevronRef = useRef(null);
  const mobileIndustriesRef = useRef(null);
  const mobileIndustriesChevronRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  const isServicesDropdownOpen = useRef(false);
  const servicesDropdownTimeout = useRef(null);
  const isIndustriesDropdownOpen = useRef(false);
  const industriesDropdownTimeout = useRef(null);

  const router = useRouter();

  useLayoutEffect(() => {
    if (isInitialized) return;

    const tl = gsap.timeline({
      onComplete: () => setIsInitialized(true),
    });

    tl.to(navigationBar.current, {
      opacity: 1,
      rotateY: "0deg",
      scale: "1",
      rotateX: "0deg",
      translateY: "0vh",
      duration: 0.75,
      ease: "power1",
      delay: 0.75,
    })
      .fromTo(
        navigationBar.current,
        { width: "25%" },
        { width: "100%", duration: 0.75, ease: "power1" }
      )
      .set(navigationBarCenter.current, { display: "flex" })
      .to(
        [
          navigationBarCenterRef1.current,
          navigationBarCenterRef2.current,
          navigationBarCenterRef3.current,
          navigationBarCenterRef4.current,
          navigationBarCenterRef5.current,
          navigationBarCenterRef6.current,
        ],
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

    return () => tl.kill();
  }, [isInitialized]);

  const openServicesDropdown = useCallback(() => {
    if (servicesDropdownTimeout.current) {
      clearTimeout(servicesDropdownTimeout.current);
      servicesDropdownTimeout.current = null;
    }

    if (isServicesDropdownOpen.current) return;
    isServicesDropdownOpen.current = true;

    gsap.set(servicesDropdownRef.current, { display: "flex" });
    gsap.to(servicesDropdownRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power3.out",
    });
    gsap.to(servicesChevronRef.current, {
      rotation: 180,
      duration: 0.25,
      ease: "power2.out",
    });
  }, []);

  const closeServicesDropdown = useCallback((immediate = false) => {
    const close = () => {
      isServicesDropdownOpen.current = false;
      gsap.to(servicesDropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(servicesDropdownRef.current, { display: "none" });
        },
      });
      gsap.to(servicesChevronRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    };

    if (immediate) {
      close();
    } else {
      servicesDropdownTimeout.current = setTimeout(close, 150);
    }
  }, []);

  const handleServicesEnter = useCallback(() => {
    openServicesDropdown();
  }, [openServicesDropdown]);

  const handleServicesLeave = useCallback(() => {
    closeServicesDropdown(false);
  }, [closeServicesDropdown]);

  const handleServiceClick = useCallback(
    (path) => {
      closeServicesDropdown(true);
      router.push(path);
    },
    [closeServicesDropdown, router]
  );

  const openIndustriesDropdown = useCallback(() => {
    if (industriesDropdownTimeout.current) {
      clearTimeout(industriesDropdownTimeout.current);
      industriesDropdownTimeout.current = null;
    }

    if (isIndustriesDropdownOpen.current) return;
    isIndustriesDropdownOpen.current = true;

    gsap.set(industriesDropdownRef.current, { display: "grid" });
    gsap.to(industriesDropdownRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power3.out",
    });
    gsap.to(industriesChevronRef.current, {
      rotation: 180,
      duration: 0.25,
      ease: "power2.out",
    });
  }, []);

  const closeIndustriesDropdown = useCallback((immediate = false) => {
    const close = () => {
      isIndustriesDropdownOpen.current = false;
      gsap.to(industriesDropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(industriesDropdownRef.current, { display: "none" });
        },
      });
      gsap.to(industriesChevronRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    };

    if (immediate) {
      close();
    } else {
      industriesDropdownTimeout.current = setTimeout(close, 150);
    }
  }, []);

  const handleIndustriesEnter = useCallback(() => {
    openIndustriesDropdown();
  }, [openIndustriesDropdown]);

  const handleIndustriesLeave = useCallback(() => {
    closeIndustriesDropdown(false);
  }, [closeIndustriesDropdown]);

  const handleIndustryClick = useCallback(
    (path) => {
      closeIndustriesDropdown(true);
      router.push(path);
    },
    [closeIndustriesDropdown, router]
  );

  const toggleMobileServices = useCallback(() => {
    if (!isMobileServicesOpen) {
      gsap.set(mobileServicesRef.current, { display: "flex" });
      gsap.to(mobileServicesRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(mobileServicesChevronRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileServicesRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileServicesRef.current, { display: "none" });
        },
      });
      gsap.to(mobileServicesChevronRef.current, {
        rotation: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
    setIsMobileServicesOpen(!isMobileServicesOpen);
  }, [isMobileServicesOpen]);

  const toggleMobileIndustries = useCallback(() => {
    if (!isMobileIndustriesOpen) {
      gsap.set(mobileIndustriesRef.current, { display: "flex" });
      gsap.to(mobileIndustriesRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(mobileIndustriesChevronRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileIndustriesRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileIndustriesRef.current, { display: "none" });
        },
      });
      gsap.to(mobileIndustriesChevronRef.current, {
        rotation: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
    setIsMobileIndustriesOpen(!isMobileIndustriesOpen);
  }, [isMobileIndustriesOpen]);

  const animateHamburger = useCallback((toX) => {
    const isMobile = window.innerWidth <= 768;
    const yOffset = isMobile ? "0.8vw" : "6px";

    if (toX) {
      gsap.to(hamburgerLine1.current, {
        rotation: 45,
        y: yOffset,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(hamburgerLine2.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(hamburgerLine3.current, {
        rotation: -45,
        y: `-${yOffset}`,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(hamburgerLine1.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(hamburgerLine2.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      });
      gsap.to(hamburgerLine3.current, {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      mobileMenuRef.current.classList.add("open");
      overlayRef.current.classList.add("open");
      document.body.style.overflow = "hidden";
      animateHamburger(true);
    } else {
      mobileMenuRef.current.classList.remove("open");
      overlayRef.current.classList.remove("open");
      document.body.style.overflow = "auto";
      animateHamburger(false);
      setIsMobileServicesOpen(false);
      setIsMobileIndustriesOpen(false);

      if (mobileServicesRef.current) {
        gsap.set(mobileServicesRef.current, {
          height: 0,
          opacity: 0,
          display: "none",
        });
      }
      if (mobileServicesChevronRef.current) {
        gsap.set(mobileServicesChevronRef.current, { rotation: 0 });
      }
      if (mobileIndustriesRef.current) {
        gsap.set(mobileIndustriesRef.current, {
          height: 0,
          opacity: 0,
          display: "none",
        });
      }
      if (mobileIndustriesChevronRef.current) {
        gsap.set(mobileIndustriesChevronRef.current, { rotation: 0 });
      }
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, animateHamburger]);

  useEffect(() => {
    return () => {
      if (servicesDropdownTimeout.current) {
        clearTimeout(servicesDropdownTimeout.current);
      }
      if (industriesDropdownTimeout.current) {
        clearTimeout(industriesDropdownTimeout.current);
      }
    };
  }, []);

  const handleNavigate = useCallback(
    (path) => {
      setIsMenuOpen(false);
      closeServicesDropdown(true);
      closeIndustriesDropdown(true);
      router.push(path);
    },
    [router, closeServicesDropdown, closeIndustriesDropdown]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleOverlayClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="navigation-wrapper" aria-label="Main navigation">
      <div className="navigation-inside" ref={navigationBar}>
        <div className="navigation-inside-left">
          <Link href="/" aria-label="Arcenik Technologies Home">
            <Image
              src="/images/logo1.png"
              className="navigation-inside-left-image"
              alt="Arcenik Technologies Logo"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>

        <div className="navigation-inside-big" ref={navigationBarCenter}>
          <Link href="/" className="nav-link" ref={navigationBarCenterRef1}>
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link"
            ref={navigationBarCenterRef2}
          >
            About
          </Link>

          <div
            className="dropdown-container"
            ref={servicesContainerRef}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <span
              className="nav-link dropdown-trigger"
              ref={navigationBarCenterRef3}
            >
              Services
              <ChevronDown
                ref={servicesChevronRef}
                className="chevron-icon"
                size={14}
              />
            </span>

            <div className="mega-menu" ref={servicesDropdownRef}>
              <div className="mega-menu-bridge" />
              <div className="mega-menu-inner">
                {servicesData.map((category, catIndex) => (
                  <div className="mega-menu-column" key={catIndex}>
                    <span className="mega-menu-category">
                      {category.category}
                    </span>
                    {category.items.map((service, index) => (
                      <Link
                        key={index}
                        href={service.path}
                        className="mega-menu-item"
                        onClick={() => closeServicesDropdown(true)}
                      >
                        <span className="mega-menu-item-text">
                          {service.name}
                        </span>
                        <ArrowUpRight
                          className="mega-menu-item-arrow"
                          size={14}
                        />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="dropdown-container"
            ref={industriesContainerRef}
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          >
            <span
              className="nav-link dropdown-trigger"
              ref={navigationBarCenterRef4}
            >
              Industries
              <ChevronDown
                ref={industriesChevronRef}
                className="chevron-icon"
                size={14}
              />
            </span>

            <div className="industries-dropdown" ref={industriesDropdownRef}>
              <div className="mega-menu-bridge" />
              <div className="industries-dropdown-inner">
                {industriesData.map((industry, index) => (
                  <Link
                    key={index}
                    href={industry.path}
                    className="industries-dropdown-item"
                    onClick={() => closeIndustriesDropdown(true)}
                  >
                    <span className="industries-dropdown-text">
                      {industry.name}
                    </span>
                    <ArrowUpRight
                      className="industries-dropdown-arrow"
                      size={12}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/blogs"
            className="nav-link"
            ref={navigationBarCenterRef5}
          >
            Blog
          </Link>
          <Link
            href="/works"
            className="nav-link"
            ref={navigationBarCenterRef6}
          >
            Works
          </Link>
        </div>

        <div className="navigation-inside-right">
          <Link href="/contact" className="button button-navigation">
            <div className="button-content">
              <span className="small-description">Get In Touch</span>
              <span className="small-description">Get In Touch</span>
            </div>
            <div className="button-circle">
              <ArrowUpRight className="button-icon" />
            </div>
          </Link>
        </div>

        <div className="navigation-inside-right-mobile">
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="hamburger-line" ref={hamburgerLine1} />
            <div className="hamburger-line" ref={hamburgerLine2} />
            <div className="hamburger-line" ref={hamburgerLine3} />
          </button>
        </div>
      </div>

      <div
        ref={overlayRef}
        className="mobile-overlay"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      <div
        ref={mobileMenuRef}
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        <Link
          href="/"
          className="mobile-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mobile-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>

        <div className="mobile-accordion-wrapper">
          <button
            className="mobile-menu-item mobile-accordion-header"
            onClick={toggleMobileServices}
            aria-expanded={isMobileServicesOpen}
          >
            <span>Services</span>
            <ChevronDown
              ref={mobileServicesChevronRef}
              className="mobile-chevron-icon"
              size={24}
            />
          </button>
          <div className="mobile-accordion-list" ref={mobileServicesRef}>
            {servicesData.map((category, catIndex) => (
              <div key={catIndex} className="mobile-accordion-category">
                <span className="mobile-accordion-category-title">
                  {category.category}
                </span>
                {category.items.map((service, index) => (
                  <Link
                    key={index}
                    href={service.path}
                    className="mobile-accordion-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-accordion-wrapper">
          <button
            className="mobile-menu-item mobile-accordion-header"
            onClick={toggleMobileIndustries}
            aria-expanded={isMobileIndustriesOpen}
          >
            <span>Industries</span>
            <ChevronDown
              ref={mobileIndustriesChevronRef}
              className="mobile-chevron-icon"
              size={24}
            />
          </button>
          <div className="mobile-accordion-list" ref={mobileIndustriesRef}>
            {industriesData.map((industry, index) => (
              <Link
                key={index}
                href={industry.path}
                className="mobile-accordion-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/blogs"
          className="mobile-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="/works"
          className="mobile-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          Works
        </Link>
        <Link
          href="/contact"
          className="mobile-menu-item mobile-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};
