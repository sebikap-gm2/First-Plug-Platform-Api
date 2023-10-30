const Shipments = require("../models/Shipments.models");

class ShipmentServices {
  static async getAllShipments() {
    return await Shipments.find();
  }
  static async getOneShipment(id) {
    return await Shipments.findById(id);
  }
  static async createShipment(data) {
    return await Shipments.create(data);
  }
  static async deleteShipment(id) {
    return await Shipments.findByIdAndDelete(id);
  }
  static async updateShipment(id, data) {
    return await Shipments.findByIdAndUpdate(id, data);
  }
}

module.exports = ShipmentServices;
