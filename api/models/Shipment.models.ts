import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
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
      enum: ["Missing Data", "Delivered", "Preparing", "Avaliable", "Shipped"],
      required: true,
    },
  },
  { timestamps: true }
);

export const ShipmentRepository = mongoose.model("Shipments", ShipmentSchema);
