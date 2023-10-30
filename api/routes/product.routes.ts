const express = require("express");
const router = express.Router();

const ProductControllers = require("../controllers/product.controllers");

router.get("/", ProductControllers.getAllProducts);
router.get("/:idProduct", ProductControllers.getProductById);
router.put("/:idProduct", ProductControllers.updateProduct);
router.post("/", ProductControllers.createProduct);
router.delete("/:idProduct", ProductControllers.deleteProduct);

module.exports = router;
