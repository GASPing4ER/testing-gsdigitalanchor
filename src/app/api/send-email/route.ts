import { EmailTemplate } from "@/src/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormDataProps = {
  name: string;
  email: string;
  brand: string;
  services: string;
  budget: string;
  message: string;
};

import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://www.gsdigitalanchor.com", // Change "*" to your allowed domain
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}

export async function POST(req: NextRequest) {
  try {
    const response = await req.json();
    console.log("Received email request:", response);

    // Your email sending logic here...
    const { data, error } = await resend.emails.send({
      from: "Onboarding GSDA <info@gsdigitalanchor.com>",
      to: ["gasper@gsdigitalanchor.com"],
      subject: "Hello world",
      react: EmailTemplate({ ...response }),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://www.gsdigitalanchor.com", // Allow your frontend to access the API
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
