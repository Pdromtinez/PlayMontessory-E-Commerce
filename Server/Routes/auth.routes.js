import authController from "../Controllers/auth.controller.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validator.middleware.js";
import { loginSchemas, registerSchemas } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validateSchema(registerSchemas), authController.register);
router.post('/login',validateSchema(loginSchemas), authController.Login);

export default router;