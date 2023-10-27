import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.controller.js";
import { verifyToken, isAdmin } from "../middleware/validatorToken.js";


const router = Router();

router.post("/", verifyToken, isAdmin, createUser);
router.get("/", getUsers);
router.get("/:id/products");
router.get("/:id",  getUser);
router.put("/:id", updateUser);
router.delete("/:id", verifyToken, isAdmin, deleteUser);



export default router;