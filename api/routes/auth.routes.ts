import express from "express";
const router = express.Router();

import { AuthController } from "../controllers/auth.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", AuthMiddleware.validateUser, AuthController.me);

export default router;
