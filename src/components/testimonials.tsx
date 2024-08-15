"use client";

import { useState } from "react";
import { cormorant } from "../lib/fonts";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const testimonialsData = [
  {
    headline: "'Completely adaptable to any wishes you may have!'",
    quote:
      "I have been very pleased with Gašper's services, especially in terms of quick and consistent improvements.",
    author: "Gal Resnik, Founder of Impero",
  },
  {
    headline: "'I couldn't be happier with the results!'",
    quote:
      "I had the pleasure of working with Gašper, a talented web developer, and I couldn't be happier with the results. He created a stunning and luxurious website for my business that exceeded all my expectations.",
    author: "Lucija Šimec, Founder of LaMaisonDigitale",
  },
  {
    headline:
      "Bringing Your Vision to Life with Creativity, Simplicity, and Uniqueness",
    quote:
      "Gašper is an active listener and understands what the client would like to create. He has a good eye for visual perspective and is a very creative person. Simplicity and uniqueness have always been something I wanted to achieve on my webpage, and Digital Anchor did just that.",
    author: "Nastasya Prihoda, Founder of NP Mental Model",
  },
];

export default function Testimonials() {
  const [count, setCount] = useState(0);

  const testimonialForm = testimonialsData.map((testimonial, index) => {
    return (
      <div key={index} className="flex flex-col items-center text-center gap-7">
        <h2
          className={`${cormorant.className} uppercase text-5xl max-w-[700px]`}
        >
          {testimonial.headline}
        </h2>
        <p className="max-w-[700px] text-lg italic">{testimonial.quote}</p>
        <h3 className={`${cormorant.className} text-lg font-medium`}>
          {testimonial.author}
        </h3>
      </div>
    );
  });

  function handleNext() {
    setCount((prevCount) => {
      if (prevCount === testimonialsData.length - 1) {
        return 0;
      } else {
        return prevCount + 1;
      }
    });
  }

  function handlePrev() {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return testimonialsData.length - 1;
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <div className="flex justify-center items-center text-slate-50 gap-7 p-24 bg-slate-900">
      <button
        className="py-2 px-4 rounded-2xl text-sm"
        onClick={() => handlePrev()}
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      {testimonialForm[count]}
      <button
        className="py-2 px-4 rounded-2xl text-sm"
        onClick={() => handleNext()}
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
