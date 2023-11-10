export type UserType = {
  _id: number;
  fullname: string;
  email: string;
  password: string;
  _v: number;
};

export type ProductType = {
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
  quantity: number;
  __v: number;
};

export type TeamMemberType = {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  email: string;
  jobPosition: string;
  city: string;
  zipCode: string;
  address: string;
  appartment: string;
  joiningDate: Date;
  timeSlotForDelivery: string;
  additionalInfo: string;
  teams: string[];
  __v: number;
};

export type OrderType = {
  _id: string;
  teamMember: TeamMemberType[];
  status: [
    "order confirmed",
    "order canceled",
    "confirmation pending",
    "payment pending"
  ];
  date: Date;
  totalPrice: number;
  products: ProductType[];
  __v: number;
};

export type ShipmentType = {
  _id: string;
  fullName: string;
  date: Date;
  quantityProducts: string;
  type: string;
  trackingNumber: string;
  trackigURL: string;
  price: string;
  orders: string[];
  __v: string;
};

export type TeamType = {
  _id: string;
  name: string;
  teamMember: TeamMemberType[];
  __v: number;
};

export type CreationOrder = Omit<Omit<ProductType, "_id">, "__v">;

export type CreationUser = Omit<Omit<UserType, "_id">, "_v">;

export type CreationProduct = Omit<Omit<ProductType, "_id">, "__v">;

export type CreationShipment = Omit<Omit<ShipmentType, "_id">, "__v">;

export type CreationMember = Omit<Omit<TeamMemberType, "_id">, "v">;

export type CreationTeam = Omit<Omit<TeamType, "_id">, "__v">;
