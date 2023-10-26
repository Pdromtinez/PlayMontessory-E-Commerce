import { Router } from "express";
import { createAges, deleteAge, getAge, getAges, updateAge, getProductsAge } from "../Controllers/age.controller.js";
import { isAdmin, verifyToken } from "../middleware/validatorToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createAgeSchemas } from "../schemas/age.schema.js";


const router = Router();

router.post("/", validateSchema(createAgeSchemas), verifyToken, isAdmin, createAges);
router.get("/", getAges);
router.get("/:id/products", getProductsAge);
router.get("/:id", getAge);
router.put("/:id",validateSchema(createAges),updateAge);
router.delete("/:id", verifyToken, isAdmin, deleteAge);



export default router;