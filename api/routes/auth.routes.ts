import express from "express";
const router = express.Router();

import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", AuthMiddleware.validateUser, AuthController.me);

export { router as authRoutes };
