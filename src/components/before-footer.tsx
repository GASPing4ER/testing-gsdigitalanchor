import shopifyLogo from "@/public/icons/partners/shopify.svg";
import mailchimpLogo from "@/public/icons/partners/mailchimp.svg";
import nextjsLogo from "@/public/icons/partners/nextjs.svg";
import adobeLogo from "@/public/icons/partners/adobe.svg";
import Image from "next/image";

const BeforeFooter = () => {
  return (
    <div className="bg-slate-900 text-slate-50 p-4 sm:p-10 flex justify-center text-center gap-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-xs tracking-widest text-[#AB7952]">WORKING WITH</h2>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex gap-5">
            <Image
              src={shopifyLogo}
              alt="Shopify Logo"
              className="w-[150px] sm:w-[200px] xl:w-[250px]"
            />
            <Image
              src={mailchimpLogo}
              alt="Mailchimp Logo"
              className="w-[150px] sm:w-[200px] xl:w-[250px]"
            />
          </div>
          <div className="flex gap-5">
            <Image
              src={nextjsLogo}
              alt="Next.js Logo"
              className="w-[150px] sm:w-[200px] xl:w-[250px]"
            />
            <Image
              src={adobeLogo}
              alt="Adobe Logo"
              className="w-[150px] sm:w-[200px] xl:w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
