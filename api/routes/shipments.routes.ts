import express from "express";
const router = express.Router();

import ShipmentsController from "../controllers/shipments.controller.js";

router.get("/", ShipmentsController.getShipments);
router.get("/:id", ShipmentsController.getOneShipment);
router.post("/", ShipmentsController.createShipment);
router.delete("/:id", ShipmentsController.deleteShipment);
router.put("/:id", ShipmentsController.updateShipment);

export default router;
