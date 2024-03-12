import { Product } from ".";

export const SHIPMENT_STATUS = [
  "Missing Data",
  "Delivered",
  "Preparing",
  "Available",
  "Shipped",
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

export const SHIPMENT_TYPE = ["Courrier", "Internal"] as const;

export type ShipmentType = (typeof SHIPMENT_TYPE)[number];

export type Shipment = {
  _id: string;
  memberId: string;
  name: string;
  lastName: string;
  date: string;
  status: ShipmentStatus;
  type: ShipmentType;
  trackingNumber: string;
  trackingURL: string;
  products: Product[];
  __v: number;
};

export type CreationShipment = Omit<Shipment, "_id" | "__v">;
