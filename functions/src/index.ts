import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { ServerClient } from "postmark";

admin.initializeApp();

// Initialize the Postmark client with your API key
const postmarkClient = new ServerClient("db4513b1-5346-401a-a555-6259f62921e7");

export const sendInquiryEmail = functions.database
  .ref("/inquiry/{inquiryId}")
  .onCreate(async (snapshot, context) => {
    const inquiryData = snapshot.val();

    const emailContent = {
      From: "gasper@gsdigitalanchor.com",
      To: "simecgasper@gmail.com",
      Subject: "New Inquiry Received",
      TextBody: `You have a new inquiry from ${inquiryData.name}. Email: ${inquiryData.email}.Brand name: ${inquiryData.brand}. Services required: ${inquiryData.services}. This is their budget for the services: ${inquiryData.budget}  Message: ${inquiryData.message}`,
      HtmlBody: `<p>You have a new inquiry from <strong>${inquiryData.name}</strong>.</p>
                 <p>Email: ${inquiryData.email}</p>,
                 <p>Brand name: ${inquiryData.brand}</p>,
                 <p>Services required: ${inquiryData.services}</p>,
                 <p>This is their budget for the services: ${inquiryData.budget}</p>,
                 <p>Message: ${inquiryData.message}</p>`,
    };

    try {
      await postmarkClient.sendEmail(emailContent);
      console.log("Email sent successfully via Postmark");
    } catch (error) {
      console.error("Error sending email with Postmark:", error);
    }
  });
