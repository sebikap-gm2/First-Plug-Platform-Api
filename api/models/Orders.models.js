const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
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
  totalPrice: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
