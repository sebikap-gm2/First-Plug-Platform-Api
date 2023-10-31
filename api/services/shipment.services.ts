const Shipments = require("../models/Shipments.models");

type Shipment = {
  _id: string;
  fullName: string;
  date: Date;
  quantityProducts: string;
  type: string;
  trackingNumber: string;
  trackigURL: string;
  price: string;
  orders: string[];
  __v: string;
};

type CreationShipment = Omit<Omit<Shipment, "_id">, "__v">;

type DeleteShipment = {
  msg: string;
  deletedShipment: Shipment;
};

class ShipmentServices {
  static async getAllShipments(): Promise<Shipment[]> {
    return await Shipments.find();
  }

  static async getOneShipment(id: Shipment["_id"]): Promise<Shipment> {
    return await Shipments.findById(id);
  }

  static async createShipment(data: CreationShipment): Promise<Shipment> {
    return await Shipments.create(data);
  }

  static async deleteShipment(id: Shipment["_id"]): Promise<DeleteShipment> {
    return await Shipments.findByIdAndDelete(id);
  }

  static async updateShipment(
    id: Shipment["_id"],
    data: CreationShipment
  ): Promise<Shipment> {
    return await Shipments.findByIdAndUpdate(id, data);
  }
}

module.exports = ShipmentServices;
