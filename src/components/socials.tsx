import Image from "next/image";

import twitterIcon from "@/public/icons/socials/twitter.svg";
import instagramIcon from "@/public/icons/socials/instagram.svg";
import linkedinIcon from "@/public/icons/socials/linkedin.svg";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="hidden lg:flex gap-2">
      <Link
        href="https://www.instagram.com/gsdigitalanchor/"
        aria-label="Instagram"
      >
        <div className="border border-[#AB7952] rounded-full p-2">
          <Image src={instagramIcon} alt="Instagram" className="w-4 h-4" />
        </div>
      </Link>
      <Link
        href="https://www.linkedin.com/company/gs-digital-anchor/"
        aria-label="LinkedIn"
      >
        <div className="border border-slate-50 rounded-full p-2">
          <Image src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
        </div>
      </Link>
      <Link href="https://x.com" aria-label="Twitter / X">
        <div className="border border-[#AB7952] rounded-full p-2">
          <Image src={twitterIcon} alt="Twitter / X" className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};

export default Socials;
