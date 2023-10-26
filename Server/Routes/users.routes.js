import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.controller.js";
import { verifyToken, isAdmin } from "../middleware/validatorToken.js";


const router = Router();

router.post("/", verifyToken, isAdmin, createUser);
router.get("/", getUsers);
router.get("/:id/products");
router.get("/:id", verifyToken, isAdmin, getUser);
router.put("/:id", verifyToken, isAdmin, updateUser);
router.delete("/:id", verifyToken, isAdmin, deleteUser);



export default router;