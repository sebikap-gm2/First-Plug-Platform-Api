import { Member } from "./member";

export type Team = {
  _id: string;
  name: string;
  Members: Member[];
  __v: number;
};

export type CreationTeam = Omit<Team, "_id" | "__v">;
