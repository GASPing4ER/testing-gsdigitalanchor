import logo from "@/public/icons/lotus.svg";
import supple_iphone_mockup_3 from "@/public/images/supple/supple_iphone_mockup_3.png";

import Image from "next/image";
import { Metadata } from "next";
import { aBeeZee, citadel, cormorant } from "@/src/lib/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | G.S. Digital Anchor",
  description:
    "Explore our portfolio of web design, development, and branding case studies. Discover the innovative solutions we’ve crafted for various clients, showcasing our expertise in creating compelling digital experiences.",
  keywords: [
    "portfolio",
    "web design",
    "web development",
    "branding",
    "case studies",
    "UI/UX design",
    "e-commerce",
    "digital experiences",
  ],
  openGraph: {
    title: "Portfolio | G.S. Digital Anchor",
    description:
      "Browse through our portfolio of case studies, highlighting our work in web design, development, and branding. See how we've helped clients build strong digital presences.",
    url: "https://gsdigitalanchor.com/portfolio/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | G.S. Digital Anchor",
    description:
      "Explore our portfolio showcasing case studies in web design, development, and branding, reflecting our commitment to creating exceptional digital experiences.",
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
          <Link href="/portfolio/supple-wear" className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/40 z-[5]" />
            <div className="relative w-full lg:w-[500px] h-[550px] flex flex-col items-center justify-center text-[#91805B] gap-12">
              <div className="absolute w-full top-0 left-0 flex justify-between text-slate-50 p-6 z-10">
                <p>2024</p>
                <p>WEB DESIGN & DEVELOPMENT</p>
              </div>
              <Image
                src={supple_iphone_mockup_3}
                alt="Supple Thumbnail"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
          <Link href="/portfolio/supple-wear">
            <h2 className={`${cormorant.className} text-4xl font-medium`}>
              Supple Wear
            </h2>
          </Link>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/portfolio/lautus" className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/20 z-[5]" />
            <div className="relative bg-[#202B22] w-full lg:w-[500px] h-[550px] py-24 flex flex-col items-center justify-center text-[#91805B] gap-12">
              <div className="absolute w-full top-0 left-0 flex justify-between text-slate-50 p-6 z-10">
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
