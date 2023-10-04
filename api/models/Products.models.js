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
    require: false,
  },
  screen: {
    type: String,
    require: false,
  },
  keyboard: {
    type: String,
    require: false,
  },
  processor: {
    type: String,
    require: false,
  },
  ram: {
    type: String,
    require: false,
  },
  storage: {
    type: String,
    require: false,
  },
  gpu: {
    type: String,
    require: false,
  },
  serialNumber: {
    type: String,
    require: false,
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
