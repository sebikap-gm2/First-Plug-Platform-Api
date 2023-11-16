import { Request, Response, NextFunction } from "express";
import { OrderServices } from "../services";

export class OrderController {
  static async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await OrderServices.getAllOrders();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.getOneOrder(idOrder);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async newOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await OrderServices.createOrder(req.body);

      res.status(201).json({ newOrder: orders });
    } catch (error) {
      next(error);
    }
  }
  static async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.updateOrder(idOrder, req.body);

      res.status(200).json({ updatedOrder: orders });
    } catch (error) {
      next(error);
    }
  }
  static async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.deleteOrder(idOrder);

      res
        .status(200)
        .json({ msg: "Order deleted succesfully", deletedOrder: orders });
    } catch (error) {
      next(error);
    }
  }
}
