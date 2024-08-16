"use client";

import { useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { cormorant } from "../lib/fonts";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-slate-900 text-slate-50 flex flex-col justify-center items-center gap-12 p-10 sm:px-0 sm:py-12">
      <form className="flex flex-col gap-12">
        <h2 className="text-center font-semibold">
          SIGN UP FOR OUR NEWSLETTER:
        </h2>
        <div className="sm:border-b sm:border-slate-50 w-fit flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex gap-2 items-center">
            <EnvelopeIcon className="w-5 h-5 text-slate-50" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent sm:p-2 placeholder:text-slate-50 text-sm min-w-64"
            />
          </div>
          <button className="cursor-pointer text-sm border-b border-slate-50 sm:border-none">
            SUBSCRIBE
          </button>
        </div>
      </form>
      <div className="flex flex-col sm:flex-row text-center sm:text-left gap-10 sm:gap-20">
        <div className="flex flex-col gap-3">
          <h2 className={`${cormorant.className} font-bold text-lg`}>INFO</h2>
          <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={`${cormorant.className} font-bold text-lg`}>
            COMPANY
          </h2>
          <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
            <li>About Us</li>
            <li>Our Expertise</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={`${cormorant.className} font-bold text-lg`}>SOCIAL</h2>
          <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>X / Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={`${cormorant.className} font-bold text-lg`}>
            CONTACT
          </h2>
          <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
            <li>info@gsdigitalanchor.com</li>
            <li>+386 68 173 209</li>
            <li>Ljubljana, Slovenia</li>
          </ul>
        </div>
      </div>
      <div className="text-slate-300 text-sm text-center">
        <p>&copy; 2024 G.S. Digital Anchor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
