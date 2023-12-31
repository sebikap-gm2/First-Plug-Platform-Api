import express from "express";
export const authRoutes = express.Router();

import { AuthController } from "../controllers";

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
authRoutes.post("/registerplatform", AuthController.registerPlatform);
