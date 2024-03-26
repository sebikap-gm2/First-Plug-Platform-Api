import { OrderCollectionValidation } from "../validations";
import { MemberRepository, OrderRepository } from "../models";
import { CreationOrder, Order, OrderSchema } from "../types";

export class OrderServices {
  static async getAllOrders() {
    return await OrderRepository.find();
  }
  static async getOneOrder(orderId: OrderSchema["_id"]) {
    return await OrderRepository.findById(orderId);
  }

  static async createOrder(data: CreationOrder) {
    return await OrderRepository.create(data);
  }

  static async bulkCreate(data: CreationOrder[]) {
    //TODO: used in more than one place possible refactoring
    OrderCollectionValidation.parse(data);

    const memberNames = data.map((order) => order.member);
    const uniqueMemberNames = [...new Set(memberNames)];

    const members = await MemberRepository.find({
      $or: uniqueMemberNames.map((fullName) => {
        const [firstName, lastName] = fullName.split(" ");
        return {
          firstName: firstName,
          lastName: lastName,
        };
      }),
    });

    const memberMap = new Map();
    members.forEach((member) => {
      memberMap.set(member.firstName + " " + member.lastName, member);
    });

    const ordersWithMembers = data.map((order) => {
      const member = memberMap.get(order.member);
      return { ...order, member: member || null };
    });

    const validOrders = ordersWithMembers.filter(
      (order) => order.member !== null
    );

    const insertedOrders = await OrderRepository.insertMany(validOrders);

    return insertedOrders.length;
  }

  static async updateOrder({
    id,
    data,
  }: {
    id: OrderSchema["_id"];
    data: Order;
  }) {
    return await OrderRepository.findOneAndUpdate({ id }, data);
  }

  static async deleteOrder(id: OrderSchema["_id"]) {
    return await OrderRepository.findOneAndDelete({ id });
  }
}
