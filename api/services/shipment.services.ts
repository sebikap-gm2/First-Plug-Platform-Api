import { ShipmentType, CreationShipment } from "api/types/index";
import { Shipment } from "../models/Shipments.models";

export class ShipmentServices {
  static async getAllShipments(): Promise<ShipmentType[]> {
    return await Shipment.find();
  }

  static async getOneShipment(id: ShipmentType["_id"]) {
    return await Shipment.findById(id);
  }

  static async createShipment(data: CreationShipment) {
    return await Shipment.create(data);
  }

  static async deleteShipment(id: ShipmentType["_id"]) {
    return await Shipment.findByIdAndDelete(id);
  }

  static async updateShipment(id: ShipmentType["_id"], data: CreationShipment) {
    return await Shipment.findByIdAndUpdate(id, data);
  }
}
