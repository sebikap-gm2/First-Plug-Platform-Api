import express from "express";
export const productRoutes = express.Router();

import { ProductController } from "../controllers";
import { validateData } from "../middleware";
import { productCollection } from "../validations";

productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.post("/", ProductController.createProduct);
productRoutes.post(
  "/bulkcreate",
  validateData(productCollection),
  ProductController.bulkCreate
);
productRoutes.delete("/:id", ProductController.deleteProduct);
