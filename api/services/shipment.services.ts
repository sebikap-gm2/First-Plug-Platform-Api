const Shipments = require("../models/Shipments.models");

class ShipmentServices {
  static async getAllShipments() {
    return await Shipments.find();
  }
  static async getOneShipment(id: string) {
    return await Shipments.findById(id);
  }
  static async createShipment(data: any) {
    return await Shipments.create(data);
  }
  static async deleteShipment(id: string) {
    return await Shipments.findByIdAndDelete(id);
  }
  static async updateShipment(id: string, data: any) {
    return await Shipments.findByIdAndUpdate(id, data);
  }
}

module.exports = ShipmentServices;
