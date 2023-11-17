import { JwtPayload } from "jsonwebtoken";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  __v: number;
};

type UserJWT = Pick<User, "_id" | "email">;

export type UserPayload = JwtPayload & UserJWT;
