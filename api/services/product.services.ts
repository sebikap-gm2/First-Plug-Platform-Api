import { ProductRepository } from "../models";
import { CreationProduct, Product } from "../types";

export class ProductServices {
  static async findAllProducts() {
    return await ProductRepository.find();
  }

  static async findProductsById(productId: Product["_id"]) {
    try {
      return await ProductRepository.findById(productId);
    } catch (error) {
      throw new Error("Product not found");
    }
  }

  static async updateOneProduct({
    id,
    data,
  }: {
    id: Product["_id"];
    data: Product;
  }) {
    try {
      return await ProductRepository.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      throw new Error("Product not found");
    }
  }

  static async createNewProduct(data: CreationProduct) {
    return await ProductRepository.create(data);
  }

  static async deleteProductById(productId: Product["_id"]) {
    return await ProductRepository.findOneAndRemove({ productId });
  }
}
