import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { cormorant } from "@/src/lib/fonts";

import ultimateGuide from "@/public/images/articles/ultimate-guide/featured-image.png";
import marketingMistakes from "@/public/images/articles/marketing-mistakes/featured-image.png";
import contentMarketing from "@/public/images/articles/content-marketing/featured-image.png";
import seoEcommerce from "@/public/images/articles/seo-ecommerce/featured-image.png";
import luxuryBranding from "@/public/images/articles/luxury-branding/featured-image.png";

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
      className="px-6 py-24 min-h-screen sm:p-24 bg-luxury-light text-luxury-dark flex flex-col justify-center sm:justify-start gap-10"
      id="first-section"
    >
      <h1 className={`${cormorant.className} text-5xl text-center`}>
        INSIGHTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
        <Link
          href="/insights/luxury-branding-strategy-2024"
          className="h-[300px] w-[350px] md:w-full xl:w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={luxuryBranding}
            alt="Luxury Branding"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              The Power of Branding: How to Build a Luxury Brand Online
            </h2>
            <p className="text-[#AB7952]">September 10, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
        <Link
          href="/insights/seo-ecommerce-strategy-2024"
          className="h-[300px] w-[350px] md:w-full xl:w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={seoEcommerce}
            alt="SEO E-Commerce"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              SEO for E-Commerce: How to Drive More Traffic to Your Online Store
            </h2>
            <p className="text-[#AB7952]">September 7, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
        <Link
          href="/insights/content-marketing-strategy-2024"
          className="h-[300px] w-[350px] md:w-full xl:w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={contentMarketing}
            alt="Content Marketing"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              How to Create a Successful Content Marketing Strategy for 2024
            </h2>
            <p className="text-[#AB7952]">September 5, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
        <Link
          href="/insights/marketing-mistakes"
          className="h-[300px] w-[350px] md:w-full xl:w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={marketingMistakes}
            alt="Marketing Mistakes"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              10 Common Digital Marketing Mistakes Small Businesses Make (and
              How to Avoid Them)
            </h2>
            <p className="text-[#AB7952]">September 2, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
        <Link
          href="/insights/the-ultimate-guide-to-digital-marketing-strategies"
          className="h-[300px] w-[350px] md:w-full xl:w-[350px] border flex flex-col gap-2"
          aria-label="Read The Role of Branding & Identity in the Success of Luxury Brands"
        >
          <Image
            src={ultimateGuide}
            alt="Ultimate Guide to Digital Marketing Strategies"
            className="w-full h-1/2 object-cover"
          />
          <div className="pl-2 flex flex-col gap-2">
            <h2 className={`${cormorant.className} font-medium text-lg`}>
              The Ultimate Guide to Digital Marketing Strategies for Luxury
              Brands
            </h2>
            <p className="text-[#AB7952]">August 30, 2024</p>
            <p className="text-xs italic">By Gašper Šimec</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InsightsPage;
