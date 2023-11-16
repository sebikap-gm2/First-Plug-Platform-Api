import { Order } from "./order";

export type Shipment = {
  _id: string;
  __v: number;
  name: string;
  date: Date;
  type: string;
  trackingNumber: string;
  trackigURL: string;
  price: string;
  orders: Order[];
};
