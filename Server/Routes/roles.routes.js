import { Router } from "express";
import { getRoles, getRole, createRoles, updateRole } from "../Controllers/roles.controller.js";


const router = Router();

router.post("/",createRoles);
router.get("/", getRoles);
router.get("/:id", getRole );
router.put("/:id",updateRole );
//router.delete("/:id", );



export default router;