import express from "express";
export const ordersRoutes = express.Router();

import { OrderController } from "../controllers";

ordersRoutes.get("/", OrderController.getOrders);
ordersRoutes.get("/:id", OrderController.getOrderById);
ordersRoutes.post("/", OrderController.newOrder);
ordersRoutes.put("/:id", OrderController.updateOrder);
ordersRoutes.delete("/:id", OrderController.deleteOrder);
