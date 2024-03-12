import { Request, Response, NextFunction } from "express";
import { createMockOrder } from "../mocks/datamocks";
import { MainService } from "../services";

export class OrderController {
  static async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const mockOrders = Array.from({ length: 10 }).map((_, i) =>
        createMockOrder()
      );

      res.status(200).json(mockOrders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const orders = await mainService.runCommand("order", "getOneOrder", id);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async newOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const orders = await mainService.runCommand(
        "order",
        "createOrder",
        req.body
      );

      res.status(201).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const rowsCreated = await mainService.runCommand(
        "order",
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

  static async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const orders = await mainService.runCommand("order", "updateOrder", {
        id,
        data: req.body,
      });

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const orders = await mainService.runCommand("order", "deleteOrder", id);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}
