import z from "zod";
import { productValidation } from "../validations";

export type Product = z.infer<typeof productValidation>;

export type ProductSchema = Product & {
  _id: string;
  __v: number;
};

export const PRODUCT_STATUSES = ["Available", "Delivered"] as const;

export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

export type CreationProduct = Omit<ProductSchema, "_id" | "__v">;
