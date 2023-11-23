import { ProductRepository } from "../models";
import { CreationProduct, Product } from "../types";

export class ProductServices {
  static async findAllProducts() {
    return await ProductRepository.find();
  }

  static async findProductsById(productId: Product["_id"]) {
    return await ProductRepository.findById(productId);
  }

  static async updateOneProduct(productId: Product["_id"], newData: Product) {
    return await ProductRepository.findByIdAndUpdate(productId, newData, {
      new: true,
    });
  }

  static async createNewProduct(data: CreationProduct) {
    return await ProductRepository.create(data);
  }

  static async deleteProductById(productId: Product["_id"]) {
    return await ProductRepository.findOneAndRemove({ productId });
  }
}
