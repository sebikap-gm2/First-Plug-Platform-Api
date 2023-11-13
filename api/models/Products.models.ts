import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
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
    default: "",
  },
  screen: {
    type: String,
    require: false,
    default: "",
  },
  keyboard: {
    type: String,
    require: false,
    default: "",
  },
  processor: {
    type: String,
    require: false,
    default: "",
  },
  ram: {
    type: String,
    require: false,
    default: "",
  },
  storage: {
    type: String,
    require: false,
    default: "",
  },
  gpu: {
    type: String,
    require: false,
    default: "",
  },
  serialNumber: {
    type: String,
    require: false,
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
  imgUrl: {
    type: String,
    required: false,
    default: "",
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const Product = mongoose.model("Products", ProductsSchema);
