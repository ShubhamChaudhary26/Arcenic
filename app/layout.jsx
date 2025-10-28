import "./globals.css";
import { Navigation } from "./Navigation";
import Script from "next/script";

export const metadata = {
  title: "Arcenik | Cutting-Edge Website Design & Custom Digital Solutions",
  description:
    "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  keywords: [
    "website design",
    "UX/UI design",
    "web development",
    "full-stack development",
    "custom websites",
    "digital solutions",
    "social media management",
    "motion graphics",
    "3D motion graphics",
    "3D video production",
    "3D modeling",
    "interactive design",
    "creative digital agency",
    "multimedia design",
    "3D rendering services",
    "website redesign",
    "branding and design",
    "responsive web design",
    "animation services",
    "digital marketing solutions",
    "advanced video production",
    "digital media strategy",
  ],
  openGraph: {
    title: "Arcenik | Cutting-Edge Website Design & Custom Digital Solutions",
    description:
      "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}

        {/* 🤖 Botpress Chatbot Integration */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v1/inject.js"
          strategy="afterInteractive"
        />
        <Script id="botpress-webchat" strategy="afterInteractive">
          {`
            window.botpressWebChat.init({
              hostUrl: "https://cdn.botpress.cloud/webchat/v1",
              messagingUrl: "https://messaging.botpress.cloud",
              clientId: "e1c774e4-b3b2-49d5-8575-1bec2f1081b8",
              botName: "Arcenik Assistant",
              themeColor: "#facc15",
              showPoweredBy: false,
              hideWidget: false,
              useSessionStorage: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
