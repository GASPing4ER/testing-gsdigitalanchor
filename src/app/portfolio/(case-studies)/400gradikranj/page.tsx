import { cinzel, cormorant, garamond, montserrat } from "@/src/lib/fonts";

import logo from "@/public/images/400gradi/logo-black.svg";
import gradi_iphone_mockup from "@/public/images/400gradi/gradi_iphone_mockup.png";
import gradi_iphone_mockup_2 from "@/public/images/400gradi/gradi_iphone_mockup_2.png";
import gradi_iphone_mockup_3 from "@/public/images/400gradi/gradi_iphone_mockup_3.png";
import gradi_macbook_mockup from "@/public/images/400gradi/gradi_macbook_mockup.png";
import gradi_macbook_mockup_2 from "@/public/images/400gradi/gradi_macbook_mockup_2.png";
import gradi_macbook_mockup_3 from "@/public/images/400gradi/gradi_macbook_mockup_3.png";

import benefit_1 from "@/public/images/400gradi/benefit-1.svg";
import benefit_2 from "@/public/images/400gradi/benefit-2.svg";
import benefit_3 from "@/public/images/400gradi/benefit-3.svg";

import Image from "next/image";
import { Metadata } from "next";
import SectionTimeline from "@/src/components/section-tracker";

import bon_400 from "@/public/images/400gradi/bon_400.png";
import tshirt_400 from "@/public/images/400gradi/tshirt_400.png";
import wine_menu_400 from "@/public/images/400gradi/wine_menu_400.png";
import plakat_400 from "@/public/images/400gradi/plakat_400.png";
import Heading from "@/src/components/portfolio/heading";
import Section from "@/src/components/portfolio/section";
import Paragraph from "@/src/components/portfolio/Paragraph";

