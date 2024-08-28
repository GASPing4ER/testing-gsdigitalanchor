import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { cormorant } from "@/src/lib/fonts";

import luxuryLiving from "@/public/luxury-living.jpg";

export const metadata: Metadata = {
  title: "Insights & Blog | G.S. Digital Anchor - Latest in Digital Marketing",
  description:
    "Stay updated with the latest trends and tips in digital marketing. Read expert insights, case studies, and success stories from G.S. Digital Anchor.",
  keywords: [
    "Luxury digital marketing insights",
    "Latest luxury marketing trends",
    "SEO tips for luxury brands",
    "Social media strategies for affluent clients",
    "Case studies in high-end digital marketing",
    "Content marketing for exclusive brands",
    "Expert luxury marketing blog",
    "Success stories in luxury brand marketing",
  ],
};

const InsightsPage = () => {
  return (
    <div
      className="px-6 py-24 h-screen sm:p-24 bg-luxury-light text-luxury-dark flex flex-col justify-center sm:justify-start flex-wrap gap-10"
      id="first-section"
    >
      <h1 className={`${cormorant.className} text-5xl text-center`}>
        INSIGHTS
      </h1>
      <div className="flex gap-10">
        <Link
          href="/insights/role-of-branding-and-identity"
          className="h-[300px] w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={luxuryLiving}
            alt="Luxury Living"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              The Role of Branding & Identity in the Success of Luxury Brands
            </h2>
            <p className="text-[#AB7952]">August 18, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InsightsPage;
