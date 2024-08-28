import { cormorant } from "@/src/lib/fonts";
import Link from "next/link";

const CookiePolicyPage = () => {
  return (
    <main>
      <div className="bg-slate-50 p-6 pt-24 sm:p-24 w-full text-slate-900">
        <div className="relative w-full min-h-screen flex flex-col gap-6 items-center text-center max-w-[600px] mx-auto">
          <h1 className={`${cormorant.className} text-5xl md:text-7xl pt-10`}>
            COOKIE POLICY
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              INTRODUCTION
            </h2>
            <p className="italic text-sm md:text-base">
              G.S. Digital Anchor uses cookies to enhance your experience on our
              website. This Cookie Policy explains what cookies are, how we use
              them, and your choices regarding their use.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              WHAT ARE COOKIES?
            </h2>
            <p className="italic text-sm md:text-base">
              Cookies are small text files that are stored on your device when
              you visit a website. They are widely used to make websites work
              more efficiently and to provide information to the site owners.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              HOW WE USE COOKIES
            </h2>
            <p className="italic text-sm md:text-base">We use cookies to:</p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <span className="font-medium">Enhance User Experience:</span>{" "}
                Necessary for the operation of our website.
              </li>
              <li>
                <span className="font-medium">Performance Cookies:</span> Help
                us understand how visitors use our site, so we can improve it.
              </li>
              <li>
                <span className="font-medium">Functionality Cookies:</span>{" "}
                Allow us to remember your preferences and provide enhanced
                features.
              </li>
              <li>
                <span className="font-medium">Targeting Cookies:</span> Used to
                deliver personalized advertisements relevant to your interests.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              MANAGING COOKIES
            </h2>
            <p className="italic text-sm md:text-base">
              You can control and manage cookies through your browser settings.
              However, disabling cookies may affect your ability to use certain
              features of our website.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              THIRD PARTY COOKIES
            </h2>
            <p className="italic text-sm md:text-base">
              We may also allow third-party service providers to place cookies
              on your device to assist us in analyzing website traffic and
              providing tailored content.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              CHANGES TO THIS POLICY
            </h2>
            <p className="italic text-sm md:text-base">
              We may update our Cookie Policy from time to time to reflect
              changes in our practices. The latest version will always be
              available on our website.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              CONTACT US
            </h2>
            <p className="italic text-sm md:text-base">
              If you have any questions about our use of cookies, please contact
              us at {""}
              <Link
                className="font-semibold"
                href="mailto:privacy@gsdigitalanchor.com"
                aria-label="Email us"
              >
                privacy@gsdigitalanchor.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
