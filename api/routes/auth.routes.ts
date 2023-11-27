import express from "express";
export const authRoutes = express.Router();

import { AuthController } from "../controllers";
import { AuthMiddleware } from "../middleware/auth.middleware";

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
authRoutes.get("/me", AuthMiddleware.validateUser, AuthController.me);
