import { Router } from "express";
import { getAges } from "../Controllers/age.controller.js";


const router = Router();

router.post("/");
router.get("/", getAges);
router.get("/:id/products");
router.get("/:id");
router.put("/:id",);
router.delete("/:id");



export default router;