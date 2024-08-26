import type { Metadata } from "next";
import { montserrat } from "@/src/lib/fonts";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import Cookies from "../components/cookies";

export const metadata: Metadata = {
  title: "G.S. Digital Anchor - Marketing Agency",
  description:
    "G.S. Digital Anchor is a marketing agency that helps businesses grow their online presence.",
  keywords: [
    "marketing, digital marketing, luxury marketing, marketing agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Cookies />
      </Head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
