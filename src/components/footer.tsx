"use client";

import { FormEvent, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { cormorant } from "../lib/fonts";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { addNewsletterToFirebase } from "../lib/actions";
import { fbq } from "../lib/utils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Clear previous errors

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    await addNewsletterToFirebase({ email });
    fbq("track", "CompleteRegistration", {
      buttonName: "newsletter",
      email,
    });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.status >= 400) {
        setErrorMessage(
          "Failed to subscribe to the newsletter. Please try again later."
        );
        console.error("Error subscribing to the newsletter:", data);
        return;
      }

      console.log("Successfully subscribed:", data);
      setIsSubscribed(true);
      setEmail(""); // Reset email input
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error subscribing to the newsletter:", error);
    }
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-50 flex flex-col justify-center items-center gap-12 p-10 sm:px-0 sm:py-12 border-t border-slate-50">
      {!isSubscribed && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-center font-semibold">
            SIGN UP FOR OUR NEWSLETTER:
          </h2>
          <div className="sm:border-b sm:border-slate-50 w-fit flex flex-col sm:flex-row gap-4 items-start sm:items-center ml-[10px] sm:ml-0">
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
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
      )}
      {isSubscribed && (
        <p className="text-center text-slate-50">
          Thank you for subscribing to our newsletter!
        </p>
      )}

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
                  href="https://www.tiktok.com/@gsdigitalanchor"
                  aria-label="Tiktok"
                >
                  Tiktok
                </Link>
              </li>
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
        <p>&copy; 2025 G.S. Digital Anchor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
