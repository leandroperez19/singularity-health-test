import { z } from "zod";

export const userLogInSchema = z.object({
    email: z
        .string({
            required_error: "required_email",
        })
        .min(1, "required_email")
        .email("email_format"),
    password: z
        .string({
            required_error: "required_password",
        })
        .min(8, "password_length"),
});
