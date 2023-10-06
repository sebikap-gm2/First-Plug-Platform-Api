const Orders = require("../models/Orders.models");

class OrderServices {
  static async getAllOrders() {
    return await Orders.find();
  }
  static async getOneOrder(oderId) {
    return await Orders.findById(oderId);
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
