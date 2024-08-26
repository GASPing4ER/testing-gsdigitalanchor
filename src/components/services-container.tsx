"use client";

import { cormorant } from "@/src/lib/fonts";
import { useState } from "react";

import ServicesForm from "@/src/components/services-form";
import PhaseProgress from "@/src/components/phase-progress";
import PhaseDisplay from "@/src/components/phase-display";

const ServicesContainer = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (option: number) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div
        className="w-full min-h-screen px-6 py-24 sm:p-24 flex flex-col justify-center gap-8 bg-slate-900"
        id="first-section"
      >
        <h3 className="text-[#AB7952] uppercase text-xs tracking-widest">
          Discover the Next Step in Elevating Your Luxury Brand
        </h3>
        <h1
          className={`${cormorant.className} text-4xl sm:text-6xl font-semibold text-slate-50`}
        >
          Find Your Perfect Starting Point
        </h1>
        <p className="text-slate-50 max-w-[900px] italic">
          Whether you’re just starting out or looking to refine your digital
          presence, our tailored approach ensures you’re in the right hands.
          Begin by telling us a bit about your brand, and we’ll guide you to the
          services that best match your current needs.
        </p>
        <ServicesForm
          selectedOption={selectedOption}
          handleChange={handleChange}
        />
      </div>
      <div
        className="w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-6 p-6 lg:p-24 bg-slate-50"
        id="phase-section"
      >
        <PhaseProgress
          selectedOption={selectedOption}
          handleChange={handleChange}
        />
        <PhaseDisplay selectedOption={selectedOption} />
      </div>
    </>
  );
};

export default ServicesContainer;
