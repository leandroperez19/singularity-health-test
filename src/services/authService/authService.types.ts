import { userLogInSchema } from "@/schemas/authSchemas";
import { z } from "zod";

export type SignInPayload = z.infer<typeof userLogInSchema>;

export const signInResponseSchema = z.object({
    token: z.string(),
});

export type signInResponse = z.infer<typeof signInResponseSchema>;
