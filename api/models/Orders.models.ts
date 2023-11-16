import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  teamMember: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamMember",
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

export const Order = mongoose.model("Orders", OrdersSchema);
