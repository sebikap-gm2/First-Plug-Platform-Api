const express = require("express");
const router = express.Router();

const ShipmentsController = require("../controllers/shipments.controller.js");

router.get("/", ShipmentsController.getShipments);
router.get("/:id", ShipmentsController.getOneShipment);
router.post("/", ShipmentsController.createShipment);
router.delete("/:id", ShipmentsController.deleteShipment);
router.put("/:id", ShipmentsController.updateShipment);

module.exports = router;
