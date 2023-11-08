import express from "express";
const router = express.Router();

import { OrderController } from "../controllers/orders.controller.js";

router.get("/", OrderController.getOrders);
router.get("/:idOrder", OrderController.getOrderById);
router.post("/", OrderController.newOrder);
router.put("/:idOrder", OrderController.updateOrder);
router.delete("/:idOrder", OrderController.deleteOrder);

export default router;
