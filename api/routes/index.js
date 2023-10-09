const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const teamMembersRoutes = require("../routes/teamMembers.routes");
const teamsRoutes = require("./teams.routes");
const ordersRoutes = require("./orders.routes");
const productRoutes = require("./product.routes");
const shipmentRoutes = require("./shipments.routes");

router.use("/auth", authRoutes);
router.use("/teamMembers", teamMembersRoutes);
router.use("/teams", teamsRoutes);
router.use("/orders", ordersRoutes);
router.use("/shipments", shipmentRoutes);
router.use("/products", productRoutes);

module.exports = router;
