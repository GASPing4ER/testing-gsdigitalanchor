import { cn } from "@/src/lib/utils";

const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen px-6 md:px-20 lg:px-40 bg-slate-50 text-slate-900",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
