import { ProductCollectionValidation } from "../validations";
import { ProductRepository } from "../models";
import { CreationProduct, Product, ProductSchema } from "../types";

export class ProductServices {
  static async getAll() {
    return await ProductRepository.find();
  }

  static async getById(productId: ProductSchema["_id"]) {
    try {
      return await ProductRepository.findById(productId);
    } catch (error) {
      throw new Error("Product not found");
    }
  }

  static async update({
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

  static async create(data: CreationProduct) {
    return await ProductRepository.create(data);
  }

  static async bulkCreate(data: CreationProduct[]) {
    ProductCollectionValidation.parse(data);
    return (await ProductRepository.insertMany(data)).length;
  }

  static async delete(productId: ProductSchema["_id"]) {
    return await ProductRepository.findOneAndRemove({ productId });
  }
}
