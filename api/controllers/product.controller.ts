import { Request, Response, NextFunction } from "express";
import { createMockProduct } from "../mocks/datamocks";
import { MainService } from "../services";

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
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const product = await mainService.runCommand(
        "product",
        "findProductsById",
        id
      );

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      await mainService.runCommand("product", "updateOneProduct", {
        id,
        data: req.body,
      });

      res.status(200).json({ message: "Product update succesfully" });
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const newProduct = await mainService.runCommand(
        "product",
        "createNewProduct",
        req.body
      );
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const mainService = new MainService();

      await mainService.initalize(req.user._id);

      const deleteProduct = await mainService.runCommand(
        "product",
        "deleteProductById",
        id
      );

      res.status(200).json(deleteProduct);
    } catch (error) {
      next(error);
    }
  }
}
