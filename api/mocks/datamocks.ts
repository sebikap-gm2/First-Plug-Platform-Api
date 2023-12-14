import { faker } from "@faker-js/faker";
import { Team, Member, Product, Order, Shipment, User } from "../types";

export const createMockMember = (teamCount: number = 2): Member => {
  return {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    img: faker.image.avatar(),
    dateOfBirth: faker.date.birthdate().toISOString(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    jobPosition: faker.person.jobTitle(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    address: faker.location.streetAddress(),
    appartment: faker.location.secondaryAddress(),
    joiningDate: faker.date.anytime().toISOString(),
    timeSlotForDelivery: faker.date.anytime().toISOString(),
    additionalInfo: faker.lorem.text(),
    teams: [],
    __v: 0,
  };
};

export const createMockTeam = (i: number, memberCount: number = 2): Team => {
  return {
    _id: faker.string.uuid(),
    name: generateTeamName(),
    Members: Array.from({ length: memberCount }, createMockMember),
    __v: 0,
  };
};

const generateTeamName = () => {
  const adjective = faker.commerce.productAdjective();
  const noun = faker.commerce.product();
  return `${adjective} ${noun} Team`;
};

export const createMockProduct = (): Product => {
  return {
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    model: faker.lorem.word(),
    color: faker.color.human(),
    screen: `${faker.number.int({
      min: 10,
      max: 30,
    })} inch ${faker.helpers.arrayElement(["LCD", "LED", "OLED", "QLED"])}`,
    keyboard: faker.helpers.arrayElement([
      "Mechanical",
      "Membrane",
      "Wireless",
      "Bluetooth",
    ]),
    processor: `${faker.helpers.arrayElement([
      "Intel",
      "AMD",
    ])} ${faker.lorem.word()} ${faker.number.int({ min: 1, max: 10 })}GHz`,
    ram: `${faker.number.int({ min: 4, max: 64 })}GB`,
    storage: `${faker.number.int({ min: 128, max: 2048 })}GB SSD`,
    gpu: `NVIDIA ${faker.lorem.word()} ${faker.number.int({
      min: 1,
      max: 10,
    })}GB`,
    serialNumber: faker.string.uuid(),
    price: faker.commerce.price(),
    status: faker.helpers.arrayElement(["Available", "Delivered"]),
    imgUrl: faker.image.url(),
    stock: faker.number.int({ min: 0, max: 100 }),
    __v: faker.number.int(),
  };
};

export const createMockOrder = (
  memberCount: number = 2,
  productCount: number = 2
): Order => {
  return {
    _id: faker.string.uuid(),
    members: Array.from({ length: memberCount }, createMockMember),
    status: faker.helpers.arrayElement([
      "OrderConfirmed",
      "OrderCanceled",
      "ConfirmationPending",
      "PaymentPending",
    ]),
    date: faker.date.anytime().toISOString(),
    products: Array.from({ length: productCount }, createMockProduct),
    __v: faker.number.int(),
  };
};

export const createMockShipment = (productCount: number = 2): Shipment => {
  return {
    _id: faker.string.uuid(),
    memberId: faker.string.uuid(),
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    date: faker.date.recent().toISOString(),
    status: faker.helpers.arrayElement([
      "Missing Data",
      "Delivered",
      "Preparing",
      "Avaliable",
      "Shipped",
    ]),
    type: faker.helpers.arrayElement(["Courrier", "Internal"]),
    trackingNumber: faker.string.numeric(),
    trackingURL: faker.internet.url(),
    products: Array.from({ length: productCount }, createMockProduct),
    __v: faker.number.int(),
  };
};

export const createMockUser = (): User => {
  return {
    _id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    __v: faker.number.int(),
  };
};
