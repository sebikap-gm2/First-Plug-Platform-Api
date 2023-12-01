import { Request, Response, NextFunction } from "express";
import { ShipmentServices } from "../services";
import { generateMockShipments } from "../mock/shipment";
export class ShipmentsController {
  static async getShipments(req: Request, res: Response, next: NextFunction) {
    try {
      // const shipments = await ShipmentServices.getAllShipments();
      const shipments = generateMockShipments(10);

      res.status(200).json(shipments);
    } catch (error) {
      next(error);
    }
  }

  static async getOneShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const shipment = await ShipmentServices.getOneShipment(req.params.id);

      res.status(200).json(shipment);
    } catch (error) {
      next(error);
    }
  }
  static async createShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const newShipment = await ShipmentServices.createShipment(req.body);

      res.status(201).json(newShipment);
    } catch (error) {
      next(error);
    }
  }
  static async updateShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const shipmentUpdated = await ShipmentServices.updateShipment(
        req.params.id,
        req.body
      );

      res.status(200).json(shipmentUpdated);
    } catch (error) {
      next(error);
    }
  }
  static async deleteShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const shipmentDeleted = await ShipmentServices.deleteShipment(
        req.params.id
      );

      res.status(200).json(shipmentDeleted);
    } catch (error) {
      next(error);
    }
  }
}
