import { Member } from "./member";

export type Team = {
  _id: string;
  name: string;
  members: Member[];
  __v: number;
};

export type CreationTeam = Omit<Team, "_id" | "__v">;
