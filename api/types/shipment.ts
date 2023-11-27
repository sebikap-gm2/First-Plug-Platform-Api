import { Order } from "./order";

export type Shipment = {
  _id: string;
  __v: number;
  name: string;
  date: Date;
  types: string;
  trackingNumber: string;
  trackingURL: string;
  orders: Order[];
};

export type CreationShipment = Omit<Shipment, "_id" | "__v">;
