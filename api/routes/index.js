const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const teamsRoutes = require("./teams.routes");

router.use("/auth", authRoutes);
router.use("/teams", teamsRoutes);

module.exports = router;
