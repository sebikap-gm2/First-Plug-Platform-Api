const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const teamMembersRoutes = require("../routes/teamMembers.routes");

router.use("/auth", authRoutes);
router.use("/teamMembers", teamMembersRoutes);

module.exports = router;
