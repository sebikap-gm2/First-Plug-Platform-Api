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
