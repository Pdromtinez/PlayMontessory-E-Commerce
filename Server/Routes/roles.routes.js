import { Router } from "express";
import { getRoles, getRole, createRoles, updateRole } from "../Controllers/roles.controller.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createRoleSchemas } from "../schemas/roles.schema.js";

const router = Router();

router.post("/", validateSchema(createRoleSchemas),createRoles);
router.get("/", getRoles);
router.get("/:id", getRole );
router.put("/:id",updateRole );
//router.delete("/:id", );



export default router;