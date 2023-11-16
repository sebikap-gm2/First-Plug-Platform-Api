export type Product = {
  _id: string;
  category: string;
  model: string;
  color: string;
  screen: string;
  keyboard: string;
  processor: string;
  ram: string;
  status: ["Available", "Delivered"];
  imgUrl: string;
  stock: number;
  __v: number;
};
