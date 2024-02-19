import { ShipmentRepository } from "../models";
import { CreationShipment, Shipment } from "../types";

export class ShipmentServices {
  static async getAllShipments() {
    return await ShipmentRepository.find();
  }

  static async getOneShipment(id: Shipment["_id"]) {
    const shipment = ShipmentRepository.findById(id);

    if (!shipment) {
      throw new Error("Shipment not found!");
    }

    return shipment;
  }

  static async createShipment(data: CreationShipment) {
    return await ShipmentRepository.create(data);
  }

  static async deleteShipment(id: Shipment["_id"]) {
    return await ShipmentRepository.findByIdAndDelete(id);
  }

  static async updateShipment({
    id,
    data,
  }: {
    id: Shipment["_id"];
    data: Shipment;
  }) {
    return await ShipmentRepository.findByIdAndUpdate(id, data);
  }
}
