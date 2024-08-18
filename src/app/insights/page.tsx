import Image from "next/image";

import luxuryLiving from "@/public/luxury-living.jpg";
import Link from "next/link";
import { cormorant } from "@/src/lib/fonts";

const InsightsPage = () => {
  return (
    <div
      className="px-6 py-24 h-screen sm:p-24 bg-luxury-light text-luxury-dark flex justify-center sm:justify-start flex-wrap gap-10"
      id="first-section"
    >
      <Link
        href="/insights/role-of-branding-and-identity"
        className="h-[300px] w-[350px] border flex flex-col gap-2"
      >
        <Image
          src={luxuryLiving}
          alt="Luxury Living"
          className="w-full h-1/2 object-cover"
        />
        <div className="pl-2 flex flex-col gap-2">
          <h2 className={`${cormorant.className} font-medium text-lg`}>
            The Role of Branding & Identity in the Success of Luxury Brands
          </h2>
          <p className="text-[#AB7952]">August 18, 2024</p>
          <p className="text-xs italic">By Gašper Šimec</p>
        </div>
      </Link>
    </div>
  );
};

export default InsightsPage;
