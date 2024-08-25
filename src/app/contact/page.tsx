"use client";
import PricingPackage from "@/src/components/pricing-package";
import { cormorant } from "@/src/lib/fonts";
import { useState, ChangeEvent } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "@/db";
import { addContactToInquiry } from "@/src/lib/mailchimp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    services: "",
    budget: "",
    message: "",
  });

  // Handler to update state on input change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usersRef = ref(database, "inquiry");
      const newDataRef = push(usersRef);

      set(newDataRef, {
        name: formData.name,
        email: formData.email,
        brand: formData.brand,
        services: formData.services,
        budget: formData.budget,
        message: formData.message,
      });

      await addContactToInquiry(formData);
      setFormData({
        name: "",
        email: "",
        brand: "",
        services: "",
        budget: "",
        message: "",
      });
      console.log("Inquiry sent successfully!");
    } catch (error) {
      console.error("Firebase Error!", error);
    }
  };

  return (
    <main>
      <div className="bg-slate-900 p-6 pt-24 sm:p-24 w-full" id="first-section">
        <div className="relative w-full h-screen flex flex-col items-center text-center max-w-[600px] mx-auto">
          <h1
            className={`${cormorant.className} text-slate-50 text-7xl pt-10 pb-16 md:pb-24`}
          >
            INQUIRE
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-10 items-center text-sm text-slate-50"
          >
            <div className="flex w-full gap-8">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-transparent border-b border-slate-50 pb-4 w-full"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-slate-50 pb-4 w-full"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Brand Name, Website, Social Media"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
              value={formData.brand}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="services"
              name="services"
              placeholder="Services Interested In"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
              value={formData.services}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="budget"
              name="budget"
              placeholder="Your Budget"
              className="bg-transparent border-b border-slate-50 pb-4 w-full"
              value={formData.budget}
              onChange={handleInputChange}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Give us a little detail so we can best help your needs!"
              className="bg-transparent border-b border-slate-50 min-h-[100px] h-fit pb-4 w-full"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={`${cormorant.className} bg-[#AB7952] text-slate-50 px-8 py-2`}
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
      <PricingPackage />
    </main>
  );
};

export default ContactPage;
