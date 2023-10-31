const Product = require("../models/Products.models");

const ProductStatus = ["Available", "Delivered"] as const;

type Product = {
  _id: string;
  category: string;
  model: string;
  color: string;
  screen: string;
  keyboard: string;
  processor: string;
  ram: string;
  status: (typeof ProductStatus)[number];
  imgUrl: string;
  quantity: number;
  __v: number;
};

type CreationProduct = Omit<Omit<Product, "_id">, "__v">;

class ProductServices {
  static async findAllProducts(): Promise<Product[]> {
    return await Product.find();
  }

  static async findProductsById(productId: Product["_id"]): Promise<Product> {
    return await Product.findById(productId);
  }

  static async updateOneProduct(
    productId: Product["_id"],
    newData: Product
  ): Promise<Product> {
    return await Product.findByIdAndUpdate(productId, newData, { new: true });
  }

  static async createNewProduct(data: CreationProduct): Promise<Product> {
    return await Product.create(data);
  }

  static async deleteProductById(productId: Product["_id"]): Promise<Product> {
    return await Product.findOneAndRemove(productId);
  }
}

module.exports = ProductServices;
