import { Product, PRODUCT_STATUSES } from "../types";

export const generateMockProducts = (numberOfProducts: number): Product[] => {
  return Array.from({ length: numberOfProducts }, (_, i) =>
    getRandomProduct(i + 1)
  );
};

const getRandomProduct = (id: number): Product => {
  const randomStatus = getRandomStatus();
  const randomPrice = getRandomPrice();
  const randomStock = getRandomStock();

  return {
    _id: id.toString(),
    name: `Product ${id}`,
    description: `Description for Product ${id}`,
    category: getRandomCategory(),
    model: getRandomModel(),
    color: getRandomColor(),
    screen: getRandomScreen(),
    keyboard: getRandomKeyboard(),
    processor: getRandomProcessor(),
    ram: getRandomRAM(),
    storage: getRandomStorage(),
    gpu: getRandomGPU(),
    serialNumber: `SN-${id}`,
    price: randomPrice,
    status: randomStatus,
    imgUrl: getRandomImgUrl(),
    stock: randomStock,
    __v: 0,
  };
};

const getRandomStatus = (): keyof typeof PRODUCT_STATUSES => {
  const statusKeys = Object.keys(PRODUCT_STATUSES);
  const randomIndex = Math.floor(Math.random() * statusKeys.length);
  return statusKeys[randomIndex] as keyof typeof PRODUCT_STATUSES;
};

const getRandomPrice = (): string => {
  return (Math.random() * 1000).toFixed(2);
};

const getRandomStock = (): number => {
  return Math.floor(Math.random() * 100);
};

const getRandomCategory = (): string => {
  const categories = ["Electronics", "Clothing", "Home Goods", "Books", "Toys"];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const getRandomModel = (): string => {
  return `Model-${Math.floor(Math.random() * 100)}`;
};

const getRandomColor = (): string => {
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getRandomScreen = (): string => {
  return `Screen-${Math.floor(Math.random() * 100)}`;
};

const getRandomKeyboard = (): string => {
  return `Keyboard-${Math.floor(Math.random() * 100)}`;
};

const getRandomProcessor = (): string => {
  return `Processor-${Math.floor(Math.random() * 100)}`;
};

const getRandomRAM = (): string => {
  return `RAM-${Math.floor(Math.random() * 100)}`;
};

const getRandomStorage = (): string => {
  return `Storage-${Math.floor(Math.random() * 100)}`;
};

const getRandomGPU = (): string => {
  return `GPU-${Math.floor(Math.random() * 100)}`;
};

const getRandomImgUrl = (): string => {
  // Implement logic to generate random image URLs
  return "https://example.com/image.jpg";
};
