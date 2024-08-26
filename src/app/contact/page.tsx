import { Metadata } from "next";

import { cormorant } from "@/src/lib/fonts";

import ContactForm from "@/src/components/contact-form";
import PricingPackage from "@/src/components/pricing-package";

export const metadata: Metadata = {
  title: "Contact Us | G.S. Digital Anchor - Get in Touch",
  description:
    "Ready to grow your online presence? Contact G.S. Digital Anchor today. We're here to answer your questions and help you achieve your marketing goals.",
  keywords: [
    "Contact luxury marketing agency",
    "Get in touch with G.S. Digital Anchor for luxury brands",
    "Exclusive marketing consultation",
    "Request luxury marketing services",
    "Inquiries for high-end digital marketing",
    "Contact for luxury website development",
    "Schedule a consultation with our elite marketing team",
  ],
};

const ContactPage = () => {
  return (
    <main>
      <div className="bg-slate-900 p-6 pt-24 sm:p-24 w-full">
        <div className="relative w-full h-screen flex flex-col items-center text-center max-w-[600px] mx-auto">
          <h1
            className={`${cormorant.className} text-slate-50 text-7xl pt-10 pb-16 md:pb-24`}
          >
            INQUIRE
          </h1>
          <ContactForm />
        </div>
      </div>
      <PricingPackage />
    </main>
  );
};

export default ContactPage;
