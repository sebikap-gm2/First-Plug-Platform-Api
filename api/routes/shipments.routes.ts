import express from "express";
export const shipmentRoutes = express.Router();

import { ShipmentsController } from "../controllers";

shipmentRoutes.get("/", ShipmentsController.getShipments);
shipmentRoutes.get("/:id", ShipmentsController.getOneShipment);
shipmentRoutes.post("/", ShipmentsController.createShipment);
shipmentRoutes.post("/bulkcreate", ShipmentsController.bulkCreate);
shipmentRoutes.delete("/:id", ShipmentsController.deleteShipment);
shipmentRoutes.put("/:id", ShipmentsController.updateShipment);
