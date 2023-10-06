const OrderServices = require("../services/orders.services");

class OrderControllers {
  static async getOrders(req, res, next) {
    try {
      const orders = await OrderServices.getAllOrders();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  static async getOrderById(req, res, next) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.getOneOrder(idOrder);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  static async newOrder(req, res, next) {
    try {
      const orders = await OrderServices.createOrder(req.body);

      res.status(201).json({ newOrder: orders });
    } catch (error) {
      next(error);
    }
  }
  static async updateOrder(req, res, next) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.updateOrder(idOrder, req.body);

      res.status(200).json({ updatedOrder: orders });
    } catch (error) {
      next(error);
    }
  }
  static async deleteOrder(req, res, next) {
    try {
      const { idOrder } = req.params;
      const orders = await OrderServices.deleteOrder(idOrder);

      res
        .status(200)
        .json({ msg: "Order deleted succesfully", deletedOrder: orders });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderControllers;
