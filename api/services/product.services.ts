const Product = require("../models/Products.models");

class ProductServices {
  static async findAllProducts() {
    return await Product.find();
  }

  static async findProductsById(productId: string) {
    return await Product.findById(productId);
  }

  static async updateOneProduct(productId: string, newData: any) {
    return await Product.findByIdAndUpdate(productId, newData, { new: true });
  }

  static async createNewProduct(data: any) {
    return await Product.create(data);
  }

  static async deleteProductById(productId: string) {
    return await Product.findOneAndRemove(productId);
  }
}

module.exports = ProductServices;
