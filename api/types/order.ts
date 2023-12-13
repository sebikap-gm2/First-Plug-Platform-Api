import { Member } from "./member";
import { Product } from "./product";

export type Order = {
  _id: string;
  members: Member[];
  status: OrderStatus;
  date: string;
  products: Product[];
  __v: number;
};

export const ORDER_STATUSES = [
  "OrderConfirmed",
  "OrderCanceled",
  "ConfirmationPending",
  "PaymentPending",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export type CreationOrder = Omit<Order, "_id" | "__v">;
