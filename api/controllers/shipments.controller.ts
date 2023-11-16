import { Request, Response, NextFunction } from "express";
import { ShipmentServices } from "../services";
export class ShipmentsController {
  static async getShipments(req: Request, res: Response, next: NextFunction) {
    try {
      const allShipments = await ShipmentServices.getAllShipments();
      if (!allShipments) {
        return res.status(401).send("Shipment not found!");
      }
      res.status(200).json(allShipments);
    } catch (error) {
      next(error);
    }
  }
  static async getOneShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const oneShipment = await ShipmentServices.getOneShipment(req.params.id);

      if (!oneShipment) {
        return res.status(401).send("Shipment not found!");
      }
      res.status(200).json(oneShipment);
    } catch (error) {
      next(error);
    }
  }
  static async createShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const newShipment = await ShipmentServices.createShipment(req.body);

      res.status(201).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
  static async updateShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const newShipment = await ShipmentServices.updateShipment(
        req.params.id,
        req.body
      );

      res.status(200).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
  static async deleteShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const newShipment = await ShipmentServices.deleteShipment(req.params.id);

      res.status(200).json({ newShipment });
    } catch (error) {
      next(error);
    }
  }
}
