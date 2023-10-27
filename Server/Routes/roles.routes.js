import { Router } from "express";
import { getRoles, getRole, createRoles, updateRole } from "../Controllers/roles.controller.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createRoleSchemas } from "../schemas/roles.schema.js";
import { verificarToken } from "../utils/jwtUtils.js";
import { isAdmin } from "../middleware/validatorToken.js";


const router = Router();

router.post("/", validateSchema(createRoleSchemas), verificarToken, isAdmin, createRoles);
router.get("/", getRoles);
router.get("/:id", getRole );
router.put("/:id", validateSchema(createRoleSchemas), updateRole );
//router.delete("/:id", );



export default router;