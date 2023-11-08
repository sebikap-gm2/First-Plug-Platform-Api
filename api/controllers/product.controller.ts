import { Request, Response, NextFunction } from "express";
import ProductServices from "../services/product.services";

class ProductController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const allProducts = await ProductServices.findAllProducts();
      res.status(200).json(allProducts);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req: Request, res: Response, next: NextFunction) {
    const { idProduct } = req.params;
    try {
      const product = await ProductServices.findProductsById(idProduct);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.idProduct;
      const newData = req.body;

      const updatedProduct = await ProductServices.updateOneProduct(
        productId,
        newData
      );

      if (!updatedProduct) {
        return res.status(400).json({ message: "Product not found" });
      }

      res.status(200).json({ message: "Product update succesfully" });
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productData = req.body;

      const newProduct = await ProductServices.createNewProduct(productData);
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

export { ProductController };
