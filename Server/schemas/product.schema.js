import { z } from "zod";

export const productCreateSchemas = z.object({
    product_title: z
    .string({
        required_error: "title is required",
    }),

    product_description: z
    .string({
        required_error: "description is required",
    }),

    product_brand: z
    .string({
        required_error: "brand is required",
    }),

    product_price: z
    .number({
        required_error: "price is required",
    }),
    product_stock: z
    .number({
        required_error: "stock is required",
    })
    
})


