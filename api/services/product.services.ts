import { productCollectionValidation } from "../validations";
import { ProductRepository } from "../models";
import { CreationProduct, Product, ProductSchema } from "../types";

export class ProductServices {
  static async findAllProducts() {
    return await ProductRepository.find();
  }

  static async findProductsById(productId: ProductSchema["_id"]) {
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
    id: ProductSchema["_id"];
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

  static async bulkCreate(data: CreationProduct[]) {
    productCollectionValidation.parse(data);
    return (await ProductRepository.insertMany(data)).length;
  }

  static async deleteProductById(productId: ProductSchema["_id"]) {
    return await ProductRepository.findOneAndRemove({ productId });
  }
}
