import { cormorant } from "@/src/lib/fonts";

type HeadingProps = {
  title: string;
};
const Heading = ({ title }: HeadingProps) => {
  return (
    <h2 className={`${cormorant.className} text-3xl font-semibold`}>{title}</h2>
  );
};

export default Heading;
