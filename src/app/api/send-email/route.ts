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

export async function POST(req: Request) {
  try {
    const response: ContactFormDataProps = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Onboarding GSDA <simecgasper@gmail.com>",
      to: ["gasper@gsdigitalanchor.com"],
      subject: "Hello world",
      react: EmailTemplate({ ...response }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
