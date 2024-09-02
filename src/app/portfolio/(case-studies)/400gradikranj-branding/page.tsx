import { aBeeZee, cinzel, cormorant, garamond } from "@/src/lib/fonts";

import logo from "@/public/images/400gradi/logo-black.svg";
import embose_logo from "@/public/images/lautus/embose-logo.png";
import benefit_1 from "@/public/images/400gradi/benefit-1.svg";
import benefit_2 from "@/public/images/400gradi/benefit-2.svg";
import benefit_3 from "@/public/images/400gradi/benefit-3.svg";

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Restaurant 400 Gradi Kranj Branding Identity Case Study | Authentic Italian Cuisine",
  description:
    "Explore the branding identity case study for Restaurant 400 Gradi Kranj, an authentic Italian cuisine restaurant. Discover the design choices that reflect tradition, elegance, and a deep connection to Italian culture.",
  keywords: [
    "400 Gradi Kranj",
    "branding identity",
    "Italian cuisine",
    "restaurant branding",
    "logo design",
    "color palette",
    "typography",
    "authentic Italian food",
  ],
  openGraph: {
    title:
      "Restaurant 400 Gradi Kranj Branding Identity Case Study | Authentic Italian Cuisine",
    description:
      "See how we crafted a traditional and elegant brand identity for Restaurant 400 Gradi Kranj, specializing in authentic Italian cuisine.",
    images: [
      {
        url: "/images/400gradi/restaurant-mockup.png",
        width: 1200,
        height: 630,
        alt: "400 Gradi Kranj branding identity overview",
      },
    ],
    url: "https://gsdigitalanchor.com/portfolio/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant 400 Gradi Kranj Branding Identity Case Study",
    description:
      "Discover the traditional and elegant brand identity crafted for Restaurant 400 Gradi Kranj, a provider of authentic Italian cuisine.",
    images: ["/images/400gradi/restaurant-mockup.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/",
  },
};

