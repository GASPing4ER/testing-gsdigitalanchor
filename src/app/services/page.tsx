import { Metadata } from "next";

import ServicesContainer from "@/src/components/services-container";
import PricingPackage from "@/src/components/pricing-package";

export const metadata: Metadata = {
  title:
    "Our Services | G.S. Digital Anchor - Comprehensive Marketing Solutions",
  description:
    "Explore the wide range of marketing services offered by G.S. Digital Anchor, from SEO and content creation to social media management. Tailored solutions for your business growth.",
  keywords: [
    "Luxury brand marketing services",
    "SEO and content marketing for high-end brands",
    "Social media management for luxury clientele",
    "PPC advertising for luxury markets",
    "Luxury website design and development",
    "Email marketing for exclusive brands",
    "Digital marketing strategy for high-net-worth clients",
    "Custom marketing solutions for luxury brands",
  ],
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen w-full">
      <ServicesContainer />
      <PricingPackage />
    </main>
  );
};

export default ServicesPage;
