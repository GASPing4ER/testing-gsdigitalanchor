import Logo from "./logo";
import Navigation from "./nav";

import Link from "next/link";
import Socials from "./socials";

const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 bg-slate-900 w-full flex items-center justify-center sm:justify-between border-b border-slate-50 text-slate-50 px-6 sm:px-16 xl:px-20 py-6 z-20`}
    >
      <div className="flex items-center gap-6">
        <Logo />
        <div className="w-[1px] h-[25px] bg-slate-50" />
        <Navigation />
      </div>
      <div className="hidden sm:flex items-center gap-6 xl:gap-16">
        <Socials />
        <Link
          href="/contact"
          className="text-xs px-6 py-2 border text-slate-900 border-slate-50 bg-slate-50 rounded-2xl hover:bg-transparent hover:text-slate-50 font-medium"
          aria-label="Contact Us"
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
