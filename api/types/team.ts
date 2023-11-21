import { TeamMember } from "./teamMember";

export type Team = {
  _id: string;
  name: string;
  teamMember: TeamMember[];
  __v: number;
};

export type CreationTeam = Omit<Team, "_id" | "__v">;
