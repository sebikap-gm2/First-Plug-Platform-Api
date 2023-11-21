import { Team } from ".";

export type TeamMember = {
  _id: string;
  firstName: string;
  img: string;
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
  teams: Team[];
  __v: number;
};

export type CreationTeamMember = Omit<TeamMember, "_id" | "__v">;
