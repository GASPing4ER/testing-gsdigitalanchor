import { cormorant } from "@/src/lib/fonts";

const AboutPage = () => {
  return (
    <main>
      <div className="relative w-full h-screen flex items-center p-6 sm:p-24 bg-about-pattern bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-900/50" />
        <div className="z-20 flex flex-col gap-6">
          <h1
            className={`${cormorant.className} font-semibold text-slate-50 text-4xl sm:text-5xl md:text-6xl max-w-[400px] sm:max-w-[600px]`}
          >
            Heritage in Digital Excellence
          </h1>
          <p className="text-slate-50 text-lg max-w-[600px]">
            An authentic website oriented agency for vibrant brands with a
            unique vision.
          </p>
          <button className="text-xs text-slate-50 px-6 py-3 border border-slate-50 rounded-2xl w-fit">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div
        className="w-full min-h-screen flex flex-col gap-6 p-24 bg-slate-900"
        id="first-section"
      >
        <h3 className="text-[#AB7952] text-xs tracking-widest">OUR VALUES</h3>
        <p className="text-slate-50 max-w-[700px]">
          This is the <span className="italic">fabric of our culture</span> and
          the framework for all decisions made within these walls. Heads up,
          they tend to be contagious.
        </p>
        <div className="flex flex-col items-center gap-8">
          <hr className="border-t border-[#AB7952] w-[100px]" />
          <div className="text-center flex flex-col gap-2">
            <h2
              className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
            >
              Excellence.
            </h2>
            <p className="italic text-slate-300">
              Deliver nothing less than the best
            </p>
          </div>
          <hr className="border-t border-[#AB7952] w-[100px]" />
          <div className="text-center flex flex-col gap-2">
            <h2
              className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
            >
              Innovation.
            </h2>
            <p className="italic text-slate-300">
              Embrace creativity and set trends
            </p>
          </div>
          <hr className="border-t border-[#AB7952] w-[100px]" />
          <div className="text-center flex flex-col gap-2">
            <h2
              className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
            >
              Integrity.
            </h2>
            <p className="italic text-slate-300">
              Build trust through honesty and transparency
            </p>
          </div>
          <hr className="border-t border-[#AB7952] w-[100px]" />
          <div className="text-center flex flex-col gap-2">
            <h2
              className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
            >
              Elegance.
            </h2>
            <p className="italic text-slate-300">
              Reflect sophistication in every detail
            </p>
          </div>
          <hr className="border-t border-[#AB7952] w-[100px]" />
          <div className="text-center flex flex-col gap-2">
            <h2
              className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
            >
              Commitment.
            </h2>
            <p className="italic text-slate-300">
              Dedicate ourselves fully to client success
            </p>
          </div>
          <hr className="border-t border-[#AB7952] w-[100px]" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 p-24 bg-slate-50">
        <h3 className="text-[#AB7952] text-xs tracking-widest">OUR MISSION</h3>
        <h2
          className={`${cormorant.className} text-5xl font-semibold text-slate-900`}
        >
          To Elevate Your Brand
        </h2>
        <p className="text-slate-900 max-w-[700px]">
          We are committed to crafting bespoke digital strategies, branding, and
          marketing to enhance your brand’s legacy and prestige.
        </p>
        <button className="text-xs text-slate-900 px-6 py-3 border border-slate-900 rounded-2xl w-fit">
          LEARN MORE
        </button>
        <h3 className="text-[#AB7952] text-xs tracking-widest">OUR VISION</h3>
        <h2
          className={`${cormorant.className} text-5xl font-semibold text-slate-900`}
        >
          To Be Your Trusted Partner
        </h2>
        <p className="text-slate-900 max-w-[700px]">
          We aspire to be the digital agency of choice for luxury brands seeking
          a partner that understands their unique vision and values.
        </p>
        <button className="text-xs text-slate-900 px-6 py-3 border border-slate-900 rounded-2xl w-fit">
          CONTACT US
        </button>
      </div>
    </main>
  );
};

export default AboutPage;
