import { z } from "zod";

export const registerSchemas = z.object({
    user_name: z
    .string({
        required_error: "User name is required",
    }),

    user_lastname: z
    .string({
        required_error: "lastname is required",
    }),

    user_email: z
    .string({
        required_error: "email is required",
    })
    .email({
        required_error: "invalid email",
    }),

    user_password: z
    .string({
        required_error: "password is required",
        
    })
    .min(6, {
        message: "password must be at least 6 characters"
    }),
    user_role: z
    .string({
        required_error: "role is required",
    })
    
})


export const loginSchemas = z.object({
    

    user_email: z
    .string({
        required_error: "email is not valid",
    })
    .email({
        required_error: "invalid email",
    }),

    user_password: z
    .string({
        required_error: "password is required",
    })
    .min(6, {
        message: "password must be at least 6 characters"
    })
  
    
})