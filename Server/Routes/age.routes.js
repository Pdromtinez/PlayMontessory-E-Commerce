import { Router } from "express";
import { createAges, deleteAge, getAge, getAges, updateAge } from "../Controllers/age.controller.js";


const router = Router();

router.post("/", createAges);
router.get("/", getAges);
router.get("/:id/products");
router.get("/:id",getAge);
router.put("/:id",updateAge);
router.delete("/:id",deleteAge);



export default router;