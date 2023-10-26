import { z } from "zod";

export const createRoleSchemas = z.object({
    user_role: z
    .string({
        required_error: "role is required",
    })
})