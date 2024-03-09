import { isISODate } from "../utils";
import { z } from "zod";

export const ShipmentValidation = z.object({
  fullname: z.string().min(1),
  date: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  type: z.enum(["Courrier", "Internal"]),
  trackingNumber: z.string().min(1),
  trackingURL: z.string().min(1),
  price: z.string().min(1),
  status: z.enum([
    "Missing Data",
    "Delivered",
    "Preparing",
    "Avaliable",
    "Shipped",
  ]),
});

export const ShipmentCollectionValidation = z.array(ShipmentValidation);
