import { z } from "zod";

export const productSchemaValidationStore = z.object({
  category: z.string().min(1),
  model: z.string().min(1),
  color: z.string().nullable(),
  screen: z.string().nullable(),
  keyboard: z.string().nullable(),
  processor: z.string().nullable(),
  ram: z.string().nullable(),
  storage: z.string().nullable(),
  gpu: z.string().nullable(),
  serialNumber: z.string().nullable(),
  price: z.string(),
  status: z.enum(["Available", "Delivered"]),
  imgUrl: z.string().optional(),
  stock: z.number(),
});

export const productCollection = z.array(productSchemaValidationStore);
