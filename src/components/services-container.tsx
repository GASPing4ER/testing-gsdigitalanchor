"use client";

import { cormorant } from "@/src/lib/fonts";
import { useState } from "react";

import ServicesPagination from "./services-pagination";
import { servicesData } from "@/src/lib/data";
import Image from "next/image";

import luxuryLivingImg from "@/public/luxury-living.jpg";
import Link from "next/link";
import { fbq } from "../lib/utils";

const ServicesContainer = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  function handleNext() {
    setSelectedPhase((prevCount) => {
      if (prevCount === 3 - 1) {
        return 0;
      } else {
        return prevCount + 1;
      }
    });
    setSelectedService(0);
    fbq("track", "ButtonClick", {
      buttonName: "paginationNext",
    });
  }

  function handlePrev() {
    setSelectedPhase((prevCount) => {
      if (prevCount === 0) {
        return 3 - 1;
      } else {
        return prevCount - 1;
      }
    });
    setSelectedService(0);
    fbq("track", "ButtonClick", {
      buttonName: "paginationPrev",
    });
  }

  function handleServiceSelect(index: number) {
    setSelectedService(index);
    fbq("track", "ButtonClick", {
      buttonName: "selectService",
    });
  }

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col justify-center gap-6 p-6 pt-24 lg:p-24 bg-slate-50 text-slate-900"
        id="phase-section"
      >
        <div className="mt-[40px] mx-auto w-full lg:w-[976px] flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[#AB7952]">PHASE 0{selectedPhase + 1}</span>
            <h2 className={`${cormorant.className} text-2xl uppercase`}>
              {servicesData[selectedPhase].title}
            </h2>
            <p className="italic">{servicesData[selectedPhase].description}</p>
          </div>
          <ServicesPagination
            selectedPhase={selectedPhase}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
        <div className="mt-[20px] my-0 mx-auto lg:min-h-[616px] w-full lg:w-[976px] bg-white rounded-[8px] rounded-tr-[9px] flex flex-col lg:flex-row shadow-[0_3px_5px_rgba(0,0,0,0.07)] animate-intro">
          <div className="w-full lg:w-[340px]">
            <h1 className={`${cormorant.className} py-4 px-5 text-3xl`}>
              Services:
            </h1>
            <ul className="bg-white relative min-h-[140px] flex flex-1 flex-col">
              {servicesData[selectedPhase].services.map((service, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    selectedService === index ? "bg-slate-50" : "bg-white"
                  } h-[76px] hover:bg-slate-50 border-b border-[#ebeff1]`}
                  onClick={() => handleServiceSelect(index)}
                >
                  <div className="h-full w-full py-4 px-5 flex">
                    <div className="text-[13px] h-[46px] w-[38px] bg-slate-900 text-slate-50 rounded-[5px] flex justify-center items-center font-semibold mr-[13px]">
                      {index + 1}
                    </div>
                    <div className="self-center">
                      <h3 className="font-medium">{service.title}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <section className="flex-1 bg-slate-50 flex flex-col relative rounded-tr-xl rounded-br-lg pb-4">
            <Image
              src={luxuryLivingImg}
              alt="Luxury living"
              className="object-cover w-full h-[125px] rounded-tr-lg"
            />
            <div className="relative z-[1] mb-6 flex gap-4 py-4">
              <div className="pl-4 lg:pl-10">
                <div className="w-14 h-16 bg-[#AB7952] rounded-md flex items-center justify-center text-2xl font-semibold mb-3">
                  {selectedService + 1}
                </div>
              </div>
              <div className="pr-4 lg:pr-10">
                <h2 className="text-xl sm:text-2xl text-slate-900 font-medium">
                  {servicesData[selectedPhase].services[selectedService].title}
                </h2>
                <p className="text-xs sm:text-sm italic">
                  {
                    servicesData[selectedPhase].services[selectedService]
                      .description
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-col px-4 lg:px-10 gap-4 mb-4">
              <h3 className="font-medium text-xl uppercase">What we offer</h3>
              <div className="flex gap-2">
                {servicesData[selectedPhase].services[
                  selectedService
                ].details.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-900 text-slate-50 px-2 py-1 rounded-md"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm italic">
                {
                  servicesData[selectedPhase].services[selectedService].details
                    .offer
                }
              </p>
            </div>
            <div className="flex flex-col px-4 lg:px-10 gap-2 mt-6">
              <h3 className="font-medium text-xl uppercase">Reviews</h3>
              <div className="flex flex-col gap-2">
                {servicesData[selectedPhase].services[
                  selectedService
                ].details.reviews.map((review, index) => (
                  <p
                    key={index}
                    className="text-xs text-slate-900 italic px-2 py-1 rounded-md"
                  >
                    {review}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="mx-4 lg:mx-10 w-fit self-end mt-10 text-sm border-b border-slate-900"
            >
              Request a Free Consultation
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesContainer;
