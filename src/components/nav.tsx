import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Bars3Icon className="lg:hidden w-6 h-6 text-white" />
      <ul className="hidden lg:flex gap-6 text-xs tracking-widest font-normal text-white">
        <li>
          <Link href="/services">SERVICES</Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/insights">INSIGHTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
