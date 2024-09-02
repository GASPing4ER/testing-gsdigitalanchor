import { cormorant, philosopher } from "@/src/lib/fonts";

import logo from "@/public/images/supple/logo.png";
import supple_iphone_mockup from "@/public/images/supple/supple_iphone_mockup.png";
import supple_iphone_mockup_2 from "@/public/images/supple/supple_iphone_mockup_2.png";
import supple_iphone_mockup_3 from "@/public/images/supple/supple_iphone_mockup_3.png";
import supple_macbook_mockup from "@/public/images/supple/supple_macbook_mockup.png";
import supple_macbook_mockup_2 from "@/public/images/supple/supple_macbook_mockup_2.png";
import supple_macbook_mockup_3 from "@/public/images/supple/supple_macbook_mockup_3.png";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supple Wear Web Design & Development Case Study | Elegant Clothing",
  description:
    "Explore the web design and development case study for Supple Wear, a brand specializing in elegant clothing. Discover how we crafted a digital experience that reflects luxury and sophistication.",
  keywords: [
    "Supple Wear",
    "web design",
    "web development",
    "elegant clothing",
    "fashion website",
    "luxury fashion",
    "UI/UX design",
    "e-commerce",
  ],
  openGraph: {
    title: "Supple Wear Web Design & Development Case Study | Elegant Clothing",
    description:
      "See how we created a sophisticated and luxurious digital experience for Supple Wear, a brand specializing in elegant clothing.",
    images: [
      {
        url: "/images/supple/supple_iphone_mockup_3.png",
        width: 1200,
        height: 630,
        alt: "Supple Wear website mockup",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/supple-wear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supple Wear Web Design & Development Case Study",
    description:
      "Discover the sophisticated and luxurious web design and development crafted for Supple Wear, a brand known for its elegant clothing.",
    images: ["/images/supple/supple_iphone_mockup_3.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/supple-wear",
  },
};

const SuppleWearPage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">WEB DESIGN & DEVELOPMENT</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Supple Wear
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              Supple Wear is a clothing brand dedicated to offering
              sophisticated and timeless pieces for individuals who appreciate
              elegance and style.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d2bba2]/10 w-full py-24 flex flex-col items-center justify-center text-[#91805B] border">
        <Image src={logo} alt="Lautus logo" className="w-40" />
        <h2
          className={`${cormorant.className} text-black text-2xl font-medium`}
        >
          ELEGANT CLOTHING
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
                The brand’s vision is to become synonymous with luxury and
                sophistication in the fashion industry, providing customers with
                a seamless shopping experience that reflects the quality and
                elegance of their products. Our mission was to design
              </p>
              <p className="flex-1 text-sm sm:text-base font-medium max-w-[500px]">
                and develop a website that not only showcased their exquisite
                collections but also enhanced the user experience, driving
                engagement and conversions.
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
          <div className="flex-1 flex gap-4">
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${philosopher.className} text-xl`}>TYPOGRAPHY</h3>
              <p>
                {" "}
                Elegant, serif fonts paired with modern, sans-serif fonts for
                readability.
              </p>
            </span>
            <span className="flex-1 flex flex-col gap-4 items-center text-xs uppercase">
              <h3 className={`${philosopher.className} text-xl`}>
                COLOR PALETTE
              </h3>
              <p>
                A sophisticated color scheme, using neutral tones with
                occasional splashes of color.
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
              Based on our research, we created wireframes that laid out the
              structure of the website, focusing on a clean, minimalist design
              that would allow the products to take center stage. Prototyping
              helped us to refine the user journey, ensuring every touchpoint
              was intuitive and aligned with the brand’s aesthetic.
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
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              Framer Motion
            </p>
          </div>
        </div>
        <div className="w-full h-[250px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#d2bba2]/30">
          <h2 className={`${cormorant.className} text-5xl`}>BACKEND</h2>
          <div>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              Swell.js
            </p>
            <p className={`${cormorant.className} text-lg max-w-[500px]`}>
              NextAuth.js
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
              <div className="flex-1 flex flex-col gap-10">
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
                    consistent design system. Its flexibility enabled us to
                    create a sleek, minimalistic design that aligns perfectly
                    with Supple Wear’s brand aesthetics
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`${cormorant.className} text-3xl`}>
                    Framer Motion
                  </h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    To enhance the user experience, we incorporated Framer
                    Motion for animations and interactions. This added a layer
                    of sophistication and smoothness to the website, making
                    transitions and user interactions feel fluid and engaging.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className={`${cormorant.className} text-3xl`}>
                    Swell.js
                  </h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    We utilized Swell.js for the backend, a headless e-commerce
                    platform that provided us with the flexibility to create a
                    custom shopping experience while managing inventory, orders,
                    and customer data efficiently. Swell.js allowed us to
                    seamlessly integrate e-commerce functionality.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className={`${cormorant.className} text-3xl`}>
                    NextAuth.js
                  </h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    For authentication, we implemented NextAuth.js, a robust
                    solution for handling user authentication and session
                    management. This ensured that user data was securely
                    managed, providing a smooth login experience while
                    maintaining high security standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={supple_iphone_mockup}
            alt="Lautus mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={supple_iphone_mockup_2}
            alt="Free grid box mockup"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={supple_iphone_mockup_3}
            alt="Free grid box mockup 2"
            className="w-full md:w-1/2"
          />
          <Image
            src={supple_macbook_mockup}
            alt="Free grid box mockup 3"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={supple_macbook_mockup_2}
            alt="Label tag mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={supple_macbook_mockup_3}
            alt="Label tag mockup 2"
            className="w-full md:w-1/2"
          />
        </div>
      </section>
    </main>
  );
};

export default SuppleWearPage;
