import { Team } from "../types";

export const generateMockTeam = (numberOfTeams: number): Team[] => {
  return Array.from({ length: numberOfTeams }, (_, i) => getRandomTeam(i + 1));
};

const getRandomTeam = (id: number): Team => {
  return {
    _id: id.toString(),
    name: `Team ${id}`,
    teamMembers: [],
    __v: 0,
  };
};
