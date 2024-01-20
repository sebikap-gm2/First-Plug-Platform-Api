
import { ConnectOptions } from "mongoose";
import { connectToDatabase } from "../config";
import { AuthServices } from "./auth.services";
import { MembersServices } from "./member";
import { OrderServices } from "./orders.services";
import { ProductServices } from "./product.services";
import { ShipmentServices } from "./shipment.services";
import { TeamsServices } from "./teams.services";
import { UserService } from "./user.services";

export class MainService {
  auth = AuthServices
  member = MembersServices
  order = OrderServices
  product = ProductServices
  shipment = ShipmentServices
  team = TeamsServices
  user = UserService

  constructor({ dbName }: { dbName: ConnectOptions['dbName'] }) {
    connectToDatabase(dbName)
  }
}
