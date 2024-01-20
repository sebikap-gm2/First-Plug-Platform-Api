import { Request, Response, NextFunction } from "express";
import { createMockShipment } from "../mocks/datamocks";
import { MainService } from "../services";
export class ShipmentsController {
  static async getShipments(req: Request, res: Response, next: NextFunction) {
    try {
      const mockShipments = Array.from({ length: 10 }).map((_, i) =>
        createMockShipment()
      );
      res.status(200).json(mockShipments);
    } catch (error) {
      next(error);
    }
  }

  static async getOneShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const shipment = await mainService.shipment.getOneShipment(req.params.id);

      res.status(200).json(shipment);
    } catch (error) {
      next(error);
    }
  }
  static async createShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const newShipment = await mainService.shipment.createShipment(req.body);

      res.status(201).json(newShipment);
    } catch (error) {
      next(error);
    }
  }
  static async updateShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const shipmentUpdated = await mainService.shipment.updateShipment(
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
      const mainService = new MainService({ dbName: 'test' })
      const shipmentDeleted = await mainService.shipment.deleteShipment(
        req.params.id
      );

      res.status(200).json(shipmentDeleted);
    } catch (error) {
      next(error);
    }
  }
}
