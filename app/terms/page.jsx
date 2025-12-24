import React from "react";
import "./legal-pages.css";

export const metadata = {
  title: "Terms & Conditions | Arcenik Technologies",
  description:
    "Terms & Conditions for Arcenik Technologies - Web Development Agency in India",
  keywords: "terms and conditions, service agreement, arcenik technologies terms",

  openGraph: {
    title: "Terms & Conditions | Arcenik Technologies",
    description:
      "Read the Terms & Conditions of Arcenik Technologies, outlining the professional relationship between us and our clients.",
    url: "https://arceniktechnologies.com/terms-and-conditions",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "Arcenik Technologies Terms & Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="legal-wrapper">
      <div className="legal-inner">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="last-updated">Last Updated: January 2024</p>
        </header>

        {/* Content */}
        <article className="page-content">
          {/* Section 1 */}
          <div className="content-block">
            <h2 className="section-heading">1. Introduction</h2>
            <p className="section-text">
              Welcome to Arcenik Technologies. These terms and conditions
              ("Terms") govern the professional relationship between Arcenik
              Technologies ("Company", "we", "us") and our clients ("Client",
              "you"). By engaging our services, you agree to be bound by these
              Terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="content-block">
            <h2 className="section-heading">2. Scope of Services</h2>
            <p className="section-text">
              We provide specialized digital services including, but not limited
              to:
            </p>
            <ul className="bullet-list">
              <li className="list-item">Custom Software & Web Development</li>
              <li className="list-item">UI/UX Design & Prototyping</li>
              <li className="list-item">E-Commerce Solutions</li>
              <li className="list-item">Brand Strategy & Identity Design</li>
            </ul>
            <p className="section-text">
              The specific scope, deliverables, timeline, and fees for your
              project will be detailed in a separate Statement of Work (SOW) or
              Project Proposal.
            </p>
          </div>

          {/* Section 3 */}
          <div className="content-block">
            <h2 className="section-heading">3. Client Obligations</h2>
            <p className="section-text">
              To ensure the success of the project, you agree to:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                Provide all necessary assets (logos, text, images) in a timely
                manner.
              </li>
              <li className="list-item">
                Provide clear, consolidated feedback within the agreed review
                periods.
              </li>
              <li className="list-item">
                Grant access to necessary accounts (hosting, domain, analytics)
                required for development.
              </li>
              <li className="list-item">
                Adhere to the payment schedule outlined in the proposal.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="content-block">
            <h2 className="section-heading">4. Payment Terms</h2>
            <h3 className="subsection-heading">4.1 Payment Schedule</h3>
            <p className="section-text">
              Unless otherwise agreed in writing, our standard payment structure
              is:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                <strong>50% Deposit:</strong> Required to secure your spot in
                our schedule and commence work. This is non-refundable.
              </li>
              <li className="list-item">
                <strong>50% Final Balance:</strong> Due upon project completion,
                prior to the final deployment or file transfer.
              </li>
            </ul>

            <h3 className="subsection-heading">4.2 Late Payments</h3>
            <p className="section-text">
              Invoices are due upon receipt. Failure to pay within 7 days may
              result in a pause of services. We reserve the right to withhold
              final deliverables until all outstanding balances are cleared.
            </p>
          </div>

          {/* Section 5 */}
          <div className="content-block">
            <h2 className="section-heading">5. Revisions & Approvals</h2>
            <p className="section-text">
              We include a specific number of revision rounds (typically two) at
              each stage of the project (Design, Development).
            </p>
            <p className="section-text">
              Revisions are intended for refinements, not total redesigns.
              Requests outside the original scope or beyond the included
              revision rounds will be billed at our standard hourly rate.
            </p>
          </div>

          {/* Section 6 */}
          <div className="content-block">
            <h2 className="section-heading">6. Intellectual Property</h2>
            <h3 className="subsection-heading">6.1 Ownership</h3>
            <p className="section-text">
              Upon full payment of all fees, you are granted exclusive ownership
              of the final deliverables (designs, code, strategies) created
              specifically for your project.
            </p>

            <h3 className="subsection-heading">6.2 Portfolio Rights</h3>
            <p className="section-text">
              We retain the right to showcase the completed project in our
              portfolio, website, and social media for promotional purposes,
              unless a Non-Disclosure Agreement (NDA) is signed beforehand.
            </p>
          </div>

          {/* Section 7 */}
          <div className="content-block">
            <h2 className="section-heading">7. Confidentiality</h2>
            <p className="section-text">
              We respect your proprietary information. Any business insights,
              data, or trade secrets shared with us during the project will be
              kept strictly confidential and used solely for the purpose of
              completing the work.
            </p>
          </div>

          {/* Section 8 */}
          <div className="content-block">
            <h2 className="section-heading">8. Warranties & Liability</h2>
            <p className="section-text">
              We build our solutions using industry best practices. However, we
              cannot guarantee that our work will be error-free or uninterrupted
              forever (e.g., due to third-party updates or browser changes).
            </p>
            <p className="section-text">
              To the maximum extent permitted by law, Arcenik Technologies shall
              not be liable for any indirect, incidental, or consequential
              damages (including loss of data or profit) arising from the use of
              our services.
            </p>
          </div>

          {/* Section 9 */}
          <div className="content-block">
            <h2 className="section-heading">9. Termination</h2>
            <p className="section-text">
              Either party may terminate the project with written notice if the
              other party breaches these Terms.
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                If you terminate without cause, you are responsible for payment
                of all work completed up to that date.
              </li>
              <li className="list-item">
                Initial deposits are non-refundable as they cover resource
                allocation and setup.
              </li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="content-block">
            <h2 className="section-heading">10. Governing Law</h2>
            <p className="section-text">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts in Vapi,
              Gujarat.
            </p>
          </div>

          {/* Section 11 */}
          <div className="content-block">
            <h2 className="section-heading">11. Changes to Terms</h2>
            <p className="section-text">
              We reserve the right to update these Terms at any time. The latest
              version will always be available on our website. Continued use of
              our services constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* Section 12 */}
          <div className="content-block">
            <h2 className="section-heading">12. Contact Us</h2>
            <p className="section-text">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="info-box">
              <p className="info-line">
                <strong>Arcenik Technologies</strong>
              </p>
              <p className="info-line">Email: legal@arceniktechnologies.com</p>
              <p className="info-line">Website: arceniktechnologies.com</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
