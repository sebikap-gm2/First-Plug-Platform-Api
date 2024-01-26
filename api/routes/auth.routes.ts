import express from "express";
export const authRoutes = express.Router();

import { AuthController } from "../controllers";
import { RefreshMiddleware } from "../middleware";

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
authRoutes.post(
  "/refresh",
  RefreshMiddleware.canActivate,
  AuthController.refresh
);
