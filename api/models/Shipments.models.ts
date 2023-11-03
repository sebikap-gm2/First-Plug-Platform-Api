import mongoose from "mongoose";

const ShipmentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  QuantityProducts: {
    type: String,
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
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
});

const Shipment = mongoose.model("Shipments", ShipmentSchema);

export default Shipment;
