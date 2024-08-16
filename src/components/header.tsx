"use client";

import Image from "next/image";
import Logo from "./logo";
import Navigation from "./nav";

import { useEffect, useState } from "react";

import twitterIcon from "@/public/icons/socials/twitter.svg";
import instagramIcon from "@/public/icons/socials/instagram.svg";
import linkedinIcon from "@/public/icons/socials/linkedin.svg";

const Header = () => {
  const [headerBg, setHeaderBg] = useState("transparent");

  const handleScroll = () => {
    const section = document.getElementById("expertise-section");
    if (section) {
      const sectionTop = section!.offsetTop;
      const sectionBottom = sectionTop + section!.offsetHeight;
      const scrollY = window.scrollY;
      console.log(scrollY, sectionTop, sectionBottom);
      if (scrollY >= sectionTop) {
        setHeaderBg("blue"); // Change this to the color you want
      } else {
        setHeaderBg("transparent");
      }
    } else {
      setHeaderBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 ${
        headerBg === "transparent" ? "bg-transparent" : "bg-slate-900"
      } w-full flex items-center justify-center sm:justify-between border-b border-white text-white px-6 sm:px-20 py-6 z-20`}
    >
      <div className="flex items-center gap-6">
        <Logo />
        <div className="w-[1px] h-[25px] bg-white" />
        <Navigation />
      </div>
      <div className="hidden sm:flex items-center gap-16">
        <div className="hidden lg:flex gap-2">
          <div className="border border-white rounded-full p-2">
            <Image src={instagramIcon} alt="Twitter" className="w-4 h-4" />
          </div>
          <div className="border border-white rounded-full p-2">
            <Image src={linkedinIcon} alt="Twitter" className="w-4 h-4" />
          </div>
          <div className="border border-white rounded-full p-2">
            <Image src={twitterIcon} alt="Twitter" className="w-4 h-4" />
          </div>
        </div>
        <button className="text-xs px-6 py-2 border border-white rounded-2xl">
          CONTACT
        </button>
      </div>
    </header>
  );
};

export default Header;
