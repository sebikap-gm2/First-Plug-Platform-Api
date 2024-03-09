import { isISODate } from "../utils";
import { z } from "zod";

export const OrderValidation = z.object({
  member: z.string().min(1),
  status: z.enum([
    "Order confirmed",
    "Order canceled",
    "Confirmation pending",
    "Payment pending",
  ]),
  date: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  total: z.string().min(1),
});

export const OrderCollectionValidation = z.array(OrderValidation);
