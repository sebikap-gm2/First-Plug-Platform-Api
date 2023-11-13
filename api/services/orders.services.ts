import { Order } from "../models/Orders.models";
import { Order as OrderType, MongoOrder } from "../types/order";

export class OrderServices {
  static async getAllOrders(): Promise<OrderType[]> {
    return await Order.find();
  }
  static async getOneOrder(orderId: MongoOrder["_id"]) {
    return await Order.findById(orderId);
  }

  static async createOrder(data: OrderType) {
    return await Order.create(data);
  }

  static async updateOrder(id: MongoOrder["_id"], data: OrderType) {
    return await Order.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: MongoOrder["_id"]) {
    return await Order.findOneAndDelete({ id });
  }
}
