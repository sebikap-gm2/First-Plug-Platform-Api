import { OrderRepository } from "../models";
import { Order as OrderType, MongoOrder } from "../types";

export class OrderServices {
  static async getAllOrders(): Promise<OrderType[]> {
    return await OrderRepository.find();
  }
  static async getOneOrder(orderId: MongoOrder["_id"]) {
    return await OrderRepository.findById(orderId);
  }

  static async createOrder(data: OrderType) {
    return await OrderRepository.create(data);
  }

  static async updateOrder(id: MongoOrder["_id"], data: OrderType) {
    return await OrderRepository.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: MongoOrder["_id"]) {
    return await OrderRepository.findOneAndDelete({ id });
  }
}
