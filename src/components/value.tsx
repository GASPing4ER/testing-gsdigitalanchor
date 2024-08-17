import { cormorant } from "../lib/fonts";

type ValueProps = {
  title: string;
  description: string;
};

const Value = ({ title, description }: ValueProps) => {
  return (
    <div className="text-center flex flex-col gap-2">
      <h2
        className={`${cormorant.className} text-5xl sm:text-6xl font-semibold text-slate-50`}
      >
        {title}.
      </h2>
      <p className="text-sm sm:text-base italic text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default Value;
