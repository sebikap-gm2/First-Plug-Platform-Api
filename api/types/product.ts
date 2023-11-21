export type Product = {
  _id: string;
  name?: string;
  description?: string;
  category?: string;
  model?: string;
  color?: string;
  screen?: string;
  keyboard?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  gpu?: string;
  serialNumber?: string;
  price?: string;
  status?: ProductStatus;
  imgUrl?: string;
  stock: number;
  __v: number;
};

export const PRODUCT_STATUSES = {
  available: "Available",
  delivered: "Delivered",
} as const;

export type ProductStatus = keyof typeof PRODUCT_STATUSES;

export type CreationProduct = Omit<Product, "_id" | "__v">;
