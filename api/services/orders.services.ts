import { OrderCollectionValidation } from "../validations";
import { OrderRepository } from "../models";
import { CreationOrder, Order, OrderSchema } from "../types";

export class OrderServices {
  static async getAllOrders() {
    return await OrderRepository.find();
  }
  static async getOneOrder(orderId: OrderSchema["_id"]) {
    return await OrderRepository.findById(orderId);
  }

  static async createOrder(data: CreationOrder) {
    return await OrderRepository.create(data);
  }

  static async bulkCreate(data: CreationOrder) {
    OrderCollectionValidation.parse(data);
    return (await OrderRepository.insertMany(data)).length;
  }

  static async updateOrder({
    id,
    data,
  }: {
    id: OrderSchema["_id"];
    data: Order;
  }) {
    return await OrderRepository.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: OrderSchema["_id"]) {
    return await OrderRepository.findOneAndDelete({ id });
  }
}
