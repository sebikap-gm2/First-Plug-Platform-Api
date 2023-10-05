const Product = require("../models/Products.models");

class ProductServices {
  static async findAllProducts() {
    try {
      return await Product.find();
    } catch (error) {
      console.error("Error to find all products" + error);
    }
  }

  static async findProductsById(productId) {
    try {
      return await Product.findById(productId);
    } catch (error) {
      console.error("Error to find Product by ID" + error);
    }
  }

  static async updateOneProduct(productId, newData) {
    try {
      const updateOneProduct = await Product.findByIdAndUpdate(
        productId,
        newData,
        { new: true }
      );

      return updateOneProduct;
    } catch (error) {
      console.error("Error to update Product " + error);
    }
  }

  static async createNewProduct(data) {
    try {
      const newProduct = await Product.create(data);
      return newProduct;
    } catch (error) {
      console.error("Error to create new Product" + error);
    }
  }

  static async deleteProductById(productId) {
    try {
      const deleteProduct = await Product.findOneAndRemove(productId);
      return deleteProduct;
    } catch (error) {
      console.error("Error to delete product" + error);
    }
  }
}

module.exports = ProductServices;
