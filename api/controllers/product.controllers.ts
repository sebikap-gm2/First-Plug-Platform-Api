const ProductServices = require("../services/product.services");

class ProductControllers {
  static async getAllProducts(req, res, next) {
    try {
      const allProducts = await ProductServices.findAllProducts();
      res.status(200).json(allProducts);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
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

  static async updateProduct(req, res, next) {
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

  static async createProduct(req, res, next) {
    try {
      const productData = req.body;

      const newProduct = await ProductServices.createNewProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { idProduct } = req.params;
      const deleteProduct = await ProductServices.deleteProductById(idProduct);

      res.status(200).json(deleteProduct);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductControllers;
