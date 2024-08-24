import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Define the schema for form submissions
const schema = a.schema({
  FormSubmission: a
    .model({
      name: a.string().required(), // Name of the person submitting the form
      email: a.string().required(), // Email address
      brand: a.string(), // Brand name, website, or social media
      services: a.string(), // Services the client is interested in
      budget: a.string(), // Client's budget
      message: a.string(), // Detailed message from the client
    })
    .authorization((allow) => [allow.guest()]), // Authorization allowing public API access
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
