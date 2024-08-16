"use client";

import { cormorant } from "@/src/lib/fonts";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const servicesData = [
  {},
  {
    title: "Discovery & Strategy",
    description:
      "For brands that are just starting out and need to build a strong foundation.",
    services: [
      {
        title: "Digital Strategy & Consulting",
        description:
          "Crafting a tailored digital blueprint to guide your brand’s entry into the market.",
      },
      {
        title: "Market Research & Analysis",
        description:
          "Understanding your target audience, competitors, and market trends to position your brand effectively.",
      },
      {
        title: "Brand Discovery",
        description:
          "Defining your brand’s core values, mission, and unique selling propositions.",
      },
      {
        title: "Content Strategy",
        description:
          "Planning content that resonates with your target audience and aligns with your brand’s goals.",
      },
    ],
  },
  {
    title: "Branding & Development",
    description:
      "For brands that are established and need to build or refine their digital identity and assets.",
    services: [
      {
        title: "Branding & Identity",
        description:
          "Developing a sophisticated and cohesive brand identity that reflects luxury and exclusivity.",
      },
      {
        title: "Web Design & Development",
        description:
          "Creating elegant, user-friendly websites that embody your brand’s essence.",
      },
      {
        title: "Content Creation",
        description:
          "Producing high-end photography, videography, and copywriting that showcase your brand’s luxury appeal.",
      },
      {
        title: "Visual Identity & Design Systems",
        description:
          "Establishing a consistent visual language across all platforms and touchpoints.",
      },
    ],
  },
  {
    title: "Marketing & Expansion",
    description:
      "For brands looking to increase their reach & engage a broader audience.",
    services: [
      {
        title: "Digital Marketing",
        description:
          "Implementing targeted digital campaigns to boost brand visibility and engagement.",
      },
      {
        title: "Paid Media & Advertising",
        description:
          "Strategic ad placements on premium platforms to reach high-net-worth audiences.",
      },
      {
        title: "Social Media Management",
        description:
          "Building and nurturing a community of brand advocates through curated social content.",
      },
      {
        title: "Influencer Partnerships",
        description:
          "Collaborating with luxury influencers to amplify your brand's presence.",
      },
    ],
  },
  {
    title: "Refinement & Optimization",
    description:
      "For established brands aiming to stay ahead of the competition.",
    services: [
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Enhancing your website and campaigns to increase conversions and maximize ROI.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Leveraging data to gain insights into consumer behavior and refine your strategies.",
      },
      {
        title: "A/B Testing & Experimentation",
        description:
          "Testing different approaches to discover what resonates most with your audience.",
      },
      {
        title: "Rebranding & Digital Transformation",
        description:
          "Refreshing your brand's image and strategies to stay relevant in an evolving market.",
      },
    ],
  },
  {
    title: "Elevation & Maintenance",
    description:
      "For brands that have completed the foundational work and are now focused on growth.",
    services: [
      {
        title: "Social Media & Community Management",
        description:
          "Engaging and growing your online community with consistent, high-touch interactions and content updates.",
      },
      {
        title: "Website Optimization & Maintenance",
        description:
          "Regularly updating your website and content to ensure it remains optimized for SEO and UX.",
      },
      {
        title: "Paid Media Management",
        description:
          "Continuously optimizing ad spend and targeting to maximize ROI.",
      },
      {
        title: "Conversion Rate Optimization (CRO) Updates",
        description:
          "Ongoing testing and tweaks to enhance user experience and conversion rates.",
      },
    ],
  },
];

