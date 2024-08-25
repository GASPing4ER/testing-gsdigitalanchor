import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      console.error("Email is missing in the request body.");
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY;
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
    const MailchimpAudience = process.env.MAILCHIMP_LIST_NEWSLETTER_ID;

    if (!MailchimpKey || !MailchimpServer || !MailchimpAudience) {
      console.error("Missing Mailchimp environment variables.");
      throw new Error("Missing Mailchimp environment variables");
    }

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    console.log(`Sending request to Mailchimp API with email: ${email}`);

    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `anystring:${MailchimpKey}`
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Mailchimp API error:", errorData);
      return NextResponse.json(
        { error: errorData.detail },
        { status: response.status }
      );
    }

    const received = await response.json();
    console.log("Successfully subscribed:", received);
    return NextResponse.json(received, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
