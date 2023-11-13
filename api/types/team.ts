import { TeamMember } from "./teamMember";

export type Team = {
  name: string;
  teamMember: TeamMember[];
};

export type MongoTeam = Team & {
  _id: string;
  __v: number;
};
