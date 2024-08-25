import mailchimp from "@mailchimp/mailchimp_marketing";
import { TInquiryContact } from "./types";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: "us17",
});

const event = {
  name: "JS Developers Meetup",
};

const footerContactInfo = {
  company: "Mailchimp",
  address1: "405 N Angier Ave NE",
  city: "Atlanta",
  state: "GA",
  zip: "30308",
  country: "US",
};

const campaignDefaults = {
  from_name: "Gettin' Together",
  from_email: "gettintogether@example.com",
  subject: "JS Developers Meetup",
  language: "EN_US",
};

export async function addContactToInquiry(subscribingUser: TInquiryContact) {
  const response = await mailchimp.lists.addListMember(
    process.env.NEXT_PUBLIC_INQUIRY_LIST_ID as string,
    {
      email_address: subscribingUser.email,
      merge_fields: {
        FNAME: subscribingUser.name,
        BRAND: subscribingUser.brand,
        SERVICES: subscribingUser.services,
        BUDGET: subscribingUser.budget,
        MESSAGE: subscribingUser.message,
      },
      status: "subscribed",
    }
  );

  console.log(response);
}
