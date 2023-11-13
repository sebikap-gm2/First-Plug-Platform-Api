import { Order } from "../models/Orders.models";
import { OrderType, CreationOrder } from "api/types/index";

export class OrderServices {
  static async getAllOrders(): Promise<OrderType[]> {
    return await Order.find();
  }
  static async getOneOrder(orderId: OrderType["_id"]) {
    return await Order.findById(orderId);
  }

  static async createOrder(data: CreationOrder) {
    return await Order.create(data);
  }

  static async updateOrder(id: OrderType["_id"], data: OrderType) {
    return await Order.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: OrderType["_id"]) {
    return await Order.findOneAndDelete({ id });
  }
}
