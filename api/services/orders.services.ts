import { OrderRepository } from "../models";
import { CreationOrder, Order } from "../types";

export class OrderServices {
  static async getAllOrders() {
    return await OrderRepository.find();
  }
  static async getOneOrder(orderId: Order["_id"]) {
    return await OrderRepository.findById(orderId);
  }

  static async createOrder(data: CreationOrder) {
    return await OrderRepository.create(data);
  }

  static async updateOrder(id: Order["_id"], data: Order) {
    return await OrderRepository.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: Order["_id"]) {
    return await OrderRepository.findOneAndDelete({ id });
  }
}
