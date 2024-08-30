"use client";

import { FormEvent, useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { cormorant } from "../lib/fonts";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      console.log("Fill out the form!");
      return;
    }
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();
      if (response.status >= 400) {
        console.error("Error subscribing to the newsletter:", data);
        return;
      }
      console.log("Successfully subscribed:", data);
    } catch (error) {
      console.error("Error subscribing to the newsletter:", error);
    }
    setEmail("");
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-50 flex flex-col justify-center items-center gap-12 p-10 sm:px-0 sm:py-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button
            type="submit"
            className="cursor-pointer text-sm border-b border-slate-50 sm:border-none"
            aria-label="Subscribe"
            onClick={() =>
              sendGAEvent("event", "newsletter_subscribed", {
                email: email,
              })
            }
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
      <div className="flex flex-col sm:flex-row sm:text-left gap-10 sm:gap-20">
        <div className="flex gap-10 sm:gap-20">
          <div className="flex flex-col gap-3">
            <h2 className={`${cormorant.className} font-bold text-lg`}>INFO</h2>
            <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
              <li>
                <Link href="privacy-policy" aria-label="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="terms-of-service" aria-label="Terms of Service">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="cookie-policy" aria-label="Cookie Policy">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className={`${cormorant.className} font-bold text-lg`}>
              COMPANY
            </h2>
            <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
              <li>
                <Link href="/about" aria-label="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" aria-label="Our Expertise">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/portfolio" aria-label="Portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-10 sm:gap-20">
          <div className="flex flex-col gap-3">
            <h2 className={`${cormorant.className} font-bold text-lg`}>
              SOCIAL
            </h2>
            <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
              <li>
                <Link
                  href="https://www.instagram.com/gsdigitalanchor/"
                  aria-label="Instagram"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/gs-digital-anchor/"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com" aria-label="X / Twitter">
                  X / Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className={`${cormorant.className} font-bold text-lg`}>
              CONTACT
            </h2>
            <ul className="text-slate-300 text-xs md:text-sm flex flex-col gap-1">
              <li>
                <Link
                  href="mailto:info@gsdigitalanchor.com"
                  aria-label="Email us"
                >
                  info@gsdigitalanchor.com
                </Link>
              </li>
              <li>
                <Link href="callto:+38668173209" aria-label="Call us">
                  +386 68 173 209
                </Link>
              </li>
              <li>Ljubljana, Slovenia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-slate-300 text-sm text-center">
        <p>&copy; 2024 G.S. Digital Anchor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
