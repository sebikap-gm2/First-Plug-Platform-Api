import { BaseEntity } from ".";

export type User = {
  tenantName: string;
  name: string;
  email: string;
  image: string;
  password: string;
  salt: string;
};

export type UserEntity = User & BaseEntity;
type Required<T> = {
  [P in keyof T]-?: T[P];
};
export type UserJWT = Required<
  Pick<UserEntity, "_id" | "name" | "email" | "image">
>;

export type CreationUser = Omit<User, "salt" | "tenantName"> & {
  password?: string;
};

export type LoginUser = Pick<User, "email" | "password">;

export type validateUser = Pick<User, "password" | "salt">;

export type PayloadUser = {
  user: string;
  backendTokens: BackendTokens;
  expireIn: number;
};

export interface BackendTokens {
  accessToken: string;
  refreshToken: string;
}
