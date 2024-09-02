import { cormorant } from "@/src/lib/fonts";

import logo from "@/public/images/lamaisondigitale/logo.png";
import lamaisondigitale_imac from "@/public/images/lamaisondigitale/imac_LMD.png";
import lamaisondigitale_mac from "@/public/images/lamaisondigitale/mac14-2_LMD.png";
import lamaisondigitale_iphone_tablet from "@/public/images/lamaisondigitale/iphone_tablet_LMD.png";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "La Maison Digitale Web Design & Development Case Study | Boutique Marketing Agency",
  description:
    "Explore the web design and development case study for La Maison Digitale, a boutique marketing agency. Discover how we crafted a digital experience that embodies creativity and strategic thinking.",
  keywords: [
    "La Maison Digitale",
    "web design",
    "web development",
    "boutique marketing agency",
    "digital marketing",
    "UI/UX design",
    "creative agency",
    "strategic marketing",
  ],
  openGraph: {
    title:
      "La Maison Digitale Web Design & Development Case Study | Boutique Marketing Agency",
    description:
      "See how we created an innovative and strategically focused digital experience for La Maison Digitale, a boutique marketing agency.",
    images: [
      {
        url: "/images/lamaisondigitale/imac_LMD.png",
        width: 1200,
        height: 630,
        alt: "La Maison Digitale website mockup",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/lamaisondigitale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Maison Digitale Web Design & Development Case Study",
    description:
      "Discover the innovative and strategically focused web design and development crafted for La Maison Digitale, a boutique marketing agency.",
    images: ["/images/lamaisondigitale/imac_LMD.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/lamaisondigitale",
  },
};

const LaMaisonDigitalePage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">WEB DESIGN & DEVELOPMENT</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              La Maison Digitale
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              La Maison Digitale is a boutique marketing agency focused on
              delivering tailored digital marketing strategies to elevate brands
              through creativity and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#292726] w-full py-24 flex flex-col items-center justify-center text-white border gap-12">
        <Image src={logo} alt="La Maison Digitale logo" className="w-32" />
        <div className="flex flex-col gap-2 items-center">
          <h2
            className={`${cormorant.className} uppercase text-5xl text-center`}
          >
            La Maison Digitale
          </h2>
          <h3 className={`${cormorant.className} text-xl`}>
            BOUTIQUE MARKETING AGENCY
          </h3>
        </div>
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
                La Maison Digitale is a boutique social media & digital
                marketing agency for meaningful brands with purpose that are
                infused with elegance and luxury. Our mission was to design and
                develop a website that not only showcased their luxury services
                but also embodied the agency’s commitment
              </p>
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                to excellence and client success. We focused on creating a
                website that enhances user experience, showcases their
                portfolio, and drives engagement through intuitive navigation
                and compelling visuals.
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
              <h3 className={`${cormorant.className} text-xl`}>CREATIVITY</h3>
              <p>A visually striking design to reflect innovation.</p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} text-xl`}>USER-CENTRIC</h3>
              <p>Focused on intuitive navigation and user engagement.</p>
            </span>
          </div>
          <div className="flex-1 flex gap-4">
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} text-xl`}>TYPOGRAPHY</h3>
              <p>Modern, clean fonts paired with a creative flair.</p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} text-xl`}>
                COLOR PALETTE
              </h3>
              <p>
                A vibrant color scheme that reflects the agency’s dynamic
                energy.
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
              Our wireframing process focused on creating a structure that
              prioritizes user experience and showcases La Maison Digitale’s
              expertise. We employed a creative approach, ensuring that each
              section of the site leads the user through a compelling and
              engaging journey, ultimately driving conversions.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`bg-slate-50 w-full flex flex-col lg:flex-row items-center justify-center text-[#202b22] gap-2`}
      >
        <div className="w-full h-[250px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#d2bba2]/30">
          <h2 className={`${cormorant.className} text-5xl`}>FRONTEND</h2>
          <div>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              Showit
            </p>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              WordPress
            </p>
          </div>
        </div>
        <div className="w-full h-[250px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#d2bba2]/30">
          <h2 className={`${cormorant.className} text-5xl`}>BACKEND</h2>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-[#d2bba2]/10 text-[#202b22]">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>

          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of finished product
            </h2>
            <p className="text-sm sm:text-base font-medium max-w-[650px]">
              The final website design for La Maison Digitale is a seamless
              blend of aesthetics and functionality. It effectively communicates
              the brand’s values, showcases their portfolio, and provides a
              smooth, engaging user experience. The responsive design ensures
              optimal performance across devices, making it a powerful tool for
              client acquisition and retention.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={lamaisondigitale_imac}
            alt="La Maison Digitale Imac mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={lamaisondigitale_iphone_tablet}
            alt="La Maison Digitale iPhone and Tablet mockup"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={lamaisondigitale_mac}
            alt="La Maison Digitale Macbook mockup"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default LaMaisonDigitalePage;
