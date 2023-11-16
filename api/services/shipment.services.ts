import { Shipment as ShipmentType, MongoShipment } from "../types";
import { ShipmentRepository } from "../models";

export class ShipmentServices {
  static async getAllShipments(): Promise<ShipmentType[]> {
    return await ShipmentRepository.find();
  }

  static async getOneShipment(id: MongoShipment["_id"]) {
    return await ShipmentRepository.findById(id);
  }

  static async createShipment(data: ShipmentType) {
    return await ShipmentRepository.create(data);
  }

  static async deleteShipment(id: MongoShipment["_id"]) {
    return await ShipmentRepository.findByIdAndDelete(id);
  }

  static async updateShipment(id: MongoShipment["_id"], data: ShipmentType) {
    return await ShipmentRepository.findByIdAndUpdate(id, data);
  }
}
