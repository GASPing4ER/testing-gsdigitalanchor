import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { cormorant } from "../lib/fonts";

import supple from "@/public/images/grid/supple.jpg";
import supple_2 from "@/public/images/grid/supple-2.jpeg";
import vitus from "@/public/images/grid/vitus.jpg";
import vitus_2 from "@/public/images/grid/vitus-2.jpg";
import glowinstudio from "@/public/images/grid/glowinstudio.jpg";
import glowinstudio_2 from "@/public/images/grid/glowinstudio-2.jpg";

import Testimonials from "../components/testimonials";
import PricingPackage from "../components/pricing-package";

export const metadata: Metadata = {
  title: "G.S. Digital Anchor | Leading Marketing Agency for Online Growth",
  description:
    "Welcome to G.S. Digital Anchor, the premier marketing agency dedicated to helping businesses elevate their online presence. Explore our services to see how we can drive your growth.",
  keywords: [
    "Luxury digital marketing agency",
    "Exclusive online growth strategies",
    "High-end marketing services",
    "Luxury brand digital marketing",
    "Website development for luxury brands",
    "Prestigious marketing agency",
    "Digital marketing for affluent clients",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="relative w-full h-screen flex items-center p-6 sm:p-24 bg-hero-pattern-mobile md:bg-hero-pattern-desktop bg-cover bg-center sm:bg-fixed">
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50" />
        <div className="z-10 flex flex-col gap-6">
          <h1
            className={`${cormorant.className} font-semibold text-slate-50 text-4xl sm:text-5xl md:text-6xl max-w-[400px] sm:max-w-[600px]`}
          >
            Where Tradition Meets Digital Innovation
          </h1>
          <p className="text-slate-50 text-lg max-w-[600px]">
            We craft bespoke digital strategies, branding, and marketing to
            enhance your brand’s legacy and prestige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="text-xs text-slate-50 py-3 border bg-[#AB7952] border-[#AB7952] rounded-2xl w-[225px] text-center"
              aria-label="Explore Our Services"
            >
              EXPLORE OUR SERVICES
            </Link>
            <Link
              href="/contact"
              className="text-xs text-slate-50 py-3 border bg-transparent border-slate-50 rounded-2xl w-[225px] text-center"
              aria-label="Book a Meeting"
            >
              JOIN OUR CLIENTELE
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-screen bg-slate-900 p-6 sm:p-24 flex flex-col gap-8 justify-center anchor-cursor"
        id="first-section"
      >
        <h2 className="text-xs tracking-widest text-[#AB7952]">SERVICES</h2>
        <h3
          className={`${cormorant.className} font-semibold text-slate-50 text-3xl sm:text-5xl`}
        >
          Our Expertise
        </h3>
        <p className="text-slate-50 max-w-[600px] text-sm sm:text-base">
          Our full-service expertise spans digital strategy, content creation,
          web development, and more—designed exclusively for luxury.
        </p>
        <div className="flex flex-col lg:flex-row w-full text-slate-50">
          <div className="flex flex-col sm:flex-row">
            <Link
              href="/services"
              className="flex-1 anchor-cursor"
              aria-label="Strategy"
            >
              <div className="w-full h-[300px] lg:h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between hover:scale-95 transition-transform">
                <span className="text-[#AB7952]">01</span>
                <div className="flex flex-col gap-4">
                  <h2
                    className={`${cormorant.className} font-semibold text-4xl`}
                  >
                    Strategy
                  </h2>
                  <p className="text-xs md:text-sm">
                    We craft tailored digital strategies that align with your
                    brand’s heritage and goals, ensuring every move enhances
                    your legacy.
                  </p>
                  <p
                    className="text-xs hover:text-[#AB7952]"
                    aria-label="LEARN MORE"
                  >
                    LEARN MORE
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/services"
              className="flex-1 anchor-cursor"
              aria-label="Branding"
            >
              <div className="w-full h-[300px] lg:h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between hover:scale-95 transition-transform">
                <span className="text-[#AB7952]">02</span>
                <div className="flex flex-col gap-4">
                  <h2
                    className={`${cormorant.className} font-semibold text-4xl`}
                  >
                    Branding
                  </h2>
                  <p className="text-xs md:text-sm">
                    We create visual identities and messaging that capture the
                    essence of your brand, making a lasting impression across
                    all platforms.
                  </p>
                  <p className="text-xs" aria-label="LEARN MORE">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row">
            <Link
              href="/services"
              className="flex-1 anchor-cursor"
              aria-label="Website"
            >
              <div className="w-full h-[300px] lg:h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between hover:scale-95 transition-transform">
                <span className="text-[#AB7952]">03</span>
                <div className="flex flex-col gap-4">
                  <h2
                    className={`${cormorant.className} font-semibold text-4xl`}
                  >
                    Website
                  </h2>
                  <p className="text-xs md:text-sm">
                    We design and develop websites that embody your brand’s
                    elegance, offering seamless user experiences that turn
                    visitors into loyal customers.
                  </p>
                  <p className="text-xs" aria-label="LEARN MORE">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/services"
              className="flex-1 anchor-cursor"
              aria-label="Marketing"
            >
              <div className="w-full h-[300px] lg:h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between hover:scale-95 transition-transform">
                <span className="text-[#AB7952]">04</span>
                <div className="flex flex-col gap-4">
                  <h2
                    className={`${cormorant.className} font-semibold text-4xl`}
                  >
                    Marketing
                  </h2>
                  <p className="text-xs md:text-sm">
                    Our targeted marketing strategies amplify your brand’s
                    voice, reaching the right audience with the right message,
                    and driving measurable results.
                  </p>
                  <p className="text-xs" aria-label="LEARN MORE">
                    LEARN MORE
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* PORTFOLIO SECTION FOR MOBILE */}
        <div className="w-full px-6 py-12 sm:hidden flex flex-col gap-4">
          <h3 className="text-xs tracking-widest text-slate-900">PORTFOLIO</h3>
          <h2
            className={`${cormorant.className} font-semibold text-slate-900 text-3xl`}
          >
            Our Work
          </h2>
          <p className="text-slate-800 max-w-[600px] text-sm">
            We’ve had the privilege of working with some of the most prestigious
            luxury brands in the world. Here are a few of our favorites.
          </p>
          <div className="w-full h-[300px] border border-slate-900/10">
            <Image
              src={supple}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            href="/portfolio"
            className="text-xs border-b border-slate-900 w-fit"
            aria-label="View More"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
      <div
        className="w-full h-screen p-24 hidden sm:grid grid-cols-6 grid-rows-5 gap-4"
        id="white-section"
      >
        {/* TODO: OPTIMIZE IMAGES -> SMALLER SIZES, MINIFYING TO KB FROM MB */}
        <div className="col-span-1 row-span-3">
          <Image
            src={supple_2}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <Image
            src={vitus}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <Image
            src={glowinstudio_2}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <Image
            src={supple}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-3">
          <Image
            src={glowinstudio}
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <Image
            src={vitus_2}
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Testimonials />
      <PricingPackage />
    </main>
  );
}
