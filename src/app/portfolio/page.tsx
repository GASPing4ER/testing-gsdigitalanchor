import { aBeeZee, citadel, cormorant } from "@/src/lib/fonts";

import logo from "@/public/icons/lotus.svg";
import embose_logo from "@/public/images/embose-logo.png";
import lautus_mockup from "@/public/images/lautus-mockup.png";

import Image from "next/image";
import { Metadata } from "next";

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
        url: "/images/lautus-mockup.png",
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
    images: ["/images/lautus-mockup.png"],
  },
  alternates: {
    canonical: "https://gsdigitalanchor.com/portfolio/",
  },
};

const PortfolioPage = () => {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full px-6 pt-40 pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">BRANDING IDENTITY</p>
          <div className="flex flex-col gap-4">
            <h1 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Lautus
            </h1>
            <p className="text-sm sm:text-base font-medium max-w-[500px]">
              Lautus is a company specializing in providing high-end business
              gifts and stationery. We created a brand identity that reflected
              the luxurious nature of their products while appealing to their
              discerning corporate clientele.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#202B22] w-full py-24 flex flex-col items-center justify-center text-[#91805B] gap-12">
        <Image src={logo} alt="Lautus logo" />
        <div className="flex flex-col items-center">
          <h2 className={`${citadel.className} text-7xl`}>Lautus</h2>
          <h3 className={`${aBeeZee.className} text-xl`}>
            ELEGANT GIFTS & STATIONERY
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
                When Lautus approached us for their branding identity, they
                needed a look and feel that mirrored the luxurious nature of
                their offerings while appealing to their discerning corporate
                clientele. The primary objective was to create a branding
              </p>
              <p className="text-sm sm:text-base font-medium max-w-[500px]">
                identity that reflects the elegance, sophistication, and quality
                associated with Lautus. The brand needed to exude trust,
                professionalism, and refinement, aligning with the high
                standards of their products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${aBeeZee.className} bg-[#DEDADB] w-full py-12 sm:py-24 flex flex-col items-center justify-center text-slate-900 gap-12`}
      >
        <p className="text-sm uppercase">Color Palette</p>
        <div className="flex gap-4 sm:gap-10">
          <span className="flex flex-col gap-4 items-center text-xs uppercase">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[#f8f7f2] rounded-full" />
            #F8F7F2
          </span>
          <span className="flex flex-col gap-4 items-center text-xs uppercase">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[#91805b] rounded-full" />
            #91805b
          </span>
          <span className="flex flex-col gap-4 items-center text-xs uppercase">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[#4b4e49] rounded-full" />
            #4b4e49
          </span>
          <span className="flex flex-col gap-4 items-center text-xs uppercase">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[#424e3e] rounded-full" />
            #424e3e
          </span>
          <span className="flex flex-col gap-4 items-center text-xs uppercase">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[#202b22] rounded-full" />
            #202b22
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
                <div className="w-[30px] border bg-[#f8f7f2]" />
                <div>
                  <h3 className="uppercase">#f8f7f2 - Ivory Cream:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    We selected this soft, neutral tone to serve as the
                    foundation for the brand’s identity. Ivory Cream conveys a
                    sense of luxury and purity, providing a clean canvas that
                    allows other elements of the design to stand out. It’s a
                    timeless color that enhances the overall elegance of the
                    brand, making it suitable for Lautus’ high-end offerings.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#91805b]" />
                <div>
                  <h3 className="uppercase">#91805b - Antique Gold:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Antique Gold adds a subtle touch of opulence to the brand
                    identity. Gold is traditionally associated with wealth and
                    high value, which aligns perfectly with Lautus’ positioning
                    in the luxury business gifts and stationery market. This
                    muted gold shade avoids being flashy, instead offering a
                    sophisticated nod to the brand’s upscale nature.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#4b4e49]" />
                <div>
                  <h3 className="uppercase">#4b4e49 - Charcoal Gray:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Charcoal Gray brings a sense of depth and stability to the
                    brand identity. It’s a powerful, authoritative color that
                    balances the softer tones in the palette. This color was
                    chosen to convey the seriousness and professionalism that
                    Lautus’ corporate clients expect, ensuring that the brand
                    feels trustworthy and established.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#424e3e]" />
                <div>
                  <h3 className="uppercase">#424e3e - Olive Green:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Olive Green introduces an organic, timeless quality to the
                    palette. It symbolizes growth, endurance, and a connection
                    to nature, which subtly hints at the enduring quality and
                    timeless appeal of Lautus’ products. This color also adds a
                    layer of sophistication that complements the brand’s overall
                    luxurious feel.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[30px] border bg-[#202b22]" />
                <div>
                  <h3 className="uppercase">#202b22 - Deep Forest Green:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Deep Forest Green was chosen for its richness and depth,
                    offering a striking contrast to the lighter colors in the
                    palette. This color enhances the sense of exclusivity and
                    refinement, grounding the brand in a sense of quiet luxury.
                    It also ties in with the natural motif of the lotus in the
                    logo, creating a cohesive visual narrative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${aBeeZee.className} bg-slate-50 w-full flex flex-col md:flex-row items-center justify-center text-[#202b22] gap-2`}
      >
        <div className="w-full h-[350px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#91805b]">
          <p className="text-sm">HEADER FONT</p>
          <h2 className={`${citadel.className} text-5xl`}>Citadel script</h2>
          <div>
            <p className={`${citadel.className} text-lg max-w-[500px]`}>
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g
              h i j k l m n o p q r s t u v w x y z
            </p>
            <p className={`${citadel.className} text-lg max-w-[500px]`}>
              1 2 3 4 5 6 7 8 9 0
            </p>
          </div>
        </div>
        <div className="w-full h-[350px] flex-1 flex flex-col gap-4 px-6 sm:px-24 py-12 bg-[#91805b]">
          <p className="text-sm">BODY FONT</p>
          <h2 className={`text-5xl`}>ABeeZee</h2>
          <div>
            <p className={`text-lg max-w-[500px]`}>
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
            <p className={`text-lg max-w-[500px]`}>
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </p>
            <p className={`text-lg max-w-[500px]`}>1 2 3 4 5 6 7 8 9 0</p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of typography
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-4">
                <div>
                  <h3 className={`${citadel.className} text-3xl`}>
                    Citadel script:
                  </h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    Citadel Script was chosen for its elegant and refined
                    appearance. As a script font, it evokes the feel of
                    traditional, hand-written calligraphy, adding a personal and
                    luxurious touch to the brand. This font is used sparingly to
                    highlight key elements of the brand’s communication, such as
                    the logo or important headings, emphasizing Lautus’
                    dedication to craftsmanship and quality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <h3 className={`${aBeeZee.className} text-3xl`}>ABeeZee:</h3>
                  <p className="text-sm font-medium max-w-[700px] italic">
                    For the body text, AbeeZee was selected due to its modern
                    and clean design. This sans-serif font ensures readability
                    while maintaining a professional appearance. It complements
                    the more elaborate Citadel Script, offering a balance
                    between classic elegance and contemporary simplicity.
                    AbeeZee’s clarity and understated design make it perfect for
                    conveying information in a way that is both accessible and
                    aesthetically pleasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:px-20 lg:px-40 flex flex-col sm:flex-row justify-center bg-slate-50 text-slate-900">
        <div className="w-full h-[300px] sm:w-[400px] sm:h-auto  bg-[#202b22] flex justify-center items-center">
          <Image src={logo} alt="Embose logo" className="w-[120px]" />
        </div>
        <div>
          <Image
            src={embose_logo}
            alt="Embose logo"
            className="h-[300px] object-cover sm:h-auto sm:w-[400px]"
          />
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div className="flex flex-col gap-8">
          <p className="text-sm">EXPLANATION</p>
          <div className="flex flex-col gap-4">
            <h2 className={`${cormorant.className} text-4xl sm:text-7xl`}>
              Of logo design
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-[400px] h-auto md:h-[300px] border p-6 flex flex-col gap-2">
                  <h3 className="uppercase">Purity and Beauty:</h3>
                  <p>
                    The lotus is often associated with purity and beauty, both
                    of which are qualities that resonate deeply with Lautus’
                    brand. The company’s products are designed to be elegant and
                    refined, much like the lotus itself, which emerges pristine
                    from muddy waters.
                  </p>
                </div>
                <div className="w-full md:w-[400px] h-auto md:h-[300px] border p-6 flex flex-col gap-2">
                  <h3 className="uppercase">Growth and Resilience:</h3>
                  <p>
                    The lotus is also a symbol of growth and resilience,
                    thriving in adverse conditions. This reflects Lautus’
                    commitment to providing products that are not only beautiful
                    but also enduring, appealing to clients who value lasting
                    quality.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-[400px] h-auto md:h-[300px] border p-6 flex flex-col gap-2">
                  <h3 className="uppercase">Elegance and Simplicity:</h3>
                  <p>
                    The design of the lotus is simple yet sophisticated,
                    capturing the essence of Lautus’ brand identity. It’s a
                    versatile symbol that works across various mediums, from
                    digital to print, while maintaining its visual impact.
                  </p>
                </div>
                <div className="w-full md:w-[400px] h-auto md:h-[300px] border p-6 flex flex-col gap-2">
                  <h3 className="uppercase">Connection to Nature:</h3>
                  <p>
                    The use of a natural element like the lotus ties in with the
                    organic tones of the color palette, particularly the Olive
                    and Deep Forest Greens. This reinforces a sense of harmony
                    and balance in the brand’s identity, appealing to clients
                    who appreciate thoughtful, well-crafted products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-24 md:px-20 lg:px-40 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <Image
          src={lautus_mockup}
          alt="Lautus mockup"
          className="md:w-[700px]"
        />
      </section>
    </main>
  );
};

export default PortfolioPage;
