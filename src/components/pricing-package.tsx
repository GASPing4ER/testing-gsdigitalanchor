"use client";

import { FormEvent, useState } from "react";
import { cormorant } from "../lib/fonts";
import { sendGAEvent } from "@next/third-parties/google";

export default function PricingPackage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Clear previous errors

    if (!name || !email) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/api/pricing-guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: name,
        }),
      });

      const data = await response.json();
      if (response.status >= 400) {
        setErrorMessage("Failed to subscribe. Please try again later.");
        console.error("Error subscribing:", data);
        return;
      }

      console.log("Successfully subscribed:", data);
      setIsSubmitted(true);
      setEmail("");
      setName("");
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error subscribing:", error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center p-28 bg-pricing-pattern bg-center gap-5 text-slate-900">
      <h2
        className={`${cormorant.className} text-4xl italic font-light text-center z-10`}
      >
        get our{" "}
        <span className="not-italic uppercase font-semibold text-[#AB7952]">
          packages & pricing
        </span>{" "}
        guide
      </h2>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="z-10 flex flex-col md:flex-row items-center"
        >
          <input
            name="name"
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-transparent border border-slate-900 p-2 m-1 placeholder:text-slate-900 text-sm w-[175px]"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border border-slate-900 p-2 m-1 placeholder:text-slate-900 text-sm w-[175px]"
          />
          <button
            type="submit"
            className="bg-slate-900 border border-slate-900 py-2 px-4 text-slate-50 cursor-pointer text-sm w-[175px] md:w-auto"
            aria-label="Subscribe"
            onClick={() =>
              sendGAEvent("event", "pricing_subscribed", {
                name: name,
                email: email,
              })
            }
          >
            SUBSCRIBE
          </button>
        </form>
      ) : (
        <p className="text-slate-900 font-medium text-center z-10">
          Thank you for subscribing! The guide has been sent to your email.
        </p>
      )}

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2 z-10">{errorMessage}</p>
      )}
    </div>
  );
}
