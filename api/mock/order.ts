import { Order, OrderStatus, OrderStatuses } from "../types";

export const generateMockOrders = (numberOfOrders: number): Order[] => {
  return Array.from({ length: numberOfOrders }, (_, i) =>
    getRandomOrder(i + 1)
  );
};

const getRandomOrder = (id: number): Order => {
  const order: Order = {
    _id: id.toString(),
    teamMembers: [],
    status: getRandomOrderStatus(),
    date: getRandomDate(),
    products: [],
    __v: 0,
  };

  return order;
};

const getRandomOrderStatus = (): OrderStatus => {
  const statuses = Object.keys(OrderStatuses) as OrderStatus[];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const getRandomDate = (): Date => {
  return new Date();
};
