import Orders from "../models/Orders.models";
import { ProductType, OrderType, CreationOrder } from "api/types/index";

class OrderServices {
  static async getAllOrders(): Promise<OrderType[]> {
    return await Orders.find();
  }
  static async getOneOrder(orderId: OrderType["_id"]) {
    return await Orders.findById(orderId);
  }

  static async createOrder(data: CreationOrder) {
    return await Orders.create(data);
  }

  static async updateOrder(id: OrderType["_id"], data: OrderType) {
    return await Orders.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: OrderType["_id"]) {
    return await Orders.findOneAndDelete({ id });
  }
}

export default OrderServices;
