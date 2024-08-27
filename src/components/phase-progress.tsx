import { CheckIcon } from "@heroicons/react/24/outline";
import { cormorant } from "../lib/fonts";

type PhaseProgressProps = {
  selectedOption: number;
  handleChange: (option: number) => void;
};

const PhaseProgress = ({
  selectedOption,
  handleChange,
}: PhaseProgressProps) => {
  return (
    <div className="flex flex-row lg:flex-col gap-4 sm:gap-1 items-center lg:items-start">
      <div className="flex gap-4 items-center">
        <span
          onClick={() => handleChange(0)}
          className={`${
            selectedOption >= 0
              ? "bg-[#AB7952] text-slate-50"
              : "bg-slate-500/20 text-slate-900"
          } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        >
          {selectedOption > 0 ? <CheckIcon className="w-4 h-4" /> : "01"}
        </span>
        <h3
          className={`${
            cormorant.className
          } hidden lg:block font-semibold text-sm ${
            selectedOption >= 0 ? "text-slate-900" : "text-slate-500/50"
          }`}
        >
          STRATEGY & CONSULTATION
        </h3>
      </div>
      <div
        className={`hidden sm:block w-[50px] lg:w-[2px] rounded-lg h-[2px] lg:h-[50px] ${
          selectedOption > 0 ? "bg-[#AB7952]" : "bg-slate-500/20"
        } lg:ml-[20px]`}
      />
      <div className="flex gap-4 items-center">
        <span
          onClick={() => handleChange(1)}
          className={`${
            selectedOption >= 1
              ? "bg-[#AB7952] text-slate-50"
              : "bg-slate-500/20 text-slate-900"
          } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        >
          {selectedOption > 1 ? <CheckIcon className="w-4 h-4" /> : "02"}
        </span>
        <h3
          className={`${
            cormorant.className
          } hidden lg:block font-semibold text-sm ${
            selectedOption >= 1 ? "text-slate-900" : "text-slate-500/50"
          }`}
        >
          BRANDING & DEVELOPMENT
        </h3>
      </div>
      <div
        className={`hidden sm:block w-[50px] lg:w-[2px] rounded-lg h-[2px] lg:h-[50px] ${
          selectedOption > 1 ? "bg-[#AB7952]" : "bg-slate-500/20"
        } ml-[20px]`}
      />
      <div className="flex gap-4 items-center">
        <span
          onClick={() => handleChange(2)}
          className={`${
            selectedOption >= 2
              ? "bg-[#AB7952] text-slate-50"
              : "bg-slate-500/20 text-slate-900"
          } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        >
          {selectedOption > 2 ? <CheckIcon className="w-4 h-4" /> : "03"}
        </span>
        <h3
          className={`${
            cormorant.className
          } hidden lg:block font-semibold text-sm ${
            selectedOption >= 2 ? "text-slate-900" : "text-slate-500/50"
          }`}
        >
          MARKETING & EXPANSION
        </h3>
      </div>
      <div
        className={`hidden sm:block w-[50px] lg:w-[2px] rounded-lg h-[2px] lg:h-[50px] ${
          selectedOption > 2 ? "bg-[#AB7952]" : "bg-slate-500/20"
        } ml-[20px]`}
      />
      <div className="flex gap-4 items-center">
        <span
          onClick={() => handleChange(3)}
          className={`${
            selectedOption >= 3
              ? "bg-[#AB7952] text-slate-50"
              : "bg-slate-500/20 text-slate-900"
          } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        >
          {selectedOption > 3 ? <CheckIcon className="w-4 h-4" /> : "04"}
        </span>
        <h3
          className={`${
            cormorant.className
          } hidden lg:block font-semibold text-sm ${
            selectedOption >= 3 ? "text-slate-900" : "text-slate-500/50"
          }`}
        >
          REFINEMENT & OPTIMIZATION
        </h3>
      </div>
      <div
        className={`hidden sm:block w-[50px] lg:w-[2px] rounded-lg h-[2px] lg:h-[50px] ${
          selectedOption > 3 ? "bg-[#AB7952]" : "bg-slate-500/20"
        } ml-[20px]`}
      />
      <div className="flex gap-4 items-center">
        <span
          onClick={() => handleChange(4)}
          className={`${
            selectedOption >= 4
              ? "bg-[#AB7952] text-slate-50"
              : "bg-slate-500/20 text-slate-900"
          } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
        >
          {selectedOption > 4 ? <CheckIcon className="w-4 h-4" /> : "05"}
        </span>
        <h3
          className={`${
            cormorant.className
          } hidden lg:block font-semibold text-sm ${
            selectedOption >= 4 ? "text-slate-900" : "text-slate-500/50"
          }`}
        >
          ELEVATION & MAINTENANCE
        </h3>
      </div>
    </div>
  );
};

export default PhaseProgress;
