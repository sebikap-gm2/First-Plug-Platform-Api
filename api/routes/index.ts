import express from "express";
export const router = express.Router();

import { authRoutes } from "./auth.routes";
import { membersRoutes } from "./members.routes";
import { ordersRoutes } from "./orders.routes";
import { productRoutes } from "./product.routes";
import { shipmentRoutes } from "./shipments.routes";
import { teamsRoutes } from "./teams.routes";
import { JwtMiddleware } from "../middleware";

router.use("/auth", authRoutes);
router.use("/members", JwtMiddleware.canActivate, membersRoutes);
router.use("/orders", JwtMiddleware.canActivate, ordersRoutes);
router.use("/shipments", JwtMiddleware.canActivate, shipmentRoutes);
router.use("/products", JwtMiddleware.canActivate, productRoutes);
router.use("/teams", JwtMiddleware.canActivate, teamsRoutes);
