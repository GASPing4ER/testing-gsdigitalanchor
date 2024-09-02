import { cinzel, cormorant, garamond } from "@/src/lib/fonts";

import logo from "@/public/images/400gradi/logo-black.svg";
import gradi_iphone_mockup from "@/public/images/400gradi/gradi_iphone_mockup.png";
import gradi_iphone_mockup_2 from "@/public/images/400gradi/gradi_iphone_mockup_2.png";
import gradi_iphone_mockup_3 from "@/public/images/400gradi/gradi_iphone_mockup_3.png";
import gradi_macbook_mockup from "@/public/images/400gradi/gradi_macbook_mockup.png";
import gradi_macbook_mockup_2 from "@/public/images/400gradi/gradi_macbook_mockup_2.png";
import gradi_macbook_mockup_3 from "@/public/images/400gradi/gradi_macbook_mockup_3.png";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "400 Gradi Kranj Web Design Case Study | Elegant Restaurant",
  description:
    "Explore the web design case study for 400 Gradi Kranj, a restaurant specializing in authentic Italian cuisine. Discover how we crafted a digital experience that reflects luxury and sophistication.",
  keywords: [
    "400 Gradi Kranj",
    "web design",
    "restaurant website",
    "Italian cuisine",
    "luxury dining",
    "UI/UX design",
  ],
  openGraph: {
    title: "400 Gradi Kranj Web Design Case Study | Elegant Restaurant",
    description:
      "See how we created a sophisticated and luxurious digital experience for 400 Gradi Kranj, an authentic Italian restaurant.",
    images: [
      {
        url: "/images/400gradi/gradi_iphone_mockup_3.png",
        width: 1200,
        height: 630,
        alt: "400 Gradi Kranj website mockup",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/400gradi-kranj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "400 Gradi Kranj Web Design Case Study",
    description:
      "Discover the sophisticated and luxurious web design crafted for 400 Gradi Kranj, a restaurant known for its authentic Italian cuisine.",
    images: ["/images/400gradi/gradi_iphone_mockup_3.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/400gradi-kranj",
  },
};

const GradiKranjPage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">WEB DESIGN & DEVELOPMENT</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              400 Gradi Kranj
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              400 Gradi Kranj is a restaurant dedicated to offering an authentic
              Italian dining experience, with a focus on high-quality
              ingredients and traditional recipes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d2bba2]/10 w-full py-24 flex flex-col gap-12 items-center justify-center text-black border">
        <Image src={logo} alt="400 Gradi Kranj logo" className="w-20" />
        <div className="flex flex-col items-center">
          <h2 className={`${cinzel.className} text-3xl`}>400 GRADI KRANJ</h2>
          <h3 className={`${garamond.className} text-xl`}>
            AUTHENTIC ITALIAN CUISINE
          </h3>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">OVERVIEW</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Our Approach
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                The restaurant’s vision is to be the go-to destination for
                authentic Italian dining in Kranj, providing guests with a
                memorable culinary experience. Our mission was to design a
              </p>
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                website that not only highlighted their exquisite menu but also
                created an inviting digital space that captures the essence of
                Italian hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`bg-[#EAE3D7] w-full py-12 sm:py-24 sm:px-24 flex flex-col items-center justify-center text-slate-900 gap-12`}
      >
        <p className="text-sm uppercase">WIREFRAMING & PROTOTYPING</p>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-10 text-center">
          <div className="flex-1 flex gap-4">
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} font-medium text-xl`}>
                ELEGANCE
              </h3>
              <p>
                A design that reflects the refined atmosphere of the restaurant.
              </p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} font-medium text-xl`}>
                USER EXPERIENCE
              </h3>
              <p>
                A focus on intuitive navigation to enhance the dining
                reservation process.
              </p>
            </span>
          </div>
          <div className="flex-1 flex gap-4">
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} font-medium text-xl`}>
                MULTI LANGUAGE
              </h3>
              <p>
                Seamless integration of multiple languages to cater to a diverse
                clientele.
              </p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${cormorant.className} font-medium text-xl`}>
                CUSTOM ICONS
              </h3>
              <p>
                Hand-crafted icons designed to complement the restaurant’s brand
                identity.
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
              The wireframes focused on creating a visually appealing layout
              that highlights the restaurant’s unique offerings. The prototypes
              helped us fine-tune the user journey, ensuring a seamless
              experience from browsing the menu to making a reservation.
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
              Next.js
            </p>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              Tailwind CSS
            </p>
          </div>
        </div>
        <div className="w-full h-[250px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#d2bba2]/30">
          <h2 className={`${cormorant.className} text-5xl`}>NO BACKEND</h2>
          <div>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              Static site generation with modern frontend frameworks.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of development
            </h2>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col gap-2">
                <h3 className={`${cormorant.className} text-3xl`}>Next.js</h3>
                <p className="text-sm font-medium max-w-[700px] italic">
                  We chose Next.js for its powerful features like server-side
                  rendering and static site generation, which significantly
                  improve the website’s performance and SEO capabilities. This
                  ensured that the site was fast, efficient, and optimized for
                  both users and search engines.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`${cormorant.className} text-3xl`}>
                  Tailwind CSS
                </h3>
                <p className="text-sm font-medium max-w-[700px] italic">
                  Tailwind CSS was used for styling, providing a utility-first
                  approach that allowed us to rapidly build a responsive and
                  consistent design system. Its flexibility enabled us to create
                  a sleek, minimalistic design that aligns perfectly with Supple
                  Wear’s brand aesthetics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={gradi_iphone_mockup}
            alt="Restaurant website mockup on a tablet"
            className="w-full md:w-1/2"
          />
          <Image
            src={gradi_iphone_mockup_2}
            alt="Restaurant website mockup showcasing the menu"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={gradi_iphone_mockup_3}
            alt="Restaurant website mockup featuring homepage"
            className="w-full md:w-1/2"
          />
          <Image
            src={gradi_macbook_mockup}
            alt="Restaurant website mockup on a MacBook"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={gradi_macbook_mockup_2}
            alt="Restaurant website mockup displaying reservation page"
            className="w-full md:w-1/2"
          />
          <Image
            src={gradi_macbook_mockup_3}
            alt="Restaurant website mockup on a MacBook showing contact page"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default GradiKranjPage;
