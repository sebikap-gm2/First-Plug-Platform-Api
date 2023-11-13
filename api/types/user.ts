export type User = {
  fullname: string;
  email: string;
  password: string;
};

export type MongoUser = User & {
  _id: string;
  __v: number;
};
