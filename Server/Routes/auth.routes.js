import authController from "../Controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.Login);

export default router;