import express from "express";
const router = express.Router();

import ProductControllers from "../controllers/product.controllers";

router.get("/", ProductControllers.getAllProducts);
router.get("/:idProduct", ProductControllers.getProductById);
router.put("/:idProduct", ProductControllers.updateProduct);
router.post("/", ProductControllers.createProduct);
router.delete("/:idProduct", ProductControllers.deleteProduct);

export default router;
