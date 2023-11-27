import express from "express";
export const productRoutes = express.Router();

import { ProductController } from "../controllers";

productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:idProduct", ProductController.getProductById);
productRoutes.put("/:idProduct", ProductController.updateProduct);
productRoutes.post("/", ProductController.createProduct);
productRoutes.delete("/:idProduct", ProductController.deleteProduct);
