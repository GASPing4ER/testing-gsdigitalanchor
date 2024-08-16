import { Bars3Icon } from "@heroicons/react/24/outline";

const Navigation = () => {
  return (
    <nav>
      <Bars3Icon className="lg:hidden w-6 h-6 text-white" />
      <ul className="hidden lg:flex gap-6 text-xs tracking-widest font-normal text-white">
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>ABOUT</li>
        <li>INSIGHTS</li>
      </ul>
    </nav>
  );
};

export default Navigation;
