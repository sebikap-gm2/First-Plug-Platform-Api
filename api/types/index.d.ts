export type User = {
  fullname: string;
  email: string;
  password: string;
};

export type MongoUser = User & {
  _id: string;
  __v: number;
};

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

export type TeamMember = {
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
};

export type MongoTeamMember = TeamMember & {
  _id: string;
  __v: number;
};

export type Order = {
  teamMember: TeamMember[];
  status: [
    "order confirmed",
    "order canceled",
    "confirmation pending",
    "payment pending"
  ];
  date: Date;
  totalPrice: number;
  products: Product[];
};

export type MongoOrder = Order & {
  _id: string;
  __v: number;
};

export type Shipment = {
  fullName: string;
  date: Date;
  quantityProducts: string;
  type: string;
  trackingNumber: string;
  trackigURL: string;
  price: string;
  orders: string[];
};

export type MongoShipment = Shipment & {
  _id: string;
  __v: number;
};

export type Team = {
  name: string;
  teamMember: TeamMember[];
};

export type MongoTeam = Team & {
  _id: string;
  __v: number;
};
