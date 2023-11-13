import { Product } from "../models/Products.models";
import { ProductType, CreationProduct } from "api/types/index";

export class ProductServices {
  static async findAllProducts(): Promise<ProductType[]> {
    return await Product.find();
  }

  static async findProductsById(productId: ProductType["_id"]) {
    return await Product.findById(productId);
  }

  static async updateOneProduct(
    productId: ProductType["_id"],
    newData: ProductType
  ) {
    return await Product.findByIdAndUpdate(productId, newData, { new: true });
  }

  static async createNewProduct(data: CreationProduct) {
    return await Product.create(data);
  }

  static async deleteProductById(productId: ProductType["_id"]) {
    return await Product.findOneAndRemove({ productId });
  }
}
