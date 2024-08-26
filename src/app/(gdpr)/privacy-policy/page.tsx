import { cormorant } from "@/src/lib/fonts";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <div className="bg-slate-50 p-6 pt-24 sm:p-24 w-full text-slate-900">
        <div className="relative w-full min-h-screen flex flex-col gap-6 items-center text-center max-w-[600px] mx-auto">
          <h1 className={`${cormorant.className} text-5xl md:text-7xl pt-10`}>
            PRIVACY POLICY
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              INTRODUCTION
            </h2>
            <p className="italic text-sm md:text-base">
              At G.S. Digital Anchor, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data when you interact
              with our website, services, and communications.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              INFORMATION WE COLLECT
            </h2>
            <p className="italic text-sm md:text-base">
              We collect personal information necessary to provide our luxury
              marketing and website development services. This includes, but is
              not limited to:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <span className="font-medium">Personal Identifiers:</span> Name,
                email address, phone number, and other contact information.
              </li>
              <li>
                <span className="font-medium">Business Information:</span>
                Company name, job title, and industry.
              </li>
              <li>
                <span className="font-medium">Website Usage Data:</span> IP
                address, browser type, operating system, and browsing behavior
                on our site.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              HOW WE USE YOUR INFORMATION
            </h2>
            <p className="italic text-sm md:text-base">
              Your information is used to deliver personalized services, enhance
              your experience, and ensure the highest level of service. Specific
              uses include:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <span className="font-medium">Service Delivery:</span> To
                provide, manage, and customize our digital marketing and website
                development services.
              </li>
              <li>
                <span className="font-medium">Communication:</span> To send you
                updates, newsletters, and information relevant to your
                interests.
              </li>
              <li>
                <span className="font-medium">Analytics:</span> To analyze
                website usage and improve our offerings.
              </li>
              <li>
                <span className="font-medium">Legal Compliance:</span> To comply
                with legal obligations and protect our rights.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              INFORMATION SHARING
            </h2>
            <p className="italic text-sm md:text-base">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                <span className="font-medium">Trusted Partners:</span> Service
                providers who assist in delivering our services, under strict
                confidentiality agreements.
              </li>
              <li>
                <span className="font-medium">Legal Authorities:</span> When
                required by law or to protect our rights and interests.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              DATA SECURITY
            </h2>
            <p className="italic text-sm md:text-base">
              We employ advanced security measures to protect your personal
              information from unauthorized access, alteration, or destruction.
              However, please be aware that no method of online transmission is
              100% secure.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              YOUR RIGHTS
            </h2>
            <p className="italic text-sm md:text-base">
              You have the right to access, update, or request the deletion of
              your personal information. To exercise these rights, please
              contact us at{" "}
              <Link
                className="font-semibold"
                href="mailto:privacy@gsdigitalanchor.com"
              >
                privacy@gsdigitalanchor.com
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              UPDATES TO THIS POLICY
            </h2>
            <p className="italic text-sm md:text-base">
              We may update this Privacy Policy periodically. We encourage you
              to review this policy regularly to stay informed of any changes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
              CONTACT US
            </h2>
            <p className="italic text-sm md:text-base">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <Link
                className="font-semibold"
                href="mailto:privacy@gsdigitalanchor.com"
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

export default PrivacyPolicyPage;
