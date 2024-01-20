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
      const { idOrder } = req.params;
      const mainService = new MainService({ dbName: 'test' })
      const orders = await mainService.order.getOneOrder(idOrder);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async newOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const orders = await mainService.order.createOrder(req.body);

      res.status(201).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrder } = req.params;
      const mainService = new MainService({ dbName: 'test' })
      const orders = await mainService.order.updateOrder(idOrder, req.body);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrder } = req.params;
      const mainService = new MainService({ dbName: 'test' })
      const orders = await mainService.order.deleteOrder(idOrder);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}
