"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import "./works.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Main/Carousel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowUpRight,
  Zap,
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Eye,
  Code,
  Palette,
  Rocket,
  Globe,
  Smartphone,
  Settings,
  ShoppingCart,
  Layers,
  Star,
  Monitor,
} from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { SectionTestimonials } from "../Main/SectionTestimonials";
import { AppModal } from "../../components/AppModal/AppModal";
import { LaptopModal } from "../../components/LaptopModal/LaptopModal";
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const WorksPageSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // ============ APP MODAL STATES ============
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [laptopModalOpen, setLaptopModalOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState(null);
  // ANIMATION REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const latestCarouselWrapperRef = useRef();
  const worksItemRef1 = useRef();
  const statsRef = useRef();
  const processRef = useRef();
  const allProjectsRef = useRef();
  const allProjectsTitleRef = useRef();
  const allProjectsDescRef = useRef();
  const subheadlineBoxRef1 = useRef();
  const categoryTabsRef = useRef();
  const projectsGridRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);


  const categories = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "website", label: "Websites", icon: Globe },
    // { id: "app", label: "Mobile Apps", icon: Smartphone },
    { id: "software", label: "Custom Software", icon: Settings },
    { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
    // { id: "saas", label: "SaaS", icon: Code },
  ];

  const allProjects = [
  // 1. Website
  {
    title: "Veltrix",
    category: "website",
    type: "web",
    categoryLabel: "Web Design & Development",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    image: "/works/gym-min.png",
    description:
      "Modern gym website with interactive class schedules, membership plans, and trainer profiles.",
    link: "https://veltrixgym.in",
  },

  // 2. Software
  {
    title: "Logistics Dashboard",
    category: "software",
    type: "software",
    categoryLabel: "Logistics Management System",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Google Maps API"],
    image: "/works/kvl.png",
    description:
      "Comprehensive dashboard for managing logistics operations with real-time shipment tracking and fleet management.",
    screenshots: [
      "/works/kvl.png",
      "/works/kvl.png",
      "/works/kvl.png",
      "/works/kvl.png",
    ],
    features: [
      "Real-time shipment tracking with GPS integration",
      "Automated route optimization for delivery",
      "Fleet management and vehicle tracking",
      "Delivery scheduling and notifications",
      "Driver performance analytics",
      "Customer delivery status updates",
    ],
    link: "#",
  },

  // 3. Ecommerce
  {
    title: "Gift Shop",
    category: "ecommerce",
    type: "web",
    categoryLabel: "E-Commerce Platform",
    tags: ["Shopify", "Custom Theme", "SEO", "Payment Gateway"],
    image: "/works/gift.jpeg",
    description:
      "Online gift store with personalized product options, gift wrapping, and occasion-based categories.",
    link: "https://mybestgift.in/",
  },

  // 4. Website
  {
    title: "7Star Travels",
    category: "website",
    type: "web",
    categoryLabel: "Travel Agency Website",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Framer Motion"],
    image: "/works/tourist-min.png",
    description:
      "Premium travel agency website with tour packages, booking system, and destination guides.",
    link: "/works/peak-creations",
  },

  // 5. Software
  {
    title: "TaskMaster CRM",
    category: "software",
    type: "software",
    categoryLabel: "Customer Relationship Management",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    image: "/works/peak.webp",
    description:
      "Powerful CRM solution with visual sales pipeline, lead management, and marketing automation.",
    screenshots: [
      "/software/taskmaster/dashboard.png",
      "/software/taskmaster/pipeline.png",
      "/software/taskmaster/contacts.png",
      "/software/taskmaster/reports.png",
    ],
    features: [
      "Visual drag-drop sales pipeline management",
      "Lead scoring with AI-powered predictions",
      "Email and WhatsApp campaign automation",
      "Customer interaction timeline and history",
      "Team performance analytics and targets",
      "Third-party integrations (Slack, Gmail, Zapier)",
    ],
    link: "/works/taskmaster-crm",
  },

  // 6. Ecommerce
  {
    title: "Sana Commerce",
    category: "ecommerce",
    type: "web",
    categoryLabel: "B2B E-Commerce Platform",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe API"],
    image: "/works/sona.png",
    description:
      "A high-performance B2B e-commerce website developed for Sana Commerce. Built with Next.js to ensure fast load times and SEO optimization.",
    link: "https://www.sana-commerce.com/",
  },

  // 7. Website
  {
    title: "MintSurvey",
    category: "website",
    type: "web",
    categoryLabel: "SaaS Platform",
    tags: ["React", "Node.js", "Docker", "MongoDB", "Charts.js"],
    image: "/works/mintsurvey.png",
    description:
      "Survey creation platform with drag-drop builder, real-time analytics, and export reports.",
    link: "https://mintsurvey.com",
  },

  // 8. Software
  {
    title: "AMS Engineer",
    category: "software",
    type: "software",
    categoryLabel: "Engineering Service Management",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/works/amsengineer/amsengineer.png",
    description:
      "Service management software for engineering firms to track projects, technicians, and client requests.",
    screenshots: [
      "/works/amsengineer/amsengineer2.png",
      "/works/amsengineer/amsengineer3.png",
      "/works/amsengineer/amsengineer4.png",
    ],
    features: [
      "Project tracking and milestone management",
      "Technician assignment and scheduling",
      "Client request ticketing system",
      "Service history and documentation",
      "Invoice and quotation generation",
      "Performance reports and analytics",
    ],
    link: "/works/amsengineer",
  },

  // 9. Website
  {
    title: "Goldstab",
    category: "website",
    type: "web",
    categoryLabel: "Chemical Manufacturing Website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    image: "/works/goldstab.png",
    description:
      "A global leader in polymer stabilization solutions. Built with Next.js for high performance and SEO optimization, the platform delivers a clean industrial design.",
    link: "https://www.goldstab.com/",
  },

  // 10. Software
  {
    title: "CoolBreeze Services",
    category: "software",
    type: "software",
    categoryLabel: "HVAC Service Management",
    tags: ["React", "Node.js", "MongoDB", "Twilio API"],
    image: "/works/CoolBreezeServices/CoolBreezeServices4.png",
    description:
      "Complete service management solution for AC/HVAC businesses with booking, technician dispatch, and customer management.",
    screenshots: [
      "/works/CoolBreezeServices/CoolBreezeServices2.png",
      "/works/CoolBreezeServices/CoolBreezeServices3.png",
      "/works/CoolBreezeServices/CoolBreezeServices1.png",
    ],
    features: [
      "Online service booking and scheduling",
      "Technician dispatch and route optimization",
      "Inventory management for spare parts",
      "AMC (Annual Maintenance Contract) tracking",
      "SMS/WhatsApp notifications to customers",
      "Service feedback and rating collection",
    ],
    link: "/works/coolbreeze-services",
  },

  // 11. Website
  {
    title: "Rent Agreement",
    category: "website",
    type: "web",
    categoryLabel: "Legal Services Website",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "PDF Generator"],
    image: "/works/rental-min.png",
    description:
      "Platform for generating legally valid rent agreements online with e-signature and instant download.",
    link: "https://rentagreementwithus.com/",
  },

  // 12. Software
  {
    title: "FarmTrack Pro",
    category: "software",
    type: "software",
    categoryLabel: "Agriculture Management System",
    tags: ["React", "Node.js", "MongoDB", "IoT Integration"],
    image: "/works/farmtrackPro/farmtrackPro1.png",
    description:
      "Smart farming solution for crop management, livestock tracking, and agricultural analytics.",
    screenshots: [
      "/works/farmtrackPro/farmtrackPro2.png",
      "/works/farmtrackPro/farmtrackPro3.png",
      "/works/farmtrackPro/farmtrackPro4.png",
    ],
    features: [
      "Crop planning and harvest scheduling",
      "Weather monitoring and alerts",
      "Livestock health and feeding management",
      "Expense tracking and profit analysis",
      "Irrigation scheduling and reminders",
      "Market price updates and selling insights",
    ],
    link: "/works/farmtrack-pro",
  },

  // 13. Website
  {
    title: "Urban Homes",
    category: "website",
    type: "web",
    categoryLabel: "Real Estate Website",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    image: "/works/heave.webp",
    description:
      "Modern property listing platform with virtual tours, advanced search filters, and lead management.",
    link: "#",
  },

  // 14. Software
  {
    title: "PowerGrid",
    category: "software",
    type: "software",
    categoryLabel: "Energy Management System",
    tags: ["React", "Python", "PostgreSQL", "MQTT", "IoT"],
    image: "/works/powergrid/powergrid1.png",
    description:
      "Smart energy monitoring and management dashboard for power consumption analysis and optimization.",
    screenshots: [
      "/works/powergrid/powergrid2.png",
      "/works/powergrid/powergrid3.png",
    ],
    features: [
      "Real-time power consumption monitoring",
      "Load balancing and peak hour analysis",
      "Automated alerts for power anomalies",
      "Cost estimation and billing reports",
      "Multi-location energy tracking",
      "Carbon footprint calculation and reporting",
    ],
    link: "/works/powergrid",
  },

  // 15. Website
  {
    title: "Gajpati Industries",
    category: "website",
    type: "web",
    categoryLabel: "Chemical Industries Website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    image: "/works/gajpati.png",
    description:
      "A chemical manufacturing company website. Built with Next.js for high performance and SEO, enhanced with modern animations.",
    link: "https://gajpatiindustries.com/",
  },

  // 16. Software
  {
    title: "PropertyLedger",
    category: "software",
    type: "software",
    categoryLabel: "Property Management System",
    tags: ["React", "Node.js", "MongoDB", "Razorpay API"],
    image: "/works/PropertyLedger/PropertyLedger4.png",
    description:
      "Complete property management solution for landlords and property managers to track tenants, rents, and maintenance.",
    screenshots: [
      "/works/PropertyLedger/PropertyLedger2.png",
      "/works/PropertyLedger/PropertyLedger3.png",
      "/works/PropertyLedger/PropertyLedger1.png",
    ],
    features: [
      "Tenant onboarding and KYC management",
      "Automated rent collection with reminders",
      "Maintenance request tracking system",
      "Lease agreement and document storage",
      "Expense tracking and profit reports",
      "Multi-property portfolio management",
    ],
    link: "/works/property-ledger",
  },

  // 17. Software
  {
    title: "LogiFlow ERP",
    category: "software",
    type: "software",
    categoryLabel: "Enterprise Resource Planning",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    image: "/works/kinimatic.webp",
    description:
      "Complete enterprise resource planning system for supply chain and logistics management.",
    screenshots: [
      "/software/logiflow/main.png",
      "/software/logiflow/inventory.png",
      "/software/logiflow/orders.png",
      "/software/logiflow/analytics.png",
    ],
    features: [
      "End-to-end supply chain visibility",
      "Automated purchase order management",
      "Real-time inventory tracking across warehouses",
      "Vendor relationship and procurement management",
      "Financial reporting and GST integration",
      "Custom workflow automation with approval system",
    ],
    link: "/works/logiflow-erp",
  },

  // 18. Software
  {
    title: "Travels Management",
    category: "software",
    type: "software",
    categoryLabel: "Travel Booking Management",
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    image: "/works/travels/travels4.png",
    description:
      "Travel agency management software for handling bookings, itineraries, customer management, and payments.",
    screenshots: [
      "/works/travels/travels2.png",
      "/works/travels/travels3.png",
      "/works/travels/travels1.png",
    ],
    features: [
      "Tour package creation and management",
      "Customer booking and inquiry tracking",
      "Itinerary builder with day-wise planning",
      "Vendor and supplier management",
      "Invoice generation and payment tracking",
      "Customer feedback and review collection",
    ],
    link: "#",
  },



    // ============ MOBILE APPS (type: "mobile") ============
    // {
    //   title: "GreenLife",
    //   category: "app",
    //   type: "mobile",
    //   categoryLabel: "Health & Wellness App",
    //   tags: ["React Native", "Firebase", "AI"],
    //   image: "/works/vitalenta.webp",
    //   description:
    //     "Health & wellness tracking application with personalized insights and recommendations.",
    //   screenshots: [
    //     "/images/mobiletest.jpg",
    //     "/images/mobiletest.jpg",
    //     "/images/mobiletest.jpg",
    //     "/images/mobiletest.jpg",
    //   ],
    //   stats: {
    //     downloads: "50K+",
    //     rating: "4.8",
    //     users: "25K Active",
    //     year: "2024",
    //   },
    //   features: [
    //     "Personalized health insights powered by AI",
    //     "Real-time activity tracking and analytics",
    //     "Integration with wearable devices",
    //     "Custom meal planning and nutrition tracking",
    //   ],
    //   appStore: "https://apps.apple.com/app/greenlife",
    //   playStore: "https://play.google.com/store/apps/greenlife",
    // },
    // {
    //   title: "HealthTrack",
    //   category: "app",
    //   type: "mobile",
    //   categoryLabel: "Healthcare App",
    //   tags: ["Flutter", "Firebase", "AI/ML"],
    //   image: "/works/essentia.webp",
    //   description:
    //     "Patient monitoring app with real-time health analytics and doctor connectivity.",
    //   screenshots: [
    //     "/apps/healthtrack/ss-1.webp",
    //     "/apps/healthtrack/ss-2.webp",
    //     "/apps/healthtrack/ss-3.webp",
    //   ],
    //   stats: {
    //     downloads: "100K+",
    //     rating: "4.9",
    //     users: "45K Active",
    //     year: "2023",
    //   },
    //   features: [
    //     "Real-time vital signs monitoring",
    //     "Direct messaging with healthcare providers",
    //     "Medication reminders and tracking",
    //     "Emergency SOS feature",
    //   ],
    //   playStore: "https://play.google.com/store/apps/healthtrack",
    // },
    // {
    //   title: "FitBuddy",
    //   category: "app",
    //   type: "mobile",
    //   categoryLabel: "Fitness App",
    //   tags: ["React Native", "Node.js", "Wearable API"],
    //   image: "/works/rev.webp",
    //   description:
    //     "Personal fitness trainer app with workout tracking and social features.",
    //   screenshots: [
    //     "/apps/fitbuddy/workout.webp",
    //     "/apps/fitbuddy/stats.webp",
    //     "/apps/fitbuddy/plans.webp",
    //     "/apps/fitbuddy/progress.webp",
    //   ],
    //   stats: {
    //     downloads: "200K+",
    //     rating: "4.7",
    //     users: "80K Active",
    //     year: "2024",
    //   },
    //   features: [
    //     "500+ guided workout videos",
    //     "Custom workout plan generator",
    //     "Progress photos and body measurements",
    //     "Social challenges with friends",
    //   ],
    //   appStore: "https://apps.apple.com/app/fitbuddy",
    //   playStore: "https://play.google.com/store/apps/fitbuddy",
    // },



  ];

  // ============ FEATURED PROJECTS (5 for slider) ============
  const featuredProjects = [
    allProjects.find((p) => p.title === "Kinimatic"),
    allProjects.find((p) => p.title === "Vita Lenta"),
    allProjects.find((p) => p.title === "GreenLife"),
    allProjects.find((p) => p.title === "MindSurvey"),
    allProjects.find((p) => p.title === "LogiFlow ERP"),
  ].filter(Boolean);

  // ============ FILTERED PROJECTS ============
  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  // ============ STATS DATA ============
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Briefcase },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "8+", label: "Industries Served", icon: TrendingUp },
    { number: "100%", label: "Client Satisfaction", icon: Award },
  ];

  // ============ PROCESS STEPS ============
  const processSteps = [
    {
      number: "01",
      title: "Strategy & Planning",
      description:
        "We dig deep into your business goals to create a roadmap that actually works.",
      icon: Eye,
    },
    {
      number: "02",
      title: "Visual & UX Design",
      description:
        "We craft beautiful, intuitive interfaces that your users will love.",
      icon: Palette,
    },
    {
      number: "03",
      title: "Build & Engineer",
      description: "We write clean, scalable code using modern tech stacks.",
      icon: Code,
    },
    {
      number: "04",
      title: "Deploy & Grow",
      description:
        "We launch flawless products and help you scale effectively.",
      icon: Rocket,
    },
  ];

  // ============ APP MODAL HANDLERS ============
  const handleCardClick = (project, e) => {
    if (project.type === "mobile") {
      e.preventDefault();
      setSelectedApp(project);
      setModalOpen(true);
    } else if (project.type === "software") {
      e.preventDefault();
      setSelectedSoftware(project);
      setLaptopModalOpen(true);
    }
    // Web projects ke liye Link component automatically redirect karega
  };
  const handleCloseLaptopModal = () => {
    setLaptopModalOpen(false);
    setTimeout(() => setSelectedSoftware(null), 300);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedApp(null), 300);
  };

  // ============ CLIENT CHECK ============
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ============ EMBLA CAROUSEL FOR FEATURED PROJECTS ============
  const [emblaRefFeatured, emblaApiFeatured] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [scrollProgressFeatured, setScrollProgressFeatured] = useState(0);

  const {
    prevBtnDisabled: prevBtnDisabledFeatured,
    nextBtnDisabled: nextBtnDisabledFeatured,
    onPrevButtonClick: onPrevButtonClickFeatured,
    onNextButtonClick: onNextButtonClickFeatured,
  } = usePrevNextButtons(emblaApiFeatured);

  // ============ SCROLL PROGRESS HANDLER ============
  const onScroll = useCallback((emblaApi, setProgress) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);

  // Featured carousel scroll progress
  useEffect(() => {
    if (!emblaApiFeatured) return;
    const handleScroll = () =>
      onScroll(emblaApiFeatured, setScrollProgressFeatured);
    handleScroll();
    emblaApiFeatured
      .on("reInit", handleScroll)
      .on("scroll", handleScroll)
      .on("slideFocus", handleScroll);
    return () =>
      emblaApiFeatured
        .off("reInit", handleScroll)
        .off("scroll", handleScroll)
        .off("slideFocus", handleScroll);
  }, [emblaApiFeatured, onScroll]);

  // ============ CATEGORY CHANGE HANDLER ============
  const handleCategoryChange = useCallback(
    (categoryId) => {
      if (categoryId === activeCategory) return;

      if (projectsGridRef.current) {
        gsap.to(".works-project-card", {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.in",
          onComplete: () => {
            setActiveCategory(categoryId);
          },
        });
      } else {
        setActiveCategory(categoryId);
      }
    },
    [activeCategory]
  );

  // ============ ANIMATE PROJECTS ON CATEGORY CHANGE ============
  useEffect(() => {
    if (!isClient || !projectsGridRef.current) return;

    const timer = setTimeout(() => {
      gsap.fromTo(
        ".works-project-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [activeCategory, isClient]);

  // ============ INITIAL ANIMATIONS ============
  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero animations
        if (titleRef.current) {
          const titleSplit = new SplitText(titleRef.current, { type: "chars" });
          gsap.fromTo(
            titleSplit.chars,
            { filter: "blur(8px)", opacity: 0, yPercent: 50 },
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
        }

        if (descriptionRef.current) {
          gsap.to(descriptionRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.6,
          });
        }

        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { opacity: 0, filter: "blur(8px)" },
            { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
          );
        }

        // Stats animation
        if (statsRef.current) {
          gsap.fromTo(
            ".works-stats-item",
            { opacity: 0, scale: 0.8, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // Featured carousel animation
        if (latestCarouselWrapperRef.current) {
          gsap.to(latestCarouselWrapperRef.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power1",
            delay: 0.8,
          });
        }

        // Work items overlay animation
        if (worksItemRef1.current) {
          gsap.to(worksItemRef1.current, {
            delay: 0.4,
            opacity: 0,
            duration: 1,
            ease: "power1",
          });
        }

        // All projects section
        if (subheadlineBoxRef1.current) {
          gsap.to(subheadlineBoxRef1.current, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power1",
            scrollTrigger: {
              trigger: subheadlineBoxRef1.current,
              start: "top 95%",
            },
          });
        }

        if (allProjectsTitleRef.current) {
          const allTitleSplit = new SplitText(allProjectsTitleRef.current, {
            type: "words",
          });
          gsap.fromTo(
            allTitleSplit.words,
            { filter: "blur(8px)", opacity: 0, yPercent: 50 },
            {
              opacity: 1,
              filter: "blur(0px)",
              yPercent: 0,
              stagger: 0.05,
              duration: 0.75,
              ease: "power2",
              scrollTrigger: {
                trigger: allProjectsTitleRef.current,
                start: "top 95%",
              },
            }
          );
        }

        if (allProjectsDescRef.current) {
          const allDescSplit = new SplitText(allProjectsDescRef.current, {
            type: "words",
          });
          gsap.fromTo(
            allDescSplit.words,
            { filter: "blur(8px)", opacity: 0 },
            {
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.025,
              ease: "sine",
              scrollTrigger: {
                trigger: allProjectsDescRef.current,
                start: "top 95%",
              },
            }
          );
        }

        // Category tabs animation
        if (categoryTabsRef.current) {
          gsap.fromTo(
            ".works-category-tab",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: categoryTabsRef.current,
                start: "top 95%",
              },
            }
          );
        }

        // Process animation
        if (processRef.current) {
          gsap.fromTo(
            ".works-process-item",
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: processRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  // ============ CURSOR ANIMATION ============
  useEffect(() => {
    if (!isClient) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
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
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !cursor.current) return;

    gsap.to(cursor.current, {
      autoAlpha: showCursor ? 1 : 0,
      scale: showCursor ? 1 : 0,
      duration: 0.3,
      ease: showCursor ? "power3.out" : "power3.in",
    });
  }, [showCursor, isClient]);

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  // ============ RENDER ============
  return (
    <ReactLenis root>
      <section className="works">
        <div className="works-content">
          {/* ========== HERO SECTION ========== */}
          <div className="works-content-top">
            <div className="works-content-top-text">
              <div className="works-content-textbox">
                <div className="titlebox">
                  <div className="subpage-titlebox-gradient" />
                  <h1
                    className="headline white"
                    ref={titleRef}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    Projects That Define Excellence
                  </h1>
                </div>
                <p
                  className="description grey opacity-blur"
                  ref={descriptionRef}
                  style={{
                    opacity: isClient ? undefined : 1,
                    filter: isClient ? undefined : "none",
                  }}
                >
                  We help ambitious brands define their digital presence. From
                  custom websites to complex web apps, see how we turn
                  challenges into opportunities.
                </p>
              </div>
              <div
                className="works-content-top-divider"
                ref={lineRef}
                style={{ opacity: isClient ? undefined : 1 }}
              />
            </div>

            {/* ========== STATS SECTION ========== */}
            <div className="works-stats-wrapper" ref={statsRef}>
              <div className="works-stats">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      className="works-stats-item"
                      key={index}
                      style={{ opacity: isClient ? undefined : 1 }}
                    >
                      <div className="works-stats-icon-bg">
                        <IconComponent size={24} strokeWidth={1.5} />
                      </div>
                      <div className="works-stats-number">{stat.number}</div>
                      <div className="works-stats-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========== LATEST PROJECTS SLIDER (FEATURED) ========== */}
            <div className="works-latest-section">
              <div className="works-latest-header">
                <div className="subheadline-box">
                  <Star className="subheadline-box-icon" />
                  <h2 className="small-description grey">Featured Work</h2>
                </div>
                <h2 className="small-subheadline white">Latest Projects</h2>
              </div>

              <div
                className="works-carousel-wrapper opacity-blur"
                ref={latestCarouselWrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="works-carousel-wrapper-overlay"
                  ref={worksItemRef1}
                ></div>

                <div className="works-carousel" ref={emblaRefFeatured}>
                  <div className="works-carousel-row">
                    <div className="works-item-padding" />

                    {featuredProjects.map((project, index) => (
                      <div
                        className="works-item"
                        key={`featured-${project.title}-${index}`}
                        onClick={(e) => handleCardClick(project, e)}
                        style={{ cursor: "pointer" }}
                      >
                        {project.type === "mobile" ? (
                          // Mobile App - No Link, opens modal
                          <div className="works-item-content">
                            <div className="works-item-content-textbox">
                              <div className="works-item-badge">
                                <Smartphone size={14} />
                                <span>App</span>
                              </div>
                              <span className="works-item-category small-description grey">
                                {project.categoryLabel}
                              </span>
                              <h2 className="subheadline white">
                                {project.title}
                              </h2>
                              <p className="small-description grey works-item-description">
                                {project.description}
                              </p>
                              <div className="works-item-content-textbox-row">
                                {project.tags.map((tag, tagIndex) => (
                                  <div
                                    className="works-item-content-textbox-button"
                                    key={tagIndex}
                                  >
                                    <p className="small-description white">
                                      {tag}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Image
                              src={project.image}
                              className="works-item-content-image"
                              width={750}
                              height={750}
                              loading="lazy"
                              alt={`${project.title} - ${project.categoryLabel}`}
                            />
                          </div>
                        ) : (
                          // Web Project - Normal Link
                          <Link
                            href={project.link}
                            className="works-item-content"
                          >
                            <div className="works-item-content-textbox">
                              <span className="works-item-category small-description grey">
                                {project.categoryLabel}
                              </span>
                              <h2 className="subheadline white">
                                {project.title}
                              </h2>
                              <p className="small-description grey works-item-description">
                                {project.description}
                              </p>
                              <div className="works-item-content-textbox-row">
                                {project.tags.map((tag, tagIndex) => (
                                  <div
                                    className="works-item-content-textbox-button"
                                    key={tagIndex}
                                  >
                                    <p className="small-description white">
                                      {tag}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Image
                              src={project.image}
                              className="works-item-content-image"
                              width={750}
                              height={750}
                              loading="lazy"
                              alt={`${project.title} - ${project.categoryLabel}`}
                            />
                          </Link>
                        )}
                        <div className="works-item-border" />
                      </div>
                    ))}

                    {/* CTA Card */}
                    <div className="works-item">
                      <div className="works-item-last-content">
                        <div className="works-item-last-icon">
                          <Rocket size={48} strokeWidth={1} />
                        </div>
                        <div className="works-item-last-text">
                          <p className="description white">
                            Ready to start your project?
                          </p>
                          <h2 className="subheadline white">
                            Let's Create Something Amazing
                          </h2>
                        </div>
                        <Link
                          href="/contact"
                          className="button works-cta-button"
                        >
                          <div className="button-content">
                            <span className="small-description">
                              Start Your Project
                            </span>
                            <span className="small-description">
                              Start Your Project
                            </span>
                          </div>
                          <div className="button-circle">
                            <ArrowUpRight className="button-icon" />
                          </div>
                        </Link>
                      </div>
                      <div className="works-item-border" />
                    </div>

                    <div className="works-item-padding" />
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="casestudies-carousel-bottom">
                  <div className="casestudies-carousel-bottom-buttons">
                    <PrevButton
                      onClick={onPrevButtonClickFeatured}
                      disabled={prevBtnDisabledFeatured}
                    />
                    <NextButton
                      onClick={onNextButtonClickFeatured}
                      disabled={nextBtnDisabledFeatured}
                    />
                  </div>
                  <div className="embla__progress">
                    <div
                      className="embla__progress__bar"
                      style={{
                        transform: `translate3d(${scrollProgressFeatured}%,0px,0px)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== ALL PROJECTS SECTION (GRID WITH FILTERS) ========== */}
          <div className="works-all-projects" ref={allProjectsRef}>
            <div className="works-subtextbox">
              <div
                className="subheadline-box opacity-blur"
                ref={subheadlineBoxRef1}
              >
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">Our Portfolio</h2>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={allProjectsTitleRef}>
                  Explore All <br />
                  Our Projects
                </h2>
              </div>
              <p className="description grey" ref={allProjectsDescRef}>
                Browse through our complete portfolio of websites, mobile apps,
                custom software, and digital solutions we've built for clients
                across industries.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="works-categories-wrapper" ref={categoryTabsRef}>
              <div className="works-categories">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  const count =
                    cat.id === "all"
                      ? allProjects.length
                      : allProjects.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      className={`works-category-tab ${
                        activeCategory === cat.id ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(cat.id)}
                    >
                      <IconComponent
                        size={18}
                        className="works-category-icon"
                      />
                      <span className="small-description">{cat.label}</span>
                      <span className="works-category-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="works-projects-grid-wrapper" ref={projectsGridRef}>
              <div className="works-projects-grid">
                {filteredProjects.map((project, index) =>
                  project.type === "mobile" ? (
                    // Mobile App Card - Opens Modal
                    <div
                      key={`${project.title}-${activeCategory}-${index}`}
                      className="works-project-card"
                      onClick={(e) => handleCardClick(project, e)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="works-project-card-image-wrapper">
                        <Image
                          src={project.image}
                          className="works-project-card-image"
                          width={600}
                          height={400}
                          loading="lazy"
                          alt={`${project.title} - ${project.categoryLabel}`}
                        />
                        <div className="works-project-card-overlay">
                          <div className="works-project-card-overlay-icon">
                            <Smartphone size={24} />
                          </div>
                        </div>
                        <div className="works-project-card-badge">
                          <Smartphone size={14} />
                          <span>App</span>
                        </div>
                      </div>
                      <div className="works-project-card-content">
                        <span className="works-project-card-category small-description grey">
                          {project.categoryLabel}
                        </span>
                        <h3 className="small-subheadline white">
                          {project.title}
                        </h3>
                        <p className="small-description grey">
                          {project.description}
                        </p>
                        <div className="works-project-card-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              className="works-project-card-tag"
                              key={tagIndex}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : project.type === "software" ? (
                    // ============ SOFTWARE CARD - Opens Laptop Modal ============
                    <div
                      key={`${project.title}-${activeCategory}-${index}`}
                      className="works-project-card"
                      onClick={(e) => handleCardClick(project, e)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="works-project-card-image-wrapper">
                        <Image
                          src={project.image}
                          className="works-project-card-image"
                          width={600}
                          height={400}
                          loading="lazy"
                          alt={`${project.title} - ${project.categoryLabel}`}
                        />
                        <div className="works-project-card-overlay">
                          <div className="works-project-card-overlay-icon">
                            <Monitor size={24} />
                          </div>
                        </div>
                        {/* Software Badge */}
                        {/* <div className="works-project-card-badge software">
                          <Settings size={14} />
                          <span>Software</span>
                        </div> */}
                      </div>
                      <div className="works-project-card-content">
                        <span className="works-project-card-category small-description grey">
                          {project.categoryLabel}
                        </span>
                        <h3 className="small-subheadline white">
                          {project.title}
                        </h3>
                        <p className="small-description grey">
                          {project.description}
                        </p>
                        <div className="works-project-card-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              className="works-project-card-tag"
                              key={tagIndex}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // ============ WEB PROJECT CARD - Normal Link ============
                    <Link
                      href={project.link}
                      key={`${project.title}-${activeCategory}-${index}`}
                      className="works-project-card"
                    >
                      <div className="works-project-card-image-wrapper">
                        <Image
                          src={project.image}
                          className="works-project-card-image"
                          width={600}
                          height={400}
                          loading="lazy"
                          alt={`${project.title} - ${project.categoryLabel}`}
                        />
                        <div className="works-project-card-overlay">
                          <div className="works-project-card-overlay-icon">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                      <div className="works-project-card-content">
                        <span className="works-project-card-category small-description grey">
                          {project.categoryLabel}
                        </span>
                        <h3 className="small-subheadline white">
                          {project.title}
                        </h3>
                        <p className="small-description grey">
                          {project.description}
                        </p>
                        <div className="works-project-card-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              className="works-project-card-tag"
                              key={tagIndex}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="works-empty-state">
                  <p className="description grey">
                    No projects found in this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ========== OUR PROCESS SECTION ========== */}
          <div className="works-process" ref={processRef}>
            <div className="works-section-header">
              <div className="subheadline-box opacity-blur">
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey">How We Work</h2>
              </div>
              <h2 className="subheadline white">From Concept to Launch</h2>
              <p className="description grey">
                Our proven process ensures every project is delivered on time,
                on budget, and exceeds expectations.
              </p>
            </div>

            <div className="works-process-grid">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    className="works-process-item"
                    key={index}
                    style={{ opacity: isClient ? undefined : 1 }}
                  >
                    <div className="works-process-number">{step.number}</div>
                    <div className="works-process-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="small-subheadline white">{step.title}</h3>
                    <p className="description grey">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========== TESTIMONIALS SECTION ========== */}
          <SectionTestimonials />

          {/* ========== CTA SECTION ========== */}
          <div className="works-cta">
            <div className="works-cta-content">
              <h2 className="subheadline white">Have a Project in Mind?</h2>
              <p className="description grey">
                Let's discuss how we can help bring your vision to life.
              </p>
              <div className="works-cta-actions">
                <Link
                  href="/contact"
                  className="button works-cta-button-primary"
                >
                  <div className="button-content">
                    <span className="small-description">Start a Project</span>
                    <span className="small-description">Start a Project</span>
                  </div>
                  <div className="button-circle">
                    <ArrowUpRight className="button-icon" />
                  </div>
                </Link>
                <Link href="/about" className="works-cta-link">
                  <span className="description white">Learn About Us</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Cursor */}
        <div className="hover-cursor" ref={cursor}>
          <p className="small-description white">Drag</p>
        </div>

        {/* ========== APP MODAL ========== */}
        <AppModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          project={selectedApp}
        />
        <LaptopModal
          isOpen={laptopModalOpen}
          onClose={handleCloseLaptopModal}
          project={selectedSoftware}
        />
      </section>
    </ReactLenis>
  );
};
