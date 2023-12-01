import { TeamMember } from "../types";

export const generateMockTeamMembers = (numberOfTeamMembers: number) => {
  return Array.from({ length: numberOfTeamMembers }, (_, i) =>
    getRandomTeamMember(i + 1)
  );
};

const getRandomTeamMember = (id: number): TeamMember => {
  return {
    _id: id.toString(),
    firstName: `FirstName${id}`,
    img: `https://example.com/image${id}.jpg`,
    lastName: `LastName${id}`,
    dateOfBirth: getRandomDateOfBirth(),
    phone: getRandomPhoneNumber(),
    email: `email${id}@example.com`,
    jobPosition: getRandomJobPosition(),
    city: `City${id}`,
    zipCode: `ZipCode${id}`,
    address: `Address${id}`,
    appartment: `Appartment${id}`,
    joiningDate: getRandomJoiningDate(),
    timeSlotForDelivery: getRandomTimeSlot(),
    additionalInfo: `AdditionalInfo${id}`,
    teams: [],
    __v: 0,
  };
};

const getRandomDateOfBirth = (): Date => {
  const start = new Date(1970, 0, 1);
  const end = new Date(2000, 11, 31);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const getRandomPhoneNumber = (): string => {
  return "123-456-7890";
};

const getRandomJobPosition = (): string => {
  const positions = ["Developer", "Designer", "Manager", "Analyst", "Tester"];
  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
};

const getRandomJoiningDate = (): Date => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const getRandomTimeSlot = (): string => {
  const timeSlots = ["Morning", "Afternoon", "Evening"];
  const randomIndex = Math.floor(Math.random() * timeSlots.length);
  return timeSlots[randomIndex];
};
