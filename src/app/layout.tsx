import type { Metadata } from "next";
import { montserrat } from "@/src/lib/fonts";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export const metadata: Metadata = {
  title: "G.S. Digital Anchor - Marketing Agency",
  description:
    "G.S. Digital Anchor is a marketing agency that helps businesses grow their online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
