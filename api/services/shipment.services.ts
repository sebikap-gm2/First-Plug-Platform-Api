import { Shipment as ShipmentType, MongoShipment } from "../types";
import { Shipment } from "../models";

export class ShipmentServices {
  static async getAllShipments(): Promise<ShipmentType[]> {
    return await Shipment.find();
  }

  static async getOneShipment(id: MongoShipment["_id"]) {
    return await Shipment.findById(id);
  }

  static async createShipment(data: ShipmentType) {
    return await Shipment.create(data);
  }

  static async deleteShipment(id: MongoShipment["_id"]) {
    return await Shipment.findByIdAndDelete(id);
  }

  static async updateShipment(id: MongoShipment["_id"], data: ShipmentType) {
    return await Shipment.findByIdAndUpdate(id, data);
  }
}
