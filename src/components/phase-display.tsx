import React from "react";

import { cormorant } from "@/src/lib/fonts";
import { servicesData } from "@/src/lib/data";

type PhaseDisplayProps = {
  selectedOption: number;
};

const PhaseDisplay = ({ selectedOption }: PhaseDisplayProps) => {
  return (
    <div className="max-w-[700px] min-h-[450px] border border-slate-900 p-4 flex flex-col gap-4">
      <h3 className="text-[#AB7952]">PHASE O{selectedOption + 1}</h3>
      <h2 className={`${cormorant.className} text-4xl uppercase`}>
        {servicesData[selectedOption].title}
      </h2>
      <p className="italic text-sm">
        {servicesData[selectedOption].description}
      </p>
      <h4>Services:</h4>
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col gap-1 font-medium">
          {servicesData[selectedOption].services![0].title}
          <span className="block text-xs font-normal italic">
            {servicesData[selectedOption].services![0].description}
          </span>
        </li>
        <li className="flex flex-col gap-1 font-medium">
          {servicesData[selectedOption].services![1].title}
          <span className="block text-xs font-normal italic">
            {servicesData[selectedOption].services![1].description}
          </span>
        </li>
        <li className="flex flex-col gap-1 font-medium">
          {servicesData[selectedOption].services![2].title}
          <span className="block text-xs font-normal italic">
            {servicesData[selectedOption].services![2].description}
          </span>
        </li>
        <li className="flex flex-col gap-1 font-medium">
          {servicesData[selectedOption].services![3].title}
          <span className="block text-xs font-normal italic">
            {servicesData[selectedOption].services![3].description}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PhaseDisplay;
