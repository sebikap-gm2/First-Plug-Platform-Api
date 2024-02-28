export type Product = {
  _id: string;
  name: string;
  description?: string;
  category: string;
  color?: string;
  screen?: string;
  keyboard?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  gpu?: string;
  serialNumber?: string;
  status: ProductStatus;
  imgUrl?: string;
  stock: number;
  __v: number;
};

export const PRODUCT_STATUSES = ["Available", "Delivered"] as const;

export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

export type CreationProduct = Omit<Product, "_id" | "__v">;
