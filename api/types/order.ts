import { TeamMember } from "./teamMember";
import { Product } from "./product";

export type Order = {
  teamMember: TeamMember[];
  status: [
    "order confirmed",
    "order canceled",
    "confirmation pending",
    "payment pending"
  ];
  date: Date;
  totalPrice: number;
  products: Product[];
};

export type MongoOrder = Order & {
  _id: string;
  __v: number;
};
