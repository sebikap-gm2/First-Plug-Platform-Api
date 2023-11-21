import { TeamMember } from "./teamMember";
import { Product } from "./product";

export type Order = {
  _id: string;
  teamMember: TeamMember[];
  status: OrderStatus;
  date: Date;
  products: Product[];
  __v: number;
};

export const OrderStatuses = {
  confirmed: "Confirmed",
  canceled: "Canceled",
  confirmationPending: "Confirmation pending",
  paymentPending: "Payment pending",
} as const;

export type OrderStatus = keyof typeof OrderStatuses;

export type CreationOrder = Omit<Order, "_id" | "__v">;
