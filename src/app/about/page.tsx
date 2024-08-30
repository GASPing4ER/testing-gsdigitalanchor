import { Metadata } from "next";
import Link from "next/link";

import { cormorant } from "@/src/lib/fonts";

import OurValues from "@/src/components/our-values";

export const metadata: Metadata = {
  title: "About Us | G.S. Digital Anchor - Your Partner in Digital Marketing",
  description:
    "Learn more about G.S. Digital Anchor, our mission, values, and the values behind our success. Discover why we're the trusted choice for businesses seeking online growth.",
  keywords: [
    "About our luxury marketing agency",
    "Exclusive digital marketing experts",
    "High-end marketing agency mission",
    "Meet our elite marketing team",
    "Why choose G.S. Digital Anchor for luxury brands",
    "Prestigious digital marketing agency story",
    "Trusted marketing agency for affluent clients",
  ],
};

const AboutPage = () => {
  return (
    <main>
      <div className="relative w-full h-screen flex items-center p-6 sm:p-24 bg-about-pattern bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-screen bg-black/60" />
        <div className="z-10 flex flex-col gap-6">
          <h1
            className={`${cormorant.className} font-semibold text-slate-50 text-4xl sm:text-5xl md:text-6xl max-w-[400px] sm:max-w-[600px]`}
          >
            Heritage in Digital Excellence
          </h1>
          <p className="text-slate-50 text-lg max-w-[600px]">
            An authentic website oriented agency for vibrant brands with a
            unique vision.
          </p>
          <Link
            href="/contact"
            className="text-xs text-slate-50 px-6 py-3 border border-slate-50 rounded-2xl w-fit"
            aria-label="Get in touch with G.S. Digital Anchor"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
      <div
        className="w-full flex flex-col gap-8 p-6 sm:p-24 bg-slate-900 text-center"
        role="region"
        aria-labelledby="our-values-section"
      >
        <h2 className="text-[#AB7952] text-xs tracking-widest">OUR VALUES</h2>
        <p className="text-slate-50 text-sm sm:text-base max-w-[700px] mx-auto">
          This is the <span className="italic">fabric of our culture</span> and
          the framework for all decisions made within these walls. Heads up,
          they tend to be contagious.
        </p>
        <OurValues />
      </div>
      <div
        className="w-full flex flex-col gap-6 p-6 sm:p-24 sm:pb-0 bg-slate-50"
        role="region"
        aria-labelledby="our-mission-section"
      >
        <h2 className="text-[#AB7952] text-xs tracking-widest">OUR MISSION</h2>
        <h2
          className={`${cormorant.className} text-4xl sm:text-5xl font-semibold text-slate-900`}
        >
          To Elevate Your Brand
        </h2>
        <p className="text-slate-900 text-sm sm:text-base max-w-[700px]">
          We are committed to crafting bespoke digital strategies, branding, and
          marketing to enhance your brand’s legacy and prestige.
        </p>
        <Link
          href="/services"
          className="text-xs text-slate-900 px-6 py-3 border border-slate-900 rounded-2xl w-fit"
          aria-label="Learn more about our luxury marketing services"
        >
          LEARN MORE
        </Link>
      </div>
      <div
        className="w-full flex flex-col gap-6 p-6 sm:p-24 sm:pt-10 bg-slate-50"
        role="region"
        aria-labelledby="our-vision-section"
      >
        <h2 className="text-[#AB7952] text-xs tracking-widest">OUR VISION</h2>
        <h2
          className={`${cormorant.className} text-4xl sm:text-5xl font-semibold text-slate-900`}
        >
          To Be Your Trusted Partner
        </h2>
        <p className="text-sm sm:text-base text-slate-900 max-w-[700px]">
          We aspire to be the digital agency of choice for luxury brands seeking
          a partner that understands their unique vision and values.
        </p>
        <Link
          href="/contact"
          className="text-xs text-slate-900 px-6 py-3 border border-slate-900 rounded-2xl w-fit"
          aria-label="Contact G.S. Digital Anchor for luxury marketing services"
        >
          CONTACT US
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
