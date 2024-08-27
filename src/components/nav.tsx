"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import twitterIcon from "@/public/icons/socials/twitter.svg";
import instagramIcon from "@/public/icons/socials/instagram.svg";
import linkedinIcon from "@/public/icons/socials/linkedin.svg";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div>
        <Bars3Icon
          onClick={() => setIsOpen(true)}
          className="lg:hidden w-6 h-6 text-white"
        />
      </div>
      <ul
        className={`absolute top-0 left-0 w-full h-screen lg:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-center gap-6 text-xs tracking-widest font-normal text-slate-50 bg-slate-900`}
      >
        <Bars3Icon
          onClick={() => setIsOpen(false)}
          className="absolute top-5 left-5 w-6 h-6 text-white"
        />
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/insights">INSIGHTS</Link>
        </li>
        <div className="flex gap-2">
          <Link href="https://www.instagram.com/gsdigitalanchor/">
            <div className="border border-[#AB7952] rounded-full p-2">
              <Image src={instagramIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/gs-digital-anchor/">
            <div className="border border-slate-50 rounded-full p-2">
              <Image src={linkedinIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
          <Link href="https://x.com">
            <div className="border border-[#AB7952] rounded-full p-2">
              <Image src={twitterIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <Link
          href="/contact"
          className="sm:hidden text-xs px-6 py-2 border border-slate-50 rounded-2xl hover:bg-slate-50 hover:text-slate-900"
        >
          CONTACT
        </Link>
      </ul>
      <ul className="hidden lg:flex gap-6 text-xs tracking-widest font-normal text-white">
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/insights">INSIGHTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
