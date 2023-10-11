import { Router } from "express";
import { createUser, getUsers } from "../Controllers/user.controller.js";


const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id/products");
router.get("/:id");
router.put("/:id");
router.delete("/:id");



export default router;