const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    default: "",
  },
  screen: {
    type: String,
    default: "",
  },
  keyboard: {
    type: String,
    default: "",
  },
  processor: {
    type: String,
    default: "",
  },
  ram: {
    type: String,
    default: "",
  },
  storage: {
    type: String,
    default: "",
  },
  gpu: {
    type: String,
    default: "",
  },
  serialNumber: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["Available", "Delivered"],
    require: true,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
