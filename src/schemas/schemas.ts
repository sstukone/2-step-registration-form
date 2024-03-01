import { z } from "zod";

export const registrationSchemaStep1 = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(4),
    passwordConfirmation: z.string().min(4),
    interests: z.string().array().min(1).max(2),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

export const registrationSchemaStep2 = z.object({
  avatar: z.instanceof(File),
});
