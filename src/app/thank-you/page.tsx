import { cormorant } from "@/src/lib/fonts";
import Link from "next/link";
import Script from "next/script";

const ThankYouPage = () => {
  return (
    <>
      <head>
        <Script id="conversion-tracking" strategy="lazyOnload">
          {`
          window.gtag("event", "conversion_event_submit_lead_form", {
            send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
          });
        `}
        </Script>
      </head>
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
    </>
  );
};

export default ThankYouPage;
