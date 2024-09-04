import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { montserrat } from "@/src/lib/fonts";

import Header from "../components/header";
import Footer from "../components/footer";
import BeforeFooter from "../components/before-footer";

export const metadata: Metadata = {
  title: "G.S. Digital Anchor - Marketing Agency",
  description:
    "G.S. Digital Anchor is a marketing agency that helps businesses grow their online presence.",
  keywords: [
    "marketing, digital marketing, luxury marketing, marketing agency",
  ],
  openGraph: {
    type: "website",
    url: "https://gsdigitalanchor.com/",
    title: "G.S. Digital Anchor - Marketing Agency",
    description:
      "G.S. Digital Anchor is a marketing agency that helps businesses grow their online presence.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/g-s-digital-anchor.appspot.com/o/openGraph.png?alt=media&token=037aa5b0-224b-48c7-82ee-5a4294b6a60e",
        width: 800,
        height: 600,
        alt: "G.S. Digital Anchor - About Us",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/d78cd0495a725399a0eb266e/script.js"
        />
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WP2dUt"
        ></script>
        <link rel="icon" href="/favicon.png" />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <BeforeFooter />
        <Footer />
      </body>
    </html>
  );
}
