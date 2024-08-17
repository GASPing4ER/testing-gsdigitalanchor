import Value from "./value";

import { values } from "@/src/lib/data";

const OurValues = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <hr className="border-t border-[#AB7952] w-[75px] sm:w-[100px]" />
      {values.map((value) => {
        return (
          <>
            <Value key={value.title} {...value} />
            <hr className="border-t border-[#AB7952] w-[75px] sm:w-[100px]" />
          </>
        );
      })}
    </div>
  );
};

export default OurValues;
