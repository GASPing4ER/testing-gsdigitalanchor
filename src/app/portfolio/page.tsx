import logo from "@/public/icons/lotus.svg";
import thumbnail_supple from "@/public/images/supple/supple.jpg";

import Image from "next/image";
import { Metadata } from "next";
import { aBeeZee, citadel, cormorant } from "@/src/lib/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lautus Branding Identity Case Study | Elegant Gifts & Stationery",
  description:
    "Explore the branding identity case study for Lautus, a company specializing in high-end business gifts and stationery. Discover the design choices that reflect luxury, sophistication, and professionalism.",
  keywords: [
    "Lautus",
    "branding identity",
    "business gifts",
    "luxury stationery",
    "logo design",
    "color palette",
    "typography",
    "corporate branding",
  ],
  openGraph: {
    title: "Lautus Branding Identity Case Study | Elegant Gifts & Stationery",
    description:
      "See how we crafted a luxurious and professional brand identity for Lautus, specializing in high-end business gifts and stationery.",
    images: [
      {
        url: "/images/lautus/lautus-mockup.png",
        width: 1200,
        height: 630,
        alt: "Lautus branding identity overview",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lautus Branding Identity Case Study",
    description:
      "Discover the luxurious and professional brand identity crafted for Lautus, a provider of high-end business gifts and stationery.",
    images: ["/images/lautus/lautus-mockup.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/",
  },
};

const PortfolioPage = () => {
  return (
    <main className="min-h-screen container mx-auto w-full py-32 px-6 lg:px-24 flex flex-col gap-10">
      <h1 className={`text-sm tracking-widest text-[#AB7952] font-medium`}>
        PORTFOLIO
      </h1>
      <h2
        className={`${cormorant.className} font-semibold text-slate-900 text-3xl sm:text-5xl`}
      >
        Our Expertise
      </h2>
      <div className="flex flex-col lg:flex-row w-full gap-10">
        <div className="flex flex-col gap-4">
          <Link href="#" className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[5]" />
            <div className="relative w-full lg:w-[500px] h-[550px] flex flex-col items-center justify-center text-[#91805B] gap-12">
              <div className="absolute w-full top-0 left-0 flex justify-between text-slate-50 p-6 z-10">
                <p>2024</p>
                <p>WEB DESIGN & DEVELOPMENT</p>
              </div>
              <Image
                src={thumbnail_supple}
                alt="Supple Thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
          <Link href="#">
            <h2 className={`${cormorant.className} text-4xl font-medium`}>
              Supple Wear
            </h2>
          </Link>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/portfolio/lautus" className="w-full">
            <div className="relative bg-[#202B22] w-full lg:w-[500px] h-[550px] py-24 flex flex-col items-center justify-center text-[#91805B] gap-12">
              <div className="absolute w-full top-0 left-0 flex justify-between text-slate-50 p-6">
                <p>2023</p>
                <p>BRANDING IDENTITY</p>
              </div>
              <Image src={logo} alt="Lautus logo" />
              <div className="flex flex-col items-center text-center">
                <h2 className={`${citadel.className} text-7xl`}>Lautus</h2>
                <h3 className={`${aBeeZee.className} text-lg sm:text-xl`}>
                  ELEGANT GIFTS & STATIONERY
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/portfolio/lautus">
            <h2 className={`${cormorant.className} text-4xl font-medium`}>
              Lautus
            </h2>
          </Link>
          <hr />
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
