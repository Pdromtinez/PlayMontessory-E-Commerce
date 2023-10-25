import { Router } from "express";
import { createAges, deleteAge, getAge, getAges, updateAge, getProductsAge } from "../Controllers/age.controller.js";
import { isAdmin, verifyToken } from "../middleware/validatorToken.js";



const router = Router();

router.post("/",createAges);
router.get("/", getAges);
router.get("/:id/products", getProductsAge);
router.get("/:id",getAge);
router.put("/:id",updateAge);
router.delete("/:id",deleteAge);



export default router;