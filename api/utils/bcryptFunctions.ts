import bcrypt from "bcrypt";
import { UserEntity } from "../types";

export async function validatePassword(
  user: UserEntity,
  password: string
): Promise<boolean> {
  const hashedPassword = await bcrypt.hash(password, user.salt);

  if (user.password !== hashedPassword) {
    throw new Error(`Wrong password! Please try again`);
  }

  return user.password === hashedPassword;
}

export async function generateHash(
  password: string,
  salt: string
): Promise<string> {
  return bcrypt.hash(password, salt);
}
