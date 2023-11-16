import { TeamMember } from "./teamMember";
import { Product } from "./product";

export type Order = {
  teamMember: TeamMember[];
  status: OrderStatus;
  date: Date;
  totalPrice: number;
  products: Product[];
};

export const OrderStatuses = {
  confirmed: "Confirmed",
  canceled: "Canceled",
  confirmationPending: "Confirmation pending",
  paymentPending: "Payment pending",
} as const;

export type OrderStatus = keyof typeof OrderStatuses;

export type MongoOrder = Order & {
  _id: string;
  __v: number;
};
