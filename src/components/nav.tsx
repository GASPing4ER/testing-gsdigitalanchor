"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import twitterIcon from "@/public/icons/socials/twitter.svg";
import instagramIcon from "@/public/icons/socials/instagram.svg";
import linkedinIcon from "@/public/icons/socials/linkedin.svg";
import tiktokIcon from "@/public/icons/socials/tiktok.svg";
import Image from "next/image";
import Logo from "./logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div>
        <Bars3Icon
          onClick={() => setIsOpen(true)}
          className="lg:hidden w-6 h-6 text-white cursor-pointer"
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-screen lg:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-center gap-6 text-xs tracking-widest font-normal text-slate-50 bg-slate-900 z-50`}
      >
        <div onClick={() => setIsOpen(false)}>
          <Logo />
        </div>
        <ul className={`flex flex-col items-center justify-center gap-6`}>
          <XMarkIcon
            onClick={() => setIsOpen(false)}
            className="absolute top-5 left-5 w-6 h-6 text-white cursor-pointer"
          />
          <li>
            <Link
              href="/services"
              aria-label="Services"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              aria-label="Portfolio"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              aria-label="About"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/insights"
              aria-label="Insights"
              onClick={() => setIsOpen(false)}
            >
              INSIGHTS
            </Link>
          </li>
        </ul>
        <div className="flex md:hidden gap-2">
          <Link
            href="https://www.tiktok.com/@gsdigitalanchor"
            aria-label="Tiktok"
          >
            <div className="border border-slate-50 rounded-full p-2">
              <Image src={tiktokIcon} alt="Instagram" className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/gsdigitalanchor/"
            onClick={() => setIsOpen(false)}
            aria-label="Instagram"
          >
            <div className="border border-[#AB7952] rounded-full p-2">
              <Image src={instagramIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/gs-digital-anchor/"
            onClick={() => setIsOpen(false)}
            aria-label="LinkedIn"
          >
            <div className="border border-slate-50 rounded-full p-2">
              <Image src={linkedinIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://x.com/gsdigitalanchor"
            onClick={() => setIsOpen(false)}
            aria-label="X / Twitter"
          >
            <div className="border border-[#AB7952] rounded-full p-2">
              <Image src={twitterIcon} alt="Twitter" className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="sm:hidden text-xs px-6 py-2 border border-slate-50 rounded-2xl hover:bg-slate-50 hover:text-slate-900"
          aria-label="Contact Us"
        >
          CONTACT
        </Link>
      </div>
      <ul className="hidden lg:flex gap-6 text-xs tracking-widest font-normal text-white">
        <li>
          <Link href="/services" aria-label="Services">
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="/portfolio" aria-label="Portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/about" aria-label="About">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/insights" aria-label="Insights">
            INSIGHTS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
