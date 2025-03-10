import { cn } from "@/src/lib/utils";

type ParagraphProps = {
  text: string;
  className?: string;
};
const Paragraph = ({ text, className }: ParagraphProps) => {
  return <p className={cn("text-sm max-w-[500px]", className)}>{text}</p>;
};

export default Paragraph;
