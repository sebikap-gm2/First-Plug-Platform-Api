const ProductServices = require("../services/product.services");

class ProductControllers {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductServices.findAllProducts();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json({ error: "Error to found all products" });
    }
  }

  static async getProductById(req, res) {
    const { idProduct } = req.params;
    try {
      const product = await ProductServices.findProductsById(idProduct);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Error to found product" });
    }
  }

  static async updateProduct(req, res) {
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
      res.status(500).json({ error: "Error to update product" });
    }
  }

  static async createProduct(req, res) {
    try {
      const productData = req.body;

      const newProduct = await ProductServices.createNewProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Error to create new product" });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { idProduct } = req.params;
      const deleteProduct = await ProductServices.deleteProductById(idProduct);

      res.status(200).json(deleteProduct);
    } catch (error) {
      res.status(500).json({ error: "Error to delete product" });
    }
  }
}

module.exports = ProductControllers;
