import { uuid } from "minifaker";
import { Team, TeamMember } from "../types";

const createMockTeamMember = (): TeamMember => {
  return {
    _id: uuid.v4(),
    firstName: "John",
    lastName: "Doe",
    img: "path/to/image.jpg",
    dateOfBirth: new Date(),
    phone: "123-456-7890",
    email: "johndoe@example.com",
    jobPosition: "Developer",
    city: "CityName",
    zipCode: "12345",
    address: "123 Main St",
    appartment: "Apt 1",
    joiningDate: new Date(),
    timeSlotForDelivery: "9am - 5pm",
    additionalInfo: "Additional info here",
    teams: [],
    __v: 0,
  };
};

export const createMockTeam = (i: number, memberCount: number = 2): Team => {
  return {
    _id: Math.random().toString(36).substr(2, 9),
    name: `Team ${i}`,
    teamMembers: Array.from({ length: memberCount }, createMockTeamMember),
    __v: 0,
  };
};
