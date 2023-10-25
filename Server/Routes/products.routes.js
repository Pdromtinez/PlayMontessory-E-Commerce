import { Router } from "express";
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from "../Controllers/product.controller.js";
import fileUpload from "express-fileupload";
import { validateSchema } from "../middleware/validator.middleware.js";
import { productCreateSchemas } from "../schemas/product.schema.js";

const router = Router();

router.post("/",validateSchema(productCreateSchemas), fileUpload({ useTempFiles : true, tempFileDir : './uploads/'
}),createProducts);

router.get("/", getProducts);
router.get("/:id/products");
router.get("/:id",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);



export default router;