// app/Main/Main.jsx
import dynamic from "next/dynamic";
import "./main.css";

// ✅ Hero - Static import
import { SectionHero } from "./SectionHero";

// ✅ LenisWrapper - Client only
const LenisWrapper = dynamic(() => import("./LenisWrapper"), {
  ssr: false,
});

// ✅ Dynamic imports for other sections
const SectionServices = dynamic(
  () =>
    import("./SectionServices").then((mod) => ({
      default: mod.SectionServices,
    })),
  { loading: () => <SectionLoader /> }
);

const SectionProjects = dynamic(
  () =>
    import("./SectionProjects").then((mod) => ({
      default: mod.SectionProjects,
    })),
  { loading: () => <SectionLoader /> }
);

const SectionProjectsMobile = dynamic(
  () =>
    import("./SectionProjectsMobile").then((mod) => ({
      default: mod.SectionProjectsMobile,
    })),
  { loading: () => <SectionLoader /> }
);

const SectionTechstack = dynamic(
  () =>
    import("./SectionTechstack").then((mod) => ({
      default: mod.SectionTechstack,
    })),
  { loading: () => <SectionLoader /> }
);

const SectionTestimonials = dynamic(
  () =>
    import("./SectionTestimonials").then((mod) => ({
      default: mod.SectionTestimonials,
    })),
  { loading: () => <SectionLoader /> }
);

const SectionKPI = dynamic(
  () => import("./SectionKPI").then((mod) => ({ default: mod.SectionKPI })),
  { loading: () => <SectionLoader /> }
);

// Lightweight CSS loader
const SectionLoader = () => (
  <div className="section-loader">
    <div className="section-loader-spinner"></div>
  </div>
);

export default function Main() {
  return (
    <>
      {/* ✅ UPDATED H1: Software Company + Website Development Focus */}
      <h1 className="sr-only">
        Arcenik Technologies - Software Development Company in Vapi, Gujarat |
        Custom Website Development, Web Design, Mobile Apps, CRM & ERP Solutions
      </h1>

      {/* Hero loads immediately with SSR */}
      <SectionHero />

      {/* Everything else loads progressively */}
      <LenisWrapper>
        <div className="normal-padding" />

        {/* ✅ Wrapped in main for semantic HTML */}
        <main id="main-content">
          <SectionServices />
          <div className="normal-padding" />

          <SectionProjects />
          <SectionProjectsMobile />
          <div className="normal-padding" />

          <SectionTechstack />
          <div className="normal-padding" />

          <SectionTestimonials />
          <div className="normal-padding" />

          <SectionKPI />
          <div className="normal-padding" />
        </main>
      </LenisWrapper>
    </>
  );
}
