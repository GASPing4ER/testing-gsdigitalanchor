import Link from "next/link";
import { cormorant } from "../lib/fonts";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="relative w-full h-screen flex items-center p-24 bg-hero-pattern bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50"></div>
        <div className="z-20 flex flex-col gap-6">
          <h1
            className={`${cormorant.className} font-semibold text-slate-50 text-6xl`}
          >
            Where Tradition Meets <br /> Digital Innovation
          </h1>
          <p className="text-slate-50 text-lg max-w-[600px]">
            We craft bespoke digital strategies, branding, and marketing to
            enhance your brand’s legacy and prestige.
          </p>
          <button className="text-xs text-slate-50 px-6 py-3 border border-slate-50 rounded-2xl w-fit">
            OUR EXPERTISE
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-slate-900 p-24 flex flex-col gap-8 justify-center">
        <h3 className="text-xs tracking-widest text-slate-300">SERVICES</h3>
        <h2
          className={`${cormorant.className} font-semibold text-slate-50 text-5xl`}
        >
          Our Expertise
        </h2>
        <p className="text-slate-50 max-w-[600px]">
          Our full-service expertise spans digital strategy, content creation,
          web development, and more—designed exclusively for luxury.
        </p>
        <div className="flex w-full text-slate-50">
          <div className="flex-1 h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between">
            <span className="text-slate-300">PHASE 01</span>
            <div className="flex flex-col gap-4">
              <h2 className={`${cormorant.className} font-semibold text-4xl`}>
                Strategy
              </h2>
              <p className="text-sm">
                We craft tailored digital strategies that align with your
                brand’s heritage and goals, ensuring every move enhances your
                legacy.
              </p>
              <Link href="/contact" className="text-xs">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="flex-1 h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between">
            <span className="text-slate-300">PHASE 02</span>
            <div className="flex flex-col gap-4">
              <h2 className={`${cormorant.className} font-semibold text-4xl`}>
                Branding
              </h2>
              <p className="text-sm">
                We create timeless visual identities and messaging that capture
                the essence of your luxury brand, making a lasting impression
                across all digital platforms.
              </p>
              <Link href="/contact" className="text-xs">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="flex-1 h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between">
            <span className="text-slate-300">PHASE 03</span>
            <div className="flex flex-col gap-4">
              <h2 className={`${cormorant.className} font-semibold text-4xl`}>
                Website
              </h2>
              <p className="text-sm">
                We design and develop websites that embody your brand’s
                elegance, offering seamless user experiences that turn visitors
                into loyal customers.
              </p>
              <Link href="/contact" className="text-xs">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="flex-1 h-[400px] border border-slate-50/10 p-6 flex flex-col justify-between">
            <span className="text-slate-300">PHASE 04</span>
            <div className="flex flex-col gap-4">
              <h2 className={`${cormorant.className} font-semibold text-4xl`}>
                Marketing
              </h2>
              <p className="text-sm">
                Our targeted marketing strategies amplify your brand’s voice,
                reaching the right audience with the right message, and driving
                measurable results.
              </p>
              <Link href="/contact" className="text-xs">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
