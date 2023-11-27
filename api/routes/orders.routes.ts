import express from "express";
export const ordersRoutes = express.Router();

import { OrderController } from "../controllers";

ordersRoutes.get("/", OrderController.getOrders);
ordersRoutes.get("/:idOrder", OrderController.getOrderById);
ordersRoutes.post("/", OrderController.newOrder);
ordersRoutes.put("/:idOrder", OrderController.updateOrder);
ordersRoutes.delete("/:idOrder", OrderController.deleteOrder);