const LautusPage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">BRANDING IDENTITY</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              400 Gradi Kranj
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              Restaurant 400 Gradi Kranj is dedicated to providing authentic
              Italian cuisine. We developed a brand identity that honors the
              rich traditions of Italian culture while appealing to a modern
              audience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eae3d7] w-full py-24 flex flex-col items-center justify-center text-black gap-12">
        <Image src={logo} alt="Lautus logo" className="w-28" />
        <div className="flex flex-col items-center">
          <h2 className={`${cinzel.className} text-4xl`}>400 GRADI KRANJ</h2>
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
              Of our work
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <p className="text-sm sm:text-base font-medium max-w-[500px]">
                400 Gradi Kranj needed a brand identity that would reflect its
                dedication to authentic Italian cuisine. Our primary goal was to
                create a visual language that conveyed the elegance, warmth, and
                rich tradition of Italian dining.
              </p>
              <p className="text-sm sm:text-base font-medium max-w-[500px]">
                The branding needed to embody the charm and sophistication of
                Italy, appealing to both local patrons and international
                visitors seeking an authentic culinary experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${garamond.className} bg-[#DEDADB] w-full py-12 sm:py-24 flex flex-col items-center justify-center text-slate-900 gap-12`}
      >
        <p className="text-sm uppercase">Color Palette</p>
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
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of color palette
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#602b22]" />
                <div>
                  <h3 className="uppercase">#602b22 - Tuscan Red:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    This deep, earthy red was chosen to evoke the warmth and
                    richness of traditional Italian cuisine. It serves as the
                    primary color, reflecting the passion and authenticity of
                    the restaurant.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#eae3d7]" />
                <div>
                  <h3 className="uppercase">#eae3d7 - Cream Beige:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Cream Beige provides a soft, neutral backdrop that
                    complements the bold Tuscan Red. This color adds a touch of
                    elegance and refinement, creating a welcoming atmosphere.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#ffffff]" />
                <div>
                  <h3 className="uppercase">#ffffff - Pure White:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Pure White represents cleanliness and simplicity, essential
                    elements in both the restaurant’s presentation and its
                    culinary philosophy. It allows other colors to stand out and
                    provides a crisp, modern touch.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#000000]" />
                <div>
                  <h3 className="uppercase">#000000 - Classic Black</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Black is used sparingly to add contrast and sophistication.
                    It’s a versatile color that enhances the overall elegance of
                    the brand, ensuring that the visual identity remains
                    timeless and refined.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`bg-slate-50 w-full flex flex-col md:flex-row items-center justify-center text-white gap-2`}
      >
        <div className="w-full h-[350px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#602b22]">
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
        <div className="w-full h-[350px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#602b22]">
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
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl pb-4`}>
              Of typography
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-4 px-4">
                <div>
                  <h3 className={`${cinzel.className} text-3xl`}>Cinzel:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Cinzel is used for headers and major titles. Its classic,
                    serif style evokes a sense of tradition and elegance,
                    aligning with the restaurant’s authentic Italian theme.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 px-4">
                <div>
                  <h3 className={`${garamond.className} text-3xl`}>
                    EB Garamond:
                  </h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    EB Garamond complements Cinzel with its sophisticated and
                    timeless appearance. It’s used for body text, providing
                    readability and a subtle touch of class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-center py-12 px-6 gap-8 sm:gap-20 sm:p-24 bg-[#eae3d7]">
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full">
            <Image src={benefit_3} alt="Couch Icon" className="w-16 sm:w-32" />
          </div>
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full">
            <Image
              src={benefit_1}
              alt="Furnace Icon"
              className="w-16 sm:w-32"
            />
          </div>
          <div className="w-fit border p-4 flex flex-col gap-2 rounded-full">
            <Image src={benefit_2} alt="Lights Icon" className="w-16 sm:w-32" />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">CUSTOM ICONS</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Inspiration from the restaurant
            </h2>
            <div className="flex flex-col gap-4">
              <div className=" h-auto p-4 flex flex-col gap-2">
                <h3 className="uppercase text-xl mt-4">Couch</h3>
                <p
                  className={`${garamond.className} text-sm font-medium italic max-w-[700px]`}
                >
                  This icon was inspired by the comfortable and elegant couch
                  seating inside the restaurant. It reflects the warm, inviting
                  atmosphere that 400 Gradi Kranj offers to its guests.
                </p>
              </div>
              <div className=" h-auto p-4 flex flex-col gap-2">
                <h3 className="uppercase text-xl mt-4">Pizza Furnace</h3>
                <p
                  className={`${garamond.className} text-sm font-medium italic max-w-[700px]`}
                >
                  The furnace icon symbolizes the heart of the restaurant – the
                  traditional wood-fired oven used to create authentic Italian
                  pizzas, a core element of 400 Gradi Kranj’s identity.
                </p>
              </div>
              <div className=" h-auto p-4 flex flex-col gap-2">
                <h3 className="uppercase text-xl mt-4">Lights</h3>
                <p
                  className={`${garamond.className} text-sm font-medium italic max-w-[700px]`}
                >
                  This icon draws inspiration from the distinctive lighting
                  fixtures that add to the cozy, intimate ambiance of the
                  restaurant. It represents the refined and thoughtful design
                  that enhances the dining experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full pb-24 px-6 md:px-20 lg:px-40 flex flex-col gap-6 bg-slate-50 text-slate-900">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={lautus_mockup}
            alt="Lautus mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={free_grid_box_1}
            alt="Free grid box mockup"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={free_grid_box_2}
            alt="Free grid box mockup 2"
            className="w-full md:w-1/2"
          />
          <Image
            src={free_grid_box_3}
            alt="Free grid box mockup 3"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={label_tag_mockup_1}
            alt="Label tag mockup"
            className="w-full md:w-1/2"
          />
          <Image
            src={label_tag_mockup_2}
            alt="Label tag mockup 2"
            className="w-full md:w-1/2"
          />
        </div>
      </section> */}
    </main>
  );
};

export default LautusPage;
