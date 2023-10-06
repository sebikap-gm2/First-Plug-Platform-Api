const Product = require("../models/Products.models");

class ProductServices {
  static async findAllProducts() {
    return await Product.find();
  }

  static async findProductsById(productId) {
    return await Product.findById(productId);
  }

  static async updateOneProduct(productId, newData) {
    return await Product.findByIdAndUpdate(productId, newData, { new: true });
  }

  static async createNewProduct(data) {
    return await Product.create(data);
  }

  static async deleteProductById(productId) {
    return await Product.findOneAndRemove(productId);
  }
}

module.exports = ProductServices;
