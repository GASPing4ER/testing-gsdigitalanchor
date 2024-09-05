import { push, ref, set } from "firebase/database";
import { database } from "@/db";
import { TInquiryContact, TNewsletter, TPricingGuide } from "./types";

export const addInquiryToFirebase = async (inquiry: TInquiryContact) => {
  const usersRef = ref(database, "inquiry");
  const newDataRef = push(usersRef);

  try {
    set(newDataRef, {
      name: inquiry.name,
      email: inquiry.email,
      brand: inquiry.brand,
      services: inquiry.services,
      budget: inquiry.budget,
      message: inquiry.message,
    });

    console.log("Inquiry stored to Firebase successfully!");
  } catch (error) {
    console.error("Firebase Error!", error);
  }
};

export const addNewsletterToFirebase = async (newsletter: TNewsletter) => {
  const usersRef = ref(database, "newsletter");
  const newDataRef = push(usersRef);

  try {
    set(newDataRef, {
      email: newsletter.email,
    });

    console.log("Newsletter stored to Firebase successfully!");
  } catch (error) {
    console.error("Firebase Error!", error);
  }
};

export const addPricingGuideToFirebase = async (
  pricingGuide: TPricingGuide
) => {
  const usersRef = ref(database, "pricingGuide");
  const newDataRef = push(usersRef);

  try {
    set(newDataRef, {
      name: pricingGuide.name,
      email: pricingGuide.email,
    });

    console.log("PricingGuide stored to Firebase successfully!");
  } catch (error) {
    console.error("Firebase Error!", error);
  }
};
