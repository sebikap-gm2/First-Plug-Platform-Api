import express from "express";
export const router = express.Router();

import { authRoutes } from "./auth.routes";
import { membersRoutes } from "./members.routes";
import { ordersRoutes } from "./orders.routes";
import { productRoutes } from "./product.routes";
import { shipmentRoutes } from "./shipments.routes";
import { teamsRoutes } from "./teams.routes";

router.use("/auth", authRoutes);
router.use("/members", membersRoutes);
router.use("/orders", ordersRoutes);
router.use("/shipments", shipmentRoutes);
router.use("/products", productRoutes);
router.use("/teams", teamsRoutes);
