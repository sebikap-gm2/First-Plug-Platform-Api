import express from "express";
export const productRoutes = express.Router();

import { ProductController } from "../controllers";

productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.post("/", ProductController.createProduct);
productRoutes.delete("/:id", ProductController.deleteProduct);
