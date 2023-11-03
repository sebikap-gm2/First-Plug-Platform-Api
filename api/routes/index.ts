import express from "express";
export const router = express.Router();

import authRoutes from "./auth.routes";

import teamMembersRoutes from "../routes/teamMembers.routes";
import teamsRoutes from "./teams.routes";
import ordersRoutes from "./orders.routes";
import productRoutes from "./product.routes";
import shipmentRoutes from "./shipments.routes";

router.use("/auth", authRoutes);
router.use("/teamMembers", teamMembersRoutes);
router.use("/teams", teamsRoutes);
router.use("/orders", ordersRoutes);

router.use("/shipments", shipmentRoutes);

router.use("/products", productRoutes);
