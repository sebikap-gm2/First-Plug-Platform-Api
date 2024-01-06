import { JwtPayload } from "jsonwebtoken";
import { Document } from "mongoose";
import { BaseEntity } from ".";

export type User = {
  name: string;
  email: string;
  image: string;
  password: string;
  salt: string;
};

export type RegisterUser = Pick<User, "name" | "email" | "password">;

export type UserEntity = Document & User & BaseEntity;

type UserJWT = Pick<UserEntity, "_id" | "email">;

export type UserPayload = JwtPayload & UserJWT;

export type CreationUser = Omit<User, "_id" | "__v">;

