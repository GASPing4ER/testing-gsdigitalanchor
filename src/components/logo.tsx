import Link from "next/link";
import { cormorant } from "../lib/fonts";

const Logo = () => {
  return (
    <div className={`${cormorant.className} text-lg`}>
      <Link href="/">G.S. DIGITAL ANCHOR</Link>
    </div>
  );
};

export default Logo;