const ServicesPage = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleChange = (option: number) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with option:", selectedOption);
  };

  return (
    <main className="min-h-screen w-full">
      <div
        className="w-full h-screen p-6 sm:p-24 flex flex-col justify-center gap-8 bg-slate-900"
        id="first-section"
      >
        <h3 className="text-[#AB7952] uppercase text-xs tracking-widest">
          Discover the Next Step in Elevating Your Luxury Brand
        </h3>
        <h1
          className={`${cormorant.className} text-6xl font-semibold text-slate-50`}
        >
          Find Your Perfect Starting Point
        </h1>
        <p className="text-slate-50 max-w-[900px] italic">
          Whether you’re just starting out or looking to refine your digital
          presence, our tailored approach ensures you’re in the right hands.
          Begin by telling us a bit about your brand, and we’ll guide you to the
          services that best match your current needs.
        </p>
        <div className="flex flex-col gap-8">
          <h2 className={`${cormorant.className} text-[#AB7952] text-3xl`}>
            Where are you in your brand’s journey?
          </h2>
          <div className="flex gap-4">
            <div
              className={`${
                selectedOption === 1 ? "border-[#AB7952]" : "border-slate-50"
              } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
              onClick={() => handleChange(1)}
            >
              <h3 className="uppercase text-slate-50">Just Starting Out</h3>
              <p className="text-slate-300 text-sm italic">
                We’re a new brand, and we need everything from strategy to
                execution.
              </p>
            </div>
            <div
              className={`${
                selectedOption === 2 ? "border-[#AB7952]" : "border-slate-50"
              } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
              onClick={() => handleChange(2)}
            >
              <h3 className="uppercase text-slate-50">
                Establishing Our Presence
              </h3>
              <p className="text-slate-300 text-sm italic">
                Our brand is taking shape, but we need to build and refine our
                digital assets.
              </p>
            </div>
            <div
              className={`${
                selectedOption === 3 ? "border-[#AB7952]" : "border-slate-50"
              } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
              onClick={() => handleChange(3)}
            >
              <h3 className="uppercase text-slate-50">Growing & Scaling</h3>
              <p className="text-slate-300 text-sm italic">
                We’re ready to amplify our reach and engage a wider audience.
              </p>
            </div>
            <div
              className={`${
                selectedOption === 4 ? "border-[#AB7952]" : "border-slate-50"
              } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
              onClick={() => handleChange(4)}
            >
              <h3 className="uppercase text-slate-50">
                Optimizing & Innovating
              </h3>
              <p className="text-slate-300 text-sm italic">
                We’ve established our brand, and now we need to refine,
                innovate, and maintain our edge.
              </p>
            </div>
            <div
              className={`${
                selectedOption === 5 ? "border-[#AB7952]" : "border-slate-50"
              } p-4 border flex flex-col gap-2 flex-1 hover:border-[#AB7952] cursor-pointer`}
              onClick={() => handleChange(5)}
            >
              <h3 className="uppercase text-slate-50">
                Elevating & Maintaining
              </h3>
              <p className="text-slate-300 text-sm italic">
                We’ve built our brand, and now we want to ensure it continues to
                grow and thrive.
              </p>
            </div>
          </div>
          <Link
            href="#phase-section"
            className="text-slate-50 hover:text-[#AB7952] w-fit py-2 px-4 border border-slate-50 hover:border-[#AB7952] rounded-full flex gap-4"
          >
            GET STARTED
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div
        className="w-full h-screen flex items-center justify-center gap-6 p-24 bg-slate-50"
        id="phase-section"
      >
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleChange(1)}
              className={`${
                selectedOption >= 1
                  ? "bg-[#AB7952] text-slate-50"
                  : "bg-slate-500/20 text-slate-900"
              } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
            >
              {selectedOption > 1 ? <CheckIcon className="w-4 h-4" /> : "01"}
            </span>
            <h3
              className={`${cormorant.className} font-semibold text-sm ${
                selectedOption >= 1 ? "text-slate-900" : "text-slate-500/50"
              }`}
            >
              DISCOVERY & STRATEGY
            </h3>
          </div>
          <div
            className={`w-[2px] rounded-lg h-[50px] ${
              selectedOption > 1 ? "bg-[#AB7952]" : "bg-slate-500/20"
            } ml-[20px]`}
          />
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleChange(2)}
              className={`${
                selectedOption >= 2
                  ? "bg-[#AB7952] text-slate-50"
                  : "bg-slate-500/20 text-slate-900"
              } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
            >
              {selectedOption > 2 ? <CheckIcon className="w-4 h-4" /> : "02"}
            </span>
            <h3
              className={`${cormorant.className} font-semibold text-sm ${
                selectedOption >= 2 ? "text-slate-900" : "text-slate-500/50"
              }`}
            >
              BRANDING & DEVELOPMENT
            </h3>
          </div>
          <div
            className={`w-[2px] rounded-lg h-[50px] ${
              selectedOption > 2 ? "bg-[#AB7952]" : "bg-slate-500/20"
            } ml-[20px]`}
          />
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleChange(3)}
              className={`${
                selectedOption >= 3
                  ? "bg-[#AB7952] text-slate-50"
                  : "bg-slate-500/20 text-slate-900"
              } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
            >
              {selectedOption > 3 ? <CheckIcon className="w-4 h-4" /> : "03"}
            </span>
            <h3
              className={`${cormorant.className} font-semibold text-sm ${
                selectedOption >= 3 ? "text-slate-900" : "text-slate-500/50"
              }`}
            >
              MARKETING & EXPANSION
            </h3>
          </div>
          <div
            className={`w-[2px] rounded-lg h-[50px] ${
              selectedOption > 3 ? "bg-[#AB7952]" : "bg-slate-500/20"
            } ml-[20px]`}
          />
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleChange(4)}
              className={`${
                selectedOption >= 4
                  ? "bg-[#AB7952] text-slate-50"
                  : "bg-slate-500/20 text-slate-900"
              } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
            >
              {selectedOption > 4 ? <CheckIcon className="w-4 h-4" /> : "04"}
            </span>
            <h3
              className={`${cormorant.className} font-semibold text-sm ${
                selectedOption >= 4 ? "text-slate-900" : "text-slate-500/50"
              }`}
            >
              REFINEMENT & OPTIMIZATION
            </h3>
          </div>
          <div
            className={`w-[2px] rounded-lg h-[50px] ${
              selectedOption > 4 ? "bg-[#AB7952]" : "bg-slate-500/20"
            } ml-[20px]`}
          />
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleChange(5)}
              className={`${
                selectedOption >= 5
                  ? "bg-[#AB7952] text-slate-50"
                  : "bg-slate-500/20 text-slate-900"
              } h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}
            >
              {selectedOption > 5 ? <CheckIcon className="w-4 h-4" /> : "05"}
            </span>
            <h3
              className={`${cormorant.className} font-semibold text-sm ${
                selectedOption >= 5 ? "text-slate-900" : "text-slate-500/50"
              }`}
            >
              ELEVATION & MAINTENANCE
            </h3>
          </div>
        </div>
        <div className="w-[700px] h-[450px] border border-slate-900 p-4 flex flex-col gap-4">
          <h3>PHASE O{selectedOption}</h3>
          <h2 className={`${cormorant.className} text-4xl uppercase`}>
            {servicesData[selectedOption].title}
          </h2>
          <p className="italic text-sm">
            {servicesData[selectedOption].description}
          </p>
          <h4>Services:</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-1 font-medium">
              {servicesData[selectedOption].services![0].title}
              <span className="block text-xs font-normal italic">
                {servicesData[selectedOption].services![0].description}
              </span>
            </li>
            <li className="flex flex-col gap-1 font-medium">
              {servicesData[selectedOption].services![1].title}
              <span className="block text-xs font-normal italic">
                {servicesData[selectedOption].services![1].description}
              </span>
            </li>
            <li className="flex flex-col gap-1 font-medium">
              {servicesData[selectedOption].services![2].title}
              <span className="block text-xs font-normal italic">
                {servicesData[selectedOption].services![2].description}
              </span>
            </li>
            <li className="flex flex-col gap-1 font-medium">
              {servicesData[selectedOption].services![3].title}
              <span className="block text-xs font-normal italic">
                {servicesData[selectedOption].services![3].description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
