import { ShipmentRepository } from "../models";
import { Shipment } from "../types";

export class ShipmentServices {
  static async getAllShipments(): Promise<Shipment[]> {
    return await ShipmentRepository.find();
  }

  static async getOneShipment(id: Shipment["_id"]) {
    return await ShipmentRepository.findById(id);
  }

  static async createShipment(data: Shipment) {
    return await ShipmentRepository.create(data);
  }

  static async deleteShipment(id: Shipment["_id"]) {
    return await ShipmentRepository.findByIdAndDelete(id);
  }

  static async updateShipment(id: Shipment["_id"], data: Shipment) {
    return await ShipmentRepository.findByIdAndUpdate(id, data);
  }
}
