import { SHIPMENT_STATUS, SHIPMENT_TYPE } from "../types";
import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema(
  {
    member: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: SHIPMENT_TYPE,
      required: true,
    },
    trackingNumber: {
      type: String,
      required: true,
    },
    trackingURL: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: SHIPMENT_STATUS,
      required: true,
    },
  },
  { timestamps: true }
);

export const ShipmentRepository = mongoose.model("Shipments", ShipmentSchema);
