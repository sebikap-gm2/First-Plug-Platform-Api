import { ORDER_STATUSES } from "../types";
import { isISODate } from "../utils";
import { z } from "zod";

export const OrderValidation = z.object({
  member: z.string().min(1),
  status: z.enum(ORDER_STATUSES),
  date: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  total: z.string().min(1),
});

export const OrderCollectionValidation = z.array(OrderValidation);
