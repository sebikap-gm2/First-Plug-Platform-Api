import { Shipment } from "../types";

export const generateMockShipments = (numberOfShipments: number) => {
  return Array.from({ length: numberOfShipments }, (_, i) =>
    getRandomShipment(i + 1)
  );
};

const getRandomShipment = (id: number): Shipment => {
  const shipment: Shipment = {
    _id: id.toString(),
    __v: 0,
    name: `Shipment ${id}`,
    date: getRandomDate(),
    types: `Type ${id}`,
    trackingNumber: `TrackingNumber ${id}`,
    trackingURL: `https://example.com/tracking/${id}`,
    orders: [],
  };

  return shipment;
};

const getRandomDate = (): Date => {
  return new Date();
};