export const metadata: Metadata = {
  title: "400 Gradi Kranj Case Study | Elegant Restaurant",
  description:
    "Explore the case study for 400 Gradi Kranj, a restaurant specializing in authentic Italian cuisine. Discover how we crafted a digital experience that reflects luxury and sophistication.",
  keywords: [
    "400 Gradi Kranj",
    "web design",
    "branding and identity",
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

const sections = [
  { id: 1, name: "Introduction" },
  { id: 2, name: "Colors" },
  { id: 3, name: "Typography" },
  { id: 4, name: "Personalization" },
  { id: 5, name: "Printing" },
  { id: 6, name: "Design" },
  { id: 7, name: "Development" },
];

const GradiKranjPage = () => {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <SectionTimeline sections={sections} />
      <Section id="introduction" className="flex flex-col lg:flex-row lg:py-0">
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <p className="text-sm">CLIENT</p>
          <h1 className={`${cormorant.className} text-4xl sm:text-5xl`}>
            400 Gradi Kranj
          </h1>
          <Paragraph
            text="400 Gradi Kranj is a restaurant dedicated to offering an authentic
            Italian dining experience, with a focus on high-quality ingredients
            and traditional recipes."
          />
          <Heading title="Request" />
          <Paragraph
            text="The client required a complete branding and digital solution,
              including a refined brand identity, a user-friendly website, menu
              design and distribution, social media management, and branded
              materials. They aimed to establish a strong, cohesive presence
              across all platforms, ensuring consistency in both digital and
              print."
          />
          <Heading title="Goal" />
          <Paragraph
            text="The goal was to create a seamless and recognizable brand
              experience that reflects their vision and strengthens their market
              presence, enhancing customer engagement and positioning them
              effectively in their industry."
          />
        </div>
        <div className="flex-1 bg-[#d2bba2]/10 w-full flex flex-col gap-12 items-center justify-center text-black border">
          <Image src={logo} alt="400 Gradi Kranj logo" className="w-20" />
          <div className="flex flex-col items-center">
            <h2 className={`${cinzel.className} text-3xl`}>400 GRADI KRANJ</h2>
            <h3 className={`${garamond.className} text-xl`}>
              AUTHENTIC ITALIAN CUISINE
            </h3>
          </div>
        </div>
      </Section>

      <section
        id="colors"
        className={`${garamond.className}  w-full h-screen flex flex-col`}
      >
        <div className="bg-[#DEDADB] w-full flex-1 py-12 flex flex-col items-center justify-center text-slate-900 gap-12">
          <p className="text-sm uppercase">Tailored spectrum</p>
          <div className="flex gap-4 sm:gap-10">
            <span className="flex flex-col gap-4 items-center text-xs uppercase">
              <div className="w-10 h-10 md:w-24 md:h-24 bg-[#602b22] rounded-full" />
              #602b22
            </span>
            <span className="flex flex-col gap-4 items-center text-xs uppercase">
              <div className="w-10 h-10 md:w-24 md:h-24 bg-[#eae3d7] rounded-full" />
              #eae3d7
            </span>
            <span className="flex flex-col gap-4 items-center text-xs uppercase">
              <div className="w-10 h-10 md:w-24 md:h-24 bg-[#ffffff] rounded-full" />
              #ffffff
            </span>
            <span className="flex flex-col gap-4 items-center text-xs uppercase">
              <div className="w-10 h-10 md:w-24 md:h-24 bg-[#000000] rounded-full" />
              #000000
            </span>
          </div>
        </div>
        <div className="flex-1 text-center flex flex-col items-center justify-center gap-6 border-b border-black/20">
          <Heading title="Colour Pallete" />
          <Paragraph
            text="The selected color palette embodies the warmth, elegance, and
            authenticity of Italian dining. Tuscan Red reflects passion and
            tradition, Cream Beige adds sophistication, Pure White ensures
            clarity and freshness, while Classic Black provides contrast and
            timeless refinement, creating a cohesive and inviting brand
            identity."
          />
        </div>
      </section>

      <section id="typography" className="w-full min-h-screen flex flex-col">
        <div className="flex-1 w-full px-6 py-6 sm:py-12 md:px-20 lg:px-40 flex flex-col justify-center gap-8 bg-slate-50 text-slate-900">
          <Heading title="Typography" />

          <div className="flex gap-4 px-4">
            <div>
              <h3 className={`${cinzel.className} text-3xl`}>Cinzel:</h3>
              <Paragraph
                text="Cinzel is used for headers and major titles. Its classic, serif
                style evokes a sense of tradition and elegance, aligning with
                the restaurant’s authentic Italian theme."
                className="max-w-[700px] italic"
              />
            </div>
          </div>
          <div className="flex gap-4 px-4">
            <div>
              <h3 className={`${garamond.className} text-3xl`}>EB Garamond:</h3>
              <Paragraph
                text="EB Garamond complements Cinzel with its sophisticated and
                timeless appearance. It’s used for body text, providing
                readability and a subtle touch of class."
                className="max-w-[700px] italic"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex-1 bg-slate-50 w-full flex flex-col md:flex-row items-center justify-center text-white gap-2`}
        >
          <div className="w-full flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#602b22]">
            <p className="text-sm">HEADER FONT</p>
            <h2 className={`${cinzel.className} text-5xl`}>Cinzel</h2>
            <div>
              <p className={`${cinzel.className} text-lg max-w-[500px]`}>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className={`${cinzel.className} text-lg max-w-[500px]`}>
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className={`${cinzel.className} text-lg max-w-[500px]`}>
                1 2 3 4 5 6 7 8 9 0
              </p>
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#602b22]">
            <p className="text-sm">BODY FONT</p>
            <h2 className={`${garamond.className} text-5xl`}>EB Garamond</h2>
            <div>
              <p className={`${garamond.className} text-lg max-w-[500px]`}>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </p>
              <p className={`${garamond.className} text-lg max-w-[500px]`}>
                a b c d e f g h i j k l m n o p q r s t u v w x y z
              </p>
              <p className={`${garamond.className} text-lg max-w-[500px]`}>
                1 2 3 4 5 6 7 8 9 0
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="personalization"
        className="w-full min-h-[60vh] flex flex-col justify-center px-6 py-6 sm:py-12 md:px-20 lg:px-40"
      >
        <div>
          <Heading title="Personalized Icons" />
          <Paragraph
            text="The custom-made icons capture the essence of 400 Gradi Kranj,
            drawing inspiration from its interior and culinary elements.
            Reflecting warmth, authenticity, and ambiance, they visually enhance
            the brand’s identity, creating a cohesive and inviting visual
            experience."
          />
        </div>
        <div className="flex flex-row justify-center py-12 px-6 gap-8 sm:gap-20 sm:p-24">
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full bg-[#eae3d7]">
            <Image src={benefit_3} alt="Couch Icon" className="w-16 sm:w-24" />
          </div>
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full bg-[#eae3d7]">
            <Image
              src={benefit_1}
              alt="Furnace Icon"
              className="w-16 sm:w-24"
            />
          </div>
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full bg-[#eae3d7]">
            <Image src={benefit_2} alt="Lights Icon" className="w-16 sm:w-24" />
          </div>
        </div>
      </section>

      <section
        id="printing"
        className="w-full min-h-screen px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900"
      >
        <div className="flex flex-col md:flex-row gap-6 lg:h-[45vh]">
          <Image
            src={wine_menu_400}
            alt="Lautus mockup"
            className="w-full md:w-1/2 h-full object-cover"
          />
          <Image
            src={bon_400}
            alt="Free grid box mockup"
            className="w-full md:w-1/2 h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:h-[45vh]">
          <Image
            src={tshirt_400}
            alt="Free grid box mockup 2"
            className="w-full md:w-1/2 h-full object-cover"
          />
          <Image
            src={plakat_400}
            alt="Free grid box mockup 2"
            className="w-full md:w-1/2 h-full object-cover"
          />
        </div>
      </section>

      <section
        id="design"
        className={`w-full min-h-screen flex flex-col gap-6 bg-slate-50 text-slate-900`}
      >
        <div className="flex-1 px-6 md:px-20 lg:px-40 flex flex-col gap-6 justify-center">
          <Heading title="Website Design" />
          <Paragraph
            text="The custom-made icons capture the essence of 400 Gradi Kranj,
            drawing inspiration from its interior and culinary elements.
            Reflecting warmth, authenticity, and ambiance, they visually enhance
            the brand’s identity, creating a cohesive and inviting visual
            experience."
          />
        </div>
        <div className="flex-1 bg-[#EAE3D7] w-full py-12 sm:py-24 sm:px-24 flex flex-col items-center justify-center text-slate-900 gap-12">
          <p className="text-sm uppercase">WIREFRAMING & PROTOTYPING</p>
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-10 text-center">
            <div className="flex-1 flex gap-4">
              <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
                <h3 className={`${cormorant.className} font-medium text-xl`}>
                  ELEGANCE
                </h3>
                <p>
                  A design that reflects the refined atmosphere of the
                  restaurant.
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
                  Seamless integration of multiple languages to cater to a
                  diverse clientele.
                </p>
              </span>
              <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
                <h3 className={`${cormorant.className} font-medium text-xl`}>
                  CUSTOM ICONS
                </h3>
                <p>
                  Hand-crafted icons designed to complement the restaurant’s
                  brand identity.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="development"
        className={`w-full min-h-screen flex flex-col gap-6 bg-slate-50 text-slate-900 py-24`}
      >
        <div className="flex-1 px-6 md:px-20 lg:px-40 flex flex-col gap-6 justify-center">
          <Heading title="Website Development" />
          <div className="flex flex-col gap-2">
            <h3 className={`${cormorant.className} text-3xl`}>Next.js</h3>
            <Paragraph
              text="We chose Next.js for its powerful features like server-side
              rendering and static site generation, which significantly improve
              the website’s performance and SEO capabilities. This ensured that
              the site was fast, efficient, and optimized for both users and
              search engines."
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className={`${cormorant.className} text-3xl`}>Tailwind CSS</h3>
            <Paragraph
              text=" Tailwind CSS was used for styling, providing a utility-first
              approach that allowed us to rapidly build a responsive and
              consistent design system. Its flexibility enabled us to create a
              sleek, minimalistic design that aligns perfectly with Supple
              Wear’s brand aesthetics"
            />
          </div>
        </div>
        <div
          className={`bg-slate-50 py-12 w-full flex flex-col lg:flex-row items-center justify-center text-[#202b22] gap-2`}
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
          <div className="w-full h-[250px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12"></div>
        </div>
        <div className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
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
        </div>
      </section>
    </main>
  );
};

export default GradiKranjPage;
