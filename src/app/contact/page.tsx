import PricingPackage from "@/src/components/pricing-package";
import { cormorant } from "@/src/lib/fonts";

const ContactPage = () => {
  return (
    <main>
      <div className="bg-slate-900 p-6 pt-24 sm:p-24 w-full" id="first-section">
        <div className="relative w-full h-screen flex flex-col items-center text-center max-w-[600px] mx-auto">
          <h1
            className={`${cormorant.className} text-slate-50 text-7xl pt-10 pb-16 md:pb-24`}
          >
            INQUIRE
          </h1>
          <form className="w-full flex flex-col gap-10 items-center text-sm text-slate-50">
            <div className="flex w-full gap-8">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-transparent border-b border-slate-50 pb-4 w-full"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-slate-50 pb-4 w-full"
              />
            </div>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Brand Name, Website, Social Media"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
            />
            <input
              type="text"
              id="services"
              name="services"
              placeholder="Services Interested In"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
            />
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="Your Budget"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Give us a little detail so we can best help your needs!"
              className="bg-transparent border-b border-slate-50 min-h-[100px] h-fit pb-4 w-full"
            />
            <button
              className={`${cormorant.className} bg-[#AB7952] text-slate-50 px-8 py-2`}
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
      <PricingPackage />
    </main>
  );
};

export default ContactPage;
