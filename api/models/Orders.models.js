const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
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
