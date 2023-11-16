import express from "express";
const router = express.Router();

import { ProductController } from "../controllers";

router.get("/", ProductController.getAllProducts);
router.get("/:idProduct", ProductController.getProductById);
router.put("/:idProduct", ProductController.updateProduct);
router.post("/", ProductController.createProduct);
router.delete("/:idProduct", ProductController.deleteProduct);

export { router as productRoutes };
