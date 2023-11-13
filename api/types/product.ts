export type Product = {
  category: string;
  model: string;
  color: string;
  screen: string;
  keyboard: string;
  processor: string;
  ram: string;
  status: ["Available", "Delivered"];
  imgUrl: string;
  quantity: number;
};

export type MongoProduct = Product & {
  _id: string;
  __v: number;
};
