const Orders = require("../models/Orders.models");

class OrderServices {
  static async getAllOrders() {
    return await Orders.find();
  }
  static async getOneOrder(orderId: string) {
    return await Orders.findById(orderId);
  }

  static async createOrder(data: any) {
    return await Orders.create(data);
  }
  static async updateOrder(id: string, data: any) {
    return await Orders.findOneAndUpdate(id, data);
  }
  static async deleteOrder(id: string) {
    return await Orders.findOneAndDelete(id);
  }
}

module.exports = OrderServices;
