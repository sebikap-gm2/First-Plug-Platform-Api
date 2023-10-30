const express = require("express");
const router = express.Router();

const OrderControllers = require("../controllers/orders.controllers.js");

router.get("/", OrderControllers.getOrders);
router.get("/:idOrder", OrderControllers.getOrderById);
router.post("/", OrderControllers.newOrder);
router.put("/:idOrder", OrderControllers.updateOrder);
router.delete("/:idOrder", OrderControllers.deleteOrder);

module.exports = router;
