import { ProductRepository } from "../models";
import { MongoProduct, Product as ProductType } from "../types";

export class ProductServices {
  static async findAllProducts(): Promise<MongoProduct[]> {
    return await ProductRepository.find();
  }

  static async findProductsById(productId: MongoProduct["_id"]) {
    return await ProductRepository.findById(productId);
  }

  static async updateOneProduct(
    productId: MongoProduct["_id"],
    newData: MongoProduct
  ) {
    return await ProductRepository.findByIdAndUpdate(productId, newData, {
      new: true,
    });
  }

  static async createNewProduct(data: ProductType) {
    return await ProductRepository.create(data);
  }

  static async deleteProductById(productId: MongoProduct["_id"]) {
    return await ProductRepository.findOneAndRemove({ productId });
  }
}
