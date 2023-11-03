import { ShipmentType } from "api/types/types";
import Shipments from "../models/Shipments.models";

type CreationShipment = Omit<Omit<ShipmentType, "_id">, "__v">;

class ShipmentServices {
  static async getAllShipments(): Promise<ShipmentType[]> {
    return await Shipments.find();
  }

  static async getOneShipment(id: ShipmentType["_id"]) {
    return await Shipments.findById(id);
  }

  static async createShipment(data: CreationShipment) {
    return await Shipments.create(data);
  }

  static async deleteShipment(id: ShipmentType["_id"]) {
    return await Shipments.findByIdAndDelete(id);
  }

  static async updateShipment(id: ShipmentType["_id"], data: CreationShipment) {
    return await Shipments.findByIdAndUpdate(id, data);
  }
}

export default ShipmentServices;
