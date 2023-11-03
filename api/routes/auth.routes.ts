import express from "express";
const router = express.Router();

import AuthControllers from "../controllers/auth.controllers.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
router.get("/me", AuthMiddleware.validateUser, AuthControllers.me);

export default router;
