import { Team } from ".";

export type Member = {
  _id: string;
  firstName: string;
  img: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  jobPosition: string;
  city: string;
  zipCode: string;
  address: string;
  appartment: string;
  joiningDate: string;
  timeSlotForDelivery: string;
  additionalInfo: string;
  teams: Team[];
  __v: number;
};

export type CreationMember = Omit<Member, "_id" | "__v">;
