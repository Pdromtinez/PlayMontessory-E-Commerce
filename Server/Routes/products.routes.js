import { Router } from "express";
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from "../Controllers/product.controller.js";
import fileUpload from "express-fileupload";
import { validateSchema } from "../middleware/validator.middleware.js";
import { productCreateSchemas } from "../schemas/product.schema.js";
import { isAdmin, verifyToken } from "../middleware/validatorToken.js";
const router = Router();

router.post("/",validateSchema(productCreateSchemas), fileUpload({ useTempFiles : true, tempFileDir : './uploads/'
}), verifyToken, isAdmin, createProducts);

router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id",  updateProduct);
router.delete("/:id",verifyToken, isAdmin, deleteProduct);



export default router;