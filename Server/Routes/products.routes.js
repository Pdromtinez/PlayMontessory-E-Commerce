import { Router } from "express";
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from "../Controllers/product.controller.js";
import fileUpload from "express-fileupload";


const router = Router();

router.post("/", fileUpload({ useTempFiles : true, tempFileDir : './uploads/'
}),createProducts);

router.get("/", getProducts);
router.get("/:id/products");
router.get("/:id",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);



export default router;