import { push, ref, set } from "firebase/database";
import { database } from "@/db";
import { TInquiryContact } from "./types";

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
