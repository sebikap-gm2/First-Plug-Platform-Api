const Orders = require("../models/Orders.models");

const ProductStatus = ["Available", "Delivered"] as const;
const OrderStatus = [
  "order confirmed",
  "order canceled",
  "confirmation pending",
  "payment pending",
] as const;

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

type Order = {
  _id: string;
  teamMember: string;
  status: (typeof OrderStatus)[number];
  date: Date;
  totalPrice: number;
  products: Product[];
  __v: number;
};

type CreationOrder = Omit<Omit<Product, "_id">, "__v">;

type DeleteOrder = {
  msg: string;
  deletedOrder: Order;
};

class OrderServices {
  static async getAllOrders(): Promise<Order[]> {
    return await Orders.find();
  }
  static async getOneOrder(orderId: Order["_id"]): Promise<Order> {
    return await Orders.findById(orderId);
  }

  static async createOrder(data: CreationOrder): Promise<Order> {
    return await Orders.create(data);
  }

  static async updateOrder(id: Order["_id"], data: Order): Promise<Order> {
    return await Orders.findOneAndUpdate(id, data);
  }

  static async deleteOrder(id: Order["_id"]): Promise<DeleteOrder> {
    return await Orders.findOneAndDelete(id);
  }
}

module.exports = OrderServices;
