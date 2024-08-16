"use client";

import { FormEvent, useState } from "react";
import { cormorant } from "../lib/fonts";

export default function PricingPackage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Fill out the form!");
      return;
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center p-28 bg-pricing-pattern bg-center gap-5 text-slate-900">
      <h2
        className={`${cormorant.className} text-4xl italic font-light text-center z-10`}
      >
        get our{" "}
        <span className="not-italic uppercase font-semibold">
          packages & pricing
        </span>{" "}
        guide
      </h2>
      <form onSubmit={handleSubmit} className="z-10">
        <input
          name="name"
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-transparent border border-slate-900 p-2 m-1 placeholder:text-slate-900 text-sm"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-transparent border border-slate-900 p-2 m-1 placeholder:text-slate-900 text-sm"
        />
        <button className="bg-slate-900 border border-slate-900 py-2 px-4 text-slate-50 cursor-pointer text-sm">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
