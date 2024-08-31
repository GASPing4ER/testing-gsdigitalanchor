import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type ServicesPaginationProps = {
  selectedPhase: number;
  handlePrev: () => void;
  handleNext: () => void;
};

const ServicesPagination = ({
  selectedPhase,
  handlePrev,
  handleNext,
}: ServicesPaginationProps) => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="py-2 px-4 rounded-2xl text-sm"
        onClick={() => handlePrev()}
        aria-label="Previous"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <span className="text-lg">{selectedPhase + 1}/3</span>
      <button
        className="py-2 px-4 rounded-2xl text-sm"
        onClick={() => handleNext()}
        aria-label="Next"
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ServicesPagination;
