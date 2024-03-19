import { ShipmentCollectionValidation } from "../validations";
import { ShipmentRepository } from "../models";
import { CreationShipment, Shipment, ShipmentSchema } from "../types";

export class ShipmentServices {
  static async getAll() {
    return await ShipmentRepository.find();
  }

  static async getById(id: ShipmentSchema["_id"]) {
    const shipment = ShipmentRepository.findById(id);

    if (!shipment) {
      throw new Error("Shipment not found!");
    }

    return shipment;
  }

  static async create(data: CreationShipment) {
    return await ShipmentRepository.create(data);
  }

  static async bulkCreate(data: CreationShipment[]) {
    ShipmentCollectionValidation.parse(data);
    return (await ShipmentRepository.insertMany(data)).length;
  }

  static async delete(id: ShipmentSchema["_id"]) {
    return await ShipmentRepository.findByIdAndDelete(id);
  }

  static async update({
    id,
    data,
  }: {
    id: ShipmentSchema["_id"];
    data: Shipment;
  }) {
    return await ShipmentRepository.findByIdAndUpdate(id, data);
  }
}
