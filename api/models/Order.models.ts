import { ORDER_STATUSES } from "../types";
import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    member: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ORDER_STATUSES,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const OrderRepository = mongoose.model("Orders", OrdersSchema);
