import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  brand: string;
  services: string;
  budget: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  brand,
  services,
  budget,
  message,
}) => (
  <div>
    <h2>You received a new inquiry</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Brand:</strong> {brand}
    </p>
    <p>
      <strong>Services:</strong> {services}
    </p>
    <p>
      <strong>Budget:</strong> {budget}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
