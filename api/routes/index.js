const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const teamsRoutes = require("./teams.routes");

const ordersRoutes = require("./orders.routes");

router.use("/auth", authRoutes);

router.use("/teams", teamsRoutes);

router.use("/orders", ordersRoutes);



router.use("/products", productRoutes);



module.exports = router;
