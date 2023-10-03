const express = require("express");
const router = express.Router();

const AuthControllers = require("../controllers/auth.controllers.js");
const AuthMiddleware = require("../middleware/auth.middleware.js");

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logout);
router.get("/me", AuthMiddleware.validateUser, AuthControllers.me);

module.exports = router;
