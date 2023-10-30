const Orders = require("../models/Orders.models");

class OrderServices {
  static async getAllOrders() {
    return await Orders.find();
  }
  static async getOneOrder(orderId) {
    return await Orders.findById(orderId);
  }

  static async createOrder(data) {
    return await Orders.create(data);
  }
  static async updateOrder(id, data) {
    return await Orders.findOneAndUpdate(id, data);
  }
  static async deleteOrder(id) {
    return await Orders.findOneAndDelete(id);
  }
}

module.exports = OrderServices;
