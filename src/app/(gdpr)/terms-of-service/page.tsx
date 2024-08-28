import { cormorant } from "@/src/lib/fonts";
import Link from "next/link";

const TermsOfServicePage = () => {
  return (
    <main>
      <div className="bg-slate-50 p-6 pt-24 sm:p-24 w-full text-slate-900">
        <div className="relative w-full min-h-screen flex flex-col gap-6 items-center text-center">
          <h1 className={`${cormorant.className} text-5xl md:text-7xl pt-10`}>
            TERMS OF SERVICE
          </h1>
          <div className="max-w-[600px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                INTRODUCTION
              </h2>
              <p className="italic text-sm md:text-base">
                Welcome to G.S. Digital Anchor. By accessing our website and
                using our services, you agree to comply with and be bound by the
                following Terms of Service. Please read them carefully.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                SERVICES
              </h2>
              <p className="italic text-sm md:text-base">
                G.S. Digital Anchor provides luxury digital marketing and
                website development services. Our services are tailored to meet
                the unique needs of our clients, and the scope of work is
                defined in individual contracts.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                USER RESPONSIBILITES
              </h2>
              <p className="italic text-sm md:text-base">
                As a user of our website and services, you agree to:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <span className="font-medium">
                    Provide Accurate Information:
                  </span>{" "}
                  Ensure all information provided to us is accurate and up to
                  date.
                </li>
                <li>
                  <span className="font-medium">Use Our Services Legally:</span>{" "}
                  Not use our services for any illegal or unauthorized purpose.
                </li>
                <li>
                  <span className="font-medium">
                    Respect Intellectual Property:
                  </span>{" "}
                  Not copy, distribute, or modify any content from our website
                  without our explicit consent.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                PAYMENT TERMS
              </h2>
              <p className="italic text-sm md:text-base">
                Payments for services are due as outlined in the contract
                agreement. Failure to make timely payments may result in
                suspension or termination of services.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                CONFIDENTIALITY
              </h2>
              <p className="italic text-sm md:text-base">
                Both parties agree to maintain the confidentiality of any
                proprietary or sensitive information shared during the course of
                the relationship.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                LIMITATION OF LIABILITY
              </h2>
              <p className="italic text-sm md:text-base">
                G.S. Digital Anchor shall not be liable for any indirect,
                incidental, or consequential damages arising out of the use of
                our services. Our total liability will not exceed the amount
                paid for the services in question.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                TERMINATION
              </h2>
              <p className="italic text-sm md:text-base">
                We reserve the right to terminate or suspend your access to our
                services at any time, without notice, for any breach of these
                Terms of Service.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                GOVERNING LAW
              </h2>
              <p className="italic text-sm md:text-base">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of Ljubljana.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                CHANGES TO TERMS
              </h2>
              <p className="italic text-sm md:text-base">
                We may update these Terms of Service from time to time. The most
                current version will always be available on our website.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className={`${cormorant.className} text-2xl md:text-3xl`}>
                CONTACT US
              </h2>
              <p className="italic text-sm md:text-base">
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <Link
                  className="font-semibold"
                  href="mailto:info@gsdigitalanchor.com"
                  aria-label="Email us"
                >
                  info@gsdigitalanchor.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
