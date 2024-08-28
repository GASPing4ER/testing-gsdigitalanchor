import { cormorant } from "@/src/lib/fonts";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen w-full p-24 flex flex-col gap-10 items-center justify-center bg-slate-50 text-slate-900 text-center">
      <h1 className={`${cormorant.className} text-5xl sm:text-7xl`}>
        Thank You!
      </h1>
      <p>We have received your message and will get back to you shortly.</p>
      <Link
        href="/"
        className="bg-slate-900 text-slate-50 px-6 py-2 rounded-xl"
      >
        Return back home
      </Link>
    </div>
  );
};

export default ThankYouPage;
