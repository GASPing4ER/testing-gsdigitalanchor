"use client";

import { cormorant } from "@/src/lib/fonts";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

import { useState, ChangeEvent } from "react";
import { addInquiryToSupabase } from "../lib/actions";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    services: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const router = useRouter();

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
    setSubmitting(true);
    await addInquiryToSupabase(formData);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await response.json();
      if (data.status >= 400) {
        setStatus(data.status);
        setMessage(
          "Error joining the newsletter. You can directly contact me at gasper@gsdigitalanchor.com."
        );
        setTimeout(() => {
          setMessage("");
          setButtonDisabled(false);
        }, 2000);
        return;
      }

      setStatus(201);
      setMessage("Thank you for subscribing my newsletter 👻.");
      setTimeout(() => {
        setMessage("");
        setButtonDisabled(false);
      }, 4000);
    } catch (error) {
      setStatus(500);
      setMessage(
        "Error joining the newsletter. You can directly contact me at gasper@gsdigitalanchor.com."
      );
      setTimeout(() => {
        setMessage("");
        setButtonDisabled(false);
      }, 2000);
    }
    setFormData({
      name: "",
      email: "",
      brand: "",
      services: "",
      budget: "",
      message: "",
    });

    setSubmitting(false);
    router.push("/thank-you");
  };
  return (
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
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className="bg-transparent border-b border-slate-50 pb-4 w-full"
          value={formData.email}
          onChange={handleInputChange}
          required
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
        required
      />
      <input
        type="text"
        id="services"
        name="services"
        placeholder="Services Interested In"
        className="bg-transparent border-b border-slate-50 pb-4 w-full"
        value={formData.services}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        id="budget"
        name="budget"
        placeholder="Your Budget"
        className="bg-transparent border-b border-slate-50 pb-4 w-full"
        value={formData.budget}
        onChange={handleInputChange}
        required
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
        className={`${cormorant.className} bg-[#AB7952] text-slate-50 px-8 py-2 disabled:opacity-80`}
        disabled={buttonDisabled}
        aria-label="Submit Form"
        onClick={() =>
          sendGAEvent("event", "inquiry_subscribed", {
            email: formData.email,
          })
        }
      >
        {submitting ? "SUBMITTING" : "SUBMIT FORM"}
      </button>
      {message && (
        <p
          className={`${
            status !== 201 ? "text-red-500" : "text-green-500"
          } pt-4 font-black`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
