import { cormorant, philosopher } from "@/src/lib/fonts";

import logo from "@/public/images/vitus/logo.png";
import vitus_iphone_mockup from "@/public/images/vitus/iphones.jpeg";
import vitus_macbook_mockup from "@/public/images/vitus/macbook.jpeg";
import vitus_macbooks_mockup from "@/public/images/vitus/macbooks.jpeg";
import vitus_screen_mockup from "@/public/images/vitus/screen.jpeg";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vitus Web Design & Development Case Study | Premium Brand",
  description:
    "Explore the web design and development case study for Vitus, a brand specializing in premium products. Discover how we crafted a digital experience that reflects quality and sophistication.",
  keywords: [
    "Vitus",
    "web design",
    "web development",
    "premium brand",
    "luxury website",
    "UI/UX design",
    "e-commerce",
  ],
  openGraph: {
    title: "Vitus Web Design & Development Case Study | Premium Brand",
    description:
      "See how we created a sophisticated and luxurious digital experience for Vitus, a premium brand.",
    images: [
      {
        url: "/images/vitus/vitus_iphone_mockup_3.png",
        width: 1200,
        height: 630,
        alt: "Vitus website mockup",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/vitus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitus Web Design & Development Case Study",
    description:
      "Discover the sophisticated and luxurious web design and development crafted for Vitus, a premium brand.",
    images: ["/images/vitus/vitus_iphone_mockup_3.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/vitus",
  },
};

const VitusPage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">WEB DESIGN & DEVELOPMENT</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Vitus
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              VITUS is a family business, focused on quality, sustainability and
              creativity. They are passionate about hand crafting their wooden
              serving boards.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d2bba2]/10 w-full py-24 flex flex-col gap-2 items-center justify-center text-[#91805B] border">
        <Image src={logo} alt="Vitus logo" className="w-20" />
        <h2
          className={`${cormorant.className} text-black text-2xl font-medium`}
        >
          PREMIUM BRAND
        </h2>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">OVERVIEW</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of our work
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                The brand’s vision is to become synonymous with premium quality
                and sophistication, providing customers with an engaging
                shopping experience.
              </p>
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                Our mission was to design and develop a website that showcases
                their premium offerings while ensuring a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`bg-[#d2bba2]/90 w-full py-12 sm:py-24 sm:px-24 flex flex-col items-center justify-center text-slate-900 gap-12`}
      >
        <p className="text-sm uppercase">WIREFRAMING & PROTOTYPING</p>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-10 text-center">
          <div className="flex-1 flex gap-4">
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${philosopher.className} text-xl`}>MINIMALISM</h3>
              <p>A clean and uncluttered design to reflect elegance.</p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${philosopher.className} text-xl`}>
                VISUAL HIERARCHY
              </h3>
              <p>
                Strategically placed visuals and text to guide the user’s
                attention.
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of wireframing
            </h2>
            <p className="text-sm font-medium max-w-[700px] italic">
              We created wireframes focusing on a clean, minimalist design that
              allows products to take center stage, refining the user journey at
              every step.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={vitus_iphone_mockup}
            alt="Vitus Iphone mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={vitus_macbook_mockup}
            alt="Vitus Macbook mockup"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={vitus_macbooks_mockup}
            alt="Vitus Macbooks mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={vitus_screen_mockup}
            alt="Vitus Screen mockup"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default VitusPage;
