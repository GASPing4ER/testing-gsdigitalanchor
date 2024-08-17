import Image from "next/image";

import twitterIcon from "@/public/icons/socials/twitter.svg";
import instagramIcon from "@/public/icons/socials/instagram.svg";
import linkedinIcon from "@/public/icons/socials/linkedin.svg";

const Socials = () => {
  return (
    <div className="hidden lg:flex gap-2">
      <div className="border border-[#AB7952] rounded-full p-2">
        <Image src={instagramIcon} alt="Twitter" className="w-4 h-4" />
      </div>
      <div className="border border-slate-50 rounded-full p-2">
        <Image src={linkedinIcon} alt="Twitter" className="w-4 h-4" />
      </div>
      <div className="border border-[#AB7952] rounded-full p-2">
        <Image src={twitterIcon} alt="Twitter" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Socials;
