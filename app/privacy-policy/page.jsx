import React from "react";
import "../terms/legal-pages.css";

export const metadata = {
  title: "Privacy Policy | Arcenik Technologies",
  description:
    "Privacy Policy for Arcenik Technologies - Web Development Agency in India",
  keywords: "privacy policy, data protection, arcenik technologies privacy",

  openGraph: {
    title: "Privacy Policy | Arcenik Technologies",
    description:
      "Read the Privacy Policy of Arcenik Technologies, outlining how we collect, use, and protect your personal data.",
    url: "https://arceniktechnologies.com/privacy-policy",
    siteName: "Arcenik Technologies",
    images: [
      {
        url: "/logo1.webp",
        width: 1200,  
        height: 630,
        alt: "Arcenik Technologies Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-wrapper">
      <div className="legal-inner">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 2024</p>
        </header>

        {/* Content */}
        <article className="page-content">
          {/* Section 1 */}
          <div className="content-block">
            <h2 className="section-heading">1. Introduction</h2>
            <p className="section-text">
              At Arcenik Technologies ("Company", "we", "us"), we value your
              trust and are committed to protecting your privacy. This policy
              explains clearly how we collect, use, and safeguard your personal
              information when you visit our website or engage our services.
            </p>
            <p className="section-text">
              We believe in transparency. We do not sell your personal data to
              third parties.
            </p>
          </div>

          {/* Section 2 */}
          <div className="content-block">
            <h2 className="section-heading">2. Information We Collect</h2>
            <h3 className="subsection-heading">2.1 Information You Provide</h3>
            <p className="section-text">
              We collect information that you voluntarily provide to us when
              expressing interest in our services:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                Personal details (Name, Email, Phone Number)
              </li>
              <li className="list-item">
                Business information (Company Name, Project Details)
              </li>
              <li className="list-item">
                Billing and payment information (for active clients)
              </li>
            </ul>

            <h3 className="subsection-heading">2.2 Automated Information</h3>
            <p className="section-text">
              When you browse our site, we automatically collect certain
              technical data to improve your experience:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                Device information (Browser type, OS)
              </li>
              <li className="list-item">
                Usage data (Pages visited, Time spent)
              </li>
              <li className="list-item">
                IP address and general location data
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="content-block">
            <h2 className="section-heading">3. How We Use Your Data</h2>
            <p className="section-text">
              We use the collected information solely for legitimate business
              purposes:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                To deliver and maintain our services effectively.
              </li>
              <li className="list-item">
                To communicate with you regarding your project or inquiries.
              </li>
              <li className="list-item">
                To process payments and manage billing.
              </li>
              <li className="list-item">
                To improve our website performance and user experience.
              </li>
              <li className="list-item">
                To comply with legal obligations and prevent fraud.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="content-block">
            <h2 className="section-heading">4. Data Sharing & Disclosure</h2>
            <p className="section-text">
              We respect your privacy. We do not trade or rent your data. We may
              share information only in the following limited circumstances:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                <strong>Service Providers:</strong> With trusted vendors who
                help us operate (e.g., hosting, payment processors), under
                strict confidentiality agreements.
              </li>
              <li className="list-item">
                <strong>Legal Requirements:</strong> If required by law or to
                protect our rights and safety.
              </li>
              <li className="list-item">
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="content-block">
            <h2 className="section-heading">5. Data Security</h2>
            <p className="section-text">
              We treat your data with the same level of security as our own
              code. We implement industry-standard encryption (SSL) and security
              protocols to protect your personal information from unauthorized
              access, alteration, or destruction.
            </p>
          </div>

          {/* Section 6 */}
          <div className="content-block">
            <h2 className="section-heading">6. Cookies Policy</h2>
            <p className="section-text">
              We use cookies to enhance your browsing experience and analyze
              site traffic. These small text files help us understand how you
              use our site. You can control or disable cookies through your
              browser settings at any time.
            </p>
          </div>

          {/* Section 7 */}
          <div className="content-block">
            <h2 className="section-heading">7. Your Rights</h2>
            <p className="section-text">
              You have full control over your personal data. You have the right
              to:
            </p>
            <ul className="bullet-list">
              <li className="list-item">
                Access the personal data we hold about you.
              </li>
              <li className="list-item">
                Request correction of any inaccurate information.
              </li>
              <li className="list-item">
                Request deletion of your personal data ("Right to be
                Forgotten").
              </li>
              <li className="list-item">
                Opt-out of marketing communications.
              </li>
            </ul>
            <p className="section-text">
              To exercise any of these rights, simply contact us at{" "}
              <a
                href="mailto:privacy@arceniktechnologies.com"
                className="text-link"
              >
                privacy@arceniktechnologies.com
              </a>
              .
            </p>
          </div>

          {/* Section 8 */}
          <div className="content-block">
            <h2 className="section-heading">8. Third-Party Links</h2>
            <p className="section-text">
              Our website may contain links to external sites. We are not
              responsible for the content or privacy practices of these
              third-party websites. We encourage you to review their privacy
              policies separately.
            </p>
          </div>

          {/* Section 9 */}
          <div className="content-block">
            <h2 className="section-heading">9. Updates to This Policy</h2>
            <p className="section-text">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. The "Last Updated" date at
              the top will indicate the latest revision. Continued use of our
              services implies acceptance of the updated policy.
            </p>
          </div>

          {/* Section 10 */}
          <div className="content-block">
            <h2 className="section-heading">10. Contact Us</h2>
            <p className="section-text">
              If you have any questions or concerns regarding your privacy,
              please don't hesitate to reach out:
            </p>
            <div className="info-box">
              <p className="info-line">
                <strong>Arcenik Technologies</strong>
              </p>
              <p className="info-line">
                Email: privacy@arceniktechnologies.com
              </p>
              <p className="info-line">Website: arceniktechnologies.com</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
