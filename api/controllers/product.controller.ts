import { Request, Response, NextFunction } from "express";
import { ProductServices } from "../services";
import { createMockProduct } from "../mocks/datamocks";

export class ProductController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const mockProducts = Array.from({ length: 10 }).map((_, i) =>
        createMockProduct()
      );
      res.status(200).json(mockProducts);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req: Request, res: Response, next: NextFunction) {
    const { idProduct } = req.params;
    try {
      const product = await ProductServices.findProductsById(idProduct);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.idProduct;
      const newData = req.body;

      await ProductServices.updateOneProduct(productId, newData);

      res.status(200).json({ message: "Product update succesfully" });
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await ProductServices.createNewProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { idProduct } = req.params;
      const deleteProduct = await ProductServices.deleteProductById(idProduct);

      res.status(200).json(deleteProduct);
    } catch (error) {
      next(error);
    }
  }
}
