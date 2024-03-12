import { SHIPMENT_STATUS, SHIPMENT_TYPE } from "../types";
import { isISODate } from "../utils";
import { z } from "zod";

export const ShipmentValidation = z.object({
  member: z.string().min(1),
  date: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  type: z.enum(SHIPMENT_TYPE),
  trackingNumber: z.string().min(1),
  trackingURL: z.string().min(1),
  price: z.string().min(1),
  status: z.enum(SHIPMENT_STATUS),
});

export const ShipmentCollectionValidation = z.array(ShipmentValidation);
