import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  member: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "member",
    },
  ],
  status: {
    type: String,
    enum: [
      "order confirmed",
      "order canceled",
      "confirmation pending",
      "payment pending",
    ],
    default: "confirmation pending",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

export const OrderRepository = mongoose.model("Orders", OrdersSchema);
