import { z } from "zod";

export const createAgeSchemas = z.object({
    age_range: z
    .number({
        required_error: "Age is required",
    })
})