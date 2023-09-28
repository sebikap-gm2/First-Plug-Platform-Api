const express = require("express");
const router = express.Router();
const { register, login, logout, me } = require("../controllers/auth");
const { validateUser } = require("../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", validateUser, me);

module.exports = router;
