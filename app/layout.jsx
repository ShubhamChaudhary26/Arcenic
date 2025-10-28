import "./globals.css";
import { Navigation } from "./Navigation";
import Script from "next/script";

export const metadata = {
  title: "Arcenik | Cutting-Edge Website Design & Custom Digital Solutions",
  description:
    "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}

        {/* 🤖 Botpress Webchat Scripts */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/10/28/11/20251028111924-HS3WGHPB.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
