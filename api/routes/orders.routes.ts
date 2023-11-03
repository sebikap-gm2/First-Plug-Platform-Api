import express from "express";
const router = express.Router();

import OrderControllers from "../controllers/orders.controllers.js";

router.get("/", OrderControllers.getOrders);
router.get("/:idOrder", OrderControllers.getOrderById);
router.post("/", OrderControllers.newOrder);
router.put("/:idOrder", OrderControllers.updateOrder);
router.delete("/:idOrder", OrderControllers.deleteOrder);

export default router;
