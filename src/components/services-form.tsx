import Link from "next/link";
import { cormorant } from "../lib/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ServicesFormProps = {
  selectedOption: number;
  handleChange: (option: number) => void;
};

const ServicesForm = ({ selectedOption, handleChange }: ServicesFormProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className={`${cormorant.className} text-[#AB7952] text-3xl`}>
        Where are you in your brand’s journey?
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className={`${
            selectedOption === 0 ? "border-[#AB7952]" : "border-slate-50"
          } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
          onClick={() => handleChange(0)}
        >
          <h3 className="uppercase text-slate-50">Just Starting Out</h3>
          <p className="text-slate-300 text-sm italic">
            We’re a new brand, and we need everything from strategy to
            execution.
          </p>
        </div>
        <div
          className={`${
            selectedOption === 1 ? "border-[#AB7952]" : "border-slate-50"
          } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
          onClick={() => handleChange(1)}
        >
          <h3 className="uppercase text-slate-50">Establishing Our Presence</h3>
          <p className="text-slate-300 text-sm italic">
            Our brand is taking shape, but we need to build and refine our
            digital assets.
          </p>
        </div>
        <div
          className={`${
            selectedOption === 2 ? "border-[#AB7952]" : "border-slate-50"
          } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
          onClick={() => handleChange(2)}
        >
          <h3 className="uppercase text-slate-50">Growing & Scaling</h3>
          <p className="text-slate-300 text-sm italic">
            We’re ready to amplify our reach and engage a wider audience.
          </p>
        </div>
        <div
          className={`${
            selectedOption === 3 ? "border-[#AB7952]" : "border-slate-50"
          } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
          onClick={() => handleChange(3)}
        >
          <h3 className="uppercase text-slate-50">Optimizing & Innovating</h3>
          <p className="text-slate-300 text-sm italic">
            We’ve established our brand, and now we need to refine, innovate,
            and maintain our edge.
          </p>
        </div>
        <div
          className={`${
            selectedOption === 4 ? "border-[#AB7952]" : "border-slate-50"
          } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
          onClick={() => handleChange(4)}
        >
          <h3 className="uppercase text-slate-50">Elevating & Maintaining</h3>
          <p className="text-slate-300 text-sm italic">
            We’ve built our brand, and now we want to ensure it continues to
            grow and thrive.
          </p>
        </div>
      </div>
      <Link
        href="#phase-section"
        className="text-slate-50 hover:text-[#AB7952] w-fit py-2 px-4 border border-slate-50 hover:border-[#AB7952] rounded-full flex gap-4"
        aria-label="Get started with G.S. Digital Anchor"
      >
        GET STARTED
        <ArrowRightIcon className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default ServicesForm;
