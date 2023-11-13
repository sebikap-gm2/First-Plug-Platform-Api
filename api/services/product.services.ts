import { Product } from "../models/Products.models";
import { MongoProduct, Product as ProductType } from "api/types/index";

export class ProductServices {
  static async findAllProducts(): Promise<MongoProduct[]> {
    return await Product.find();
  }

  static async findProductsById(productId: MongoProduct["_id"]) {
    return await Product.findById(productId);
  }

  static async updateOneProduct(
    productId: MongoProduct["_id"],
    newData: MongoProduct
  ) {
    return await Product.findByIdAndUpdate(productId, newData, { new: true });
  }

  static async createNewProduct(data: ProductType) {
    return await Product.create(data);
  }

  static async deleteProductById(productId: MongoProduct["_id"]) {
    return await Product.findOneAndRemove({ productId });
  }
}
