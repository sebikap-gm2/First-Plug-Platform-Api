export type Shipment = {
  fullName: string;
  date: Date;
  quantityProducts: string;
  type: string;
  trackingNumber: string;
  trackigURL: string;
  price: string;
  orders: string[];
};

export type MongoShipment = Shipment & {
  _id: string;
  __v: number;
};
