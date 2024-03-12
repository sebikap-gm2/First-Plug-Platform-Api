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
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const shipment = await mainService.runCommand(
        "shipment",
        "getOneShipment",
        id
      );

      res.status(200).json(shipment);
    } catch (error) {
      next(error);
    }
  }
  static async createShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const newShipment = await mainService.runCommand(
        "shipment",
        "createShipment",
        req.body
      );

      res.status(201).json(newShipment);
    } catch (error) {
      next(error);
    }
  }
  static async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const rowsCreated = await mainService.runCommand(
        "shipment",
        "bulkCreate",
        req.body
      );

      res.status(201).json({
        message: `Bulk create successful: ${rowsCreated} documents inserted successfully out of ${req.body.length}.`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const shipmentUpdated = await mainService.runCommand(
        "shipment",
        "updateShipment",
        { id, data: req.body }
      );

      res.status(200).json(shipmentUpdated);
    } catch (error) {
      next(error);
    }
  }
  static async deleteShipment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const shipmentDeleted = await mainService.runCommand(
        "shipment",
        "deleteShipment",
        id
      );

      res.status(200).json(shipmentDeleted);
    } catch (error) {
      next(error);
    }
  }
}
