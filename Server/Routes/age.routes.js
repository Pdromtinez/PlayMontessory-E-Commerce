import { Router } from "express";
import { createAges, deleteAge, getAge, getAges, updateAge, getProductsAge } from "../Controllers/age.controller.js";
import { isAdmin, verifyToken } from "../middleware/validatorToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createAgeSchemas } from "../schemas/age.schema.js";



const router = Router();

router.post("/", validateSchema(createAgeSchemas),createAges);
router.get("/", verifyToken, isAdmin, getAges);
router.get("/:id/products", getProductsAge);
router.get("/:id",getAge);
router.put("/:id",updateAge);
router.delete("/:id",deleteAge);



export default router;